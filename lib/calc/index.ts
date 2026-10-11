import defaults from '@/data/defaults.json';
const { inchesPerFoot, cubicFeetPerYard, poundsPerShortTon } = defaults;
export const UNITS = {
  inchesPerFoot: inchesPerFoot.value,
  cubicFeetPerYard: cubicFeetPerYard.value,
  poundsPerShortTon: poundsPerShortTon.value,
};
// These bounds constrain software input; they are not construction recommendations.
export const LIMITS = {
  area: 1e8,
  length: 10000,
  depth: 1200,
  density: 1000,
  percent: 100,
  loads: 1000,
  money: 1e9,
};
export function value(n: number, name: string, max = LIMITS.money, allowZero = false): number {
  if (!Number.isFinite(n) || (allowZero ? n < 0 : n <= 0) || n > max)
    throw new Error(
      `${name} must be ${allowZero ? 'zero or a positive' : 'a positive'} number no greater than ${max.toLocaleString('en-US')}.`,
    );
  return n;
}
export function roundUp(n: number, step = 1): number {
  value(n, 'Quantity', Number.MAX_SAFE_INTEGER, true);
  value(step, 'Rounding increment');
  return Math.ceil(n / step - Number.EPSILON * Math.max(1, n / step)) * step;
}
export type Section = {
  length: number;
  startWidth: number;
  endWidth: number;
  grade: number;
  measured: 'flat' | 'slope';
};
export function computeArea(sections: Section[]): number {
  if (!sections.length || sections.length > 100)
    throw new Error('Enter between 1 and 100 measurement sections.');
  const area = sections.reduce((sum, s) => {
    value(s.length, 'Length', LIMITS.length);
    value(s.startWidth, 'Start width', LIMITS.length);
    value(s.endWidth, 'End width', LIMITS.length);
    value(s.grade, 'Grade', LIMITS.percent, true);
    if (!['flat', 'slope'].includes(s.measured))
      throw new Error('Select how the length was measured.');
    const length =
      s.measured === 'flat' ? s.length * Math.sqrt(1 + (s.grade / 100) ** 2) : s.length;
    return sum + (length * (s.startWidth + s.endWidth)) / 2;
  }, 0);
  return value(area, 'Total area', LIMITS.area);
}
export type VolumeInput = { area: number; depth: number; waste: number; compaction?: number };
export function computeVolume(i: VolumeInput) {
  value(i.area, 'Area', LIMITS.area);
  value(i.depth, 'Thickness or depth', LIMITS.depth);
  value(i.waste, 'Waste allowance', LIMITS.percent, true);
  value(i.compaction ?? 0, 'Compaction allowance', LIMITS.percent, true);
  const cubicFeet =
    ((i.area * i.depth) / UNITS.inchesPerFoot) *
    (1 + i.waste / 100) *
    (1 + (i.compaction ?? 0) / 100);
  return { cubicFeet, cubicYards: cubicFeet / UNITS.cubicFeetPerYard };
}
export function computeAsphalt(i: VolumeInput & { density: number; truckCapacity?: number }) {
  value(i.density, 'Density', LIMITS.density);
  const v = computeVolume(i);
  const tons = (v.cubicFeet * i.density) / UNITS.poundsPerShortTon;
  return {
    ...v,
    tons,
    orderTons: roundUp(tons, 0.1),
    loads: i.truckCapacity === undefined ? null : deliveryLoads(tons, i.truckCapacity),
  };
}
export function deliveryLoads(tons: number, capacity: number) {
  value(tons, 'Tons');
  value(capacity, 'Truck capacity', LIMITS.loads);
  return roundUp(tons / capacity);
}
export function computeGravel(i: VolumeInput & { density: number; truckCapacity?: number }) {
  value(i.density, 'Density', LIMITS.density);
  const v = computeVolume(i);
  const tons = v.cubicYards * i.density;
  return {
    ...v,
    tons,
    orderTons: roundUp(tons, 0.1),
    loads: i.truckCapacity === undefined ? null : deliveryLoads(tons, i.truckCapacity),
  };
}
export function computeGravelLayers(
  layers: (VolumeInput & { density: number })[],
  capacity?: number,
) {
  if (!layers.length) throw new Error('Enter a base or surface layer.');
  const results = layers.map(computeGravel);
  const tons = results.reduce((sum, r) => sum + r.tons, 0);
  const cubicYards = results.reduce((sum, r) => sum + r.cubicYards, 0);
  return {
    layers: results,
    tons,
    orderTons: roundUp(tons, 0.1),
    cubicYards,
    loads: capacity === undefined ? null : deliveryLoads(tons, capacity),
  };
}
export function computeConcrete(
  i: VolumeInput & { bagYield?: number; bagSize?: number; truckCapacity?: number },
) {
  const v = computeVolume(i);
  if (i.bagYield !== undefined) value(i.bagYield, 'Bag yield', 100);
  if (i.bagSize !== undefined) value(i.bagSize, 'Bag weight', 1000);
  if (i.truckCapacity !== undefined)
    value(i.truckCapacity, 'Truck capacity in cubic yards', LIMITS.loads);
  return {
    ...v,
    bags: i.bagYield === undefined ? null : roundUp(v.cubicFeet / i.bagYield),
    bagSize: i.bagSize ?? null,
    loads: i.truckCapacity === undefined ? null : roundUp(v.cubicYards / i.truckCapacity),
  };
}
export function computeSealcoat(i: {
  area: number;
  coats: number;
  coverage: number;
  containerSize: number;
}) {
  value(i.area, 'Area', LIMITS.area);
  value(i.coats, 'Coats', 100);
  if (!Number.isInteger(i.coats)) throw new Error('Coats must be a whole number.');
  value(i.coverage, 'Product coverage', LIMITS.area);
  value(i.containerSize, 'Container size', 10000);
  const gallons = (i.area * i.coats) / i.coverage;
  return { gallons, containers: roundUp(gallons / i.containerSize) };
}
export function computeConversion(i: {
  amount: number;
  density: number;
  direction: 'yards-to-tons' | 'tons-to-yards';
}) {
  value(i.amount, 'Quantity', LIMITS.area);
  value(i.density, 'Density', LIMITS.density);
  if (!['yards-to-tons', 'tons-to-yards'].includes(i.direction))
    throw new Error('Select a conversion direction.');
  return i.direction === 'yards-to-tons'
    ? { cubicYards: i.amount, tons: i.amount * i.density }
    : { cubicYards: i.amount / i.density, tons: i.amount };
}
export function computePavers(i: {
  area: number;
  length: number;
  width: number;
  waste: number;
  baseDepth: number;
  sandDepth: number;
  baseDensity: number;
  sandDensity: number;
  compaction: number;
}) {
  value(i.length, 'Paver length in inches', 120);
  value(i.width, 'Paver width in inches', 120);
  const base = computeGravel({
    area: i.area,
    depth: i.baseDepth,
    waste: i.waste,
    compaction: i.compaction,
    density: i.baseDensity,
  });
  const sand = computeGravel({
    area: i.area,
    depth: i.sandDepth,
    waste: i.waste,
    density: i.sandDensity,
  });
  return {
    pavers: roundUp(
      (i.area / ((i.length * i.width) / UNITS.inchesPerFoot ** 2)) * (1 + i.waste / 100),
    ),
    base,
    sand,
  };
}
export type Range = { low: number; high: number };
export function range(i: Range, name: string, allowZero = true) {
  value(i.low, `${name} low`, LIMITS.money, allowZero);
  value(i.high, `${name} high`, LIMITS.money, allowZero);
  if (i.high < i.low) throw new Error(`${name} high must be at least the low value.`);
  return i;
}
export function computeCost(i: {
  area: number;
  unit: Range | null;
  tier: number | null;
  extras: Range[];
  loads?: number;
  delivery?: Range | null;
  orderYards?: number;
  minimumOrder?: number | null;
  shortLoadFee?: Range | null;
}) {
  value(i.area, 'Area', LIMITS.area);
  if (
    !i.unit ||
    i.tier === null ||
    i.delivery === null ||
    i.minimumOrder === null ||
    i.shortLoadFee === null
  )
    return null;
  range(i.unit, 'Unit price');
  value(i.tier, 'Cost area multiplier', 100);
  i.extras.forEach((e) => range(e, 'Extras'));
  const extras = i.extras.reduce((t, r) => ({ low: t.low + r.low, high: t.high + r.high }), {
    low: 0,
    high: 0,
  });
  const material = { low: i.area * i.unit.low * i.tier, high: i.area * i.unit.high * i.tier };
  const delivery = i.delivery ? range(i.delivery, 'Delivery fee') : { low: 0, high: 0 };
  const loads = i.loads === undefined ? 0 : value(i.loads, 'Truckload count', LIMITS.loads, true);
  if (!Number.isInteger(loads)) throw new Error('Truckload count must be a whole number.');
  if (i.minimumOrder !== undefined) value(i.minimumOrder, 'Supplier minimum', LIMITS.area, true);
  if (i.orderYards !== undefined) value(i.orderYards, 'Concrete order', LIMITS.area);
  if (i.shortLoadFee) range(i.shortLoadFee, 'Short-load fee');
  const shortLoad =
    i.orderYards !== undefined && i.minimumOrder !== undefined && i.orderYards < i.minimumOrder
      ? (i.shortLoadFee ?? { low: 0, high: 0 })
      : { low: 0, high: 0 };
  return {
    low: material.low + extras.low + loads * delivery.low + shortLoad.low,
    high: material.high + extras.high + loads * delivery.high + shortLoad.high,
    material,
    extras,
    delivery: { low: loads * delivery.low, high: loads * delivery.high },
    shortLoad,
  };
}
export type ComparisonSurface = {
  name: string;
  unit: Range | null;
  lifespan: Range | null;
  upkeep: string[];
  extras: Range[];
};
export function computeCompare(area: number, tier: number | null, surfaces: ComparisonSurface[]) {
  value(area, 'Area', LIMITS.area);
  if (!surfaces.length) throw new Error('Select a surface.');
  const missing: string[] = [];
  const rows = surfaces.flatMap((s) => {
    const total = computeCost({ area, tier, unit: s.unit, extras: s.extras });
    if (!total) {
      missing.push(s.name);
      return [];
    }
    if (s.lifespan) range(s.lifespan, 'Lifespan', false);
    return [
      {
        name: s.name,
        ...total,
        lifespan: s.lifespan,
        upkeep: s.upkeep,
        annual: s.lifespan
          ? { low: total.low / s.lifespan.high, high: total.high / s.lifespan.low }
          : null,
      },
    ];
  });
  return { rows, missing };
}
export function renderExample(kind: 'asphalt' | 'gravel' | 'concrete') {
  // Arithmetic fixtures supplied in Section 8.3; not recommended construction defaults.
  if (kind === 'asphalt') {
    const r = computeAsphalt({
      area: computeArea([
        { length: 20, startWidth: 20, endWidth: 20, grade: 0, measured: 'slope' },
      ]),
      depth: 2,
      density: 145,
      waste: 0,
    });
    return `20 ft × 20 ft × 2 in, at 145 lb/ft³ and 0% waste = ${r.tons.toFixed(2)} short tons; rounded purchase quantity ${r.orderTons.toFixed(1)} short tons.`;
  }
  if (kind === 'gravel') {
    const r = computeGravel({ area: 200, depth: 4, density: 1.4, waste: 0, compaction: 0 });
    return `20 ft × 10 ft × 4 in, at 1.4 short tons/yd³ and 0% allowances = ${r.cubicYards.toFixed(2)} yd³ and ${r.tons.toFixed(2)} short tons.`;
  }
  const r = computeConcrete({ area: 480, depth: 4, waste: 10 });
  return `12 ft × 40 ft × 4 in, with 10% waste = ${r.cubicYards.toFixed(2)} yd³.`;
}
