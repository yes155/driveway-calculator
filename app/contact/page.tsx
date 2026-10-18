import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
import profile from '@/data/author-profile.json';
import { LastUpdated } from '@/components/Modules';
export const metadata = metadataFor({
  title: 'Contact',
  description:
    'Contact Farrukh Abdullah with Driveway Calculators questions or correction reports. Include the page, inputs, units and displayed result.',
  url: '/contact/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">Questions &amp; corrections</span>
      <h1>Contact</h1>
      <div className="prose">
        <p>
          <strong>
            Email Farrukh Abdullah at <a href={'mailto:' + profile.email}>{profile.email}</a> for
            calculator questions and correction reports.
          </strong>
        </p>
        <p>
          Updated <LastUpdated date={profile.updatedOn} />
        </p>
        <h2>What belongs in a correction report?</h2>
        <p>
          <strong>Include these 4 details with a correction report:</strong>
        </p>
        <ul>
          <li>The page URL</li>
          <li>The input values and units</li>
          <li>The displayed result or quoted passage</li>
          <li>The issue and supporting source, when available</li>
        </ul>
        <h2>How are calculation questions checked?</h2>
        <p>
          <strong>
            Calculation questions are checked against the supplied inputs, formulas and source
            records.
          </strong>{' '}
          The <Link href="/methodology/">Methodology</Link> explains the calculation and source
          process. Read <Link href="/author/farrukh-abdullah/">Farrukh Abdullah</Link> for his
          research and writing role.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Contact', url: '/contact/' })} />
    </div>
  );
}
