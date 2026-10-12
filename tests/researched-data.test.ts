import { describe, it, expect } from 'vitest';
import { rateMoney } from '@/lib/format';
import { evaluateTool, emptyState } from '@/lib/calc/ui';
import { initialToolState, priceBook, defaultBook } from '@/lib/data';
import register from '@/data/research/register.json';
import sources from '@/data/sources.json';
import { toolExample } from '@/lib/calc/examples';
const measured = () => {
  const s = emptyState();
  s.sections[0].length = '20';
  s.sections[0].width = '20';
  return s;
};
describe('Researched prices reach the actual calculator adapter', () => {
  it('uses the intact named asphalt benchmark without a regional multiplier', () => {
    const r = evaluateTool('cost', measured(), 'asphalt');
    expect(r.metrics[0]).toMatchObject({ label: 'Estimated cost range', value: '$2,800–$5,200' });
    expect(r.missing).toBeUndefined();
  });
  it('uses explicitly quoted delivery separately from installation', () => {
    const s = measured();
    s.fields = { delivery: 'true', loads: '2', deliveryFee: '120' };
    const r = evaluateTool('cost', s, 'concrete');
    expect(r.metrics[0].value).toBe('$2,640–$4,240');
  });
  it('rejects a reversed user-quote range', () => {
    const s = measured();
    s.fields = { customRates: 'true', unitLow: '10', unitHigh: '5' };
    expect(() => evaluateTool('cost', s)).toThrow();
  });
  it('keeps quoted rates distinct from published prices', () => {
    const s = measured();
    s.fields = { customRates: 'true', unitLow: '3', unitHigh: '4' };
    const r = evaluateTool('cost', s);
    expect(r.metrics[0].value).toBe('$1,200–$1,600');
    expect(r.assumptions?.[0]).toContain('your quoted rates');
  });
  it('prevents removal being counted twice in a replacement benchmark', () => {
    const s = measured();
    s.fields.removal = 'true';
    expect(() => evaluateTool('cost', s, 'asphalt-replacement')).toThrow(/already included/);
  });
  it('hides annualized gravel and stamped-concrete costs while preserving upfront ranges', () => {
    const r = evaluateTool('compare', measured());
    expect(r.rows).toHaveLength(4);
    expect(r.rows?.find((r) => r.name === 'gravel')?.annual).toBeNull();
  });
  it('leaves unsupported material and supplier defaults unset', () => {
    expect(defaultBook.gravelDensity.value).toBeNull();
    expect(defaultBook.compaction.value).toBeNull();
    expect(priceBook.concrete.delivery.value).toBeNull();
    expect(priceBook.tiers.low.value).toBeNull();
  });
  it('separates material references and no-allowance inputs', () => {
    const s = initialToolState('asphalt', 'asphalt');
    expect(s.fields.density).toBe('148');
    expect(s.fields.waste).toBe('0');
    expect(initialToolState('asphalt', 'asphalt millings').fields.density).toBeUndefined();
  });
  it('generates product-specific sealcoat and bag examples through the adapter', () => {
    expect(toolExample('sealcoat').result.metrics[0].label).toBe('Sealcoat needed');
    expect(toolExample('concrete').result.metrics.some((m) => m.label === 'Bags to buy')).toBe(
      true,
    );
  });
});
describe('Research evidence integrity', () => {
  it('preserves cents in unit rates', () => {
    expect(rateMoney(1.25)).toBe('$1.25');
    expect(rateMoney(1.5)).toBe('$1.50');
  });
  const ids = new Set(sources.map((s) => s.id));
  it('resolves every observation to a named URL and retrieval date', () => {
    for (const o of register.observations) {
      expect(ids.has(o.sourceId)).toBe(true);
      const s = sources.find((s) => s.id === o.sourceId)!;
      expect(s.url).toMatch(/^https?:\/\//);
      expect(s.retrievedOn).toBe('2026-10-12');
      expect(o.location).toBeTruthy();
    }
  });
  it('preserves unresolved decisions as missing rather than synthesizing prices', () => {
    for (const d of register.decisions.filter((d) => d.status === 'NOT FOUND')) {
      expect(d.selectedHigh).toBeNull();
    }
  });
});
