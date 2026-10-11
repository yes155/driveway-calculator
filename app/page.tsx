import Link from 'next/link';
import { pages, getPage, isPublic } from '@/lib/content';
import { pageMetadata } from '@/lib/page';
import { breadcrumbs, JsonLd } from '@/lib/seo';
import ShapeDiagram from '@/components/ShapeDiagram';
export const metadata = pageMetadata('/');
const featured = [
  { seq: 2, symbol: '01', description: 'Length, width, and thickness → short tons.' },
  { seq: 8, symbol: '02', description: 'Separate base and surface layers → yards and tons.' },
  { seq: 6, symbol: '03', description: 'Driveway dimensions → volume and sourced cost.' },
];
const surfaces = ['asphalt', 'concrete', 'gravel', 'paver'];
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="orange-dot" /> Your driveway, worked out.
          </span>
          <h1>
            Driveway
            <br />
            <em>Calculators.</em>
          </h1>
          <p className="hero-description">
            Driveway cost guides and material calculators. Turn your measurements into asphalt tons,
            concrete yards, and gravel quantities.
          </p>
          <div className="hero-actions">
            <Link href="/asphalt-calculator/" className="button primary">
              Calculate material <span aria-hidden="true">↗</span>
            </Link>
            <Link href="#surfaces" className="hero-link">
              Explore cost guides <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div className="hero-footnote">
            <span>US units</span>
            <span>Editable inputs</span>
            <span>Visible formulas</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-caption">
            <span className="eyebrow">Project geometry</span>
            <span className="unit-badge">ft / in</span>
          </div>
          <ShapeDiagram tapered />
          <div className="visual-footer">
            <span>AREA</span>
            <code>L × (W₁ + W₂) / 2</code>
          </div>
          <div className="visual-label">
            <span className="orange-dot" /> Measure each section. Add them together.
          </div>
        </div>
      </section>
      <section className="home-section featured-section">
        <div className="section-header">
          <div>
            <span className="eyebrow">The workbench</span>
            <h2>Start with your material.</h2>
          </div>
          <Link href="#library">
            Browse all tools <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="featured-grid">
          {featured.map((f) => {
            const p = pages.find((p) => p.seq === f.seq)!;
            return (
              <Link className="featured-card" href={p.url} key={f.seq}>
                <span className="card-number">{f.symbol} / MATERIAL TOOL</span>
                <h3>{p.h1}</h3>
                <p>{f.description}</p>
                <div className="card-bottom">
                  <span>Open calculator</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="surface-section home-section" id="surfaces">
        <div className="section-header">
          <div>
            <span className="eyebrow">Plan by surface</span>
            <h2>
              A different material.
              <br />A different set of inputs.
            </h2>
          </div>
          <p>Read the cost guide, then use its matching calculator to work through your project.</p>
        </div>
        <div className="surface-grid">
          {surfaces.map((s, i) => {
            const p = pages.find((p) => p.url === `/${s}-driveway-cost/`)!;
            return (
              <Link key={s} className={'surface-card surface-' + s} href={p.url}>
                <div className="material-swatch" aria-hidden="true" />
                <div className="surface-details">
                  <span className="eyebrow">0{i + 1} / COST GUIDE</span>
                  <h3>{p.h1}</h3>
                  <p>
                    {s === 'asphalt'
                      ? 'Thickness, tonnage, and base work.'
                      : s === 'concrete'
                        ? 'Slab thickness, finish, and reinforcement.'
                        : s === 'gravel'
                          ? 'Layers, material weight, and delivery.'
                          : 'Paver size, base material, and bedding sand.'}
                  </p>
                  <span className="surface-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="method-strip">
        <span className="eyebrow">Built around the calculation</span>
        <h2>
          See the inputs.
          <br />
          Understand the result.
        </h2>
        <div>
          <p>
            Material densities and product coverage stay editable. Cost results use approved source
            data. Every calculator displays the math behind its output.
          </p>
          <Link href="/methodology/">
            Read the Methodology <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="home-section library-section" id="library">
        <div className="section-header">
          <div>
            <span className="eyebrow">Tool library</span>
            <h2>Keep the project moving.</h2>
          </div>
          <p>Choose a quantity tool, cost estimator, or material reference.</p>
        </div>
        <div className="library-grid">
          {[
            { label: 'Quantity calculators', filter: (t: string) => t === 'Quantity tool' },
            { label: 'Cost estimators', filter: (t: string) => /estimator/.test(t) },
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
      <JsonLd data={breadcrumbs(getPage('/'))} />
    </>
  );
}
