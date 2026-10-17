import type { PageRecord } from './content';

export const navigationLabels = [
  'Costs',
  'Calculators',
  'Materials',
  'Repair & Maintenance',
] as const;

export type NavigationLabel = (typeof navigationLabels)[number];

type NavigationPage = Pick<PageRecord, 'url' | 'type' | 'h1'>;
export type NavigationGroup = {
  label: NavigationLabel;
  links: { href: string; label: string }[];
};

// Each mapped URL has exactly one primary menu home. The homepage and
// Methodology already have permanent header-brand and footer links.
const installationGuides = new Set([
  '/gravel-driveway/',
  '/how-to-lay-an-asphalt-driveway/',
]);
const maintenanceGuides = new Set([
  '/how-to-repair-concrete-driveway-cracks/',
  '/how-to-repair-asphalt-driveway-cracks/',
  '/how-to-seal-a-driveway/',
]);
const maintenanceReferences = new Set([
  '/asphalt-driveway-maintenance/',
  '/driveway-drainage/',
]);

export function navigationGroupFor(page: NavigationPage): NavigationLabel | null {
  if (page.url === '/' || page.url === '/methodology/') return null;
  switch (page.type) {
    case 'Cost guide':
    case 'Cost hub':
    case 'Pillar':
    case 'Comparison':
      return 'Costs';
    case 'Cost estimator':
    case 'Compare estimator':
    case 'Quantity tool':
    case 'Converter':
      return 'Calculators';
    case 'Reference':
    case 'Reference table':
    case 'Spec guide':
      return 'Materials';
    case 'Product guide':
      return 'Repair & Maintenance';
    case 'How-to guide':
      if (installationGuides.has(page.url)) return 'Materials';
      if (maintenanceGuides.has(page.url)) return 'Repair & Maintenance';
      break;
    case 'Guide':
      if (maintenanceReferences.has(page.url)) return 'Repair & Maintenance';
      break;
  }
  throw new Error(
    `Unclassified navigation route ${page.url} (${page.type}). Choose exactly one menu before adding it.`,
  );
}

export function buildNavigationGroups(pages: readonly NavigationPage[]): NavigationGroup[] {
  const groups: NavigationGroup[] = navigationLabels.map((label) => ({ label, links: [] }));
  for (const page of pages) {
    const label = navigationGroupFor(page);
    if (label === null) continue;
    groups.find((group) => group.label === label)!.links.push({
      href: page.url,
      label: page.h1,
    });
  }
  return groups;
}
