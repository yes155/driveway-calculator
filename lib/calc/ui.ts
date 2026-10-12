import prices from '@/data/prices.json';
import {
  computeArea,
  computeAsphalt,
  computeGravel,
  computeGravelLayers,
  computeConcrete,
  computeSealcoat,
  computeConversion,
  computePavers,
  computeCost,
  computeCompare,
  type Section,
  type Range,
} from './index';
import { number, money } from '@/lib/format';
export type ToolKind =
  | 'asphalt'
  | 'gravel'
  | 'layers'
  | 'concrete'
  | 'sealcoat'
  | 'converter'
  | 'paver'
  | 'cost'
  | 'compare';
export type ToolState = {
  sections: {
    length: string;
    width: string;
    endWidth: string;
    grade: string;
    tapered: boolean;
    sloped: boolean;
    measured: 'flat' | 'slope';
  }[];
  fields: Record<string, string>;
  surfaces: string[];
  selectedSurface: string;
  sort: 'upfront' | 'annual';
};
export const emptyState = (): ToolState => ({
  sections: [
    {
      length: '',
      width: '',
      endWidth: '',
      grade: '',
      tapered: false,
      sloped: false,
      measured: 'flat',
    },
  ],
  fields: {},
  surfaces: ['asphalt', 'concrete', 'gravel', 'pavers'],
  selectedSurface: 'asphalt',
  sort: 'upfront',
});
export const surfaces = [
  'asphalt',
  'concrete',
  'stamped-concrete',
  'gravel',
  'pavers',
  'tar-and-chip',
] as const;
export function restoreState(raw: string): ToolState {
  if (raw.length > 20000) throw new Error('The shared measurement link is too long.');
  const state: unknown = JSON.parse(raw);
  if (!state || typeof state !== 'object')
    throw new Error('The shared measurement link is invalid.');
  const s = state as ToolState;
  if (
    !Array.isArray(s.sections) ||
    s.sections.length < 1 ||
    s.sections.length > 100 ||
    !s.fields ||
    typeof s.fields !== 'object' ||
    Array.isArray(s.fields) ||
    !Array.isArray(s.surfaces) ||
    !s.surfaces.every((x) => (surfaces as readonly string[]).includes(x)) ||
    !(surfaces as readonly string[]).includes(s.selectedSurface) ||
    !['upfront', 'annual'].includes(s.sort)
  )
    throw new Error('The shared measurement link is invalid.');
  for (const section of s.sections) {
    if (
      !section ||
      !['length', 'width', 'endWidth', 'grade'].every(
        (k) => typeof section[k as keyof typeof section] === 'string',
      ) ||
      typeof section.tapered !== 'boolean' ||
      typeof section.sloped !== 'boolean' ||
      !['flat', 'slope'].includes(section.measured)
    )
      throw new Error('The shared sections are invalid.');
  }
  if (
    !Object.values(s.fields).every((x) => typeof x === 'string' && x.length <= 100) ||
    !Object.keys(s.fields).every((x) => /^[A-Za-z]+$/.test(x))
  )
    throw new Error('The shared fields are invalid.');
  return s;
}
export type Metric = { label: string; value: string; unit?: string };
export type ToolResult = {
  area?: number;
  metrics: Metric[];
  formula: string;
  steps: string[];
  summary: string;
  missing?: string[];
  rows?: {
    name: string;
    low: number;
    high: number;
    annual: Range | null;
    lifespan: Range | null;
    upkeep: string[];
  }[];
  notice?: string;
  assumptions?: string[];
};
const known = (v: { value: number | null; verified: boolean }) => (v.verified ? v.value : null);
function n(raw: string | undefined, name: string): number {
  if (raw === undefined || raw.trim() === '') throw new Error(`Enter ${name.toLowerCase()}.`);
  const v = Number(raw);
  if (!Number.isFinite(v)) throw new Error(`Enter a valid number for ${name.toLowerCase()}.`);
  return v;
}
function ranged(
  low: { value: number | null; verified: boolean },
  high: { value: number | null; verified: boolean },
): Range | null {
  const l = known(low),
    h = known(high);
  return l === null || h === null ? null : { low: l, high: h };
}
export function evaluateTool(kind: ToolKind, state: ToolState, surface = 'asphalt'): ToolResult {
  const fields = state.fields;
  const num = (k: string, name = k) => n(fields[k], name);
  const optional = (k: string) => (fields[k]?.trim() ? num(k) : undefined);
  if (kind === 'converter') {
    const density = num('density'),
      amount = num('amount');
    const direction = fields.direction === 'tons-to-yards' ? 'tons-to-yards' : 'yards-to-tons';
    const r = computeConversion({ amount, density, direction });
    const metrics = [
      { label: 'Volume', value: number(r.cubicYards), unit: 'yd³' },
      { label: 'Weight', value: number(r.tons), unit: 'short tons' },
    ];
    return {
      metrics,
      formula:
        direction === 'yards-to-tons'
          ? `${amount} yd³ × ${density} short tons/yd³ = ${number(r.tons)} short tons`
          : `${amount} short tons ÷ ${density} short tons/yd³ = ${number(r.cubicYards)} yd³`,
      steps: [],
      summary: `${number(r.cubicYards)} yd³ = ${number(r.tons)} short tons at ${density} short tons/yd³.`,
    };
  }
  const sections: Section[] = state.sections.map((s) => ({
    length: n(s.length, 'Length'),
    startWidth: n(s.width, 'Width'),
    endWidth: n(s.tapered ? s.endWidth : s.width, 'End width'),
    grade: s.sloped ? n(s.grade, 'Grade') : 0,
    measured: s.sloped ? s.measured : 'slope',
  }));
  const area = computeArea(sections);
  if (surface.includes('replacement') && fields.removal === 'true' && fields.customRates !== 'true')
    throw new Error(
      'Removal is already included in this replacement benchmark. Use your separate quoted rates to change scope.',
    );
  const metrics: Metric[] = [{ label: 'Measured area', value: number(area), unit: 'ft²' }];
  const steps = sections.map(
    (s, i) =>
      `Section ${i + 1}: ${s.length} ft × (${s.startWidth} ft + ${s.endWidth} ft) ÷ 2${s.measured === 'flat' && s.grade ? ` × √(1 + (${s.grade}/100)²)` : ''}.`,
  );
  let formula = '';
  let missing: string[] | undefined;
  let rows: ToolResult['rows'];
  let notice: string | undefined;
  let assumptions: string[] = [];
  if (kind === 'cost' || kind === 'compare') {
    const tierName = ['low', 'average', 'high'].includes(fields.tier) ? fields.tier : 'baseline';
    const tier =
      tierName === 'baseline' ? 1 : known(prices.tiers[tierName as keyof typeof prices.tiers]);
    const list = kind === 'compare' ? state.surfaces : [surface];
    assumptions =
      kind !== 'compare' && fields.customRates === 'true'
        ? ['Unit range: your quoted rates. The published installation benchmark is not used.']
        : list.map((name) => {
            const p = prices[name as keyof typeof prices];
            return p && 'installedLow' in p
              ? `${name}: ${p.installedLow.source ?? 'price source not loaded'}; retrieved ${p.installedLow.retrievedOn ?? 'not loaded'}.`
              : name;
          });
    const mapped = list.map((name) => {
      const p = prices[name as keyof typeof prices];
      if (!p || !('installedLow' in p)) throw new Error('Select a supported surface.');
      const extras: Range[] = [];
      if (fields.removal === 'true') {
        const r =
          fields.removalLow?.trim() && fields.removalHigh?.trim()
            ? {
                low: num('removalLow', 'removal low rate'),
                high: num('removalHigh', 'removal high rate'),
              }
            : ranged(p.removalLow, p.removalHigh);
        if (!r) return { name, unit: null, lifespan: null, upkeep: [], extras };
        extras.push({ low: r.low * area, high: r.high * area });
      }
      if (fields.base === 'true') {
        const r =
          fields.baseLow?.trim() && fields.baseHigh?.trim()
            ? {
                low: num('baseLow', 'additional base low rate'),
                high: num('baseHigh', 'additional base high rate'),
              }
            : ranged(p.baseLow, p.baseHigh);
        if (!r) return { name, unit: null, lifespan: null, upkeep: [], extras };
        extras.push({ low: r.low * area, high: r.high * area });
      }
      if (fields.delivery === 'true') {
        const fee = fields.deliveryFee?.trim()
          ? num('deliveryFee', 'quoted delivery fee')
          : known(p.delivery);
        if (fee === null) return { name, unit: null, lifespan: null, upkeep: [], extras };
        const loads = num('loads', 'truckload count');
        if (!Number.isInteger(loads) || loads <= 0)
          throw new Error('Enter a positive whole truckload count.');
        extras.push({ low: fee * loads, high: fee * loads });
      }
      return {
        name,
        unit:
          kind !== 'compare' && fields.customRates === 'true'
            ? {
                low: num('unitLow', 'quoted low unit rate'),
                high: num('unitHigh', 'quoted high unit rate'),
              }
            : ranged(p.installedLow, p.installedHigh),
        lifespan: ranged(p.lifespanLow, p.lifespanHigh),
        upkeep: known(p.upkeep) === null ? [] : [`${money(p.upkeep.value!)} per year`],
        extras,
      };
    });
    if (kind === 'compare') {
      const result = computeCompare(area, tier, mapped);
      missing = result.missing;
      rows = result.rows;
      rows.sort((a, b) =>
        state.sort === 'annual'
          ? (a.annual?.low ?? Infinity) - (b.annual?.low ?? Infinity)
          : a.low - b.low,
      );
    } else {
      const p = mapped[0];
      const total = computeCost({ area, unit: p.unit, tier, extras: p.extras });
      if (!total) missing = [surface];
      else {
        metrics.push(
          {
            label: 'Estimated cost range',
            value: `${money(total.low)}–${money(total.high)}`,
            unit: 'USD',
          },
          {
            label: 'Area × unit price × tier',
            value: `${money(total.material.low)}–${money(total.material.high)}`,
          },
          {
            label: 'Selected extras',
            value: `${money(total.extras.low)}–${money(total.extras.high)}`,
          },
        );
        formula = `${number(area)} ft² × $${p.unit!.low}–$${p.unit!.high}/ft² × ${tier} + ${money(total.extras.low)}–${money(total.extras.high)} extras`;
      }
    }
    if (!formula)
      formula = 'Total = area × sourced unit price × sourced tier multiplier + selected extras';
    if (fields.removal === 'true')
      assumptions.push(
        `Removal: ${fields.removalLow || 'published low'}–${fields.removalHigh || 'published high'} USD/ft², separately selected.`,
      );
    if (fields.base === 'true')
      assumptions.push(
        `Additional base: ${fields.baseLow || 'published low'}–${fields.baseHigh || 'published high'} USD/ft², separately selected.`,
      );
    if (fields.delivery === 'true')
      assumptions.push(
        `Delivery: ${fields.loads} loads × ${fields.deliveryFee || 'published fee'} USD/load from your supplier quote.`,
      );
    notice = missing?.length
      ? 'Required price data is unavailable for selected items.'
      : 'Published benchmark estimate. Local quotes and site conditions determine the project price.';
    if (['asphalt', 'overlay', 'asphalt-replacement'].includes(surface) && fields.depth?.trim()) {
      const quantity = computeAsphalt({
        area,
        depth: num('depth'),
        density: num('density', 'producer density'),
        waste: fields.waste?.trim() ? num('waste') : 0,
      });
      metrics.push({
        label: 'Asphalt order quantity',
        value: number(quantity.orderTons),
        unit: 'short tons',
      });
      steps.push(
        'Asphalt quantity uses entered depth and density; installed unit pricing is not automatically scaled by thickness.',
      );
    }
    if (surface === 'concrete' || surface === 'slab') {
      if (fields.depth?.trim() && fields.waste?.trim()) {
        const v = computeConcrete({ area, depth: num('depth'), waste: num('waste') });
        metrics.push({ label: 'Concrete volume', value: number(v.cubicYards), unit: 'yd³' });
        if (fields.shortLoad === 'true') {
          const p = prices[surface];
          const min = fields.minimumOrder?.trim()
              ? num('minimumOrder', 'supplier minimum')
              : known(p.minimumOrder),
            fee = fields.shortLoadFee?.trim()
              ? num('shortLoadFee', 'quoted short-load fee')
              : known(p.shortLoadFee);
          if (min === null || fee === null) {
            missing = Array.from(new Set([...(missing ?? []), 'short-load fee']));
            metrics.splice(1, metrics.length - 2);
          } else if (v.cubicYards < min && !missing?.length) {
            const cost = metrics[1];
            const total = computeCost({
              area,
              unit: mapped[0].unit,
              tier,
              extras: mapped[0].extras,
              orderYards: v.cubicYards,
              minimumOrder: min,
              shortLoadFee: { low: fee, high: fee },
            });
            if (total) cost.value = `${money(total.low)}–${money(total.high)}`;
            metrics.push({ label: 'Short-load fee', value: money(fee) });
          }
        }
      } else if (fields.shortLoad === 'true')
        throw new Error('Enter thickness and waste to check the short-load fee.');
    }
  } else if (kind === 'sealcoat') {
    const coverage = num('coverage'),
      coats = num('coats'),
      containerSize = num('containerSize');
    const r = computeSealcoat({ area, coverage, coats, containerSize });
    metrics.push(
      { label: 'Sealcoat needed', value: number(r.gallons), unit: 'gal' },
      {
        label: 'Containers to buy',
        value: String(r.containers),
        unit: `${containerSize} gal each`,
      },
    );
    formula = `${number(area)} ft² × ${coats} coats ÷ ${coverage} ft²/gal = ${number(r.gallons)} gal`;
  } else if (kind === 'paver') {
    const r = computePavers({
      area,
      length: num('paverLength'),
      width: num('paverWidth'),
      waste: num('waste'),
      baseDepth: num('baseDepth'),
      sandDepth: num('sandDepth'),
      baseDensity: num('baseDensity'),
      sandDensity: num('sandDensity'),
      compaction: num('compaction'),
    });
    metrics.push(
      { label: 'Pavers to buy', value: String(r.pavers), unit: 'pieces' },
      { label: 'Base material', value: number(r.base.orderTons), unit: 'short tons' },
      { label: 'Bedding sand', value: number(r.sand.orderTons), unit: 'short tons' },
    );
    formula = `${number(area)} ft² ÷ (${fields.paverLength} in × ${fields.paverWidth} in / 144) × (1 + ${fields.waste}/100)`;
  } else if (kind === 'layers') {
    const r = computeGravelLayers(
      [
        {
          area,
          depth: num('baseDepth'),
          density: num('baseDensity'),
          waste: num('waste'),
          compaction: num('compaction'),
        },
        { area, depth: num('depth'), density: num('density'), waste: num('waste') },
      ],
      optional('capacity'),
    );
    metrics.push(
      { label: 'Combined volume', value: number(r.cubicYards), unit: 'yd³' },
      { label: 'Base volume', value: number(r.layers[0].cubicYards), unit: 'yd³' },
      { label: 'Surface volume', value: number(r.layers[1].cubicYards), unit: 'yd³' },
      { label: 'Total weight', value: number(r.tons), unit: 'short tons' },
      { label: 'Order quantity', value: number(r.orderTons), unit: 'short tons' },
    );
    if (r.loads !== null) metrics.push({ label: 'Delivery loads', value: String(r.loads) });
    formula = `Base: ${number(area)} × (${fields.baseDepth}/12) ÷ 27 × (1 + ${fields.waste}/100) × (1 + ${fields.compaction}/100); surface: ${number(area)} × (${fields.depth}/12) ÷ 27 × (1 + ${fields.waste}/100). Tons = each layer's yd³ × its density.`;
  } else {
    const depth = num('depth'),
      waste = num('waste');
    if (kind === 'concrete') {
      const r = computeConcrete({
        area,
        depth,
        waste,
        bagYield: optional('bagYield'),
        bagSize: optional('bagSize'),
        truckCapacity: optional('capacity'),
      });
      metrics.push({ label: 'Concrete needed', value: number(r.cubicYards), unit: 'yd³' });
      if (r.bags !== null)
        metrics.push({
          label: 'Bags to buy',
          value: String(r.bags),
          unit: r.bagSize ? `${r.bagSize} lb bags` : 'bags at entered yield',
        });
      if (r.loads !== null) metrics.push({ label: 'Delivery loads', value: String(r.loads) });
      formula = `${number(area)} ft² × (${depth} in / 12) ÷ 27 × (1 + ${waste}/100) = ${number(r.cubicYards)} yd³${r.bags === null ? '' : `; bags = ceil(${number(r.cubicFeet)} ft³ ÷ ${fields.bagYield} ft³/bag)`}`;
    } else {
      const density = num('density');
      const r =
        kind === 'asphalt'
          ? computeAsphalt({ area, depth, waste, density, truckCapacity: optional('capacity') })
          : computeGravel({
              area,
              depth,
              waste,
              density,
              compaction: num('compaction'),
              truckCapacity: optional('capacity'),
            });
      metrics.push(
        { label: 'Material volume', value: number(r.cubicYards), unit: 'yd³' },
        { label: 'Calculated weight', value: number(r.tons), unit: 'short tons' },
        { label: 'Order quantity', value: number(r.orderTons), unit: 'short tons' },
      );
      if (r.loads !== null) metrics.push({ label: 'Delivery loads', value: String(r.loads) });
      formula =
        kind === 'asphalt'
          ? `${number(area)} ft² × (${depth}/12) × ${density} lb/ft³ × (1 + ${waste}/100) ÷ 2,000 = ${number(r.tons)} short tons`
          : `${number(area)} ft² × (${depth}/12) ÷ 27 × (1 + ${waste}/100) × (1 + ${fields.compaction}/100) × ${density} short tons/yd³ = ${number(r.tons)} short tons`;
    }
  }
  const comparisonSummary =
    rows
      ?.map(
        (r) =>
          `${r.name}: ${money(r.low)}–${money(r.high)}${r.annual ? `; cost per year ${money(r.annual.low)}–${money(r.annual.high)}` : ''}`,
      )
      .join('\n') ?? '';
  const order = metrics.findIndex((m) =>
    [
      'Order quantity',
      'Concrete needed',
      'Pavers to buy',
      'Sealcoat needed',
      'Estimated cost range',
    ].includes(m.label),
  );
  if (order > 0) metrics.unshift(...metrics.splice(order, 1));
  const summary =
    metrics.map((m) => `${m.label}: ${m.value} ${m.unit ?? ''}`).join('\n') +
    '\n' +
    formula +
    (comparisonSummary ? '\n' + comparisonSummary : '') +
    (missing?.length ? '\nPrice data not loaded: ' + missing.join(', ') : '');
  return { area, metrics, formula, steps, summary, missing, rows, notice, assumptions };
}
export function toolFor(seq: number): ToolKind | null {
  if ([2, 22].includes(seq)) return 'asphalt';
  if ([9, 25, 27, 29, 30].includes(seq)) return 'gravel';
  if (seq === 8) return 'layers';
  if (seq === 35) return 'concrete';
  if (seq === 21) return 'sealcoat';
  if (seq === 24) return 'converter';
  if (seq === 36) return 'paver';
  if (seq === 42) return 'compare';
  if ([3, 4, 5, 6, 7, 11, 12, 13, 15, 16, 17, 18, 19, 37, 49, 50].includes(seq)) return 'cost';
  return null;
}
export function surfaceFor(seq: number) {
  const mapped: Record<number, string> = {
    3: 'asphalt',
    4: 'asphalt',
    5: 'concrete',
    6: 'concrete',
    7: 'gravel',
    11: 'overlay',
    12: 'sealcoating',
    13: 'repair',
    15: 'concrete-replacement',
    16: 'stamped-concrete',
    17: 'pavers',
    18: 'tar-and-chip',
    19: 'millings',
    37: 'concrete-repair',
    49: 'slab',
    50: 'slab',
  };
  return mapped[seq] ?? 'asphalt';
}
