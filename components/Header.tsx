import Link from 'next/link';
import { pages } from '@/lib/content';
import Navigation from './Navigation';
const groups = [
  { label: 'Costs', filter: (type: string) => /Cost|Compare|Pillar/.test(type) },
  { label: 'Calculators', filter: (type: string) => /tool|estimator|Converter/.test(type) },
  { label: 'Materials', filter: (type: string) => /Reference|Spec/.test(type) },
  {
    label: 'Repair & Maintenance',
    filter: (_: string, url: string) => /repair|seal|maintenance|patch|filler/.test(url),
  },
];
export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Driveway Calculators home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 28 28">
              <path
                d="M6 24L11 4H17L22 24M14 7V11M14 14V18M14 21V24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
          <span>Driveway Calculators</span>
        </Link>
        <Navigation
          groups={groups.map((group) => ({
            label: group.label,
            links: pages
              .filter((page) => group.filter(page.type, page.url))
              .map((page) => ({ href: page.url, label: page.h1 })),
          }))}
        />
        <Link href="/asphalt-calculator/" className="header-tool">
          Start calculating <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
