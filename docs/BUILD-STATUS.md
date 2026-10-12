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

## Project One design adaptation

- Rebuilt the homepage around the reference's centered hero, floating tilted mockups, dark introduction, mixed-color tool grid, staggered process cards, curved dark section, material gallery, lime FAQ panel, and oversized footer wordmark.
- Applied one shared off-white/charcoal/lime theme to all routes, including navigation, form controls, results, diagrams, formula panels, guide modules, bylines, sidebars, and trust pages.
- Added code-native SVG driveway illustrations and calculator preview cards, without external image or font requests.
- Added responsive layouts and a single-column phone input grid, visible keyboard focus, reduced-motion rules, and print styles.
- Export verification now requires the shared theme marker on every checked page.
- Existing calculation behavior, document metadata, and draft data gates are retained. No agency testimonials, projects, statistics, or pricing were copied.
- Browser pixel, layout, and interaction checks remain unavailable. This is a design adaptation, not a verified pixel-identical reproduction.

## Executed checks

| Check | Result |
| --- | --- |
| Section 11 row and phase counts | Pass |
| TypeScript strict check | Pass |
| Vitest | 128 tests passed |
| Next.js production static export | Pass |
| Exported page heading/title/description/route/canonical/link checks | 57 pages verified |
| Generated worked examples compared with engine output | Pass |
| Launch attempt with missing data | Correctly rejected |

## Remaining work

1. Review the source-grounded page drafts and resolve only the remaining NOT FOUND items against actual project/supplier scope.
2. Approve privacy/terms/disclosures and supply contact information. Appoint a reviewer only if an actual reviewer is engaged.
3. Complete browser, phone, keyboard, and performance review; run CI Lighthouse after repository setup.
4. Connect https://github.com/yes155/driveway-calculator to Cloudflare Pages and verify its build.
5. Configure Search Console/analytics as approved. Keep leads/ads disabled until approvals and integration testing are complete.

All site pages remain drafts. This is the initial engineering build, not a public launch.

## Researched data and corrections — October 12, 2026

- Researched 134 named sources and recorded 216 observations without averaging incompatible scopes.
- Added attributed installed rates, source-specific material defaults, product coverage choices, source comparisons, and explicit unresolved-field dispositions.
- Added source-grounded content to all 51 mapped pages, generated examples to every calculator, method-specific repair and replacement tables, and contextual links.
- Added baseline pricing without invented regional multipliers, editable quote rates, quoted delivery/short-load inputs, visible separate extras, and protection against duplicate replacement removal.
- Made primary results dominant, added result focus/phone scrolling, strengthened input borders, added early material/cost choices, reduced inner-page footer/sidebar emphasis, and preserved the reference theme.
- Added research integrity and actual calculator-adapter regression checks. Browser rendering and interaction checks remain unavailable.
- Human review and draft launch gates remain incomplete; private preview is not a public launch.
