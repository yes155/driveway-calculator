# Driveway Calculators

A researched draft build for **drivewaycalc.online**, using Next.js App Router, strict TypeScript, Tailwind, MDX, and a static export for Cloudflare Pages connected to GitHub.

## Mandatory source and semantic SEO instructions

Read [AGENTS.md](AGENTS.md), the preserved [instruction set](docs/source-guidance/instruction-set.txt), the [driveway source document](docs/source-guidance/driveway-calculator.txt), and [SEMANTIC-SEO-RULES.md](docs/SEMANTIC-SEO-RULES.md) before site work. [SEMANTIC-SEO-SOURCES.md](docs/SEMANTIC-SEO-SOURCES.md) records the other-project guidance actually recovered and its applicability.

The owner-supplied [microsemantic writing workflow](docs/source-guidance/microsemantic-writing-workflow.txt) now supplies the complete 14 rules. Follow Step 0 → semantic draft → lock → readability → audit as separate stages; rulebook Section 9 includes all four audit sections and the output requirements. The earlier missing-list status is resolved.

The owner's [AI SEO Implementation Framework](docs/source-guidance/ai-seo-implementation-framework.md) is mapped in rulebook Section 10. It adds visual hierarchy, intent-matched layout, QDP/QDH/QDS and measurement/planning checks. All eight modules have explicit application decisions; unsupported numeric thresholds are source hypotheses, and external campaigns remain planning-only until separately authorized.

The semantic rules cover page ownership, site structure, writing, numerical consistency, contextual linking and evidence-based audits. An automated keyword/build pass does not establish editorial approval. The current 51 pages remain drafts and need individual editorial correction/review; adding the instructions does not complete that work.

## File tree

```text
driveway-calculators/
├── app/                         # One route per map URL, homepage, trust pages
├── components/                  # Calculator UI, source and trust modules
├── content/                     # 51 MDX drafts with Section 11 keywords
├── data/
│   ├── pages.json               # 51 rows: 10 / 18 / 22 / 1 by phase
│   ├── source-metadata.json     # Document fields for regression checks
│   ├── defaults.json            # Exact conversions; other values null
│   ├── prices.json              # Prices, fees, tiers, and lifespans null
│   ├── sources.json             # Empty approved source register
│   ├── reviewers.json           # Empty; no appointed reviewer invented
│   ├── launch-checklist.json
│   └── schema.sql               # D1 lead and rate-limit tables
├── lib/calc/                    # Pure functions; UI uses this same engine
├── lib/seo/                     # Metadata and structured data
├── functions/api/lead.ts        # Cloudflare Pages Function; disabled
├── tests/                       # Arithmetic, metadata, edge cases, disabled leads
├── scripts/                     # Content, launch, and export validation
├── public/                      # Favicon and Cloudflare security headers
├── .github/workflows/checks.yml
├── docs/
│   ├── BUILD-STATUS.md
│   ├── DESIGN-REVIEW.md         # Reference design and shared theme
│   └── SOURCE-REVIEW.md          # File tree, every text file in full, commands
├── next.config.ts
└── package.json
```

## Private review preview

https://driveway-calculators-review.ekselllondon.chatgpt.site

The review preview is separate from the planned GitHub → Cloudflare Pages production deployment. All 51 mapped pages remain drafts. Shared metadata, navigation, homepage cards, and calculator introductions have been corrected across the site.

## Project One design adaptation

The reference design at https://www.projectone.website/ is adapted to the driveway tools: off-white, charcoal, and lime colors; a dark pill navigation bar; a centered oversized hero with floating calculator mockups; mixed-color tool tiles; staggered process cards; curved dark sections; a lime FAQ panel; and a large footer wordmark. Code-native SVG driveway illustrations replace the reference's agency project imagery. Shared styles carry the same theme into all calculators, guides, and trust pages.

See `docs/DESIGN-REVIEW.md` for the design mapping and verification limits.

## Sitewide screenshot corrections

Draft source placeholders stay in the MDX and data registers; the review UI presents clear pending-data states. Empty price tables are replaced by quote-input guidance. Calculator input tables explain units and supplier values. Rectangular and tapered diagrams follow the selected shape; optional bags and delivery loads use explicit expandable controls. Shared labels, help text, table text, bylines, and related links use larger type. Draft bylines avoid a publication update date, unappointed reviewer text is omitted, and related links appear once with useful descriptions.

## Run locally

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open the localhost address printed by Next.js. The provided `out/` directory is a compiled draft, but the source project is the authoritative deliverable. Next.js static exports require a web server for full behavior; opening `index.html` as a file is insufficient.

## Check and build

```sh
npm run typecheck
npm test
npm run build
```

`npm run build` validates the map and frontmatter, exports the site to `out`, and checks the exported HTML. The source book contains every text file in full, with the dependency lockfile included in the project archive.

### GitHub → Cloudflare Pages

1. Use the project repository: https://github.com/yes155/driveway-calculator.
2. The source and dependency lockfile are maintained at the repository root on `main`. Keep `node_modules`, `.next`, and `.env` files out of Git.
3. Push future source changes to `main`.
4. In Cloudflare, choose Workers & Pages → Create → Pages → Connect to Git. Select that repository.
5. Use these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | Blank, when these files are at repository root |
| Node version | `22` |
| `SITE_STAGE` | `draft` |
| `NEXT_PUBLIC_LEADS_ENABLED` | `false` |
| `NEXT_PUBLIC_ADS_ENABLED` | `false` |

Cloudflare's Git integration rebuilds the static site after pushes. The top-level `functions/` folder supplies the separate Pages Function; this project has no Next.js API route.

Attach `drivewaycalc.online` only after the content and launch requirements pass. A draft uses noindex metadata, an empty sitemap, and disallow-all robots. These controls are not access control; use Cloudflare Access for a restricted review URL if needed.

Official deployment references:

- [Cloudflare: static Next.js on Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Cloudflare: build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Next.js: static export](https://nextjs.org/docs/app/guides/static-exports)

## Data and publication

The owner authorized source research. The evidence register now contains 134 named sources and 216 observations; see `docs/DATA-RESEARCH.md` and `data/research/source-values.csv`. Installed ranges retain one named publisher's scope, with conflicts recorded. Product and supplier examples remain labeled; no source ranges are silently averaged.

All 51 mapped pages now have source-grounded draft content. Quantity tools use editable named material references or user values. Cost tools use attributed baseline ranges with no regional adjustment, plus explicitly selected separate quote items. Unsupported national freight, annual upkeep, and regional values remain unavailable. Human review, contact/trust approval, and browser checks remain outstanding, so draft indexing controls stay enabled.

For each sourced entry record `value`, `unit`, `source`, `retrievedOn`, and `verified`. Add the corresponding named source and its URL to `data/sources.json`. External citation URLs belong on the Methodology page.

Each MDX page remains `status: draft`. Finish one page using its Table A/B rows, Section 11 keyword list, the provided DATA block, and the WRITE/AUDIT workflow. Add `answer`, `sourceNames`, `dataRequired`, and `defaultsUsed` to frontmatter; record human review in `data/launch-checklist.json` before changing its status to `published`.

The validator enforces metadata limits, URL existence, phase counts, exact keyword coverage, repeat limits, required context entities, question headings, disallowed hedging, and declared data/default dependencies for published content. It is not a substitute for the 15 editorial checks in Section 8.8 or human review. Keyword near-variants still need an explicit editorial exception mechanism before publication; none are silently accepted.

The launch build is deliberately blocked in this draft:

```sh
npm run build:launch
```

The Phase 1 set is published together. Seq 42 requires Seq 3–8. Seq 33 requires 8 published cost guides. Merged Seq 26, 28, 34, and 52 have no separate routes.

## Lead configuration: disabled

`QuoteCTA` renders nothing unless `NEXT_PUBLIC_LEADS_ENABLED=true`. The endpoint also requires `LEADS_ENABLED=true`, `NETWORK_APPROVED=true`, a D1 binding, and complete consent/network/Turnstile configuration. Frontend visibility never bypasses the server gate.

| Runtime setting | Purpose |
| --- | --- |
| `DB` | Cloudflare D1 binding; initialize with `data/schema.sql` |
| `LEADS_ENABLED` | Server enable flag |
| `NETWORK_APPROVED` | Written network approval recorded by the owner |
| `ALLOWED_ORIGIN` | Exact form origin, e.g. `https://drivewaycalc.online` |
| `NETWORK_CONSENT_TEXT` | Exact approved consent text; displayed unchanged |
| `NETWORK_SUCCESS_TEXT` | Exact approved acknowledgement; valid for stored/queued requests |
| `NETWORK_WEBHOOK_URL` | Approved HTTPS network endpoint |
| `NETWORK_WEBHOOK_TOKEN` | Optional authentication secret |
| `NETWORK_PHONE` | Optional tracking number, shown on mobile |
| `NETWORK_PHONE_REQUIRED` | Whether the network requires a phone |
| `TURNSTILE_SITE_KEY` | Public site key |
| `TURNSTILE_SECRET_KEY` | Secret verification key |
| `RATE_LIMIT_SALT` | Secret salt for hashed IP rate keys |

Consent is unchecked by default. The server validates input, origin, honeypot, consent, Turnstile hostname/action, and an atomic IP rate limit. It stores the exact displayed consent and timestamp. The network request retries up to 3 times. Persistent failures retain `status=failed` for operator retry. This build has no scheduled retry worker or lead-management screen; configure monitoring and a retention/deletion procedure before enabling collection. There is no PII logging or PII analytics payload.

### Required integration checks before enabling leads

| Case | Expected result |
| --- | --- |
| Flag disabled or incomplete network configuration | 503, no data stored |
| Wrong origin | 403, no data stored |
| Invalid ZIP, missing email, unchecked consent | 400 |
| Honeypot populated | 400 |
| Expired or wrong-host Turnstile token | 400 |
| Duplicate identical request identifier | Existing acceptance status; no second row |
| Reused identifier with different fields | 409 |
| Rate limit exceeded | 429 |
| D1 unavailable | 503; no personal information in logs |
| Network unavailable | Retry 3 times, retain failed status for operator retry |

Only disabled-path tests are executed locally. D1, Turnstile, and webhook integration tests require an approved staging configuration.

## Ads, affiliates, and analytics

Ads are disabled. `AdSlot` reserves height only when enabled; no ad-network script is installed. Affiliate products and links await approved data. No unsupported product recommendation is included.

GA4 is optional and absent by default. A configured GA4 script loads after the first pointer interaction. Events contain a tool identifier, never form data or shared URL query parameters. Search Console verification and sitemap submission remain owner setup tasks.

## Verification limits

The static build, source validator, export checks, and 128 tests pass. Browser interaction, keyboard/phone checks, Lighthouse, field INP, and live lead integrations were not executed in the build environment. GitHub Actions includes a mobile Lighthouse job for home, asphalt tool, and asphalt cost guide, with the requested score/LCP/CLS budgets. Total blocking time is a lab diagnostic; it does not verify field INP.

The source is synchronized to https://github.com/yes155/driveway-calculator. Cloudflare Pages account setup and its Git integration remain unverified.
