import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'Contact',
  description: 'The contact page awaits a verified publisher contact method.',
  url: '/contact/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>Contact</h1>
      <div className="prose">
        <p>
          <strong>The contact page awaits a verified publisher contact method.</strong>
        </p>
        <p>A public contact method has not been added to this review preview.</p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Contact', url: '/contact/' })} />
    </div>
  );
}
