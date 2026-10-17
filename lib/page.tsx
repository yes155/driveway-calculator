import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPage, getContent, isPublic } from '@/lib/content';
import { metadataFor, JsonLd, breadcrumbs, pageSchema } from '@/lib/seo';
import Calculator from '@/components/Calculator';
import GuideQuickEstimate from '@/components/GuideQuickEstimate';
import { priceBook, verifiedValue } from '@/lib/data';
import HelpfulVote from '@/components/HelpfulVote';
import DraftGuidance from '@/components/DraftGuidance';
import {
  AnswerBlock,
  QASection,
  RelatedLink,
  SourceNote,
  LastUpdated,
  FormulaBox,
  AdSlot,
  Disclosure,
} from '@/components/Modules';
import { toolFor, surfaceFor } from '@/lib/calc/ui';
import { splitAnswer, orderChecklist } from '@/lib/editorial';
import relatedHandoffs from '@/data/related-handoffs.json';
import defaults from '@/data/defaults.json';
import sources from '@/data/sources.json';
import reviewers from '@/data/reviewers.json';
import {
  CostReference,
  SlabSizeExamples,
  SurfaceComparison,
  MaterialReferences,
  WeightReference,
  ResearchRegister,
  RepairReference,
  ReplacementReference,
} from '@/components/ResearchModules';
import { toolExample } from '@/lib/calc/examples';
import {
  PaverMaterialDecision,
  SealerProductDecision,
  CrackFillerDecision,
  ColdPatchDecision,
} from '@/components/DecisionTables';
const guideEstimatorBySeq: Record<number, { href: string; label: string }> = {
  3: { href: '/asphalt-driveway-cost-calculator/', label: 'asphalt driveway' },
  5: { href: '/concrete-driveway-cost-calculator/', label: 'concrete driveway' },
  49: { href: '/concrete-slab-cost-calculator/', label: 'concrete slab' },
};

export function pageMetadata(url: string) {
  const page = getPage(url);
  const data = getContent(url).data;
  return metadataFor({ ...page, title: data.title, description: data.description }, isPublic(url));
}
export async function renderPage(url: string) {
  const page = getPage(url),
    content = getContent(url),
    kind = toolFor(page.seq),
    draft = content.data.status !== 'published',
    ready = content.data.contentReady === true,
    answer = typeof content.data.answer === 'string' ? splitAnswer(content.data.answer) : null,
    checklist = kind ? orderChecklist(kind, surfaceFor(page.seq)) : [],
    guideEstimator = page.type === 'Cost guide' ? guideEstimatorBySeq[page.seq] : undefined,
    guidePrice = guideEstimator ? priceBook[surfaceFor(page.seq)] : undefined,
    guideLow = verifiedValue(guidePrice?.installedLow),
    guideHigh = verifiedValue(guidePrice?.installedHigh);
  const related = page.related.map((r) => ({ ...r, destination: getPage(r.slug) }));
  const material =
    page.seq === 22
      ? 'asphalt millings'
      : [25, 27, 29, 30].includes(page.seq)
        ? page.h1.replace(' Calculator', '').toLowerCase()
        : kind === 'asphalt'
          ? 'asphalt'
          : 'gravel';
  const reviewer = (reviewers as { slug: string; name: string; profile: string }[]).find(
    (r) => r.slug === url,
  );
  return (
    <div className={`page-container${kind ? ' tool-page' : ''}`}>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span>{page.h1}</span>
      </div>
      <header className="page-heading">
        <span className="eyebrow">
          {page.section === 'Core' ? 'Driveway planning' : 'Material workbench'} / {page.type}
        </span>
        <h1>{page.h1}</h1>
        <AnswerBlock>
          {!draft || ready ? (
            <>
              <strong>{answer?.lead}</strong>
              {answer?.context ? ` ${answer.context}` : null}
            </>
          ) : kind && kind !== 'cost' && kind !== 'compare' ? (
            <>
              <strong>
                {kind === 'converter'
                  ? 'Convert cubic yards and short tons using your material density.'
                  : kind === 'sealcoat'
                    ? 'Calculate sealcoat gallons from area and product-label coverage.'
                    : kind === 'paver'
                      ? 'Calculate pavers, base material, and bedding sand from your measurements.'
                      : 'Calculate material quantities from your measurements.'}
              </strong>{' '}
              Enter supplier or product-label values.
            </>
          ) : kind ? (
            <>
              <strong>Calculate your driveway area first.</strong> Cost ranges require verified
              price data.
            </>
          ) : (
            <>
              <strong>
                {page.type === 'Cost guide'
                  ? 'A project total combines quoted surface work with selected preparation and delivery charges.'
                  : 'This reference is in editorial preparation.'}
              </strong>{' '}
              {page.type === 'Cost guide'
                ? 'Use measured area and an itemized quote to prepare an estimate.'
                : 'Use the related calculators for measurements and material quantities.'}
            </>
          )}
        </AnswerBlock>
        <div className="byline">
          By <Link href="/author/farrukh-abdullah/">Farrukh Abdullah</Link>
          <span>·</span>
          {draft && !ready ? (
            <>
              <span>Draft preview</span>
              {ready && (
                <>
                  <span>·</span>Updated <LastUpdated date={content.data.updated} />
                </>
              )}
            </>
          ) : (
            <>
              Updated <LastUpdated date={content.data.updated} />
            </>
          )}
          {reviewer && (
            <>
              <span>·</span>Reviewed by <Link href={reviewer.profile}>{reviewer.name}</Link>
            </>
          )}
        </div>
      </header>
      {guideEstimator && guideLow !== null && guideHigh !== null && guidePrice && (
        <GuideQuickEstimate
          surfaceLabel={guideEstimator.label}
          installedLow={guideLow}
          installedHigh={guideHigh}
          source={guidePrice.installedLow.source!}
          retrievedOn={guidePrice.installedLow.retrievedOn!}
          estimatorHref={guideEstimator.href}
        />
      )}
      {guideEstimator && (guideLow === null || guideHigh === null) && (
        <p className="guide-quick-unavailable">
          A verified installed rate is unavailable. Review an itemized local quote in the{' '}
          <Link href={guideEstimator.href}>detailed estimator</Link>.
        </p>
      )}
      {kind && !guideEstimator && (
        <Calculator
          kind={kind}
          surface={surfaceFor(page.seq)}
          slug={url.replaceAll('/', '')}
          material={material}
        />
      )}
      <div className="article-layout">
        <article className="prose" id="page-explanation">
          {kind &&
            !guideEstimator &&
            (() => {
              const worked = toolExample(kind, material, surfaceFor(page.seq));
              const primary =
                kind === 'converter'
                  ? worked.result.metrics.find((metric) => metric.label === 'Weight')!
                  : worked.result.metrics[0];
              return (
                <QASection question="What does a worked example look like?">
                  <p>
                    <strong>
                      {worked.result.rows?.length
                        ? `For the illustrative 400 ft² area, the comparison shows ${worked.result.rows.map((row) => `${row.name}: ${row.low.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}–${row.high.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}`).join('; ')}.`
                        : `The illustrative inputs produce ${primary.value} ${primary.unit ?? ''} (${primary.label.toLowerCase()}).`}
                    </strong>{' '}
                    {worked.context}
                  </p>
                  <FormulaBox>
                    <code>{worked.result.formula}</code>
                    {worked.result.metrics.map((m) => (
                      <p key={m.label}>
                        {m.label}: {m.value} {m.unit}
                      </p>
                    ))}
                  </FormulaBox>
                </QASection>
              );
            })()}
          {page.seq === 1 && (
            <>
              <FormulaBox>
                Area = Σ[length × (start width + end width) / 2]
                <br />
                Slope length = flat length × √(1 + (grade / 100)²)
                <br />
                Cubic yards = area × (depth / 12) / 27 × (1 + waste / 100)
                <br />
                Asphalt short tons = cubic feet × density / 2,000
                <br />
                Aggregate short tons = cubic yards × density
                <br />
                Bags = ceiling(cubic feet / label yield per bag)
                <br />
                Gallons = area × coats / product coverage
              </FormulaBox>
              <h2>Default register</h2>
              <p>The register separates exact conversions from unverified material inputs.</p>
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Input</th>
                      <th>Value</th>
                      <th>Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(defaults).map(([k, v]) => (
                      <tr key={k}>
                        <th>{k.replace(/([A-Z])/g, ' $1')}</th>
                        <td>{v.value === null ? 'Not verified' : `${v.value} ${v.unit}`}</td>
                        <td>
                          {v.value !== null
                            ? 'Exact US unit conversion'
                            : (v.source ?? 'Supplier or product-label value required')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Unverified material values remain blank in the tools.</p>
            </>
          )}
          {draft && !ready ? (
            <DraftGuidance kind={kind} costGuide={page.type === 'Cost guide'} currentUrl={url} />
          ) : (
            <MDXRemote
              source={content.content}
              components={{
                AnswerBlock,
                FormulaBox,
                QASection,
                CostReference,
                SlabSizeExamples,
                SurfaceComparison,
                MaterialReferences,
                WeightReference,
                ResearchRegister,
                RepairReference,
                ReplacementReference,
                PaverMaterialDecision,
                SealerProductDecision,
                CrackFillerDecision,
                ColdPatchDecision,
              }}
            />
          )}
          {kind && (
            <QASection question="What needs checking before you order?">
              <p>
                <strong>Check {checklist.length} project details before placing an order.</strong>
              </p>
              <ul>
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </QASection>
          )}
          {related.length > 0 && (
            <QASection question="Which calculators and guides explain the next step?">
              {related.map((r) => (
                <RelatedLink
                  key={r.slug}
                  href={r.slug}
                  anchor={r.destination.h1}
                  relationshipText={
                    (relatedHandoffs as Record<string, Record<string, string>>)[url]?.[r.slug] ??
                    content.data.related?.find((x: { slug: string }) => x.slug === r.slug)
                      ?.annotation ??
                    r.annotation
                  }
                />
              ))}
            </QASection>
          )}
          <SourceNote>
            {draft && !ready
              ? 'Material defaults and price ranges are awaiting verified source records.'
              : content.data.sourceNames?.join('; ')}{' '}
            Read the <Link href="/methodology/">Methodology</Link> to inspect the formulas and
            source register.
          </SourceNote>
          <Disclosure />
          {(!draft || ready) && <HelpfulVote />}
        </article>
        <aside className="article-sidebar" aria-label="Page navigation">
          <nav className="side-box page-shortcuts" aria-label="On this page">
            <span className="eyebrow">On this page</span>
            {kind && !guideEstimator && <a href="#calculator">Calculator and result</a>}
            {guideEstimator && <a href="#quick-estimate">Quick budget estimate</a>}
            <a href="#page-explanation">Explanation and next steps</a>
            <Link href="/methodology/">Methodology and sources</Link>
          </nav>
          <div className="side-box">
            <span className="eyebrow">The method</span>
            <h3>Inspect the method.</h3>
            <p>Every result traces to a measurement, a formula, or a sourced material value.</p>
            <Link href="/methodology/">
              Methodology <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <AdSlot />
        </aside>
      </div>
      <JsonLd data={breadcrumbs(page)} />
      {isPublic(url) && <JsonLd data={pageSchema(page)} />}
    </div>
  );
}
