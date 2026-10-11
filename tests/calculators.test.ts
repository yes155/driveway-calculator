import { describe, it, expect } from 'vitest';
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
  roundUp,
  renderExample,
  deliveryLoads,
} from '@/lib/calc';
import { evaluateTool, emptyState, restoreState } from '@/lib/calc/ui';
const section = { length: 20, startWidth: 20, endWidth: 20, grade: 0, measured: 'slope' as const };
// All figures in this file are arithmetic fixtures, not sourced prices or recommended defaults.
describe('Measurement geometry', () => {
  it('sums rectangular and tapered sections', () =>
    expect(computeArea([section, { ...section, length: 10, startWidth: 5, endWidth: 15 }])).toBe(
      500,
    ));
  it('corrects flat distance for slope', () =>
    expect(computeArea([{ ...section, grade: 10, measured: 'flat' }])).toBeCloseTo(
      400 * Math.sqrt(1.01),
      10,
    ));
  it('uses a slope-measured length without correcting it again', () =>
    expect(computeArea([{ ...section, grade: 10 }])).toBe(400));
  it('rejects an empty shape', () => expect(() => computeArea([])).toThrow());
  it.each([0, -1, NaN, Infinity, 10001])('rejects invalid length %s', (length) =>
    expect(() => computeArea([{ ...section, length }])).toThrow(),
  );
});
describe('Material quantities', () => {
  it('matches the asphalt fixture and practical rounding', () => {
    const r = computeAsphalt({ area: 400, depth: 2, density: 145, waste: 0 });
    expect(r.tons).toBeCloseTo(4.83333333, 6);
    expect(r.orderTons).toBeCloseTo(4.9);
  });
  it('matches the gravel fixture', () => {
    const r = computeGravel({ area: 200, depth: 4, density: 1.4, waste: 0, compaction: 0 });
    expect(r.cubicYards).toBeCloseTo(2.4691358, 6);
    expect(r.tons).toBeCloseTo(3.45679, 5);
    expect(r.orderTons).toBeCloseTo(3.5);
  });
  it('applies waste and compaction separately', () => {
    const r = computeGravel({ area: 270, depth: 12, density: 1, waste: 10, compaction: 20 });
    expect(r.cubicYards).toBeCloseTo(13.2);
  });
  it('keeps driveway layers separate before summing', () => {
    const r = computeGravelLayers(
      [
        { area: 270, depth: 12, density: 1, waste: 0 },
        { area: 270, depth: 6, density: 2, waste: 0 },
      ],
      12,
    );
    expect(r.layers).toHaveLength(2);
    expect(r.tons).toBe(20);
    expect(r.cubicYards).toBe(15);
    expect(r.loads).toBe(2);
  });
  it('rejects empty layers', () => expect(() => computeGravelLayers([])).toThrow());
  it('matches the concrete fixture', () =>
    expect(computeConcrete({ area: 480, depth: 4, waste: 10 }).cubicYards).toBeCloseTo(
      6.5185185,
      6,
    ));
  it('rounds bags from product-label yield', () =>
    expect(computeConcrete({ area: 10, depth: 12, waste: 0, bagYield: 3, bagSize: 80 }).bags).toBe(
      4,
    ));
  it('does not invent bag yield', () =>
    expect(computeConcrete({ area: 10, depth: 12, waste: 0 }).bags).toBeNull());
  it('counts delivery loads', () => {
    expect(deliveryLoads(20.1, 10)).toBe(3);
    expect(computeConcrete({ area: 540, depth: 12, waste: 0, truckCapacity: 12 }).loads).toBe(2);
  });
  it('avoids rounding exact tenths upward through floating-point noise', () =>
    expect(roundUp(0.1 + 0.2, 0.1)).toBeCloseTo(0.3));
  it.each([0, -1, NaN, Infinity, 1e9])('rejects invalid area %s', (area) => {
    expect(() => computeAsphalt({ area, depth: 2, density: 145, waste: 0 })).toThrow();
    expect(() => computeGravel({ area, depth: 4, density: 1.4, waste: 0 })).toThrow();
    expect(() => computeConcrete({ area, depth: 4, waste: 0 })).toThrow();
  });
  it.each([0, -1, NaN, Infinity])('rejects invalid density %s', (density) =>
    expect(() => computeAsphalt({ area: 400, depth: 2, density, waste: 0 })).toThrow(),
  );
  it('rejects negative allowances', () =>
    expect(() => computeGravel({ area: 200, depth: 4, density: 1.4, waste: -1 })).toThrow());
});
describe('Coverage, conversions, and pavers', () => {
  it('rounds whole sealcoat containers', () => {
    const r = computeSealcoat({ area: 400, coats: 2, coverage: 100, containerSize: 5 });
    expect(r.gallons).toBe(8);
    expect(r.containers).toBe(2);
  });
  it.each([0, -1, NaN, Infinity])('rejects bad coverage %s', (coverage) =>
    expect(() => computeSealcoat({ area: 400, coats: 1, coverage, containerSize: 5 })).toThrow(),
  );
  it('rejects fractional coat count', () =>
    expect(() =>
      computeSealcoat({ area: 400, coats: 1.5, coverage: 100, containerSize: 5 }),
    ).toThrow());
  it('converts both directions without unit mixing', () => {
    expect(computeConversion({ amount: 10, density: 1.4, direction: 'yards-to-tons' }).tons).toBe(
      14,
    );
    expect(
      computeConversion({ amount: 14, density: 1.4, direction: 'tons-to-yards' }).cubicYards,
    ).toBe(10);
  });
  it.each([0, -1, NaN, Infinity])('rejects invalid conversion %s', (amount) =>
    expect(() => computeConversion({ amount, density: 1.4, direction: 'yards-to-tons' })).toThrow(),
  );
  it('computes pavers and separate base and sand weights', () => {
    const r = computePavers({
      area: 100,
      length: 12,
      width: 12,
      waste: 10,
      baseDepth: 6,
      sandDepth: 1,
      baseDensity: 1.4,
      sandDensity: 1.2,
      compaction: 0,
    });
    expect(r.pavers).toBe(110);
    expect(r.base.tons).toBeCloseTo(((100 * 0.5) / 27) * 1.1 * 1.4);
    expect(r.sand.tons).toBeCloseTo((100 / 12 / 27) * 1.1 * 1.2);
  });
  it('rejects invalid paver dimensions', () =>
    expect(() =>
      computePavers({
        area: 100,
        length: 0,
        width: 12,
        waste: 0,
        baseDepth: 6,
        sandDepth: 1,
        baseDensity: 1,
        sandDensity: 1,
        compaction: 0,
      }),
    ).toThrow());
});
describe('Costs and surface comparison', () => {
  const base = { area: 400, unit: { low: 1, high: 2 }, tier: 1, extras: [] };
  it('matches the fixture cost range', () => {
    const r = computeCost(base);
    expect(r?.low).toBe(400);
    expect(r?.high).toBe(800);
  });
  it('adds per-load delivery and a conditional short-load fee', () => {
    const r = computeCost({
      ...base,
      loads: 2,
      delivery: { low: 10, high: 20 },
      orderYards: 2,
      minimumOrder: 3,
      shortLoadFee: { low: 30, high: 40 },
    });
    expect(r?.low).toBe(450);
    expect(r?.high).toBe(880);
  });
  it('does not apply short-load fee at the supplier minimum', () =>
    expect(
      computeCost({ ...base, orderYards: 3, minimumOrder: 3, shortLoadFee: { low: 30, high: 40 } })
        ?.low,
    ).toBe(400));
  it('hides missing prices and tier', () => {
    expect(computeCost({ ...base, unit: null })).toBeNull();
    expect(computeCost({ ...base, tier: null })).toBeNull();
    expect(computeCost({ ...base, delivery: null })).toBeNull();
  });
  it('rejects reversed ranges', () =>
    expect(() => computeCost({ ...base, unit: { low: 2, high: 1 } })).toThrow());
  it.each([0, -1, NaN, Infinity, 1e9])('rejects invalid cost area %s', (area) =>
    expect(() => computeCost({ ...base, area })).toThrow(),
  );
  it('returns the comparison fixture and hides only missing fields', () => {
    const r = computeCompare(400, 1, [
      { name: 'a', unit: base.unit, lifespan: { low: 10, high: 10 }, upkeep: [], extras: [] },
      { name: 'b', unit: null, lifespan: null, upkeep: [], extras: [] },
      { name: 'c', unit: base.unit, lifespan: null, upkeep: [], extras: [] },
    ]);
    expect(r.rows[0].annual).toEqual({ low: 40, high: 80 });
    expect(r.rows[1].annual).toBeNull();
    expect(r.missing).toEqual(['b']);
  });
  it('uses the longer lifespan for the low annual estimate', () =>
    expect(
      computeCompare(400, 1, [
        { name: 'a', unit: base.unit, lifespan: { low: 10, high: 20 }, upkeep: [], extras: [] },
      ]).rows[0].annual,
    ).toEqual({ low: 20, high: 80 }));
  it('rejects zero comparison area and an empty selection', () => {
    expect(() => computeCompare(0, 1, [])).toThrow();
    expect(() => computeCompare(400, 1, [])).toThrow();
  });
});
describe('The same engine drives page results and worked examples', () => {
  it('uses the area engine across several UI sections', () => {
    const s = emptyState();
    s.sections = [
      {
        length: '20',
        width: '10',
        endWidth: '',
        grade: '',
        tapered: false,
        sloped: false,
        measured: 'flat',
      },
      {
        length: '10',
        width: '10',
        endWidth: '',
        grade: '',
        tapered: false,
        sloped: false,
        measured: 'flat',
      },
    ];
    s.fields = { depth: '4', waste: '0', compaction: '0', density: '1.4' };
    const r = evaluateTool('gravel', s);
    expect(r.area).toBe(300);
    expect(r.metrics.find((m) => m.label === 'Calculated weight')?.value).toBe('5.19');
  });
  it('keeps the empty-price cost UI from producing an estimate', () => {
    const s = emptyState();
    s.sections[0].length = '20';
    s.sections[0].width = '20';
    const r = evaluateTool('cost', s);
    expect(r.missing).toEqual(['asphalt']);
    expect(r.metrics).toHaveLength(1);
  });
  it('restores a shared input set and rejects malformed payloads', () => {
    const s = emptyState();
    expect(restoreState(JSON.stringify(s))).toEqual(s);
    expect(() => restoreState('{}')).toThrow();
    expect(() => restoreState('x')).toThrow();
  });
  it('requires the material fields instead of assigning invented defaults', () => {
    const s = emptyState();
    s.sections[0].length = '20';
    s.sections[0].width = '20';
    expect(() => evaluateTool('asphalt', s)).toThrow('Enter depth');
  });
  it('generates examples from function results', () => {
    expect(renderExample('asphalt')).toContain(
      computeAsphalt({ area: 400, depth: 2, density: 145, waste: 0 }).tons.toFixed(2) +
        ' short tons',
    );
    expect(renderExample('gravel')).toContain(
      computeGravel({ area: 200, depth: 4, density: 1.4, waste: 0 }).cubicYards.toFixed(2) + ' yd³',
    );
    expect(renderExample('concrete')).toContain(
      computeConcrete({ area: 480, depth: 4, waste: 10 }).cubicYards.toFixed(2) + ' yd³',
    );
  });
});
