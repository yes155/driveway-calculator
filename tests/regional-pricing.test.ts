import { describe, expect, it } from 'vitest';
import { emptyState, evaluateTool, restoreState, type ToolKind } from '@/lib/calc/ui';
import prices from '@/data/prices.json';
import sources from '@/data/sources.json';
import review from '@/data/research/regional-index-review.json';

const measured = () => {
  const state = emptyState();
  state.sections[0].length = '20';
  state.sections[0].width = '20';
  return state;
};

describe('regional pricing evidence and actual calculator behavior', () => {
  it('keeps unsupported factors unavailable after the cross-publisher review', () => {
    const publishers = new Set(
      review.candidates.map((c) => sources.find((s) => s.id === c.sourceId)?.publisher),
    );
    expect(publishers.has(undefined)).toBe(false);
    expect(publishers.size).toBeGreaterThanOrEqual(3);
    expect(review.implementedRegionalAdjustments).toEqual([]);
    for (const tier of Object.values(prices.tiers)) {
      expect(tier.value).toBeNull();
      expect(tier.verified).toBe(false);
    }
  });

  it.each(['low', 'average', 'high', '1.2', 'new-york'])(
    'rejects an unsupported %s adjustment restored from a share link',
    (tier) => {
      const state = measured();
      state.fields.tier = tier;
      const restored = restoreState(JSON.stringify(state));
      for (const kind of ['cost', 'compare'] as ToolKind[])
        expect(() => evaluateTool(kind, restored)).toThrow(
          /regional price adjustment is unsupported/,
        );
      restored.fields.customRates = 'true';
      restored.fields.unitLow = '3';
      restored.fields.unitHigh = '4';
      expect(() => evaluateTool('cost', restored)).toThrow(
        /regional price adjustment is unsupported/,
      );
    },
  );

  it('uses quoted rates unchanged and adds excluded quoted extras only once', () => {
    const state = measured();
    state.fields = {
      tier: 'baseline',
      customRates: 'true',
      unitLow: '3',
      unitHigh: '4',
      delivery: 'true',
      loads: '2',
      deliveryFee: '120',
    };
    const result = evaluateTool('cost', state, 'asphalt');
    expect(result.metrics[0].value).toBe('$1,440–$1,840');
    expect(result.notice).toContain('your quoted unit rates');
    expect(result.assumptions?.join(' ')).toContain('No regional adjustment');
    expect(result.formula).not.toContain('tier');
  });

  it('retains the published asphalt and concrete comparison ranges without location scaling', () => {
    const state = measured();
    // A single-surface quote flag in a shared payload must not relabel a comparison.
    state.fields.customRates = 'true';
    state.fields.unitLow = '1';
    state.fields.unitHigh = '1';
    const result = evaluateTool('compare', state);
    expect(result.rows?.find((r) => r.name === 'asphalt')).toMatchObject({ low: 2800, high: 5200 });
    expect(result.rows?.find((r) => r.name === 'concrete')).toMatchObject({
      low: 2400,
      high: 4000,
    });
    expect(result.assumptions?.join(' ')).not.toContain('your quoted rates');
  });
});
