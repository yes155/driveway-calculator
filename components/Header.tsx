import Link from 'next/link';
import { pages } from '@/lib/content';
import Navigation from './Navigation';
import { buildNavigationGroups } from '@/lib/navigation';
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
          groups={buildNavigationGroups(pages)}
        />
        <Link href="/#workbench" className="header-tool">
          Choose a calculator <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
