import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'Terms of Use',
  description: 'These terms are in editorial preparation.',
  url: '/terms/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>Terms of Use</h1>
      <div className="prose">
        <p>
          <strong>These terms are in editorial preparation.</strong>
        </p>
        <p>
          {'Calculated quantities follow the supplied inputs. Estimates are not contractor quotes.'}
        </p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Terms of Use', url: '/terms/' })} />
    </div>
  );
}
