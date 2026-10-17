import Link from 'next/link';

const groups = [
  {
    title: 'Calculate materials',
    links: [
      ['Asphalt tons', '/asphalt-calculator/'],
      ['Concrete volume', '/concrete-calculator/'],
      ['Gravel & base layers', '/gravel-driveway-calculator/'],
      ['Pavers & bedding', '/paver-calculator/'],
      ['All material calculators', '/#workbench'],
    ],
  },
  {
    title: 'Plan your budget',
    links: [
      ['Compare driveway costs', '/driveway-cost-calculator/'],
      ['Asphalt cost guide', '/asphalt-driveway-cost/'],
      ['Concrete cost guide', '/concrete-driveway-cost/'],
      ['Gravel cost guide', '/gravel-driveway-cost/'],
      ['Paver cost guide', '/paver-driveway-cost/'],
    ],
  },
  {
    title: 'Understand the estimate',
    links: [
      ['Methodology & sources', '/methodology/'],
      ['Material weights', '/material-weights/'],
      ['About Driveway Calculators', '/about/'],
      ['Author: Farrukh Abdullah', '/author/farrukh-abdullah/'],
      ['Contact & corrections', '/contact/'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <div>
          <Link href="/" className="footer-brand">
            Driveway Calculators
          </Link>
          <p>
            Measure your driveway. Check material quantities. Compare the scope behind the cost.
          </p>
        </div>
        <ul className="footer-trust" aria-label="Calculator access">
          <li>Free calculators</li>
          <li>No login required</li>
          <li>US units &amp; USD</li>
        </ul>
      </div>
      <div className="footer-main">
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="eyebrow">{group.title}</h2>
            {group.links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <p className="footer-scope">
        Planning estimates depend on measurements, material properties and work scope. Confirm
        product values with your supplier and compare itemized local quotes.
      </p>
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
