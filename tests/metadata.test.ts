import { describe, expect, it } from 'vitest';
import reference from '@/data/source-metadata.json';
import { pages, getContent } from '@/lib/content';
import { validateMetadata } from '@/lib/metadata-validation';
describe('Source document metadata correspondence', () => {
  it.each(pages)('$url retains its own title, heading, and description', (page) => {
    expect(
      validateMetadata(
        page,
        reference.find((row) => row.url === page.url),
        getContent(page.url).data,
      ),
    ).toEqual([]);
  });
  it('keeps known calculator and later-table fields in their correct columns', () => {
    const asphalt = pages.find((page) => page.seq === 2)!;
    expect(asphalt.h1).toBe('Asphalt Calculator');
    expect(asphalt.title).toBe('Asphalt Calculator: Tons Needed for a Driveway or Lot');
    expect(asphalt.description).toBe(
      'Calculate tons of asphalt from length, width and thickness. Editable density and waste allowance. Free, no sign-up.',
    );
    const comparison = pages.find((page) => page.seq === 42)!;
    expect(comparison.h1).toBe('Driveway Cost Calculator');
    expect(comparison.description).toBe(
      'Enter your driveway size once and compare estimated cost, lifespan and upkeep for asphalt, concrete, gravel and pavers.',
    );
  });
  it('rejects the previous shifted-column import', () => {
    const correct = pages.find((page) => page.seq === 2)!;
    const broken = { ...correct, h1: correct.description, description: '3' };
    const issues = validateMetadata(
      broken,
      reference.find((row) => row.seq === 2),
      { title: broken.title, description: broken.description },
    );
    expect(issues).toContain('h1 differs from the source document.');
    expect(issues).toContain('Description is a sequence number or incomplete text.');
    expect(issues).toContain('H1 contains a paragraph rather than a page heading.');
  });
});
