import Link from 'next/link';
import { pages, getPage } from '@/lib/content';
import { pageMetadata } from '@/lib/page';
import { breadcrumbs, JsonLd } from '@/lib/seo';
import HeroAreaCheck from '@/components/HeroAreaCheck';
import MaterialGraphic from '@/components/MaterialGraphic';
export const metadata = pageMetadata('/');
const featured = [
  {
    seq: 2,
    icon: '↗',
    tone: 'dark',
    description: 'Turn length, width, and thickness into asphalt short tons.',
  },
  {
    seq: 35,
    icon: '▦',
    tone: 'lime',
    description: 'Work out concrete cubic yards and optional bag quantities.',
  },
  {
    seq: 9,
    icon: '∴',
    tone: 'cream',
    description: 'Calculate gravel volume and weight with your supplier density.',
  },
  {
    seq: 8,
    icon: '≋',
    tone: 'cream',
    description: 'Keep base and surface layers separate, then add the totals.',
  },
  {
    seq: 36,
    icon: '▤',
    tone: 'lime',
    description: 'Count pavers and calculate base material and bedding sand.',
  },
  {
    seq: 21,
    icon: '◒',
    tone: 'dark',
    description: 'Use product-label coverage to calculate gallons and containers.',
  },
];
const materials = [
  {
    key: 'asphalt' as const,
    label: 'Asphalt',
    line: 'Installed paving costs, thickness and base preparation.',
    href: '/asphalt-driveway-cost/',
  },
  {
    key: 'concrete' as const,
    label: 'Concrete',
    line: 'Installed concrete pricing, surface finish and scope.',
    href: '/concrete-driveway-cost/',
  },
  {
    key: 'gravel' as const,
    label: 'Gravel',
    line: 'Gravel surface and base costs by project area.',
    href: '/gravel-driveway-cost/',
  },
  {
    key: 'paver' as const,
    label: 'Pavers',
    line: 'Installed paver prices, material choice and base work.',
    href: '/paver-driveway-cost/',
  },
];
const faqs = [
  {
    question: 'Which units do these calculators use?',
    answer:
      'Measurements use feet and inches. Results use square feet, cubic yards, US short tons, bags, pavers, or gallons, depending on the tool.',
  },
  {
    question: 'Can I measure an irregular or tapered driveway?',
    answer:
      'Yes. Add separate measured sections and use the tapered-width option for different start and end widths. Each section contributes to the total area. Slope inputs account for the way you measured the length.',
  },
  {
    question: 'Where do I get the material density or product yield?',
    answer:
      'Use your supplier’s material density or the coverage and yield printed on the product label. The fields remain editable, so the result follows the material you are ordering.',
  },
  {
    question: 'Does the calculator include waste and compaction?',
    answer:
      'The relevant tools include separate allowance fields. Enter your project allowance, or enter 0 to exclude it. The worked calculation shows how the entered values affect the result.',
  },
  {
    question: 'Which prices do the estimators use?',
    answer:
      'The estimators use attributed published ranges with no regional adjustment. Sources differ in work scope. Delivery and supplier-specific charges come from your quote; unresolved figures remain unavailable.',
  },
  {
    question: 'Can I copy, print, or share my calculation?',
    answer:
      'Yes. Calculate a result to access copy, print, and share controls. A shared link contains the calculator inputs so you can reopen the same calculation.',
  },
];
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow hero-kicker">Free driveway planning tools</span>
          <h1>
            Driveway
            <br />
            Calculators.
          </h1>
          <p className="hero-description">
            Calculate asphalt tons, concrete cubic yards, gravel quantities, and paver counts from
            your measurements. Use the cost estimators to budget an installed driveway.
          </p>
          <div className="hero-actions">
            <Link href="#workbench" className="button primary">
              Browse material calculators <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/driveway-cost-calculator/" className="button secondary">
              Estimate driveway cost <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <ul className="hero-attributes" aria-label="Calculator features">
            <li>US units</li>
            <li>Editable assumptions</li>
            <li>Visible formulas</li>
          </ul>
        </div>
        <HeroAreaCheck />
      </section>
      <section className="home-section workbench-section" id="workbench">
        <div className="section-title">
          <span className="eyebrow">Material quantity calculators</span>
          <h2>Calculate the material you need</h2>
          <p>Choose a surface to calculate quantities in short tons, cubic yards, pavers, or gallons.</p>
        </div>
        <div className="tool-bento">
          {featured.map((f) => {
            const p = pages.find((p) => p.seq === f.seq)!;
            return (
              <Link href={p.url} className={'tool-tile tile-' + f.tone} key={f.seq}>
                <span className="tile-icon" aria-hidden="true">
                  {f.icon}
                </span>
                <h3>{p.h1}</h3>
                <p>{f.description}</p>
                <span className="tile-bottom">
                  Open calculator{' '}
                  <span className="arrow-box" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="home-section surface-section" id="surfaces">
        <div className="section-title">
          <span className="eyebrow">Driveway cost research</span>
          <h2>Driveway costs by surface</h2>
          <p>
            Read the installed-price basis, scope and cost drivers for asphalt, concrete, gravel, or
            pavers before comparing quotes.
          </p>
        </div>
        <div className="surface-gallery">
          {materials.map((m) => (
            <Link href={m.href} className={'material-card material-' + m.key} key={m.key}>
              <MaterialGraphic material={m.key} />
              <div>
                <span className="eyebrow">Cost guide</span>
                <h3>{m.label}</h3>
                <p>{m.line}</p>
                <span className="arrow-box" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-section steps-section" id="how-it-works">
        <div className="section-title">
          <span className="eyebrow">How the numbers work</span>
          <h2>How are driveway material quantities calculated?</h2>
          <p>
            Dimensions give the area. Depth gives the volume. Material density, product yield, or
            coverage converts that volume or area into an ordering quantity.
          </p>
        </div>
        <div className="process-grid">
          <div className="process-card">
            <span className="process-number">01 / Area</span>
            <h3>Measure the surface</h3>
            <p>
              Enter length and width in feet. Split irregular driveways into sections or use average
              width for a taper.
            </p>
            <span className="process-equation">Length × average width = ft²</span>
          </div>
          <div className="process-card">
            <span className="process-number">02 / Volume</span>
            <h3>Enter the layer depth</h3>
            <p>
              Add thickness in inches to calculate volume. Keep base and surface layers separate
              when they use different materials.
            </p>
            <span className="process-equation">ft² × depth (in) ÷ 12 ÷ 27 = yd³</span>
          </div>
          <div className="process-card">
            <span className="process-number">03 / Order</span>
            <h3>Use supplier specifications</h3>
            <p>
              Enter the material density, bag yield or sealer-label coverage. Review allowances
              and purchase rounding in the selected tool.
            </p>
            <span className="process-equation">Volume × specified density = weight</span>
          </div>
        </div>
        <p className="steps-method-link">
          <Link href="/methodology/">See formulas, unit conversions and source methodology →</Link>
        </p>
      </section>
      <section className="home-section library-section" id="library">
        <div className="section-title">
          <span className="eyebrow">Specialized calculations and references</span>
          <h2>More tools for specific jobs</h2>
          <p>Additional tools not shown in the featured calculator cards above.</p>
        </div>
        <div className="library-grid">
          {[
            {
              label: 'More quantity calculators',
              filter: (t: string) => t === 'Quantity tool' || t === 'Converter',
            },
            { label: 'Cost estimators', filter: (t: string) => /estimator/.test(t) },
            {
              label: 'Material references',
              filter: (t: string) => /Reference|Spec/.test(t),
            },
          ].map((g) => (
            <div className="library-column" key={g.label}>
              <h3>{g.label}</h3>
              {pages
                .filter((p) => g.filter(p.type) && p.seq !== 1 && !featured.some((f) => f.seq === p.seq))
                .map((p) => (
                  <Link href={p.url} key={p.url}>
                    <span>{p.h1}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </section>
      <section className="faq-section section-wrap" id="faqs">
        <span className="eyebrow">A few things to know</span>
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span className="faq-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="faq-footer">
          <span>Want to inspect the formulas?</span>
          <Link href="/methodology/" className="button dark-button">
            Read the method <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <JsonLd data={breadcrumbs(getPage('/'))} />
    </>
  );
}
