import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="page-container not-found">
      <span className="eyebrow">404 / Page not found</span>
      <h1>Find your next calculation.</h1>
      <p>This page is unavailable. Start with the homepage or a material calculator.</p>
      <div className="hero-actions">
        <Link href="/" className="button primary">
          Home
        </Link>
        <Link href="/asphalt-calculator/">Asphalt Calculator</Link>
        <Link href="/gravel-calculator/">Gravel Calculator</Link>
      </div>
    </div>
  );
}
