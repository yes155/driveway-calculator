import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs, authorProfileSchema } from '@/lib/seo';
import profile from '@/data/author-profile.json';
import { LastUpdated } from '@/components/Modules';
export const metadata = metadataFor({
  title: 'Farrukh Abdullah',
  description:
    'Farrukh Abdullah researches and writes Driveway Calculators guidance, worked examples, assumptions and source explanations.',
  url: '/author/farrukh-abdullah/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">{profile.role}</span>
      <h1>{profile.name}</h1>
      <div className="prose">
        <p>
          <strong>Farrukh Abdullah is an SEO specialist and research blogger.</strong> At Driveway
          Calculators, he turns source research into calculator guidance, explanations and worked
          examples.
        </p>
        <p>
          Updated <LastUpdated date={profile.updatedOn} />
        </p>
        <nav className="profile-links" aria-label="Farrukh Abdullah profiles and contact">
          <a href={profile.website}>Personal website</a>
          <a href={profile.linkedin}>LinkedIn</a>
          <a href={'mailto:' + profile.email}>Email</a>
        </nav>
        <h2>What does Farrukh do at Driveway Calculators?</h2>
        <p>
          <strong>
            Farrukh researches and writes the calculator explanations and material references.
          </strong>{' '}
          He explains the relationship between measurements, units and calculated results, and
          coordinates editorial updates and correction reports.
        </p>
        <h2>What does his editorial work cover?</h2>
        <p>
          <strong>His work covers these 4 areas:</strong>
        </p>
        <ul>
          <li>Source research and explanatory writing</li>
          <li>Input guidance, units and worked examples</li>
          <li>Assumptions and result limitations</li>
          <li>Editorial updates and correction reports</li>
        </ul>
        <h2>How are sources and corrections handled?</h2>
        <p>
          <strong>Sources retain their stated units, dates and work scope.</strong> The{' '}
          <Link href="/methodology/">Methodology</Link> explains calculation and source selection.
          The <Link href="/contact/">Contact</Link> page accepts questions and correction reports.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Farrukh Abdullah', url: '/author/farrukh-abdullah/' })} />
      <JsonLd data={authorProfileSchema()} />
    </div>
  );
}
