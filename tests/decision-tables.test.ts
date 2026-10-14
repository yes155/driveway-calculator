import { describe, expect, it } from 'vitest';
import research from '@/data/research/register.json';
import products from '@/data/product-presets.json';
import sources from '@/data/sources.json';
import prices from '@/data/prices.json';

describe('decision table evidence and page boundaries', () => {
  it.each([
    ['paversConcreteInstalled', 10, 18],
    ['paversBrickInstalled', 12, 22],
    ['paversStoneInstalled', 20, 35],
  ])('preserves Angi material-specific %s rates', (item, low, high) => {
    const source = research.observations.find(
      (row) => row.item === item && row.sourceId === 'surfaces-angi-pavers',
    );
    expect(source?.low).toBe(low);
    expect(source?.high).toBe(high);
  });

  it('does not silently substitute a material-specific price into the generic paver estimator', () => {
    expect(prices.pavers.installedLow.value).toBe(10);
    expect(prices.pavers.installedHigh.value).toBe(30);
    expect(prices.pavers.installedLow.source).toContain('HomeGuide');
  });

  it('keeps named asphalt sealer coverage and coat counts distinct', () => {
    const find = (id: string) => products.find((item) => item.id === id);
    expect(find('latex-ultra-smooth')?.coverageLowSqFtPerContainer).toBe(400);
    expect(find('latex-ultra-rough')?.coverageLowSqFtPerContainer).toBe(300);
    expect(find('henry200')?.coverageHighSqFtPerContainer).toBe(400);
    expect(find('henry200')?.coats).toBe(1);
    expect(find('master-ultra')?.coverageLowSqFtPerGallon).toBe(70);
  });

  it('keeps crack filler linear coverage distinct from patch volume coverage', () => {
    const master = research.observations.find(
      (row) => row.item === 'crackFillCoverageMasterAcrylic',
    );
    const rust = research.observations.find((row) => row.item === 'crackFillCoverageRustPatch');
    expect(master?.unit).toBe('linear ft/US gal');
    expect(rust?.unit).toContain('ft2 at 0.5 in depth');
  });

  it('retains named manufacturer source URLs for product comparisons', () => {
    const ids = [
      'defaults-latex-ultra',
      'defaults-henry-he200',
      'defaults-master-ultra',
      'defaults-dalton-2x',
      'defaults-master-crack',
      'defaults-rust-crack',
      'defaults-quikrete-patch',
      'defaults-sakrete-patch',
      'surfaces-angi-pavers',
      'surfaces-homeguide-pavers',
    ];
    for (const id of ids) {
      const source = sources.find((row) => row.id === id);
      expect(source?.url, id).toMatch(/^https:\/\//);
    }
  });
});
