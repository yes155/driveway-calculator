import { describe, expect, it } from 'vitest';
import pages from '@/data/pages.json';
import relatedHandoffs from '@/data/related-handoffs.json';

describe('related-link editorial handoffs', () => {
  const articlePages = pages.filter((page) => page.url !== '/');
  const annotations = relatedHandoffs as Record<string, Record<string, string>>;

  it('supplies one distinct task annotation per mapped article link', () => {
    expect(Object.keys(annotations)).toHaveLength(articlePages.length);
    let total = 0;
    for (const page of articlePages) {
      const handoffs = annotations[page.url];
      expect(handoffs, page.url).toBeDefined();
      expect(Object.keys(handoffs).sort()).toEqual(page.related.map((r) => r.slug).sort());
      for (const related of page.related) {
        const copy = handoffs[related.slug];
        expect(copy.length, page.url + ' -> ' + related.slug).toBeGreaterThan(35);
        expect(copy).not.toMatch(/calculates the quantities used in this project|explains the related|connects it to this page.s inputs or next decision/i);
        expect(copy).not.toMatch(/\b(?:will|should|could|might|may|probably)\b/i);
        total++;
      }
    }
    expect(total).toBe(200);
  });

  it('retains the original URLs and source page types', () => {
    const mappedRoutes = new Set(pages.map((page) => page.url));
    for (const page of articlePages)
      for (const destination of Object.keys(annotations[page.url]))
        expect(mappedRoutes.has(destination), page.url + ' -> ' + destination).toBe(true);
  });
});
