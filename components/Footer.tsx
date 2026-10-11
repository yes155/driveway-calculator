import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link href="/" className="footer-brand">
            Driveway Calculators
          </Link>
          <p>
            Driveway cost guides and material calculators.
            <br />
            US units. Formulas you can inspect.
          </p>
        </div>
        <div>
          <span className="eyebrow">Tools</span>
          <Link href="/asphalt-calculator/">Asphalt Calculator</Link>
          <Link href="/gravel-driveway-calculator/">Gravel Driveway Calculator</Link>
          <Link href="/concrete-calculator/">Concrete Calculator</Link>
        </div>
        <div>
          <span className="eyebrow">About the site</span>
          <Link href="/methodology/">Methodology</Link>
          <Link href="/author/farrukh-abdullah/">Farrukh Abdullah</Link>
          <Link href="/contact/">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getUTCFullYear()} Driveway Calculators</span>
        <div>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/disclosure/">Disclosure</Link>
        </div>
      </div>
    </footer>
  );
}
