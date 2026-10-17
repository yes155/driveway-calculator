import { describe, expect, it } from 'vitest';
import { orderChecklist, splitAnswer } from '@/lib/editorial';

describe('answer-span formatting', () => {
  it('separates a direct answer from supporting sentences', () => {
    expect(splitAnswer('Asphalt costs $7–$13 per ft². Local scope differs.')).toEqual({
      lead: 'Asphalt costs $7–$13 per ft².',
      context: 'Local scope differs.',
    });
  });
  it('does not split a decimal or one complete answer', () => {
    expect(splitAnswer('A 1.5-inch layer uses supplier density.')).toEqual({
      lead: 'A 1.5-inch layer uses supplier density.',
      context: '',
    });
  });
});

describe('order checklists', () => {
  it('uses distinct checks by tool task', () => {
    expect(orderChecklist('asphalt')).not.toEqual(orderChecklist('concrete'));
    expect(orderChecklist('paver')).not.toEqual(orderChecklist('sealcoat'));
    expect(orderChecklist('converter')).toHaveLength(3);
    expect(orderChecklist('compare')).toHaveLength(4);
  });
  it('separates slab cost checks from a general cost estimate', () => {
    expect(orderChecklist('cost', 'slab')).not.toEqual(orderChecklist('cost', 'asphalt'));
  });
});
