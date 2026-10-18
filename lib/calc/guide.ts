import { computeArea, computeCost } from '@/lib/calc';

/**
 * Rectangular installed-work preview for a price guide. Uses the same
 * area and cost engine as the detailed estimator, with no optional extras.
 */
export function computeGuideEstimate(
  lengthFeet: number,
  widthFeet: number,
  installedLow: number,
  installedHigh: number,
) {
  const area = computeArea([
    {
      length: lengthFeet,
      startWidth: widthFeet,
      endWidth: widthFeet,
      grade: 0,
      measured: 'slope',
    },
  ]);
  const estimate = computeCost({
    area,
    unit: { low: installedLow, high: installedHigh },
    tier: 1,
    extras: [],
  });
  if (!estimate) throw new Error('A verified installed price is required.');
  return { area, low: estimate.low, high: estimate.high };
}
