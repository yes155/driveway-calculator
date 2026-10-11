# BUILD — Engineering build and sitewide corrections

The Instruction-set.txt and Driveway calculator.rtf were read completely. Section 10/11 precedence is implemented. The original uploads were not modified.

## Delivered

- Next.js 16.4 static export, strict TypeScript, Tailwind, MDX, Vitest, ESLint/Prettier configuration.
- The exact 51-row Section 11 page map and phase order: 10 Phase 1, 18 Phase 1b, 22 Phase 2, 1 Phase 3.
- One route and one MDX draft per mapped page; 6 supporting trust pages; sitemap, robots, and 404.
- Shared calculator engine for areas, tapered sections, slope, asphalt/millings, gravel/layers, concrete/bags, sealcoat, converters, pavers, costs, and comparisons.
- Editable supplier/label inputs, input bounds and validation, result announcements, purchase rounding, delivery loads, generated examples, irregular sections, reset, copy, print, and URL sharing.
- Disabled lead UI and Cloudflare endpoint with schema validation, consent records, D1 schema, rate limit, Turnstile, idempotency, and webhook attempts.
- Metadata, canonical URLs, breadcrumbs, Organization schema; WebApplication/Article schema reserved for published pages.
- Draft noindex controls and a launch validation gate.
- GitHub CI and Cloudflare deployment instructions.

## Sitewide corrections

- Restored the document’s title, H1, description, entity, and contextual link fields for all 51 mapped pages. Price placeholders are omitted until sourced values are supplied.
- Corrected homepage cards, dropdown labels, breadcrumbs, and related links through shared data.
- Replaced independent open menus with one active dropdown, outside-click dismissal, Escape dismissal, and dismissal when focus leaves navigation.
- Reduced calculator heading and introduction spacing through shared responsive styles. Mobile menus anchor below the header and can scroll.
- Added source-field regression checks and exported heading/title/description checks.
- Browser rendering and interaction QA remain pending because supported browser tooling is unavailable.

## Further screenshot corrections

- Draft source DATA requirements remain intact; raw placeholders and empty numeric tables are absent from visitor HTML. Draft pages show unit and quote-input guidance instead.
- Related links use each destination’s description and appear once; the repeated generic sidebar tool list is removed.
- Calculator diagrams reflect rectangular or tapered input mode; conversion tools show a conversion relationship. Optional bag and delivery sections have visible open/close affordances.
- Labels, help text, units, table copy, bylines, and source text are enlarged through shared styles.
- Draft bylines show draft status; unappointed reviewer wording and draft feedback prompts are omitted.
- Export checks reject visible DATA tokens, internal specification/review text, and multiple H1 elements.
- Source repository: https://github.com/yes155/driveway-calculator. Preview-host editing controls are outside application source.

## Executed checks

| Check | Result |
| --- | --- |
| Section 11 row and phase counts | Pass |
| TypeScript strict check | Pass |
| Vitest | 116 tests passed |
| Next.js production static export | Pass |
| Exported page heading/title/description/route/canonical/link checks | 57 pages verified |
| Generated worked examples compared with engine output | Pass |
| Launch attempt with missing data | Correctly rejected |

## Remaining work

1. Supply the DATA block and complete sourced Phase 1 page content; no final cost guide was fabricated.
2. Approve privacy/terms/disclosures and supply contact information. Appoint a reviewer only if an actual reviewer is engaged.
3. Complete browser, phone, keyboard, and performance review; run CI Lighthouse after repository setup.
4. Connect https://github.com/yes155/driveway-calculator to Cloudflare Pages and verify its build.
5. Configure Search Console/analytics as approved. Keep leads/ads disabled until approvals and integration testing are complete.

All site pages remain drafts. This is the initial engineering build, not a public launch.
