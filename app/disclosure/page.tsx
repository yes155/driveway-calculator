import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'Disclosure',
  description: 'Lead requests, advertising, and affiliate links are disabled in this draft.',
  url: '/disclosure/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>Disclosure</h1>
      <div className="prose">
        <p>
          <strong>
            Lead requests, advertising, and affiliate links are disabled in this draft.
          </strong>
        </p>
        <p>{'Approved relationships require clear disclosures before activation.'}</p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Disclosure', url: '/disclosure/' })} />
    </div>
  );
}
