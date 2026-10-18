import { describe, expect, it } from 'vitest';
import { pages } from '@/lib/content';
import {
  buildNavigationGroups,
  navigationGroupFor,
  navigationLabels,
} from '@/lib/navigation';

const groups = buildNavigationGroups(pages);
const assignments = groups.flatMap((group) =>
  group.links.map((link) => ({ ...link, group: group.label })),
);

describe('sitewide primary navigation', () => {
  it('shows each mapped content page in exactly one header dropdown', () => {
    const eligible = pages.filter((page) => !['/', '/methodology/'].includes(page.url));
    expect(assignments).toHaveLength(eligible.length);
    expect(new Set(assignments.map((link) => link.href)).size).toBe(eligible.length);
    expect(new Set(assignments.map((link) => link.href))).toEqual(
      new Set(eligible.map((page) => page.url)),
    );
  });

  it('keeps the four intentional dropdown groups and expected page distribution', () => {
    expect(groups.map((group) => group.label)).toEqual([...navigationLabels]);
    expect(Object.fromEntries(groups.map((group) => [group.label, group.links.length]))).toEqual({
      Costs: 17,
      Calculators: 16,
      Materials: 8,
      'Repair & Maintenance': 8,
    });
  });

  it.each([
    ['/asphalt-driveway-cost-calculator/', 'Calculators'],
    ['/concrete-driveway-cost-calculator/', 'Calculators'],
    ['/driveway-cost-calculator/', 'Calculators'],
    ['/concrete-slab-cost-calculator/', 'Calculators'],
    ['/sealcoat-calculator/', 'Calculators'],
    ['/asphalt-driveway-cost/', 'Costs'],
    ['/concrete-vs-asphalt-driveway/', 'Costs'],
    ['/driveway-repair-cost/', 'Costs'],
    ['/driveway-sealcoating-cost/', 'Costs'],
    ['/gravel-driveway/', 'Materials'],
    ['/how-to-lay-an-asphalt-driveway/', 'Materials'],
    ['/driveway-drainage/', 'Repair & Maintenance'],
    ['/driveway-crack-filler/', 'Repair & Maintenance'],
    ['/how-to-seal-a-driveway/', 'Repair & Maintenance'],
  ])('puts %s under %s only', (url, group) => {
    expect(assignments.filter((link) => link.href === url).map((link) => link.group)).toEqual([
      group,
    ]);
  });

  it('excludes home and methodology, both reachable outside dropdowns', () => {
    expect(navigationGroupFor(pages.find((page) => page.url === '/')!)).toBeNull();
    expect(navigationGroupFor(pages.find((page) => page.url === '/methodology/')!)).toBeNull();
  });

  it('rejects an unclassified new page instead of hiding it or duplicating it', () => {
    expect(() =>
      navigationGroupFor({
        url: '/new-surface/',
        type: 'Unassigned guide',
        h1: 'New surface',
      }),
    ).toThrow('Unclassified navigation route');
  });
});
