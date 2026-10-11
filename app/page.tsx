import Link from 'next/link';
import { pages, getPage } from '@/lib/content';
import { pageMetadata } from '@/lib/page';
import { breadcrumbs, JsonLd } from '@/lib/seo';
import HeroCollage from '@/components/HeroCollage';
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
    line: 'Thickness. Tonnage. Base work.',
    href: '/asphalt-driveway-cost/',
  },
  {
    key: 'concrete' as const,
    label: 'Concrete',
    line: 'Volume. Finish. Reinforcement.',
    href: '/concrete-driveway-cost/',
  },
  {
    key: 'gravel' as const,
    label: 'Gravel',
    line: 'Layers. Material weight. Delivery.',
    href: '/gravel-driveway-cost/',
  },
  {
    key: 'paver' as const,
    label: 'Pavers',
    line: 'Paver size. Base. Bedding sand.',
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
    question: 'Are driveway price ranges available in this preview?',
    answer:
      'Price ranges remain unavailable until verified source records are added. Quantity calculators work with your measurements and material values. Cost calculators calculate measured area while pricing is unavailable.',
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
        <div className="hero-halo" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow hero-kicker">
            <span className="accent-dot" />
            Your driveway, worked out.
          </span>
          <h1>
            Driveway
            <br />
            <em>Calculators.</em>
          </h1>
          <p className="hero-description">
            Your measurements. Your materials. The math in view.
            <br />
            Free tools for asphalt, concrete, gravel, and pavers.
          </p>
          <div className="hero-actions">
            <Link href="/asphalt-calculator/" className="button primary">
              Start calculating <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="hero-footnote">
            US units <span>·</span> Editable inputs <span>·</span> No sign-up
          </p>
        </div>
        <HeroCollage />
        <span className="hero-handwritten" aria-hidden="true">
          a little planning.
          <br />a clearer order. ↗
        </span>
      </section>
      <section className="project-intro section-wrap">
        <div className="planning-list">
          <div className="planning-row">
            <span className="step-check" aria-hidden="true">
              ✓
            </span>
            Measure each section <span>01</span>
          </div>
          <div className="planning-row">
            <span className="step-check" aria-hidden="true">
              ✓
            </span>
            Choose your material <span>02</span>
          </div>
          <div className="planning-row planning-active">
            <span className="step-check" aria-hidden="true">
              ↗
            </span>
            See the quantity and formula <span>03</span>
          </div>
          <div className="planning-row">
            <span className="step-check" aria-hidden="true">
              ✓
            </span>
            Check the supplier values <span>04</span>
          </div>
          <Link className="planning-link" href="/methodology/">
            The calculation method <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="intro-copy">
          <span className="eyebrow">Start with the measurements</span>
          <h2>
            One project.
            <br />
            Every input,
            <br />
            <mark>in view.</mark>
          </h2>
          <p>
            From the first measurement to material quantities. Keep the dimensions, density,
            allowances, and formula together.
          </p>
          <span className="handwritten">measure first. order second.</span>
        </div>
      </section>
      <section className="home-section workbench-section" id="workbench">
        <div className="section-title">
          <span className="eyebrow">Meet your workbench</span>
          <h2>
            Your material.
            <br />
            <mark>Your calculator.</mark>
          </h2>
          <p>Pick a tool. Enter your measurements. Inspect the result.</p>
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
      <section className="home-section steps-section">
        <div className="section-title">
          <span className="eyebrow">A calculation you can follow</span>
          <h2>
            Measure. Enter.
            <br />
            <mark>Understand.</mark>
          </h2>
        </div>
        <div className="process-grid">
          <div className="process-card">
            <span className="process-number">01</span>
            <h3>Map the area.</h3>
            <p>
              Enter length and width. Add sections for an irregular driveway, or use different end
              widths for a taper.
            </p>
            <span className="process-equation">L × W → ft²</span>
          </div>
          <div className="process-card">
            <span className="process-number">02</span>
            <h3>Set the inputs.</h3>
            <p>
              Enter your depth and allowances. Use supplier density or product-label yield and
              coverage.
            </p>
            <span className="process-equation">Area × depth → volume</span>
          </div>
          <div className="process-card">
            <span className="process-number">03</span>
            <h3>Read the result.</h3>
            <p>
              See quantities, purchase rounding, and the formula. Copy, print, or share the
              calculation.
            </p>
            <span className="process-equation">Volume × density → weight</span>
          </div>
        </div>
      </section>
      <div className="lime-ticker" aria-label="Calculator features">
        <span>
          US units <b aria-hidden="true">✳</b> Your supplier values <b aria-hidden="true">✳</b>{' '}
          Visible formulas <b aria-hidden="true">✳</b> Separate layers <b aria-hidden="true">✳</b>{' '}
          Copy. Print. Share.
        </span>
      </div>
      <section className="purpose-section">
        <span className="eyebrow">The method behind the number</span>
        <h2>
          Every measurement.
          <br />
          Every allowance.
          <br />
          <mark>Out in the open.</mark>
        </h2>
        <p>
          The tools show the math behind the result. Material density, yield, and coverage follow
          the values you supply.
        </p>
        <Link href="/methodology/" className="button primary">
          Explore the method <span aria-hidden="true">↗</span>
        </Link>
        <span className="purpose-formula formula-left" aria-hidden="true">
          ft² × in
          <br />
          <strong>÷ 12 ÷ 27</strong>
          <span>cubic yards</span>
        </span>
        <span className="purpose-formula formula-right" aria-hidden="true">
          yd³ × density
          <br />
          <strong>= short tons</strong>
          <span>supplier values</span>
        </span>
      </section>
      <section className="home-section surface-section" id="surfaces">
        <div className="section-title">
          <span className="eyebrow">Plan by surface</span>
          <h2>
            Different materials.
            <br />
            <mark>Different inputs.</mark>
          </h2>
          <p>
            Explore the matching cost guide for your surface. Price ranges await verified source
            data.
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
      <section className="home-section library-section" id="library">
        <div className="section-title">
          <span className="eyebrow">More ways to work it out</span>
          <h2>
            The full
            <br />
            <mark>tool library.</mark>
          </h2>
          <p>Quantity calculators, cost tools, and material references in one place.</p>
        </div>
        <div className="library-grid">
          {[
            { label: 'Quantity calculators', filter: (t: string) => t === 'Quantity tool' },
            { label: 'Cost estimators', filter: (t: string) => /estimator|Compare/.test(t) },
            {
              label: 'Material references',
              filter: (t: string) => /Reference|Converter|Spec/.test(t),
            },
          ].map((g) => (
            <div className="library-column" key={g.label}>
              <h3>{g.label}</h3>
              {pages
                .filter((p) => g.filter(p.type) && p.seq !== 1)
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
        <h2>FAQs.</h2>
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
      <section className="home-section final-cta">
        <span className="eyebrow">Your next step</span>
        <h2>
          Start with
          <br />
          <mark>a measurement.</mark>
        </h2>
        <p>Choose a material calculator and work through your project.</p>
        <Link href="/asphalt-calculator/" className="button primary">
          Start calculating <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <JsonLd data={breadcrumbs(getPage('/'))} />
    </>
  );
}
