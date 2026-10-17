import { describe, expect, it } from 'vitest';
import { computeGuideEstimate } from '@/lib/calc/guide';
import { priceBook, verifiedValue } from '@/lib/data';

describe('price-guide quick estimates', () => {
  it.each([
    ['asphalt', 7, 13],
    ['concrete', 6, 10],
    ['slab', 6, 12],
  ])('uses the same verified %s installed basis as the full estimator', (surface, low, high) => {
    expect(verifiedValue(priceBook[surface].installedLow)).toBe(low);
    expect(verifiedValue(priceBook[surface].installedHigh)).toBe(high);
    expect(computeGuideEstimate(20, 20, low, high)).toEqual({
      area: 400,
      low: 400 * low,
      high: 400 * high,
    });
  });

  it('applies edited rectangular measurements without hardcoded totals', () => {
    expect(computeGuideEstimate(12, 30, 7, 13)).toEqual({
      area: 360,
      low: 2520,
      high: 4680,
    });
  });

  it.each([
    [0, 20],
    [20, 0],
    [-1, 20],
    [20, Number.NaN],
    [10001, 20],
  ])('rejects invalid rectangle dimensions %s × %s', (length, width) => {
    expect(() => computeGuideEstimate(length, width, 7, 13)).toThrow();
  });

  it('does not accept reversed or missing installed-price values', () => {
    expect(() => computeGuideEstimate(20, 20, 13, 7)).toThrow();
    expect(() => computeGuideEstimate(20, 20, Number.NaN, 13)).toThrow();
  });
});
