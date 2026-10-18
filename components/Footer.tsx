import Link from 'next/link';

const groups = [
  {
    title: 'Calculators',
    links: [
      ['Asphalt tons', '/asphalt-calculator/'],
      ['Concrete volume', '/concrete-calculator/'],
      ['Gravel & base layers', '/gravel-driveway-calculator/'],
      ['Pavers & bedding', '/paver-calculator/'],
      ['All material calculators', '/#workbench'],
    ],
  },
  {
    title: 'Driveway costs',
    links: [
      ['Compare driveway costs', '/driveway-cost-calculator/'],
      ['Asphalt cost guide', '/asphalt-driveway-cost/'],
      ['Concrete cost guide', '/concrete-driveway-cost/'],
      ['Gravel cost guide', '/gravel-driveway-cost/'],
      ['Paver cost guide', '/paver-driveway-cost/'],
    ],
  },
  {
    title: 'About & help',
    links: [
      ['Methodology & sources', '/methodology/'],
      ['Material weights', '/material-weights/'],
      ['About Driveway Calculators', '/about/'],
      ['Author: Farrukh Abdullah', '/author/farrukh-abdullah/'],
      ['Contact', '/contact/'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link href="/" className="footer-brand">
            Driveway Calculators
          </Link>
          <p>Driveway cost estimates and material quantities in US units.</p>
          <p className="footer-planning-note">
            Planning estimates. Confirm site conditions and work scope locally.
          </p>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getUTCFullYear()} Driveway Calculators</span>
        <nav aria-label="Site policies">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/disclosure/">Disclosure</Link>
        </nav>
      </div>
    </footer>
  );
}
