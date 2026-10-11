import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'Privacy Policy',
  description: 'This policy is in editorial preparation.',
  url: '/privacy/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>Privacy Policy</h1>
      <div className="prose">
        <p>
          <strong>This policy is in editorial preparation.</strong>
        </p>
        <p>
          {
            'Calculations run in the browser. The draft site has no enabled lead collection or advertising. A verified policy describing hosting, retention, contact details, and each enabled integration is required before launch.'
          }
        </p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Privacy Policy', url: '/privacy/' })} />
    </div>
  );
}
