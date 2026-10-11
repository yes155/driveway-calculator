import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'Farrukh Abdullah',
  description: 'Farrukh Abdullah is a researcher and writer.',
  url: '/author/farrukh-abdullah/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>Farrukh Abdullah</h1>
      <div className="prose">
        <p>
          <strong>Farrukh Abdullah is a researcher and writer.</strong>
        </p>
        <p>
          {
            'His work on this site covers source research, calculator explanations, and editorial preparation.'
          }
        </p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Farrukh Abdullah', url: '/author/farrukh-abdullah/' })} />
    </div>
  );
}
