import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'About',
  description: 'This site focuses on driveway cost guides and material quantity calculators.',
  url: '/about/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>About</h1>
      <div className="prose">
        <p>
          <strong>
            This site focuses on driveway cost guides and material quantity calculators.
          </strong>
        </p>
        <p>
          {
            'The tools use US units and show their calculation formulas. Material defaults and price ranges require source records before publication.'
          }
        </p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'About', url: '/about/' })} />
    </div>
  );
}
