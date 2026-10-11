# BUILD — File tree and full source

The project is a draft. See README.md for data and launch requirements.

## File tree

```text
driveway-calculators/
  .env.example
  .github/workflows/checks.yml
  .gitignore
  .prettierrc.json
  README.md
  app/about/page.tsx
  app/asphalt-calculator/page.tsx
  app/asphalt-cold-patch/page.tsx
  app/asphalt-driveway-cost-calculator/page.tsx
  app/asphalt-driveway-cost/page.tsx
  app/asphalt-driveway-maintenance/page.tsx
  app/asphalt-driveway-repair-cost/page.tsx
  app/asphalt-driveway-thickness/page.tsx
  app/asphalt-millings-calculator/page.tsx
  app/asphalt-millings-cost/page.tsx
  app/author/farrukh-abdullah/page.tsx
  app/concrete-calculator/page.tsx
  app/concrete-driveway-cost-calculator/page.tsx
  app/concrete-driveway-cost/page.tsx
  app/concrete-driveway-repair-cost/page.tsx
  app/concrete-slab-cost-calculator/page.tsx
  app/concrete-slab-cost/page.tsx
  app/concrete-vs-asphalt-driveway/page.tsx
  app/concrete-weight-per-cubic-yard/page.tsx
  app/contact/page.tsx
  app/crusher-run-calculator/page.tsx
  app/cubic-yards-to-tons/page.tsx
  app/disclosure/page.tsx
  app/driveway-cost-calculator/page.tsx
  app/driveway-cost/page.tsx
  app/driveway-crack-filler/page.tsx
  app/driveway-drainage/page.tsx
  app/driveway-repair-cost/page.tsx
  app/driveway-replacement-cost/page.tsx
  app/driveway-sealcoating-cost/page.tsx
  app/driveway-sealer/page.tsx
  app/globals.css
  app/gravel-calculator/page.tsx
  app/gravel-driveway-calculator/page.tsx
  app/gravel-driveway-cost/page.tsx
  app/gravel-driveway/page.tsx
  app/gravel-weight-per-cubic-yard/page.tsx
  app/hot-mix-asphalt/page.tsx
  app/how-to-lay-an-asphalt-driveway/page.tsx
  app/how-to-repair-asphalt-driveway-cracks/page.tsx
  app/how-to-repair-concrete-driveway-cracks/page.tsx
  app/how-to-seal-a-driveway/page.tsx
  app/layout.tsx
  app/material-weights/page.tsx
  app/methodology/page.tsx
  app/not-found.tsx
  app/page.tsx
  app/paver-calculator/page.tsx
  app/paver-driveway-cost/page.tsx
  app/pea-gravel-calculator/page.tsx
  app/privacy/page.tsx
  app/repave-asphalt-driveway-cost/page.tsx
  app/replace-concrete-driveway-cost/page.tsx
  app/road-base-calculator/page.tsx
  app/robots.ts
  app/rock-calculator/page.tsx
  app/sealcoat-calculator/page.tsx
  app/sitemap.ts
  app/stamped-concrete-driveway-cost/page.tsx
  app/standard-driveway-width/page.tsx
  app/tar-and-chip-driveway-cost/page.tsx
  app/terms/page.tsx
  components/Analytics.tsx
  components/Calculator.tsx
  components/DraftGuidance.tsx
  components/Footer.tsx
  components/Header.tsx
  components/HelpfulVote.tsx
  components/Modules.tsx
  components/Navigation.tsx
  components/QuoteCTA.tsx
  components/ShapeDiagram.tsx
  content/asphalt-calculator.mdx
  content/asphalt-cold-patch.mdx
  content/asphalt-driveway-cost-calculator.mdx
  content/asphalt-driveway-cost.mdx
  content/asphalt-driveway-maintenance.mdx
  content/asphalt-driveway-repair-cost.mdx
  content/asphalt-driveway-thickness.mdx
  content/asphalt-millings-calculator.mdx
  content/asphalt-millings-cost.mdx
  content/concrete-calculator.mdx
  content/concrete-driveway-cost-calculator.mdx
  content/concrete-driveway-cost.mdx
  content/concrete-driveway-repair-cost.mdx
  content/concrete-slab-cost-calculator.mdx
  content/concrete-slab-cost.mdx
  content/concrete-vs-asphalt-driveway.mdx
  content/concrete-weight-per-cubic-yard.mdx
  content/crusher-run-calculator.mdx
  content/cubic-yards-to-tons.mdx
  content/driveway-cost-calculator.mdx
  content/driveway-cost.mdx
  content/driveway-crack-filler.mdx
  content/driveway-drainage.mdx
  content/driveway-repair-cost.mdx
  content/driveway-replacement-cost.mdx
  content/driveway-sealcoating-cost.mdx
  content/driveway-sealer.mdx
  content/gravel-calculator.mdx
  content/gravel-driveway-calculator.mdx
  content/gravel-driveway-cost.mdx
  content/gravel-driveway.mdx
  content/gravel-weight-per-cubic-yard.mdx
  content/home.mdx
  content/hot-mix-asphalt.mdx
  content/how-to-lay-an-asphalt-driveway.mdx
  content/how-to-repair-asphalt-driveway-cracks.mdx
  content/how-to-repair-concrete-driveway-cracks.mdx
  content/how-to-seal-a-driveway.mdx
  content/material-weights.mdx
  content/methodology.mdx
  content/paver-calculator.mdx
  content/paver-driveway-cost.mdx
  content/pea-gravel-calculator.mdx
  content/repave-asphalt-driveway-cost.mdx
  content/replace-concrete-driveway-cost.mdx
  content/road-base-calculator.mdx
  content/rock-calculator.mdx
  content/sealcoat-calculator.mdx
  content/stamped-concrete-driveway-cost.mdx
  content/standard-driveway-width.mdx
  content/tar-and-chip-driveway-cost.mdx
  data/defaults.json
  data/launch-checklist.json
  data/pages.json
  data/prices.json
  data/reviewers.json
  data/schema.sql
  data/source-metadata.json
  data/sources.json
  docs/BUILD-STATUS.md
  eslint.config.mjs
  functions/api/lead.ts
  lib/analytics.ts
  lib/calc/compare.ts
  lib/calc/index.ts
  lib/calc/ui.ts
  lib/config.ts
  lib/content.ts
  lib/format.ts
  lib/metadata-validation.ts
  lib/page.tsx
  lib/seo/index.tsx
  lighthouserc.cjs
  next-env.d.ts
  next.config.ts
  package-lock.json
  package.json
  postcss.config.mjs
  public/_headers
  public/icon.svg
  scripts/check-export.ts
  scripts/validate.ts
  tests/calculators.test.ts
  tests/lead.test.ts
  tests/metadata.test.ts
  tsconfig.json
  vitest.config.ts
  docs/SOURCE-REVIEW.md
```

## .env.example

````text
# Draft builds are noindex. Only launch after the source and editorial gates pass.
SITE_STAGE=draft
NEXT_PUBLIC_LEADS_ENABLED=false
NEXT_PUBLIC_ADS_ENABLED=false
NEXT_PUBLIC_GA4_ID=
# Cloudflare Pages Function runtime settings; never put secrets in NEXT_PUBLIC variables.
LEADS_ENABLED=false
ALLOWED_ORIGIN=https://drivewaycalc.online
NETWORK_APPROVED=false
NETWORK_CONSENT_TEXT=
NETWORK_SUCCESS_TEXT=
NETWORK_WEBHOOK_URL=
NETWORK_WEBHOOK_TOKEN=
NETWORK_PHONE=
NETWORK_PHONE_REQUIRED=false
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
RATE_LIMIT_SALT=
# Bind the D1 database as DB in Cloudflare Pages when lead approval is complete.
````

## .github/workflows/checks.yml

````yaml
name: Verify site
on:
  push:
  pull_request:
jobs:
  engineering:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run typecheck
      - run: npm test
      - run: npm run build
      - name: Mobile performance budgets
        run: npx lhci autorun
      - uses: actions/upload-artifact@v4
        with:
          name: cloudflare-static-export
          path: out
````

## .gitignore

````text
node_modules
.next/
out/
.env*
!.env.example
*.tsbuildinfo
.lighthouseci/
````

## .prettierrc.json

````json
{ "singleQuote": true, "trailingComma": "all", "printWidth": 100 }
````

## README.md

````markdown
# Driveway Calculators

An initial engineering build for **drivewaycalc.online**, using Next.js App Router, strict TypeScript, Tailwind, MDX, and a static export for Cloudflare Pages connected to GitHub.

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
│   └── SOURCE-REVIEW.md          # File tree, every text file in full, commands
├── next.config.ts
└── package.json
```

## Private review preview

https://driveway-calculators-review.ekselllondon.chatgpt.site

The review preview is separate from the planned GitHub → Cloudflare Pages production deployment. All 51 mapped pages remain drafts. Shared metadata, navigation, homepage cards, and calculator introductions have been corrected across the site.

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
2. Copy the project contents to the repository root. Do not upload `node_modules`, `.next`, or `.env` files.
3. Push the source and `package-lock.json` to the repository's production branch.
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

The uploaded plan defines the map and formulas, not a verified DATA block. Only exact US unit conversions are filled. Every price, regional multiplier, material density, yield, coverage rate, recommended thickness, lifespan, and supplier fee remains null.

Quantity tools work with user-entered supplier or label values. Cost tools display measured area and hide price results until verified data exists. Arithmetic examples use the fixtures supplied in Section 8.3 and are explicitly labeled as arithmetic examples.

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

The static build, source validator, export checks, and 116 tests pass. Browser interaction, keyboard/phone checks, Lighthouse, field INP, and live lead integrations were not executed in the build environment. GitHub Actions includes a mobile Lighthouse job for home, asphalt tool, and asphalt cost guide, with the requested score/LCP/CLS budgets. Total blocking time is a lab diagnostic; it does not verify field INP.

The source is prepared for synchronization to https://github.com/yes155/driveway-calculator. Cloudflare Pages account setup and its Git integration remain unverified.
````

## app/about/page.tsx

````tsx
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
````

## app/asphalt-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/asphalt-calculator/');
export default async function Page() {
  return renderPage('/asphalt-calculator/');
}
````

## app/asphalt-cold-patch/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/asphalt-cold-patch/');
export default async function Page() {
  return renderPage('/asphalt-cold-patch/');
}
````

## app/asphalt-driveway-cost-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/asphalt-driveway-cost-calculator/');
export default async function Page() {
  return renderPage('/asphalt-driveway-cost-calculator/');
}
````

## app/asphalt-driveway-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/asphalt-driveway-cost/');
export default async function Page() {
  return renderPage('/asphalt-driveway-cost/');
}
````

## app/asphalt-driveway-maintenance/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/asphalt-driveway-maintenance/');
export default async function Page() {
  return renderPage('/asphalt-driveway-maintenance/');
}
````

## app/asphalt-driveway-repair-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/asphalt-driveway-repair-cost/');
export default async function Page() {
  return renderPage('/asphalt-driveway-repair-cost/');
}
````

## app/asphalt-driveway-thickness/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/asphalt-driveway-thickness/');
export default async function Page() {
  return renderPage('/asphalt-driveway-thickness/');
}
````

## app/asphalt-millings-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/asphalt-millings-calculator/');
export default async function Page() {
  return renderPage('/asphalt-millings-calculator/');
}
````

## app/asphalt-millings-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/asphalt-millings-cost/');
export default async function Page() {
  return renderPage('/asphalt-millings-cost/');
}
````

## app/author/farrukh-abdullah/page.tsx

````tsx
import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'Farrukh Abdullah',
  description: 'Farrukh Abdullah is a researcher and writer.',
  url: '/author/farrukh-abdullah/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>Farrukh Abdullah</h1>
      <div className="prose">
        <p>
          <strong>Farrukh Abdullah is a researcher and writer.</strong>
        </p>
        <p>
          {
            'His work on this site covers source research, calculator explanations, and editorial preparation.'
          }
        </p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Farrukh Abdullah', url: '/author/farrukh-abdullah/' })} />
    </div>
  );
}
````

## app/concrete-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/concrete-calculator/');
export default async function Page() {
  return renderPage('/concrete-calculator/');
}
````

## app/concrete-driveway-cost-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/concrete-driveway-cost-calculator/');
export default async function Page() {
  return renderPage('/concrete-driveway-cost-calculator/');
}
````

## app/concrete-driveway-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/concrete-driveway-cost/');
export default async function Page() {
  return renderPage('/concrete-driveway-cost/');
}
````

## app/concrete-driveway-repair-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/concrete-driveway-repair-cost/');
export default async function Page() {
  return renderPage('/concrete-driveway-repair-cost/');
}
````

## app/concrete-slab-cost-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/concrete-slab-cost-calculator/');
export default async function Page() {
  return renderPage('/concrete-slab-cost-calculator/');
}
````

## app/concrete-slab-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/concrete-slab-cost/');
export default async function Page() {
  return renderPage('/concrete-slab-cost/');
}
````

## app/concrete-vs-asphalt-driveway/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/concrete-vs-asphalt-driveway/');
export default async function Page() {
  return renderPage('/concrete-vs-asphalt-driveway/');
}
````

## app/concrete-weight-per-cubic-yard/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/concrete-weight-per-cubic-yard/');
export default async function Page() {
  return renderPage('/concrete-weight-per-cubic-yard/');
}
````

## app/contact/page.tsx

````tsx
import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'Contact',
  description: 'The contact page awaits a verified publisher contact method.',
  url: '/contact/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>Contact</h1>
      <div className="prose">
        <p>
          <strong>The contact page awaits a verified publisher contact method.</strong>
        </p>
        <p>A public contact method has not been added to this review preview.</p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Contact', url: '/contact/' })} />
    </div>
  );
}
````

## app/crusher-run-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/crusher-run-calculator/');
export default async function Page() {
  return renderPage('/crusher-run-calculator/');
}
````

## app/cubic-yards-to-tons/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/cubic-yards-to-tons/');
export default async function Page() {
  return renderPage('/cubic-yards-to-tons/');
}
````

## app/disclosure/page.tsx

````tsx
import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'Disclosure',
  description: 'Lead requests, advertising, and affiliate links are disabled in this draft.',
  url: '/disclosure/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>Disclosure</h1>
      <div className="prose">
        <p>
          <strong>
            Lead requests, advertising, and affiliate links are disabled in this draft.
          </strong>
        </p>
        <p>{'Approved relationships require clear disclosures before activation.'}</p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Disclosure', url: '/disclosure/' })} />
    </div>
  );
}
````

## app/driveway-cost-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/driveway-cost-calculator/');
export default async function Page() {
  return renderPage('/driveway-cost-calculator/');
}
````

## app/driveway-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/driveway-cost/');
export default async function Page() {
  return renderPage('/driveway-cost/');
}
````

## app/driveway-crack-filler/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/driveway-crack-filler/');
export default async function Page() {
  return renderPage('/driveway-crack-filler/');
}
````

## app/driveway-drainage/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/driveway-drainage/');
export default async function Page() {
  return renderPage('/driveway-drainage/');
}
````

## app/driveway-repair-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/driveway-repair-cost/');
export default async function Page() {
  return renderPage('/driveway-repair-cost/');
}
````

## app/driveway-replacement-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/driveway-replacement-cost/');
export default async function Page() {
  return renderPage('/driveway-replacement-cost/');
}
````

## app/driveway-sealcoating-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/driveway-sealcoating-cost/');
export default async function Page() {
  return renderPage('/driveway-sealcoating-cost/');
}
````

## app/driveway-sealer/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/driveway-sealer/');
export default async function Page() {
  return renderPage('/driveway-sealer/');
}
````

## app/globals.css

````css
@import 'tailwindcss';
:root {
  --paper: #f7f6f0;
  --white: #fff;
  --ink: #172d35;
  --muted: #52646a;
  --line: #d8dfd9;
  --orange: #b74721;
  --pale: #edf0e9;
  --mono: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  --font: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 30px;
}
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font);
  font-size: 17px;
  line-height: 1.6;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
input,
select {
  font: inherit;
}
button,
a,
input,
select,
summary {
  outline-offset: 4px;
}
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
summary:focus-visible {
  outline: 3px solid var(--orange);
}
button {
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}
h1,
h2,
h3,
p {
  margin-top: 0;
}
h1,
h2,
h3 {
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.035em;
}
h1 {
  font-size: clamp(36px, 4.6vw, 64px);
}
h2 {
  font-size: clamp(28px, 3vw, 40px);
}
h3 {
  font-size: 24px;
}
p {
  color: var(--muted);
}
.eyebrow {
  font: 11px/1.4 var(--mono);
  letter-spacing: 0.11em;
  text-transform: uppercase;
  font-weight: 600;
}
.orange-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  background: var(--orange);
  border-radius: 50%;
  margin-right: 8px;
}
.skip-link {
  position: absolute;
  left: 20px;
  top: -100px;
  z-index: 20;
  background: white;
  padding: 10px 20px;
}
.skip-link:focus {
  top: 10px;
}
.site-header {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
  position: relative;
  z-index: 10;
}
.header-inner {
  max-width: 1280px;
  margin: auto;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  letter-spacing: -0.035em;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
}
.brand-mark {
  width: 35px;
  height: 35px;
  background: var(--ink);
  color: var(--paper);
  border-radius: 7px;
  display: grid;
  place-items: center;
}
.brand-mark svg {
  width: 24px;
  height: 24px;
}
nav {
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 12px;
  font-weight: 600;
}
summary {
  cursor: pointer;
  list-style: none;
}
summary::-webkit-details-marker {
  display: none;
}
summary span {
  margin-left: 7px;
  color: var(--muted);
}
.nav-group {
  position: relative;
}
.nav-dropdown {
  position: absolute;
  top: 35px;
  left: 0;
  min-width: 290px;
  max-height: 70vh;
  overflow-y: auto;
  padding: 10px;
  background: var(--white);
  border: 1px solid var(--line);
  box-shadow: 0 12px 35px #172d3510;
  z-index: 12;
}
.nav-dropdown a {
  display: block;
  padding: 9px 12px;
  font-size: 13px;
  border-bottom: 1px solid var(--line);
}
.nav-dropdown a:hover {
  background: var(--pale);
}
.header-tool {
  font-size: 12px;
  white-space: nowrap;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
}
.header-tool span {
  margin-left: 14px;
}
.draft-banner {
  text-align: center;
  font-size: 12px;
  padding: 8px 20px;
  background: #eceee6;
  color: #52646a;
  border-bottom: 1px solid var(--line);
}
.home-hero {
  max-width: 1280px;
  margin: auto;
  padding: 80px 48px 76px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
}
.hero-copy h1 {
  font-size: clamp(46px, 5.5vw, 76px);
  line-height: 1.04;
  margin: 26px 0;
}
.hero-copy em {
  font-style: normal;
  color: var(--orange);
}
.hero-description {
  font-size: 18px;
  line-height: 1.65;
  max-width: 480px;
  margin-bottom: 30px;
}
.hero-actions {
  display: flex;
  align-items: center;
  gap: 26px;
  flex-wrap: wrap;
}
.button {
  padding: 14px 20px;
  border: 1px solid var(--ink);
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  border-radius: 3px;
  min-height: 48px;
}
.primary {
  background: var(--ink);
  color: var(--paper);
}
.primary:hover {
  background: #24434d;
}
.secondary {
  background: transparent;
  color: var(--ink);
  border-color: var(--line);
}
.hero-link {
  font-size: 13px;
  border-bottom: 1px solid var(--line);
  padding-bottom: 4px;
}
.hero-link span {
  margin-left: 12px;
}
.hero-footnote {
  display: flex;
  gap: 18px;
  font: 10px var(--mono);
  color: var(--muted);
  margin-top: 36px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.hero-footnote span + span {
  border-left: 1px solid var(--line);
  padding-left: 18px;
}
.hero-visual {
  border: 1px solid var(--line);
  background: #f0f1ea;
  box-shadow: 12px 12px 0 #e7eae0;
  padding: 26px;
}
.visual-caption {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.unit-badge {
  font: 10px var(--mono);
  border: 1px solid var(--line);
  padding: 4px 7px;
  border-radius: 3px;
  white-space: nowrap;
}
.shape-diagram {
  width: 100%;
  height: auto;
  color: var(--ink);
}
.shape-diagram text {
  font: 9px var(--mono);
  letter-spacing: 0.05em;
  fill: currentColor;
}
.shape-diagram .diagram-label {
  font-size: 10px;
  font-weight: 600;
}
.hero-visual .shape-diagram {
  margin: 24px 0 8px;
}
.visual-footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #cdd6cb;
  border-bottom: 1px solid #cdd6cb;
  padding: 15px 0;
  font: 11px var(--mono);
}
.visual-footer code {
  font-size: 13px;
}
.visual-label {
  font-size: 11px;
  margin-top: 18px;
  color: var(--muted);
}
.home-section {
  max-width: 1280px;
  margin: auto;
  padding: 60px 48px;
}
.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 32px;
}
.section-header h2 {
  margin: 12px 0 0;
}
.section-header > a {
  font-size: 13px;
  border-bottom: 1px solid var(--line);
  padding-bottom: 5px;
  white-space: nowrap;
}
.section-header > a span {
  margin-left: 20px;
}
.section-header > p {
  max-width: 330px;
  font-size: 15px;
  line-height: 1.65;
  margin-bottom: 0;
}
.featured-section {
  border-top: 1px solid var(--line);
}
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.featured-card {
  padding: 28px;
  border: 1px solid var(--line);
  background: var(--white);
  transition:
    border-color 0.15s,
    transform 0.15s;
}
.featured-card:hover {
  border-color: var(--ink);
  transform: translateY(-3px);
}
.card-number {
  font: 10px var(--mono);
  letter-spacing: 0.06em;
  color: var(--muted);
}
.featured-card h3 {
  margin: 40px 0 14px;
  font-size: 27px;
  max-width: 250px;
  min-height: 60px;
}
.featured-card p {
  font-size: 14px;
  min-height: 45px;
}
.card-bottom {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--line);
  padding-top: 17px;
  margin-top: 26px;
  font-size: 12px;
}
.card-bottom > span:last-child {
  font-size: 20px;
  color: var(--orange);
}
.surface-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--line);
}
.surface-card {
  border-right: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}
.surface-card:last-child {
  border: 0;
}
.surface-card:hover h3 {
  text-decoration: underline;
}
.material-swatch {
  height: 105px;
  background: #4c5656;
  background-image:
    radial-gradient(#899193 1px, transparent 1px), radial-gradient(#788183 1px, transparent 1px);
  background-size:
    7px 9px,
    13px 13px;
  border-bottom: 1px solid var(--line);
}
.surface-concrete .material-swatch {
  background-color: #c7c8be;
  background-image: linear-gradient(90deg, transparent 49%, #92998f 50%, transparent 51%);
  background-size: 130px;
}
.surface-gravel .material-swatch {
  background-color: #8c8874;
  background-image:
    radial-gradient(ellipse at center, #d2c7ac 20%, transparent 22%),
    radial-gradient(ellipse at center, #5d6252 20%, transparent 25%);
  background-size:
    21px 19px,
    29px 27px;
  background-position:
    0 0,
    8px 5px;
}
.surface-paver .material-swatch {
  background-color: #a99c81;
  background-image:
    linear-gradient(#f7f6f090 1px, transparent 1px),
    linear-gradient(90deg, #f7f6f090 1px, transparent 1px);
  background-size: 51px 27px;
}
.surface-details {
  padding: 25px 22px 47px;
}
.surface-details h3 {
  font-size: 23px;
  margin: 20px 0 14px;
}
.surface-details p {
  font-size: 13px;
  margin: 0;
}
.surface-arrow {
  position: absolute;
  right: 22px;
  bottom: 18px;
  color: var(--orange);
  font-size: 23px;
}
.method-strip {
  background: var(--ink);
  color: var(--paper);
  padding: 50px max(48px, calc((100vw - 1184px) / 2));
  display: grid;
  grid-template-columns: 1fr 1.25fr 1.2fr;
  gap: 48px;
  align-items: start;
  margin: 30px 0;
}
.method-strip > .eyebrow {
  padding-top: 9px;
  color: #a5b7b9;
  max-width: 150px;
}
.method-strip h2 {
  font-size: 36px;
  margin: 0;
}
.method-strip p {
  color: #b4c5c8;
  font-size: 15px;
}
.method-strip a {
  font-size: 13px;
  border-bottom: 1px solid #5c737a;
  padding-bottom: 5px;
}
.method-strip a span {
  margin-left: 18px;
}
.library-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.library-column h3 {
  font-size: 18px;
  letter-spacing: -0.01em;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--ink);
}
.library-column > a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 15px 0;
  border-bottom: 1px solid var(--line);
  font-size: 14px;
}
.library-column a:hover {
  color: var(--orange);
}
.library-column > a > span:last-child {
  color: var(--muted);
}
.site-footer {
  border-top: 1px solid var(--line);
  padding: 50px 48px 25px;
  margin-top: 45px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}
.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
}
.footer-brand {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.035em;
}
.footer-main p {
  font-size: 13px;
  margin-top: 15px;
}
.footer-main > div > .eyebrow {
  display: block;
  margin-bottom: 17px;
}
.footer-main > div > a:not(.footer-brand) {
  display: block;
  font-size: 13px;
  margin: 8px 0;
}
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--line);
  padding-top: 24px;
  margin-top: 35px;
  font-size: 11px;
  color: var(--muted);
}
.footer-bottom > div {
  display: flex;
  gap: 25px;
}
.page-container {
  max-width: 1216px;
  margin: auto;
  padding: 32px 48px;
}
.breadcrumb {
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 14px;
  color: var(--muted);
  margin: 0 0 45px;
  flex-wrap: wrap;
}
.breadcrumb a:hover {
  color: var(--orange);
}
.page-heading {
  max-width: 800px;
  margin-bottom: 40px;
}
.page-heading h1 {
  margin: 18px 0 20px;
  font-size: clamp(35px, 4.2vw, 52px);
}
.answer-block {
  font-size: 18px;
  line-height: 1.65;
  margin-bottom: 20px;
}
.answer-block strong {
  color: var(--ink);
  font-weight: 500;
}
.byline {
  display: flex;
  gap: 9px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;
  color: var(--muted);
}
.byline a {
  border-bottom: 1px solid var(--line);
}
.calculator-shell {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--line);
  background: var(--white);
  border-radius: 5px;
  overflow: hidden;
}
.calculator-inputs {
  padding: 30px;
  border-right: 1px solid var(--line);
}
.calculator-output {
  padding: 30px;
  background: #edf0e9;
  min-width: 0;
}
.panel-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}
.status-dot {
  font: 10px var(--mono);
  color: var(--muted);
  white-space: nowrap;
}
.status-dot:before {
  content: '';
  width: 5px;
  height: 5px;
  display: inline-block;
  border-radius: 50%;
  background: #738675;
  margin-right: 6px;
}
fieldset {
  border: 0;
  margin: 0 0 22px;
  padding: 0;
  min-width: 0;
}
legend {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
}
.measurement-section + .measurement-section {
  border-top: 1px solid var(--line);
  padding-top: 22px;
}
.field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.field {
  display: block;
  margin: 0 0 17px;
  min-width: 0;
}
.field > span:first-child {
  display: block;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 8px;
  font-weight: 600;
}
.field small {
  font-size: 13px;
  line-height: 1.4;
  font-weight: 400;
  color: var(--muted);
}
.field > small {
  display: block;
  margin-top: 7px;
}
.input-wrap {
  display: flex;
  align-items: center;
  border: 1px solid #bbc8c2;
  background: var(--white);
  border-radius: 3px;
  overflow: hidden;
}
.input-wrap:focus-within {
  outline: 2px solid var(--orange);
  outline-offset: 2px;
}
.input-wrap input {
  border: none;
  outline: none;
  min-width: 0;
  width: 100%;
  font-size: 17px;
  padding: 11px 12px;
  background: transparent;
  color: var(--ink);
}
.input-wrap > span {
  font: 12px var(--mono);
  white-space: nowrap;
  color: var(--muted);
  padding-right: 11px;
}
.field > input,
.field select {
  width: 100%;
  border: 1px solid #bbc8c2;
  border-radius: 3px;
  padding: 12px;
  font-size: 14px;
  color: var(--ink);
  background: var(--white);
  min-height: 48px;
}
.check {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 1.45;
  color: var(--muted);
  margin: 7px 0;
}
.check input {
  accent-color: var(--ink);
  width: 16px;
  height: 16px;
  margin: 0;
  flex-shrink: 0;
}
.section-options {
  display: flex;
  gap: 20px;
  margin: 0 0 12px;
}
.add-section {
  border: 1px dashed #adbdb4;
  width: 100%;
  padding: 10px;
  background: transparent;
  font-size: 13px;
  border-radius: 3px;
}
.input-hint {
  font-size: 13px;
  line-height: 1.6;
  margin: 12px 0;
  color: var(--muted);
}
.subheading {
  margin-top: 30px;
  margin-bottom: 20px;
  border-top: 1px solid var(--line);
  padding-top: 25px;
}
.form-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 25px;
}
.form-actions > .primary {
  flex: 1;
}
.form-actions > .secondary {
  padding-left: 16px;
  padding-right: 16px;
}
.text-button {
  border: 0;
  padding: 0;
  background: none;
  color: var(--orange);
  font-size: 12px;
}
.error {
  padding: 12px 14px;
  background: #fff0e9;
  color: #963b1d;
  border-left: 3px solid var(--orange);
  font-size: 13px;
}
.empty-result {
  text-align: center;
  padding: 20px 5px;
}
.empty-result .shape-diagram {
  max-width: 340px;
  margin-bottom: 30px;
  opacity: 0.7;
}
.empty-result h3 {
  font-size: 25px;
}
.empty-result p {
  font-size: 14px;
  max-width: 300px;
  margin: 0 auto 30px;
}
.empty-rule {
  display: block;
  font: 12px var(--mono);
  letter-spacing: 0.01em;
  color: var(--muted);
  padding-top: 20px;
  border-top: 1px solid var(--line);
}
.output-note {
  display: flex;
  gap: 18px;
  align-items: center;
  margin-top: 35px;
}
.output-note > span {
  font-size: 28px;
  color: var(--orange);
}
.output-note p {
  font-size: 12px;
  margin: 0;
}
.metrics {
  margin: 0;
}
.metrics > div {
  border-bottom: 1px solid #d1d9cf;
  padding: 20px 0;
}
.metrics > div:first-child {
  padding-top: 5px;
}
.metrics dt {
  font: 12px var(--mono);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--muted);
  margin-bottom: 8px;
}
.metrics dd {
  font-size: clamp(25px, 3vw, 39px);
  letter-spacing: -0.04em;
  font-weight: 600;
  line-height: 1.15;
  margin: 0;
  overflow-wrap: anywhere;
}
.metrics dd small {
  font: 12px var(--mono);
  letter-spacing: 0;
  color: var(--muted);
  margin-left: 10px;
  display: inline-block;
}
.formula-box {
  background: #edf0e9;
  border-left: 2px solid var(--orange);
  padding: 18px 20px;
  margin: 25px 0;
  font-size: 14px;
  line-height: 1.8;
  overflow-wrap: anywhere;
}
.formula-box > .eyebrow {
  display: block;
  margin-bottom: 12px;
  color: var(--muted);
}
.formula-box code {
  font: 14px/1.8 var(--mono);
  white-space: normal;
  display: block;
}
.formula-box p {
  font-size: 14px;
  margin: 12px 0 0;
}
.calculator-output .formula-box {
  background: #e2e8dc;
}
.result-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.result-actions button,
.helpful button {
  border: 1px solid #b3c2b7;
  background: transparent;
  padding: 9px 14px;
  border-radius: 3px;
  font-size: 14px;
}
.data-note {
  background: #fbf5e7;
  border: 1px solid #dfd5bb;
  color: #76602b;
  padding: 12px 14px;
  font-size: 12px;
  line-height: 1.65;
  margin: 18px 0;
}
.data-note p {
  font-size: 12px;
  margin: 5px 0 0;
  color: inherit;
}
.checks {
  margin-bottom: 20px;
}
.surface-choices {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 20px;
}
.estimate-note {
  font-size: 11px;
  margin: 16px 0;
}
.article-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 270px;
  gap: 70px;
  margin-top: 60px;
}
.prose {
  font-size: 17px;
  line-height: 1.8;
}
.prose h2 {
  font-size: 27px;
  margin: 35px 0 17px;
  line-height: 1.25;
}
.prose h3 {
  font-size: 22px;
  margin-top: 30px;
}
.prose strong {
  color: var(--ink);
}
.prose ul {
  padding-left: 22px;
  list-style: disc;
}
.prose li {
  margin-bottom: 9px;
  color: var(--muted);
}
.prose a:not(.related-link a) {
  text-decoration: underline;
  text-underline-offset: 3px;
}
.prose code {
  font: 12px/1.8 var(--mono);
  overflow-wrap: anywhere;
}
.qa {
  margin-bottom: 35px;
}
.side-box {
  border: 1px solid var(--line);
  padding: 24px;
  margin-bottom: 25px;
}
.side-box h3 {
  font-size: 23px;
  margin: 17px 0;
}
.side-box p {
  font-size: 14px;
  line-height: 1.7;
}
.side-box > a {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid var(--line);
  padding: 12px 0;
  font-size: 14px;
  line-height: 1.5;
}
.side-box > a:last-child {
  padding-bottom: 0;
}
.related-link {
  display: block;
  border-top: 1px solid var(--line);
  padding-top: 16px;
  margin: 16px 0;
}
.related-link > a {
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  color: var(--ink);
}
.related-link > span {
  font-size: 14px;
  display: block;
  margin-top: 5px;
}
.source-note {
  border-top: 1px solid var(--line);
  padding-top: 22px;
  font-size: 14px;
  line-height: 1.7;
}
.source-note p {
  margin: 8px 0;
}
.editorial-status,
.disclosure {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.6;
}
.helpful {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  border-top: 1px solid var(--line);
  padding-top: 25px;
  margin-top: 35px;
  font-size: 12px;
}
.table-scroll {
  overflow-x: auto;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
  line-height: 1.6;
  margin: 20px 0;
}
th,
td {
  text-align: left;
  border-bottom: 1px solid var(--line);
  padding: 12px;
  vertical-align: top;
}
th {
  font-weight: 600;
}
thead {
  background: var(--pale);
}
caption {
  text-align: left;
  padding-bottom: 10px;
  font-size: 12px;
  color: var(--muted);
}
details {
  font-size: 13px;
}
details > summary {
  padding: 10px 0;
}
.ad-slot {
  min-height: 280px;
  display: flex;
  justify-content: center;
  font-size: 10px;
  background: var(--pale);
  padding-top: 15px;
}
.quote-cta {
  border-top: 1px solid var(--line);
  padding-top: 22px;
  margin-top: 22px;
}
.quote-cta h3 {
  font-size: 22px;
}
.quote-cta > p {
  font-size: 13px;
}
.quote-form {
  margin-top: 24px;
}
.honeypot {
  position: absolute;
  left: -10000px;
}
.mobile-call {
  display: none;
}
.not-found {
  padding-top: 100px;
  padding-bottom: 100px;
}
.trust-container {
  max-width: 780px;
  margin: auto;
  padding: 60px 35px;
}
.trust-container h1 {
  font-size: 43px;
  margin-top: 20px;
}
.trust-container .prose {
  margin-top: 30px;
}
@media (max-width: 1100px) {
  .header-inner {
    padding: 20px 25px;
    gap: 20px;
  }
  nav {
    gap: 15px;
    font-size: 11px;
  }
  .header-tool {
    display: none;
  }
  .home-hero {
    gap: 45px;
    padding: 60px 35px;
  }
  .hero-copy h1 {
    font-size: 59px;
  }
  .home-section {
    padding: 45px 35px;
  }
  .article-layout {
    gap: 35px;
    grid-template-columns: minmax(0, 1fr) 230px;
  }
  .page-container {
    padding: 30px 35px;
  }
  .method-strip {
    padding: 45px 35px;
    gap: 35px;
  }
  .method-strip h2 {
    font-size: 30px;
  }
  .surface-details {
    padding: 22px 17px 40px;
  }
  .surface-details h3 {
    font-size: 21px;
  }
}
@media (max-width: 820px) {
  .header-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .site-header nav {
    gap: 20px;
    width: 100%;
    justify-content: space-between;
  }
  .brand {
    font-size: 21px;
  }
  .nav-dropdown {
    min-width: 240px;
  }
  .nav-group:nth-child(n + 3) .nav-dropdown {
    left: auto;
    right: 0;
  }
  .home-hero {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 50px 30px;
  }
  .hero-copy h1 {
    font-size: 63px;
  }
  .hero-visual {
    max-width: 490px;
  }
  .hero-description {
    max-width: 580px;
  }
  .featured-grid {
    gap: 12px;
  }
  .featured-card {
    padding: 20px;
  }
  .featured-card h3 {
    font-size: 23px;
  }
  .surface-grid {
    grid-template-columns: 1fr 1fr;
  }
  .surface-card:nth-child(2) {
    border-right: 0;
  }
  .surface-card:nth-child(-n + 2) {
    border-bottom: 1px solid var(--line);
  }
  .method-strip {
    grid-template-columns: 1fr 1.3fr;
    gap: 25px;
  }
  .method-strip > .eyebrow {
    grid-column: 1/-1;
    max-width: none;
  }
  .library-grid {
    gap: 24px;
  }
  .calculator-shell {
    grid-template-columns: 1fr;
  }
  .calculator-inputs {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
  .calculator-output {
    min-height: 430px;
  }
  .empty-result .shape-diagram {
    max-width: 250px;
    margin-bottom: 20px;
  }
  .article-layout {
    grid-template-columns: 1fr;
  }
  .article-sidebar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .footer-main {
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 25px;
  }
  .mobile-call {
    display: block;
    font-size: 14px;
    margin-top: 20px;
  }
}
@media (max-width: 600px) {
  body {
    font-size: 16px;
  }
  .header-inner {
    padding: 18px 20px;
  }
  .site-header nav {
    font-size: 10px;
    gap: 8px;
  }
  summary span {
    margin-left: 3px;
  }
  .nav-dropdown {
    width: calc(100vw - 40px);
    min-width: 0;
    position: fixed;
    left: 20px !important;
    right: 20px !important;
    top: 112px;
  }
  .draft-banner {
    font-size: 10px;
    text-align: left;
    padding: 8px 20px;
  }
  .home-hero {
    padding: 40px 22px;
    gap: 35px;
  }
  .hero-copy h1 {
    font-size: 47px;
  }
  .hero-copy > .eyebrow {
    font-size: 10px;
  }
  .hero-description {
    font-size: 16px;
  }
  .hero-actions {
    gap: 22px;
  }
  .hero-footnote {
    gap: 12px;
    font-size: 9px;
  }
  .hero-footnote span + span {
    padding-left: 12px;
  }
  .hero-visual {
    padding: 22px;
    box-shadow: 7px 7px 0 #e7eae0;
  }
  .home-section {
    padding: 38px 22px;
  }
  .section-header {
    display: block;
  }
  .section-header > a {
    display: inline-block;
    margin-top: 20px;
  }
  .section-header > p {
    margin-top: 16px;
    max-width: 100%;
  }
  .section-header h2 {
    font-size: 30px;
  }
  .featured-grid {
    grid-template-columns: 1fr;
  }
  .featured-card h3 {
    margin: 24px 0 10px;
    min-height: 0;
    max-width: 100%;
    font-size: 25px;
  }
  .featured-card p {
    min-height: 0;
  }
  .card-bottom {
    margin-top: 20px;
  }
  .surface-details h3 {
    font-size: 21px;
  }
  .surface-details {
    padding: 22px 15px 45px;
  }
  .surface-details > .eyebrow {
    font-size: 9px;
  }
  .material-swatch {
    height: 85px;
  }
  .method-strip {
    padding: 35px 22px;
    grid-template-columns: 1fr;
    gap: 25px;
    margin: 15px 0;
  }
  .method-strip h2 {
    font-size: 32px;
  }
  .library-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .site-footer {
    padding: 35px 22px 20px;
  }
  .footer-main {
    grid-template-columns: 1fr 1fr;
  }
  .footer-main > div:first-child {
    grid-column: 1/-1;
  }
  .footer-bottom {
    align-items: flex-start;
    gap: 20px;
    font-size: 10px;
  }
  .footer-bottom > div {
    gap: 12px;
  }
  .page-container {
    padding: 24px 20px;
  }
  .breadcrumb {
    font-size: 10px;
    margin-bottom: 30px;
  }
  .page-heading h1 {
    font-size: 35px;
  }
  .answer-block {
    font-size: 16px;
  }
  .byline {
    font-size: 10px;
    gap: 7px;
  }
  .calculator-inputs,
  .calculator-output {
    padding: 22px;
  }
  .panel-heading > .eyebrow {
    font-size: 10px;
  }
  .panel-heading {
    gap: 8px;
  }
  .status-dot {
    font-size: 9px;
  }
  .field-grid {
    gap: 12px;
  }
  .field > span:first-child {
    font-size: 12px;
  }
  .input-wrap > span {
    font-size: 9px;
    padding-right: 7px;
  }
  .input-wrap input {
    padding: 11px 10px;
  }
  .form-actions {
    gap: 8px;
  }
  .form-actions .button {
    font-size: 12px;
    padding-left: 14px;
    padding-right: 14px;
    gap: 12px;
  }
  .article-layout {
    margin-top: 40px;
  }
  .prose {
    font-size: 16px;
    line-height: 1.8;
  }
  .prose h2 {
    font-size: 25px;
  }
  .article-sidebar {
    grid-template-columns: 1fr;
  }
  .trust-container {
    padding: 40px 22px;
  }
  .trust-container h1 {
    font-size: 35px;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  * {
    transition: none !important;
  }
}
@media print {
  .site-header,
  .draft-banner,
  .site-footer,
  .breadcrumb,
  .calculator-inputs,
  .article-layout,
  .result-actions,
  .quote-cta,
  .skip-link {
    display: none !important;
  }
  body {
    background: white;
    color: black;
    font-size: 12px;
  }
  main {
    width: 100%;
  }
  .page-container {
    padding: 0;
    max-width: none;
  }
  .page-heading {
    margin-bottom: 12px;
  }
  .page-heading h1 {
    font-size: 24px;
  }
  .answer-block {
    font-size: 12px;
  }
  .calculator-shell {
    display: block;
    border: 0;
  }
  .calculator-output {
    padding: 0;
    background: white;
  }
  .metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .metrics > div {
    padding: 10px 0;
  }
  .metrics dd {
    font-size: 24px;
  }
  .formula-box {
    font-size: 10px;
    padding: 10px;
    margin: 15px 0;
    break-inside: avoid;
  }
  .formula-box code {
    font-size: 10px;
  }
  .calculator-output .panel-heading {
    margin: 15px 0;
  }
  .byline {
    font-size: 9px;
  }
  .data-note {
    font-size: 10px;
  }
  .page-heading,
  .calculator-output {
    break-inside: avoid;
  }
}

/* Shared navigation and compact tool introduction, across all routes. */
.nav-dropdown[hidden] {
  display: none;
}
.nav-trigger {
  border: 0;
  background: transparent;
  color: inherit;
  padding: 8px 0;
  font: inherit;
  font-weight: inherit;
  white-space: nowrap;
}
.nav-trigger > span {
  margin-left: 7px;
  color: var(--muted);
}
.site-header nav {
  font-size: 14px;
  gap: 20px;
}
.nav-dropdown {
  top: calc(100% + 8px);
  width: 310px;
  min-width: 0;
}
.nav-dropdown a {
  font-size: 14px;
  font-weight: 500;
  min-height: 44px;
  display: flex;
  align-items: center;
  line-height: 1.4;
}
.nav-about {
  padding: 8px 0;
}
.tool-page {
  padding-top: 20px;
}
.tool-page .breadcrumb {
  margin-bottom: 18px;
}
.tool-page .page-heading {
  max-width: 940px;
  margin-bottom: 22px;
}
.tool-page .page-heading h1 {
  font-size: clamp(30px, 3.4vw, 44px);
  line-height: 1.12;
  margin: 10px 0 12px;
}
.tool-page .answer-block {
  font-size: 17px;
  line-height: 1.5;
  margin-bottom: 10px;
}
.tool-page .calculator-shell {
  scroll-margin-top: 18px;
}
.tool-page .panel-heading {
  margin-bottom: 20px;
}
.featured-card h3 {
  min-height: 0;
}
.featured-card {
  display: flex;
  flex-direction: column;
}
.featured-card .card-bottom {
  margin-top: auto;
}
.featured-card p {
  margin-bottom: 26px;
}
@media (max-width: 1100px) {
  .site-header nav {
    font-size: 13px;
    gap: 16px;
  }
}
@media (max-width: 820px) {
  .site-header nav {
    gap: 18px;
  }
}
@media (max-width: 600px) {
  .site-header nav {
    font-size: 12px;
    gap: 8px;
  }
  .nav-trigger > span {
    margin-left: 3px;
  }
  .nav-dropdown {
    top: 114px;
    width: calc(100vw - 40px);
    max-height: calc(100dvh - 135px);
  }
  .tool-page {
    padding-top: 16px;
  }
  .tool-page .breadcrumb {
    font-size: 11px;
    margin-bottom: 14px;
  }
  .tool-page .page-heading {
    margin-bottom: 18px;
  }
  .tool-page .page-heading h1 {
    font-size: 30px;
  }
  .tool-page .answer-block {
    font-size: 16px;
  }
}
@media print {
  .tool-page .page-heading h1 {
    font-size: 24px;
  }
}
@media (max-width: 600px) {
  .header-inner {
    position: relative;
  }
  .site-header nav {
    flex-wrap: wrap;
    justify-content: flex-start;
    column-gap: 18px;
    row-gap: 2px;
  }
  .nav-group {
    position: static;
  }
  .nav-trigger,
  .nav-about {
    padding: 6px 0;
  }
  .nav-dropdown {
    position: absolute;
    left: 20px !important;
    right: 20px !important;
    top: calc(100% + 1px);
    width: calc(100% - 40px);
    max-height: 60dvh;
  }
}

/* Optional quantities stay discoverable without extending every initial form. */
.optional-inputs {
  border-top: 1px solid var(--line);
  margin-top: 8px;
}
.optional-inputs summary {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 10px 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  list-style: none;
}
.optional-inputs summary::-webkit-details-marker {
  display: none;
}
.optional-inputs summary > span {
  margin-left: auto;
  color: var(--muted);
  font-size: 13px;
  font-weight: 400;
}
.optional-inputs summary::after {
  content: '+';
  font-size: 20px;
  font-weight: 400;
}
.optional-inputs[open] summary::after {
  content: '−';
}
.optional-inputs[open] summary {
  margin-bottom: 12px;
}
.empty-result .shape-diagram {
  width: 100%;
  max-width: 280px;
  margin-bottom: 18px;
}
.conversion-diagram {
  padding: 36px 10px;
  margin-bottom: 20px;
  border: 1px solid var(--line);
  font: 16px/1.8 var(--mono);
}
.prose table caption {
  text-align: left;
  font-size: 14px;
  margin-bottom: 12px;
  color: var(--muted);
}
.article-layout {
  margin-top: 40px;
}
.article-sidebar {
  align-self: start;
}
.page-heading {
  max-width: 940px;
}
.breadcrumb {
  margin-bottom: 28px;
}
@media (max-width: 600px) {
  .tool-page .breadcrumb {
    font-size: 13px;
  }
  .site-header nav {
    font-size: 13px;
  }
  .byline {
    font-size: 13px;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
````

## app/gravel-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/gravel-calculator/');
export default async function Page() {
  return renderPage('/gravel-calculator/');
}
````

## app/gravel-driveway-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/gravel-driveway-calculator/');
export default async function Page() {
  return renderPage('/gravel-driveway-calculator/');
}
````

## app/gravel-driveway-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/gravel-driveway-cost/');
export default async function Page() {
  return renderPage('/gravel-driveway-cost/');
}
````

## app/gravel-driveway/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/gravel-driveway/');
export default async function Page() {
  return renderPage('/gravel-driveway/');
}
````

## app/gravel-weight-per-cubic-yard/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/gravel-weight-per-cubic-yard/');
export default async function Page() {
  return renderPage('/gravel-weight-per-cubic-yard/');
}
````

## app/hot-mix-asphalt/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/hot-mix-asphalt/');
export default async function Page() {
  return renderPage('/hot-mix-asphalt/');
}
````

## app/how-to-lay-an-asphalt-driveway/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/how-to-lay-an-asphalt-driveway/');
export default async function Page() {
  return renderPage('/how-to-lay-an-asphalt-driveway/');
}
````

## app/how-to-repair-asphalt-driveway-cracks/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/how-to-repair-asphalt-driveway-cracks/');
export default async function Page() {
  return renderPage('/how-to-repair-asphalt-driveway-cracks/');
}
````

## app/how-to-repair-concrete-driveway-cracks/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/how-to-repair-concrete-driveway-cracks/');
export default async function Page() {
  return renderPage('/how-to-repair-concrete-driveway-cracks/');
}
````

## app/how-to-seal-a-driveway/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/how-to-seal-a-driveway/');
export default async function Page() {
  return renderPage('/how-to-seal-a-driveway/');
}
````

## app/layout.tsx

````tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import { JsonLd, organization } from '@/lib/seo';
import { SITE } from '@/lib/config';
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.name,
  description: 'Driveway cost guides and material calculators.',
  robots: { index: false, follow: true },
  icons: { icon: '/icon.svg' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {SITE.stage === 'draft' && (
          <div className="draft-banner">
            Development preview · Prices and material defaults await verified source data.
          </div>
        )}
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organization()} />
        <Analytics />
      </body>
    </html>
  );
}
````

## app/material-weights/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/material-weights/');
export default async function Page() {
  return renderPage('/material-weights/');
}
````

## app/methodology/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/methodology/');
export default async function Page() {
  return renderPage('/methodology/');
}
````

## app/not-found.tsx

````tsx
import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="page-container not-found">
      <span className="eyebrow">404 / Page not found</span>
      <h1>Find your next calculation.</h1>
      <p>This page is unavailable. Start with the homepage or a material calculator.</p>
      <div className="hero-actions">
        <Link href="/" className="button primary">
          Home
        </Link>
        <Link href="/asphalt-calculator/">Asphalt Calculator</Link>
        <Link href="/gravel-calculator/">Gravel Calculator</Link>
      </div>
    </div>
  );
}
````

## app/page.tsx

````tsx
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
````

## app/paver-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/paver-calculator/');
export default async function Page() {
  return renderPage('/paver-calculator/');
}
````

## app/paver-driveway-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/paver-driveway-cost/');
export default async function Page() {
  return renderPage('/paver-driveway-cost/');
}
````

## app/pea-gravel-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/pea-gravel-calculator/');
export default async function Page() {
  return renderPage('/pea-gravel-calculator/');
}
````

## app/privacy/page.tsx

````tsx
import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'Privacy Policy',
  description: 'This policy is in editorial preparation.',
  url: '/privacy/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>Privacy Policy</h1>
      <div className="prose">
        <p>
          <strong>This policy is in editorial preparation.</strong>
        </p>
        <p>
          {
            'Calculations run in the browser. The draft site has no enabled lead collection or advertising. A verified policy describing hosting, retention, contact details, and each enabled integration is required before launch.'
          }
        </p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Privacy Policy', url: '/privacy/' })} />
    </div>
  );
}
````

## app/repave-asphalt-driveway-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/repave-asphalt-driveway-cost/');
export default async function Page() {
  return renderPage('/repave-asphalt-driveway-cost/');
}
````

## app/replace-concrete-driveway-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/replace-concrete-driveway-cost/');
export default async function Page() {
  return renderPage('/replace-concrete-driveway-cost/');
}
````

## app/road-base-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/road-base-calculator/');
export default async function Page() {
  return renderPage('/road-base-calculator/');
}
````

## app/robots.ts

````typescript
import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/config';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return SITE.stage === 'launch'
    ? {
        rules: { userAgent: '*', allow: '/', disallow: '/api/' },
        sitemap: SITE.url + '/sitemap.xml',
      }
    : { rules: { userAgent: '*', disallow: '/' } };
}
````

## app/rock-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/rock-calculator/');
export default async function Page() {
  return renderPage('/rock-calculator/');
}
````

## app/sealcoat-calculator/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/sealcoat-calculator/');
export default async function Page() {
  return renderPage('/sealcoat-calculator/');
}
````

## app/sitemap.ts

````typescript
import type { MetadataRoute } from 'next';
import { pages, getContent, isPublic } from '@/lib/content';
import { SITE } from '@/lib/config';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return pages
    .filter((p) => isPublic(p.url))
    .map((p) => ({ url: SITE.url + p.url, lastModified: getContent(p.url).data.updated }));
}
````

## app/stamped-concrete-driveway-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/stamped-concrete-driveway-cost/');
export default async function Page() {
  return renderPage('/stamped-concrete-driveway-cost/');
}
````

## app/standard-driveway-width/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/standard-driveway-width/');
export default async function Page() {
  return renderPage('/standard-driveway-width/');
}
````

## app/tar-and-chip-driveway-cost/page.tsx

````tsx
import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/tar-and-chip-driveway-cost/');
export default async function Page() {
  return renderPage('/tar-and-chip-driveway-cost/');
}
````

## app/terms/page.tsx

````tsx
import Link from 'next/link';
import { metadataFor, JsonLd, breadcrumbs } from '@/lib/seo';
export const metadata = metadataFor({
  title: 'Terms of Use',
  description: 'These terms are in editorial preparation.',
  url: '/terms/',
});
export default function Page() {
  return (
    <div className="trust-container">
      <span className="eyebrow">About the site</span>
      <h1>Terms of Use</h1>
      <div className="prose">
        <p>
          <strong>These terms are in editorial preparation.</strong>
        </p>
        <p>
          {'Calculated quantities follow the supplied inputs. Estimates are not contractor quotes.'}
        </p>
        <p>
          Read the <Link href="/methodology/">Methodology</Link> for calculation and source details.
        </p>
      </div>
      <JsonLd data={breadcrumbs({ h1: 'Terms of Use', url: '/terms/' })} />
    </div>
  );
}
````

## components/Analytics.tsx

````tsx
'use client';
import { useEffect } from 'react';
export default function Analytics() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA4_ID;
    if (!id || !/^G-[A-Z0-9]+$/.test(id)) return;
    const load = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => window.dataLayer!.push(args);
      window.gtag('js', new Date());
      window.gtag('config', id, { send_page_view: false });
      window.gtag('event', 'page_view', {
        page_location: location.origin + location.pathname,
        page_path: location.pathname,
      });
      const s = document.createElement('script');
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
      s.async = true;
      document.head.appendChild(s);
    };
    window.addEventListener('pointerdown', load, { once: true });
    return () => window.removeEventListener('pointerdown', load);
  }, []);
  return null;
}
````

## components/Calculator.tsx

````tsx
'use client';
import { useEffect, useId, useState, type FormEvent } from 'react';
import {
  emptyState,
  evaluateTool,
  restoreState,
  surfaces,
  type ToolKind,
  type ToolState,
  type ToolResult,
} from '@/lib/calc/ui';
import { number, money } from '@/lib/format';
import { track } from '@/lib/analytics';
import { FormulaBox, ResultCard } from './Modules';
import ShapeDiagram from './ShapeDiagram';
import QuoteCTA from './QuoteCTA';
const human = (text: string) => text.replace(/-/g, ' ').replace(/^./, (x) => x.toUpperCase());
type Props = { kind: ToolKind; slug: string; surface?: string; material?: string };
export default function Calculator({
  kind,
  slug,
  surface = 'asphalt',
  material = 'material',
}: Props) {
  const [state, setState] = useState<ToolState>(emptyState);
  const [result, setResult] = useState<ToolResult | null>(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const id = useId();
  useEffect(() => {
    const raw = new URLSearchParams(location.search).get('inputs');
    if (raw)
      try {
        const shared = restoreState(raw);
        setState(shared);
        setResult(evaluateTool(kind, shared, surface));
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Invalid shared inputs.');
      }
  }, [kind, surface]);
  function change(next: ToolState) {
    setState(next);
    setResult(null);
    setError('');
    setMessage('');
  }
  function field(key: string, val: string) {
    change({ ...state, fields: { ...state.fields, [key]: val } });
  }
  function calculate(event: FormEvent) {
    event.preventDefault();
    try {
      const r = evaluateTool(kind, state, surface);
      setResult(r);
      setError('');
      track('calculator_used', slug);
      track('result_viewed', slug);
    } catch (e) {
      setResult(null);
      setError(e instanceof Error ? e.message : 'Check the inputs.');
    }
  }
  const input = (key: string, label: string, unit: string, required = true, help?: string) => (
    <label className="field" key={key}>
      <span>
        {label}
        {!required && <small> Optional</small>}
      </span>
      <div className="input-wrap">
        <input
          name={key}
          type="number"
          step="any"
          min={['waste', 'compaction'].includes(key) ? '0' : undefined}
          value={state.fields[key] ?? ''}
          onChange={(e) => field(key, e.target.value)}
          required={required}
          aria-describedby={help ? `${id}-${key}-help` : undefined}
        />
        <span>{unit}</span>
      </div>
      {help && <small id={`${id}-${key}-help`}>{help}</small>}
    </label>
  );
  const checkbox = (key: string, label: string) => (
    <label className="check">
      <input
        type="checkbox"
        checked={state.fields[key] === 'true'}
        onChange={(e) => field(key, String(e.target.checked))}
      />
      {label}
    </label>
  );
  const cost = kind === 'cost' || kind === 'compare';
  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('Copied to clipboard.');
    } catch {
      setMessage('Copy is unavailable in this browser.');
    }
  }
  const share = () => {
    const url = new URL(location.href);
    url.search = '';
    url.searchParams.set('inputs', JSON.stringify(state));
    history.replaceState(null, '', url);
    void copy(url.toString());
  };
  return (
    <div className="calculator-shell" id="calculator">
      <form className="calculator-inputs" onSubmit={calculate}>
        <div className="panel-heading">
          <span className="eyebrow">01 / Your measurements</span>
          <span className="unit-badge">US units</span>
        </div>
        {kind === 'converter' ? (
          <>
            <label className="field">
              <span>Conversion direction</span>
              <select
                value={state.fields.direction ?? 'yards-to-tons'}
                onChange={(e) => field('direction', e.target.value)}
              >
                <option value="yards-to-tons">Cubic yards to short tons</option>
                <option value="tons-to-yards">Short tons to cubic yards</option>
              </select>
            </label>
            {input(
              'amount',
              'Quantity',
              state.fields.direction === 'tons-to-yards' ? 'short tons' : 'yd³',
            )}
            {input(
              'density',
              `${human(material)} density`,
              'short tons/yd³',
              true,
              'Enter the density from your supplier.',
            )}
          </>
        ) : (
          <>
            {state.sections.map((section, index) => (
              <fieldset className="measurement-section" key={index}>
                <legend>Section {index + 1}</legend>
                <div className="field-grid">
                  {(['length', 'width'] as const).map((key) => (
                    <label className="field" key={key}>
                      <span>
                        {key === 'length' ? 'Length' : section.tapered ? 'Start width' : 'Width'}
                      </span>
                      <div className="input-wrap">
                        <input
                          name={`section-${index}-${key}`}
                          type="number"
                          step="any"
                          required
                          value={section[key]}
                          onChange={(e) =>
                            change({
                              ...state,
                              sections: state.sections.map((s, i) =>
                                i === index ? { ...s, [key]: e.target.value } : s,
                              ),
                            })
                          }
                        />
                        <span>ft</span>
                      </div>
                    </label>
                  ))}
                </div>
                <div className="section-options">
                  <label className="check">
                    <input
                      type="checkbox"
                      checked={section.tapered}
                      onChange={(e) =>
                        change({
                          ...state,
                          sections: state.sections.map((s, i) =>
                            i === index ? { ...s, tapered: e.target.checked } : s,
                          ),
                        })
                      }
                    />
                    Tapered width
                  </label>
                  <label className="check">
                    <input
                      type="checkbox"
                      checked={section.sloped}
                      onChange={(e) =>
                        change({
                          ...state,
                          sections: state.sections.map((s, i) =>
                            i === index ? { ...s, sloped: e.target.checked } : s,
                          ),
                        })
                      }
                    />
                    Add slope
                  </label>
                </div>
                {section.tapered && (
                  <label className="field">
                    <span>End width</span>
                    <div className="input-wrap">
                      <input
                        type="number"
                        step="any"
                        required
                        value={section.endWidth}
                        onChange={(e) =>
                          change({
                            ...state,
                            sections: state.sections.map((s, i) =>
                              i === index ? { ...s, endWidth: e.target.value } : s,
                            ),
                          })
                        }
                      />
                      <span>ft</span>
                    </div>
                  </label>
                )}
                {section.sloped && (
                  <div className="field-grid">
                    <label className="field">
                      <span>Grade</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          step="any"
                          required
                          value={section.grade}
                          onChange={(e) =>
                            change({
                              ...state,
                              sections: state.sections.map((s, i) =>
                                i === index ? { ...s, grade: e.target.value } : s,
                              ),
                            })
                          }
                        />
                        <span>%</span>
                      </div>
                    </label>
                    <label className="field">
                      <span>Length measured</span>
                      <select
                        value={section.measured}
                        onChange={(e) =>
                          change({
                            ...state,
                            sections: state.sections.map((s, i) =>
                              i === index
                                ? { ...s, measured: e.target.value as 'flat' | 'slope' }
                                : s,
                            ),
                          })
                        }
                      >
                        <option value="flat">Along flat ground</option>
                        <option value="slope">Along the slope</option>
                      </select>
                    </label>
                  </div>
                )}
                {state.sections.length > 1 && (
                  <button
                    type="button"
                    className="text-button"
                    onClick={() =>
                      change({ ...state, sections: state.sections.filter((_, i) => i !== index) })
                    }
                  >
                    Remove section {index + 1}
                  </button>
                )}
              </fieldset>
            ))}
            <button
              type="button"
              className="add-section"
              disabled={state.sections.length >= 100}
              onClick={() =>
                change({ ...state, sections: [...state.sections, emptyState().sections[0]] })
              }
            >
              ＋ Add another area
            </button>
            <p className="input-hint">
              Divide an irregular driveway into measured sections. Each section adds to the total
              area.
            </p>
          </>
        )}
        {kind !== 'converter' && (
          <div className="panel-heading subheading">
            <span className="eyebrow">02 / {cost ? 'Cost assumptions' : 'Material inputs'}</span>
          </div>
        )}
        {cost ? (
          <>
            <label className="field">
              <span>Cost area tier</span>
              <select
                value={state.fields.tier ?? 'average'}
                onChange={(e) => field('tier', e.target.value)}
              >
                <option value="low">Low cost area</option>
                <option value="average">Average cost area</option>
                <option value="high">High cost area</option>
              </select>
              <small>Regional multipliers require approved source data.</small>
            </label>
            <div className="checks">
              {checkbox('removal', 'Include removal and disposal')}
              {checkbox('base', 'Include base preparation')}
              {checkbox('delivery', 'Include delivery')}
            </div>
            {state.fields.delivery === 'true' && input('loads', 'Truckload count', 'loads')}
            {(surface === 'concrete' || surface === 'slab') && (
              <>
                <div className="field-grid">
                  {input('depth', 'Slab thickness', 'in', false)}
                  {input('waste', 'Waste allowance', '%', false)}
                </div>
                {checkbox('shortLoad', 'Check concrete short-load fee')}
              </>
            )}
            {kind === 'compare' && (
              <fieldset>
                <legend>Surfaces to compare</legend>
                <div className="surface-choices">
                  {surfaces.map((s) => (
                    <label className="check" key={s}>
                      <input
                        type="checkbox"
                        checked={state.surfaces.includes(s)}
                        onChange={(e) =>
                          change({
                            ...state,
                            surfaces: e.target.checked
                              ? [...state.surfaces, s]
                              : state.surfaces.filter((x) => x !== s),
                            selectedSurface:
                              !e.target.checked && state.selectedSurface === s
                                ? (state.surfaces.find((x) => x !== s) ?? s)
                                : state.selectedSurface,
                          })
                        }
                      />
                      {human(s)}
                    </label>
                  ))}
                </div>
                <fieldset>
                  <legend>Surface of interest</legend>
                  <div className="surface-choices">
                    {surfaces
                      .filter((s) => state.surfaces.includes(s))
                      .map((s) => (
                        <label key={s} className="check">
                          <input
                            type="radio"
                            name="surface-of-interest"
                            value={s}
                            checked={state.selectedSurface === s}
                            onChange={() => change({ ...state, selectedSurface: s })}
                          />
                          {human(s)}
                        </label>
                      ))}
                  </div>
                </fieldset>
                <label className="field">
                  <span>Sort results by</span>
                  <select
                    value={state.sort}
                    onChange={(e) =>
                      change({ ...state, sort: e.target.value as 'upfront' | 'annual' })
                    }
                  >
                    <option value="upfront">Lowest upfront cost</option>
                    <option value="annual">Lowest cost per year of life</option>
                  </select>
                </label>
              </fieldset>
            )}
            <p className="data-note">
              Price data not loaded. Cost ranges stay hidden until source data is approved.
            </p>
          </>
        ) : kind === 'sealcoat' ? (
          <div className="field-grid">
            {input('coats', 'Number of coats', 'coats')}
            {input('coverage', 'Label coverage', 'ft²/gal')}
            {input('containerSize', 'Container size', 'gal')}
          </div>
        ) : kind === 'paver' ? (
          <div className="field-grid">
            {input('paverLength', 'Paver length', 'in')}
            {input('paverWidth', 'Paver width', 'in')}
            {input('waste', 'Waste allowance', '%')}
            {input('baseDepth', 'Base depth', 'in')}
            {input('sandDepth', 'Bedding sand depth', 'in')}
            {input('baseDensity', 'Base density', 'short tons/yd³')}
            {input('sandDensity', 'Sand density', 'short tons/yd³')}
            {input('compaction', 'Base compaction allowance', '%')}
          </div>
        ) : kind !== 'converter' ? (
          <>
            <div className="field-grid">
              {input(
                'depth',
                kind === 'layers' ? 'Surface layer depth' : 'Thickness / depth',
                'in',
              )}
              {input('waste', 'Waste allowance', '%', true, 'Enter 0 to exclude waste.')}
            </div>
            {kind === 'layers' && (
              <div className="field-grid">
                {input('baseDepth', 'Base layer depth', 'in')}
                {input('baseDensity', 'Base density', 'short tons/yd³')}
              </div>
            )}
            {kind !== 'concrete' &&
              input(
                'density',
                kind === 'layers' ? 'Surface density' : `${human(material)} density`,
                kind === 'asphalt' ? 'lb/ft³' : 'short tons/yd³',
                true,
                'Use the density provided by your supplier.',
              )}
            {(kind === 'gravel' || kind === 'layers') &&
              input(
                'compaction',
                'Compaction allowance',
                '%',
                true,
                'Enter 0 to exclude compaction allowance.',
              )}
            {kind === 'concrete' && (
              <details className="optional-inputs">
                <summary>
                  Bag quantities <span>Optional</span>
                </summary>
                <div className="field-grid">
                  {input('bagSize', 'Bag weight', 'lb', false)}
                  {input('bagYield', 'Label yield per bag', 'ft³/bag', false)}
                </div>
                <p className="input-hint">The yield printed on the bag determines the bag count.</p>
              </details>
            )}
            <details className="optional-inputs">
              <summary>
                Delivery loads <span>Optional</span>
              </summary>
              {input(
                'capacity',
                'Truck capacity',
                kind === 'concrete' ? 'yd³/load' : 'short tons/load',
                false,
              )}
              <p className="input-hint">
                Enter usable capacity per truckload to calculate the number of loads.
              </p>
            </details>
          </>
        ) : null}
        {!cost && kind !== 'converter' && (
          <p className="input-hint">Use your supplier or product label for material values.</p>
        )}
        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}
        <div className="form-actions">
          <button className="button primary" type="submit">
            {cost ? 'Calculate estimate' : 'Calculate quantity'} <span aria-hidden="true">↗</span>
          </button>
          <button
            className="button secondary"
            type="button"
            onClick={() => {
              change(emptyState());
              history.replaceState(null, '', location.pathname);
            }}
          >
            Reset
          </button>
        </div>
      </form>
      <div className="calculator-output">
        <div className="panel-heading">
          <span className="eyebrow">03 / Your result</span>
          <span className="status-dot">{result ? 'Calculated' : 'Ready for inputs'}</span>
        </div>
        <ResultCard>
          {result ? (
            <>
              <dl className="metrics">
                {result.metrics.map((m) => (
                  <div key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>
                      {m.value}
                      <small>{m.unit}</small>
                    </dd>
                  </div>
                ))}
              </dl>
              {!!result.missing?.length && (
                <div className="data-note">
                  <strong>Price data not loaded</strong>
                  <p>
                    {result.missing.map(human).join(', ')}. Verified price ranges and multipliers
                    are required.
                  </p>
                </div>
              )}
              {!!result.rows?.length && (
                <div className="table-scroll">
                  <table>
                    <caption>Estimated surface costs, using the selected assumptions.</caption>
                    <thead>
                      <tr>
                        <th>Surface</th>
                        <th>Estimate</th>
                        <th>Lifespan</th>
                        <th>Cost / year</th>
                        <th>Annual upkeep</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.rows.map((r) => (
                        <tr key={r.name}>
                          <th>{human(r.name)}</th>
                          <td>
                            {money(r.low)}–{money(r.high)}
                          </td>
                          <td>
                            {r.lifespan
                              ? `${number(r.lifespan.low)}–${number(r.lifespan.high)} years`
                              : 'Not loaded'}
                          </td>
                          <td>
                            {r.annual
                              ? `${money(r.annual.low)}–${money(r.annual.high)}`
                              : 'Not loaded'}
                          </td>
                          <td>{r.upkeep.length ? r.upkeep.join('; ') : 'Not loaded'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p>
                    Cost per year divides the upfront range by the lifespan range; upkeep is
                    separate.
                  </p>
                </div>
              )}
              {cost && (
                <>
                  <p className="estimate-note">
                    Estimate only. This result is not a contractor quote.
                  </p>
                  <div className="result-assumptions">
                    <strong>Assumptions</strong>
                    <p>
                      Cost tier: {state.fields.tier ?? 'average'}. Removal:{' '}
                      {state.fields.removal === 'true' ? 'included' : 'excluded'}. Base work:{' '}
                      {state.fields.base === 'true' ? 'included' : 'excluded'}. Delivery:{' '}
                      {state.fields.delivery === 'true' ? 'included' : 'excluded'}.
                    </p>
                    {result.assumptions?.map((a) => (
                      <p key={a}>{a}</p>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="empty-result">
              {kind === 'converter' ? (
                <div className="conversion-diagram">Volume × density = weight</div>
              ) : (
                <ShapeDiagram tapered={state.sections.some((section) => section.tapered)} />
              )}
              <h3>
                {cost
                  ? 'Your measured area'
                  : kind === 'converter'
                    ? 'Your converted quantity'
                    : 'Your material quantity'}
              </h3>
              <p>
                {kind === 'converter'
                  ? 'Enter a quantity and material density, then calculate.'
                  : cost
                    ? 'Enter your dimensions to calculate area. Price ranges require verified source data.'
                    : 'Enter your dimensions and material inputs, then calculate.'}
              </p>
              <span className="empty-rule">No sign-up · US units</span>
            </div>
          )}
        </ResultCard>
        {result && (
          <>
            <h3 className="worked-inputs">Worked example from your inputs</h3>
            <FormulaBox>
              <code>{result.formula}</code>
              {result.steps.map((step) => (
                <p key={step}>{step}</p>
              ))}
            </FormulaBox>
            <div className="result-actions">
              <button onClick={() => void copy(result.summary)}>Copy result</button>
              <button onClick={() => window.print()}>Print</button>
              <button onClick={share}>Share link</button>
            </div>
            <p className="input-hint" role="status">
              {message}
            </p>
            <QuoteCTA
              area={result.area}
              surface={kind === 'compare' ? state.selectedSurface : surface}
              slug={slug}
            />
          </>
        )}
        {!result && (
          <div className="output-note">
            <span aria-hidden="true">↳</span>
            <p>
              Every result shows its formula.
              <br />
              Bags, containers, and delivery loads round up.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
````

## components/DraftGuidance.tsx

````tsx
import Link from 'next/link';
import { FormulaBox, QASection } from './Modules';
import type { ToolKind } from '@/lib/calc/ui';

export default function DraftGuidance({
  kind,
  costGuide,
  currentUrl,
}: {
  kind: ToolKind | null;
  costGuide: boolean;
  currentUrl: string;
}) {
  if (kind === 'cost' || kind === 'compare' || costGuide) {
    return (
      <QASection question="How do you prepare a cost estimate?">
        <p>
          <strong>Start with measured area and an itemized supplier or contractor quote.</strong>{' '}
          Match each rate to the unit on that quote.
        </p>
        <div className="table-scroll">
          <table>
            <caption>Information to collect for a driveway quote</caption>
            <thead>
              <tr>
                <th>Input</th>
                <th>Record</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Project size</th>
                <td>Length and width in feet; measure separate sections individually.</td>
              </tr>
              <tr>
                <th>Surface work</th>
                <td>Quoted rate and its unit, such as dollars per square foot.</td>
              </tr>
              <tr>
                <th>Preparation</th>
                <td>Separate removal, base work, grading, and repair charges.</td>
              </tr>
              <tr>
                <th>Delivery and minimums</th>
                <td>Delivery fees and any minimum order or project charge.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          For material-only quotes, use the supplier’s weight or volume unit. Installed-work rates
          and material-only rates cover different work.
        </p>
        <p>
          Published price ranges are awaiting verified source data.{' '}
          {currentUrl === '/driveway-cost-calculator/' ? (
            'The calculator above calculates measured area while that pricing is unavailable.'
          ) : (
            <>
              The <Link href="/driveway-cost-calculator/">Driveway Cost Calculator</Link> calculates
              measured area while that pricing is unavailable.
            </>
          )}
        </p>
      </QASection>
    );
  }
  if (!kind) return null;
  const rows: [string, string, string][] =
    kind === 'converter'
      ? [
          ['Quantity', 'yd³ or short tons', 'Choose the conversion direction.'],
          ['Material density', 'short tons/yd³', 'Use the value supplied for your material.'],
        ]
      : [
          ['Length and width', 'ft', 'Measure each section. For a taper, enter both end widths.'],
          ...(kind === 'sealcoat'
            ? ([
                ['Coverage', 'ft²/gal', 'Use the coverage rate printed on the product label.'],
                ['Coats', 'count', 'Enter the number of coats in your plan.'],
                [
                  'Container size',
                  'gal',
                  'Enter the amount in one container to calculate container count.',
                ],
              ] as [string, string, string][])
            : kind === 'paver'
              ? ([
                  ['Paver dimensions', 'in', 'Enter the length and width of one paver.'],
                  [
                    'Base and bedding',
                    'in; short tons/yd³',
                    'Use your planned depths and supplier densities.',
                  ],
                ] as [string, string, string][])
              : ([
                  ['Depth', 'in', 'Enter your planned material thickness.'],
                  ...(kind === 'concrete'
                    ? []
                    : [
                        [
                          'Density',
                          kind === 'asphalt' ? 'lb/ft³' : 'short tons/yd³',
                          'Get the density for this material from your supplier.',
                        ],
                      ]),
                ] as [string, string, string][])),
          ...(kind === 'sealcoat'
            ? []
            : ([['Allowances', '%', 'Enter your project allowance; enter 0 to exclude it.']] as [
                string,
                string,
                string,
              ][])),
          ...(kind === 'concrete'
            ? ([
                [
                  'Bag yield (optional)',
                  'ft³/bag',
                  'Use the yield on the bag to calculate bag count.',
                ],
              ] as [string, string, string][])
            : []),
        ];
  return (
    <QASection question="Which inputs does this calculator use?">
      <p>
        <strong>Your measurements and supplier values determine the result.</strong> Material values
        start blank. Enter the density, yield, or coverage for the product you are ordering.
      </p>
      <div className="table-scroll">
        <table>
          <caption>Input units and where to find each value</caption>
          <thead>
            <tr>
              <th>Input</th>
              <th>Unit</th>
              <th>How to enter it</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, unit, note]) => (
              <tr key={label}>
                <th>{label}</th>
                <td>{unit}</td>
                <td>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {kind !== 'converter' && kind !== 'sealcoat' && kind !== 'paver' && (
        <FormulaBox>
          Volume in cubic yards = area in square feet × (depth in inches ÷ 12) ÷ 27. Waste and
          compaction allowances apply only when entered.
        </FormulaBox>
      )}
    </QASection>
  );
}
````

## components/Footer.tsx

````tsx
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link href="/" className="footer-brand">
            Driveway Calculators
          </Link>
          <p>
            Driveway cost guides and material calculators.
            <br />
            US units. Formulas you can inspect.
          </p>
        </div>
        <div>
          <span className="eyebrow">Tools</span>
          <Link href="/asphalt-calculator/">Asphalt Calculator</Link>
          <Link href="/gravel-driveway-calculator/">Gravel Driveway Calculator</Link>
          <Link href="/concrete-calculator/">Concrete Calculator</Link>
        </div>
        <div>
          <span className="eyebrow">About the site</span>
          <Link href="/methodology/">Methodology</Link>
          <Link href="/author/farrukh-abdullah/">Farrukh Abdullah</Link>
          <Link href="/contact/">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getUTCFullYear()} Driveway Calculators</span>
        <div>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/disclosure/">Disclosure</Link>
        </div>
      </div>
    </footer>
  );
}
````

## components/Header.tsx

````tsx
import Link from 'next/link';
import { pages } from '@/lib/content';
import Navigation from './Navigation';
const groups = [
  { label: 'Costs', filter: (type: string) => /Cost|Compare|Pillar/.test(type) },
  { label: 'Calculators', filter: (type: string) => /tool|estimator|Converter/.test(type) },
  { label: 'Materials', filter: (type: string) => /Reference|Spec/.test(type) },
  {
    label: 'Repair & Maintenance',
    filter: (_: string, url: string) => /repair|seal|maintenance|patch|filler/.test(url),
  },
];
export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Driveway Calculators home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 28 28">
              <path
                d="M6 24L11 4H17L22 24M14 7V11M14 14V18M14 21V24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
          <span>Driveway Calculators</span>
        </Link>
        <Navigation
          groups={groups.map((group) => ({
            label: group.label,
            links: pages
              .filter((page) => group.filter(page.type, page.url))
              .map((page) => ({ href: page.url, label: page.h1 })),
          }))}
        />
        <Link href="/asphalt-calculator/" className="header-tool">
          Start calculating <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
````

## components/HelpfulVote.tsx

````tsx
'use client';
import { useState } from 'react';
export default function HelpfulVote() {
  const [vote, setVote] = useState<string | null>(null);
  return (
    <div className="helpful">
      <span>Was this page helpful?</span>
      {vote ? (
        <span role="status">Feedback saved on this device.</span>
      ) : (
        <>
          <button
            onClick={() => {
              setVote('yes');
              try {
                localStorage.setItem('helpful:' + location.pathname, 'yes');
              } catch {}
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setVote('no');
              try {
                localStorage.setItem('helpful:' + location.pathname, 'no');
              } catch {}
            }}
          >
            No
          </button>
        </>
      )}
    </div>
  );
}
````

## components/Modules.tsx

````tsx
import Link from 'next/link';
import { FLAGS } from '@/lib/config';
import type { ReactNode } from 'react';
export function AnswerBlock({ children }: { children: ReactNode }) {
  return <p className="answer-block">{children}</p>;
}
export function FormulaBox({ children }: { children: ReactNode }) {
  return (
    <div className="formula-box">
      <span className="eyebrow">Calculation method</span>
      <div>{children}</div>
    </div>
  );
}
export function QASection({ question, children }: { question: string; children: ReactNode }) {
  return (
    <section className="qa">
      <h2>{question}</h2>
      {children}
    </section>
  );
}
export function RelatedLink({
  href,
  anchor,
  relationshipText,
}: {
  href: string;
  anchor: string;
  relationshipText: string;
}) {
  return (
    <p className="related-link">
      <Link href={href}>
        {anchor} <span aria-hidden="true">↗</span>
      </Link>
      <span>{relationshipText}</span>
    </p>
  );
}
export function SourceNote({ children }: { children: ReactNode }) {
  return (
    <div className="source-note">
      <strong>Sources</strong>
      <p>{children}</p>
    </div>
  );
}
export function LastUpdated({ date }: { date: string }) {
  return (
    <time dateTime={date}>
      {new Date(date + 'T00:00:00Z').toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
      })}
    </time>
  );
}
export function AdSlot() {
  return FLAGS.ads ? (
    <div className="ad-slot" aria-label="Advertisement">
      <span>Advertisement</span>
    </div>
  ) : null;
}
export function AffiliateBox({ children }: { children: ReactNode }) {
  return <aside className="affiliate-box">{children}</aside>;
}
export function Disclosure() {
  return (
    <p className="disclosure">
      Lead and affiliate relationships are explained in the{' '}
      <Link href="/disclosure/">Disclosure</Link>.
    </p>
  );
}
export function ResultCard({ children }: { children: ReactNode }) {
  return (
    <div className="result-card" role="status" aria-live="polite" aria-atomic="true">
      {children}
    </div>
  );
}
export function CalculatorShell({ children }: { children: ReactNode }) {
  return <div className="calculator-shell">{children}</div>;
}
````

## components/Navigation.tsx

````tsx
'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
type Group = { label: string; links: { href: string; label: string }[] };
export default function Navigation({ groups }: { groups: Group[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open === null) return;
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) setOpen(null);
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setOpen(null);
      nav.current?.querySelector<HTMLButtonElement>(`[data-nav-trigger="${open}"]`)?.focus();
    }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);
  return (
    <nav
      ref={nav}
      aria-label="Main navigation"
      onBlur={(event) => {
        if (
          event.relatedTarget instanceof Node &&
          !event.currentTarget.contains(event.relatedTarget)
        )
          setOpen(null);
      }}
    >
      {groups.map((group, index) => (
        <div className="nav-group" key={group.label}>
          <button
            type="button"
            className="nav-trigger"
            data-nav-trigger={index}
            aria-expanded={open === index}
            aria-controls={`main-menu-${index}`}
            onClick={() => setOpen(open === index ? null : index)}
          >
            {group.label}
            <span aria-hidden="true">⌄</span>
          </button>
          <div className="nav-dropdown" id={`main-menu-${index}`} hidden={open !== index}>
            {group.links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(null)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <Link className="nav-about" href="/about/" onClick={() => setOpen(null)}>
        About
      </Link>
    </nav>
  );
}
````

## components/QuoteCTA.tsx

````tsx
'use client';
import { useEffect, useState, useRef, type FormEvent } from 'react';
import Link from 'next/link';
import { FLAGS } from '@/lib/config';
import { track } from '@/lib/analytics';
type Config = {
  consent: string;
  success: string;
  phone: string;
  phoneRequired: boolean;
  turnstileSiteKey: string;
};
declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
    onDrivewayTurnstile?: () => void;
  }
}
export default function QuoteCTA({
  area,
  surface,
  slug,
}: {
  area?: number;
  surface: string;
  slug: string;
}) {
  const requestId = useRef<string | null>(null);
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState<Config | null>(null);
  const [token, setToken] = useState('');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (!FLAGS.leads || !open) return;
    let active = true;
    fetch('/api/lead')
      .then((r) => (r.ok ? r.json() : null))
      .then((c) => {
        if (active) setConfig(c);
      })
      .catch(() => setStatus('Quote requests are unavailable.'));
    return () => {
      active = false;
    };
  }, [open]);
  useEffect(() => {
    if (!config || !open) return;
    let widget: string | undefined;
    let removed = false;
    const init = () => {
      const el = document.getElementById('quote-turnstile');
      if (el && !removed && window.turnstile)
        widget = window.turnstile.render(el, {
          sitekey: config.turnstileSiteKey,
          action: 'quote',
          callback: (t: string) => setToken(t),
          'expired-callback': () => setToken(''),
        });
    };
    if (window.turnstile) init();
    else {
      window.onDrivewayTurnstile = init;
      const script = document.createElement('script');
      script.src =
        'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onDrivewayTurnstile&render=explicit';
      script.async = true;
      document.head.appendChild(script);
    }
    return () => {
      removed = true;
      if (widget) window.turnstile?.remove(widget);
    };
  }, [config, open]);
  if (!FLAGS.leads) return null;
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy || !config) return;
    const form = e.currentTarget;
    setBusy(true);
    setStatus('');
    try {
      const fields = Object.fromEntries(new FormData(form));
      requestId.current ??= crypto.randomUUID();
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          area: Number(fields.area),
          consent: fields.consent === 'on',
          token,
          idempotencyKey: requestId.current,
          pageUrl: location.origin + location.pathname,
        }),
      });
      if (!res.ok)
        throw new Error(
          res.status === 429
            ? 'Too many requests. Try again later.'
            : 'The request was not accepted. Check the fields and try again.',
        );
      setStatus(config.success);
      setOpen(false);
    } catch (e) {
      setStatus(e instanceof Error ? e.message : 'Request failed.');
    } finally {
      setBusy(false);
    }
  }
  return (
    <aside className="quote-cta">
      <h3>Get free driveway quotes</h3>
      <p>Share your project details with the approved quote network.</p>
      <button
        className="button primary"
        onClick={() => {
          setOpen(!open);
          track('quote_cta_viewed', slug);
          track('quote_cta_clicked', slug);
        }}
      >
        {open ? 'Close form' : 'Request quotes'}
      </button>
      {open && config && (
        <form onSubmit={submit} className="quote-form">
          <div className="field-grid">
            <label className="field">
              <span>ZIP code</span>
              <input name="zip" required pattern="[0-9]{5}" inputMode="numeric" maxLength={5} />
            </label>
            <label className="field">
              <span>Project type</span>
              <select name="project">
                <option value="new">New</option>
                <option value="replace">Replace</option>
                <option value="resurface">Resurface</option>
                <option value="repair">Repair</option>
                <option value="seal">Seal</option>
              </select>
            </label>
            <label className="field">
              <span>Surface</span>
              <select
                name="surface"
                defaultValue={
                  ['asphalt', 'concrete', 'gravel', 'pavers'].includes(surface)
                    ? surface
                    : 'not-sure'
                }
              >
                {['asphalt', 'concrete', 'gravel', 'pavers', 'not-sure'].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Approximate size (ft²)</span>
              <input name="area" type="number" step="any" required min="0.01" defaultValue={area} />
            </label>
            <label className="field">
              <span>Timeline</span>
              <select name="timeline">
                <option value="within-1-month">Within 1 month</option>
                <option value="1-to-3-months">1 to 3 months</option>
                <option value="researching">Researching</option>
              </select>
            </label>
            <label className="field">
              <span>First name</span>
              <input name="firstName" required maxLength={100} />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" required />
            </label>
            <label className="field">
              <span>Phone{config.phoneRequired ? '' : ' (optional)'}</span>
              <input name="phone" type="tel" required={config.phoneRequired} />
            </label>
          </div>
          <label className="honeypot" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <label className="check">
            <input name="consent" type="checkbox" required />
            {config.consent}
          </label>
          <div id="quote-turnstile" />
          <p>
            <Link href="/privacy/">Privacy policy</Link>
          </p>
          <button className="button primary" disabled={busy || !token}>
            {busy ? 'Sending…' : 'Submit request'}
          </button>
        </form>
      )}
      {status && <p role="status">{status}</p>}
      {config?.phone && (
        <a className="mobile-call" href={'tel:' + config.phone}>
          Call for quotes
        </a>
      )}
      <p className="disclosure">
        Driveway Calculators receives payment for accepted quote requests.
      </p>
    </aside>
  );
}
````

## components/ShapeDiagram.tsx

````tsx
export default function ShapeDiagram({ tapered = false }: { tapered?: boolean }) {
  return (
    <svg
      className="shape-diagram"
      viewBox="0 0 380 260"
      role="img"
      aria-labelledby="shape-title shape-desc"
    >
      <title id="shape-title">
        {tapered ? 'Measure a tapered driveway' : 'Measure a rectangular driveway'}
      </title>
      <desc id="shape-desc">
        {tapered ? 'Measure the length and both end widths.' : 'Measure the length and width.'}{' '}
        Divide an irregular driveway into separate sections.
      </desc>
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity=".07" />
        </pattern>
      </defs>
      <rect width="380" height="260" fill="url(#grid)" />
      <path
        d={tapered ? 'M115 50 L250 50 L295 210 L75 210 Z' : 'M75 50 H295 V210 H75 Z'}
        fill="currentColor"
        fillOpacity=".04"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M180 50 V210" stroke="currentColor" strokeDasharray="5 5" opacity=".25" />
      <path
        d={
          tapered
            ? 'M115 28H250 M115 22V34 M250 22V34 M75 234H295 M75 228V240 M295 228V240 M325 50V210 M319 50H331 M319 210H331'
            : 'M75 28H295 M75 22V34 M295 22V34 M325 50V210 M319 50H331 M319 210H331'
        }
        stroke="currentColor"
      />
      <text x="180" y="19" textAnchor="middle">
        {tapered ? 'START WIDTH' : 'WIDTH'}
      </text>
      {tapered && (
        <text x="185" y="255" textAnchor="middle">
          END WIDTH
        </text>
      )}
      <text x="342" y="139" transform="rotate(90 342 139)" textAnchor="middle">
        LENGTH
      </text>
      <text x="185" y="132" textAnchor="middle" className="diagram-label">
        YOUR DRIVEWAY
      </text>
    </svg>
  );
}
````

## content/asphalt-calculator.mdx

````mdx
---
title: "Asphalt Calculator: Tons Needed for a Driveway or Lot"
description: "Calculate tons of asphalt from length, width and thickness. Editable density and waste allowance. Free, no sign-up."
slug: "/asphalt-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt calculator"
keywords: ["figuring asphalt", "asphalt tonnage calculator", "asphalt calculator online", "asphalt driveway calculator", "how to calculate asphalt tonnage", "how to figure asphalt tonnage", "how do you calculate asphalt tonnage", "how to figure out asphalt tonnage", "how to calculate tons of asphalt", "how to figure tons of asphalt", "bitumen calculator"]
related: [{"slug": "/asphalt-driveway-cost-calculator/", "annotation": "explains the related asphalt driveway cost calculator inputs or next step"}, {"slug": "/asphalt-driveway-thickness/", "annotation": "explains the related asphalt driveway thickness inputs or next step"}, {"slug": "/material-weights/", "annotation": "explains the related material weights inputs or next step"}]
status: "draft"
seq: 2
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Asphalt Calculator}}
````

## content/asphalt-cold-patch.mdx

````mdx
---
title: "Asphalt Cold Patch: How to Use It on Potholes"
description: "What asphalt cold patch is, how to apply it to a pothole and how long a cold patch repair lasts."
slug: "/asphalt-cold-patch/"
type: "Product guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt cold patch"
keywords: []
related: [{"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}]
status: "draft"
seq: 32
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Asphalt Cold Patch}}
````

## content/asphalt-driveway-cost-calculator.mdx

````mdx
---
title: "Asphalt Driveway Cost Calculator: Free Estimate"
description: "Estimate your asphalt driveway cost from size, thickness, base work and removal. Low-to-high range with editable assumptions."
slug: "/asphalt-driveway-cost-calculator/"
type: "Cost estimator"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt driveway cost calculator"
keywords: ["driveway paving cost calculator"]
related: [{"slug": "/asphalt-driveway-cost/", "annotation": "explains the related asphalt driveway cost inputs or next step"}, {"slug": "/asphalt-calculator/", "annotation": "explains the related asphalt calculator inputs or next step"}]
status: "draft"
seq: 4
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Asphalt Driveway Cost Calculator}}
````

## content/asphalt-driveway-cost.mdx

````mdx
---
title: "Asphalt Driveway Cost per Sq Ft (2026)"
description: "Asphalt driveway cost per square foot, per ton and for a 20x20 driveway, plus what moves the price. Includes a free estimator."
slug: "/asphalt-driveway-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt driveway cost"
keywords: ["cost of asphalt driveway", "how much does it cost to pave a driveway", "blacktop driveway cost", "asphalt driveway cost per square foot", "how much does an asphalt driveway cost", "how much does it cost to asphalt a driveway", "20x20 asphalt driveway cost", "cost of asphalt per ton", "hot mix asphalt cost per ton"]
related: [{"slug": "/asphalt-calculator/", "annotation": "explains the related asphalt calculator inputs or next step"}, {"slug": "/asphalt-driveway-cost-calculator/", "annotation": "explains the related asphalt driveway cost calculator inputs or next step"}, {"slug": "/concrete-vs-asphalt-driveway/", "annotation": "explains the related concrete vs asphalt driveway inputs or next step"}, {"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}, {"slug": "/repave-asphalt-driveway-cost/", "annotation": "explains the related repave asphalt driveway cost inputs or next step"}]
status: "draft"
seq: 3
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Asphalt Driveway Cost in 2026}}
````

## content/asphalt-driveway-maintenance.mdx

````mdx
---
title: "Asphalt Driveway Maintenance: Sealing, Cracks, Cleaning"
description: "The maintenance an asphalt driveway needs, how often it is done and what each task costs."
slug: "/asphalt-driveway-maintenance/"
type: "Guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt driveway maintenance"
keywords: []
related: [{"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}, {"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}]
status: "draft"
seq: 44
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Asphalt Driveway Maintenance}}
````

## content/asphalt-driveway-repair-cost.mdx

````mdx
---
title: "Asphalt Driveway Repair Cost: Cracks, Patches, Potholes"
description: "Asphalt driveway repair cost by repair type: crack filling, patching, potholes and sections, with when repair beats repaving."
slug: "/asphalt-driveway-repair-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt driveway repair cost"
keywords: ["asphalt driveway repair"]
related: [{"slug": "/driveway-crack-filler/", "annotation": "explains the related driveway crack filler inputs or next step"}, {"slug": "/asphalt-cold-patch/", "annotation": "explains the related asphalt cold patch inputs or next step"}, {"slug": "/repave-asphalt-driveway-cost/", "annotation": "explains the related repave asphalt driveway cost inputs or next step"}]
status: "draft"
seq: 13
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Asphalt Driveway Repair Cost}}
````

## content/asphalt-driveway-thickness.mdx

````mdx
---
title: "Asphalt Driveway Thickness: How Many Inches Is Needed"
description: "Recommended asphalt driveway thickness by use, base depth and how thickness changes cost and tonnage."
slug: "/asphalt-driveway-thickness/"
type: "Spec guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt driveway thickness"
keywords: []
related: [{"slug": "/asphalt-calculator/", "annotation": "explains the related asphalt calculator inputs or next step"}, {"slug": "/asphalt-driveway-cost/", "annotation": "explains the related asphalt driveway cost inputs or next step"}]
status: "draft"
seq: 20
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Asphalt Driveway Thickness}}
````

## content/asphalt-millings-calculator.mdx

````mdx
---
title: "Asphalt Millings Calculator: Tons for a Driveway"
description: "Calculate tons of asphalt millings for a driveway from length, width and depth, with an editable density."
slug: "/asphalt-millings-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt millings calculator"
keywords: []
related: [{"slug": "/asphalt-millings-cost/", "annotation": "explains the related asphalt millings cost inputs or next step"}, {"slug": "/asphalt-calculator/", "annotation": "explains the related asphalt calculator inputs or next step"}]
status: "draft"
seq: 22
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Asphalt Millings Calculator}}
````

## content/asphalt-millings-cost.mdx

````mdx
---
title: "Asphalt Millings Cost: Per Ton and Per Driveway"
description: "Asphalt millings cost per ton and per driveway, delivery charges and how much a driveway needs."
slug: "/asphalt-millings-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt millings cost"
keywords: []
related: [{"slug": "/asphalt-millings-calculator/", "annotation": "explains the related asphalt millings calculator inputs or next step"}, {"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}]
status: "draft"
seq: 19
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Asphalt Millings Cost}}
````

## content/concrete-calculator.mdx

````mdx
---
title: "Concrete Calculator: Cubic Yards and Bags Needed"
description: "Calculate cubic yards and bags of concrete for slabs and driveways from length, width and thickness, with waste allowance."
slug: "/concrete-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "concrete calculator"
keywords: ["concrete slab calculator", "concrete bag calculator", "concrete pad calculator", "calculator concrete yards", "concrete yards calculator", "how to calculate concrete", "how to calculate concrete yards", "how to calculate yards of concrete", "how do i calculate yards of concrete", "how do you calculate how much concrete you need", "concrete calculator bags", "bag concrete calculator", "bags of concrete calculator", "concrete bags calculator", "how many bags of concrete do i need", "material calculator for concrete slab", "concrete calculator for slab", "concrete calculator slab"]
related: [{"slug": "/concrete-driveway-cost-calculator/", "annotation": "explains the related concrete driveway cost calculator inputs or next step"}, {"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}]
status: "draft"
seq: 35
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Concrete Calculator}}
````

## content/concrete-driveway-cost-calculator.mdx

````mdx
---
title: "Concrete Driveway Cost Calculator: Free Estimate"
description: "Estimate concrete driveway cost and cubic yards from size and thickness. Editable price and waste assumptions, low-to-high range."
slug: "/concrete-driveway-cost-calculator/"
type: "Cost estimator"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "concrete driveway cost calculator"
keywords: ["concrete driveway calculator", "driveway concrete calculator", "how much concrete do i need for a driveway"]
related: [{"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}, {"slug": "/concrete-calculator/", "annotation": "explains the related concrete calculator inputs or next step"}]
status: "draft"
seq: 6
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Concrete Driveway Cost Calculator}}
````

## content/concrete-driveway-cost.mdx

````mdx
---
title: "Concrete Driveway Cost per Sq Ft (2026)"
description: "Concrete driveway cost per square foot and in total, with what raises or lowers the price. Includes a free cost estimator."
slug: "/concrete-driveway-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "concrete driveway cost"
keywords: ["concrete driveway", "cost of concrete driveway", "how much does a concrete driveway cost", "how much does it cost to concrete a driveway", "how much does concrete driveway cost", "how much does it cost for a concrete driveway", "how much does it cost to pour a concrete driveway", "how much is a concrete driveway", "how much to cement a driveway", "how much does it cost to cement a driveway", "how much to concrete a driveway", "how much does a cement driveway cost", "how much to concrete driveway", "how much is a concrete driveway per square foot"]
related: [{"slug": "/concrete-driveway-cost-calculator/", "annotation": "explains the related concrete driveway cost calculator inputs or next step"}, {"slug": "/concrete-vs-asphalt-driveway/", "annotation": "explains the related concrete vs asphalt driveway inputs or next step"}, {"slug": "/stamped-concrete-driveway-cost/", "annotation": "explains the related stamped concrete driveway cost inputs or next step"}, {"slug": "/replace-concrete-driveway-cost/", "annotation": "explains the related replace concrete driveway cost inputs or next step"}]
status: "draft"
seq: 5
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Concrete Driveway Cost in 2026}}
````

## content/concrete-driveway-repair-cost.mdx

````mdx
---
title: "Concrete Driveway Repair Cost: Cracks and Resurfacing"
description: "Concrete driveway repair cost by repair type: crack filling, resurfacing and slab replacement, with when to repair or replace."
slug: "/concrete-driveway-repair-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "concrete driveway repair cost"
keywords: ["concrete driveway repair", "concrete driveway crack repair", "driveway concrete repair cost"]
related: [{"slug": "/replace-concrete-driveway-cost/", "annotation": "explains the related replace concrete driveway cost inputs or next step"}, {"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}]
status: "draft"
seq: 37
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Concrete Driveway Repair Cost}}
````

## content/concrete-slab-cost-calculator.mdx

````mdx
---
title: "Concrete Slab Cost Calculator: Free Estimate"
description: "Estimate slab, pad and patio cost and cubic yards from size and thickness, with editable price, waste and removal assumptions."
slug: "/concrete-slab-cost-calculator/"
type: "Cost estimator"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "concrete slab cost calculator"
keywords: ["concrete pad cost calculator", "concrete patio cost calculator", "calculating concrete slab cost", "concrete slab calculator cost", "concrete slab installation cost calculator", "concrete slab foundation cost calculator", "concrete pad installation cost calculator", "concrete pad calculator cost"]
related: [{"slug": "/concrete-slab-cost/", "annotation": "explains the related concrete slab cost inputs or next step"}, {"slug": "/concrete-calculator/", "annotation": "explains the related concrete calculator inputs or next step"}, {"slug": "/concrete-driveway-cost-calculator/", "annotation": "explains the related concrete driveway cost calculator inputs or next step"}]
status: "draft"
seq: 50
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Concrete Slab Cost Calculator}}
````

## content/concrete-slab-cost.mdx

````mdx
---
title: "Concrete Slab Cost per Sq Ft (2026)"
description: "Concrete slab and pad cost per square foot by thickness, finish and reinforcement, with a free estimator."
slug: "/concrete-slab-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "concrete slab cost"
keywords: ["concrete pad cost", "concrete slab cost per square foot", "garage slab cost", "cost to pour concrete slab", "cost of concrete slab", "cost to install concrete slab", "cost to lay a concrete pad", "cost to pour concrete pad", "cost to install a concrete pad"]
related: [{"slug": "/concrete-slab-cost-calculator/", "annotation": "explains the related concrete slab cost calculator inputs or next step"}, {"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}, {"slug": "/concrete-calculator/", "annotation": "explains the related concrete calculator inputs or next step"}]
status: "draft"
seq: 49
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Concrete Slab Cost}}
````

## content/concrete-vs-asphalt-driveway.mdx

````mdx
---
title: "Concrete vs Asphalt Driveway: Cost, Lifespan, Upkeep"
description: "Concrete vs asphalt driveway compared on cost, lifespan, maintenance and climate fit, with a side-by-side table."
slug: "/concrete-vs-asphalt-driveway/"
type: "Comparison"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "concrete vs asphalt driveway"
keywords: ["concrete vs asphalt driveway cost", "how long does an asphalt driveway last", "how long does a concrete driveway last", "asphalt driveway lifespan", "concrete driveway lifespan"]
related: [{"slug": "/asphalt-driveway-cost/", "annotation": "explains the related asphalt driveway cost inputs or next step"}, {"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}, {"slug": "/driveway-cost/", "annotation": "explains the related driveway cost inputs or next step"}]
status: "draft"
seq: 14
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Concrete vs Asphalt Driveway}}
````

## content/concrete-weight-per-cubic-yard.mdx

````mdx
---
title: "How Much Does a Yard of Concrete Weigh?"
description: "The weight of a cubic yard of concrete by mix, with pounds per cubic foot and tons per cubic yard."
slug: "/concrete-weight-per-cubic-yard/"
type: "Reference"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "how much does a yard of concrete weigh"
keywords: ["how much does a cubic yard of concrete weigh", "concrete weight per cubic yard", "how much does a yard of crushed concrete weigh", "how much does a yard of cured concrete weigh", "how much does a yard of dry concrete weigh"]
related: [{"slug": "/concrete-calculator/", "annotation": "explains the related concrete calculator inputs or next step"}, {"slug": "/material-weights/", "annotation": "explains the related material weights inputs or next step"}]
status: "draft"
seq: 53
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Concrete Weight per Cubic Yard}}
````

## content/crusher-run-calculator.mdx

````mdx
---
title: "Crusher Run Calculator: Tons Needed for a Base"
description: "Calculate tons of crusher run for a driveway or path base from area, depth and compaction."
slug: "/crusher-run-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "crusher run calculator"
keywords: []
related: [{"slug": "/gravel-driveway-calculator/", "annotation": "explains the related gravel driveway calculator inputs or next step"}, {"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}]
status: "draft"
seq: 29
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Crusher Run Calculator}}
````

## content/cubic-yards-to-tons.mdx

````mdx
---
title: "Cubic Yards to Tons Converter by Material"
description: "Convert cubic yards to tons for gravel, asphalt, sand and concrete using an editable density for each material."
slug: "/cubic-yards-to-tons/"
type: "Converter"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "cubic yards to tons"
keywords: ["how many yards in a ton of gravel", "how many tons in a cubic yard of gravel"]
related: [{"slug": "/material-weights/", "annotation": "explains the related material weights inputs or next step"}, {"slug": "/gravel-calculator/", "annotation": "explains the related gravel calculator inputs or next step"}]
status: "draft"
seq: 24
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Cubic Yards to Tons}}
````

## content/driveway-cost-calculator.mdx

````mdx
---
title: "Driveway Cost Calculator: Compare Asphalt, Concrete, Gravel"
description: "Enter your driveway size once and compare estimated cost, lifespan and upkeep for asphalt, concrete, gravel and pavers."
slug: "/driveway-cost-calculator/"
type: "Compare estimator"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "driveway cost calculator"
keywords: ["driveway calculator", "driveway cost estimator"]
related: [{"slug": "/asphalt-driveway-cost/", "annotation": "explains the related asphalt driveway cost inputs or next step"}, {"slug": "/asphalt-driveway-cost-calculator/", "annotation": "explains the related asphalt driveway cost calculator inputs or next step"}, {"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}, {"slug": "/concrete-driveway-cost-calculator/", "annotation": "explains the related concrete driveway cost calculator inputs or next step"}, {"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}, {"slug": "/concrete-slab-cost-calculator/", "annotation": "explains the related concrete slab cost calculator inputs or next step"}, {"slug": "/concrete-slab-cost/", "annotation": "explains the related concrete slab cost inputs or next step"}, {"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}, {"slug": "/repave-asphalt-driveway-cost/", "annotation": "explains the related repave asphalt driveway cost inputs or next step"}, {"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}, {"slug": "/replace-concrete-driveway-cost/", "annotation": "explains the related replace concrete driveway cost inputs or next step"}, {"slug": "/stamped-concrete-driveway-cost/", "annotation": "explains the related stamped concrete driveway cost inputs or next step"}, {"slug": "/paver-driveway-cost/", "annotation": "explains the related paver driveway cost inputs or next step"}, {"slug": "/tar-and-chip-driveway-cost/", "annotation": "explains the related tar and chip driveway cost inputs or next step"}, {"slug": "/asphalt-millings-cost/", "annotation": "explains the related asphalt millings cost inputs or next step"}, {"slug": "/concrete-driveway-repair-cost/", "annotation": "explains the related concrete driveway repair cost inputs or next step"}, {"slug": "/driveway-repair-cost/", "annotation": "explains the related driveway repair cost inputs or next step"}, {"slug": "/driveway-replacement-cost/", "annotation": "explains the related driveway replacement cost inputs or next step"}]
status: "draft"
seq: 42
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Driveway Cost Calculator}}
````

## content/driveway-cost.mdx

````mdx
---
title: "Driveway Cost by Material: Asphalt, Concrete, Gravel, Pavers"
description: "Driveway cost compared across asphalt, concrete, gravel and pavers, with price ranges, lifespan and a free estimator for each."
slug: "/driveway-cost/"
type: "Pillar"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "driveway cost"
keywords: ["driveway installation", "new driveway cost", "driveway paving cost", "how much does a driveway cost", "cost to pave a driveway", "how much will a driveway cost", "how much does it cost for a driveway", "how much would a new driveway cost", "cost of a new driveway", "driveway cost per square foot", "how much does it cost to build a driveway", "how much should a new driveway cost"]
related: [{"slug": "/asphalt-driveway-cost/", "annotation": "explains the related asphalt driveway cost inputs or next step"}, {"slug": "/asphalt-driveway-cost-calculator/", "annotation": "explains the related asphalt driveway cost calculator inputs or next step"}, {"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}, {"slug": "/concrete-driveway-cost-calculator/", "annotation": "explains the related concrete driveway cost calculator inputs or next step"}, {"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}, {"slug": "/driveway-cost-calculator/", "annotation": "explains the related driveway cost calculator inputs or next step"}, {"slug": "/concrete-slab-cost-calculator/", "annotation": "explains the related concrete slab cost calculator inputs or next step"}, {"slug": "/concrete-slab-cost/", "annotation": "explains the related concrete slab cost inputs or next step"}, {"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}, {"slug": "/repave-asphalt-driveway-cost/", "annotation": "explains the related repave asphalt driveway cost inputs or next step"}, {"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}, {"slug": "/replace-concrete-driveway-cost/", "annotation": "explains the related replace concrete driveway cost inputs or next step"}, {"slug": "/stamped-concrete-driveway-cost/", "annotation": "explains the related stamped concrete driveway cost inputs or next step"}, {"slug": "/paver-driveway-cost/", "annotation": "explains the related paver driveway cost inputs or next step"}, {"slug": "/tar-and-chip-driveway-cost/", "annotation": "explains the related tar and chip driveway cost inputs or next step"}, {"slug": "/asphalt-millings-cost/", "annotation": "explains the related asphalt millings cost inputs or next step"}, {"slug": "/concrete-driveway-repair-cost/", "annotation": "explains the related concrete driveway repair cost inputs or next step"}, {"slug": "/driveway-repair-cost/", "annotation": "explains the related driveway repair cost inputs or next step"}, {"slug": "/driveway-replacement-cost/", "annotation": "explains the related driveway replacement cost inputs or next step"}]
status: "draft"
seq: 33
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Driveway Cost by Material}}
````

## content/driveway-crack-filler.mdx

````mdx
---
title: "Best Driveway Crack Filler: How to Choose and Apply"
description: "How to choose a driveway crack filler by crack width and surface, with application steps and what to avoid."
slug: "/driveway-crack-filler/"
type: "Product guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "driveway crack filler"
keywords: []
related: [{"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}, {"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}]
status: "draft"
seq: 31
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Driveway Crack Filler}}
````

## content/driveway-drainage.mdx

````mdx
---
title: "Driveway Drainage: Slope, Drains and Fixes"
description: "How much slope a driveway needs, which drains fix standing water and when drainage faults cause damage."
slug: "/driveway-drainage/"
type: "Guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "driveway drainage"
keywords: ["driveway slope"]
related: [{"slug": "/driveway-repair-cost/", "annotation": "explains the related driveway repair cost inputs or next step"}, {"slug": "/gravel-driveway/", "annotation": "explains the related gravel driveway inputs or next step"}]
status: "draft"
seq: 45
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Driveway Drainage}}
````

## content/driveway-repair-cost.mdx

````mdx
---
title: "Driveway Repair Cost by Surface: Asphalt, Concrete, Gravel"
description: "Driveway repair cost for asphalt, concrete and gravel, with typical repair types and when repair stops making sense."
slug: "/driveway-repair-cost/"
type: "Cost hub"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "driveway repair"
keywords: []
related: [{"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}, {"slug": "/concrete-driveway-repair-cost/", "annotation": "explains the related concrete driveway repair cost inputs or next step"}, {"slug": "/driveway-replacement-cost/", "annotation": "explains the related driveway replacement cost inputs or next step"}]
status: "draft"
seq: 38
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Driveway Repair Cost}}
````

## content/driveway-replacement-cost.mdx

````mdx
---
title: "Driveway Replacement Cost by Surface (2026)"
description: "Driveway replacement cost for asphalt, concrete, gravel and pavers, including removal and disposal."
slug: "/driveway-replacement-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "driveway replacement"
keywords: ["how much is it to replace a driveway", "how much does it cost to replace a driveway"]
related: [{"slug": "/repave-asphalt-driveway-cost/", "annotation": "explains the related repave asphalt driveway cost inputs or next step"}, {"slug": "/replace-concrete-driveway-cost/", "annotation": "explains the related replace concrete driveway cost inputs or next step"}, {"slug": "/driveway-cost-calculator/", "annotation": "explains the related driveway cost calculator inputs or next step"}]
status: "draft"
seq: 39
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Driveway Replacement Cost}}
````

## content/driveway-sealcoating-cost.mdx

````mdx
---
title: "Driveway Sealcoating Cost per Sq Ft"
description: "Driveway sealcoating cost per square foot and per driveway, with how often it is needed and what changes the price."
slug: "/driveway-sealcoating-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "driveway sealcoating"
keywords: ["driveway sealcoating cost", "sealcoating cost per square foot", "driveway sealing", "how much to seal a driveway", "how much does it cost to seal a driveway"]
related: [{"slug": "/sealcoat-calculator/", "annotation": "explains the related sealcoat calculator inputs or next step"}, {"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}]
status: "draft"
seq: 12
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Driveway Sealcoating Cost}}
````

## content/driveway-sealer.mdx

````mdx
---
title: "Best Driveway Sealer: Types and How to Choose"
description: "The main types of driveway sealer, how to choose one for asphalt or concrete, and how to apply it."
slug: "/driveway-sealer/"
type: "Product guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "driveway sealer"
keywords: ["asphalt driveway sealer", "asphalt sealer for driveways"]
related: [{"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}, {"slug": "/sealcoat-calculator/", "annotation": "explains the related sealcoat calculator inputs or next step"}, {"slug": "/driveway-crack-filler/", "annotation": "explains the related driveway crack filler inputs or next step"}]
status: "draft"
seq: 51
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Driveway Sealer}}
````

## content/gravel-calculator.mdx

````mdx
---
title: "Gravel Calculator: Tons and Cubic Yards Needed"
description: "Calculate tons and cubic yards of gravel from length, width and depth. Editable density and delivery rounding. Free."
slug: "/gravel-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "gravel calculator"
keywords: ["gravel calculator yards", "how much gravel do i need calculator", "how to calculate how much gravel i need", "how to calculate how much gravel you need", "how to calculate yards of gravel", "how to calculate gravel needed", "figuring gravel", "how much gravel do i need", "how many yards of gravel do i need", "stone calculator", "crushed stone calculator", "river stone calculator", "57 stone calculator", "stone calculator tons", "how much stone do i need calculator"]
related: [{"slug": "/gravel-driveway-calculator/", "annotation": "explains the related gravel driveway calculator inputs or next step"}, {"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}, {"slug": "/cubic-yards-to-tons/", "annotation": "explains the related cubic yards to tons inputs or next step"}, {"slug": "/material-weights/", "annotation": "explains the related material weights inputs or next step"}]
status: "draft"
seq: 9
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Gravel Calculator}}
````

## content/gravel-driveway-calculator.mdx

````mdx
---
title: "Gravel Driveway Calculator: Tons and Yards Needed"
description: "Calculate tons and cubic yards of gravel for a driveway from length, width and depth, with base and surface layers."
slug: "/gravel-driveway-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "gravel driveway calculator"
keywords: ["how much gravel do i need for a driveway"]
related: [{"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}, {"slug": "/cubic-yards-to-tons/", "annotation": "explains the related cubic yards to tons inputs or next step"}]
status: "draft"
seq: 8
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Gravel Driveway Calculator}}
````

## content/gravel-driveway-cost.mdx

````mdx
---
title: "Gravel Driveway Cost per Sq Ft (2026)"
description: "Gravel driveway cost per square foot, per ton and with delivery, plus base layers and upkeep. Includes a free estimator."
slug: "/gravel-driveway-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "gravel driveway cost"
keywords: ["gravel delivery cost", "cost to put in gravel driveway", "cost to install gravel driveway", "driveway gravel cost", "gravel driveway cost calculator", "driveway gravel prices"]
related: [{"slug": "/gravel-driveway-calculator/", "annotation": "explains the related gravel driveway calculator inputs or next step"}, {"slug": "/gravel-calculator/", "annotation": "explains the related gravel calculator inputs or next step"}, {"slug": "/crusher-run-calculator/", "annotation": "explains the related crusher run calculator inputs or next step"}, {"slug": "/road-base-calculator/", "annotation": "explains the related road base calculator inputs or next step"}, {"slug": "/concrete-vs-asphalt-driveway/", "annotation": "explains the related concrete vs asphalt driveway inputs or next step"}]
status: "draft"
seq: 7
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Gravel Driveway Cost in 2026}}
````

## content/gravel-driveway.mdx

````mdx
---
title: "How to Build a Gravel Driveway: Layers and Maintenance"
description: "What a gravel driveway is, which stone to use, the layers it needs and how to maintain it."
slug: "/gravel-driveway/"
type: "How-to guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "gravel driveway"
keywords: ["driveway gravel", "gravel for driveway", "how to build a gravel driveway", "how do you lay a gravel driveway", "how to gravel driveway", "how to make a gravel driveway", "how do i lay a gravel driveway", "gravel driveway maintenance"]
related: [{"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}, {"slug": "/gravel-driveway-calculator/", "annotation": "explains the related gravel driveway calculator inputs or next step"}]
status: "draft"
seq: 43
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Gravel Driveway}}
````

## content/gravel-weight-per-cubic-yard.mdx

````mdx
---
title: "How Much Does a Yard of Gravel Weigh?"
description: "The weight of a cubic yard of gravel by type, how much area a ton covers and how many cubic feet are in a ton."
slug: "/gravel-weight-per-cubic-yard/"
type: "Reference"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "how much does a yard of gravel weigh"
keywords: ["how much does a cubic yard of gravel weigh", "how much does a yard of pea gravel weigh", "how much does a yard of 3 4 gravel weigh", "how much does a cubic yard of pea gravel weigh", "cubic yard of gravel weight", "gravel weight per cubic yard", "how much does a ton of gravel cover", "how many cubic feet in a ton of gravel", "how many square feet does a ton of gravel cover"]
related: [{"slug": "/gravel-calculator/", "annotation": "explains the related gravel calculator inputs or next step"}, {"slug": "/cubic-yards-to-tons/", "annotation": "explains the related cubic yards to tons inputs or next step"}, {"slug": "/material-weights/", "annotation": "explains the related material weights inputs or next step"}]
status: "draft"
seq: 54
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Gravel Weight per Cubic Yard}}
````

## content/home.mdx

````mdx
---
title: "Driveway Calculators: Cost Guides and Material Tools"
description: "Free driveway cost guides and calculators for asphalt, concrete, gravel and pavers: tons, cubic yards, square feet and price ranges."
slug: "/"
type: "Hub"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: ""
keywords: []
related: [{"slug": "/methodology/", "annotation": "explains the related methodology inputs or next step"}, {"slug": "/asphalt-calculator/", "annotation": "explains the related asphalt calculator inputs or next step"}, {"slug": "/asphalt-driveway-cost/", "annotation": "explains the related asphalt driveway cost inputs or next step"}, {"slug": "/asphalt-driveway-cost-calculator/", "annotation": "explains the related asphalt driveway cost calculator inputs or next step"}, {"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}, {"slug": "/concrete-driveway-cost-calculator/", "annotation": "explains the related concrete driveway cost calculator inputs or next step"}, {"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}, {"slug": "/gravel-driveway-calculator/", "annotation": "explains the related gravel driveway calculator inputs or next step"}, {"slug": "/gravel-calculator/", "annotation": "explains the related gravel calculator inputs or next step"}, {"slug": "/driveway-cost-calculator/", "annotation": "explains the related driveway cost calculator inputs or next step"}, {"slug": "/concrete-slab-cost-calculator/", "annotation": "explains the related concrete slab cost calculator inputs or next step"}, {"slug": "/concrete-slab-cost/", "annotation": "explains the related concrete slab cost inputs or next step"}, {"slug": "/gravel-driveway/", "annotation": "explains the related gravel driveway inputs or next step"}, {"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}, {"slug": "/repave-asphalt-driveway-cost/", "annotation": "explains the related repave asphalt driveway cost inputs or next step"}, {"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}, {"slug": "/concrete-vs-asphalt-driveway/", "annotation": "explains the related concrete vs asphalt driveway inputs or next step"}, {"slug": "/replace-concrete-driveway-cost/", "annotation": "explains the related replace concrete driveway cost inputs or next step"}, {"slug": "/stamped-concrete-driveway-cost/", "annotation": "explains the related stamped concrete driveway cost inputs or next step"}, {"slug": "/paver-driveway-cost/", "annotation": "explains the related paver driveway cost inputs or next step"}, {"slug": "/tar-and-chip-driveway-cost/", "annotation": "explains the related tar and chip driveway cost inputs or next step"}, {"slug": "/asphalt-millings-cost/", "annotation": "explains the related asphalt millings cost inputs or next step"}, {"slug": "/asphalt-driveway-thickness/", "annotation": "explains the related asphalt driveway thickness inputs or next step"}, {"slug": "/concrete-driveway-repair-cost/", "annotation": "explains the related concrete driveway repair cost inputs or next step"}, {"slug": "/driveway-repair-cost/", "annotation": "explains the related driveway repair cost inputs or next step"}, {"slug": "/driveway-replacement-cost/", "annotation": "explains the related driveway replacement cost inputs or next step"}, {"slug": "/standard-driveway-width/", "annotation": "explains the related standard driveway width inputs or next step"}, {"slug": "/concrete-calculator/", "annotation": "explains the related concrete calculator inputs or next step"}, {"slug": "/paver-calculator/", "annotation": "explains the related paver calculator inputs or next step"}, {"slug": "/how-to-lay-an-asphalt-driveway/", "annotation": "explains the related how to lay an asphalt driveway inputs or next step"}, {"slug": "/hot-mix-asphalt/", "annotation": "explains the related hot mix asphalt inputs or next step"}, {"slug": "/asphalt-driveway-maintenance/", "annotation": "explains the related asphalt driveway maintenance inputs or next step"}, {"slug": "/driveway-drainage/", "annotation": "explains the related driveway drainage inputs or next step"}, {"slug": "/how-to-repair-concrete-driveway-cracks/", "annotation": "explains the related how to repair concrete driveway cracks inputs or next step"}, {"slug": "/how-to-repair-asphalt-driveway-cracks/", "annotation": "explains the related how to repair asphalt driveway cracks inputs or next step"}, {"slug": "/sealcoat-calculator/", "annotation": "explains the related sealcoat calculator inputs or next step"}, {"slug": "/asphalt-millings-calculator/", "annotation": "explains the related asphalt millings calculator inputs or next step"}, {"slug": "/material-weights/", "annotation": "explains the related material weights inputs or next step"}, {"slug": "/cubic-yards-to-tons/", "annotation": "explains the related cubic yards to tons inputs or next step"}, {"slug": "/rock-calculator/", "annotation": "explains the related rock calculator inputs or next step"}, {"slug": "/pea-gravel-calculator/", "annotation": "explains the related pea gravel calculator inputs or next step"}, {"slug": "/crusher-run-calculator/", "annotation": "explains the related crusher run calculator inputs or next step"}, {"slug": "/road-base-calculator/", "annotation": "explains the related road base calculator inputs or next step"}, {"slug": "/concrete-weight-per-cubic-yard/", "annotation": "explains the related concrete weight per cubic yard inputs or next step"}, {"slug": "/gravel-weight-per-cubic-yard/", "annotation": "explains the related gravel weight per cubic yard inputs or next step"}, {"slug": "/driveway-sealer/", "annotation": "explains the related driveway sealer inputs or next step"}, {"slug": "/how-to-seal-a-driveway/", "annotation": "explains the related how to seal a driveway inputs or next step"}, {"slug": "/driveway-crack-filler/", "annotation": "explains the related driveway crack filler inputs or next step"}, {"slug": "/asphalt-cold-patch/", "annotation": "explains the related asphalt cold patch inputs or next step"}, {"slug": "/driveway-cost/", "annotation": "explains the related driveway cost inputs or next step"}]
status: "draft"
seq: 10
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Driveway Calculators}}
````

## content/hot-mix-asphalt.mdx

````mdx
---
title: "Hot Mix Asphalt: What It Is and How Driveways Use It"
description: "What hot mix asphalt is, what goes into it and how it is used on driveways."
slug: "/hot-mix-asphalt/"
type: "Reference"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "hot mix asphalt"
keywords: []
related: [{"slug": "/asphalt-calculator/", "annotation": "explains the related asphalt calculator inputs or next step"}, {"slug": "/material-weights/", "annotation": "explains the related material weights inputs or next step"}]
status: "draft"
seq: 41
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Hot Mix Asphalt}}
````

## content/how-to-lay-an-asphalt-driveway.mdx

````mdx
---
title: "How to Lay an Asphalt Driveway: Steps, Tools and Cost"
description: "The steps to lay an asphalt driveway, the tools involved and what a DIY job costs against hiring a paving crew."
slug: "/how-to-lay-an-asphalt-driveway/"
type: "How-to guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "laying asphalt driveway"
keywords: []
related: [{"slug": "/asphalt-calculator/", "annotation": "explains the related asphalt calculator inputs or next step"}, {"slug": "/asphalt-driveway-cost/", "annotation": "explains the related asphalt driveway cost inputs or next step"}]
status: "draft"
seq: 40
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for How to Lay an Asphalt Driveway}}
````

## content/how-to-repair-asphalt-driveway-cracks.mdx

````mdx
---
title: "How to Repair Cracks in an Asphalt Driveway"
description: "How to repair cracks and holes in an asphalt driveway, the filler to use and when to repave instead."
slug: "/how-to-repair-asphalt-driveway-cracks/"
type: "How-to guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "how to repair asphalt driveway"
keywords: ["how to repair cracks in asphalt driveway"]
related: [{"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}, {"slug": "/driveway-crack-filler/", "annotation": "explains the related driveway crack filler inputs or next step"}, {"slug": "/asphalt-cold-patch/", "annotation": "explains the related asphalt cold patch inputs or next step"}]
status: "draft"
seq: 48
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for How to Repair Cracks in an Asphalt Driveway}}
````

## content/how-to-repair-concrete-driveway-cracks.mdx

````mdx
---
title: "How to Repair Cracks in a Concrete Driveway"
description: "How to repair small and large cracks in a concrete driveway, the materials needed and when to replace the slab instead."
slug: "/how-to-repair-concrete-driveway-cracks/"
type: "How-to guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "how to repair cracks in concrete driveway"
keywords: ["how to repair driveway cracks", "how to repair concrete driveway", "how to repair large cracks in concrete driveway", "how to repair concrete driveway cracks"]
related: [{"slug": "/concrete-driveway-repair-cost/", "annotation": "explains the related concrete driveway repair cost inputs or next step"}, {"slug": "/driveway-crack-filler/", "annotation": "explains the related driveway crack filler inputs or next step"}]
status: "draft"
seq: 47
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for How to Repair Cracks in a Concrete Driveway}}
````

## content/how-to-seal-a-driveway.mdx

````mdx
---
title: "How to Seal a Driveway: Steps, Tools and Timing"
description: "The steps to seal an asphalt driveway, the tools and sealer needed, and the weather and cure times to plan for."
slug: "/how-to-seal-a-driveway/"
type: "How-to guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "how to seal a driveway"
keywords: ["how to seal coat a driveway", "how to seal driveway"]
related: [{"slug": "/driveway-sealer/", "annotation": "explains the related driveway sealer inputs or next step"}, {"slug": "/sealcoat-calculator/", "annotation": "explains the related sealcoat calculator inputs or next step"}, {"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}, {"slug": "/driveway-crack-filler/", "annotation": "explains the related driveway crack filler inputs or next step"}]
status: "draft"
seq: 55
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for How to Seal a Driveway}}
````

## content/material-weights.mdx

````mdx
---
title: "Material Weight Chart: Asphalt, Gravel and Concrete"
description: "Weight per cubic foot and per cubic yard for asphalt, gravel, crushed stone and concrete, with tons per cubic yard."
slug: "/material-weights/"
type: "Reference table"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt weight per cubic foot"
keywords: ["asphalt density", "weight of asphalt", "how much does a yard of asphalt weigh"]
related: [{"slug": "/asphalt-calculator/", "annotation": "explains the related asphalt calculator inputs or next step"}, {"slug": "/gravel-calculator/", "annotation": "explains the related gravel calculator inputs or next step"}, {"slug": "/cubic-yards-to-tons/", "annotation": "explains the related cubic yards to tons inputs or next step"}]
status: "draft"
seq: 23
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Material Weight Chart}}
````

## content/methodology.mdx

````mdx
---
title: "How We Calculate Driveway Costs and Material Quantities"
description: "How the formulas, default densities and price ranges on this site are calculated, with sources and update dates."
slug: "/methodology/"
type: "Reference"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: ""
keywords: []
related: [{"slug": "/asphalt-calculator/", "annotation": "explains the related asphalt calculator inputs or next step"}, {"slug": "/asphalt-driveway-cost/", "annotation": "explains the related asphalt driveway cost inputs or next step"}, {"slug": "/asphalt-driveway-cost-calculator/", "annotation": "explains the related asphalt driveway cost calculator inputs or next step"}, {"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}, {"slug": "/concrete-driveway-cost-calculator/", "annotation": "explains the related concrete driveway cost calculator inputs or next step"}, {"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}, {"slug": "/gravel-driveway-calculator/", "annotation": "explains the related gravel driveway calculator inputs or next step"}, {"slug": "/gravel-calculator/", "annotation": "explains the related gravel calculator inputs or next step"}, {"slug": "/", "annotation": "explains the related  inputs or next step"}, {"slug": "/driveway-cost-calculator/", "annotation": "explains the related driveway cost calculator inputs or next step"}, {"slug": "/concrete-slab-cost-calculator/", "annotation": "explains the related concrete slab cost calculator inputs or next step"}, {"slug": "/concrete-slab-cost/", "annotation": "explains the related concrete slab cost inputs or next step"}, {"slug": "/gravel-driveway/", "annotation": "explains the related gravel driveway inputs or next step"}, {"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}, {"slug": "/repave-asphalt-driveway-cost/", "annotation": "explains the related repave asphalt driveway cost inputs or next step"}, {"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}, {"slug": "/concrete-vs-asphalt-driveway/", "annotation": "explains the related concrete vs asphalt driveway inputs or next step"}, {"slug": "/replace-concrete-driveway-cost/", "annotation": "explains the related replace concrete driveway cost inputs or next step"}, {"slug": "/stamped-concrete-driveway-cost/", "annotation": "explains the related stamped concrete driveway cost inputs or next step"}, {"slug": "/paver-driveway-cost/", "annotation": "explains the related paver driveway cost inputs or next step"}, {"slug": "/tar-and-chip-driveway-cost/", "annotation": "explains the related tar and chip driveway cost inputs or next step"}, {"slug": "/asphalt-millings-cost/", "annotation": "explains the related asphalt millings cost inputs or next step"}, {"slug": "/asphalt-driveway-thickness/", "annotation": "explains the related asphalt driveway thickness inputs or next step"}, {"slug": "/concrete-driveway-repair-cost/", "annotation": "explains the related concrete driveway repair cost inputs or next step"}, {"slug": "/driveway-repair-cost/", "annotation": "explains the related driveway repair cost inputs or next step"}, {"slug": "/driveway-replacement-cost/", "annotation": "explains the related driveway replacement cost inputs or next step"}, {"slug": "/standard-driveway-width/", "annotation": "explains the related standard driveway width inputs or next step"}, {"slug": "/concrete-calculator/", "annotation": "explains the related concrete calculator inputs or next step"}, {"slug": "/paver-calculator/", "annotation": "explains the related paver calculator inputs or next step"}, {"slug": "/how-to-lay-an-asphalt-driveway/", "annotation": "explains the related how to lay an asphalt driveway inputs or next step"}, {"slug": "/hot-mix-asphalt/", "annotation": "explains the related hot mix asphalt inputs or next step"}, {"slug": "/asphalt-driveway-maintenance/", "annotation": "explains the related asphalt driveway maintenance inputs or next step"}, {"slug": "/driveway-drainage/", "annotation": "explains the related driveway drainage inputs or next step"}, {"slug": "/how-to-repair-concrete-driveway-cracks/", "annotation": "explains the related how to repair concrete driveway cracks inputs or next step"}, {"slug": "/how-to-repair-asphalt-driveway-cracks/", "annotation": "explains the related how to repair asphalt driveway cracks inputs or next step"}, {"slug": "/sealcoat-calculator/", "annotation": "explains the related sealcoat calculator inputs or next step"}, {"slug": "/asphalt-millings-calculator/", "annotation": "explains the related asphalt millings calculator inputs or next step"}, {"slug": "/material-weights/", "annotation": "explains the related material weights inputs or next step"}, {"slug": "/cubic-yards-to-tons/", "annotation": "explains the related cubic yards to tons inputs or next step"}, {"slug": "/rock-calculator/", "annotation": "explains the related rock calculator inputs or next step"}, {"slug": "/pea-gravel-calculator/", "annotation": "explains the related pea gravel calculator inputs or next step"}, {"slug": "/crusher-run-calculator/", "annotation": "explains the related crusher run calculator inputs or next step"}, {"slug": "/road-base-calculator/", "annotation": "explains the related road base calculator inputs or next step"}, {"slug": "/concrete-weight-per-cubic-yard/", "annotation": "explains the related concrete weight per cubic yard inputs or next step"}, {"slug": "/gravel-weight-per-cubic-yard/", "annotation": "explains the related gravel weight per cubic yard inputs or next step"}, {"slug": "/driveway-sealer/", "annotation": "explains the related driveway sealer inputs or next step"}, {"slug": "/how-to-seal-a-driveway/", "annotation": "explains the related how to seal a driveway inputs or next step"}, {"slug": "/driveway-crack-filler/", "annotation": "explains the related driveway crack filler inputs or next step"}, {"slug": "/asphalt-cold-patch/", "annotation": "explains the related asphalt cold patch inputs or next step"}, {"slug": "/driveway-cost/", "annotation": "explains the related driveway cost inputs or next step"}]
status: "draft"
seq: 1
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## How are material quantities calculated?

**Material quantities come from the entered area, depth, and density.** The calculation engine uses feet, inches, cubic yards, and short tons. Material defaults remain empty until a source is approved.

## How are costs calculated?

**Cost ranges use area, verified unit prices, the selected cost tier, and extras.** Missing price data hides the estimate.

## How are purchase quantities rounded?

**Purchase quantities round up after the calculation.** Tons round up to the next tenth. Bags, containers, and delivery loads round up to whole units. The unrounded result remains available for comparison.

## Where do the defaults come from?

**Defaults come from the approved source register.** Each entry records a source name, retrieval date, unit, and verification status.
````

## content/paver-calculator.mdx

````mdx
---
title: "Paver Calculator: Pavers, Base and Sand Needed"
description: "Calculate pavers, base material and sand for a driveway or patio from area, paver size and waste allowance."
slug: "/paver-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "paver calculator"
keywords: ["paver base calculator", "paver sand calculator", "calculate paver sand", "cost calculator for paver patio"]
related: [{"slug": "/paver-driveway-cost/", "annotation": "explains the related paver driveway cost inputs or next step"}]
status: "draft"
seq: 36
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Paver Calculator}}
````

## content/paver-driveway-cost.mdx

````mdx
---
title: "Paver Driveway Cost per Sq Ft (2026)"
description: "Paver driveway cost per square foot by material, base work and pattern, compared with asphalt and concrete."
slug: "/paver-driveway-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "paver driveway cost"
keywords: []
related: [{"slug": "/paver-calculator/", "annotation": "explains the related paver calculator inputs or next step"}, {"slug": "/driveway-cost/", "annotation": "explains the related driveway cost inputs or next step"}]
status: "draft"
seq: 17
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Paver Driveway Cost}}
````

## content/pea-gravel-calculator.mdx

````mdx
---
title: "Pea Gravel Calculator: Tons and Yards Needed"
description: "Calculate tons and cubic yards of pea gravel for paths, patios and driveways from area and depth."
slug: "/pea-gravel-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "pea gravel calculator"
keywords: ["calculate pea gravel", "calculating pea gravel", "how much pea gravel do i need calculator", "pea gravel cost calculator"]
related: [{"slug": "/gravel-calculator/", "annotation": "explains the related gravel calculator inputs or next step"}, {"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}]
status: "draft"
seq: 27
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Pea Gravel Calculator}}
````

## content/repave-asphalt-driveway-cost.mdx

````mdx
---
title: "Repave Asphalt Driveway Cost: Resurface vs Replace (2026)"
description: "Repaving cost for an asphalt driveway: overlay, resurfacing and full replacement, with when each option applies."
slug: "/repave-asphalt-driveway-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "asphalt resurfacing driveway cost"
keywords: ["cost to replace asphalt driveway", "how much does it cost to repave a driveway", "asphalt overlay cost"]
related: [{"slug": "/asphalt-driveway-repair-cost/", "annotation": "explains the related asphalt driveway repair cost inputs or next step"}, {"slug": "/asphalt-driveway-cost-calculator/", "annotation": "explains the related asphalt driveway cost calculator inputs or next step"}, {"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}]
status: "draft"
seq: 11
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Cost to Repave an Asphalt Driveway}}
````

## content/replace-concrete-driveway-cost.mdx

````mdx
---
title: "Replace Concrete Driveway Cost: Removal and New Pour"
description: "Cost to replace a concrete driveway: demolition, disposal and the new pour, with price ranges and when replacement beats repair."
slug: "/replace-concrete-driveway-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "cost to replace concrete driveway"
keywords: []
related: [{"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}, {"slug": "/concrete-driveway-cost-calculator/", "annotation": "explains the related concrete driveway cost calculator inputs or next step"}]
status: "draft"
seq: 15
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Cost to Replace a Concrete Driveway}}
````

## content/road-base-calculator.mdx

````mdx
---
title: "Road Base Calculator: Tons and Yards Needed"
description: "Calculate tons and cubic yards of road base from length, width and depth, with a compaction allowance."
slug: "/road-base-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "road base calculator"
keywords: []
related: [{"slug": "/gravel-driveway-calculator/", "annotation": "explains the related gravel driveway calculator inputs or next step"}, {"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}]
status: "draft"
seq: 30
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Road Base Calculator}}
````

## content/rock-calculator.mdx

````mdx
---
title: "Rock Calculator: Tons and Cubic Yards Needed"
description: "Calculate tons and cubic yards of landscape rock from area and depth, with editable density and coverage."
slug: "/rock-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "rock calculator"
keywords: ["river rock calculator", "landscape rock calculator", "crushed rock calculator", "how much rock do i need calculator", "how much river rock do i need calculator"]
related: [{"slug": "/gravel-calculator/", "annotation": "explains the related gravel calculator inputs or next step"}, {"slug": "/gravel-driveway-cost/", "annotation": "explains the related gravel driveway cost inputs or next step"}]
status: "draft"
seq: 25
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Rock Calculator}}
````

## content/sealcoat-calculator.mdx

````mdx
---
title: "Sealcoat Calculator: Gallons Needed for a Driveway"
description: "Calculate gallons of sealcoat from driveway area, product coverage and number of coats, with container rounding."
slug: "/sealcoat-calculator/"
type: "Quantity tool"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "sealcoat calculator"
keywords: ["how much sealer do i need", "driveway sealer calculator", "asphalt sealer calculator"]
related: [{"slug": "/driveway-sealcoating-cost/", "annotation": "explains the related driveway sealcoating cost inputs or next step"}]
status: "draft"
seq: 21
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Sealcoat Calculator}}
````

## content/stamped-concrete-driveway-cost.mdx

````mdx
---
title: "Stamped Concrete Driveway Cost per Sq Ft"
description: "Stamped concrete driveway cost per square foot, what pattern and color add, and how it compares with plain concrete."
slug: "/stamped-concrete-driveway-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "stamped concrete driveway cost"
keywords: []
related: [{"slug": "/concrete-driveway-cost/", "annotation": "explains the related concrete driveway cost inputs or next step"}]
status: "draft"
seq: 16
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Stamped Concrete Driveway Cost}}
````

## content/standard-driveway-width.mdx

````mdx
---
title: "Standard Driveway Width and Size: 1, 2 and 3 Car"
description: "Standard driveway width and size for one-car, two-car and three-car driveways, with the area each covers."
slug: "/standard-driveway-width/"
type: "Reference"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "standard driveway width"
keywords: ["standard driveway size"]
related: [{"slug": "/driveway-cost-calculator/", "annotation": "explains the related driveway cost calculator inputs or next step"}, {"slug": "/asphalt-calculator/", "annotation": "explains the related asphalt calculator inputs or next step"}]
status: "draft"
seq: 46
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Standard Driveway Width and Size}}
````

## content/tar-and-chip-driveway-cost.mdx

````mdx
---
title: "Tar and Chip Driveway Cost per Sq Ft (2026)"
description: "Tar and chip driveway cost per square foot, how it is laid, lifespan and how it compares with asphalt."
slug: "/tar-and-chip-driveway-cost/"
type: "Cost guide"
updated: "2026-10-11"
author: "Farrukh Abdullah"
primaryKeyword: "tar and chip driveway cost"
keywords: ["chip seal driveway"]
related: [{"slug": "/asphalt-driveway-cost/", "annotation": "explains the related asphalt driveway cost inputs or next step"}]
status: "draft"
seq: 18
dataRequired: []
defaultsUsed: []
modules: ["AnswerBlock", "CalculatorShell", "ResultCard", "FormulaBox", "QASection", "RelatedLink", "SourceNote", "LastUpdated", "Disclosure"]
---

## What information is needed?

**Verified source data completes this page.**

{{DATA: sourced figures, named sources, retrieval dates, and editorial review for Tar and Chip Driveway Cost}}
````

## data/defaults.json

````json
{
  "inchesPerFoot": {
    "value": 12,
    "unit": "in/ft",
    "source": "Project specification: exact US unit conversion",
    "retrievedOn": "2026-10-11",
    "verified": true
  },
  "cubicFeetPerYard": {
    "value": 27,
    "unit": "ft\u00b3/yd\u00b3",
    "source": "Project specification: exact US unit conversion",
    "retrievedOn": "2026-10-11",
    "verified": true
  },
  "poundsPerShortTon": {
    "value": 2000,
    "unit": "lb/short ton",
    "source": "Project specification: exact US unit conversion",
    "retrievedOn": "2026-10-11",
    "verified": true
  },
  "asphaltDensity": {
    "value": null,
    "unit": "lb/ft\u00b3",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "asphaltThickness": {
    "value": null,
    "unit": "in",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "millingsDensity": {
    "value": null,
    "unit": "lb/ft\u00b3",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "gravelDensity": {
    "value": null,
    "unit": "short tons/yd\u00b3",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "rockDensity": {
    "value": null,
    "unit": "short tons/yd\u00b3",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "peaGravelDensity": {
    "value": null,
    "unit": "short tons/yd\u00b3",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "crusherRunDensity": {
    "value": null,
    "unit": "short tons/yd\u00b3",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "roadBaseDensity": {
    "value": null,
    "unit": "short tons/yd\u00b3",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "concreteThickness": {
    "value": null,
    "unit": "in",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "waste": {
    "value": null,
    "unit": "%",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "compaction": {
    "value": null,
    "unit": "%",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "sealcoatCoverage": {
    "value": null,
    "unit": "ft\u00b2/gal",
    "source": null,
    "retrievedOn": null,
    "verified": false
  },
  "bagYield": {
    "value": null,
    "unit": "ft\u00b3/bag",
    "source": null,
    "retrievedOn": null,
    "verified": false
  }
}
````

## data/launch-checklist.json

````json
{
  "humanReviewedPages": [],
  "trustPagesApproved": false,
  "verifiedContactConfigured": false,
  "phoneAndKeyboardChecksComplete": false,
  "searchConsoleConfigured": false,
  "dataSheetApproved": false,
  "lighthousePassed": false
}
````

## data/pages.json

````json
[
  {
    "order": 1,
    "seq": 1,
    "url": "/methodology/",
    "section": "Outer",
    "type": "Reference",
    "phase": "1",
    "primary": "",
    "primaryVolume": null,
    "primaryKd": null,
    "primaryCpc": null,
    "keywords": [],
    "title": "How We Calculate Driveway Costs and Material Quantities",
    "h1": "Methodology",
    "description": "How the formulas, default densities and price ranges on this site are calculated, with sources and update dates.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["formula", "default density", "source name", "update date", "rounding", "units"],
    "imageAlt": "Spreadsheet of cost sources and formulas",
    "related": [
      {
        "slug": "/asphalt-calculator/",
        "annotation": "explains the related asphalt calculator inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-cost/",
        "annotation": "explains the related asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-cost-calculator/",
        "annotation": "explains the related asphalt driveway cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost-calculator/",
        "annotation": "explains the related concrete driveway cost calculator inputs or next step"
      },
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      },
      {
        "slug": "/gravel-driveway-calculator/",
        "annotation": "explains the related gravel driveway calculator inputs or next step"
      },
      {
        "slug": "/gravel-calculator/",
        "annotation": "explains the related gravel calculator inputs or next step"
      },
      {
        "slug": "/",
        "annotation": "explains the related  inputs or next step"
      },
      {
        "slug": "/driveway-cost-calculator/",
        "annotation": "explains the related driveway cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-slab-cost-calculator/",
        "annotation": "explains the related concrete slab cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-slab-cost/",
        "annotation": "explains the related concrete slab cost inputs or next step"
      },
      {
        "slug": "/gravel-driveway/",
        "annotation": "explains the related gravel driveway inputs or next step"
      },
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      },
      {
        "slug": "/repave-asphalt-driveway-cost/",
        "annotation": "explains the related repave asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      },
      {
        "slug": "/concrete-vs-asphalt-driveway/",
        "annotation": "explains the related concrete vs asphalt driveway inputs or next step"
      },
      {
        "slug": "/replace-concrete-driveway-cost/",
        "annotation": "explains the related replace concrete driveway cost inputs or next step"
      },
      {
        "slug": "/stamped-concrete-driveway-cost/",
        "annotation": "explains the related stamped concrete driveway cost inputs or next step"
      },
      {
        "slug": "/paver-driveway-cost/",
        "annotation": "explains the related paver driveway cost inputs or next step"
      },
      {
        "slug": "/tar-and-chip-driveway-cost/",
        "annotation": "explains the related tar and chip driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-millings-cost/",
        "annotation": "explains the related asphalt millings cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-thickness/",
        "annotation": "explains the related asphalt driveway thickness inputs or next step"
      },
      {
        "slug": "/concrete-driveway-repair-cost/",
        "annotation": "explains the related concrete driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-repair-cost/",
        "annotation": "explains the related driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-replacement-cost/",
        "annotation": "explains the related driveway replacement cost inputs or next step"
      },
      {
        "slug": "/standard-driveway-width/",
        "annotation": "explains the related standard driveway width inputs or next step"
      },
      {
        "slug": "/concrete-calculator/",
        "annotation": "explains the related concrete calculator inputs or next step"
      },
      {
        "slug": "/paver-calculator/",
        "annotation": "explains the related paver calculator inputs or next step"
      },
      {
        "slug": "/how-to-lay-an-asphalt-driveway/",
        "annotation": "explains the related how to lay an asphalt driveway inputs or next step"
      },
      {
        "slug": "/hot-mix-asphalt/",
        "annotation": "explains the related hot mix asphalt inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-maintenance/",
        "annotation": "explains the related asphalt driveway maintenance inputs or next step"
      },
      {
        "slug": "/driveway-drainage/",
        "annotation": "explains the related driveway drainage inputs or next step"
      },
      {
        "slug": "/how-to-repair-concrete-driveway-cracks/",
        "annotation": "explains the related how to repair concrete driveway cracks inputs or next step"
      },
      {
        "slug": "/how-to-repair-asphalt-driveway-cracks/",
        "annotation": "explains the related how to repair asphalt driveway cracks inputs or next step"
      },
      {
        "slug": "/sealcoat-calculator/",
        "annotation": "explains the related sealcoat calculator inputs or next step"
      },
      {
        "slug": "/asphalt-millings-calculator/",
        "annotation": "explains the related asphalt millings calculator inputs or next step"
      },
      {
        "slug": "/material-weights/",
        "annotation": "explains the related material weights inputs or next step"
      },
      {
        "slug": "/cubic-yards-to-tons/",
        "annotation": "explains the related cubic yards to tons inputs or next step"
      },
      {
        "slug": "/rock-calculator/",
        "annotation": "explains the related rock calculator inputs or next step"
      },
      {
        "slug": "/pea-gravel-calculator/",
        "annotation": "explains the related pea gravel calculator inputs or next step"
      },
      {
        "slug": "/crusher-run-calculator/",
        "annotation": "explains the related crusher run calculator inputs or next step"
      },
      {
        "slug": "/road-base-calculator/",
        "annotation": "explains the related road base calculator inputs or next step"
      },
      {
        "slug": "/concrete-weight-per-cubic-yard/",
        "annotation": "explains the related concrete weight per cubic yard inputs or next step"
      },
      {
        "slug": "/gravel-weight-per-cubic-yard/",
        "annotation": "explains the related gravel weight per cubic yard inputs or next step"
      },
      {
        "slug": "/driveway-sealer/",
        "annotation": "explains the related driveway sealer inputs or next step"
      },
      {
        "slug": "/how-to-seal-a-driveway/",
        "annotation": "explains the related how to seal a driveway inputs or next step"
      },
      {
        "slug": "/driveway-crack-filler/",
        "annotation": "explains the related driveway crack filler inputs or next step"
      },
      {
        "slug": "/asphalt-cold-patch/",
        "annotation": "explains the related asphalt cold patch inputs or next step"
      },
      {
        "slug": "/driveway-cost/",
        "annotation": "explains the related driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: every tool and cost page (each page cites this page for its formulas). In: from every page footer"
  },
  {
    "order": 2,
    "seq": 2,
    "url": "/asphalt-calculator/",
    "section": "Core",
    "type": "Quantity tool",
    "phase": "1",
    "primary": "asphalt calculator",
    "primaryVolume": 22200.0,
    "primaryKd": 15.0,
    "primaryCpc": 1.16,
    "keywords": [
      "figuring asphalt",
      "asphalt tonnage calculator",
      "asphalt calculator online",
      "asphalt driveway calculator",
      "how to calculate asphalt tonnage",
      "how to figure asphalt tonnage",
      "how do you calculate asphalt tonnage",
      "how to figure out asphalt tonnage",
      "how to calculate tons of asphalt",
      "how to figure tons of asphalt",
      "bitumen calculator"
    ],
    "title": "Asphalt Calculator: Tons Needed for a Driveway or Lot",
    "h1": "Asphalt Calculator",
    "description": "Calculate tons of asphalt from length, width and thickness. Editable density and waste allowance. Free, no sign-up.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "hot mix asphalt",
      "short ton (2",
      "000 lb)",
      "density in lb per cubic foot",
      "thickness in inches",
      "waste allowance",
      "compaction",
      "square feet",
      "base course"
    ],
    "imageAlt": "Asphalt calculator with length, width and thickness inputs and a tons result",
    "related": [
      {
        "slug": "/asphalt-driveway-cost-calculator/",
        "annotation": "explains the related asphalt driveway cost calculator inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-thickness/",
        "annotation": "explains the related asphalt driveway thickness inputs or next step"
      },
      {
        "slug": "/material-weights/",
        "annotation": "explains the related material weights inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-driveway-cost-calculator/ (this calculator converts driveway dimensions into tons that the cost estimator then prices); /asphalt-driveway-thickness/ (thickness sets the tonnage); /material-weights/ (the density default comes from the weight chart). In: from /, /asphalt-driveway-cost/, /asphalt-millings-calculator/"
  },
  {
    "order": 3,
    "seq": 3,
    "url": "/asphalt-driveway-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1",
    "primary": "asphalt driveway cost",
    "primaryVolume": 6600.0,
    "primaryKd": 9.0,
    "primaryCpc": 3.14,
    "keywords": [
      "cost of asphalt driveway",
      "how much does it cost to pave a driveway",
      "blacktop driveway cost",
      "asphalt driveway cost per square foot",
      "how much does an asphalt driveway cost",
      "how much does it cost to asphalt a driveway",
      "20x20 asphalt driveway cost",
      "cost of asphalt per ton",
      "hot mix asphalt cost per ton"
    ],
    "title": "Asphalt Driveway Cost per Sq Ft (2026)",
    "h1": "Asphalt Driveway Cost in 2026",
    "description": "Asphalt driveway cost per square foot, per ton and for a 20x20 driveway, plus what moves the price. Includes a free estimator.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "hot mix asphalt",
      "base course",
      "subgrade",
      "thickness",
      "square footage",
      "tonnage",
      "removal and disposal",
      "labor",
      "delivery",
      "regional price level"
    ],
    "imageAlt": "Freshly paved asphalt driveway with a tape measure across the width",
    "related": [
      {
        "slug": "/asphalt-calculator/",
        "annotation": "explains the related asphalt calculator inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-cost-calculator/",
        "annotation": "explains the related asphalt driveway cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-vs-asphalt-driveway/",
        "annotation": "explains the related concrete vs asphalt driveway inputs or next step"
      },
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      },
      {
        "slug": "/repave-asphalt-driveway-cost/",
        "annotation": "explains the related repave asphalt driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-calculator/ (the calculator turns driveway size into tons to price); /asphalt-driveway-cost-calculator/; /concrete-vs-asphalt-driveway/; /driveway-sealcoating-cost/ (sealcoating adds upkeep cost across the asphalt lifespan); /repave-asphalt-driveway-cost/. In: from /, /driveway-cost/, /asphalt-calculator/, /asphalt-driveway-thickness/"
  },
  {
    "order": 4,
    "seq": 4,
    "url": "/asphalt-driveway-cost-calculator/",
    "section": "Core",
    "type": "Cost estimator",
    "phase": "1",
    "primary": "asphalt driveway cost calculator",
    "primaryVolume": 1900.0,
    "primaryKd": 24.0,
    "primaryCpc": null,
    "keywords": ["driveway paving cost calculator"],
    "title": "Asphalt Driveway Cost Calculator: Free Estimate",
    "h1": "Asphalt Driveway Cost Calculator",
    "description": "Estimate your asphalt driveway cost from size, thickness, base work and removal. Low-to-high range with editable assumptions.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "square feet",
      "thickness",
      "base preparation",
      "removal",
      "low and high range",
      "cost tier selector",
      "editable assumptions"
    ],
    "imageAlt": "Cost estimator form for an asphalt driveway with a price range result",
    "related": [
      {
        "slug": "/asphalt-driveway-cost/",
        "annotation": "explains the related asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-calculator/",
        "annotation": "explains the related asphalt calculator inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-driveway-cost/ (the guide explains each input and its price range); /asphalt-calculator/. In: from /asphalt-driveway-cost/, /repave-asphalt-driveway-cost/"
  },
  {
    "order": 5,
    "seq": 5,
    "url": "/concrete-driveway-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1",
    "primary": "concrete driveway cost",
    "primaryVolume": 4400.0,
    "primaryKd": 21.0,
    "primaryCpc": 3.67,
    "keywords": [
      "concrete driveway",
      "cost of concrete driveway",
      "how much does a concrete driveway cost",
      "how much does it cost to concrete a driveway",
      "how much does concrete driveway cost",
      "how much does it cost for a concrete driveway",
      "how much does it cost to pour a concrete driveway",
      "how much is a concrete driveway",
      "how much to cement a driveway",
      "how much does it cost to cement a driveway",
      "how much to concrete a driveway",
      "how much does a cement driveway cost",
      "how much to concrete driveway",
      "how much is a concrete driveway per square foot"
    ],
    "title": "Concrete Driveway Cost per Sq Ft (2026)",
    "h1": "Concrete Driveway Cost in 2026",
    "description": "Concrete driveway cost per square foot and in total, with what raises or lowers the price. Includes a free cost estimator.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "concrete slab",
      "slab thickness",
      "reinforcement (rebar",
      "wire mesh)",
      "control joints",
      "finish",
      "cubic yards",
      "formwork",
      "subbase",
      "cement (the everyday word searchers use for concrete)"
    ],
    "imageAlt": "Concrete driveway slab with broom finish and control joints",
    "related": [
      {
        "slug": "/concrete-driveway-cost-calculator/",
        "annotation": "explains the related concrete driveway cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-vs-asphalt-driveway/",
        "annotation": "explains the related concrete vs asphalt driveway inputs or next step"
      },
      {
        "slug": "/stamped-concrete-driveway-cost/",
        "annotation": "explains the related stamped concrete driveway cost inputs or next step"
      },
      {
        "slug": "/replace-concrete-driveway-cost/",
        "annotation": "explains the related replace concrete driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /concrete-driveway-cost-calculator/; /concrete-vs-asphalt-driveway/; /stamped-concrete-driveway-cost/ (stamping adds pattern cost to the base slab price); /replace-concrete-driveway-cost/. In: from /, /driveway-cost/, /concrete-calculator/"
  },
  {
    "order": 6,
    "seq": 6,
    "url": "/concrete-driveway-cost-calculator/",
    "section": "Core",
    "type": "Cost estimator",
    "phase": "1",
    "primary": "concrete driveway cost calculator",
    "primaryVolume": 1300.0,
    "primaryKd": 33.0,
    "primaryCpc": null,
    "keywords": [
      "concrete driveway calculator",
      "driveway concrete calculator",
      "how much concrete do i need for a driveway"
    ],
    "title": "Concrete Driveway Cost Calculator: Free Estimate",
    "h1": "Concrete Driveway Cost Calculator",
    "description": "Estimate concrete driveway cost and cubic yards from size and thickness. Editable price and waste assumptions, low-to-high range.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "cubic yards",
      "thickness",
      "waste allowance",
      "finish",
      "reinforcement",
      "price per cubic yard",
      "price per square foot"
    ],
    "imageAlt": "Concrete driveway cost estimator showing cubic yards and a price range",
    "related": [
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      },
      {
        "slug": "/concrete-calculator/",
        "annotation": "explains the related concrete calculator inputs or next step"
      }
    ],
    "contextualBridges": "Out: /concrete-driveway-cost/ (the guide explains how finish and reinforcement change price); /concrete-calculator/ (volume math). In: from /concrete-driveway-cost/"
  },
  {
    "order": 7,
    "seq": 7,
    "url": "/gravel-driveway-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1",
    "primary": "gravel driveway cost",
    "primaryVolume": 2400.0,
    "primaryKd": 11.0,
    "primaryCpc": 1.76,
    "keywords": [
      "gravel delivery cost",
      "cost to put in gravel driveway",
      "cost to install gravel driveway",
      "driveway gravel cost",
      "gravel driveway cost calculator",
      "driveway gravel prices"
    ],
    "title": "Gravel Driveway Cost per Sq Ft (2026)",
    "h1": "Gravel Driveway Cost in 2026",
    "description": "Gravel driveway cost per square foot, per ton and with delivery, plus base layers and upkeep. Includes a free estimator.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "crusher run",
      "road base",
      "pea gravel",
      "base layer",
      "surface layer",
      "geotextile fabric",
      "edging",
      "delivery fee",
      "tons",
      "cubic yards"
    ],
    "imageAlt": "Gravel driveway with a compacted crushed stone surface and edging",
    "related": [
      {
        "slug": "/gravel-driveway-calculator/",
        "annotation": "explains the related gravel driveway calculator inputs or next step"
      },
      {
        "slug": "/gravel-calculator/",
        "annotation": "explains the related gravel calculator inputs or next step"
      },
      {
        "slug": "/crusher-run-calculator/",
        "annotation": "explains the related crusher run calculator inputs or next step"
      },
      {
        "slug": "/road-base-calculator/",
        "annotation": "explains the related road base calculator inputs or next step"
      },
      {
        "slug": "/concrete-vs-asphalt-driveway/",
        "annotation": "explains the related concrete vs asphalt driveway inputs or next step"
      }
    ],
    "contextualBridges": "Out: /gravel-driveway-calculator/ (the calculator turns driveway size into tons to price); /gravel-calculator/; /crusher-run-calculator/; /road-base-calculator/; /concrete-vs-asphalt-driveway/. In: from /, /driveway-cost/, /gravel-calculator/"
  },
  {
    "order": 8,
    "seq": 8,
    "url": "/gravel-driveway-calculator/",
    "section": "Core",
    "type": "Quantity tool",
    "phase": "1",
    "primary": "gravel driveway calculator",
    "primaryVolume": 1300.0,
    "primaryKd": 20.0,
    "primaryCpc": 0.44,
    "keywords": ["how much gravel do i need for a driveway"],
    "title": "Gravel Driveway Calculator: Tons and Yards Needed",
    "h1": "Gravel Driveway Calculator",
    "description": "Calculate tons and cubic yards of gravel for a driveway from length, width and depth, with base and surface layers.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "base layer",
      "surface layer",
      "depth",
      "compaction",
      "tons per cubic yard",
      "delivery load rounding"
    ],
    "imageAlt": "Gravel driveway calculator with base and surface layer inputs",
    "related": [
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      },
      {
        "slug": "/cubic-yards-to-tons/",
        "annotation": "explains the related cubic yards to tons inputs or next step"
      }
    ],
    "contextualBridges": "Out: /gravel-driveway-cost/ (the cost guide prices the tons this calculator returns); /cubic-yards-to-tons/. In: from /gravel-calculator/, /gravel-driveway-cost/"
  },
  {
    "order": 9,
    "seq": 9,
    "url": "/gravel-calculator/",
    "section": "Outer",
    "type": "Quantity tool",
    "phase": "1",
    "primary": "gravel calculator",
    "primaryVolume": 40500.0,
    "primaryKd": 22.0,
    "primaryCpc": 0.69,
    "keywords": [
      "gravel calculator yards",
      "how much gravel do i need calculator",
      "how to calculate how much gravel i need",
      "how to calculate how much gravel you need",
      "how to calculate yards of gravel",
      "how to calculate gravel needed",
      "figuring gravel",
      "how much gravel do i need",
      "how many yards of gravel do i need",
      "stone calculator",
      "crushed stone calculator",
      "river stone calculator",
      "57 stone calculator",
      "stone calculator tons",
      "how much stone do i need calculator"
    ],
    "title": "Gravel Calculator: Tons and Cubic Yards Needed",
    "h1": "Gravel Calculator",
    "description": "Calculate tons and cubic yards of gravel from length, width and depth. Editable density and delivery rounding. Free.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "gravel",
      "crushed stone",
      "cubic yards",
      "tons",
      "density",
      "depth",
      "delivery load"
    ],
    "imageAlt": "Gravel pile beside a measured gravel bed",
    "related": [
      {
        "slug": "/gravel-driveway-calculator/",
        "annotation": "explains the related gravel driveway calculator inputs or next step"
      },
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      },
      {
        "slug": "/cubic-yards-to-tons/",
        "annotation": "explains the related cubic yards to tons inputs or next step"
      },
      {
        "slug": "/material-weights/",
        "annotation": "explains the related material weights inputs or next step"
      }
    ],
    "contextualBridges": "Out: /gravel-driveway-calculator/ (driveway projects need separate base and surface layers); /gravel-driveway-cost/; /cubic-yards-to-tons/; /material-weights/. In: from /, /gravel-driveway-cost/"
  },
  {
    "order": 10,
    "seq": 10,
    "url": "/",
    "section": "Core",
    "type": "Hub",
    "phase": "1",
    "primary": "",
    "primaryVolume": null,
    "primaryKd": null,
    "primaryCpc": null,
    "keywords": [],
    "title": "Driveway Calculators: Cost Guides and Material Tools",
    "h1": "Driveway Calculators",
    "description": "Free driveway cost guides and calculators for asphalt, concrete, gravel and pavers: tons, cubic yards, square feet and price ranges.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "driveway",
      "cost",
      "calculator",
      "asphalt",
      "concrete",
      "gravel",
      "pavers",
      "tons",
      "cubic yards"
    ],
    "imageAlt": "Driveway cost and material calculators site banner",
    "related": [
      {
        "slug": "/methodology/",
        "annotation": "explains the related methodology inputs or next step"
      },
      {
        "slug": "/asphalt-calculator/",
        "annotation": "explains the related asphalt calculator inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-cost/",
        "annotation": "explains the related asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-cost-calculator/",
        "annotation": "explains the related asphalt driveway cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost-calculator/",
        "annotation": "explains the related concrete driveway cost calculator inputs or next step"
      },
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      },
      {
        "slug": "/gravel-driveway-calculator/",
        "annotation": "explains the related gravel driveway calculator inputs or next step"
      },
      {
        "slug": "/gravel-calculator/",
        "annotation": "explains the related gravel calculator inputs or next step"
      },
      {
        "slug": "/driveway-cost-calculator/",
        "annotation": "explains the related driveway cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-slab-cost-calculator/",
        "annotation": "explains the related concrete slab cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-slab-cost/",
        "annotation": "explains the related concrete slab cost inputs or next step"
      },
      {
        "slug": "/gravel-driveway/",
        "annotation": "explains the related gravel driveway inputs or next step"
      },
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      },
      {
        "slug": "/repave-asphalt-driveway-cost/",
        "annotation": "explains the related repave asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      },
      {
        "slug": "/concrete-vs-asphalt-driveway/",
        "annotation": "explains the related concrete vs asphalt driveway inputs or next step"
      },
      {
        "slug": "/replace-concrete-driveway-cost/",
        "annotation": "explains the related replace concrete driveway cost inputs or next step"
      },
      {
        "slug": "/stamped-concrete-driveway-cost/",
        "annotation": "explains the related stamped concrete driveway cost inputs or next step"
      },
      {
        "slug": "/paver-driveway-cost/",
        "annotation": "explains the related paver driveway cost inputs or next step"
      },
      {
        "slug": "/tar-and-chip-driveway-cost/",
        "annotation": "explains the related tar and chip driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-millings-cost/",
        "annotation": "explains the related asphalt millings cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-thickness/",
        "annotation": "explains the related asphalt driveway thickness inputs or next step"
      },
      {
        "slug": "/concrete-driveway-repair-cost/",
        "annotation": "explains the related concrete driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-repair-cost/",
        "annotation": "explains the related driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-replacement-cost/",
        "annotation": "explains the related driveway replacement cost inputs or next step"
      },
      {
        "slug": "/standard-driveway-width/",
        "annotation": "explains the related standard driveway width inputs or next step"
      },
      {
        "slug": "/concrete-calculator/",
        "annotation": "explains the related concrete calculator inputs or next step"
      },
      {
        "slug": "/paver-calculator/",
        "annotation": "explains the related paver calculator inputs or next step"
      },
      {
        "slug": "/how-to-lay-an-asphalt-driveway/",
        "annotation": "explains the related how to lay an asphalt driveway inputs or next step"
      },
      {
        "slug": "/hot-mix-asphalt/",
        "annotation": "explains the related hot mix asphalt inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-maintenance/",
        "annotation": "explains the related asphalt driveway maintenance inputs or next step"
      },
      {
        "slug": "/driveway-drainage/",
        "annotation": "explains the related driveway drainage inputs or next step"
      },
      {
        "slug": "/how-to-repair-concrete-driveway-cracks/",
        "annotation": "explains the related how to repair concrete driveway cracks inputs or next step"
      },
      {
        "slug": "/how-to-repair-asphalt-driveway-cracks/",
        "annotation": "explains the related how to repair asphalt driveway cracks inputs or next step"
      },
      {
        "slug": "/sealcoat-calculator/",
        "annotation": "explains the related sealcoat calculator inputs or next step"
      },
      {
        "slug": "/asphalt-millings-calculator/",
        "annotation": "explains the related asphalt millings calculator inputs or next step"
      },
      {
        "slug": "/material-weights/",
        "annotation": "explains the related material weights inputs or next step"
      },
      {
        "slug": "/cubic-yards-to-tons/",
        "annotation": "explains the related cubic yards to tons inputs or next step"
      },
      {
        "slug": "/rock-calculator/",
        "annotation": "explains the related rock calculator inputs or next step"
      },
      {
        "slug": "/pea-gravel-calculator/",
        "annotation": "explains the related pea gravel calculator inputs or next step"
      },
      {
        "slug": "/crusher-run-calculator/",
        "annotation": "explains the related crusher run calculator inputs or next step"
      },
      {
        "slug": "/road-base-calculator/",
        "annotation": "explains the related road base calculator inputs or next step"
      },
      {
        "slug": "/concrete-weight-per-cubic-yard/",
        "annotation": "explains the related concrete weight per cubic yard inputs or next step"
      },
      {
        "slug": "/gravel-weight-per-cubic-yard/",
        "annotation": "explains the related gravel weight per cubic yard inputs or next step"
      },
      {
        "slug": "/driveway-sealer/",
        "annotation": "explains the related driveway sealer inputs or next step"
      },
      {
        "slug": "/how-to-seal-a-driveway/",
        "annotation": "explains the related how to seal a driveway inputs or next step"
      },
      {
        "slug": "/driveway-crack-filler/",
        "annotation": "explains the related driveway crack filler inputs or next step"
      },
      {
        "slug": "/asphalt-cold-patch/",
        "annotation": "explains the related asphalt cold patch inputs or next step"
      },
      {
        "slug": "/driveway-cost/",
        "annotation": "explains the related driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: every Core page and every tool through the main navigation. In: from every page logo link"
  },
  {
    "order": 11,
    "seq": 42,
    "url": "/driveway-cost-calculator/",
    "section": "Core",
    "type": "Compare estimator",
    "phase": "1b",
    "primary": "driveway cost calculator",
    "primaryVolume": 590.0,
    "primaryKd": 19.0,
    "primaryCpc": 2.45,
    "keywords": ["driveway calculator", "driveway cost estimator"],
    "title": "Driveway Cost Calculator: Compare Asphalt, Concrete, Gravel",
    "h1": "Driveway Cost Calculator",
    "description": "Enter your driveway size once and compare estimated cost, lifespan and upkeep for asphalt, concrete, gravel and pavers.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["surface", "lifespan", "upkeep", "cost per year", "cost area tier"],
    "related": [
      {
        "slug": "/asphalt-driveway-cost/",
        "annotation": "explains the related asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-cost-calculator/",
        "annotation": "explains the related asphalt driveway cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost-calculator/",
        "annotation": "explains the related concrete driveway cost calculator inputs or next step"
      },
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      },
      {
        "slug": "/concrete-slab-cost-calculator/",
        "annotation": "explains the related concrete slab cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-slab-cost/",
        "annotation": "explains the related concrete slab cost inputs or next step"
      },
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      },
      {
        "slug": "/repave-asphalt-driveway-cost/",
        "annotation": "explains the related repave asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      },
      {
        "slug": "/replace-concrete-driveway-cost/",
        "annotation": "explains the related replace concrete driveway cost inputs or next step"
      },
      {
        "slug": "/stamped-concrete-driveway-cost/",
        "annotation": "explains the related stamped concrete driveway cost inputs or next step"
      },
      {
        "slug": "/paver-driveway-cost/",
        "annotation": "explains the related paver driveway cost inputs or next step"
      },
      {
        "slug": "/tar-and-chip-driveway-cost/",
        "annotation": "explains the related tar and chip driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-millings-cost/",
        "annotation": "explains the related asphalt millings cost inputs or next step"
      },
      {
        "slug": "/concrete-driveway-repair-cost/",
        "annotation": "explains the related concrete driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-repair-cost/",
        "annotation": "explains the related driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-replacement-cost/",
        "annotation": "explains the related driveway replacement cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: every surface cost guide and estimator. In: from /, /driveway-cost/, every cost guide"
  },
  {
    "order": 12,
    "seq": 50,
    "url": "/concrete-slab-cost-calculator/",
    "section": "Outer",
    "type": "Cost estimator",
    "phase": "1b",
    "primary": "concrete slab cost calculator",
    "primaryVolume": 5400.0,
    "primaryKd": 22.0,
    "primaryCpc": 2.04,
    "keywords": [
      "concrete pad cost calculator",
      "concrete patio cost calculator",
      "calculating concrete slab cost",
      "concrete slab calculator cost",
      "concrete slab installation cost calculator",
      "concrete slab foundation cost calculator",
      "concrete pad installation cost calculator",
      "concrete pad calculator cost"
    ],
    "title": "Concrete Slab Cost Calculator: Free Estimate",
    "h1": "Concrete Slab Cost Calculator",
    "description": "Estimate slab, pad and patio cost and cubic yards from size and thickness, with editable price, waste and removal assumptions.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "square feet",
      "thickness",
      "cubic yards",
      "waste",
      "removal of the old slab",
      "stone base",
      "delivery",
      "short-load fee"
    ],
    "related": [
      {
        "slug": "/concrete-slab-cost/",
        "annotation": "explains the related concrete slab cost inputs or next step"
      },
      {
        "slug": "/concrete-calculator/",
        "annotation": "explains the related concrete calculator inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost-calculator/",
        "annotation": "explains the related concrete driveway cost calculator inputs or next step"
      }
    ],
    "contextualBridges": "Out: /concrete-slab-cost/ (the guide explains each input); /concrete-calculator/ (volume only); /concrete-driveway-cost-calculator/. In: from /concrete-slab-cost/, /concrete-calculator/"
  },
  {
    "order": 13,
    "seq": 49,
    "url": "/concrete-slab-cost/",
    "section": "Outer",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "concrete slab cost",
    "primaryVolume": 6600.0,
    "primaryKd": 18.0,
    "primaryCpc": 3.13,
    "keywords": [
      "concrete pad cost",
      "concrete slab cost per square foot",
      "garage slab cost",
      "cost to pour concrete slab",
      "cost of concrete slab",
      "cost to install concrete slab",
      "cost to lay a concrete pad",
      "cost to pour concrete pad",
      "cost to install a concrete pad"
    ],
    "title": "Concrete Slab Cost per Sq Ft (2026)",
    "h1": "Concrete Slab Cost",
    "description": "Concrete slab and pad cost per square foot by thickness, finish and reinforcement, with a free estimator.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "slab thickness",
      "reinforcement",
      "subbase",
      "finish",
      "control joints",
      "pad",
      "patio",
      "garage floor"
    ],
    "related": [
      {
        "slug": "/concrete-slab-cost-calculator/",
        "annotation": "explains the related concrete slab cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      },
      {
        "slug": "/concrete-calculator/",
        "annotation": "explains the related concrete calculator inputs or next step"
      }
    ],
    "contextualBridges": "Out: /concrete-slab-cost-calculator/ (the estimator prices the size entered here); /concrete-driveway-cost/ (a driveway is a slab built for vehicle loads, so its guide adds base and thickness); /concrete-calculator/. In: from /concrete-driveway-cost/"
  },
  {
    "order": 14,
    "seq": 43,
    "url": "/gravel-driveway/",
    "section": "Outer",
    "type": "How-to guide",
    "phase": "1b",
    "primary": "gravel driveway",
    "primaryVolume": 8100.0,
    "primaryKd": 29.0,
    "primaryCpc": 2.37,
    "keywords": [
      "driveway gravel",
      "gravel for driveway",
      "how to build a gravel driveway",
      "how do you lay a gravel driveway",
      "how to gravel driveway",
      "how to make a gravel driveway",
      "how do i lay a gravel driveway",
      "gravel driveway maintenance"
    ],
    "title": "How to Build a Gravel Driveway: Layers and Maintenance",
    "h1": "Gravel Driveway",
    "description": "What a gravel driveway is, which stone to use, the layers it needs and how to maintain it.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "crushed stone",
      "base layer",
      "surface layer",
      "geotextile fabric",
      "edging",
      "grading",
      "potholes",
      "regrading"
    ],
    "related": [
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      },
      {
        "slug": "/gravel-driveway-calculator/",
        "annotation": "explains the related gravel driveway calculator inputs or next step"
      }
    ],
    "contextualBridges": "Out: /gravel-driveway-cost/ (the cost guide prices each layer described here); /gravel-driveway-calculator/ (the calculator turns driveway size into tons). In: from /driveway-cost/, /concrete-vs-asphalt-driveway/. Keep cost terms on Seq 7."
  },
  {
    "order": 15,
    "seq": 12,
    "url": "/driveway-sealcoating-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "driveway sealcoating",
    "primaryVolume": 6600.0,
    "primaryKd": 38.0,
    "primaryCpc": 3.5,
    "keywords": [
      "driveway sealcoating cost",
      "sealcoating cost per square foot",
      "driveway sealing",
      "how much to seal a driveway",
      "how much does it cost to seal a driveway"
    ],
    "title": "Driveway Sealcoating Cost per Sq Ft",
    "h1": "Driveway Sealcoating Cost",
    "description": "Driveway sealcoating cost per square foot and per driveway, with how often it is needed and what changes the price.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "sealer",
      "coverage per gallon",
      "coats",
      "cure time",
      "crack filling before sealing",
      "sealing frequency"
    ],
    "imageAlt": "Sealcoat being applied to an asphalt driveway with a squeegee",
    "related": [
      {
        "slug": "/sealcoat-calculator/",
        "annotation": "explains the related sealcoat calculator inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /sealcoat-calculator/ (the calculator converts driveway area into gallons); /asphalt-driveway-repair-cost/. In: from /asphalt-driveway-cost/"
  },
  {
    "order": 16,
    "seq": 11,
    "url": "/repave-asphalt-driveway-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "asphalt resurfacing driveway cost",
    "primaryVolume": 2400.0,
    "primaryKd": 29.0,
    "primaryCpc": null,
    "keywords": [
      "cost to replace asphalt driveway",
      "how much does it cost to repave a driveway",
      "asphalt overlay cost"
    ],
    "title": "Repave Asphalt Driveway Cost: Resurface vs Replace (2026)",
    "h1": "Cost to Repave an Asphalt Driveway",
    "description": "Repaving cost for an asphalt driveway: overlay, resurfacing and full replacement, with when each option applies.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "overlay",
      "resurfacing",
      "milling",
      "tear-out",
      "base repair",
      "drainage",
      "asphalt lifespan"
    ],
    "imageAlt": "Asphalt driveway with an overlay layer being rolled",
    "related": [
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-cost-calculator/",
        "annotation": "explains the related asphalt driveway cost calculator inputs or next step"
      },
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-driveway-repair-cost/ (repair applies while damage is limited); /asphalt-driveway-cost-calculator/; /driveway-sealcoating-cost/. In: from /asphalt-driveway-cost/"
  },
  {
    "order": 17,
    "seq": 13,
    "url": "/asphalt-driveway-repair-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "asphalt driveway repair cost",
    "primaryVolume": 320.0,
    "primaryKd": 20.0,
    "primaryCpc": 3.8,
    "keywords": ["asphalt driveway repair"],
    "title": "Asphalt Driveway Repair Cost: Cracks, Patches, Potholes",
    "h1": "Asphalt Driveway Repair Cost",
    "description": "Asphalt driveway repair cost by repair type: crack filling, patching, potholes and sections, with when repair beats repaving.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "crack filler",
      "cold patch",
      "hot patch",
      "pothole",
      "alligator cracking",
      "sealing"
    ],
    "imageAlt": "Cracked asphalt driveway section marked for repair",
    "related": [
      {
        "slug": "/driveway-crack-filler/",
        "annotation": "explains the related driveway crack filler inputs or next step"
      },
      {
        "slug": "/asphalt-cold-patch/",
        "annotation": "explains the related asphalt cold patch inputs or next step"
      },
      {
        "slug": "/repave-asphalt-driveway-cost/",
        "annotation": "explains the related repave asphalt driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /driveway-crack-filler/; /asphalt-cold-patch/; /repave-asphalt-driveway-cost/ (repaving replaces repair once damage spreads). In: from /asphalt-driveway-cost/, /driveway-sealcoating-cost/"
  },
  {
    "order": 18,
    "seq": 14,
    "url": "/concrete-vs-asphalt-driveway/",
    "section": "Core",
    "type": "Comparison",
    "phase": "1b",
    "primary": "concrete vs asphalt driveway",
    "primaryVolume": 1300.0,
    "primaryKd": 15.0,
    "primaryCpc": 1.26,
    "keywords": [
      "concrete vs asphalt driveway cost",
      "how long does an asphalt driveway last",
      "how long does a concrete driveway last",
      "asphalt driveway lifespan",
      "concrete driveway lifespan"
    ],
    "title": "Concrete vs Asphalt Driveway: Cost, Lifespan, Upkeep",
    "h1": "Concrete vs Asphalt Driveway",
    "description": "Concrete vs asphalt driveway compared on cost, lifespan, maintenance and climate fit, with a side-by-side table.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "lifespan",
      "upfront cost",
      "maintenance",
      "freeze-thaw",
      "heat",
      "repair",
      "appearance"
    ],
    "imageAlt": "Asphalt and concrete driveways side by side",
    "related": [
      {
        "slug": "/asphalt-driveway-cost/",
        "annotation": "explains the related asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      },
      {
        "slug": "/driveway-cost/",
        "annotation": "explains the related driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-driveway-cost/; /concrete-driveway-cost/; /driveway-cost/. In: from both cost pages"
  },
  {
    "order": 19,
    "seq": 15,
    "url": "/replace-concrete-driveway-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "cost to replace concrete driveway",
    "primaryVolume": 1300.0,
    "primaryKd": 15.0,
    "primaryCpc": null,
    "keywords": [],
    "title": "Replace Concrete Driveway Cost: Removal and New Pour",
    "h1": "Cost to Replace a Concrete Driveway",
    "description": "Cost to replace a concrete driveway: demolition, disposal and the new pour, with price ranges and when replacement beats repair.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["demolition", "hauling", "disposal", "subbase", "new pour", "slab replacement"],
    "imageAlt": "Old concrete driveway being broken up for replacement",
    "related": [
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost-calculator/",
        "annotation": "explains the related concrete driveway cost calculator inputs or next step"
      }
    ],
    "contextualBridges": "Out: /concrete-driveway-cost/; /concrete-driveway-cost-calculator/. In: from /concrete-driveway-cost/"
  },
  {
    "order": 20,
    "seq": 16,
    "url": "/stamped-concrete-driveway-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "stamped concrete driveway cost",
    "primaryVolume": 320.0,
    "primaryKd": 15.0,
    "primaryCpc": 2.43,
    "keywords": [],
    "title": "Stamped Concrete Driveway Cost per Sq Ft",
    "h1": "Stamped Concrete Driveway Cost",
    "description": "Stamped concrete driveway cost per square foot, what pattern and color add, and how it compares with plain concrete.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["stamp pattern", "color hardener", "release agent", "sealer", "resealing"],
    "imageAlt": "Stamped concrete driveway with a slate pattern",
    "related": [
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /concrete-driveway-cost/ (plain concrete sets the base price that stamping adds to). In: from /concrete-driveway-cost/"
  },
  {
    "order": 21,
    "seq": 17,
    "url": "/paver-driveway-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "paver driveway cost",
    "primaryVolume": 880.0,
    "primaryKd": 28.0,
    "primaryCpc": 3.35,
    "keywords": [],
    "title": "Paver Driveway Cost per Sq Ft (2026)",
    "h1": "Paver Driveway Cost",
    "description": "Paver driveway cost per square foot by material, base work and pattern, compared with asphalt and concrete.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "concrete pavers",
      "brick pavers",
      "natural stone",
      "base depth",
      "bedding sand",
      "edge restraint",
      "joint sand"
    ],
    "imageAlt": "Paver driveway with a herringbone pattern",
    "related": [
      {
        "slug": "/paver-calculator/",
        "annotation": "explains the related paver calculator inputs or next step"
      },
      {
        "slug": "/driveway-cost/",
        "annotation": "explains the related driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /paver-calculator/; /driveway-cost/. In: from /driveway-cost/, /concrete-vs-asphalt-driveway/"
  },
  {
    "order": 22,
    "seq": 18,
    "url": "/tar-and-chip-driveway-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "tar and chip driveway cost",
    "primaryVolume": 480.0,
    "primaryKd": 6.0,
    "primaryCpc": 2.41,
    "keywords": ["chip seal driveway"],
    "title": "Tar and Chip Driveway Cost per Sq Ft (2026)",
    "h1": "Tar and Chip Driveway Cost",
    "description": "Tar and chip driveway cost per square foot, how it is laid, lifespan and how it compares with asphalt.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["bituminous binder", "aggregate chips", "rolling", "chip seal", "lifespan"],
    "imageAlt": "Tar and chip driveway surface close up",
    "related": [
      {
        "slug": "/asphalt-driveway-cost/",
        "annotation": "explains the related asphalt driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-driveway-cost/ (tar and chip is the lower-cost alternative to hot mix asphalt). In: from /asphalt-driveway-cost/"
  },
  {
    "order": 23,
    "seq": 19,
    "url": "/asphalt-millings-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "asphalt millings cost",
    "primaryVolume": 320.0,
    "primaryKd": 4.0,
    "primaryCpc": 2.68,
    "keywords": [],
    "title": "Asphalt Millings Cost: Per Ton and Per Driveway",
    "h1": "Asphalt Millings Cost",
    "description": "Asphalt millings cost per ton and per driveway, delivery charges and how much a driveway needs.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["reclaimed asphalt pavement", "tons", "delivery", "compaction", "base depth"],
    "imageAlt": "Pile of asphalt millings on a driveway base",
    "related": [
      {
        "slug": "/asphalt-millings-calculator/",
        "annotation": "explains the related asphalt millings calculator inputs or next step"
      },
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-millings-calculator/; /gravel-driveway-cost/. In: from /asphalt-driveway-cost/"
  },
  {
    "order": 24,
    "seq": 20,
    "url": "/asphalt-driveway-thickness/",
    "section": "Core",
    "type": "Spec guide",
    "phase": "1b",
    "primary": "asphalt driveway thickness",
    "primaryVolume": 260.0,
    "primaryKd": 0.0,
    "primaryCpc": 2.81,
    "keywords": [],
    "title": "Asphalt Driveway Thickness: How Many Inches Is Needed",
    "h1": "Asphalt Driveway Thickness",
    "description": "Recommended asphalt driveway thickness by use, base depth and how thickness changes cost and tonnage.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["base thickness", "asphalt layers", "traffic load", "subgrade", "compaction"],
    "imageAlt": "Cross section diagram of an asphalt driveway layers",
    "related": [
      {
        "slug": "/asphalt-calculator/",
        "annotation": "explains the related asphalt calculator inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-cost/",
        "annotation": "explains the related asphalt driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-calculator/ (thickness is an input to tonnage); /asphalt-driveway-cost/. In: from /asphalt-calculator/"
  },
  {
    "order": 25,
    "seq": 37,
    "url": "/concrete-driveway-repair-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "concrete driveway repair cost",
    "primaryVolume": 1300.0,
    "primaryKd": 24.0,
    "primaryCpc": 4.7,
    "keywords": [
      "concrete driveway repair",
      "concrete driveway crack repair",
      "driveway concrete repair cost"
    ],
    "title": "Concrete Driveway Repair Cost: Cracks and Resurfacing",
    "h1": "Concrete Driveway Repair Cost",
    "description": "Concrete driveway repair cost by repair type: crack filling, resurfacing and slab replacement, with when to repair or replace.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["crack filling", "resurfacing", "slab leveling", "mudjacking", "control joints"],
    "related": [
      {
        "slug": "/replace-concrete-driveway-cost/",
        "annotation": "explains the related replace concrete driveway cost inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /replace-concrete-driveway-cost/ (replacement applies once damage spreads across slabs); /concrete-driveway-cost/. In: from /concrete-driveway-cost/"
  },
  {
    "order": 26,
    "seq": 38,
    "url": "/driveway-repair-cost/",
    "section": "Core",
    "type": "Cost hub",
    "phase": "1b",
    "primary": "driveway repair",
    "primaryVolume": 9900.0,
    "primaryKd": 26.0,
    "primaryCpc": 8.3,
    "keywords": [],
    "title": "Driveway Repair Cost by Surface: Asphalt, Concrete, Gravel",
    "h1": "Driveway Repair Cost",
    "description": "Driveway repair cost for asphalt, concrete and gravel, with typical repair types and when repair stops making sense.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["crack", "pothole", "settling", "resurfacing", "regrading"],
    "related": [
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      },
      {
        "slug": "/concrete-driveway-repair-cost/",
        "annotation": "explains the related concrete driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-replacement-cost/",
        "annotation": "explains the related driveway replacement cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-driveway-repair-cost/; /concrete-driveway-repair-cost/; /driveway-replacement-cost/. In: from /driveway-cost/"
  },
  {
    "order": 27,
    "seq": 39,
    "url": "/driveway-replacement-cost/",
    "section": "Core",
    "type": "Cost guide",
    "phase": "1b",
    "primary": "driveway replacement",
    "primaryVolume": 5400.0,
    "primaryKd": 32.0,
    "primaryCpc": 6.01,
    "keywords": [
      "how much is it to replace a driveway",
      "how much does it cost to replace a driveway"
    ],
    "title": "Driveway Replacement Cost by Surface (2026)",
    "h1": "Driveway Replacement Cost",
    "description": "Driveway replacement cost for asphalt, concrete, gravel and pavers, including removal and disposal.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["demolition", "hauling", "disposal", "subbase", "new surface"],
    "related": [
      {
        "slug": "/repave-asphalt-driveway-cost/",
        "annotation": "explains the related repave asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/replace-concrete-driveway-cost/",
        "annotation": "explains the related replace concrete driveway cost inputs or next step"
      },
      {
        "slug": "/driveway-cost-calculator/",
        "annotation": "explains the related driveway cost calculator inputs or next step"
      }
    ],
    "contextualBridges": "Out: /repave-asphalt-driveway-cost/; /replace-concrete-driveway-cost/; /driveway-cost-calculator/. In: from /driveway-repair-cost/"
  },
  {
    "order": 28,
    "seq": 46,
    "url": "/standard-driveway-width/",
    "section": "Outer",
    "type": "Reference",
    "phase": "1b",
    "primary": "standard driveway width",
    "primaryVolume": 1300.0,
    "primaryKd": 10.0,
    "primaryCpc": 0.0,
    "keywords": ["standard driveway size"],
    "title": "Standard Driveway Width and Size: 1, 2 and 3 Car",
    "h1": "Standard Driveway Width and Size",
    "description": "Standard driveway width and size for one-car, two-car and three-car driveways, with the area each covers.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["width", "length", "one-car", "two-car", "three-car", "turnaround", "square feet"],
    "related": [
      {
        "slug": "/driveway-cost-calculator/",
        "annotation": "explains the related driveway cost calculator inputs or next step"
      },
      {
        "slug": "/asphalt-calculator/",
        "annotation": "explains the related asphalt calculator inputs or next step"
      }
    ],
    "contextualBridges": "Out: /driveway-cost-calculator/ (size sets the cost); /asphalt-calculator/. In: from /driveway-cost/ and the size table on every cost guide"
  },
  {
    "order": 29,
    "seq": 35,
    "url": "/concrete-calculator/",
    "section": "Outer",
    "type": "Quantity tool",
    "phase": "2",
    "primary": "concrete calculator",
    "primaryVolume": 301000.0,
    "primaryKd": 49.0,
    "primaryCpc": 0.93,
    "keywords": [
      "concrete slab calculator",
      "concrete bag calculator",
      "concrete pad calculator",
      "calculator concrete yards",
      "concrete yards calculator",
      "how to calculate concrete",
      "how to calculate concrete yards",
      "how to calculate yards of concrete",
      "how do i calculate yards of concrete",
      "how do you calculate how much concrete you need",
      "concrete calculator bags",
      "bag concrete calculator",
      "bags of concrete calculator",
      "concrete bags calculator",
      "how many bags of concrete do i need",
      "material calculator for concrete slab",
      "concrete calculator for slab",
      "concrete calculator slab"
    ],
    "title": "Concrete Calculator: Cubic Yards and Bags Needed",
    "h1": "Concrete Calculator",
    "description": "Calculate cubic yards and bags of concrete for slabs and driveways from length, width and thickness, with waste allowance.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["cubic yards", "bags", "thickness", "slab", "waste"],
    "imageAlt": "Concrete slab being poured and leveled",
    "related": [
      {
        "slug": "/concrete-driveway-cost-calculator/",
        "annotation": "explains the related concrete driveway cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /concrete-driveway-cost-calculator/; /concrete-driveway-cost/. In: from /concrete-driveway-cost-calculator/"
  },
  {
    "order": 30,
    "seq": 36,
    "url": "/paver-calculator/",
    "section": "Outer",
    "type": "Quantity tool",
    "phase": "2",
    "primary": "paver calculator",
    "primaryVolume": 6600.0,
    "primaryKd": 42.0,
    "primaryCpc": 0.51,
    "keywords": [
      "paver base calculator",
      "paver sand calculator",
      "calculate paver sand",
      "cost calculator for paver patio"
    ],
    "title": "Paver Calculator: Pavers, Base and Sand Needed",
    "h1": "Paver Calculator",
    "description": "Calculate pavers, base material and sand for a driveway or patio from area, paver size and waste allowance.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["pavers", "square feet", "base", "bedding sand", "waste"],
    "imageAlt": "Paver layout over a compacted base",
    "related": [
      {
        "slug": "/paver-driveway-cost/",
        "annotation": "explains the related paver driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /paver-driveway-cost/. In: from /paver-driveway-cost/"
  },
  {
    "order": 31,
    "seq": 40,
    "url": "/how-to-lay-an-asphalt-driveway/",
    "section": "Outer",
    "type": "How-to guide",
    "phase": "2",
    "primary": "laying asphalt driveway",
    "primaryVolume": 2900.0,
    "primaryKd": 11.0,
    "primaryCpc": 5.92,
    "keywords": [],
    "title": "How to Lay an Asphalt Driveway: Steps, Tools and Cost",
    "h1": "How to Lay an Asphalt Driveway",
    "description": "The steps to lay an asphalt driveway, the tools involved and what a DIY job costs against hiring a paving crew.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["excavation", "base course", "compaction", "hot mix asphalt", "rolling", "curing"],
    "related": [
      {
        "slug": "/asphalt-calculator/",
        "annotation": "explains the related asphalt calculator inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-cost/",
        "annotation": "explains the related asphalt driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-calculator/ (the calculator gives the tons to order before the work starts); /asphalt-driveway-cost/. In: from /asphalt-driveway-thickness/"
  },
  {
    "order": 32,
    "seq": 41,
    "url": "/hot-mix-asphalt/",
    "section": "Outer",
    "type": "Reference",
    "phase": "2",
    "primary": "hot mix asphalt",
    "primaryVolume": 5400.0,
    "primaryKd": 13.0,
    "primaryCpc": 4.73,
    "keywords": [],
    "title": "Hot Mix Asphalt: What It Is and How Driveways Use It",
    "h1": "Hot Mix Asphalt",
    "description": "What hot mix asphalt is, what goes into it and how it is used on driveways.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["aggregate", "asphalt binder", "mix temperature", "compaction", "density"],
    "related": [
      {
        "slug": "/asphalt-calculator/",
        "annotation": "explains the related asphalt calculator inputs or next step"
      },
      {
        "slug": "/material-weights/",
        "annotation": "explains the related material weights inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-calculator/; /material-weights/. In: from /asphalt-driveway-cost/"
  },
  {
    "order": 33,
    "seq": 44,
    "url": "/asphalt-driveway-maintenance/",
    "section": "Outer",
    "type": "Guide",
    "phase": "2",
    "primary": "asphalt driveway maintenance",
    "primaryVolume": 1300.0,
    "primaryKd": 12.0,
    "primaryCpc": 3.54,
    "keywords": [],
    "title": "Asphalt Driveway Maintenance: Sealing, Cracks, Cleaning",
    "h1": "Asphalt Driveway Maintenance",
    "description": "The maintenance an asphalt driveway needs, how often it is done and what each task costs.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["sealcoating", "crack filling", "cleaning", "edging", "patching", "drainage"],
    "related": [
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /driveway-sealcoating-cost/; /asphalt-driveway-repair-cost/. In: from /asphalt-driveway-cost/"
  },
  {
    "order": 34,
    "seq": 45,
    "url": "/driveway-drainage/",
    "section": "Outer",
    "type": "Guide",
    "phase": "2",
    "primary": "driveway drainage",
    "primaryVolume": 1300.0,
    "primaryKd": 26.0,
    "primaryCpc": 1.81,
    "keywords": ["driveway slope"],
    "title": "Driveway Drainage: Slope, Drains and Fixes",
    "h1": "Driveway Drainage",
    "description": "How much slope a driveway needs, which drains fix standing water and when drainage faults cause damage.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["slope", "crown", "culvert", "trench drain", "French drain", "grading", "runoff"],
    "related": [
      {
        "slug": "/driveway-repair-cost/",
        "annotation": "explains the related driveway repair cost inputs or next step"
      },
      {
        "slug": "/gravel-driveway/",
        "annotation": "explains the related gravel driveway inputs or next step"
      }
    ],
    "contextualBridges": "Out: /driveway-repair-cost/ (drainage faults are a common cause of surface damage); /gravel-driveway/. In: from /driveway-cost/"
  },
  {
    "order": 35,
    "seq": 47,
    "url": "/how-to-repair-concrete-driveway-cracks/",
    "section": "Outer",
    "type": "How-to guide",
    "phase": "2",
    "primary": "how to repair cracks in concrete driveway",
    "primaryVolume": 880.0,
    "primaryKd": 22.0,
    "primaryCpc": 1.06,
    "keywords": [
      "how to repair driveway cracks",
      "how to repair concrete driveway",
      "how to repair large cracks in concrete driveway",
      "how to repair concrete driveway cracks"
    ],
    "title": "How to Repair Cracks in a Concrete Driveway",
    "h1": "How to Repair Cracks in a Concrete Driveway",
    "description": "How to repair small and large cracks in a concrete driveway, the materials needed and when to replace the slab instead.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["crack width", "filler", "backer rod", "patch compound", "slab replacement"],
    "related": [
      {
        "slug": "/concrete-driveway-repair-cost/",
        "annotation": "explains the related concrete driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-crack-filler/",
        "annotation": "explains the related driveway crack filler inputs or next step"
      }
    ],
    "contextualBridges": "Out: /concrete-driveway-repair-cost/ (repair cost by crack type); /driveway-crack-filler/. In: from /concrete-driveway-repair-cost/"
  },
  {
    "order": 36,
    "seq": 48,
    "url": "/how-to-repair-asphalt-driveway-cracks/",
    "section": "Outer",
    "type": "How-to guide",
    "phase": "2",
    "primary": "how to repair asphalt driveway",
    "primaryVolume": 390.0,
    "primaryKd": 34.0,
    "primaryCpc": null,
    "keywords": ["how to repair cracks in asphalt driveway"],
    "title": "How to Repair Cracks in an Asphalt Driveway",
    "h1": "How to Repair Cracks in an Asphalt Driveway",
    "description": "How to repair cracks and holes in an asphalt driveway, the filler to use and when to repave instead.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["crack filler", "cold patch", "pothole", "cleaning", "sealing"],
    "related": [
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-crack-filler/",
        "annotation": "explains the related driveway crack filler inputs or next step"
      },
      {
        "slug": "/asphalt-cold-patch/",
        "annotation": "explains the related asphalt cold patch inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-driveway-repair-cost/; /driveway-crack-filler/; /asphalt-cold-patch/. In: from /asphalt-driveway-repair-cost/"
  },
  {
    "order": 37,
    "seq": 21,
    "url": "/sealcoat-calculator/",
    "section": "Outer",
    "type": "Quantity tool",
    "phase": "2",
    "primary": "sealcoat calculator",
    "primaryVolume": 390.0,
    "primaryKd": 5.0,
    "primaryCpc": 0.56,
    "keywords": [
      "how much sealer do i need",
      "driveway sealer calculator",
      "asphalt sealer calculator"
    ],
    "title": "Sealcoat Calculator: Gallons Needed for a Driveway",
    "h1": "Sealcoat Calculator",
    "description": "Calculate gallons of sealcoat from driveway area, product coverage and number of coats, with container rounding.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["sealer", "gallons", "coverage per gallon", "coats", "container size"],
    "imageAlt": "Sealcoat buckets beside a driveway",
    "related": [
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /driveway-sealcoating-cost/ (the cost guide prices the gallons returned). In: from /driveway-sealcoating-cost/"
  },
  {
    "order": 38,
    "seq": 22,
    "url": "/asphalt-millings-calculator/",
    "section": "Outer",
    "type": "Quantity tool",
    "phase": "2",
    "primary": "asphalt millings calculator",
    "primaryVolume": 590.0,
    "primaryKd": 2.0,
    "primaryCpc": 0.04,
    "keywords": [],
    "title": "Asphalt Millings Calculator: Tons for a Driveway",
    "h1": "Asphalt Millings Calculator",
    "description": "Calculate tons of asphalt millings for a driveway from length, width and depth, with an editable density.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["reclaimed asphalt pavement", "tons", "depth", "compaction"],
    "imageAlt": "Asphalt millings spread on a driveway",
    "related": [
      {
        "slug": "/asphalt-millings-cost/",
        "annotation": "explains the related asphalt millings cost inputs or next step"
      },
      {
        "slug": "/asphalt-calculator/",
        "annotation": "explains the related asphalt calculator inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-millings-cost/; /asphalt-calculator/. In: from /asphalt-millings-cost/"
  },
  {
    "order": 39,
    "seq": 23,
    "url": "/material-weights/",
    "section": "Outer",
    "type": "Reference table",
    "phase": "2",
    "primary": "asphalt weight per cubic foot",
    "primaryVolume": 90.0,
    "primaryKd": 6.0,
    "primaryCpc": null,
    "keywords": ["asphalt density", "weight of asphalt", "how much does a yard of asphalt weigh"],
    "title": "Material Weight Chart: Asphalt, Gravel and Concrete",
    "h1": "Material Weight Chart",
    "description": "Weight per cubic foot and per cubic yard for asphalt, gravel, crushed stone and concrete, with tons per cubic yard.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["density", "pounds per cubic foot", "tons per cubic yard", "material list"],
    "imageAlt": "Table of material weights per cubic yard",
    "related": [
      {
        "slug": "/asphalt-calculator/",
        "annotation": "explains the related asphalt calculator inputs or next step"
      },
      {
        "slug": "/gravel-calculator/",
        "annotation": "explains the related gravel calculator inputs or next step"
      },
      {
        "slug": "/cubic-yards-to-tons/",
        "annotation": "explains the related cubic yards to tons inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-calculator/; /gravel-calculator/; /cubic-yards-to-tons/. In: from every quantity tool"
  },
  {
    "order": 40,
    "seq": 24,
    "url": "/cubic-yards-to-tons/",
    "section": "Outer",
    "type": "Converter",
    "phase": "2",
    "primary": "cubic yards to tons",
    "primaryVolume": 2900.0,
    "primaryKd": 16.0,
    "primaryCpc": 0.0,
    "keywords": ["how many yards in a ton of gravel", "how many tons in a cubic yard of gravel"],
    "title": "Cubic Yards to Tons Converter by Material",
    "h1": "Cubic Yards to Tons",
    "description": "Convert cubic yards to tons for gravel, asphalt, sand and concrete using an editable density for each material.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["cubic yards", "tons", "density", "material type"],
    "imageAlt": "Cubic yards to tons conversion widget",
    "related": [
      {
        "slug": "/material-weights/",
        "annotation": "explains the related material weights inputs or next step"
      },
      {
        "slug": "/gravel-calculator/",
        "annotation": "explains the related gravel calculator inputs or next step"
      }
    ],
    "contextualBridges": "Out: /material-weights/; /gravel-calculator/. In: from /gravel-calculator/, /gravel-driveway-calculator/"
  },
  {
    "order": 41,
    "seq": 25,
    "url": "/rock-calculator/",
    "section": "Outer",
    "type": "Quantity tool",
    "phase": "2",
    "primary": "rock calculator",
    "primaryVolume": 9900.0,
    "primaryKd": 9.0,
    "primaryCpc": 0.48,
    "keywords": [
      "river rock calculator",
      "landscape rock calculator",
      "crushed rock calculator",
      "how much rock do i need calculator",
      "how much river rock do i need calculator"
    ],
    "title": "Rock Calculator: Tons and Cubic Yards Needed",
    "h1": "Rock Calculator",
    "description": "Calculate tons and cubic yards of landscape rock from area and depth, with editable density and coverage.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["landscape rock", "cubic yards", "depth", "tons"],
    "imageAlt": "Landscape rock bed with measured depth",
    "related": [
      {
        "slug": "/gravel-calculator/",
        "annotation": "explains the related gravel calculator inputs or next step"
      },
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /gravel-calculator/ (rock and gravel differ in size and use); /river-rock-calculator/. In: from /gravel-calculator/"
  },
  {
    "order": 42,
    "seq": 27,
    "url": "/pea-gravel-calculator/",
    "section": "Outer",
    "type": "Quantity tool",
    "phase": "2",
    "primary": "pea gravel calculator",
    "primaryVolume": 4400.0,
    "primaryKd": 9.0,
    "primaryCpc": 0.38,
    "keywords": [
      "calculate pea gravel",
      "calculating pea gravel",
      "how much pea gravel do i need calculator",
      "pea gravel cost calculator"
    ],
    "title": "Pea Gravel Calculator: Tons and Yards Needed",
    "h1": "Pea Gravel Calculator",
    "description": "Calculate tons and cubic yards of pea gravel for paths, patios and driveways from area and depth.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["pea gravel", "depth", "tons", "cubic yards", "paths and patios"],
    "imageAlt": "Pea gravel path edging",
    "related": [
      {
        "slug": "/gravel-calculator/",
        "annotation": "explains the related gravel calculator inputs or next step"
      },
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /gravel-calculator/; /gravel-driveway-cost/. In: from /gravel-calculator/"
  },
  {
    "order": 43,
    "seq": 29,
    "url": "/crusher-run-calculator/",
    "section": "Outer",
    "type": "Quantity tool",
    "phase": "2",
    "primary": "crusher run calculator",
    "primaryVolume": 1000.0,
    "primaryKd": 5.0,
    "primaryCpc": 0.08,
    "keywords": [],
    "title": "Crusher Run Calculator: Tons Needed for a Base",
    "h1": "Crusher Run Calculator",
    "description": "Calculate tons of crusher run for a driveway or path base from area, depth and compaction.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["crusher run", "base layer", "compaction", "tons"],
    "imageAlt": "Compacted crusher run base",
    "related": [
      {
        "slug": "/gravel-driveway-calculator/",
        "annotation": "explains the related gravel driveway calculator inputs or next step"
      },
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /gravel-driveway-calculator/ (crusher run forms the compacted base layer); /gravel-driveway-cost/. In: from /gravel-driveway-calculator/"
  },
  {
    "order": 44,
    "seq": 30,
    "url": "/road-base-calculator/",
    "section": "Outer",
    "type": "Quantity tool",
    "phase": "2",
    "primary": "road base calculator",
    "primaryVolume": 1000.0,
    "primaryKd": 15.0,
    "primaryCpc": 0.73,
    "keywords": [],
    "title": "Road Base Calculator: Tons and Yards Needed",
    "h1": "Road Base Calculator",
    "description": "Calculate tons and cubic yards of road base from length, width and depth, with a compaction allowance.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["road base", "base layer", "compaction", "tons"],
    "imageAlt": "Road base being graded for a driveway",
    "related": [
      {
        "slug": "/gravel-driveway-calculator/",
        "annotation": "explains the related gravel driveway calculator inputs or next step"
      },
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /gravel-driveway-calculator/; /gravel-driveway-cost/. In: from /gravel-driveway-calculator/"
  },
  {
    "order": 45,
    "seq": 53,
    "url": "/concrete-weight-per-cubic-yard/",
    "section": "Outer",
    "type": "Reference",
    "phase": "2",
    "primary": "how much does a yard of concrete weigh",
    "primaryVolume": 2900.0,
    "primaryKd": 7.0,
    "primaryCpc": 0.0,
    "keywords": [
      "how much does a cubic yard of concrete weigh",
      "concrete weight per cubic yard",
      "how much does a yard of crushed concrete weigh",
      "how much does a yard of cured concrete weigh",
      "how much does a yard of dry concrete weigh"
    ],
    "title": "How Much Does a Yard of Concrete Weigh?",
    "h1": "Concrete Weight per Cubic Yard",
    "description": "The weight of a cubic yard of concrete by mix, with pounds per cubic foot and tons per cubic yard.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "normal-weight concrete",
      "lightweight concrete",
      "density",
      "pounds per cubic foot",
      "tons per cubic yard"
    ],
    "related": [
      {
        "slug": "/concrete-calculator/",
        "annotation": "explains the related concrete calculator inputs or next step"
      },
      {
        "slug": "/material-weights/",
        "annotation": "explains the related material weights inputs or next step"
      }
    ],
    "contextualBridges": "Out: /concrete-calculator/; /material-weights/. In: from /cubic-yards-to-tons/. Confirmed as a separate page on 11 October 2026, because dedicated concrete weight pages rank."
  },
  {
    "order": 46,
    "seq": 54,
    "url": "/gravel-weight-per-cubic-yard/",
    "section": "Outer",
    "type": "Reference",
    "phase": "2",
    "primary": "how much does a yard of gravel weigh",
    "primaryVolume": 1900.0,
    "primaryKd": 3.0,
    "primaryCpc": 0.0,
    "keywords": [
      "how much does a cubic yard of gravel weigh",
      "how much does a yard of pea gravel weigh",
      "how much does a yard of 3 4 gravel weigh",
      "how much does a cubic yard of pea gravel weigh",
      "cubic yard of gravel weight",
      "gravel weight per cubic yard",
      "how much does a ton of gravel cover",
      "how many cubic feet in a ton of gravel",
      "how many square feet does a ton of gravel cover"
    ],
    "title": "How Much Does a Yard of Gravel Weigh?",
    "h1": "Gravel Weight per Cubic Yard",
    "description": "The weight of a cubic yard of gravel by type, how much area a ton covers and how many cubic feet are in a ton.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "crushed stone",
      "pea gravel",
      "road base",
      "density",
      "moisture",
      "coverage depth"
    ],
    "related": [
      {
        "slug": "/gravel-calculator/",
        "annotation": "explains the related gravel calculator inputs or next step"
      },
      {
        "slug": "/cubic-yards-to-tons/",
        "annotation": "explains the related cubic yards to tons inputs or next step"
      },
      {
        "slug": "/material-weights/",
        "annotation": "explains the related material weights inputs or next step"
      }
    ],
    "contextualBridges": "Out: /gravel-calculator/; /cubic-yards-to-tons/; /material-weights/. In: from /gravel-calculator/. Confirmed as a separate page on 11 October 2026, because dedicated gravel weight pages rank beside charts."
  },
  {
    "order": 47,
    "seq": 51,
    "url": "/driveway-sealer/",
    "section": "Outer",
    "type": "Product guide",
    "phase": "2",
    "primary": "driveway sealer",
    "primaryVolume": 12100.0,
    "primaryKd": 34.0,
    "primaryCpc": 3.5,
    "keywords": ["asphalt driveway sealer", "asphalt sealer for driveways"],
    "title": "Best Driveway Sealer: Types and How to Choose",
    "h1": "Driveway Sealer",
    "description": "The main types of driveway sealer, how to choose one for asphalt or concrete, and how to apply it.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "acrylic sealer",
      "asphalt emulsion sealer",
      "coal tar sealer",
      "coverage per gallon",
      "cure time",
      "temperature",
      "primer",
      "crack filling"
    ],
    "related": [
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      },
      {
        "slug": "/sealcoat-calculator/",
        "annotation": "explains the related sealcoat calculator inputs or next step"
      },
      {
        "slug": "/driveway-crack-filler/",
        "annotation": "explains the related driveway crack filler inputs or next step"
      }
    ],
    "contextualBridges": "Out: /driveway-sealcoating-cost/ (the cost guide prices the job this guide describes); /sealcoat-calculator/ (the calculator turns driveway area into gallons); /driveway-crack-filler/ (fill cracks before sealing). In: from /asphalt-driveway-maintenance/, /asphalt-driveway-cost/. Source any state restriction on coal tar sealers before stating one."
  },
  {
    "order": 48,
    "seq": 55,
    "url": "/how-to-seal-a-driveway/",
    "section": "Outer",
    "type": "How-to guide",
    "phase": "2",
    "primary": "how to seal a driveway",
    "primaryVolume": 1000.0,
    "primaryKd": 35.0,
    "primaryCpc": null,
    "keywords": ["how to seal coat a driveway", "how to seal driveway"],
    "title": "How to Seal a Driveway: Steps, Tools and Timing",
    "h1": "How to Seal a Driveway",
    "description": "The steps to seal an asphalt driveway, the tools and sealer needed, and the weather and cure times to plan for.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "cleaning",
      "crack filling",
      "primer",
      "sealer",
      "squeegee",
      "coats",
      "cure time",
      "temperature"
    ],
    "related": [
      {
        "slug": "/driveway-sealer/",
        "annotation": "explains the related driveway sealer inputs or next step"
      },
      {
        "slug": "/sealcoat-calculator/",
        "annotation": "explains the related sealcoat calculator inputs or next step"
      },
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      },
      {
        "slug": "/driveway-crack-filler/",
        "annotation": "explains the related driveway crack filler inputs or next step"
      }
    ],
    "contextualBridges": "Out: /driveway-sealer/ (the buying guide covers which sealer to use); /sealcoat-calculator/ (gallons needed); /driveway-sealcoating-cost/ (cost to hire the job); /driveway-crack-filler/. In: from /asphalt-driveway-maintenance/"
  },
  {
    "order": 49,
    "seq": 31,
    "url": "/driveway-crack-filler/",
    "section": "Outer",
    "type": "Product guide",
    "phase": "2",
    "primary": "driveway crack filler",
    "primaryVolume": 3600.0,
    "primaryKd": 40.0,
    "primaryCpc": 1.35,
    "keywords": [],
    "title": "Best Driveway Crack Filler: How to Choose and Apply",
    "h1": "Driveway Crack Filler",
    "description": "How to choose a driveway crack filler by crack width and surface, with application steps and what to avoid.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["crack filler", "sealant", "cold pour", "hot pour", "crack width", "cure time"],
    "imageAlt": "Crack filler applied to an asphalt crack",
    "related": [
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-driveway-repair-cost/; /driveway-sealcoating-cost/ (fill cracks before sealcoating). In: from /asphalt-driveway-repair-cost/"
  },
  {
    "order": 50,
    "seq": 32,
    "url": "/asphalt-cold-patch/",
    "section": "Outer",
    "type": "Product guide",
    "phase": "2",
    "primary": "asphalt cold patch",
    "primaryVolume": 3600.0,
    "primaryKd": 31.0,
    "primaryCpc": 1.22,
    "keywords": [],
    "title": "Asphalt Cold Patch: How to Use It on Potholes",
    "h1": "Asphalt Cold Patch",
    "description": "What asphalt cold patch is, how to apply it to a pothole and how long a cold patch repair lasts.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": ["cold patch", "pothole", "compaction", "temporary repair"],
    "imageAlt": "Cold patch compacted into a pothole",
    "related": [
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: /asphalt-driveway-repair-cost/. In: from /asphalt-driveway-repair-cost/"
  },
  {
    "order": 51,
    "seq": 33,
    "url": "/driveway-cost/",
    "section": "Core",
    "type": "Pillar",
    "phase": "3",
    "primary": "driveway cost",
    "primaryVolume": 590.0,
    "primaryKd": 19.0,
    "primaryCpc": 3.01,
    "keywords": [
      "driveway installation",
      "new driveway cost",
      "driveway paving cost",
      "how much does a driveway cost",
      "cost to pave a driveway",
      "how much will a driveway cost",
      "how much does it cost for a driveway",
      "how much would a new driveway cost",
      "cost of a new driveway",
      "driveway cost per square foot",
      "how much does it cost to build a driveway",
      "how much should a new driveway cost"
    ],
    "title": "Driveway Cost by Material: Asphalt, Concrete, Gravel, Pavers",
    "h1": "Driveway Cost by Material",
    "description": "Driveway cost compared across asphalt, concrete, gravel and pavers, with price ranges, lifespan and a free estimator for each.",
    "status": "draft",
    "updated": "2026-10-11",
    "author": "Farrukh Abdullah",
    "entities": [
      "asphalt",
      "concrete",
      "gravel",
      "pavers",
      "tar and chip",
      "cost per square foot",
      "lifespan"
    ],
    "imageAlt": "Four driveway surfaces compared in a grid",
    "related": [
      {
        "slug": "/asphalt-driveway-cost/",
        "annotation": "explains the related asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-cost-calculator/",
        "annotation": "explains the related asphalt driveway cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost/",
        "annotation": "explains the related concrete driveway cost inputs or next step"
      },
      {
        "slug": "/concrete-driveway-cost-calculator/",
        "annotation": "explains the related concrete driveway cost calculator inputs or next step"
      },
      {
        "slug": "/gravel-driveway-cost/",
        "annotation": "explains the related gravel driveway cost inputs or next step"
      },
      {
        "slug": "/driveway-cost-calculator/",
        "annotation": "explains the related driveway cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-slab-cost-calculator/",
        "annotation": "explains the related concrete slab cost calculator inputs or next step"
      },
      {
        "slug": "/concrete-slab-cost/",
        "annotation": "explains the related concrete slab cost inputs or next step"
      },
      {
        "slug": "/driveway-sealcoating-cost/",
        "annotation": "explains the related driveway sealcoating cost inputs or next step"
      },
      {
        "slug": "/repave-asphalt-driveway-cost/",
        "annotation": "explains the related repave asphalt driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-driveway-repair-cost/",
        "annotation": "explains the related asphalt driveway repair cost inputs or next step"
      },
      {
        "slug": "/replace-concrete-driveway-cost/",
        "annotation": "explains the related replace concrete driveway cost inputs or next step"
      },
      {
        "slug": "/stamped-concrete-driveway-cost/",
        "annotation": "explains the related stamped concrete driveway cost inputs or next step"
      },
      {
        "slug": "/paver-driveway-cost/",
        "annotation": "explains the related paver driveway cost inputs or next step"
      },
      {
        "slug": "/tar-and-chip-driveway-cost/",
        "annotation": "explains the related tar and chip driveway cost inputs or next step"
      },
      {
        "slug": "/asphalt-millings-cost/",
        "annotation": "explains the related asphalt millings cost inputs or next step"
      },
      {
        "slug": "/concrete-driveway-repair-cost/",
        "annotation": "explains the related concrete driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-repair-cost/",
        "annotation": "explains the related driveway repair cost inputs or next step"
      },
      {
        "slug": "/driveway-replacement-cost/",
        "annotation": "explains the related driveway replacement cost inputs or next step"
      }
    ],
    "contextualBridges": "Out: every cost page and estimator. In: from every cost page"
  }
]
````

## data/prices.json

````json
{
  "asphalt": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "concrete": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "stamped-concrete": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "gravel": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "pavers": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "tar-and-chip": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "slab": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "millings": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "sealcoating": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "repair": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "replacement": {
    "installedLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "installedHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanLow": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "lifespanHigh": {
      "value": null,
      "unit": "years",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "upkeep": {
      "value": null,
      "unit": "USD/year",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "delivery": {
      "value": null,
      "unit": "USD/load",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "shortLoadFee": {
      "value": null,
      "unit": "USD",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "minimumOrder": {
      "value": null,
      "unit": "yd\u00b3",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialLow": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "materialHigh": {
      "value": null,
      "unit": "USD/short ton",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "removalHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseLow": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "baseHigh": {
      "value": null,
      "unit": "USD/ft\u00b2",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  },
  "tiers": {
    "low": {
      "value": null,
      "unit": "multiplier",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "average": {
      "value": null,
      "unit": "multiplier",
      "source": null,
      "retrievedOn": null,
      "verified": false
    },
    "high": {
      "value": null,
      "unit": "multiplier",
      "source": null,
      "retrievedOn": null,
      "verified": false
    }
  }
}
````

## data/reviewers.json

````json
[]
````

## data/schema.sql

````sql
CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  payload TEXT NOT NULL,
  payload_hash TEXT NOT NULL,
  page_url TEXT NOT NULL,
  consent_text TEXT NOT NULL,
  consent_at TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('pending','forwarded','failed')),
  attempts INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status,created_at);
CREATE TABLE IF NOT EXISTS rate_limits (
  ip_hash TEXT NOT NULL,
  window INTEGER NOT NULL,
  count INTEGER NOT NULL,
  PRIMARY KEY(ip_hash,window)
);
````

## data/source-metadata.json

````json
[
  {
    "seq": 1,
    "url": "/methodology/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "How We Calculate Driveway Costs and Material Quantities",
    "title": "How We Calculate Driveway Costs and Material Quantities",
    "h1": "Methodology",
    "description": "How the formulas, default densities and price ranges on this site are calculated, with sources and update dates.",
    "titleAdjustment": null,
    "entities": "formula, default density, source name, update date, rounding, units",
    "contextualBridges": "Out: every tool and cost page (each page cites this page for its formulas). In: from every page footer"
  },
  {
    "seq": 2,
    "url": "/asphalt-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Asphalt Calculator: Tons Needed for a Driveway or Lot",
    "title": "Asphalt Calculator: Tons Needed for a Driveway or Lot",
    "h1": "Asphalt Calculator",
    "description": "Calculate tons of asphalt from length, width and thickness. Editable density and waste allowance. Free, no sign-up.",
    "titleAdjustment": null,
    "entities": "hot mix asphalt, short ton (2,000 lb), density in lb per cubic foot, thickness in inches, waste allowance, compaction, square feet, base course",
    "contextualBridges": "Out: /asphalt-driveway-cost-calculator/ (this calculator converts driveway dimensions into tons that the cost estimator then prices); /asphalt-driveway-thickness/ (thickness sets the tonnage); /material-weights/ (the density default comes from the weight chart). In: from /, /asphalt-driveway-cost/, /asphalt-millings-calculator/"
  },
  {
    "seq": 3,
    "url": "/asphalt-driveway-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Asphalt Driveway Cost: {{LOW}} to {{HIGH}} per Sq Ft (2026)",
    "title": "Asphalt Driveway Cost per Sq Ft (2026)",
    "h1": "Asphalt Driveway Cost in 2026",
    "description": "Asphalt driveway cost per square foot, per ton and for a 20x20 driveway, plus what moves the price. Includes a free estimator.",
    "titleAdjustment": "Asphalt Driveway Cost per Sq Ft (2026)",
    "entities": "hot mix asphalt, base course, subgrade, thickness, square footage, tonnage, removal and disposal, labor, delivery, regional price level",
    "contextualBridges": "Out: /asphalt-calculator/ (the calculator turns driveway size into tons to price); /asphalt-driveway-cost-calculator/; /concrete-vs-asphalt-driveway/; /driveway-sealcoating-cost/ (sealcoating adds upkeep cost across the asphalt lifespan); /repave-asphalt-driveway-cost/. In: from /, /driveway-cost/, /asphalt-calculator/, /asphalt-driveway-thickness/"
  },
  {
    "seq": 4,
    "url": "/asphalt-driveway-cost-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Asphalt Driveway Cost Calculator: Free Estimate",
    "title": "Asphalt Driveway Cost Calculator: Free Estimate",
    "h1": "Asphalt Driveway Cost Calculator",
    "description": "Estimate your asphalt driveway cost from size, thickness, base work and removal. Low-to-high range with editable assumptions.",
    "titleAdjustment": null,
    "entities": "square feet, thickness, base preparation, removal, low and high range, cost tier selector, editable assumptions",
    "contextualBridges": "Out: /asphalt-driveway-cost/ (the guide explains each input and its price range); /asphalt-calculator/. In: from /asphalt-driveway-cost/, /repave-asphalt-driveway-cost/"
  },
  {
    "seq": 5,
    "url": "/concrete-driveway-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Concrete Driveway Cost: {{LOW}} to {{HIGH}} per Sq Ft (2026)",
    "title": "Concrete Driveway Cost per Sq Ft (2026)",
    "h1": "Concrete Driveway Cost in 2026",
    "description": "Concrete driveway cost per square foot and in total, with what raises or lowers the price. Includes a free cost estimator.",
    "titleAdjustment": "Concrete Driveway Cost per Sq Ft (2026)",
    "entities": "concrete slab, slab thickness, reinforcement (rebar, wire mesh), control joints, finish, cubic yards, formwork, subbase, cement (the everyday word searchers use for concrete)",
    "contextualBridges": "Out: /concrete-driveway-cost-calculator/; /concrete-vs-asphalt-driveway/; /stamped-concrete-driveway-cost/ (stamping adds pattern cost to the base slab price); /replace-concrete-driveway-cost/. In: from /, /driveway-cost/, /concrete-calculator/"
  },
  {
    "seq": 6,
    "url": "/concrete-driveway-cost-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Concrete Driveway Cost Calculator: Free Estimate",
    "title": "Concrete Driveway Cost Calculator: Free Estimate",
    "h1": "Concrete Driveway Cost Calculator",
    "description": "Estimate concrete driveway cost and cubic yards from size and thickness. Editable price and waste assumptions, low-to-high range.",
    "titleAdjustment": null,
    "entities": "cubic yards, thickness, waste allowance, finish, reinforcement, price per cubic yard, price per square foot",
    "contextualBridges": "Out: /concrete-driveway-cost/ (the guide explains how finish and reinforcement change price); /concrete-calculator/ (volume math). In: from /concrete-driveway-cost/"
  },
  {
    "seq": 7,
    "url": "/gravel-driveway-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Gravel Driveway Cost: {{LOW}} to {{HIGH}} per Sq Ft (2026)",
    "title": "Gravel Driveway Cost per Sq Ft (2026)",
    "h1": "Gravel Driveway Cost in 2026",
    "description": "Gravel driveway cost per square foot, per ton and with delivery, plus base layers and upkeep. Includes a free estimator.",
    "titleAdjustment": "Gravel Driveway Cost per Sq Ft (2026)",
    "entities": "crusher run, road base, pea gravel, base layer, surface layer, geotextile fabric, edging, delivery fee, tons, cubic yards",
    "contextualBridges": "Out: /gravel-driveway-calculator/ (the calculator turns driveway size into tons to price); /gravel-calculator/; /crusher-run-calculator/; /road-base-calculator/; /concrete-vs-asphalt-driveway/. In: from /, /driveway-cost/, /gravel-calculator/"
  },
  {
    "seq": 8,
    "url": "/gravel-driveway-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Gravel Driveway Calculator: Tons and Yards Needed",
    "title": "Gravel Driveway Calculator: Tons and Yards Needed",
    "h1": "Gravel Driveway Calculator",
    "description": "Calculate tons and cubic yards of gravel for a driveway from length, width and depth, with base and surface layers.",
    "titleAdjustment": null,
    "entities": "base layer, surface layer, depth, compaction, tons per cubic yard, delivery load rounding",
    "contextualBridges": "Out: /gravel-driveway-cost/ (the cost guide prices the tons this calculator returns); /cubic-yards-to-tons/. In: from /gravel-calculator/, /gravel-driveway-cost/"
  },
  {
    "seq": 9,
    "url": "/gravel-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Gravel Calculator: Tons and Cubic Yards Needed",
    "title": "Gravel Calculator: Tons and Cubic Yards Needed",
    "h1": "Gravel Calculator",
    "description": "Calculate tons and cubic yards of gravel from length, width and depth. Editable density and delivery rounding. Free.",
    "titleAdjustment": null,
    "entities": "gravel, crushed stone, cubic yards, tons, density, depth, delivery load",
    "contextualBridges": "Out: /gravel-driveway-calculator/ (driveway projects need separate base and surface layers); /gravel-driveway-cost/; /cubic-yards-to-tons/; /material-weights/. In: from /, /gravel-driveway-cost/"
  },
  {
    "seq": 10,
    "url": "/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Driveway Calculators: Cost Guides and Material Tools",
    "title": "Driveway Calculators: Cost Guides and Material Tools",
    "h1": "Driveway Calculators",
    "description": "Free driveway cost guides and calculators for asphalt, concrete, gravel and pavers: tons, cubic yards, square feet and price ranges.",
    "titleAdjustment": null,
    "entities": "driveway, cost, calculator, asphalt, concrete, gravel, pavers, tons, cubic yards",
    "contextualBridges": "Out: every Core page and every tool through the main navigation. In: from every page logo link"
  },
  {
    "seq": 42,
    "url": "/driveway-cost-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.1",
    "originalTitle": "Driveway Cost Calculator: Compare Asphalt, Concrete, Gravel",
    "title": "Driveway Cost Calculator: Compare Asphalt, Concrete, Gravel",
    "h1": "Driveway Cost Calculator",
    "description": "Enter your driveway size once and compare estimated cost, lifespan and upkeep for asphalt, concrete, gravel and pavers.",
    "titleAdjustment": null,
    "entities": "surface, lifespan, upkeep, cost per year, cost area tier",
    "contextualBridges": "Out: every surface cost guide and estimator. In: from /, /driveway-cost/, every cost guide"
  },
  {
    "seq": 50,
    "url": "/concrete-slab-cost-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.5",
    "originalTitle": "Concrete Slab Cost Calculator: Free Estimate",
    "title": "Concrete Slab Cost Calculator: Free Estimate",
    "h1": "Concrete Slab Cost Calculator",
    "description": "Estimate slab, pad and patio cost and cubic yards from size and thickness, with editable price, waste and removal assumptions.",
    "titleAdjustment": null,
    "entities": "square feet, thickness, cubic yards, waste, removal of the old slab, stone base, delivery, short-load fee",
    "contextualBridges": "Out: /concrete-slab-cost/ (the guide explains each input); /concrete-calculator/ (volume only); /concrete-driveway-cost-calculator/. In: from /concrete-slab-cost/, /concrete-calculator/"
  },
  {
    "seq": 49,
    "url": "/concrete-slab-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.5",
    "originalTitle": "Concrete Slab Cost: {{LOW}} to {{HIGH}} per Sq Ft (2026)",
    "title": "Concrete Slab Cost per Sq Ft (2026)",
    "h1": "Concrete Slab Cost",
    "description": "Concrete slab and pad cost per square foot by thickness, finish and reinforcement, with a free estimator.",
    "titleAdjustment": "Concrete Slab Cost per Sq Ft (2026)",
    "entities": "slab thickness, reinforcement, subbase, finish, control joints, pad, patio, garage floor",
    "contextualBridges": "Out: /concrete-slab-cost-calculator/ (the estimator prices the size entered here); /concrete-driveway-cost/ (a driveway is a slab built for vehicle loads, so its guide adds base and thickness); /concrete-calculator/. In: from /concrete-driveway-cost/"
  },
  {
    "seq": 43,
    "url": "/gravel-driveway/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.3",
    "originalTitle": "How to Build a Gravel Driveway: Layers and Maintenance",
    "title": "How to Build a Gravel Driveway: Layers and Maintenance",
    "h1": "Gravel Driveway",
    "description": "What a gravel driveway is, which stone to use, the layers it needs and how to maintain it.",
    "titleAdjustment": null,
    "entities": "crushed stone, base layer, surface layer, geotextile fabric, edging, grading, potholes, regrading",
    "contextualBridges": "Out: /gravel-driveway-cost/ (the cost guide prices each layer described here); /gravel-driveway-calculator/ (the calculator turns driveway size into tons). In: from /driveway-cost/, /concrete-vs-asphalt-driveway/. Keep cost terms on Seq 7."
  },
  {
    "seq": 12,
    "url": "/driveway-sealcoating-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Driveway Sealcoating Cost: {{LOW}} to {{HIGH}} per Sq Ft",
    "title": "Driveway Sealcoating Cost per Sq Ft",
    "h1": "Driveway Sealcoating Cost",
    "description": "Driveway sealcoating cost per square foot and per driveway, with how often it is needed and what changes the price.",
    "titleAdjustment": "Driveway Sealcoating Cost per Sq Ft",
    "entities": "sealer, coverage per gallon, coats, cure time, crack filling before sealing, sealing frequency",
    "contextualBridges": "Out: /sealcoat-calculator/ (the calculator converts driveway area into gallons); /asphalt-driveway-repair-cost/. In: from /asphalt-driveway-cost/"
  },
  {
    "seq": 11,
    "url": "/repave-asphalt-driveway-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Repave Asphalt Driveway Cost: Resurface vs Replace (2026)",
    "title": "Repave Asphalt Driveway Cost: Resurface vs Replace (2026)",
    "h1": "Cost to Repave an Asphalt Driveway",
    "description": "Repaving cost for an asphalt driveway: overlay, resurfacing and full replacement, with when each option applies.",
    "titleAdjustment": null,
    "entities": "overlay, resurfacing, milling, tear-out, base repair, drainage, asphalt lifespan",
    "contextualBridges": "Out: /asphalt-driveway-repair-cost/ (repair applies while damage is limited); /asphalt-driveway-cost-calculator/; /driveway-sealcoating-cost/. In: from /asphalt-driveway-cost/"
  },
  {
    "seq": 13,
    "url": "/asphalt-driveway-repair-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Asphalt Driveway Repair Cost: Cracks, Patches, Potholes",
    "title": "Asphalt Driveway Repair Cost: Cracks, Patches, Potholes",
    "h1": "Asphalt Driveway Repair Cost",
    "description": "Asphalt driveway repair cost by repair type: crack filling, patching, potholes and sections, with when repair beats repaving.",
    "titleAdjustment": null,
    "entities": "crack filler, cold patch, hot patch, pothole, alligator cracking, sealing",
    "contextualBridges": "Out: /driveway-crack-filler/; /asphalt-cold-patch/; /repave-asphalt-driveway-cost/ (repaving replaces repair once damage spreads). In: from /asphalt-driveway-cost/, /driveway-sealcoating-cost/"
  },
  {
    "seq": 14,
    "url": "/concrete-vs-asphalt-driveway/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Concrete vs Asphalt Driveway: Cost, Lifespan, Upkeep",
    "title": "Concrete vs Asphalt Driveway: Cost, Lifespan, Upkeep",
    "h1": "Concrete vs Asphalt Driveway",
    "description": "Concrete vs asphalt driveway compared on cost, lifespan, maintenance and climate fit, with a side-by-side table.",
    "titleAdjustment": null,
    "entities": "lifespan, upfront cost, maintenance, freeze-thaw, heat, repair, appearance",
    "contextualBridges": "Out: /asphalt-driveway-cost/; /concrete-driveway-cost/; /driveway-cost/. In: from both cost pages"
  },
  {
    "seq": 15,
    "url": "/replace-concrete-driveway-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Replace Concrete Driveway Cost: Removal and New Pour",
    "title": "Replace Concrete Driveway Cost: Removal and New Pour",
    "h1": "Cost to Replace a Concrete Driveway",
    "description": "Cost to replace a concrete driveway: demolition, disposal and the new pour, with price ranges and when replacement beats repair.",
    "titleAdjustment": null,
    "entities": "demolition, hauling, disposal, subbase, new pour, slab replacement",
    "contextualBridges": "Out: /concrete-driveway-cost/; /concrete-driveway-cost-calculator/. In: from /concrete-driveway-cost/"
  },
  {
    "seq": 16,
    "url": "/stamped-concrete-driveway-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Stamped Concrete Driveway Cost: {{LOW}} to {{HIGH}} per Sq Ft",
    "title": "Stamped Concrete Driveway Cost per Sq Ft",
    "h1": "Stamped Concrete Driveway Cost",
    "description": "Stamped concrete driveway cost per square foot, what pattern and color add, and how it compares with plain concrete.",
    "titleAdjustment": "Stamped Concrete Driveway Cost per Sq Ft",
    "entities": "stamp pattern, color hardener, release agent, sealer, resealing",
    "contextualBridges": "Out: /concrete-driveway-cost/ (plain concrete sets the base price that stamping adds to). In: from /concrete-driveway-cost/"
  },
  {
    "seq": 17,
    "url": "/paver-driveway-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Paver Driveway Cost: {{LOW}} to {{HIGH}} per Sq Ft (2026)",
    "title": "Paver Driveway Cost per Sq Ft (2026)",
    "h1": "Paver Driveway Cost",
    "description": "Paver driveway cost per square foot by material, base work and pattern, compared with asphalt and concrete.",
    "titleAdjustment": "Paver Driveway Cost per Sq Ft (2026)",
    "entities": "concrete pavers, brick pavers, natural stone, base depth, bedding sand, edge restraint, joint sand",
    "contextualBridges": "Out: /paver-calculator/; /driveway-cost/. In: from /driveway-cost/, /concrete-vs-asphalt-driveway/"
  },
  {
    "seq": 18,
    "url": "/tar-and-chip-driveway-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Tar and Chip Driveway Cost per Sq Ft (2026)",
    "title": "Tar and Chip Driveway Cost per Sq Ft (2026)",
    "h1": "Tar and Chip Driveway Cost",
    "description": "Tar and chip driveway cost per square foot, how it is laid, lifespan and how it compares with asphalt.",
    "titleAdjustment": null,
    "entities": "bituminous binder, aggregate chips, rolling, chip seal, lifespan",
    "contextualBridges": "Out: /asphalt-driveway-cost/ (tar and chip is the lower-cost alternative to hot mix asphalt). In: from /asphalt-driveway-cost/"
  },
  {
    "seq": 19,
    "url": "/asphalt-millings-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Asphalt Millings Cost: Per Ton and Per Driveway",
    "title": "Asphalt Millings Cost: Per Ton and Per Driveway",
    "h1": "Asphalt Millings Cost",
    "description": "Asphalt millings cost per ton and per driveway, delivery charges and how much a driveway needs.",
    "titleAdjustment": null,
    "entities": "reclaimed asphalt pavement, tons, delivery, compaction, base depth",
    "contextualBridges": "Out: /asphalt-millings-calculator/; /gravel-driveway-cost/. In: from /asphalt-driveway-cost/"
  },
  {
    "seq": 20,
    "url": "/asphalt-driveway-thickness/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Asphalt Driveway Thickness: How Many Inches Is Needed",
    "title": "Asphalt Driveway Thickness: How Many Inches Is Needed",
    "h1": "Asphalt Driveway Thickness",
    "description": "Recommended asphalt driveway thickness by use, base depth and how thickness changes cost and tonnage.",
    "titleAdjustment": null,
    "entities": "base thickness, asphalt layers, traffic load, subgrade, compaction",
    "contextualBridges": "Out: /asphalt-calculator/ (thickness is an input to tonnage); /asphalt-driveway-cost/. In: from /asphalt-calculator/"
  },
  {
    "seq": 37,
    "url": "/concrete-driveway-repair-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.1",
    "originalTitle": "Concrete Driveway Repair Cost: Cracks, Resurfacing, Replacement",
    "title": "Concrete Driveway Repair Cost: Cracks and Resurfacing",
    "h1": "Concrete Driveway Repair Cost",
    "description": "Concrete driveway repair cost by repair type: crack filling, resurfacing and slab replacement, with when to repair or replace.",
    "titleAdjustment": "Concrete Driveway Repair Cost: Cracks and Resurfacing",
    "entities": "crack filling, resurfacing, slab leveling, mudjacking, control joints",
    "contextualBridges": "Out: /replace-concrete-driveway-cost/ (replacement applies once damage spreads across slabs); /concrete-driveway-cost/. In: from /concrete-driveway-cost/"
  },
  {
    "seq": 38,
    "url": "/driveway-repair-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.1",
    "originalTitle": "Driveway Repair Cost by Surface: Asphalt, Concrete, Gravel",
    "title": "Driveway Repair Cost by Surface: Asphalt, Concrete, Gravel",
    "h1": "Driveway Repair Cost",
    "description": "Driveway repair cost for asphalt, concrete and gravel, with typical repair types and when repair stops making sense.",
    "titleAdjustment": null,
    "entities": "crack, pothole, settling, resurfacing, regrading",
    "contextualBridges": "Out: /asphalt-driveway-repair-cost/; /concrete-driveway-repair-cost/; /driveway-replacement-cost/. In: from /driveway-cost/"
  },
  {
    "seq": 39,
    "url": "/driveway-replacement-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.1",
    "originalTitle": "Driveway Replacement Cost by Surface (2026)",
    "title": "Driveway Replacement Cost by Surface (2026)",
    "h1": "Driveway Replacement Cost",
    "description": "Driveway replacement cost for asphalt, concrete, gravel and pavers, including removal and disposal.",
    "titleAdjustment": null,
    "entities": "demolition, hauling, disposal, subbase, new surface",
    "contextualBridges": "Out: /repave-asphalt-driveway-cost/; /replace-concrete-driveway-cost/; /driveway-cost-calculator/. In: from /driveway-repair-cost/"
  },
  {
    "seq": 46,
    "url": "/standard-driveway-width/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.3",
    "originalTitle": "Standard Driveway Width and Size: 1, 2 and 3 Car",
    "title": "Standard Driveway Width and Size: 1, 2 and 3 Car",
    "h1": "Standard Driveway Width and Size",
    "description": "Standard driveway width and size for one-car, two-car and three-car driveways, with the area each covers.",
    "titleAdjustment": null,
    "entities": "width, length, one-car, two-car, three-car, turnaround, square feet",
    "contextualBridges": "Out: /driveway-cost-calculator/ (size sets the cost); /asphalt-calculator/. In: from /driveway-cost/ and the size table on every cost guide"
  },
  {
    "seq": 35,
    "url": "/concrete-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Concrete Calculator: Cubic Yards and Bags Needed",
    "title": "Concrete Calculator: Cubic Yards and Bags Needed",
    "h1": "Concrete Calculator",
    "description": "Calculate cubic yards and bags of concrete for slabs and driveways from length, width and thickness, with waste allowance.",
    "titleAdjustment": null,
    "entities": "cubic yards, bags, thickness, slab, waste",
    "contextualBridges": "Out: /concrete-driveway-cost-calculator/; /concrete-driveway-cost/. In: from /concrete-driveway-cost-calculator/"
  },
  {
    "seq": 36,
    "url": "/paver-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Paver Calculator: Pavers, Base and Sand Needed",
    "title": "Paver Calculator: Pavers, Base and Sand Needed",
    "h1": "Paver Calculator",
    "description": "Calculate pavers, base material and sand for a driveway or patio from area, paver size and waste allowance.",
    "titleAdjustment": null,
    "entities": "pavers, square feet, base, bedding sand, waste",
    "contextualBridges": "Out: /paver-driveway-cost/. In: from /paver-driveway-cost/"
  },
  {
    "seq": 40,
    "url": "/how-to-lay-an-asphalt-driveway/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.1",
    "originalTitle": "How to Lay an Asphalt Driveway: Steps, Tools and Cost",
    "title": "How to Lay an Asphalt Driveway: Steps, Tools and Cost",
    "h1": "How to Lay an Asphalt Driveway",
    "description": "The steps to lay an asphalt driveway, the tools involved and what a DIY job costs against hiring a paving crew.",
    "titleAdjustment": null,
    "entities": "excavation, base course, compaction, hot mix asphalt, rolling, curing",
    "contextualBridges": "Out: /asphalt-calculator/ (the calculator gives the tons to order before the work starts); /asphalt-driveway-cost/. In: from /asphalt-driveway-thickness/"
  },
  {
    "seq": 41,
    "url": "/hot-mix-asphalt/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.1",
    "originalTitle": "Hot Mix Asphalt: What It Is and How Driveways Use It",
    "title": "Hot Mix Asphalt: What It Is and How Driveways Use It",
    "h1": "Hot Mix Asphalt",
    "description": "What hot mix asphalt is, what goes into it and how it is used on driveways.",
    "titleAdjustment": null,
    "entities": "aggregate, asphalt binder, mix temperature, compaction, density",
    "contextualBridges": "Out: /asphalt-calculator/; /material-weights/. In: from /asphalt-driveway-cost/"
  },
  {
    "seq": 44,
    "url": "/asphalt-driveway-maintenance/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.3",
    "originalTitle": "Asphalt Driveway Maintenance: Sealing, Cracks, Cleaning",
    "title": "Asphalt Driveway Maintenance: Sealing, Cracks, Cleaning",
    "h1": "Asphalt Driveway Maintenance",
    "description": "The maintenance an asphalt driveway needs, how often it is done and what each task costs.",
    "titleAdjustment": null,
    "entities": "sealcoating, crack filling, cleaning, edging, patching, drainage",
    "contextualBridges": "Out: /driveway-sealcoating-cost/; /asphalt-driveway-repair-cost/. In: from /asphalt-driveway-cost/"
  },
  {
    "seq": 45,
    "url": "/driveway-drainage/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.3",
    "originalTitle": "Driveway Drainage: Slope, Drains and Fixes",
    "title": "Driveway Drainage: Slope, Drains and Fixes",
    "h1": "Driveway Drainage",
    "description": "How much slope a driveway needs, which drains fix standing water and when drainage faults cause damage.",
    "titleAdjustment": null,
    "entities": "slope, crown, culvert, trench drain, French drain, grading, runoff",
    "contextualBridges": "Out: /driveway-repair-cost/ (drainage faults are a common cause of surface damage); /gravel-driveway/. In: from /driveway-cost/"
  },
  {
    "seq": 47,
    "url": "/how-to-repair-concrete-driveway-cracks/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.3",
    "originalTitle": "How to Repair Cracks in a Concrete Driveway",
    "title": "How to Repair Cracks in a Concrete Driveway",
    "h1": "How to Repair Cracks in a Concrete Driveway",
    "description": "How to repair small and large cracks in a concrete driveway, the materials needed and when to replace the slab instead.",
    "titleAdjustment": null,
    "entities": "crack width, filler, backer rod, patch compound, slab replacement",
    "contextualBridges": "Out: /concrete-driveway-repair-cost/ (repair cost by crack type); /driveway-crack-filler/. In: from /concrete-driveway-repair-cost/"
  },
  {
    "seq": 48,
    "url": "/how-to-repair-asphalt-driveway-cracks/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.3",
    "originalTitle": "How to Repair Cracks in an Asphalt Driveway",
    "title": "How to Repair Cracks in an Asphalt Driveway",
    "h1": "How to Repair Cracks in an Asphalt Driveway",
    "description": "How to repair cracks and holes in an asphalt driveway, the filler to use and when to repave instead.",
    "titleAdjustment": null,
    "entities": "crack filler, cold patch, pothole, cleaning, sealing",
    "contextualBridges": "Out: /asphalt-driveway-repair-cost/; /driveway-crack-filler/; /asphalt-cold-patch/. In: from /asphalt-driveway-repair-cost/"
  },
  {
    "seq": 21,
    "url": "/sealcoat-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Sealcoat Calculator: Gallons Needed for a Driveway",
    "title": "Sealcoat Calculator: Gallons Needed for a Driveway",
    "h1": "Sealcoat Calculator",
    "description": "Calculate gallons of sealcoat from driveway area, product coverage and number of coats, with container rounding.",
    "titleAdjustment": null,
    "entities": "sealer, gallons, coverage per gallon, coats, container size",
    "contextualBridges": "Out: /driveway-sealcoating-cost/ (the cost guide prices the gallons returned). In: from /driveway-sealcoating-cost/"
  },
  {
    "seq": 22,
    "url": "/asphalt-millings-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Asphalt Millings Calculator: Tons for a Driveway",
    "title": "Asphalt Millings Calculator: Tons for a Driveway",
    "h1": "Asphalt Millings Calculator",
    "description": "Calculate tons of asphalt millings for a driveway from length, width and depth, with an editable density.",
    "titleAdjustment": null,
    "entities": "reclaimed asphalt pavement, tons, depth, compaction",
    "contextualBridges": "Out: /asphalt-millings-cost/; /asphalt-calculator/. In: from /asphalt-millings-cost/"
  },
  {
    "seq": 23,
    "url": "/material-weights/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Material Weight Chart: Asphalt, Gravel, Concrete per Cubic Foot",
    "title": "Material Weight Chart: Asphalt, Gravel and Concrete",
    "h1": "Material Weight Chart",
    "description": "Weight per cubic foot and per cubic yard for asphalt, gravel, crushed stone and concrete, with tons per cubic yard.",
    "titleAdjustment": "Material Weight Chart: Asphalt, Gravel and Concrete",
    "entities": "density, pounds per cubic foot, tons per cubic yard, material list",
    "contextualBridges": "Out: /asphalt-calculator/; /gravel-calculator/; /cubic-yards-to-tons/. In: from every quantity tool"
  },
  {
    "seq": 24,
    "url": "/cubic-yards-to-tons/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Cubic Yards to Tons Converter by Material",
    "title": "Cubic Yards to Tons Converter by Material",
    "h1": "Cubic Yards to Tons",
    "description": "Convert cubic yards to tons for gravel, asphalt, sand and concrete using an editable density for each material.",
    "titleAdjustment": null,
    "entities": "cubic yards, tons, density, material type",
    "contextualBridges": "Out: /material-weights/; /gravel-calculator/. In: from /gravel-calculator/, /gravel-driveway-calculator/"
  },
  {
    "seq": 25,
    "url": "/rock-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Rock Calculator: Tons and Cubic Yards Needed",
    "title": "Rock Calculator: Tons and Cubic Yards Needed",
    "h1": "Rock Calculator",
    "description": "Calculate tons and cubic yards of landscape rock from area and depth, with editable density and coverage.",
    "titleAdjustment": null,
    "entities": "landscape rock, cubic yards, depth, tons",
    "contextualBridges": "Out: /gravel-calculator/ (rock and gravel differ in size and use); /river-rock-calculator/. In: from /gravel-calculator/"
  },
  {
    "seq": 27,
    "url": "/pea-gravel-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Pea Gravel Calculator: Tons and Yards Needed",
    "title": "Pea Gravel Calculator: Tons and Yards Needed",
    "h1": "Pea Gravel Calculator",
    "description": "Calculate tons and cubic yards of pea gravel for paths, patios and driveways from area and depth.",
    "titleAdjustment": null,
    "entities": "pea gravel, depth, tons, cubic yards, paths and patios",
    "contextualBridges": "Out: /gravel-calculator/; /gravel-driveway-cost/. In: from /gravel-calculator/"
  },
  {
    "seq": 29,
    "url": "/crusher-run-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Crusher Run Calculator: Tons Needed for a Base",
    "title": "Crusher Run Calculator: Tons Needed for a Base",
    "h1": "Crusher Run Calculator",
    "description": "Calculate tons of crusher run for a driveway or path base from area, depth and compaction.",
    "titleAdjustment": null,
    "entities": "crusher run, base layer, compaction, tons",
    "contextualBridges": "Out: /gravel-driveway-calculator/ (crusher run forms the compacted base layer); /gravel-driveway-cost/. In: from /gravel-driveway-calculator/"
  },
  {
    "seq": 30,
    "url": "/road-base-calculator/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Road Base Calculator: Tons and Yards Needed",
    "title": "Road Base Calculator: Tons and Yards Needed",
    "h1": "Road Base Calculator",
    "description": "Calculate tons and cubic yards of road base from length, width and depth, with a compaction allowance.",
    "titleAdjustment": null,
    "entities": "road base, base layer, compaction, tons",
    "contextualBridges": "Out: /gravel-driveway-calculator/; /gravel-driveway-cost/. In: from /gravel-driveway-calculator/"
  },
  {
    "seq": 53,
    "url": "/concrete-weight-per-cubic-yard/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.8",
    "originalTitle": "How Much Does a Yard of Concrete Weigh?",
    "title": "How Much Does a Yard of Concrete Weigh?",
    "h1": "Concrete Weight per Cubic Yard",
    "description": "The weight of a cubic yard of concrete by mix, with pounds per cubic foot and tons per cubic yard.",
    "titleAdjustment": null,
    "entities": "normal-weight concrete, lightweight concrete, density, pounds per cubic foot, tons per cubic yard",
    "contextualBridges": "Out: /concrete-calculator/; /material-weights/. In: from /cubic-yards-to-tons/. Confirmed as a separate page on 11 October 2026, because dedicated concrete weight pages rank."
  },
  {
    "seq": 54,
    "url": "/gravel-weight-per-cubic-yard/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.8",
    "originalTitle": "How Much Does a Yard of Gravel Weigh?",
    "title": "How Much Does a Yard of Gravel Weigh?",
    "h1": "Gravel Weight per Cubic Yard",
    "description": "The weight of a cubic yard of gravel by type, how much area a ton covers and how many cubic feet are in a ton.",
    "titleAdjustment": null,
    "entities": "crushed stone, pea gravel, road base, density, moisture, coverage depth",
    "contextualBridges": "Out: /gravel-calculator/; /cubic-yards-to-tons/; /material-weights/. In: from /gravel-calculator/. Confirmed as a separate page on 11 October 2026, because dedicated gravel weight pages rank beside charts."
  },
  {
    "seq": 51,
    "url": "/driveway-sealer/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.8",
    "originalTitle": "Best Driveway Sealer: Types and How to Choose",
    "title": "Best Driveway Sealer: Types and How to Choose",
    "h1": "Driveway Sealer",
    "description": "The main types of driveway sealer, how to choose one for asphalt or concrete, and how to apply it.",
    "titleAdjustment": null,
    "entities": "acrylic sealer, asphalt emulsion sealer, coal tar sealer, coverage per gallon, cure time, temperature, primer, crack filling",
    "contextualBridges": "Out: /driveway-sealcoating-cost/ (the cost guide prices the job this guide describes); /sealcoat-calculator/ (the calculator turns driveway area into gallons); /driveway-crack-filler/ (fill cracks before sealing). In: from /asphalt-driveway-maintenance/, /asphalt-driveway-cost/. Source any state restriction on coal tar sealers before stating one."
  },
  {
    "seq": 55,
    "url": "/how-to-seal-a-driveway/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "10.9",
    "originalTitle": "How to Seal a Driveway: Steps, Tools and Timing",
    "title": "How to Seal a Driveway: Steps, Tools and Timing",
    "h1": "How to Seal a Driveway",
    "description": "The steps to seal an asphalt driveway, the tools and sealer needed, and the weather and cure times to plan for.",
    "titleAdjustment": null,
    "entities": "cleaning, crack filling, primer, sealer, squeegee, coats, cure time, temperature",
    "contextualBridges": "Out: /driveway-sealer/ (the buying guide covers which sealer to use); /sealcoat-calculator/ (gallons needed); /driveway-sealcoating-cost/ (cost to hire the job); /driveway-crack-filler/. In: from /asphalt-driveway-maintenance/"
  },
  {
    "seq": 31,
    "url": "/driveway-crack-filler/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Best Driveway Crack Filler: How to Choose and Apply",
    "title": "Best Driveway Crack Filler: How to Choose and Apply",
    "h1": "Driveway Crack Filler",
    "description": "How to choose a driveway crack filler by crack width and surface, with application steps and what to avoid.",
    "titleAdjustment": null,
    "entities": "crack filler, sealant, cold pour, hot pour, crack width, cure time",
    "contextualBridges": "Out: /asphalt-driveway-repair-cost/; /driveway-sealcoating-cost/ (fill cracks before sealcoating). In: from /asphalt-driveway-repair-cost/"
  },
  {
    "seq": 32,
    "url": "/asphalt-cold-patch/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "6",
    "originalTitle": "Asphalt Cold Patch: How to Use It on Potholes",
    "title": "Asphalt Cold Patch: How to Use It on Potholes",
    "h1": "Asphalt Cold Patch",
    "description": "What asphalt cold patch is, how to apply it to a pothole and how long a cold patch repair lasts.",
    "titleAdjustment": null,
    "entities": "cold patch, pothole, compaction, temporary repair",
    "contextualBridges": "Out: /asphalt-driveway-repair-cost/. In: from /asphalt-driveway-repair-cost/"
  },
  {
    "seq": 33,
    "url": "/driveway-cost/",
    "source": "Driveway calculator.rtf",
    "sourceSection": "5",
    "originalTitle": "Driveway Cost by Material: Asphalt, Concrete, Gravel, Pavers",
    "title": "Driveway Cost by Material: Asphalt, Concrete, Gravel, Pavers",
    "h1": "Driveway Cost by Material",
    "description": "Driveway cost compared across asphalt, concrete, gravel and pavers, with price ranges, lifespan and a free estimator for each.",
    "titleAdjustment": null,
    "entities": "asphalt, concrete, gravel, pavers, tar and chip, cost per square foot, lifespan",
    "contextualBridges": "Out: every cost page and estimator. In: from every cost page"
  }
]
````

## data/sources.json

````json
[]
````

## docs/BUILD-STATUS.md

````markdown
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
````

## eslint.config.mjs

````text
import next from 'eslint-config-next/core-web-vitals';
export default [...next, { ignores: ['out/**', '.next/**', 'docs/source-review.md'] }];
````

## functions/api/lead.ts

````typescript
import { z } from 'zod';
import type { D1Database } from '@cloudflare/workers-types';
export type Env = {
  DB: D1Database;
  LEADS_ENABLED?: string;
  NETWORK_APPROVED?: string;
  ALLOWED_ORIGIN?: string;
  NETWORK_CONSENT_TEXT?: string;
  NETWORK_SUCCESS_TEXT?: string;
  NETWORK_WEBHOOK_URL?: string;
  NETWORK_WEBHOOK_TOKEN?: string;
  NETWORK_PHONE?: string;
  NETWORK_PHONE_REQUIRED?: string;
  TURNSTILE_SITE_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  RATE_LIMIT_SALT?: string;
};
const leadSchema = z.object({
  zip: z.string().regex(/^\d{5}$/),
  project: z.enum(['new', 'replace', 'resurface', 'repair', 'seal']),
  surface: z.enum(['asphalt', 'concrete', 'gravel', 'pavers', 'not-sure']),
  area: z.number().positive().max(1e8),
  timeline: z.enum(['within-1-month', '1-to-3-months', 'researching']),
  firstName: z.string().trim().min(1).max(100),
  email: z.email().max(254),
  phone: z.string().max(40).optional().default(''),
  consent: z.literal(true),
  website: z.string().max(1000).optional().default(''),
  token: z.string().min(1).max(2048),
  idempotencyKey: z.uuid(),
  pageUrl: z.url().max(2048),
});
function configured(env: Env) {
  return (
    env.LEADS_ENABLED === 'true' &&
    env.NETWORK_APPROVED === 'true' &&
    env.DB &&
    !!env.ALLOWED_ORIGIN &&
    !!env.NETWORK_CONSENT_TEXT &&
    !!env.NETWORK_SUCCESS_TEXT &&
    !!env.NETWORK_WEBHOOK_URL?.startsWith('https://') &&
    !!env.TURNSTILE_SITE_KEY &&
    !!env.TURNSTILE_SECRET_KEY &&
    !!env.RATE_LIMIT_SALT
  );
}
const respond = (data: unknown, status: number) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
async function hash(text: string) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(bytes), (b) => b.toString(16).padStart(2, '0')).join('');
}
type Context = { env: Env; request: Request };
export const onRequestGet = async ({ env }: Context) =>
  configured(env)
    ? respond(
        {
          consent: env.NETWORK_CONSENT_TEXT,
          success: env.NETWORK_SUCCESS_TEXT,
          phone: env.NETWORK_PHONE ?? '',
          phoneRequired: env.NETWORK_PHONE_REQUIRED === 'true',
          turnstileSiteKey: env.TURNSTILE_SITE_KEY,
        },
        200,
      )
    : respond({ error: 'Quote requests are disabled.' }, 503);
export const onRequestPost = async ({ request, env }: Context) => {
  if (!configured(env)) return respond({ error: 'Quote requests are disabled.' }, 503);
  if (request.headers.get('Origin') !== env.ALLOWED_ORIGIN)
    return respond({ error: 'Invalid request origin.' }, 403);
  if (!request.headers.get('Content-Type')?.startsWith('application/json'))
    return respond({ error: 'Use JSON.' }, 415);
  const bytes = Number(request.headers.get('Content-Length') ?? 0);
  if (bytes > 16384) return respond({ error: 'Request too large.' }, 413);
  const text = await request.text();
  if (text.length > 16384) return respond({ error: 'Request too large.' }, 413);
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return respond({ error: 'Invalid request.' }, 400);
  }
  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) return respond({ error: 'Check the required fields.' }, 400);
  const lead = parsed.data;
  if (lead.website) return respond({ error: 'Invalid request.' }, 400);
  if (new URL(lead.pageUrl).origin !== env.ALLOWED_ORIGIN)
    return respond({ error: 'Invalid page URL.' }, 400);
  if (env.NETWORK_PHONE_REQUIRED === 'true' && !/^\+?[\d ()-]{7,30}$/.test(lead.phone))
    return respond({ error: 'Enter a phone number.' }, 400);
  const pageUrl = new URL(lead.pageUrl);
  pageUrl.search = '';
  pageUrl.hash = '';
  try {
    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
    const ipHash = await hash(env.RATE_LIMIT_SALT! + ip);
    const window = Math.floor(Date.now() / 3600000);
    const rate = await env.DB.prepare(
      'INSERT INTO rate_limits (ip_hash, window, count) VALUES (?, ?, 1) ON CONFLICT (ip_hash, window) DO UPDATE SET count = count + 1 RETURNING count',
    )
      .bind(ipHash, window)
      .first<{ count: number }>();
    if (!rate || rate.count > 5) return respond({ error: 'Too many requests.' }, 429);
    const fields = {
      zip: lead.zip,
      project: lead.project,
      surface: lead.surface,
      area: lead.area,
      timeline: lead.timeline,
      firstName: lead.firstName,
      email: lead.email,
      phone: lead.phone,
    };
    const payloadHash = await hash(JSON.stringify({ ...fields, pageUrl: pageUrl.toString() }));
    const existing = await env.DB.prepare('SELECT id, payload_hash, status FROM leads WHERE id = ?')
      .bind(lead.idempotencyKey)
      .first<{ id: string; payload_hash: string; status: string }>();
    if (existing) {
      if (existing.payload_hash !== payloadHash)
        return respond({ error: 'Request identifier conflict.' }, 409);
      return respond(
        { accepted: true, status: existing.status },
        existing.status === 'forwarded' ? 200 : 202,
      );
    }
    const turnstile = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY!,
        response: lead.token,
        remoteip: ip,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const verification = (await turnstile.json()) as {
      success?: boolean;
      hostname?: string;
      action?: string;
    };
    if (
      !verification.success ||
      verification.hostname !== new URL(env.ALLOWED_ORIGIN!).hostname ||
      verification.action !== 'quote'
    )
      return respond({ error: 'Complete the verification.' }, 400);
    const now = new Date().toISOString();
    const inserted = await env.DB.prepare(
      "INSERT INTO leads (id, created_at, payload, payload_hash, page_url, consent_text, consent_at, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'pending') ON CONFLICT(id) DO NOTHING",
    )
      .bind(
        lead.idempotencyKey,
        now,
        JSON.stringify(fields),
        payloadHash,
        pageUrl.toString(),
        env.NETWORK_CONSENT_TEXT,
        now,
      )
      .run();
    if (!inserted.meta.changes) {
      const concurrent = await env.DB.prepare('SELECT payload_hash, status FROM leads WHERE id = ?')
        .bind(lead.idempotencyKey)
        .first<{ payload_hash: string; status: string }>();
      if (!concurrent || concurrent.payload_hash !== payloadHash)
        return respond({ error: 'Request identifier conflict.' }, 409);
      return respond({ accepted: true, status: concurrent.status }, 202);
    }
    let forwarded = false;
    let attempts = 0;
    for (let attempt = 0; attempt < 3; attempt++) {
      attempts++;
      try {
        const res = await fetch(env.NETWORK_WEBHOOK_URL!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': lead.idempotencyKey,
            ...(env.NETWORK_WEBHOOK_TOKEN
              ? { Authorization: 'Bearer ' + env.NETWORK_WEBHOOK_TOKEN }
              : {}),
          },
          body: JSON.stringify({
            id: lead.idempotencyKey,
            timestamp: now,
            ...fields,
            pageUrl: pageUrl.toString(),
            consentText: env.NETWORK_CONSENT_TEXT,
            consentTimestamp: now,
          }),
          signal: AbortSignal.timeout(10000),
        });
        if (res.ok) {
          forwarded = true;
          break;
        }
      } catch {
        /* Retry without logging visitor data. */
      }
    }
    await env.DB.prepare('UPDATE leads SET status = ?, attempts = attempts + ? WHERE id = ?')
      .bind(forwarded ? 'forwarded' : 'failed', attempts, lead.idempotencyKey)
      .run();
    await env.DB.prepare('DELETE FROM rate_limits WHERE window < ?')
      .bind(window - 24)
      .run();
    return respond(
      { accepted: true, status: forwarded ? 'forwarded' : 'queued' },
      forwarded ? 200 : 202,
    );
  } catch {
    return respond({ error: 'Quote requests are temporarily unavailable.' }, 503);
  }
};
````

## lib/analytics.ts

````typescript
export type AnalyticsEvent =
  | 'calculator_used'
  | 'result_viewed'
  | 'quote_cta_viewed'
  | 'quote_cta_clicked';
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
export function track(name: AnalyticsEvent, tool: string) {
  // An allowlist prevents form fields or URL query strings from entering analytics.
  window.gtag?.('event', name, { tool: tool.replace(/[^a-z-]/g, '') });
}
````

## lib/calc/compare.ts

````typescript
export { computeCompare } from './index';
export type { ComparisonSurface } from './index';
````

## lib/calc/index.ts

````typescript
import defaults from '@/data/defaults.json';
const { inchesPerFoot, cubicFeetPerYard, poundsPerShortTon } = defaults;
export const UNITS = {
  inchesPerFoot: inchesPerFoot.value,
  cubicFeetPerYard: cubicFeetPerYard.value,
  poundsPerShortTon: poundsPerShortTon.value,
};
// These bounds constrain software input; they are not construction recommendations.
export const LIMITS = {
  area: 1e8,
  length: 10000,
  depth: 1200,
  density: 1000,
  percent: 100,
  loads: 1000,
  money: 1e9,
};
export function value(n: number, name: string, max = LIMITS.money, allowZero = false): number {
  if (!Number.isFinite(n) || (allowZero ? n < 0 : n <= 0) || n > max)
    throw new Error(
      `${name} must be ${allowZero ? 'zero or a positive' : 'a positive'} number no greater than ${max.toLocaleString('en-US')}.`,
    );
  return n;
}
export function roundUp(n: number, step = 1): number {
  value(n, 'Quantity', Number.MAX_SAFE_INTEGER, true);
  value(step, 'Rounding increment');
  return Math.ceil(n / step - Number.EPSILON * Math.max(1, n / step)) * step;
}
export type Section = {
  length: number;
  startWidth: number;
  endWidth: number;
  grade: number;
  measured: 'flat' | 'slope';
};
export function computeArea(sections: Section[]): number {
  if (!sections.length || sections.length > 100)
    throw new Error('Enter between 1 and 100 measurement sections.');
  const area = sections.reduce((sum, s) => {
    value(s.length, 'Length', LIMITS.length);
    value(s.startWidth, 'Start width', LIMITS.length);
    value(s.endWidth, 'End width', LIMITS.length);
    value(s.grade, 'Grade', LIMITS.percent, true);
    if (!['flat', 'slope'].includes(s.measured))
      throw new Error('Select how the length was measured.');
    const length =
      s.measured === 'flat' ? s.length * Math.sqrt(1 + (s.grade / 100) ** 2) : s.length;
    return sum + (length * (s.startWidth + s.endWidth)) / 2;
  }, 0);
  return value(area, 'Total area', LIMITS.area);
}
export type VolumeInput = { area: number; depth: number; waste: number; compaction?: number };
export function computeVolume(i: VolumeInput) {
  value(i.area, 'Area', LIMITS.area);
  value(i.depth, 'Thickness or depth', LIMITS.depth);
  value(i.waste, 'Waste allowance', LIMITS.percent, true);
  value(i.compaction ?? 0, 'Compaction allowance', LIMITS.percent, true);
  const cubicFeet =
    ((i.area * i.depth) / UNITS.inchesPerFoot) *
    (1 + i.waste / 100) *
    (1 + (i.compaction ?? 0) / 100);
  return { cubicFeet, cubicYards: cubicFeet / UNITS.cubicFeetPerYard };
}
export function computeAsphalt(i: VolumeInput & { density: number; truckCapacity?: number }) {
  value(i.density, 'Density', LIMITS.density);
  const v = computeVolume(i);
  const tons = (v.cubicFeet * i.density) / UNITS.poundsPerShortTon;
  return {
    ...v,
    tons,
    orderTons: roundUp(tons, 0.1),
    loads: i.truckCapacity === undefined ? null : deliveryLoads(tons, i.truckCapacity),
  };
}
export function deliveryLoads(tons: number, capacity: number) {
  value(tons, 'Tons');
  value(capacity, 'Truck capacity', LIMITS.loads);
  return roundUp(tons / capacity);
}
export function computeGravel(i: VolumeInput & { density: number; truckCapacity?: number }) {
  value(i.density, 'Density', LIMITS.density);
  const v = computeVolume(i);
  const tons = v.cubicYards * i.density;
  return {
    ...v,
    tons,
    orderTons: roundUp(tons, 0.1),
    loads: i.truckCapacity === undefined ? null : deliveryLoads(tons, i.truckCapacity),
  };
}
export function computeGravelLayers(
  layers: (VolumeInput & { density: number })[],
  capacity?: number,
) {
  if (!layers.length) throw new Error('Enter a base or surface layer.');
  const results = layers.map(computeGravel);
  const tons = results.reduce((sum, r) => sum + r.tons, 0);
  const cubicYards = results.reduce((sum, r) => sum + r.cubicYards, 0);
  return {
    layers: results,
    tons,
    orderTons: roundUp(tons, 0.1),
    cubicYards,
    loads: capacity === undefined ? null : deliveryLoads(tons, capacity),
  };
}
export function computeConcrete(
  i: VolumeInput & { bagYield?: number; bagSize?: number; truckCapacity?: number },
) {
  const v = computeVolume(i);
  if (i.bagYield !== undefined) value(i.bagYield, 'Bag yield', 100);
  if (i.bagSize !== undefined) value(i.bagSize, 'Bag weight', 1000);
  if (i.truckCapacity !== undefined)
    value(i.truckCapacity, 'Truck capacity in cubic yards', LIMITS.loads);
  return {
    ...v,
    bags: i.bagYield === undefined ? null : roundUp(v.cubicFeet / i.bagYield),
    bagSize: i.bagSize ?? null,
    loads: i.truckCapacity === undefined ? null : roundUp(v.cubicYards / i.truckCapacity),
  };
}
export function computeSealcoat(i: {
  area: number;
  coats: number;
  coverage: number;
  containerSize: number;
}) {
  value(i.area, 'Area', LIMITS.area);
  value(i.coats, 'Coats', 100);
  if (!Number.isInteger(i.coats)) throw new Error('Coats must be a whole number.');
  value(i.coverage, 'Product coverage', LIMITS.area);
  value(i.containerSize, 'Container size', 10000);
  const gallons = (i.area * i.coats) / i.coverage;
  return { gallons, containers: roundUp(gallons / i.containerSize) };
}
export function computeConversion(i: {
  amount: number;
  density: number;
  direction: 'yards-to-tons' | 'tons-to-yards';
}) {
  value(i.amount, 'Quantity', LIMITS.area);
  value(i.density, 'Density', LIMITS.density);
  if (!['yards-to-tons', 'tons-to-yards'].includes(i.direction))
    throw new Error('Select a conversion direction.');
  return i.direction === 'yards-to-tons'
    ? { cubicYards: i.amount, tons: i.amount * i.density }
    : { cubicYards: i.amount / i.density, tons: i.amount };
}
export function computePavers(i: {
  area: number;
  length: number;
  width: number;
  waste: number;
  baseDepth: number;
  sandDepth: number;
  baseDensity: number;
  sandDensity: number;
  compaction: number;
}) {
  value(i.length, 'Paver length in inches', 120);
  value(i.width, 'Paver width in inches', 120);
  const base = computeGravel({
    area: i.area,
    depth: i.baseDepth,
    waste: i.waste,
    compaction: i.compaction,
    density: i.baseDensity,
  });
  const sand = computeGravel({
    area: i.area,
    depth: i.sandDepth,
    waste: i.waste,
    density: i.sandDensity,
  });
  return {
    pavers: roundUp(
      (i.area / ((i.length * i.width) / UNITS.inchesPerFoot ** 2)) * (1 + i.waste / 100),
    ),
    base,
    sand,
  };
}
export type Range = { low: number; high: number };
export function range(i: Range, name: string, allowZero = true) {
  value(i.low, `${name} low`, LIMITS.money, allowZero);
  value(i.high, `${name} high`, LIMITS.money, allowZero);
  if (i.high < i.low) throw new Error(`${name} high must be at least the low value.`);
  return i;
}
export function computeCost(i: {
  area: number;
  unit: Range | null;
  tier: number | null;
  extras: Range[];
  loads?: number;
  delivery?: Range | null;
  orderYards?: number;
  minimumOrder?: number | null;
  shortLoadFee?: Range | null;
}) {
  value(i.area, 'Area', LIMITS.area);
  if (
    !i.unit ||
    i.tier === null ||
    i.delivery === null ||
    i.minimumOrder === null ||
    i.shortLoadFee === null
  )
    return null;
  range(i.unit, 'Unit price');
  value(i.tier, 'Cost area multiplier', 100);
  i.extras.forEach((e) => range(e, 'Extras'));
  const extras = i.extras.reduce((t, r) => ({ low: t.low + r.low, high: t.high + r.high }), {
    low: 0,
    high: 0,
  });
  const material = { low: i.area * i.unit.low * i.tier, high: i.area * i.unit.high * i.tier };
  const delivery = i.delivery ? range(i.delivery, 'Delivery fee') : { low: 0, high: 0 };
  const loads = i.loads === undefined ? 0 : value(i.loads, 'Truckload count', LIMITS.loads, true);
  if (!Number.isInteger(loads)) throw new Error('Truckload count must be a whole number.');
  if (i.minimumOrder !== undefined) value(i.minimumOrder, 'Supplier minimum', LIMITS.area, true);
  if (i.orderYards !== undefined) value(i.orderYards, 'Concrete order', LIMITS.area);
  if (i.shortLoadFee) range(i.shortLoadFee, 'Short-load fee');
  const shortLoad =
    i.orderYards !== undefined && i.minimumOrder !== undefined && i.orderYards < i.minimumOrder
      ? (i.shortLoadFee ?? { low: 0, high: 0 })
      : { low: 0, high: 0 };
  return {
    low: material.low + extras.low + loads * delivery.low + shortLoad.low,
    high: material.high + extras.high + loads * delivery.high + shortLoad.high,
    material,
    extras,
    delivery: { low: loads * delivery.low, high: loads * delivery.high },
    shortLoad,
  };
}
export type ComparisonSurface = {
  name: string;
  unit: Range | null;
  lifespan: Range | null;
  upkeep: string[];
  extras: Range[];
};
export function computeCompare(area: number, tier: number | null, surfaces: ComparisonSurface[]) {
  value(area, 'Area', LIMITS.area);
  if (!surfaces.length) throw new Error('Select a surface.');
  const missing: string[] = [];
  const rows = surfaces.flatMap((s) => {
    const total = computeCost({ area, tier, unit: s.unit, extras: s.extras });
    if (!total) {
      missing.push(s.name);
      return [];
    }
    if (s.lifespan) range(s.lifespan, 'Lifespan', false);
    return [
      {
        name: s.name,
        ...total,
        lifespan: s.lifespan,
        upkeep: s.upkeep,
        annual: s.lifespan
          ? { low: total.low / s.lifespan.high, high: total.high / s.lifespan.low }
          : null,
      },
    ];
  });
  return { rows, missing };
}
export function renderExample(kind: 'asphalt' | 'gravel' | 'concrete') {
  // Arithmetic fixtures supplied in Section 8.3; not recommended construction defaults.
  if (kind === 'asphalt') {
    const r = computeAsphalt({
      area: computeArea([
        { length: 20, startWidth: 20, endWidth: 20, grade: 0, measured: 'slope' },
      ]),
      depth: 2,
      density: 145,
      waste: 0,
    });
    return `20 ft × 20 ft × 2 in, at 145 lb/ft³ and 0% waste = ${r.tons.toFixed(2)} short tons; rounded purchase quantity ${r.orderTons.toFixed(1)} short tons.`;
  }
  if (kind === 'gravel') {
    const r = computeGravel({ area: 200, depth: 4, density: 1.4, waste: 0, compaction: 0 });
    return `20 ft × 10 ft × 4 in, at 1.4 short tons/yd³ and 0% allowances = ${r.cubicYards.toFixed(2)} yd³ and ${r.tons.toFixed(2)} short tons.`;
  }
  const r = computeConcrete({ area: 480, depth: 4, waste: 10 });
  return `12 ft × 40 ft × 4 in, with 10% waste = ${r.cubicYards.toFixed(2)} yd³.`;
}
````

## lib/calc/ui.ts

````typescript
import prices from '@/data/prices.json';
import {
  computeArea,
  computeAsphalt,
  computeGravel,
  computeGravelLayers,
  computeConcrete,
  computeSealcoat,
  computeConversion,
  computePavers,
  computeCost,
  computeCompare,
  type Section,
  type Range,
} from './index';
import { number, money } from '@/lib/format';
export type ToolKind =
  | 'asphalt'
  | 'gravel'
  | 'layers'
  | 'concrete'
  | 'sealcoat'
  | 'converter'
  | 'paver'
  | 'cost'
  | 'compare';
export type ToolState = {
  sections: {
    length: string;
    width: string;
    endWidth: string;
    grade: string;
    tapered: boolean;
    sloped: boolean;
    measured: 'flat' | 'slope';
  }[];
  fields: Record<string, string>;
  surfaces: string[];
  selectedSurface: string;
  sort: 'upfront' | 'annual';
};
export const emptyState = (): ToolState => ({
  sections: [
    {
      length: '',
      width: '',
      endWidth: '',
      grade: '',
      tapered: false,
      sloped: false,
      measured: 'flat',
    },
  ],
  fields: {},
  surfaces: ['asphalt', 'concrete', 'gravel', 'pavers'],
  selectedSurface: 'asphalt',
  sort: 'upfront',
});
export const surfaces = [
  'asphalt',
  'concrete',
  'stamped-concrete',
  'gravel',
  'pavers',
  'tar-and-chip',
] as const;
export function restoreState(raw: string): ToolState {
  if (raw.length > 20000) throw new Error('The shared measurement link is too long.');
  const state: unknown = JSON.parse(raw);
  if (!state || typeof state !== 'object')
    throw new Error('The shared measurement link is invalid.');
  const s = state as ToolState;
  if (
    !Array.isArray(s.sections) ||
    s.sections.length < 1 ||
    s.sections.length > 100 ||
    !s.fields ||
    typeof s.fields !== 'object' ||
    Array.isArray(s.fields) ||
    !Array.isArray(s.surfaces) ||
    !s.surfaces.every((x) => (surfaces as readonly string[]).includes(x)) ||
    !(surfaces as readonly string[]).includes(s.selectedSurface) ||
    !['upfront', 'annual'].includes(s.sort)
  )
    throw new Error('The shared measurement link is invalid.');
  for (const section of s.sections) {
    if (
      !section ||
      !['length', 'width', 'endWidth', 'grade'].every(
        (k) => typeof section[k as keyof typeof section] === 'string',
      ) ||
      typeof section.tapered !== 'boolean' ||
      typeof section.sloped !== 'boolean' ||
      !['flat', 'slope'].includes(section.measured)
    )
      throw new Error('The shared sections are invalid.');
  }
  if (
    !Object.values(s.fields).every((x) => typeof x === 'string' && x.length <= 100) ||
    !Object.keys(s.fields).every((x) => /^[A-Za-z]+$/.test(x))
  )
    throw new Error('The shared fields are invalid.');
  return s;
}
export type Metric = { label: string; value: string; unit?: string };
export type ToolResult = {
  area?: number;
  metrics: Metric[];
  formula: string;
  steps: string[];
  summary: string;
  missing?: string[];
  rows?: {
    name: string;
    low: number;
    high: number;
    annual: Range | null;
    lifespan: Range | null;
    upkeep: string[];
  }[];
  notice?: string;
  assumptions?: string[];
};
const known = (v: { value: number | null; verified: boolean }) => (v.verified ? v.value : null);
function n(raw: string | undefined, name: string): number {
  if (raw === undefined || raw.trim() === '') throw new Error(`Enter ${name.toLowerCase()}.`);
  const v = Number(raw);
  if (!Number.isFinite(v)) throw new Error(`Enter a valid number for ${name.toLowerCase()}.`);
  return v;
}
function ranged(
  low: { value: number | null; verified: boolean },
  high: { value: number | null; verified: boolean },
): Range | null {
  const l = known(low),
    h = known(high);
  return l === null || h === null ? null : { low: l, high: h };
}
export function evaluateTool(kind: ToolKind, state: ToolState, surface = 'asphalt'): ToolResult {
  const fields = state.fields;
  const num = (k: string, name = k) => n(fields[k], name);
  const optional = (k: string) => (fields[k]?.trim() ? num(k) : undefined);
  if (kind === 'converter') {
    const density = num('density'),
      amount = num('amount');
    const direction = fields.direction === 'tons-to-yards' ? 'tons-to-yards' : 'yards-to-tons';
    const r = computeConversion({ amount, density, direction });
    const metrics = [
      { label: 'Volume', value: number(r.cubicYards), unit: 'yd³' },
      { label: 'Weight', value: number(r.tons), unit: 'short tons' },
    ];
    return {
      metrics,
      formula:
        direction === 'yards-to-tons'
          ? `${amount} yd³ × ${density} short tons/yd³ = ${number(r.tons)} short tons`
          : `${amount} short tons ÷ ${density} short tons/yd³ = ${number(r.cubicYards)} yd³`,
      steps: [],
      summary: `${number(r.cubicYards)} yd³ = ${number(r.tons)} short tons at ${density} short tons/yd³.`,
    };
  }
  const sections: Section[] = state.sections.map((s) => ({
    length: n(s.length, 'Length'),
    startWidth: n(s.width, 'Width'),
    endWidth: n(s.tapered ? s.endWidth : s.width, 'End width'),
    grade: s.sloped ? n(s.grade, 'Grade') : 0,
    measured: s.sloped ? s.measured : 'slope',
  }));
  const area = computeArea(sections);
  const metrics: Metric[] = [{ label: 'Measured area', value: number(area), unit: 'ft²' }];
  const steps = sections.map(
    (s, i) =>
      `Section ${i + 1}: ${s.length} ft × (${s.startWidth} ft + ${s.endWidth} ft) ÷ 2${s.measured === 'flat' && s.grade ? ` × √(1 + (${s.grade}/100)²)` : ''}.`,
  );
  let formula = '';
  let missing: string[] | undefined;
  let rows: ToolResult['rows'];
  let notice: string | undefined;
  let assumptions: string[] = [];
  if (kind === 'cost' || kind === 'compare') {
    const tierName = ['low', 'high'].includes(fields.tier) ? fields.tier : 'average';
    const tier = known(prices.tiers[tierName as keyof typeof prices.tiers]);
    const list = kind === 'compare' ? state.surfaces : [surface];
    assumptions = list.map((name) => {
      const p = prices[name as keyof typeof prices];
      return p && 'installedLow' in p
        ? `${name}: ${p.installedLow.source ?? 'price source not loaded'}; retrieved ${p.installedLow.retrievedOn ?? 'not loaded'}.`
        : name;
    });
    const mapped = list.map((name) => {
      const p = prices[name as keyof typeof prices];
      if (!p || !('installedLow' in p)) throw new Error('Select a supported surface.');
      const extras: Range[] = [];
      if (fields.removal === 'true') {
        const r = ranged(p.removalLow, p.removalHigh);
        if (!r) return { name, unit: null, lifespan: null, upkeep: [], extras };
        extras.push({ low: r.low * area, high: r.high * area });
      }
      if (fields.base === 'true') {
        const r = ranged(p.baseLow, p.baseHigh);
        if (!r) return { name, unit: null, lifespan: null, upkeep: [], extras };
        extras.push({ low: r.low * area, high: r.high * area });
      }
      if (fields.delivery === 'true') {
        const fee = known(p.delivery);
        if (fee === null) return { name, unit: null, lifespan: null, upkeep: [], extras };
        const loads = num('loads', 'truckload count');
        if (!Number.isInteger(loads) || loads <= 0)
          throw new Error('Enter a positive whole truckload count.');
        extras.push({ low: fee * loads, high: fee * loads });
      }
      return {
        name,
        unit: ranged(p.installedLow, p.installedHigh),
        lifespan: ranged(p.lifespanLow, p.lifespanHigh),
        upkeep: known(p.upkeep) === null ? [] : [`${money(p.upkeep.value!)} per year`],
        extras,
      };
    });
    if (kind === 'compare') {
      const result = computeCompare(area, tier, mapped);
      missing = result.missing;
      rows = result.rows;
      rows.sort((a, b) =>
        state.sort === 'annual'
          ? (a.annual?.low ?? Infinity) - (b.annual?.low ?? Infinity)
          : a.low - b.low,
      );
    } else {
      const p = mapped[0];
      const total = computeCost({ area, unit: p.unit, tier, extras: p.extras });
      if (!total) missing = [surface];
      else {
        metrics.push(
          {
            label: 'Estimated cost range',
            value: `${money(total.low)}–${money(total.high)}`,
            unit: 'USD',
          },
          {
            label: 'Area × unit price × tier',
            value: `${money(total.material.low)}–${money(total.material.high)}`,
          },
          {
            label: 'Selected extras',
            value: `${money(total.extras.low)}–${money(total.extras.high)}`,
          },
        );
        formula = `${number(area)} ft² × $${p.unit!.low}–$${p.unit!.high}/ft² × ${tier} + ${money(total.extras.low)}–${money(total.extras.high)} extras`;
      }
    }
    if (!formula)
      formula = 'Total = area × sourced unit price × sourced tier multiplier + selected extras';
    notice =
      'Price data not loaded. Cost results require verified prices and regional multipliers.';
    if (surface === 'concrete' || surface === 'slab') {
      if (fields.depth?.trim() && fields.waste?.trim()) {
        const v = computeConcrete({ area, depth: num('depth'), waste: num('waste') });
        metrics.push({ label: 'Concrete volume', value: number(v.cubicYards), unit: 'yd³' });
        if (fields.shortLoad === 'true') {
          const p = prices[surface];
          const min = known(p.minimumOrder),
            fee = known(p.shortLoadFee);
          if (min === null || fee === null) {
            missing = Array.from(new Set([...(missing ?? []), 'short-load fee']));
            metrics.splice(1, metrics.length - 2);
          } else if (v.cubicYards < min && !missing?.length) {
            const cost = metrics[1];
            const total = computeCost({
              area,
              unit: mapped[0].unit,
              tier,
              extras: mapped[0].extras,
              orderYards: v.cubicYards,
              minimumOrder: min,
              shortLoadFee: { low: fee, high: fee },
            });
            if (total) cost.value = `${money(total.low)}–${money(total.high)}`;
            metrics.push({ label: 'Short-load fee', value: money(fee) });
          }
        }
      } else if (fields.shortLoad === 'true')
        throw new Error('Enter thickness and waste to check the short-load fee.');
    }
  } else if (kind === 'sealcoat') {
    const coverage = num('coverage'),
      coats = num('coats'),
      containerSize = num('containerSize');
    const r = computeSealcoat({ area, coverage, coats, containerSize });
    metrics.push(
      { label: 'Sealcoat needed', value: number(r.gallons), unit: 'gal' },
      {
        label: 'Containers to buy',
        value: String(r.containers),
        unit: `${containerSize} gal each`,
      },
    );
    formula = `${number(area)} ft² × ${coats} coats ÷ ${coverage} ft²/gal = ${number(r.gallons)} gal`;
  } else if (kind === 'paver') {
    const r = computePavers({
      area,
      length: num('paverLength'),
      width: num('paverWidth'),
      waste: num('waste'),
      baseDepth: num('baseDepth'),
      sandDepth: num('sandDepth'),
      baseDensity: num('baseDensity'),
      sandDensity: num('sandDensity'),
      compaction: num('compaction'),
    });
    metrics.push(
      { label: 'Pavers to buy', value: String(r.pavers), unit: 'pieces' },
      { label: 'Base material', value: number(r.base.orderTons), unit: 'short tons' },
      { label: 'Bedding sand', value: number(r.sand.orderTons), unit: 'short tons' },
    );
    formula = `${number(area)} ft² ÷ (${fields.paverLength} in × ${fields.paverWidth} in / 144) × (1 + ${fields.waste}/100)`;
  } else if (kind === 'layers') {
    const r = computeGravelLayers(
      [
        {
          area,
          depth: num('baseDepth'),
          density: num('baseDensity'),
          waste: num('waste'),
          compaction: num('compaction'),
        },
        { area, depth: num('depth'), density: num('density'), waste: num('waste') },
      ],
      optional('capacity'),
    );
    metrics.push(
      { label: 'Combined volume', value: number(r.cubicYards), unit: 'yd³' },
      { label: 'Base volume', value: number(r.layers[0].cubicYards), unit: 'yd³' },
      { label: 'Surface volume', value: number(r.layers[1].cubicYards), unit: 'yd³' },
      { label: 'Total weight', value: number(r.tons), unit: 'short tons' },
      { label: 'Order quantity', value: number(r.orderTons), unit: 'short tons' },
    );
    if (r.loads !== null) metrics.push({ label: 'Delivery loads', value: String(r.loads) });
    formula = `Base: ${number(area)} × (${fields.baseDepth}/12) ÷ 27 × (1 + ${fields.waste}/100) × (1 + ${fields.compaction}/100); surface: ${number(area)} × (${fields.depth}/12) ÷ 27 × (1 + ${fields.waste}/100). Tons = each layer's yd³ × its density.`;
  } else {
    const depth = num('depth'),
      waste = num('waste');
    if (kind === 'concrete') {
      const r = computeConcrete({
        area,
        depth,
        waste,
        bagYield: optional('bagYield'),
        bagSize: optional('bagSize'),
        truckCapacity: optional('capacity'),
      });
      metrics.push({ label: 'Concrete needed', value: number(r.cubicYards), unit: 'yd³' });
      if (r.bags !== null)
        metrics.push({
          label: 'Bags to buy',
          value: String(r.bags),
          unit: r.bagSize ? `${r.bagSize} lb bags` : 'bags at entered yield',
        });
      if (r.loads !== null) metrics.push({ label: 'Delivery loads', value: String(r.loads) });
      formula = `${number(area)} ft² × (${depth} in / 12) ÷ 27 × (1 + ${waste}/100) = ${number(r.cubicYards)} yd³${r.bags === null ? '' : `; bags = ceil(${number(r.cubicFeet)} ft³ ÷ ${fields.bagYield} ft³/bag)`}`;
    } else {
      const density = num('density');
      const r =
        kind === 'asphalt'
          ? computeAsphalt({ area, depth, waste, density, truckCapacity: optional('capacity') })
          : computeGravel({
              area,
              depth,
              waste,
              density,
              compaction: num('compaction'),
              truckCapacity: optional('capacity'),
            });
      metrics.push(
        { label: 'Material volume', value: number(r.cubicYards), unit: 'yd³' },
        { label: 'Calculated weight', value: number(r.tons), unit: 'short tons' },
        { label: 'Order quantity', value: number(r.orderTons), unit: 'short tons' },
      );
      if (r.loads !== null) metrics.push({ label: 'Delivery loads', value: String(r.loads) });
      formula =
        kind === 'asphalt'
          ? `${number(area)} ft² × (${depth}/12) × ${density} lb/ft³ × (1 + ${waste}/100) ÷ 2,000 = ${number(r.tons)} short tons`
          : `${number(area)} ft² × (${depth}/12) ÷ 27 × (1 + ${waste}/100) × (1 + ${fields.compaction}/100) × ${density} short tons/yd³ = ${number(r.tons)} short tons`;
    }
  }
  const comparisonSummary =
    rows
      ?.map(
        (r) =>
          `${r.name}: ${money(r.low)}–${money(r.high)}${r.annual ? `; cost per year ${money(r.annual.low)}–${money(r.annual.high)}` : ''}`,
      )
      .join('\n') ?? '';
  const summary =
    metrics.map((m) => `${m.label}: ${m.value} ${m.unit ?? ''}`).join('\n') +
    '\n' +
    formula +
    (comparisonSummary ? '\n' + comparisonSummary : '') +
    (missing?.length ? '\nPrice data not loaded: ' + missing.join(', ') : '');
  return { area, metrics, formula, steps, summary, missing, rows, notice, assumptions };
}
export function toolFor(seq: number): ToolKind | null {
  if ([2, 22].includes(seq)) return 'asphalt';
  if ([9, 25, 27, 29, 30].includes(seq)) return 'gravel';
  if (seq === 8) return 'layers';
  if (seq === 35) return 'concrete';
  if (seq === 21) return 'sealcoat';
  if (seq === 24) return 'converter';
  if (seq === 36) return 'paver';
  if (seq === 42) return 'compare';
  if ([3, 4, 5, 6, 7, 49, 50].includes(seq)) return 'cost';
  return null;
}
export function surfaceFor(seq: number) {
  return [5, 6].includes(seq)
    ? 'concrete'
    : [49, 50].includes(seq)
      ? 'slab'
      : seq === 7
        ? 'gravel'
        : 'asphalt';
}
````

## lib/config.ts

````typescript
export const SITE = {
  name: 'Driveway Calculators',
  url: 'https://drivewaycalc.online',
  author: 'Farrukh Abdullah',
  stage: process.env.SITE_STAGE === 'launch' ? 'launch' : 'draft',
} as const;
export const FLAGS = {
  leads: process.env.NEXT_PUBLIC_LEADS_ENABLED === 'true',
  ads: process.env.NEXT_PUBLIC_ADS_ENABLED === 'true',
};
````

## lib/content.ts

````typescript
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import rawPages from '@/data/pages.json';
export type PageRecord = {
  order: number;
  seq: number;
  url: string;
  section: string;
  type: string;
  phase: string;
  primary: string;
  primaryVolume: number | null;
  primaryKd: number | null;
  primaryCpc: number | null;
  keywords: string[];
  title: string;
  h1: string;
  description: string;
  status: string;
  updated: string;
  author: string;
  entities: string[];
  related: { slug: string; annotation: string }[];
  imageAlt?: string;
};
export const pages: PageRecord[] = rawPages;
export function getPage(url: string) {
  const page = pages.find((p) => p.url === url);
  if (!page) throw new Error('Unknown page: ' + url);
  return page;
}
export function getContent(url: string) {
  const slug = url.replaceAll('/', '') || 'home';
  const file = path.join(process.cwd(), 'content', slug + '.mdx');
  const parsed = matter(fs.readFileSync(file, 'utf8'));
  return { ...parsed, file };
}
export function isPublic(url: string) {
  return process.env.SITE_STAGE === 'launch' && getContent(url).data.status === 'published';
}
export const trustPages = [
  { url: '/about/', title: 'About', description: 'About the site and its editorial scope.' },
  {
    url: '/author/farrukh-abdullah/',
    title: 'Farrukh Abdullah',
    description: 'Farrukh Abdullah, researcher and writer.',
  },
  {
    url: '/privacy/',
    title: 'Privacy Policy',
    description: 'How information is handled on this site.',
  },
  {
    url: '/terms/',
    title: 'Terms of Use',
    description: 'Terms for using the calculators and estimates.',
  },
  {
    url: '/disclosure/',
    title: 'Disclosure',
    description: 'Advertising, affiliate, and quote-request disclosures.',
  },
  { url: '/contact/', title: 'Contact', description: 'Contact the site editor.' },
];
````

## lib/format.ts

````typescript
export const number = (n: number) =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(n);
export const money = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
````

## lib/metadata-validation.ts

````typescript
export type SourceMetadata = {
  seq: number;
  url: string;
  title: string;
  h1: string;
  description: string;
};
export function validateMetadata(
  actual: SourceMetadata,
  expected: SourceMetadata | undefined,
  frontmatter: Record<string, unknown>,
): string[] {
  const issues: string[] = [];
  if (!expected || expected.seq !== actual.seq) return ['Missing source metadata record.'];
  for (const field of ['title', 'h1', 'description'] as const) {
    if (actual[field] !== expected[field])
      issues.push(`${field} differs from the source document.`);
  }
  for (const field of ['title', 'description'] as const) {
    if (frontmatter[field] !== actual[field])
      issues.push(`MDX ${field} differs from the page map.`);
  }
  if (/^\d+$/.test(actual.description.trim()) || actual.description.trim().length < 30)
    issues.push('Description is a sequence number or incomplete text.');
  if (actual.h1.length > 85 || /\.\s+[A-Z]/.test(actual.h1))
    issues.push('H1 contains a paragraph rather than a page heading.');
  if (actual.title.includes('{{') || actual.description.includes('{{'))
    issues.push('Metadata contains unresolved price placeholders.');
  return issues;
}
````

## lib/page.tsx

````tsx
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPage, getContent, isPublic } from '@/lib/content';
import { metadataFor, JsonLd, breadcrumbs, pageSchema } from '@/lib/seo';
import Calculator from '@/components/Calculator';
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
import { renderExample } from '@/lib/calc';
import defaults from '@/data/defaults.json';
import sources from '@/data/sources.json';
import reviewers from '@/data/reviewers.json';
export function pageMetadata(url: string) {
  const page = getPage(url);
  const data = getContent(url).data;
  return metadataFor({ ...page, title: data.title, description: data.description }, isPublic(url));
}
export async function renderPage(url: string) {
  const page = getPage(url),
    content = getContent(url),
    kind = toolFor(page.seq),
    draft = content.data.status !== 'published';
  const related = page.related.map((r) => ({ ...r, destination: getPage(r.slug) }));
  const example =
    kind === 'asphalt'
      ? 'asphalt'
      : kind === 'gravel' || kind === 'layers'
        ? 'gravel'
        : kind === 'concrete'
          ? 'concrete'
          : null;
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
          {!draft ? (
            <strong>{content.data.answer}</strong>
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
          {draft ? (
            <span>Draft preview</span>
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
      {kind && (
        <Calculator
          kind={kind}
          surface={surfaceFor(page.seq)}
          slug={url.replaceAll('/', '')}
          material={material}
        />
      )}
      <div className="article-layout">
        <article className="prose">
          {example && (
            <QASection question="What does a worked example look like?">
              <p>
                <strong>The example below is generated by the calculator engine.</strong> The
                measurements and material values are illustrative inputs. Enter your own
                measurements and supplier values in the calculator.
              </p>
              <FormulaBox>{renderExample(example)}</FormulaBox>
            </QASection>
          )}
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
              <h2>Source register</h2>
              {sources.length ? (
                <ul>
                  {(sources as { name: string; url: string; retrievedOn: string }[]).map((s) => (
                    <li key={s.url}>
                      <a href={s.url} rel="noopener noreferrer">
                        {s.name}
                      </a>{' '}
                      · Retrieved {s.retrievedOn}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  No material or price source records have been approved for this preview. Exact
                  unit conversions and the formulas are listed above.
                </p>
              )}
            </>
          )}
          {draft ? (
            <DraftGuidance kind={kind} costGuide={page.type === 'Cost guide'} currentUrl={url} />
          ) : (
            <MDXRemote
              source={content.content}
              components={{ AnswerBlock, FormulaBox, QASection }}
            />
          )}
          {kind && (
            <QASection question="What needs checking before you order?">
              <p>
                <strong>Check 4 project details before placing an order.</strong>
              </p>
              <ul>
                <li>Confirm each measured section, including tapers and slope.</li>
                <li>Confirm density, product yield, or coverage with the supplier.</li>
                <li>Confirm thickness and any waste or compaction allowance.</li>
                <li>Confirm delivery capacity, fees, and supplier minimums.</li>
              </ul>
            </QASection>
          )}
          {related.length > 0 && (
            <QASection question="Related calculators and guides">
              {related.map((r) => (
                <RelatedLink
                  key={r.slug}
                  href={r.slug}
                  anchor={r.destination.h1}
                  relationshipText={r.destination.description}
                />
              ))}
            </QASection>
          )}
          <SourceNote>
            {draft
              ? 'Material defaults and price ranges are awaiting verified source records.'
              : content.data.sourceNames?.join('; ')}{' '}
            Read the <Link href="/methodology/">Methodology</Link> to inspect the formulas and
            source register.
          </SourceNote>
          <Disclosure />
          {!draft && <HelpfulVote />}
        </article>
        <aside className="article-sidebar">
          <div className="side-box">
            <span className="eyebrow">The method</span>
            <h3>Know the inputs.</h3>
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
````

## lib/seo/index.tsx

````tsx
import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import type { PageRecord } from '@/lib/content';
export function metadataFor(
  page: Pick<PageRecord, 'title' | 'description' | 'url'>,
  published = false,
): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: SITE.url + page.url },
    robots: published ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url: SITE.url + page.url,
      siteName: SITE.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: { card: 'summary', title: page.title, description: page.description },
  };
}
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': SITE.url + '/#organization',
    name: SITE.name,
    url: SITE.url,
  };
}
export function breadcrumbs(page: Pick<PageRecord, 'h1' | 'url'>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: SITE.name, item: SITE.url + '/' },
      ...(page.url === '/'
        ? []
        : [{ '@type': 'ListItem', position: 2, name: page.h1, item: SITE.url + page.url }]),
    ],
  };
}
export function pageSchema(page: PageRecord) {
  const common = {
    '@context': 'https://schema.org',
    name: page.h1,
    url: SITE.url + page.url,
    description: page.description,
  };
  if (/tool|estimator|Converter/i.test(page.type))
    return {
      ...common,
      '@type': 'WebApplication',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    };
  return {
    ...common,
    '@type': 'Article',
    headline: page.h1,
    dateModified: page.updated,
    author: { '@type': 'Person', name: page.author, url: SITE.url + '/author/farrukh-abdullah/' },
    publisher: { '@id': SITE.url + '/#organization' },
  };
}
````

## lighthouserc.cjs

````text
module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      url: [
        'http://localhost/asphalt-calculator/',
        'http://localhost/asphalt-driveway-cost/',
        'http://localhost/',
      ],
      numberOfRuns: 1,
      settings: { preset: 'mobile' },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
      },
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci/reports' },
  },
};
````

## next-env.d.ts

````typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/types/routes.d.ts";
import "./.next/types/root-params.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
````

## next.config.ts

````typescript
import type { NextConfig } from 'next';
const config: NextConfig = {
  output: 'export',
  outputFileTracingRoot: process.cwd(),
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};
export default config;
````

## package-lock.json

````json
{
  "name": "driveway-calculators",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "driveway-calculators",
      "version": "0.1.0",
      "dependencies": {
        "gray-matter": "4.0.3",
        "next": "16.4.0",
        "next-mdx-remote": "5.0.0",
        "react": "19.2.0",
        "react-dom": "19.2.0",
        "zod": "4.3.6"
      },
      "devDependencies": {
        "@cloudflare/workers-types": "5.20261011.1",
        "@lhci/cli": "0.15.1",
        "@tailwindcss/postcss": "4.1.18",
        "@types/node": "24.10.1",
        "@types/react": "19.2.7",
        "@types/react-dom": "19.2.3",
        "eslint": "9.39.2",
        "eslint-config-next": "16.4.0",
        "prettier": "3.7.4",
        "tailwindcss": "4.1.18",
        "tsx": "4.21.0",
        "typescript": "5.9.3",
        "vitest": "5.0.3"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.3.0.tgz",
      "integrity": "sha512-U4+70Pc5ZS9osnCBCE5Jha/ciHM+Yp+CNMNC/7HvYbNRk1Ldd+f7qO65W5qfhu/TCv+/ozljlXXe9Nj8419DMA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.7.tgz",
      "integrity": "sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.7.tgz",
      "integrity": "sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.7.tgz",
      "integrity": "sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helpers": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.8.tgz",
      "integrity": "sha512-gZbepsdh3WDtgZKWL+vTPh71LSBrm/Y4/QDZBVCcYfmeTEEuoOYwlSy+G1StfJg+/Zy550u/3TATbm7qDbbMtg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.8",
        "@babel/types": "^7.29.8",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.29.7.tgz",
      "integrity": "sha512-wem6WaBj4NaVYVdNhLPPVacES6ZJ+KBBfSkTMD3YZxbP3rm3Di85tJU5ljaUNhaOynt+Aj0xruhYuzQBt8n71g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.29.7.tgz",
      "integrity": "sha512-3nQVUAtvkKH9zahfWgw96Jc/uFOmjACE1kQz82E2lqWmHBgjzbNlsC22nuQTfahmWeQtTq5nQ/4Nnd2A1wj4zA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.29.7.tgz",
      "integrity": "sha512-ejHwrQQYcm9xnTivShn2IDOlIzInN34AXskvq9QicvCtEzq1Vzclu/tKF8Jq1Cg8JG2GL6/EmjgsCT7lXepE3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.29.7.tgz",
      "integrity": "sha512-UPUVSyXbOh627KiCIGQSgwWzGeBKLkaJ9PJEdrngIwMSzxLR4jS4+f1f1jb7VzBbg8nFLaYotvVPFCTqdrmTAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.29.7.tgz",
      "integrity": "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.29.7.tgz",
      "integrity": "sha512-N9ZErrD+yW5geCDtBqnOoxmR8+tNKiGuxKlDpuJxfsqpa2dFcexaziGAE/qoHLiDDreVNMupxGmSoNlyvsA3gw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.10",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.10.tgz",
      "integrity": "sha512-EMCx3AGZ3WfAl6ht7AyQoPm2Lh+BGYEMdc4Q6Hf7uSCDOZFuLq44qNwL+iaim8VlyYhRAo4X43+weadK8ZB4Yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.8"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.9",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.9.tgz",
      "integrity": "sha512-CjXrNHTnvqBVqHgdBysY3vk2T8tpJHb5/RMeHJBTyVa9xgugCB0CJTx/3oO8RV2QRQP391RWpB7D6hLjm8V9uA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.8"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.29.7.tgz",
      "integrity": "sha512-puq+Gf35oI24FeN11LkoUQFqv9uwNeWpxXZi/Ji3rRIoKAzKnxRaZ+Gkj0vKS9ZCiTESfng1N9LyOyXvo+m+Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.10",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.10.tgz",
      "integrity": "sha512-B3lYAs2nkKskbgQ1nfy8Ma9ao9Q1rntTAQHrzzyDuj+TSO+X3le6PfWwqDvodsb+OumE10eMFfuMCTQSQ5iuIQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.8",
        "@babel/helper-globals": "^7.29.7",
        "@babel/parser": "^7.29.9",
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.8",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.8.tgz",
      "integrity": "sha512-Vj1jF3cPfxg7OAfoI7QnVKLoILlm2JF9pnVHrX8qx7AHMiYWT+NDAA7jChlNgRS4WTLc/fD1lXLmPixluj+3Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@cloudflare/workers-types": {
      "version": "5.20261011.1",
      "resolved": "https://registry.npmjs.org/@cloudflare/workers-types/-/workers-types-5.20261011.1.tgz",
      "integrity": "sha512-6dgFMnwq6Wn238QWGHHb93gqIXjbSQMALcurXmI+9SHkM0QeEdHDhbyxwnE8v1m41MUzCtNO/gnTRwI4FsS9fQ==",
      "dev": true,
      "license": "MIT OR Apache-2.0"
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.3.tgz",
      "integrity": "sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.7.tgz",
      "integrity": "sha512-EKX3Qwmhz1eMdEJokhALr0YiD0lhQNwDqkPYyPhiSwKrh7/4KRjQc04sZ8db+5DVVnZ1LmbNDI1uAMPEUBnQPg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.7.tgz",
      "integrity": "sha512-jbPXvB4Yj2yBV7HUfE2KHe4GJX51QplCN1pGbYjvsyCZbQmies29EoJbkEc+vYuU5o45AfQn37vZlyXy4YJ8RQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.7.tgz",
      "integrity": "sha512-62dPZHpIXzvChfvfLJow3q5dDtiNMkwiRzPylSCfriLvZeq0a1bWChrGx/BbUbPwOrsWKMn8idSllklzBy+dgQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.7.tgz",
      "integrity": "sha512-x5VpMODneVDb70PYV2VQOmIUUiBtY3D3mPBG8NxVk5CogneYhkR7MmM3yR/uMdITLrC1ml/NV1rj4bMJuy9MCg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.7.tgz",
      "integrity": "sha512-5lckdqeuBPlKUwvoCXIgI2D9/ABmPq3Rdp7IfL70393YgaASt7tbju3Ac+ePVi3KDH6N2RqePfHnXkaDtY9fkw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.7.tgz",
      "integrity": "sha512-rYnXrKcXuT7Z+WL5K980jVFdvVKhCHhUwid+dDYQpH+qu+TefcomiMAJpIiC2EM3Rjtq0sO3StMV/+3w3MyyqQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.7.tgz",
      "integrity": "sha512-B48PqeCsEgOtzME2GbNM2roU29AMTuOIN91dsMO30t+Ydis3z/3Ngoj5hhnsOSSwNzS+6JppqWsuhTp6E82l2w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.7.tgz",
      "integrity": "sha512-jOBDK5XEjA4m5IJK3bpAQF9/Lelu/Z9ZcdhTRLf4cajlB+8VEhFFRjWgfy3M1O4rO2GQ/b2dLwCUGpiF/eATNQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.7.tgz",
      "integrity": "sha512-RkT/YXYBTSULo3+af8Ib0ykH8u2MBh57o7q/DAs3lTJlyVQkgQvlrPTnjIzzRPQyavxtPtfg0EopvDyIt0j1rA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.7.tgz",
      "integrity": "sha512-RZPHBoxXuNnPQO9rvjh5jdkRmVizktkT7TCDkDmQ0W2SwHInKCAV95GRuvdSvA7w4VMwfCjUiPwDi0ZO6Nfe9A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.7.tgz",
      "integrity": "sha512-GA48aKNkyQDbd3KtkplYWT102C5sn/EZTY4XROkxONgruHPU72l+gW+FfF8tf2cFjeHaRbWpOYa/uRBz/Xq1Pg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.7.tgz",
      "integrity": "sha512-a4POruNM2oWsD4WKvBSEKGIiWQF8fZOAsycHOt6JBpZ+JN2n2JH9WAv56SOyu9X5IqAjqSIPTaJkqN8F7XOQ5Q==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.7.tgz",
      "integrity": "sha512-KabT5I6StirGfIz0FMgl1I+R1H73Gp0ofL9A3nG3i/cYFJzKHhouBV5VWK1CSgKvVaG4q1RNpCTR2LuTVB3fIw==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.7.tgz",
      "integrity": "sha512-gRsL4x6wsGHGRqhtI+ifpN/vpOFTQtnbsupUF5R5YTAg+y/lKelYR1hXbnBdzDjGbMYjVJLJTd2OFmMewAgwlQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.7.tgz",
      "integrity": "sha512-hL25LbxO1QOngGzu2U5xeXtxXcW+/GvMN3ejANqXkxZ/opySAZMrc+9LY/WyjAan41unrR3YrmtTsUpwT66InQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.7.tgz",
      "integrity": "sha512-2k8go8Ycu1Kb46vEelhu1vqEP+UeRVj2zY1pSuPdgvbd5ykAw82Lrro28vXUrRmzEsUV0NzCf54yARIK8r0fdw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.7.tgz",
      "integrity": "sha512-hzznmADPt+OmsYzw1EE33ccA+HPdIqiCRq7cQeL1Jlq2gb1+OyWBkMCrYGBJ+sxVzve2ZJEVeePbLM2iEIZSxA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.7.tgz",
      "integrity": "sha512-b6pqtrQdigZBwZxAn1UpazEisvwaIDvdbMbmrly7cDTMFnw/+3lVxxCTGOrkPVnsYIosJJXAsILG9XcQS+Yu6w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.7.tgz",
      "integrity": "sha512-OfatkLojr6U+WN5EDYuoQhtM+1xco+/6FSzJJnuWiUw5eVcicbyK3dq5EeV/QHT1uy6GoDhGbFpprUiHUYggrw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.7.tgz",
      "integrity": "sha512-AFuojMQTxAz75Fo8idVcqoQWEHIXFRbOc1TrVcFSgCZtQfSdc1RXgB3tjOn/krRHENUB4j00bfGjyl2mJrU37A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.7.tgz",
      "integrity": "sha512-+A1NJmfM8WNDv5CLVQYJ5PshuRm/4cI6WMZRg1by1GwPIQPCTs1GLEUHwiiQGT5zDdyLiRM/l1G0Pv54gvtKIg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.7.tgz",
      "integrity": "sha512-+KrvYb/C8zA9CU/g0sR6w2RBw7IGc5J2BPnc3dYc5VJxHCSF1yNMxTV5LQ7GuKteQXZtspjFbiuW5/dOj7H4Yw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.7.tgz",
      "integrity": "sha512-ikktIhFBzQNt/QDyOL580ti9+5mL/YZeUPKU2ivGtGjdTYoqz6jObj6nOMfhASpS4GU4Q/Clh1QtxWAvcYKamA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.7.tgz",
      "integrity": "sha512-7yRhbHvPqSpRUV7Q20VuDwbjW5kIMwTHpptuUzV+AA46kiPze5Z7qgt6CLCK3pWFrHeNfDd1VKgyP4O+ng17CA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.7.tgz",
      "integrity": "sha512-SmwKXe6VHIyZYbBLJrhOoCJRB/Z1tckzmgTLfFYOfpMAx63BJEaL9ExI8x7v0oAO3Zh6D/Oi1gVxEYr5oUCFhw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.7.tgz",
      "integrity": "sha512-56hiAJPhwQ1R4i+21FVF7V8kSD5zZTdHcVuRFMW0hn753vVfQN8xlx4uOPT4xoGH0Z/oVATuR82AiqSTDIpaHg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.10.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.10.1.tgz",
      "integrity": "sha512-cuadcxVFE8sDK6iWJbs8Sn0av2Nrh2QSGQhVlBW9AaAHqHwjWsZHT8LJ4hFGPh7ASBV2deFdM7H/DPjulmh8rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.2.tgz",
      "integrity": "sha512-nJl2KGTlrf9GjLimgIru+V/mzgSK0ABCDQRvxw5BjURL7WfH5uoWmizbH7QB6MmnMBd8cIC9uceWnezL1VZWWw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.5"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.7",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.7.tgz",
      "integrity": "sha512-F42g89Qd5oAWtp0k0nnSrjziAKza7w8SVT4mStc18LZMaRb4J1HQAHLCalEtDCxrTuksx7NU9qsmeLwpOfPqWw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.14.0",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.3.2",
        "minimatch": "^3.1.5",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/@eslint/eslintrc/node_modules/js-yaml": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.3.2.tgz",
      "integrity": "sha512-SFNOvSJ+Dgf/9An904Yx+CgSlIPCkIpao4qo51lpee25TIRejdH3rhR4EZMGoNx3/TP3O+wzWuiTFl4sqbltzA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/puzrin"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/nodeca"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.2.tgz",
      "integrity": "sha512-q1mjIoW1VX4IvSocvM/vbTiveKC4k9eLrajNEuSsmjymSDEbpGddtpfOoN7YGAqBK3NG+uqo8ia4PDTt8buCYA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@formatjs/ecma402-abstract": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/@formatjs/ecma402-abstract/-/ecma402-abstract-2.3.6.tgz",
      "integrity": "sha512-HJnTFeRM2kVFVr5gr5kH1XP6K0JcJtE7Lzvtr3FS/so5f1kpsqqqxy5JF+FRaO6H2qmcMfAUIox7AJteieRtVw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@formatjs/fast-memoize": "2.2.7",
        "@formatjs/intl-localematcher": "0.6.2",
        "decimal.js": "^10.4.3",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/fast-memoize": {
      "version": "2.2.7",
      "resolved": "https://registry.npmjs.org/@formatjs/fast-memoize/-/fast-memoize-2.2.7.tgz",
      "integrity": "sha512-Yabmi9nSvyOMrlSeGGWDiH7rf3a7sIwplbvo/dlz9WCIjzIQAfy1RMf4S0X3yG724n5Ghu2GmEl5NJIV6O9sZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/icu-messageformat-parser": {
      "version": "2.11.4",
      "resolved": "https://registry.npmjs.org/@formatjs/icu-messageformat-parser/-/icu-messageformat-parser-2.11.4.tgz",
      "integrity": "sha512-7kR78cRrPNB4fjGFZg3Rmj5aah8rQj9KPzuLsmcSn4ipLXQvC04keycTI1F7kJYDwIXtT2+7IDEto842CfZBtw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@formatjs/ecma402-abstract": "2.3.6",
        "@formatjs/icu-skeleton-parser": "1.8.16",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/icu-skeleton-parser": {
      "version": "1.8.16",
      "resolved": "https://registry.npmjs.org/@formatjs/icu-skeleton-parser/-/icu-skeleton-parser-1.8.16.tgz",
      "integrity": "sha512-H13E9Xl+PxBd8D5/6TVUluSpxGNvFSlN/b3coUp0e0JpuWXXnQDiavIpY3NnvSp4xhEMoXyyBvVfdFX8jglOHQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@formatjs/ecma402-abstract": "2.3.6",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@formatjs/intl-localematcher": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/@formatjs/intl-localematcher/-/intl-localematcher-0.6.2.tgz",
      "integrity": "sha512-XOMO2Hupl0wdd172Y06h6kLpBz6Dv+J4okPLl4LPtzbr8f66WbIoy4ev98EBuZ6ZK4h5ydTN6XneT4QVpD7cdA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.2.tgz",
      "integrity": "sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/types": "^0.15.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.8",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.8.tgz",
      "integrity": "sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.2",
        "@humanfs/types": "^0.15.0",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/types": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/@humanfs/types/-/types-0.15.0.tgz",
      "integrity": "sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.35.5.tgz",
      "integrity": "sha512-QRUlFQ0WxvdWyqqG/WtI3iupfD5rBzmCHXSdPsY91sAtVtTo7Q4cb6zOccZ3gqEqkr0f1As1ehLqmEpDsRf+lg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.35.5.tgz",
      "integrity": "sha512-+BR255RhDlpygUpOc/Jdt1nT6DQ3XG/ERo5wbcdOf5Q320dKtPCKPLR1LJs9VGXRaMa8l1uUa0tkCNOXiAxZUw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-freebsd-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-freebsd-wasm32/-/sharp-freebsd-wasm32-0.35.5.tgz",
      "integrity": "sha512-Y/z91nEZ4uIBX5X3nfTovjU9lHNKFYbL2lpHCLVNmXQK03VIZvXBBt0KxbPGp2SdGSF+2mQU4e+hQaWOt86iAw==",
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "dependencies": {
        "@img/sharp-wasm32": "0.35.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.3.4.tgz",
      "integrity": "sha512-5R89nBYiRdUlSWJxPhO+GVtaXzXSxKnRu/xqMn3KTA3L9EB9Oy/P+Nn2f2vlhPuUdy/Zusb2DarbyTpGCfEDuw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.3.4.tgz",
      "integrity": "sha512-iR2OKH80yi0U+dUplyh3/xdpFvps6YkCwsXenIJxqxR1v9o+xtKTGbS9H7cps+2Vxjc8B1j96p75NmTGjIhtpQ==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.3.4.tgz",
      "integrity": "sha512-LmRtTsOHuvM2+wlO2Db37dx5MiZhB0FvSunciw48YjdOkZz9KAiRbm8ujeMOA1INqmei5NapFxYEK1D1ZSidmw==",
      "cpu": [
        "arm"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.3.4.tgz",
      "integrity": "sha512-Y3dgX/6lE2QhQb+Gxy0WZxfg9MEm/JBjamZpS2IklP7xIQoKN4hzAm7KcMVGtaVDt3neE9OKBC7vAfonA/Lr1A==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.3.4.tgz",
      "integrity": "sha512-Le6boB8Tai0Nis+gIxIpKx68UDVVIqdR8Tin5Yf1z2LJJQLDJvCDRqRu+jC2qCoD+eIomonmOwB4smBRxfVpYQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.3.4.tgz",
      "integrity": "sha512-aHkkIEHPRdQEegJN20MLmGtxYD9R2wQr3Cwpddnu5+YKMt6Uzax7S9h5gpZTo8wyrGuZSlfQ63OevL5mTyOC7Q==",
      "cpu": [
        "riscv64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.3.4.tgz",
      "integrity": "sha512-ra/mB6MikESDUO7Yg+Mi95bFBb9GsObURuhnOv3OqknjGe9sZrG8tCe9q0xSIGrtLgvgw0gKnFWcK4blSgQOuQ==",
      "cpu": [
        "s390x"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.3.4.tgz",
      "integrity": "sha512-GJ//SSXbnwSDes02umB3nDJLFcQzw8a18V8fyhqr6tV515tOEMdImjjxj1AoafMRz56F3PHgftnj1QEKSU1zkw==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.3.4.tgz",
      "integrity": "sha512-hvulFwtjUcagsis6BBxHwGFwWoNZjgYmULGVrZcyfNbjA8hKILbRxGg15/7w5HDyXHXUos/j6baAWqnCyQ2DWA==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.3.4.tgz",
      "integrity": "sha512-6zXKeE/p39I1AmA3cJG35eyBGNqNddLnUXjhwBnsGjFPWqf5VKkDBEqaEkPDoTEtkxwi2vv8Tcr2mDyP4So7Fg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.35.5.tgz",
      "integrity": "sha512-LEaXK2WdXVK5ykcw0buWyPMsmLLL2vpHLD6yrNSW+JGEL3BZPA4tpKN6iaMc4AxTTAoaX/sU1rOL51lcIz48ZQ==",
      "cpu": [
        "arm"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.35.5.tgz",
      "integrity": "sha512-LYVx5JTsOM2CBzmxreh+nl64/3H6Xb09iSLknqH47z2T2DFFxDeFLP5y4dJwe6H7uGQlHPyEEtIqyo3DYsRwdQ==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.35.5.tgz",
      "integrity": "sha512-QVxAAq8evVRI9ia2vqgwrmWucn5Dfv+JdWzj75pD8omHLPSP7f8p20O8jxzjCcuCEQEOtYOZUmX1hkiZ0kdevA==",
      "cpu": [
        "ppc64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.35.5.tgz",
      "integrity": "sha512-LtdreXguaavKODPIfzJ4kffx7UNt1omwtK0rch4EBbbSTXPnxWmYSayXdLJw0fJzQ97kHt1gL/yh4tvU+nCyRQ==",
      "cpu": [
        "riscv64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.35.5.tgz",
      "integrity": "sha512-UZasTOFiYzotTsGOCu42BfUzP6Tu6Do/947iRm1RsLKvlllxwGcn4RN27LibGWceix4Y+Pmw3jsnTcCQIgWjqA==",
      "cpu": [
        "s390x"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.35.5.tgz",
      "integrity": "sha512-SxFtLTeJInhAA9Q836kux2vZNeOBQEx658qvbboZScr0wIARym3IcGmW7KpVD5sbVg0Ojy+udFQdayYIZyoNog==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.35.5.tgz",
      "integrity": "sha512-9HbMclmI1zlNkFRs3z9/eBtDjfD0sGlrX1z6b1qwmiFY5ElDLh4BC0LPBdVp7z1DXFiKlIcznf+ZlsuZzLxQqg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.35.5.tgz",
      "integrity": "sha512-4KOphqB035HrVdqLZfCgMzzERrQkkzOwRhl4OAkRO1YCldbaFjySXMaK534Mo0V+LndnlJk+sbUyLeU0ULyD1A==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.35.5.tgz",
      "integrity": "sha512-Ptsga1su4tQx+LLF1ECS9U6nz5kmrXKo6XVbtR48Ke3ZRxxgaWBu7IDtEe1quo8hiupwm6WFqxVlXaSf7IINGQ==",
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.11.3"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-webcontainers-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-webcontainers-wasm32/-/sharp-webcontainers-wasm32-0.35.5.tgz",
      "integrity": "sha512-hfhF/FmoQyTUkA0bIKFOtw536BQSeBMe6BF6QyWlrPxT754+TFLaZ7sKKTfvvM0yJgKgaYTwnFCIZ/GuDw5SUA==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/sharp-wasm32": "0.35.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.35.5.tgz",
      "integrity": "sha512-X4t7g+7ZA5DKblCBEXGjUqqemj4vczING/5viFwAL8h4N3qYeyjwdCvRLHi4EdOUI+2Z7UFlp1VM+p/AuEtm6Q==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.35.5.tgz",
      "integrity": "sha512-5Zm82LoBc43nhwNybZlG7Y1KO//Zhsn306fQl29ZOuStHLGTo3BWL83q3cznX0poxSAMuYL1On/BHBxkBeKr6A==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.35.5.tgz",
      "integrity": "sha512-x76eH0vEiHlcMQu8Y8IenntaACtddpT6W0wmXtWrnKcnKI7ME5DdgqhAD6SEWOEl1v2zDvkZDhFA9KnURwpfqg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.6.0.tgz",
      "integrity": "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@lhci/cli": {
      "version": "0.15.1",
      "resolved": "https://registry.npmjs.org/@lhci/cli/-/cli-0.15.1.tgz",
      "integrity": "sha512-yhC0oXnXqGHYy1xl4D8YqaydMZ/khFAnXGY/o2m/J3PqPa/D0nj3V6TLoH02oVMFeEF2AQim7UbmdXMiXx2tOw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@lhci/utils": "0.15.1",
        "chrome-launcher": "^0.13.4",
        "compression": "^1.7.4",
        "debug": "^4.3.1",
        "express": "^4.17.1",
        "inquirer": "^6.3.1",
        "isomorphic-fetch": "^3.0.0",
        "lighthouse": "12.6.1",
        "lighthouse-logger": "1.2.0",
        "open": "^7.1.0",
        "proxy-agent": "^6.4.0",
        "tmp": "^0.1.0",
        "uuid": "^8.3.1",
        "yargs": "^15.4.1",
        "yargs-parser": "^13.1.2"
      },
      "bin": {
        "lhci": "src/cli.js"
      }
    },
    "node_modules/@lhci/utils": {
      "version": "0.15.1",
      "resolved": "https://registry.npmjs.org/@lhci/utils/-/utils-0.15.1.tgz",
      "integrity": "sha512-WclJnUQJeOMY271JSuaOjCv/aA0pgvuHZS29NFNdIeI14id8eiFsjith85EGKYhljgoQhJ2SiW4PsVfFiakNNw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "debug": "^4.3.1",
        "isomorphic-fetch": "^3.0.0",
        "js-yaml": "^3.13.1",
        "lighthouse": "12.6.1",
        "tree-kill": "^1.2.1"
      }
    },
    "node_modules/@mdx-js/mdx": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/@mdx-js/mdx/-/mdx-3.1.1.tgz",
      "integrity": "sha512-f6ZO2ifpwAQIpzGWaBQT2TXxPv6z3RBzQKpVftEWN78Vl/YweF1uwussDx8ECAXVtr3Rs89fKyG9YlzUs9DyGQ==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdx": "^2.0.0",
        "acorn": "^8.0.0",
        "collapse-white-space": "^2.0.0",
        "devlop": "^1.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "estree-util-scope": "^1.0.0",
        "estree-walker": "^3.0.0",
        "hast-util-to-jsx-runtime": "^2.0.0",
        "markdown-extensions": "^2.0.0",
        "recma-build-jsx": "^1.0.0",
        "recma-jsx": "^1.0.0",
        "recma-stringify": "^1.0.0",
        "rehype-recma": "^1.0.0",
        "remark-mdx": "^3.0.0",
        "remark-parse": "^11.0.0",
        "remark-rehype": "^11.0.0",
        "source-map": "^0.7.0",
        "unified": "^11.0.0",
        "unist-util-position-from-estree": "^2.0.0",
        "unist-util-stringify-position": "^4.0.0",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/@mdx-js/react": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/@mdx-js/react/-/react-3.1.1.tgz",
      "integrity": "sha512-f++rKLQgUVYDAtECQ6fn/is15GkEH9+nZPM3MS0RcxVqoTfawHvDlSCH7JbMhAM6uJ32v3eXLvLmLvjGu7PTQw==",
      "license": "MIT",
      "dependencies": {
        "@types/mdx": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      },
      "peerDependencies": {
        "@types/react": ">=16",
        "react": ">=16"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.2.5.tgz",
      "integrity": "sha512-HshSvXzmBxNzqejd3k/KemgQ3hdREUYFRRrgxOZ+gPljDIsO2SDZrVZMd4Z/HsxudQbE62OVyVFE8z9BCurfjA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.3"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=23.5.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1 || ^2.0.0-alpha.4",
        "@emnapi/runtime": "^1.7.1 || ^2.0.0-alpha.4"
      }
    },
    "node_modules/@next/env": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.4.0.tgz",
      "integrity": "sha512-pyLlT5oafGlX8X7xjgGNXz5dNIDSxREm+qD6i9VLSZiZFopA/XWl8NM/KPmLx/8EG/++c49iid3gNWSQW1+2dQ==",
      "license": "MIT"
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-16.4.0.tgz",
      "integrity": "sha512-ffeflB/dL8RrvWejQximw01pOpKHN692Y3FjDB82DCd0YVvXvBD6vY7mcZp27yvSVFVM6wA73xVodEKF4spizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "4.9.1",
        "fast-glob": "3.3.1"
      }
    },
    "node_modules/@next/eslint-plugin-next/node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@next/eslint-plugin-next/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.4.0.tgz",
      "integrity": "sha512-yyZ+9MgViAKLLb5l1gPBGjRwnq3teNLb5Zx6JEw8LzNSTjlsnp+baUHFxTgl7PpjCmKf48VQfyipG1eBflb48Q==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.4.0.tgz",
      "integrity": "sha512-RePEEejEj1Auf5s9qEcG0JbcDP3ceNUS/ofNX8AhxzgIjTVlZIHMatlp16YplcSMpsVo/ZMQHJTjbMYJznjGUg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.4.0.tgz",
      "integrity": "sha512-HhsyCqd+NpmvDDVY/LqkAN24f+QVvXh3ie+PfcwKinWL2Mu826JymQxJXGjAIfmJ4VlHjp4Pe/nZtXtUoEMAqw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.4.0.tgz",
      "integrity": "sha512-sN9Pf+Zh+RpZAOmbR7d8KAA8T61CVhawtbEJ2Bk6QrRzx6Z/6haaF4UiwBzytM96GRRRWZh9/WALIEO3npMamA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.4.0.tgz",
      "integrity": "sha512-D5M5xLWQVd1CvR+L7BickM1weRfmM41x3L1NWcnKY/oyJJqr1qwaCgmu3dMAhLBOMdZwSuDCRV6DJRRpiUkbDQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.4.0.tgz",
      "integrity": "sha512-8d5WLS6a9YalqpOgXdlbvonFu+sIgjA+CO6tGzetrpPVcUL56foa7B7664h41rAlbLi5fJwK4vWji3zf4QDy+w==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.4.0.tgz",
      "integrity": "sha512-sQuOIiW3snb48UwrBcDMvFA/u03qtw2LeuSIxFIQ9AJuW9UG/4Ddsfo+eV73PnZwBhyncMtsKVh7PrzMol2/fA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.4.0.tgz",
      "integrity": "sha512-6/33lCuxpdHUy27RegyGM/5uTpF7YZd3UR4D0gpkOA/tWY5YR7msbQjqPgCZmSmxrrTLGCXYA4A8vT2H5DPGTQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.153.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.153.0.tgz",
      "integrity": "sha512-jSNrRIyvPVLL5E1z/tS5zLAprosGz/FuI1PWwEOz59j3E4TTTzSpqKb/RDGqJhhW0QHYISGXxq582wGx6T11Tw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "funding": {
        "url": "https://github.com/sponsors/oxc-project"
      }
    },
    "node_modules/@paulirish/trace_engine": {
      "version": "0.0.53",
      "resolved": "https://registry.npmjs.org/@paulirish/trace_engine/-/trace_engine-0.0.53.tgz",
      "integrity": "sha512-PUl/vlfo08Oj804VI5nDPeSk9vyslnBlVzDDwFt8SUVxY8+KdGMkra/vrXjEEHe8gb7+RqVTfOIlGw0nyrEelA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "legacy-javascript": "latest",
        "third-party-web": "latest"
      }
    },
    "node_modules/@puppeteer/browsers": {
      "version": "2.13.2",
      "resolved": "https://registry.npmjs.org/@puppeteer/browsers/-/browsers-2.13.2.tgz",
      "integrity": "sha512-5EUZSUIc37H6aIXyWO0Z4y8NlF8NnjgmqeQgOGiswAU7pY0HOo16ho4+alIWmSfdZnjqBRawMsP3I5YqLSn6kw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "debug": "^4.4.3",
        "extract-zip": "^2.0.1",
        "progress": "^2.0.3",
        "proxy-agent": "^6.5.0",
        "semver": "^7.7.4",
        "tar-fs": "^3.1.1",
        "yargs": "^17.7.2"
      },
      "bin": {
        "browsers": "lib/cjs/main-cli.js"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/cliui": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.1",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@puppeteer/browsers/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/yargs": {
      "version": "17.7.3",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.3.tgz",
      "integrity": "sha512-GZtjxm/J/4TSxuL3FNYjCmLktBTnIw/rVmKSIyKeYAZpmJB2ig9VauCC5xsa82GNKVKDAqpOn3KVzNt0zmrU0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^8.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.3",
        "y18n": "^5.0.5",
        "yargs-parser": "^21.1.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@puppeteer/browsers/node_modules/yargs-parser": {
      "version": "21.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@rolldown/binding-android-arm-eabi": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm-eabi/-/binding-android-arm-eabi-1.2.13.tgz",
      "integrity": "sha512-Vu/NICrgdRvUOeaJZIyB2FP63s6fO/4ud5l8dXmxDx9yDyn+mN0y+gsvsVviSli+T361Aqo0h46EuMoobrwawA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.2.13.tgz",
      "integrity": "sha512-6LEoIrGy5vvCd2boNnv2soPSUZj/PRvhp8R/t9KlX+mIZxThIE/ZqxrGXxmuNX0FuvQFvLdZr7S4HrYpYBVhEQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.2.13.tgz",
      "integrity": "sha512-CaJSRzlQ6Q+zkDMVA9OkVxBjVoPRCDEE3v0FSJ9kIQBgRjFApA3Si4ijhbNVUji7ZJt+PfO0e46qy4nPInHUPA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.2.13.tgz",
      "integrity": "sha512-e4r340I5hxSzJkD3YJBxgzq/rJ3wwxwdLLb2FPt1Zpyem20nrQPT11DDEEkazwxaHumH8wpglsp/Ozgj/wT6mw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.2.13.tgz",
      "integrity": "sha512-hoBWDZ4/K/mJKVMbsgUd1jfpA2DiOrJ54mpegObU9TBHBBrtX4FLIXJJQRDPZ/2Dn91GvPob+Z2hwKJzf4E5SQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.2.13.tgz",
      "integrity": "sha512-oF9fZu3vTWnTiVAkDFxU9PJLt1nh20K9RRpuHsR7ZnE2L7XookBbDBVLojCVSLGbvtSlxeUNnjAj6DbNsKyzbg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.2.13.tgz",
      "integrity": "sha512-DTpb/+jMiqWMPgphn4ksW1zW+XLJ6dJJ9FMvnIk9I291LhCctMPhMYJrP5t9p6C9qa3KXadDdUEZHBaPh3kNxQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.2.13.tgz",
      "integrity": "sha512-xU+Kvv9N2A3SY35zFh1FWWNjxbadE/BKeqnkXe7vScU4GZsw757BlVmDLITZEq8DPpk6m7uoDYkK7P+x/uU5Ow==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.2.13.tgz",
      "integrity": "sha512-XMk/hnhh25oQ756Lclb1Q11h4ll0xC0Esa5w4Vzp+mAE2S3AGJgeM0SonrIgY8fHhjarb6hcoTuwoFG0VVP2ig==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.2.13.tgz",
      "integrity": "sha512-U1BoTHYmlywE2n3HUWjzZ+8EQsKr+OwpxYuDWaubx42tUL8QSL7nOqRz/NVHanibbFP3M1Rxuprz/wNcbMKjqw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.2.13.tgz",
      "integrity": "sha512-J4cm80Pc6wEwV5AZ42o62sIQgDk+Y7R2s646jIwuvO+4V46QB58N4vVuMPWCBaNgursXLpmUWJV//WQAkPvHBQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.2.13.tgz",
      "integrity": "sha512-W0euZS40U4V6JkmEnVCIX9mcsL6cbXQ4X8c2w+MMOIjFg68TXUW+u3RT+2e1t1pv9mg/EP3pDtK3POXdQ7Rxyw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.2.13.tgz",
      "integrity": "sha512-do/AF/4n9MRshia3a5aXoy8xM2c6mgfT6D7H/dY6my5z+hfCIR4ab7mk4IRj++nsEQpKy39kd0DQnDq+r692tw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.2.13.tgz",
      "integrity": "sha512-6FtUf2cJZobutJdxnGYX8z0vtbgqU0b2v8vfBhkXb9wp2MppMFtkunE+IaOntyi01rkIQoPW2GHABtfzsC0BRQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.2.13.tgz",
      "integrity": "sha512-UKhFaZTeTcbKrb3iU82m17jVcPEAoqDkCN5MBqgPyZSwp/cQmib21crTS0DdH7T1B7wZRWEI89YQAOJMet5yhg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "peer": true,
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@sentry-internal/tracing": {
      "version": "7.120.4",
      "resolved": "https://registry.npmjs.org/@sentry-internal/tracing/-/tracing-7.120.4.tgz",
      "integrity": "sha512-Fz5+4XCg3akeoFK+K7g+d7HqGMjmnLoY2eJlpONJmaeT9pXY7yfUyXKZMmMajdE2LxxKJgQ2YKvSCaGVamTjHw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sentry/core": "7.120.4",
        "@sentry/types": "7.120.4",
        "@sentry/utils": "7.120.4"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@sentry/core": {
      "version": "7.120.4",
      "resolved": "https://registry.npmjs.org/@sentry/core/-/core-7.120.4.tgz",
      "integrity": "sha512-TXu3Q5kKiq8db9OXGkWyXUbIxMMuttB5vJ031yolOl5T/B69JRyAoKuojLBjRv1XX583gS1rSSoX8YXX7ATFGA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sentry/types": "7.120.4",
        "@sentry/utils": "7.120.4"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@sentry/integrations": {
      "version": "7.120.4",
      "resolved": "https://registry.npmjs.org/@sentry/integrations/-/integrations-7.120.4.tgz",
      "integrity": "sha512-kkBTLk053XlhDCg7OkBQTIMF4puqFibeRO3E3YiVc4PGLnocXMaVpOSCkMqAc1k1kZ09UgGi8DxfQhnFEjUkpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sentry/core": "7.120.4",
        "@sentry/types": "7.120.4",
        "@sentry/utils": "7.120.4",
        "localforage": "^1.8.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@sentry/node": {
      "version": "7.120.4",
      "resolved": "https://registry.npmjs.org/@sentry/node/-/node-7.120.4.tgz",
      "integrity": "sha512-qq3wZAXXj2SRWhqErnGCSJKUhPSlZ+RGnCZjhfjHpP49KNpcd9YdPTIUsFMgeyjdh6Ew6aVCv23g1hTP0CHpYw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sentry-internal/tracing": "7.120.4",
        "@sentry/core": "7.120.4",
        "@sentry/integrations": "7.120.4",
        "@sentry/types": "7.120.4",
        "@sentry/utils": "7.120.4"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@sentry/types": {
      "version": "7.120.4",
      "resolved": "https://registry.npmjs.org/@sentry/types/-/types-7.120.4.tgz",
      "integrity": "sha512-cUq2hSSe6/qrU6oZsEP4InMI5VVdD86aypE+ENrQ6eZEVLTCYm1w6XhW1NvIu3UuWh7gZec4a9J7AFpYxki88Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@sentry/utils": {
      "version": "7.120.4",
      "resolved": "https://registry.npmjs.org/@sentry/utils/-/utils-7.120.4.tgz",
      "integrity": "sha512-zCKpyDIWKHwtervNK2ZlaK8mMV7gVUijAgFeJStH+CU/imcdquizV3pFLlSQYRswG+Lbyd6CT/LGRh3IbtkCFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sentry/types": "7.120.4"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.23",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.23.tgz",
      "integrity": "sha512-5lSsMOTXURePglDfvuAQUqkGek9Hg2kksOYay2m0+XR++b2NWYL/4sWyuvVBIs8oKnJaxkdi9whaL/sqN13afw==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.18.tgz",
      "integrity": "sha512-DoR7U1P7iYhw16qJ49fgXUlry1t4CpXeErJHnQ44JgTSKMaZUdf17cfn5mHchfJ4KRBZRFA/Coo+MUF5+gOaCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.6.1",
        "lightningcss": "1.30.2",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.18.tgz",
      "integrity": "sha512-EgCR5tTS5bUSKQgzeMClT6iCY3ToqE1y+ZB0AKldj809QXk1Y+3jB0upOYZrn9aGIzPtUsP7sX4QQ4XtjBB95A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-x64": "4.1.18",
        "@tailwindcss/oxide-freebsd-x64": "4.1.18",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.18",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.18",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.18",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.18",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.18.tgz",
      "integrity": "sha512-dJHz7+Ugr9U/diKJA0W6N/6/cjI+ZTAoxPf9Iz9BFRF2GzEX8IvXxFIi/dZBloVJX/MZGvRuFA9rqwdiIEZQ0Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.18.tgz",
      "integrity": "sha512-Gc2q4Qhs660bhjyBSKgq6BYvwDz4G+BuyJ5H1xfhmDR3D8HnHCmT/BSkvSL0vQLy/nkMLY20PQ2OoYMO15Jd0A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.18.tgz",
      "integrity": "sha512-FL5oxr2xQsFrc3X9o1fjHKBYBMD1QZNyc1Xzw/h5Qu4XnEBi3dZn96HcHm41c/euGV+GRiXFfh2hUCyKi/e+yw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.18.tgz",
      "integrity": "sha512-Fj+RHgu5bDodmV1dM9yAxlfJwkkWvLiRjbhuO2LEtwtlYlBgiAT4x/j5wQr1tC3SANAgD+0YcmWVrj8R9trVMA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.18.tgz",
      "integrity": "sha512-Fp+Wzk/Ws4dZn+LV2Nqx3IilnhH51YZoRaYHQsVq3RQvEl+71VGKFpkfHrLM/Li+kt5c0DJe/bHXK1eHgDmdiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.18.tgz",
      "integrity": "sha512-S0n3jboLysNbh55Vrt7pk9wgpyTTPD0fdQeh7wQfMqLPM/Hrxi+dVsLsPrycQjGKEQk85Kgbx+6+QnYNiHalnw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.18.tgz",
      "integrity": "sha512-1px92582HkPQlaaCkdRcio71p8bc8i/ap5807tPRDK/uw953cauQBT8c5tVGkOwrHMfc2Yh6UuxaH4vtTjGvHg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.18.tgz",
      "integrity": "sha512-v3gyT0ivkfBLoZGF9LyHmts0Isc8jHZyVcbzio6Wpzifg/+5ZJpDiRiUhDLkcr7f/r38SWNe7ucxmGW3j3Kb/g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.18.tgz",
      "integrity": "sha512-bhJ2y2OQNlcRwwgOAGMY0xTFStt4/wyU6pvI6LSuZpRgKQwxTec0/3Scu91O8ir7qCR3AuepQKLU/kX99FouqQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.18.tgz",
      "integrity": "sha512-LffYTvPjODiP6PT16oNeUQJzNVyJl1cjIebq/rWWBF+3eDst5JGEFSc5cWxyRCJ0Mxl+KyIkqRxk1XPEs9x8TA==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.1.0",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.18.tgz",
      "integrity": "sha512-HjSA7mr9HmC8fu6bdsZvZ+dhjyGCLdotjVOgLA2vEqxEBZaQo9YTX4kwgEvPCpRh8o4uWc4J/wEoFzhEmjvPbA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.18.tgz",
      "integrity": "sha512-bJWbyYpUlqamC8dpR7pfjA0I7vdF6t5VpUGMWRkXVE3AXgIZjYUYAK7II1GNaxR8J1SSrSrppRar8G++JekE3Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.1.18.tgz",
      "integrity": "sha512-Ce0GFnzAOuPyfV5SxjXGn0CubwGcuDB0zcdaPuCSzAa/2vII24JTkH+I6jcbXLb1ctjZMZZI6OjDaLPJQL1S0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.1.18",
        "@tailwindcss/oxide": "4.1.18",
        "postcss": "^8.4.41",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tootallnate/quickjs-emscripten": {
      "version": "0.23.0",
      "resolved": "https://registry.npmjs.org/@tootallnate/quickjs-emscripten/-/quickjs-emscripten-0.23.0.tgz",
      "integrity": "sha512-C5Mc6rdnsaJDjO3UpGW/CQTHtCKaYlScZTly4JIu97Jxo/odCiH0ITnDXSJPTOrEKk/ycSZ0AOgTmkDtkOsvIA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.4",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.4.tgz",
      "integrity": "sha512-W3c4gRigFS0T/Ma4qIYF3GDAc5AQdHb1yL5znJT1Zv1YaD9Kitx656wBjvr19qbiosmZT8lWDM5BEMynUqX65A==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/chai": {
      "version": "5.2.3",
      "resolved": "https://registry.npmjs.org/@types/chai/-/chai-5.2.3.tgz",
      "integrity": "sha512-Mw558oeA9fFbv65/y4mHtXDs9bPnFMZAL/jxdPFUpOHHIXX91mcgEHbS5Lahr+pwZFR8A7GQleRWeI6cGFC2UA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/deep-eql": "*",
        "assertion-error": "^2.0.1"
      }
    },
    "node_modules/@types/debug": {
      "version": "4.1.13",
      "resolved": "https://registry.npmjs.org/@types/debug/-/debug-4.1.13.tgz",
      "integrity": "sha512-KSVgmQmzMwPlmtljOomayoR89W4FynCAi3E8PPs7vmDVPe84hT+vGPKkJfThkmXs0x0jAaa9U8uW8bbfyS2fWw==",
      "license": "MIT",
      "dependencies": {
        "@types/ms": "*"
      }
    },
    "node_modules/@types/deep-eql": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@types/deep-eql/-/deep-eql-4.0.2.tgz",
      "integrity": "sha512-c9h9dVVMigMPc4bwTvC5dxqtqJZwQPePsWjPlpSOnojbor6pGqdk541lfA7AqFQr5pB1BRdq0juY9db81BwyFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "license": "MIT"
    },
    "node_modules/@types/estree-jsx": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@types/estree-jsx/-/estree-jsx-1.0.5.tgz",
      "integrity": "sha512-52CcUVNFyfb1A2ALocQw/Dd1BQFNmSdkuC3BkZ6iqhdMfQz7JWOFRuJFloOzjk+6WijU56m9oKXFAXc7o3Towg==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "*"
      }
    },
    "node_modules/@types/hast": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@types/hast/-/hast-3.0.5.tgz",
      "integrity": "sha512-rp/ezSWaD1m44dPKICGhiskI13nVr7qTloFwDa/IYkhhf5nzwP+zIQcIJh3WIFSBOy/H1PzB40jPjMDksN4F+g==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/mdast": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/@types/mdast/-/mdast-4.0.4.tgz",
      "integrity": "sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/mdx": {
      "version": "2.0.14",
      "resolved": "https://registry.npmjs.org/@types/mdx/-/mdx-2.0.14.tgz",
      "integrity": "sha512-T48PeuJtvLosNTPVhfnIp3i/n3a4g4Bad7YCq5k64D4u7NwDrAotikQ+5+sjtUvBmxCMlbo3dVL+C2dP0rWHzg==",
      "license": "MIT"
    },
    "node_modules/@types/ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@types/ms/-/ms-2.1.0.tgz",
      "integrity": "sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==",
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "24.10.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-24.10.1.tgz",
      "integrity": "sha512-GNWcUTRBgIRJD5zj+Tq0fKOJ5XZajIiBroOF0yvj2bSU1WvNdYS/dn9UxwsujGW4JX06dnHyjV2y9rRaybH0iQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.16.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.7.tgz",
      "integrity": "sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==",
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/unist": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-3.0.3.tgz",
      "integrity": "sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==",
      "license": "MIT"
    },
    "node_modules/@types/yauzl": {
      "version": "2.10.3",
      "resolved": "https://registry.npmjs.org/@types/yauzl/-/yauzl-2.10.3.tgz",
      "integrity": "sha512-oJoftv0LSuaDZE3Le4DbKX+KS9G36NzOeSap90UIK0yMA/NhKJhqlSGtNDORNRaIbQfzjXDrQa0ytJ6mNRGz/Q==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.71.1.tgz",
      "integrity": "sha512-nNlBf6HuotqMgZvSkWD5hNdemiBIxQ2NmrlgfcUIeZRs+BbakjscCQRq/Hb74EFVnFiSWWdL12JruqwBy3ERDw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.12.2",
        "@typescript-eslint/scope-manager": "8.71.1",
        "@typescript-eslint/type-utils": "8.71.1",
        "@typescript-eslint/utils": "8.71.1",
        "@typescript-eslint/visitor-keys": "8.71.1",
        "ignore": "^7.0.5",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.71.1",
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.12",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.12.tgz",
      "integrity": "sha512-/8UvqAPU9DGTI9k4mxtf49U37Isfwr8Uts96+SBHIkFxPJnHS0Ew4f00sM4Scd8V8EjM0jUNtVDdv1kPdt35lg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.71.1.tgz",
      "integrity": "sha512-oM/5sAqz/l1v/zYK1qTOPrn2+JIrBGC1V6uNYucRO5gh6eT9vWJ/RhPbGE59byvZEUQ4VP6XkLBaS5Jti5jpvw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.71.1",
        "@typescript-eslint/types": "8.71.1",
        "@typescript-eslint/typescript-estree": "8.71.1",
        "@typescript-eslint/visitor-keys": "8.71.1",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.71.1.tgz",
      "integrity": "sha512-Oijc9RUsohHjncg6iGi7gCtjnEjYt9FWv9u6ygK8uKcHK5eLjLAkqERQ9BaytbpceOFdk6kifPCS/zAZE+A99g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.71.1",
        "@typescript-eslint/types": "^8.71.1",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.71.1.tgz",
      "integrity": "sha512-1YUDZXdTnXLlob03SFHBipdyMBsDVm7zoSz0ytTJ39dk5J1TgsTK03VlR/dLXG/RLLUrPcYbD4rp23BmHxHP0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.71.1",
        "@typescript-eslint/visitor-keys": "8.71.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.71.1.tgz",
      "integrity": "sha512-oTvkml5SxXhgg+WWKhod5qWQICDXtOB+/Hi9VdPKFAANJ2b7YOgMffgvzXuqog7R6A/JtrzRf128dsxummyWhg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.71.1.tgz",
      "integrity": "sha512-kH3t3jZCYv2PZSBEWPKTariLrCaoF1CLoPitYFBJOhAGEwWnSRAtGEifrfrpBa4K9JlwWNZotgA5w3/wLSk/FQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.71.1",
        "@typescript-eslint/typescript-estree": "8.71.1",
        "@typescript-eslint/utils": "8.71.1",
        "debug": "^4.4.3",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.71.1.tgz",
      "integrity": "sha512-ybYnPTUwg3VQQOFEiBPLs8Jxl1ry2vXdn1kVKguomBbvxpetdu3MKTNDqFNUrlG8ylP9MpZosmXMFYlGQHk1oQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.71.1.tgz",
      "integrity": "sha512-pSKSEK1JJpHs6KiKVtABCE4iJK5d7FLFzDXQNBQ2oRY7LEd3UwOt3TZemTgu9syTIf56dJWlTn/pdmrO9oKUXQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.71.1",
        "@typescript-eslint/tsconfig-utils": "8.71.1",
        "@typescript-eslint/types": "8.71.1",
        "@typescript-eslint/visitor-keys": "8.71.1",
        "debug": "^4.4.3",
        "minimatch": "^10.2.2",
        "semver": "^7.7.3",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "5.0.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.12.tgz",
      "integrity": "sha512-YovQ3rzhaLMIrDjNDMkNS01tea93qhEhG5xy8f6+R0l+dw3Ki+5sCoIoI942iuLZTHWogWktgwVDhU09iNEimQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "10.2.6",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.6.tgz",
      "integrity": "sha512-vpLQEs+VLCr1nU0BXS07maYoFwlDAH0gngQuuttxIwutDFEMHq2blX+8vpgxDdK3J1PwjCJiep77OitTZ4Ll1A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.8"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.71.1.tgz",
      "integrity": "sha512-CBjT6gfAz3DW2j9Q4moFnqt208Aq+506sVGXfpRcyAeqn0EpayL0mjdWoCO2t3RC7GewNrFxdeehuEaPg6DMzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.9.1",
        "@typescript-eslint/scope-manager": "8.71.1",
        "@typescript-eslint/types": "8.71.1",
        "@typescript-eslint/typescript-estree": "8.71.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.71.1.tgz",
      "integrity": "sha512-0GxiUGqMU0qXJt58cBsiG3DP8lUmBaFo2vChtUX+CT7PnR3v/VGLLrzVP4K9r1lNiZXjHYefMBbPunplr09v6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.71.1",
        "eslint-visitor-keys": "^5.0.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.4.0.tgz",
      "integrity": "sha512-1mEZtMKPM09vDmQt5y7YvmN2+DFTP7Tg0EWXdic8/C6VRnpb33e4ghisCIE3WZjsE2N8mf+QV1Zqh7ZFYLWInQ==",
      "license": "ISC"
    },
    "node_modules/@unrs/resolver-binding-android-arm-eabi": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.12.2.tgz",
      "integrity": "sha512-g5T90pqg1bo/7mytQx6F4iBNC0Wsh9cu+z9veDbFjc7HjpesJFWD7QMS0NGStXM075+7dJPPVvBbpZlnrdpi/w==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-android-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.12.2.tgz",
      "integrity": "sha512-YGCRZv/9GLhwmz6mYDeTsm/92BAyR28l6c2ReweVW5pWgfsitWLY8upvfRlGdoyD8HjeTHSYJWyZGD4KJA/nFQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.12.2.tgz",
      "integrity": "sha512-u9DiNT1auQMO20A9SyTuG3wUgQWB9Z7KjAg0uFuCDR1FsAY8A0CG2S6JpHS1xwm/w1G08bjXZDcyOCjv1WAm2w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-x64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.12.2.tgz",
      "integrity": "sha512-f7rPLi/T1HVKZu/u6t87lroib16n8vrSzcyxI7lg4BGO9UF26KhQL44sd9eOUgrTYhvRXtWOIZT5PejdPyJfUA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-freebsd-x64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.12.2.tgz",
      "integrity": "sha512-BpcOjWCJub6nRZUS2zA20pmLvjtqAtGejETaIyRLiZiQf++cbrjltLA5NN/xaXfqeOBOSlMFbemIl5/S5tljmg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.12.2.tgz",
      "integrity": "sha512-vZTDvdSISZjJx66OzJqtsOhzifbqRjbmI1Mnu49fQDwog5GtDI4QidRiEAYbZCRj9C8YZEW+3ZjqsyS9GR4k2A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.12.2.tgz",
      "integrity": "sha512-BiPI+IrIlwcW4nLLMM21+B1dFPzd55yAVgVGrdgDjNef+ch03GdxrcyaIz8X9SsQirh/kCQ7mviyWlMxdh2D7g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.12.2.tgz",
      "integrity": "sha512-zJc0H99FEPoFfSrNpa91HYfxzfAJCr502oxNK1cfdC9hlaFI43RT+JFCann9JUgZmLzzntChHyn13Sgn9ljHNg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.12.2.tgz",
      "integrity": "sha512-KQ3Lki6l+Pz1k/eBipN41ES+YUK30beLGb9YqcB1O542cyLCNE6GaxrfcY3T6EezmGGk84wb5XyO9loTM9tkcA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-loong64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-loong64-gnu/-/resolver-binding-linux-loong64-gnu-1.12.2.tgz",
      "integrity": "sha512-3SJGEh1DborhG6pyxvhPzCT4bbSIVihsvgJc13P1bHG7KLdNDaF9T3gsTwFc7Jw/5Y5/iWOjkEx7Zy0NvCGX3Q==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-loong64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-loong64-musl/-/resolver-binding-linux-loong64-musl-1.12.2.tgz",
      "integrity": "sha512-jiuG/Obbel7uw1PwHNFfrkiKhLAF6mnyZ6aWlOAVN9WqKm8v0OFGnciJIHu8+CMvXLQ8AD51LPzAoUfT21D5Ew==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.12.2.tgz",
      "integrity": "sha512-q7xRvVpmcfeL+LlZg8Pbbo6QaTZwDU5BaGZbwfhkEsXJn3Was8xYfE0RBH266xZt0rM6B7i8xAYIvjthuUIWHg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.12.2.tgz",
      "integrity": "sha512-0CVdx6lcnT3Q9inOH8tsMIOJ6ImndllMjqJHg8RLVdB7Vq4SfkEXl9mCSsVNuNA4MCYycRicCUxPCabVHJRr6A==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.12.2.tgz",
      "integrity": "sha512-iOwlRo9vnp6R6ohHQS11n0NnfdXx/omhkocmIfaPRpQhKZ+3BDMkkdRVh53qjkFkpPddf+FETA28NwGN7l5l+w==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.12.2.tgz",
      "integrity": "sha512-HYJtLfXq94q8iZNFT1lknx258wlkkWhZeUXJRqzKBBUJ00CvZ+N33zgbCqimLjsyw5Va6uUxhVa12mI+kaveEw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.12.2.tgz",
      "integrity": "sha512-mPsUhunKKDih5O96Y6enDQyHc1SqBPlY1E/SfMWDM3EdJ95Z9CArPeCVwCCqbP45ljvivdEk8Fxn+SIb1rDAJQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.12.2.tgz",
      "integrity": "sha512-azrt6+5ydLd8Vt210AAFis/lZevSfPw93EJRIJG+xPu4WCJ8K0kppCTpMyLPcKT7H15M4Jnt2tMp5bOvCkRC6A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-openharmony-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-openharmony-arm64/-/resolver-binding-openharmony-arm64-1.12.2.tgz",
      "integrity": "sha512-YZ9hP4O0X9PQb8eO980qmLNGH4zT3I9+SZTdt0Pr0YyuGQhYKoOZkV02VzrzyOZJ5xIJ3UFIenKkUkGg8GjgWQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.12.2.tgz",
      "integrity": "sha512-tYFDIkMxSflfEc/h92ZWNsZlHSwgimbNHSO3PL2JWQHfCuC2q316jMyYU9TIWZsFK2bQwyK5VAdYgn8ygPj69A==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.10.0",
        "@emnapi/runtime": "1.10.0",
        "@napi-rs/wasm-runtime": "^1.1.4"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi/node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.12.2.tgz",
      "integrity": "sha512-qzNyg3xL0VPQmCaUh+N5jSitce6k+uCBfMDesWRnlULOZaqUkaJ0ybdT+UqlAWJoQjuqfIU/0Ptx9bteN4D82g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.12.2.tgz",
      "integrity": "sha512-WD9sY00OfpHVGfsnHZoA8jVT+esS/Bg8z8jzxp5BnDCjjwsuKsPQrzswwpFy4J1AUJbXPRfkpcX0mXrzeXW79g==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.12.2.tgz",
      "integrity": "sha512-nAB74NfSNKknqQ1RrYj6uz8FcXEomu/MATJZxh/x+BArzN2U3JbOYC0APYzUIGhVY3m5hRxA8VPNdPBoG8txlA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@vitest/mocker": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/@vitest/mocker/-/mocker-5.0.3.tgz",
      "integrity": "sha512-T8sWAIbkSyAjkwTcaEc3Iu0o9A27X1/kdXrizhZkGuSKScRQtRzclfAMpOTcGdXCsqxeWlpGy3XjqaW8CpLORg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.31",
        "@vitest/spy": "5.0.3",
        "estree-walker": "^3.0.3",
        "magic-string": "^1.2.3"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "msw": "^2.4.9",
        "vite": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "msw": {
          "optional": true
        },
        "vite": {
          "optional": true
        }
      }
    },
    "node_modules/@vitest/mocker/node_modules/magic-string": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-1.4.3.tgz",
      "integrity": "sha512-z12OxmaPGE0F4xlpGdjuAUckipLpQlTAuAmyGhNoD7ODpYUzvDfvtxUbjM/jwznyP178oju/KDdyi220wNJ0RQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.6.0"
      }
    },
    "node_modules/@vitest/spy": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-5.0.3.tgz",
      "integrity": "sha512-XhFysQTB8AZ+P4gMi+Lpo99vg2AZi0qKpaB9yXQl37+CaMEAPO3iH/wGVnSyL5MPERiLezpqTVtrR6UZH5GCXg==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/accepts/node_modules/negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/acorn": {
      "version": "8.19.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.19.0.tgz",
      "integrity": "sha512-oJlA3XiRm7Cyk6qFD2Jn8ak9B7jSy0qy00ADO3+8dpT0LSjFihQYv4C02LFCSYJV3Q37xYwwRy5m+IpIiUzqWw==",
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/agent-base": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz",
      "integrity": "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-colors": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.3.tgz",
      "integrity": "sha512-/6w/C21Pm1A7aZitlI5Ni/2J6FFQN8i1Cvz3kHABAAbw93v/NlvKdVOqz7CCWz/3iv/JplRSEEZ83XION15ovw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-escapes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
      "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ansi-regex": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.1.tgz",
      "integrity": "sha512-ILlv4k/3f6vfQ4OoP2AGvirOktlQ98ZEL1k9FaQjxa3L1abBgbuTDAdPOpvbGncC0BTVQrl+OM8xZGK6tWXt7g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "license": "MIT",
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/array-includes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.2.0.tgz",
      "integrity": "sha512-VXY5eFRarnXcYxwBjJzPmEhH55+rmP79/+ueDhi0F+TuqfHCItagIHqxeUZrmgrOPa31QTh9H85DjX3FfJ0FTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-object-atoms": "^1.1.2",
        "es-shim-unscopables": "^1.1.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.6.tgz",
      "integrity": "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-shim-unscopables": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/assertion-error": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-2.0.1.tgz",
      "integrity": "sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/ast-types": {
      "version": "0.13.4",
      "resolved": "https://registry.npmjs.org/ast-types/-/ast-types-0.13.4.tgz",
      "integrity": "sha512-x1FCFnFifvYDDzTaLII71vG5uvDwgtmDTEVWAxrgeiR8VjMONcCXJx7E+USjDtHlwFmt9MysbqgF9b9Vjr6w+w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/astring": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/astring/-/astring-1.9.0.tgz",
      "integrity": "sha512-LElXdjswlqjWrPpJFg1Fx4wpkOCxj1TDHlSV4PlaRxHGWko024xICaa97ZkMfs6DRKlCguiAI+rbXv5GWwXIkg==",
      "license": "MIT",
      "bin": {
        "astring": "bin/astring"
      }
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.14.0",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.14.0.tgz",
      "integrity": "sha512-9WTZxEjsZ7b13TH8JPmbV2z8CHbl80/2hm3XPEG4JgNdQLK81IBRXmSxHfMAOkSqQeRxT/0dwNDz2GOm3zzpcQ==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/bail": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/bail/-/bail-2.0.2.tgz",
      "integrity": "sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/bare-events": {
      "version": "2.9.2",
      "resolved": "https://registry.npmjs.org/bare-events/-/bare-events-2.9.2.tgz",
      "integrity": "sha512-AIPKioV7/Y/8KfZ3AAhjPJxLLbY49S64Ym5DakZlUg75qQiTgUq9hEJoEwa4eUezPUlXRy/i5NpsKvo9jgKmoA==",
      "dev": true,
      "license": "Apache-2.0",
      "peerDependencies": {
        "bare-abort-controller": "*"
      },
      "peerDependenciesMeta": {
        "bare-abort-controller": {
          "optional": true
        }
      }
    },
    "node_modules/bare-fs": {
      "version": "4.8.4",
      "resolved": "https://registry.npmjs.org/bare-fs/-/bare-fs-4.8.4.tgz",
      "integrity": "sha512-MPC2eyrpbk3A873sK4y6rk+Iv4o2enxTjHZ8zH3HO0mjrpm5XjnguY2XmfidIsDV6vnjpbMBKUAJpV0ISD2SsQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "bare-events": "^2.5.4",
        "bare-path": "^3.0.0",
        "bare-stream": "^2.6.4",
        "bare-url": "^2.2.2",
        "fast-fifo": "^1.3.2"
      },
      "engines": {
        "bare": ">=1.28.0"
      },
      "peerDependencies": {
        "bare-buffer": "*"
      },
      "peerDependenciesMeta": {
        "bare-buffer": {
          "optional": true
        }
      }
    },
    "node_modules/bare-path": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bare-path/-/bare-path-3.1.2.tgz",
      "integrity": "sha512-ZyKbsuuqK6Ag0K8pX6V5Txq6XeJRvY+wXucnFGRjiyVYP9YWDpIQugk/b+enRYrEYBJaqLzghRQpXPMR7341Nw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/bare-stream": {
      "version": "2.13.4",
      "resolved": "https://registry.npmjs.org/bare-stream/-/bare-stream-2.13.4.tgz",
      "integrity": "sha512-PcrQ8lVLbiJscNm1Kez+Yp4Gy4AHGcN1lzwjvf5NybWen7VvEgUfyfnXYJ2zNqWnzOfCb1Abq6lH8ti0syQszA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "b4a": "^1.8.1",
        "streamx": "^2.25.0",
        "teex": "^1.0.1"
      },
      "peerDependencies": {
        "bare-abort-controller": "*",
        "bare-buffer": "*",
        "bare-events": "*"
      },
      "peerDependenciesMeta": {
        "bare-abort-controller": {
          "optional": true
        },
        "bare-buffer": {
          "optional": true
        },
        "bare-events": {
          "optional": true
        }
      }
    },
    "node_modules/bare-stream/node_modules/b4a": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/b4a/-/b4a-1.9.0.tgz",
      "integrity": "sha512-dpfcF9fDNR6++cthXR67iyhgqWy9CBouAvIWhIntzBG6cvK/cnIPiZQjBwi/ZqjjBEDGfoNDtmB0kTjroOJ3pQ==",
      "dev": true,
      "license": "Apache-2.0",
      "peerDependencies": {
        "react-native-b4a": "*"
      },
      "peerDependenciesMeta": {
        "react-native-b4a": {
          "optional": true
        }
      }
    },
    "node_modules/bare-url": {
      "version": "2.5.4",
      "resolved": "https://registry.npmjs.org/bare-url/-/bare-url-2.5.4.tgz",
      "integrity": "sha512-Gxa7UVWBr0/edU1b+TJhn/AZvMQUj9OGspvYsaTYQrAbZA4BOTZGL3LiZxvD+CeMlDH4juwD84+eTAp/bLYW5g==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "bare-path": "^3.0.0"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.11.28",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.11.28.tgz",
      "integrity": "sha512-br0LOmjJqr6Rt4AEkadbcNf67Zpo7EPwKsWbjnRrJIa1QYFHQBqM4C7F2WTbV8ahTEcg1Eo+Y0aWjjORInYFyA==",
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/basic-ftp": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/basic-ftp/-/basic-ftp-5.3.1.tgz",
      "integrity": "sha512-bopVNp6ugyA150DDuZfPFdt1KZ5a94ZDiwX4hMgZDzF+GttD80lEy8kj98kbyhLXnPvhtIo93mdnLIjpCAeeOw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/body-parser": {
      "version": "1.20.8",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.8.tgz",
      "integrity": "sha512-JNcyFQ64OiijEkPzUBTCe+hyPXUD/3LEldGQ6iF5LR1w00mx9o7xtDWHXBY2iItjdCFGoilOLNQbH943ut7pHA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "content-type": "~1.0.5",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "~1.2.0",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.4.24",
        "on-finished": "~2.4.1",
        "qs": "~6.16.0",
        "raw-body": "~2.5.3",
        "type-is": "~1.6.18",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/body-parser/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/body-parser/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/brace-expansion": {
      "version": "1.1.21",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.21.tgz",
      "integrity": "sha512-9zeA+KLZNNzglF2TPKRQEDyx6Yby7daAkuy8MiPzpXPsYDWi/DRM8jmwUDxokQjYqBpv5DgPiwD4h4ZZSy1Ujw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.29.3",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.29.3.tgz",
      "integrity": "sha512-1R4kiYKXGViqEN0CnoDrXc1StD9niAwu+j2dukWzrD4bJgsD4lDmEp0CRbc6E/vYJIfTHwPmwyaKtVSudICdPA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.11.26",
        "caniuse-lite": "^1.0.30001813",
        "electron-to-chromium": "^1.5.439",
        "node-releases": "^2.0.57",
        "update-browserslist-db": "^1.3.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/buffer-crc32": {
      "version": "0.2.13",
      "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
      "integrity": "sha512-VO9Ht/+p3SN7SKWqcrgEzjGbRSJYTx+Q1pTQC0wrWqHx0vpJraQ6GtHx8tvcg1rlK1byhU5gccxgOgj7B0TDkQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.9.tgz",
      "integrity": "sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "get-intrinsic": "^1.3.0",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001815",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001815.tgz",
      "integrity": "sha512-uDybUEyfgbyJJ93J1vikTylBX31AkdVYeVPeffMQpf8XN7hSfr0oZOn4VFOIMNvtU5+rHvC5Udg2TgtJKHm23Q==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/ccount": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/ccount/-/ccount-2.0.1.tgz",
      "integrity": "sha512-eyrF0jiFpY+3drT6383f1qhkbGsLSifNAjA61IUjZjmLCWjItY6LB9ft9YhoDgwfmclB2zhu51Lc7+95b8NRAg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/chai": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/chai/-/chai-6.3.0.tgz",
      "integrity": "sha512-XWAtwJ6OHO+tj0EKCs0Y2UamnyOxseZWltU4x2U2wh8g4AigdjwvtUjvLP2tqkA/avxHEtzxNaqGq/YGNwckKg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/character-entities": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/character-entities/-/character-entities-2.0.2.tgz",
      "integrity": "sha512-shx7oQ0Awen/BRIdkjkvz54PnEEI/EjwXDSIZp86/KKdbafHh1Df/RYGBhn4hbe2+uKC9FnT5UCEdyPz3ai9hQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-entities-html4": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/character-entities-html4/-/character-entities-html4-2.1.0.tgz",
      "integrity": "sha512-1v7fgQRj6hnSwFpq1Eu0ynr/CDEw0rXo2B61qXrLNdHZmPKgb7fqS1a2JwF0rISo9q77jDI8VMEHoApn8qDoZA==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-entities-legacy": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/character-entities-legacy/-/character-entities-legacy-3.0.0.tgz",
      "integrity": "sha512-RpPp0asT/6ufRm//AJVwpViZbGM/MkjQFxJccQRHmISF/22NBtsHqAWmL+/pmkPWoIUJdWyeVleTl1wydHATVQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-reference-invalid": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/character-reference-invalid/-/character-reference-invalid-2.0.1.tgz",
      "integrity": "sha512-iBZ4F4wRbyORVsu0jPV7gXkOsGYjGHPmAyv+HiHG8gi5PtC9KI2j1+v8/tlibRvjoWX027ypmG/n0HtO5t7unw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/chardet": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
      "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/chrome-launcher": {
      "version": "0.13.4",
      "resolved": "https://registry.npmjs.org/chrome-launcher/-/chrome-launcher-0.13.4.tgz",
      "integrity": "sha512-nnzXiDbGKjDSK6t2I+35OAPBy5Pw/39bgkb/ZAFwMhwJbdYBp6aH+vW28ZgtjdU890Q7D+3wN/tB8N66q5Gi2A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/node": "*",
        "escape-string-regexp": "^1.0.5",
        "is-wsl": "^2.2.0",
        "lighthouse-logger": "^1.0.0",
        "mkdirp": "^0.5.3",
        "rimraf": "^3.0.2"
      }
    },
    "node_modules/chromium-bidi": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/chromium-bidi/-/chromium-bidi-14.0.0.tgz",
      "integrity": "sha512-9gYlLtS6tStdRWzrtXaTMnqcM4dudNegMXJxkR0I/CXObHalYeYcAMPrL19eroNZHtJ8DQmu1E+ZNOYu/IXMXw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "mitt": "^3.0.1",
        "zod": "^3.24.1"
      },
      "peerDependencies": {
        "devtools-protocol": "*"
      }
    },
    "node_modules/chromium-bidi/node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/cli-cursor": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
      "integrity": "sha512-8lgKz8LmCRYZZQDpRyT2m5rKJ08TnU4tR9FFFW2rxpxR1FzWi4PQ/NfyODchAatHaUgnSPVcx/R5w6NuTBzFiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "restore-cursor": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cli-width": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.1.tgz",
      "integrity": "sha512-GRMWDxpOB6Dgk2E5Uo+3eEBvtOOlimMmpbFiKuLFnQzYDavtLFY3K5ona41jgN/WdRZtG7utuVSVTL4HbZHGkw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/cliui": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
      "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^6.2.0"
      }
    },
    "node_modules/cliui/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cliui/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/collapse-white-space": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/collapse-white-space/-/collapse-white-space-2.1.0.tgz",
      "integrity": "sha512-loKTxY1zCOuG4j9f6EPnuyyYkf58RnhhWTvRoZEokgB+WbdXehfjFviyOVYkqzEWz1Q5kRiZdBYS5SwxbQYwzw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/comma-separated-tokens": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/comma-separated-tokens/-/comma-separated-tokens-2.0.3.tgz",
      "integrity": "sha512-Fu4hJdvzeylCfQPp9SGWidpzrMs7tTrlu6Vb8XGaRGck8QSNZJJp538Wrb60Lax4fPwR64ViY468OIUTbRlGZg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/compressible": {
      "version": "2.0.18",
      "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
      "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-db": ">= 1.43.0 < 2"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/compression": {
      "version": "1.8.2",
      "resolved": "https://registry.npmjs.org/compression/-/compression-1.8.2.tgz",
      "integrity": "sha512-o8vI5RE5A6EVVOd9o41jKp41aJom+QTEO/Bx8MYNjexMo/Bv2WOjUfZr+aL0WnYSgymUy6zeguqLTsIhV0gMvQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bytes": "3.1.2",
        "compressible": "~2.0.18",
        "debug": "2.6.9",
        "destroy": "1.2.0",
        "negotiator": "~0.6.4",
        "on-headers": "~1.1.0",
        "safe-buffer": "5.2.1",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/compression/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/compression/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/configstore": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
      "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "dot-prop": "^5.2.0",
        "graceful-fs": "^4.1.2",
        "make-dir": "^3.0.0",
        "unique-string": "^2.0.0",
        "write-file-atomic": "^3.0.0",
        "xdg-basedir": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/content-disposition": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "5.2.1"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.7.tgz",
      "integrity": "sha512-NXdYc3dLr47pBkpUCHtKSwIOQXLVn8dZEuywboCOJY/osA0wFSLlSawr3KN8qXJEyX66FcONTH8EIlVuK0yyFA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/crypto-random-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
      "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/csp_evaluator": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/csp_evaluator/-/csp_evaluator-1.1.5.tgz",
      "integrity": "sha512-EL/iN9etCTzw/fBnp0/uj0f5BOOGvZut2mzsiiBZ/FdT6gFQCKRO/tmcKOxn5drWZ2Ndm/xBb1SI4zwWbGtmIw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "license": "MIT"
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/data-uri-to-buffer": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/data-uri-to-buffer/-/data-uri-to-buffer-6.0.2.tgz",
      "integrity": "sha512-7hvf7/GW8e86rW0ptuwS3OcBGDjIi6SZva7hCyWC0yYry2cOPmLIjXAUHI6DK2HsnwJd9ifmt57i8eV2n4YNpw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha512-z2S+W9X73hAUUki+N+9Za2lBlun89zigOyGrsax+KUQ6wKW4ZoWpEYBkGhQjwAjjDCkWxhY0VKEhk8wzY7F5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decimal.js": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.6.0.tgz",
      "integrity": "sha512-YpgQiITW3JXGntzdUmyUR1V812Hn8T1YVXhCu+wO3OpS4eU9l4YdD3qjyiKdV6mvV29zapkMeD390UVEf2lkUg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/decode-named-character-reference": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/decode-named-character-reference/-/decode-named-character-reference-1.3.0.tgz",
      "integrity": "sha512-GtpQYB283KrPp6nRw50q3U9/VfOutZOe103qlN7BPP6Ad27xYnOIWv4lPzo8HCAL+mMZofJ9KEy30fq6MfaK6Q==",
      "license": "MIT",
      "dependencies": {
        "character-entities": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-lazy-prop": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/define-lazy-prop/-/define-lazy-prop-2.0.0.tgz",
      "integrity": "sha512-Ds09qNh8yw3khSjiJjiUInaGX9xlqZDY7JVryGxdxV7NPeuqQfplOpQ66yJFZut3jLa5zOwkXw1g9EI2uKh4Og==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/degenerator": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/degenerator/-/degenerator-5.0.1.tgz",
      "integrity": "sha512-TllpMR/t0M5sqCXfj85i4XaAzxmS5tVA16dqvdkMwGmzI+dXLXnw3J+3Vdv7VKw+ThlTMboK6i9rnZ6Nntj5CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ast-types": "^0.13.4",
        "escodegen": "^2.1.0",
        "esprima": "^4.0.1"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/dequal": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
      "integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/destroy": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "devOptional": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/devlop": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/devlop/-/devlop-1.1.0.tgz",
      "integrity": "sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==",
      "license": "MIT",
      "dependencies": {
        "dequal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/devtools-protocol": {
      "version": "0.0.1467305",
      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1467305.tgz",
      "integrity": "sha512-LxwMLqBoPPGpMdRL4NkLFRNy3QLp6Uqa7GNp1v6JaBheop2QrB9Q7q0A/q/CYYP9sBfZdHOyszVx4gc9zyk7ow==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/dot-prop": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
      "integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-obj": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.452",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.452.tgz",
      "integrity": "sha512-cVvk1YBSj6571VmV6hdJTqj94Y79xSu8cj6Y9t6ae4Y4431z8/7EJFvu3rVp90xhfuv9BpPKUmaLfTo4+FOGBg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/end-of-stream": {
      "version": "1.4.5",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.5.tgz",
      "integrity": "sha512-ooEGc6HP26xXq/N+GCGOT0JKCLDGrq2bQUZrQ7gyrJiZANJ/8YDTxTpQBXGMn+WbIQXNVpyWymm7KYVICQnyOg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.26.0",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.26.0.tgz",
      "integrity": "sha512-9vhedylFonb2YGogzUKX6+Ja72gOJbN1QHAqdrvqLwhdl/QWbKopzoUC9EbQNVsAns/bx/4uyqalrQAoy1IByw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/enquirer": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/enquirer/-/enquirer-2.4.1.tgz",
      "integrity": "sha512-rRqJg/6gd538VHvR3PSrdRBb/1Vy2YfzHqzvbhGIQpDRKIa4FgV/54b5Q1xYSxOOwKvjXweS26E0Q+nAMwp2pQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-colors": "^4.1.1",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/enquirer/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/enquirer/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.24.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.24.2.tgz",
      "integrity": "sha512-2FpH9Q5i2RRwyEP1AylXe6nYLR5OhaJTZwmlcP0dL/+JCbgg7yyEo/sEK6HeGZRf3dFpWwThaRHVApXSkW3xeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-abstract-get": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/es-abstract-get/-/es-abstract-get-1.0.0.tgz",
      "integrity": "sha512-6PMWXpdhshVvFp+FoWYs1EvG1Nj0tvk0dZM+XcK0xMEM1czRVcP6ohqPWHy6qPagSpC8j4+p89WXlT+xXJs/fg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.2",
        "is-callable": "^1.2.7",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.4.0.tgz",
      "integrity": "sha512-c/A0P0oxkACDc+cKWw8evLXK83oBKgn0qPOqCYT4x9uolpCIJAcYvJC9QYKNDRPsTeGyCrQ326jrvgZWdCdK5Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.1.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.5",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-2.3.2.tgz",
      "integrity": "sha512-poHGpORABojJJucnV9KbOavETW8lBVnphkW77ER5/BQ5Fz7oXSoCNek7IH3vR5nRjdsEz926ibFYX8KtLQmdyw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
      "integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.4.tgz",
      "integrity": "sha512-yPDz7wqpg1/mmHLmS3tcfTfbw5f1eryXvyghYBffGdERwe+mV7ZcWzTR8LR17Kvqt3qfPurjlonmnq3MKXIOXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-abstract-get": "^1.0.0",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "is-callable": "^1.2.7",
        "is-date-object": "^1.1.0",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/esast-util-from-estree": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/esast-util-from-estree/-/esast-util-from-estree-2.0.0.tgz",
      "integrity": "sha512-4CyanoAudUSBAn5K13H4JhsMH6L9ZP7XbLVe/dKybkxMO7eDyLsT8UHl9TRNrU2Gr9nz+FovfSIjuXWJ81uVwQ==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "devlop": "^1.0.0",
        "estree-util-visit": "^2.0.0",
        "unist-util-position-from-estree": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/esast-util-from-js": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/esast-util-from-js/-/esast-util-from-js-2.0.1.tgz",
      "integrity": "sha512-8Ja+rNJ0Lt56Pcf3TAmpBZjmx8ZcK5Ts4cAzIOjsjevg9oSXJnl6SUQ2EevU8tv3h6ZLWmoKL5H4fgWvdvfETw==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "acorn": "^8.0.0",
        "esast-util-from-estree": "^2.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/esbuild": {
      "version": "0.27.7",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.7.tgz",
      "integrity": "sha512-IxpibTjyVnmrIQo5aqNpCgoACA/dTKLTlhMHihVHhdkxKyPO1uBBthumT0rdHmcsk9uMonIWS0m4FljWzILh3w==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.7",
        "@esbuild/android-arm": "0.27.7",
        "@esbuild/android-arm64": "0.27.7",
        "@esbuild/android-x64": "0.27.7",
        "@esbuild/darwin-arm64": "0.27.7",
        "@esbuild/darwin-x64": "0.27.7",
        "@esbuild/freebsd-arm64": "0.27.7",
        "@esbuild/freebsd-x64": "0.27.7",
        "@esbuild/linux-arm": "0.27.7",
        "@esbuild/linux-arm64": "0.27.7",
        "@esbuild/linux-ia32": "0.27.7",
        "@esbuild/linux-loong64": "0.27.7",
        "@esbuild/linux-mips64el": "0.27.7",
        "@esbuild/linux-ppc64": "0.27.7",
        "@esbuild/linux-riscv64": "0.27.7",
        "@esbuild/linux-s390x": "0.27.7",
        "@esbuild/linux-x64": "0.27.7",
        "@esbuild/netbsd-arm64": "0.27.7",
        "@esbuild/netbsd-x64": "0.27.7",
        "@esbuild/openbsd-arm64": "0.27.7",
        "@esbuild/openbsd-x64": "0.27.7",
        "@esbuild/openharmony-arm64": "0.27.7",
        "@esbuild/sunos-x64": "0.27.7",
        "@esbuild/win32-arm64": "0.27.7",
        "@esbuild/win32-ia32": "0.27.7",
        "@esbuild/win32-x64": "0.27.7"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/escodegen": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-2.1.0.tgz",
      "integrity": "sha512-2NlIDTwUWJN0mRPQOdtQBzbUHvdGY2P1VXSyU83Q3xKxM7WHX2Ql8dKq782Q9TgQUNOLEzEYu9bzLNj1q88I5w==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esprima": "^4.0.1",
        "estraverse": "^5.2.0",
        "esutils": "^2.0.2"
      },
      "bin": {
        "escodegen": "bin/escodegen.js",
        "esgenerate": "bin/esgenerate.js"
      },
      "engines": {
        "node": ">=6.0"
      },
      "optionalDependencies": {
        "source-map": "~0.6.1"
      }
    },
    "node_modules/escodegen/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.2.tgz",
      "integrity": "sha512-LEyamqS7W5HB3ujJyvi0HQK/dtVINZvd5mAAp9eT5S/ujByGjiZLCzPcHVzuXbpJDJF/cxwHlfceVUDZ2lnSTw==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.1",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.39.2",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-16.4.0.tgz",
      "integrity": "sha512-2RHLYswzc+hNRktWAjIL6XAvwb1cKcjLawJ5KWywAxn/JivNHtG42ZigL1yobVXDqsimuuL2F9jcEcnHFzbppQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@next/eslint-plugin-next": "16.4.0",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.32.0",
        "eslint-plugin-jsx-a11y": "^6.10.0",
        "eslint-plugin-react": "^7.37.0",
        "eslint-plugin-react-hooks": "^7.1.0",
        "globals": "16.4.0",
        "typescript-eslint": "^8.56.0"
      },
      "peerDependencies": {
        "eslint": ">=9.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next/node_modules/globals": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.4.0.tgz",
      "integrity": "sha512-ob/2LcVVaVGCYN+r14cnwnoDPUufjiYgSqRhiFD0Q1iI4Odora5RE8Iv1D24hAz5oMophRGkGz+yuvQmmUMnMw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.10",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.10.tgz",
      "integrity": "sha512-tRrKqFyCaKict5hOd244sL6EQFNycnMQnBe+j8uqGNXYzsImGbGUU4ibtoaBmv5FLwJwcFJNeg1GeVjQfbMrDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.16.1",
        "resolve": "^2.0.0-next.6"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.10.1.tgz",
      "integrity": "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.4.0",
        "get-tsconfig": "^4.10.0",
        "is-bun-module": "^2.0.0",
        "stable-hash": "^0.0.5",
        "tinyglobby": "^0.2.13",
        "unrs-resolver": "^1.6.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-import-resolver-typescript"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.14.0",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.14.0.tgz",
      "integrity": "sha512-W2WCRZ9Dqntd+2u8jJcVMV2PKulc6RdLgUUoh/yQr3uB6lo/ZOeGx11sv60/8S4QFFKNslAlWhr9u0Ef7ZW6Ig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.32.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.32.0.tgz",
      "integrity": "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.9",
        "array.prototype.findlastindex": "^1.2.6",
        "array.prototype.flat": "^1.3.3",
        "array.prototype.flatmap": "^1.3.3",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.1",
        "hasown": "^2.0.2",
        "is-core-module": "^2.16.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.1",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.9",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
      "integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.1.1.tgz",
      "integrity": "sha512-f2I7Gw6JbvCexzIInuSbZpfdQ44D7iqdWX01FKLvrPgqxoE7oMj8clOfto8U6vYiz4yd5oKu39rRSVOe1zRu0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0 || ^10.0.0"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "license": "BSD-2-Clause",
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estree-util-attach-comments": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-attach-comments/-/estree-util-attach-comments-3.0.0.tgz",
      "integrity": "sha512-cKUwm/HUcTDsYh/9FgnuFqpfquUbwIqwKM26BVCGDPVgvaCl/nDCCjUfiLlx6lsEZ3Z4RFxNbOQ60pkaEwFxGw==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-build-jsx": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/estree-util-build-jsx/-/estree-util-build-jsx-3.0.1.tgz",
      "integrity": "sha512-8U5eiL6BTrPxp/CHbs2yMgP8ftMhR5ww1eIKoWRMlqvltHF8fZn5LRDvTKuxD3DUn+shRbLGqXemcP51oFCsGQ==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "devlop": "^1.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "estree-walker": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-is-identifier-name": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-is-identifier-name/-/estree-util-is-identifier-name-3.0.0.tgz",
      "integrity": "sha512-hFtqIDZTIUZ9BXLb8y4pYGyk6+wekIivNVTcmvk8NoOh+VeRn5y6cEHzbURrWbfp1fIqdVipilzj+lfaadNZmg==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-scope": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/estree-util-scope/-/estree-util-scope-1.0.1.tgz",
      "integrity": "sha512-B0np3dcdxqILX5e9nEi5/Fr4K7gL4oYFVPV1zRa2e9wRCbQoZZNWOZFYyoInvXUPJXBXjss+QXlWLJChDEHDkA==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-to-js": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-to-js/-/estree-util-to-js-2.0.0.tgz",
      "integrity": "sha512-WDF+xj5rRWmD5tj6bIqRi6CkLIXbbNQUcxQHzGysQzvHmdYG2G7p/Tf0J0gpxGgkeMZNTIjT/AoSvC9Xehcgdg==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "astring": "^1.8.0",
        "source-map": "^0.7.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-visit": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-visit/-/estree-util-visit-2.0.0.tgz",
      "integrity": "sha512-m5KgiH85xAhhW8Wta0vShLcUvOsh3LLPI2YVwcbio1l7E09NTLL1EyMZFM1OyWowoH0skScNbhOPl4kcBgzTww==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-walker": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
      "integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/events-universal": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/events-universal/-/events-universal-1.0.1.tgz",
      "integrity": "sha512-LUd5euvbMLpwOF8m6ivPCbhQeSiYVNb8Vs0fQ8QjXo0JTkEHpz8pxdQf0gStltaPpw0Cca8b39KxvK9cfKRiAw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "bare-events": "^2.7.0"
      }
    },
    "node_modules/expect-type": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/expect-type/-/expect-type-1.4.0.tgz",
      "integrity": "sha512-KfYbmpRm0VbLjEvVa9yGwCi9GI34xvi7A/HXYWQO65CSD2u3MczUJSuwXKFIxlGsgBQizV9q5J9NHj4VG0n+pA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/express": {
      "version": "4.22.3",
      "resolved": "https://registry.npmjs.org/express/-/express-4.22.3.tgz",
      "integrity": "sha512-Bdcs4+3qlpVlx2NRn6fgX2Ue2/gGRaPeawebgclM0ERSCqDpA+owF1fdPwjJUTAJWMTuAaxjDf+hzb0/4eKvvw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "accepts": "~1.3.8",
        "array-flatten": "1.1.1",
        "body-parser": "~1.20.5",
        "content-disposition": "~0.5.4",
        "content-type": "~1.0.4",
        "cookie": "~0.7.1",
        "cookie-signature": "~1.0.6",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.3.1",
        "fresh": "~0.5.2",
        "http-errors": "~2.0.0",
        "merge-descriptors": "1.0.3",
        "methods": "~1.1.2",
        "on-finished": "~2.4.1",
        "parseurl": "~1.3.3",
        "path-to-regexp": "~0.1.13",
        "proxy-addr": "~2.0.7",
        "qs": "~6.16.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.2.1",
        "send": "~0.19.0",
        "serve-static": "~1.16.2",
        "setprototypeof": "1.2.0",
        "statuses": "~2.0.1",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/express/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/express/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "license": "MIT"
    },
    "node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha512-zCnTtlxNoAiDc3gqY2aYAWFx7XWWiasuF2K8Me5WbN8otHKTUKBwjPtNpRs/rbUZm7KxWAaNj7P1a/p52GbVug==",
      "license": "MIT",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/external-editor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
      "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chardet": "^0.7.0",
        "iconv-lite": "^0.4.24",
        "tmp": "^0.0.33"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/external-editor/node_modules/tmp": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
      "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "os-tmpdir": "~1.0.2"
      },
      "engines": {
        "node": ">=0.6.0"
      }
    },
    "node_modules/extract-zip": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extract-zip/-/extract-zip-2.0.1.tgz",
      "integrity": "sha512-GDhU9ntwuKyGXdZBUgTIe+vXnWj0fppUEtMDL0+idd5Sta8TGpHssn/eusA9mrPr9qNDym6SxAYZjNvCn/9RBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "debug": "^4.1.1",
        "get-stream": "^5.1.0",
        "yauzl": "^2.10.0"
      },
      "bin": {
        "extract-zip": "cli.js"
      },
      "engines": {
        "node": ">= 10.17.0"
      },
      "optionalDependencies": {
        "@types/yauzl": "^2.9.1"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-fifo": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/fast-fifo/-/fast-fifo-1.3.2.tgz",
      "integrity": "sha512-/d9sfos4yxzpwkDkuN7k2SqFKtYNmCTzgfEpz82x34IM9/zc8KGxQoXg1liNC/izpRM/MBdt44Nmx41ZWqk+FQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.1.tgz",
      "integrity": "sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.20.3",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.3.tgz",
      "integrity": "sha512-XKv5nnLs6nLF71NgiKJLIZFLkPyIEuOselLG7ujZnGrRfQK8HpvY+WqKhAJUAdLomwVHErVS4LfxFlPq0/FTAw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fd-slicer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz",
      "integrity": "sha512-cE1qsB/VwyQozZ+q1dGxR8LBYNZeofhEdUNGSMbQD3Gw2lAzX9Zb3uIU6Ebc/Fmyjo9AWWfnn0AUCHqtevs/8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pend": "~1.2.0"
      }
    },
    "node_modules/figures": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
      "integrity": "sha512-Oa2M9atig69ZkfwiApY8F2Yy+tzMbazyvqv21R0NsSC8floSOC09BbT1ITWAdoMGQvJ/aZnR1KMwdx9tvHnTNA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "escape-string-regexp": "^1.0.5"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.2.tgz",
      "integrity": "sha512-aA4RyPcd3badbdABGDuTXCMTtOneUCAYH/gxoYRTZlIJdF0YPWuGqiAsIrhNnnqdXGswYk6dGujem4w80UJFhg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "2.6.9",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "on-finished": "~2.4.1",
        "parseurl": "~1.3.3",
        "statuses": "~2.0.2",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/finalhandler/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/finalhandler/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.4",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.4.tgz",
      "integrity": "sha512-5+ybhBZANEJxaH3X5evAFatUxLfEHSr7n6kYJ+1Qd0mUqr4eu9gIf6GDbWHf8RJijHrjjO8G+la14SlL2SeS1Q==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
      "integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.2.0.tgz",
      "integrity": "sha512-jObKIik1P2QjPHP5nz5BaOtUlfgS0fWo8IUByNXkM+o+02sJOi94em77GwJKQSJ3gfPHdgzLNrHc1uokV4P/ew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2",
        "hasown": "^2.0.4",
        "is-callable": "^1.2.7",
        "is-document.all": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/generator-function/-/generator-function-2.0.1.tgz",
      "integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-stream": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
      "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pump": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.14.3",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.14.3.tgz",
      "integrity": "sha512-++QEw4DIY7WGoukz+/+A/8dGYPT9l9yIadnmSgZ8Rjr3YVSVDipQSO9CdnJo9ePqFqUUqh+wk9uIaoiAwsiPkA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/get-uri": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/get-uri/-/get-uri-6.0.5.tgz",
      "integrity": "sha512-b1O07XYq8eRuVzBNgJLstU6FYc1tS6wnMtF1I1D9lE8LxZSOGZ7LhxN54yPP6mGw5f2CkXY2BQUL9Fx41qvcIg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "basic-ftp": "^5.0.2",
        "data-uri-to-buffer": "^6.0.2",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/gray-matter": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/gray-matter/-/gray-matter-4.0.3.tgz",
      "integrity": "sha512-5v6yZd4JK3eMI3FqqCouswVqwugaA9r4dNZB1wwcmrD02QkV5H0y7XBQW8QwQqEaZY1pM9aqORSORhJRdNK44Q==",
      "license": "MIT",
      "dependencies": {
        "js-yaml": "^3.13.1",
        "kind-of": "^6.0.2",
        "section-matter": "^1.0.0",
        "strip-bom-string": "^1.0.0"
      },
      "engines": {
        "node": ">=6.0"
      }
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hast-util-to-estree": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/hast-util-to-estree/-/hast-util-to-estree-3.1.3.tgz",
      "integrity": "sha512-48+B/rJWAp0jamNbAAf9M7Uf//UVqAoMmgXhBdxTDJLGKY+LRnZ99qcG+Qjl5HfMpYNzS5v4EAwVEF34LeAj7w==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "comma-separated-tokens": "^2.0.0",
        "devlop": "^1.0.0",
        "estree-util-attach-comments": "^3.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "hast-util-whitespace": "^3.0.0",
        "mdast-util-mdx-expression": "^2.0.0",
        "mdast-util-mdx-jsx": "^3.0.0",
        "mdast-util-mdxjs-esm": "^2.0.0",
        "property-information": "^7.0.0",
        "space-separated-tokens": "^2.0.0",
        "style-to-js": "^1.0.0",
        "unist-util-position": "^5.0.0",
        "zwitch": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-to-jsx-runtime": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/hast-util-to-jsx-runtime/-/hast-util-to-jsx-runtime-2.3.6.tgz",
      "integrity": "sha512-zl6s8LwNyo1P9uw+XJGvZtdFF1GdAkOg8ujOw+4Pyb76874fLps4ueHXDhXWdk6YHQ6OgUtinliG7RsYvCbbBg==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/unist": "^3.0.0",
        "comma-separated-tokens": "^2.0.0",
        "devlop": "^1.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "hast-util-whitespace": "^3.0.0",
        "mdast-util-mdx-expression": "^2.0.0",
        "mdast-util-mdx-jsx": "^3.0.0",
        "mdast-util-mdxjs-esm": "^2.0.0",
        "property-information": "^7.0.0",
        "space-separated-tokens": "^2.0.0",
        "style-to-js": "^1.0.0",
        "unist-util-position": "^5.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-whitespace": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/hast-util-whitespace/-/hast-util-whitespace-3.0.0.tgz",
      "integrity": "sha512-88JUN06ipLwsnv+dVn+OIYOvAuvBMy/Qoi6O7mQHxdPXpjy+Cd6xRkWwux7DKO+4sYILtLBRIKgsdpS2gQc7qw==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/http-link-header": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/http-link-header/-/http-link-header-1.1.4.tgz",
      "integrity": "sha512-xT3GPW6/ZbGuw4UvwHqErSCEjNUlwbQJuZn9/q5U4WEKfp2kENVCAlousG1zLxHeaQ/ffOHUNpWamvkbBW0eNw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/http-proxy-agent": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.2.tgz",
      "integrity": "sha512-T1gkAiYYDWYx3V5Bmyu7HcfcvL7mUrTWiM6yOfa3PIphViJ/gFPbvidQ+veqSOHci/PxBcDabeUNCzpOODJZig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
      "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/image-ssim": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/image-ssim/-/image-ssim-0.2.0.tgz",
      "integrity": "sha512-W7+sO6/yhxy83L0G7xR8YAc5Z5QFtYEXXRV6EaE8tuYBZJnA3gVgp3q7X7muhLZVodeb9UfvjSbwt9VJwjIYAg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/immediate": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/immediate/-/immediate-3.0.6.tgz",
      "integrity": "sha512-XXOFtyqDjNDAQxVfYxuF7g9Il/IbWmmlQg2MYKOH8ExIT1qg6xc4zyS3HaEEATgs1btfzxq15ciUiY7gjSXRGQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/inline-style-parser": {
      "version": "0.2.7",
      "resolved": "https://registry.npmjs.org/inline-style-parser/-/inline-style-parser-0.2.7.tgz",
      "integrity": "sha512-Nb2ctOyNR8DqQoR0OwRG95uNWIC0C1lCgf5Naz5H6Ji72KZ8OcFZLz2P5sNgwlyoJ8Yif11oMuYs5pBQa86csA==",
      "license": "MIT"
    },
    "node_modules/inquirer": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-6.5.2.tgz",
      "integrity": "sha512-cntlB5ghuB0iuO65Ovoi8ogLHiWGs/5yNrtUcKjFhSSiVeAIVpD7koaSU9RM8mpXw5YDi9RdYXGQMaOURB7ycQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-escapes": "^3.2.0",
        "chalk": "^2.4.2",
        "cli-cursor": "^2.1.0",
        "cli-width": "^2.0.0",
        "external-editor": "^3.0.3",
        "figures": "^2.0.0",
        "lodash": "^4.17.12",
        "mute-stream": "0.0.7",
        "run-async": "^2.2.0",
        "rxjs": "^6.4.0",
        "string-width": "^2.1.0",
        "strip-ansi": "^5.1.0",
        "through": "^2.3.6"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/inquirer/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/inquirer/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/inquirer/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/intl-messageformat": {
      "version": "10.7.18",
      "resolved": "https://registry.npmjs.org/intl-messageformat/-/intl-messageformat-10.7.18.tgz",
      "integrity": "sha512-m3Ofv/X/tV8Y3tHXLohcuVuhWKo7BBq62cqY15etqmLxg2DZ34AGGgQDeR+SCta2+zICb1NX83af0GJmbQ1++g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@formatjs/ecma402-abstract": "2.3.6",
        "@formatjs/fast-memoize": "2.2.7",
        "@formatjs/icu-messageformat-parser": "2.11.4",
        "tslib": "^2.8.0"
      }
    },
    "node_modules/ip-address": {
      "version": "10.7.3",
      "resolved": "https://registry.npmjs.org/ip-address/-/ip-address-10.7.3.tgz",
      "integrity": "sha512-A1kdq/tSb5QjvKvAMgIoEvDBIgL7qaqVP/jkvSwYYRZ9iEzvPpopxp2wQfu3SuZRHtpHNxMn8Fs0bS+gf5Xmwg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-alphabetical": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-alphabetical/-/is-alphabetical-2.0.1.tgz",
      "integrity": "sha512-FWyyY60MeTNyeSRpkM2Iry0G9hpr7/9kD40mD/cGQEuilcZYS4okz8SN2Q6rLCJ8gbCt6fN+rC+6tMGS99LaxQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-alphanumerical": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-alphanumerical/-/is-alphanumerical-2.0.1.tgz",
      "integrity": "sha512-hmbYhX/9MUMF5uh7tOXyK/n0ZvWpad5caBA17GsC6vyuCqaWliRG5K1qS9inmUhEMaOBIW7/whAnSwveW/LtZw==",
      "license": "MIT",
      "dependencies": {
        "is-alphabetical": "^2.0.0",
        "is-decimal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
      "integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-2.0.0.tgz",
      "integrity": "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.7.1"
      }
    },
    "node_modules/is-bun-module/node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.17.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.17.0.tgz",
      "integrity": "sha512-J/vG0zBCbIKOQFfufSwyXdMrsohyJIUNkrnmo6WZGzoM7tr/lsbfW5b2BvisL6zsyMzK9UxV9L6c7AoFbyXHOA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-decimal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-decimal/-/is-decimal-2.0.1.tgz",
      "integrity": "sha512-AAB9hiomQs5DXWcRB1rqsxGUstbRroFOPPVAomNk/3XHR5JyEZChOyTWe2oayKnsSsr/kcGqF+z6yuH6HHpN0A==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-docker": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.1.tgz",
      "integrity": "sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "is-docker": "cli.js"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-document.all": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-document.all/-/is-document.all-1.0.0.tgz",
      "integrity": "sha512-+XSoyS05OdBbhFuELhgTCpFNHkpBOJqtsZfUFFpe5QTw+9Sjbh8zitxhQkYAo6wV7e1Vb8cAPvpCk9jGam/82g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha512-5BMULNob1vgFX6EjQw5izWDxrecWK9AM72rugNr0TFldMOi0fj6Jk+zeKIt0xGj4cEfQIJth4w3OKWOJ4f+AFw==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha512-VHskAKYM8RfSFXwee5t5cbN5PZeq1Wrh6qd5bkyiXIf6UQcN6w/A0eXM9r6t8d+GYOh+o6ZhiEnb88LN/Y8m2w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
      "integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-hexadecimal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-hexadecimal/-/is-hexadecimal-2.0.1.tgz",
      "integrity": "sha512-DgZQp241c8oO6cA1SbTEWiXeoxV42vlcJxgH+B3hi1AiqqKruZR3ZGF8In3fj4+/y/7rHvlOZLZtgJ/4ttYGZg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-obj": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
      "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-4.1.0.tgz",
      "integrity": "sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha512-cyA56iCMHAh5CdzjJIa4aohJyeO1YbwLi3Jc35MmRU6poroFjIGZzUzupGiRPOjgHg9TLu43xbpwXk523fMxKA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.1.tgz",
      "integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-wsl": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
      "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-docker": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/isomorphic-fetch": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/isomorphic-fetch/-/isomorphic-fetch-3.0.0.tgz",
      "integrity": "sha512-qvUtwJ3j6qwsF3jLxkZ72qCgjMysPzDfeV240JHiGZsANBYd+EEuu35v7dfrJ9Up0Ak07D7GGSkGhCHTqg/5wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "node-fetch": "^2.6.1",
        "whatwg-fetch": "^3.4.1"
      }
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/jpeg-js": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/jpeg-js/-/jpeg-js-0.4.4.tgz",
      "integrity": "sha512-WZzeDOEtTOBK4Mdsar0IqEU5sMr3vSV2RqkAIzUEV2BHnUfKGyswWFPFwK5EeDo93K3FohSHbLAjj0s1Wzd+dg==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/js-library-detector": {
      "version": "6.7.0",
      "resolved": "https://registry.npmjs.org/js-library-detector/-/js-library-detector-6.7.0.tgz",
      "integrity": "sha512-c80Qupofp43y4cJ7+8TTDN/AsDwLi5oOm/plBrWI+iQt485vKXCco+yVmOwEgdo9VOdsYTuV0UlTeetVPTriXA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "3.15.2",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.15.2.tgz",
      "integrity": "sha512-6EuL879VkRA+1Cz578mKMiKvjPNEuk6+r1JaFzoSWejZmtf7xWbIyw1e3KkxlkzTIt9Taw6JBhEppG7utc1P+w==",
      "license": "MIT",
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/legacy-javascript": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/legacy-javascript/-/legacy-javascript-0.0.3.tgz",
      "integrity": "sha512-1r6MT4dVaJyXt4G07Cm2cQ0AUaLJdefiEp4SmIAylA++gnEQ82YvmzE58RkM5EP0fk5hROLCslUPGnwIYdZQVA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lie": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/lie/-/lie-3.1.1.tgz",
      "integrity": "sha512-RiNhHysUjhrDQntfYSfY4MU24coXXdEOgw9WGcKHNeEwffDYbF//u87M1EWaMGzuFoSbqW0C9C6lEEhDOAswfw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "immediate": "~3.0.5"
      }
    },
    "node_modules/lighthouse": {
      "version": "12.6.1",
      "resolved": "https://registry.npmjs.org/lighthouse/-/lighthouse-12.6.1.tgz",
      "integrity": "sha512-85WDkjcXAVdlFem9Y6SSxqoKiz/89UsDZhLpeLJIsJ4LlHxw047XTZhlFJmjYCB7K5S1erSBAf5cYLcfyNbH3A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@paulirish/trace_engine": "0.0.53",
        "@sentry/node": "^7.0.0",
        "axe-core": "^4.10.3",
        "chrome-launcher": "^1.2.0",
        "configstore": "^5.0.1",
        "csp_evaluator": "1.1.5",
        "devtools-protocol": "0.0.1467305",
        "enquirer": "^2.3.6",
        "http-link-header": "^1.1.1",
        "intl-messageformat": "^10.5.3",
        "jpeg-js": "^0.4.4",
        "js-library-detector": "^6.7.0",
        "lighthouse-logger": "^2.0.1",
        "lighthouse-stack-packs": "1.12.2",
        "lodash-es": "^4.17.21",
        "lookup-closest-locale": "6.2.0",
        "metaviewport-parser": "0.3.0",
        "open": "^8.4.0",
        "parse-cache-control": "1.0.1",
        "puppeteer-core": "^24.10.0",
        "robots-parser": "^3.0.1",
        "semver": "^5.3.0",
        "speedline-core": "^1.4.3",
        "third-party-web": "^0.26.6",
        "tldts-icann": "^6.1.16",
        "ws": "^7.0.0",
        "yargs": "^17.3.1",
        "yargs-parser": "^21.0.0"
      },
      "bin": {
        "chrome-debug": "core/scripts/manual-chrome-launcher.js",
        "lighthouse": "cli/index.js",
        "smokehouse": "cli/test/smokehouse/frontends/smokehouse-bin.js"
      },
      "engines": {
        "node": ">=18.20"
      }
    },
    "node_modules/lighthouse-logger": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/lighthouse-logger/-/lighthouse-logger-1.2.0.tgz",
      "integrity": "sha512-wzUvdIeJZhRsG6gpZfmSCfysaxNEr43i+QT+Hie94wvHDKFLi4n7C2GqZ4sTC+PH5b5iktmXJvU87rWvhP3lHw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "debug": "^2.6.8",
        "marky": "^1.2.0"
      }
    },
    "node_modules/lighthouse-logger/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/lighthouse-logger/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lighthouse-stack-packs": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/lighthouse-stack-packs/-/lighthouse-stack-packs-1.12.2.tgz",
      "integrity": "sha512-Ug8feS/A+92TMTCK6yHYLwaFMuelK/hAKRMdldYkMNwv+d9PtWxjXEg6rwKtsUXTADajhdrhXyuNCJ5/sfmPFw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/lighthouse/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/lighthouse/node_modules/chrome-launcher": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/chrome-launcher/-/chrome-launcher-1.2.2.tgz",
      "integrity": "sha512-sI90u5qf3854bTrWsQMMdsQfSjjMbeSn7QtxVb9zrikf+QgMfHQ71KepHW7ZfixQKrDlAFKb+qnVlSR+xepBzw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/node": "*",
        "escape-string-regexp": "^4.0.0",
        "is-wsl": "^2.2.0",
        "lighthouse-logger": "^2.0.1"
      },
      "bin": {
        "print-chrome-path": "bin/print-chrome-path.cjs"
      },
      "engines": {
        "node": ">=12.13.0"
      }
    },
    "node_modules/lighthouse/node_modules/cliui": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.1",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/lighthouse/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lighthouse/node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lighthouse/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/lighthouse/node_modules/lighthouse-logger": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/lighthouse-logger/-/lighthouse-logger-2.0.2.tgz",
      "integrity": "sha512-vWl2+u5jgOQuZR55Z1WM0XDdrJT6mzMP8zHUct7xTlWhuQs+eV0g+QL0RQdFjT54zVmbhLCP8vIVpy1wGn/gCg==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "debug": "^4.4.1",
        "marky": "^1.2.2"
      }
    },
    "node_modules/lighthouse/node_modules/open": {
      "version": "8.4.2",
      "resolved": "https://registry.npmjs.org/open/-/open-8.4.2.tgz",
      "integrity": "sha512-7x81NCL719oNbsq/3mh+hVrAWmFuEYUqrq/Iw3kUzH8ReypT9QQ0BLoJS7/G9k6N81XjW4qHWtjWwe/9eLy1EQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-lazy-prop": "^2.0.0",
        "is-docker": "^2.1.1",
        "is-wsl": "^2.2.0"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lighthouse/node_modules/semver": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.2.tgz",
      "integrity": "sha512-cBznnQ9KjJqU67B52RMC65CMarK2600WFnbkcaiwWq3xy/5haFJlshgnpjovMVJ+Hff49d8GEn0b87C5pDQ10g==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/lighthouse/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/lighthouse/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/lighthouse/node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/lighthouse/node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/lighthouse/node_modules/yargs": {
      "version": "17.7.3",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.3.tgz",
      "integrity": "sha512-GZtjxm/J/4TSxuL3FNYjCmLktBTnIw/rVmKSIyKeYAZpmJB2ig9VauCC5xsa82GNKVKDAqpOn3KVzNt0zmrU0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^8.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.3",
        "y18n": "^5.0.5",
        "yargs-parser": "^21.1.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/lighthouse/node_modules/yargs-parser": {
      "version": "21.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.2.tgz",
      "integrity": "sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.30.2",
        "lightningcss-darwin-arm64": "1.30.2",
        "lightningcss-darwin-x64": "1.30.2",
        "lightningcss-freebsd-x64": "1.30.2",
        "lightningcss-linux-arm-gnueabihf": "1.30.2",
        "lightningcss-linux-arm64-gnu": "1.30.2",
        "lightningcss-linux-arm64-musl": "1.30.2",
        "lightningcss-linux-x64-gnu": "1.30.2",
        "lightningcss-linux-x64-musl": "1.30.2",
        "lightningcss-win32-arm64-msvc": "1.30.2",
        "lightningcss-win32-x64-msvc": "1.30.2"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.30.2.tgz",
      "integrity": "sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.2.tgz",
      "integrity": "sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.2.tgz",
      "integrity": "sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.2.tgz",
      "integrity": "sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.2.tgz",
      "integrity": "sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.2.tgz",
      "integrity": "sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.2.tgz",
      "integrity": "sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.2.tgz",
      "integrity": "sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.2.tgz",
      "integrity": "sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.2.tgz",
      "integrity": "sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.2.tgz",
      "integrity": "sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/localforage": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/localforage/-/localforage-1.10.0.tgz",
      "integrity": "sha512-14/H1aX7hzBBmmh7sGPd+AOMkkIrHM3Z1PAyGgZigA1H1p5O5ANnMyWzvpAETtG68/dC4pC0ncy3+PPGzXZHPg==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "lie": "3.1.1"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash": {
      "version": "4.18.1",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.18.1.tgz",
      "integrity": "sha512-dMInicTPVE8d1e5otfwmmjlxkZoUpiVLwyeTdUsi/Caj/gfzzblBcCE5sRHV/AsjuCmxWrte2TNGSYuCeCq+0Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash-es": {
      "version": "4.18.1",
      "resolved": "https://registry.npmjs.org/lodash-es/-/lodash-es-4.18.1.tgz",
      "integrity": "sha512-J8xewKD/Gk22OZbhpOVSwcs60zhd95ESDwezOFuA3/099925PdHJ7OFHNTGtajL3AlZkykD32HykiMo+BIBI8A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/longest-streak": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/longest-streak/-/longest-streak-3.1.0.tgz",
      "integrity": "sha512-9Ri+o0JYgehTaVBBDoMqIl8GXtbWg711O3srftcHhZ0dqnETqLaoIK0x17fUw9rFSlK/0NlsKe0Ahhyl5pXE2g==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/lookup-closest-locale": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/lookup-closest-locale/-/lookup-closest-locale-6.2.0.tgz",
      "integrity": "sha512-/c2kL+Vnp1jnV6K6RpDTHK3dgg0Tu2VVp+elEiJpjfS1UyY7AjOYHohRug6wT0OpoX2qFgNORndE9RqesfVxWQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/markdown-extensions": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/markdown-extensions/-/markdown-extensions-2.0.0.tgz",
      "integrity": "sha512-o5vL7aDWatOTX8LzaS1WMoaoxIiLRQJuIKKe2wAw6IeULDHaqbiqiggmx+pKvZDb1Sj+pE46Sn1T7lCqfFtg1Q==",
      "license": "MIT",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/marky": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/marky/-/marky-1.3.0.tgz",
      "integrity": "sha512-ocnPZQLNpvbedwTy9kNrQEsknEfgvcLMvOtz3sFeWApDq1MXH1TqkCIx58xlpESsfwQOnuBO9beyQuNGzVvuhQ==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/mdast-util-from-markdown": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mdast-util-from-markdown/-/mdast-util-from-markdown-2.1.0.tgz",
      "integrity": "sha512-KRLgmPaP2H1ul2bpoJkOS+9pAcDAAj9Nu1mqLnh8NLeJG5tlvj42TH80PIGBpROWlRXLk0lDrWNuZCFy/tsB4A==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "mdast-util-to-string": "^4.0.0",
        "micromark": "^4.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-decode-string": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unist-util-stringify-position": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdx": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-mdx/-/mdast-util-mdx-3.0.0.tgz",
      "integrity": "sha512-JfbYLAW7XnYTTbUsmpu0kdBUVe+yKVJZBItEjwyYJiDJuZ9w4eeaqks4HQO+R7objWgS2ymV60GYpI14Ug554w==",
      "license": "MIT",
      "dependencies": {
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-mdx-expression": "^2.0.0",
        "mdast-util-mdx-jsx": "^3.0.0",
        "mdast-util-mdxjs-esm": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdx-expression": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mdast-util-mdx-expression/-/mdast-util-mdx-expression-2.0.1.tgz",
      "integrity": "sha512-J6f+9hUp+ldTZqKRSg7Vw5V6MqjATc+3E4gf3CFNcuZNWD8XdyI6zQ8GqH7f8169MM6P7hMBRDVGnn7oHB9kXQ==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdx-jsx": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/mdast-util-mdx-jsx/-/mdast-util-mdx-jsx-3.2.0.tgz",
      "integrity": "sha512-lj/z8v0r6ZtsN/cGNNtemmmfoLAFZnjMbNyLzBafjzikOM+glrjNHPlf6lQDOTccj9n5b0PPihEBbhneMyGs1Q==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "ccount": "^2.0.0",
        "devlop": "^1.1.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0",
        "parse-entities": "^4.0.0",
        "stringify-entities": "^4.0.0",
        "unist-util-stringify-position": "^4.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdxjs-esm": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mdast-util-mdxjs-esm/-/mdast-util-mdxjs-esm-2.0.1.tgz",
      "integrity": "sha512-EcmOpxsZ96CvlP03NghtH1EsLtr0n9Tm4lPUJUBccV9RwUOneqSycg19n5HGzCf+10LozMRSObtVr3ee1WoHtg==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-phrasing": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/mdast-util-phrasing/-/mdast-util-phrasing-4.1.0.tgz",
      "integrity": "sha512-TqICwyvJJpBwvGAMZjj4J2n0X8QWp21b9l0o7eXyVJ25YNWYbJDVIyD1bZXE6WtV6RmKJVYmQAKWa0zWOABz2w==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "unist-util-is": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-to-hast": {
      "version": "13.2.1",
      "resolved": "https://registry.npmjs.org/mdast-util-to-hast/-/mdast-util-to-hast-13.2.1.tgz",
      "integrity": "sha512-cctsq2wp5vTsLIcaymblUriiTcZd0CwWtCbLvrOzYCDZoWyMNV8sZ7krj09FSnsiJi3WVsHLM4k6Dq/yaPyCXA==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "@ungap/structured-clone": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-util-sanitize-uri": "^2.0.0",
        "trim-lines": "^3.0.0",
        "unist-util-position": "^5.0.0",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-to-markdown": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/mdast-util-to-markdown/-/mdast-util-to-markdown-2.2.0.tgz",
      "integrity": "sha512-2Jn/ADrHFFyyniBMi0bncTbJqU78K3/TEYvzvwrWWzD9MYPUa/Gm4r3nOeKFQg/PDM5BsbDYdc8ackW4NTY6NA==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "longest-streak": "^3.0.0",
        "mdast-util-phrasing": "^4.0.0",
        "mdast-util-to-string": "^4.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-classify-character": "^2.0.0",
        "micromark-util-decode-string": "^2.0.0",
        "micromark-util-html-tag-name": "^2.0.0",
        "unist-util-visit": "^5.0.0",
        "zwitch": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-to-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-to-string/-/mdast-util-to-string-4.0.0.tgz",
      "integrity": "sha512-0H44vDimn51F0YwvxSJSm0eCDOJTRlmN0R1yBh4HLj9wiV1Dn0QoXGbvFAWj2hSItVTlCmBF1hqKlIyUBVFLPg==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz",
      "integrity": "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/metaviewport-parser": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/metaviewport-parser/-/metaviewport-parser-0.3.0.tgz",
      "integrity": "sha512-EoYJ8xfjQ6kpe9VbVHvZTZHiOl4HL1Z18CrZ+qahvLXT7ZO4YTC2JMyt5FaUp9JJp6J4Ybb/z7IsCXZt86/QkQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/micromark": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/micromark/-/micromark-4.0.3.tgz",
      "integrity": "sha512-oGYfQzHSG5dOMovQcJ3fyTmZlWAWpi0XA0sJwJs+i6OT88o1+Jtw/8z0CmdowSLxGhhFK89rQ/oXph/wN02PNw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@types/debug": "^4.0.0",
        "debug": "^4.0.0",
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-core-commonmark": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-combine-extensions": "^2.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-edit-map": "^1.0.0",
        "micromark-util-encode": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-sanitize-uri": "^2.0.0",
        "micromark-util-subtokenize": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-core-commonmark": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/micromark-core-commonmark/-/micromark-core-commonmark-2.0.4.tgz",
      "integrity": "sha512-wxEeE8v8XVvOrxn1TZj74qYhAtTQsSqufHVS3uNVyT1MupXxhyaHk8/9xDNPh9BmL77QNDgWTkZ3RsYHB2ry7w==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-factory-destination": "^2.0.0",
        "micromark-factory-label": "^2.0.0",
        "micromark-factory-space": "^2.1.0",
        "micromark-factory-title": "^2.0.0",
        "micromark-factory-whitespace": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-classify-character": "^2.0.0",
        "micromark-util-edit-map": "^1.0.0",
        "micromark-util-html-tag-name": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-subtokenize": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.3"
      }
    },
    "node_modules/micromark-extension-mdx-expression": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdx-expression/-/micromark-extension-mdx-expression-3.0.1.tgz",
      "integrity": "sha512-dD/ADLJ1AeMvSAKBwO22zG22N4ybhe7kFIZ3LsDI0GlsNr2A3KYxb0LdC1u5rj4Nw+CHKY0RVdnHX8vj8ejm4Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-factory-mdx-expression": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-extension-mdx-jsx": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdx-jsx/-/micromark-extension-mdx-jsx-3.0.2.tgz",
      "integrity": "sha512-e5+q1DjMh62LZAJOnDraSSbDMvGJ8x3cbjygy2qFEi7HCeUT4BDKCvMozPozcD6WmOt6sVvYDNBKhFSz3kjOVQ==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "micromark-factory-mdx-expression": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-mdx-md": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdx-md/-/micromark-extension-mdx-md-2.0.0.tgz",
      "integrity": "sha512-EpAiszsB3blw4Rpba7xTOUptcFeBFi+6PY8VnJ2hhimH+vCQDirWgsMpz7w1XcZE7LVrSAUGb9VJpG9ghlYvYQ==",
      "license": "MIT",
      "dependencies": {
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-mdxjs": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdxjs/-/micromark-extension-mdxjs-3.0.0.tgz",
      "integrity": "sha512-A873fJfhnJ2siZyUrJ31l34Uqwy4xIFmvPY1oj+Ean5PHcPBYzEsvqvWGaWcfEIr11O5Dlw3p2y0tZWpKHDejQ==",
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.0.0",
        "acorn-jsx": "^5.0.0",
        "micromark-extension-mdx-expression": "^3.0.0",
        "micromark-extension-mdx-jsx": "^3.0.0",
        "micromark-extension-mdx-md": "^2.0.0",
        "micromark-extension-mdxjs-esm": "^3.0.0",
        "micromark-util-combine-extensions": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-mdxjs-esm": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdxjs-esm/-/micromark-extension-mdxjs-esm-3.0.0.tgz",
      "integrity": "sha512-DJFl4ZqkErRpq/dAPyeWp15tGrcrrJho1hKK5uBS70BCtfrIFg81sqcTVu3Ta+KD1Tk5vAtBNElWxtAa+m8K9A==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-core-commonmark": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unist-util-position-from-estree": "^2.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-factory-destination": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-destination/-/micromark-factory-destination-2.0.1.tgz",
      "integrity": "sha512-Xe6rDdJlkmbFRExpTOmRj9N3MaWmbAgdpSrBQvCFqhezUn4AHqJHbaEnfbVYYiexVSs//tqOdY/DxhjdCiJnIA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-label": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-label/-/micromark-factory-label-2.0.1.tgz",
      "integrity": "sha512-VFMekyQExqIW7xIChcXn4ok29YE3rnuyveW3wZQWWqF4Nv9Wk5rgJ99KzPvHjkmPXF93FXIbBp6YdW3t71/7Vg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-mdx-expression": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/micromark-factory-mdx-expression/-/micromark-factory-mdx-expression-2.0.3.tgz",
      "integrity": "sha512-kQnEtA3vzucU2BkrIa8/VaSAsP+EJ3CKOvhMuJgOEGg9KDC6OAY6nSnNDVRiVNRqj7Y4SlSzcStaH/5jge8JdQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unist-util-position-from-estree": "^2.0.0",
        "vfile-message": "^4.0.0"
      }
    },
    "node_modules/micromark-factory-space": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-factory-space/-/micromark-factory-space-2.1.0.tgz",
      "integrity": "sha512-fS8hnLIjnjvdQIj39Geug8wWsR0HrYZ43KShKxNfwT7t2LOHo/LbWZEzEaSOjwtjdCsjoE6syHhonEzW0zv0+Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-title": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-title/-/micromark-factory-title-2.0.1.tgz",
      "integrity": "sha512-5bZ+3CjhAd9eChYTHsjy6TGxpOFSKgKKJPJxr293jTbfry2KDoWkhBb6TcPVB4NmzaPhMs1Frm9AZH7OD4Cjzw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-whitespace": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-whitespace/-/micromark-factory-whitespace-2.0.1.tgz",
      "integrity": "sha512-Ob0nuZ3PKt/n0hORHyvoD9uZhr+Za8sFoP+OnMcnWK5lngSzALgQYKMr9RJVOWLqQYuyn6ulqGWSXdwf6F80lQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-character": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/micromark-util-character/-/micromark-util-character-2.1.1.tgz",
      "integrity": "sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-chunked": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-chunked/-/micromark-util-chunked-2.0.1.tgz",
      "integrity": "sha512-QUNFEOPELfmvv+4xiNg2sRYeS/P84pTW0TCgP5zc9FpXetHY0ab7SxKyAQCNCc1eK0459uoLI1y5oO5Vc1dbhA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-classify-character": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-classify-character/-/micromark-util-classify-character-2.0.1.tgz",
      "integrity": "sha512-K0kHzM6afW/MbeWYWLjoHQv1sgg2Q9EccHEDzSkxiP/EaagNzCm7T/WMKZ3rjMbvIpvBiZgwR3dKMygtA4mG1Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-combine-extensions": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-combine-extensions/-/micromark-util-combine-extensions-2.0.1.tgz",
      "integrity": "sha512-OnAnH8Ujmy59JcyZw8JSbK9cGpdVY44NKgSM7E9Eh7DiLS2E9RNQf0dONaGDzEG9yjEl5hcqeIsj4hfRkLH/Bg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-decode-numeric-character-reference": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/micromark-util-decode-numeric-character-reference/-/micromark-util-decode-numeric-character-reference-2.0.2.tgz",
      "integrity": "sha512-ccUbYk6CwVdkmCQMyr64dXz42EfHGkPQlBj5p7YVGzq8I7CtjXZJrubAYezf7Rp+bjPseiROqe7G6foFd+lEuw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-decode-string": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-decode-string/-/micromark-util-decode-string-2.0.1.tgz",
      "integrity": "sha512-nDV/77Fj6eH1ynwscYTOsbK7rR//Uj0bZXBwJZRfaLEJ1iGBR6kIfNmlNqaqJf649EP0F3NWNdeJi03elllNUQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "decode-named-character-reference": "^1.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-edit-map": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/micromark-util-edit-map/-/micromark-util-edit-map-1.0.0.tgz",
      "integrity": "sha512-Pa2ljlsEL6sVwFaYeyrOLSYbQt73JvGbPOYFq+9AElXiSnfI5Q4465RRZ1sHv7lDjDOnGRDDaqPXqClqWK/q1Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-encode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-encode/-/micromark-util-encode-2.0.1.tgz",
      "integrity": "sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-events-to-acorn": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/micromark-util-events-to-acorn/-/micromark-util-events-to-acorn-2.0.3.tgz",
      "integrity": "sha512-jmsiEIiZ1n7X1Rr5k8wVExBQCg5jy4UXVADItHmNk1zkwEVhBuIUKRu3fqv+hs4nxLISi2DQGlqIOGiFxgbfHg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/unist": "^3.0.0",
        "devlop": "^1.0.0",
        "estree-util-visit": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "vfile-message": "^4.0.0"
      }
    },
    "node_modules/micromark-util-html-tag-name": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-html-tag-name/-/micromark-util-html-tag-name-2.0.1.tgz",
      "integrity": "sha512-2cNEiYDhCWKI+Gs9T0Tiysk136SnR13hhO8yW6BGNyhOC4qYFnwF1nKfD3HFAIXA5c45RrIG1ub11GiXeYd1xA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-normalize-identifier": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-normalize-identifier/-/micromark-util-normalize-identifier-2.0.1.tgz",
      "integrity": "sha512-sxPqmo70LyARJs0w2UclACPUUEqltCkJ6PhKdMIDuJ3gSf/Q+/GIe3WKl0Ijb/GyH9lOpUkRAO2wp0GVkLvS9Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-resolve-all": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-resolve-all/-/micromark-util-resolve-all-2.0.1.tgz",
      "integrity": "sha512-VdQyxFWFT2/FGJgwQnJYbe1jjQoNTS4RjglmSjTUlpUMa95Htx9NHeYW4rGDJzbjvCsl9eLjMQwGeElsqmzcHg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-sanitize-uri": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-sanitize-uri/-/micromark-util-sanitize-uri-2.0.1.tgz",
      "integrity": "sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-encode": "^2.0.0",
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-subtokenize": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-util-subtokenize/-/micromark-util-subtokenize-2.1.0.tgz",
      "integrity": "sha512-XQLu552iSctvnEcgXw6+Sx75GflAPNED1qx7eBJ+wydBb2KCbRZe+NwvIEEMM83uml1+2WSXpBAcp9IUCgCYWA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-symbol": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-symbol/-/micromark-util-symbol-2.0.1.tgz",
      "integrity": "sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-types": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/micromark-util-types/-/micromark-util-types-2.0.3.tgz",
      "integrity": "sha512-oxB2Ik03hI0gv+VNn9tnh1t1YEe9MDPptViAEgfdf3YQHsn0pzGTgCdlSCJXcwhqm8phaEuM7zeEu3QQzVBrPg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types/node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.5.tgz",
      "integrity": "sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/mitt": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mitt/-/mitt-3.0.1.tgz",
      "integrity": "sha512-vKivATfr97l2/QBCYAkXYDbrIWPM2IIKEl7YPhjCvKlG3kE2gm+uBo6nEXK3M5/Ffh/FLpKExzOQ3JJoJGFKBw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mkdirp": {
      "version": "0.5.6",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",
      "integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.6"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/mute-stream": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
      "integrity": "sha512-r65nCZhrbXXb6dXOACihYApHw2Q6pV0M3V0PSxd74N0+D8nzAdEAITq2oAjA1jVnKI+tGvEBUpqiMh0+rW6zDQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/nanoid": {
      "version": "3.3.20",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.20.tgz",
      "integrity": "sha512-uKdg2G3GNCKQn9byYOpxbGqrT2fGO5KRt5J/8b3pok8rT6qxGWF6hxMyJiEYtAf+FVyYuD9hRaDqX5uPFYJ4ZQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
      "integrity": "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.4.tgz",
      "integrity": "sha512-myRT3DiWPHqho5PrJaIRyaMv2kgYf0mUVgBNOYMuCH5Ki1yEiQaf/ZJuQ62nvpc44wL5WDbTX7yGJi1Neevw8w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/netmask": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/netmask/-/netmask-2.1.1.tgz",
      "integrity": "sha512-eonl3sLUha+S1GzTPxychyhnUzKyeQkZ7jLjKrBagJgPla13F+uQ71HgpFefyHgqrjEbCPkDArxYsjY8/+gLKA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/next": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/next/-/next-16.4.0.tgz",
      "integrity": "sha512-N2C+9q89Z/oLrsepSRS4jRMtwmUZAoZuAHU0e9T6+sAB5DdhADmrnOW+zjYijlrYFmVfmQhGVGy9eMFoB7UgKg==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "16.4.0",
        "@swc/helpers": "0.5.23",
        "baseline-browser-mapping": "^2.9.19",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.5.23",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "16.4.0",
        "@next/swc-darwin-x64": "16.4.0",
        "@next/swc-linux-arm64-gnu": "16.4.0",
        "@next/swc-linux-arm64-musl": "16.4.0",
        "@next/swc-linux-x64-gnu": "16.4.0",
        "@next/swc-linux-x64-musl": "16.4.0",
        "@next/swc-win32-arm64-msvc": "16.4.0",
        "@next/swc-win32-x64-msvc": "16.4.0",
        "sharp": "^0.35.4"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next-mdx-remote": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/next-mdx-remote/-/next-mdx-remote-5.0.0.tgz",
      "integrity": "sha512-RNNbqRpK9/dcIFZs/esQhuLA8jANqlH694yqoDBK8hkVdJUndzzGmnPHa2nyi90N4Z9VmzuSWNRpr5ItT3M7xQ==",
      "license": "MPL-2.0",
      "dependencies": {
        "@babel/code-frame": "^7.23.5",
        "@mdx-js/mdx": "^3.0.1",
        "@mdx-js/react": "^3.0.1",
        "unist-util-remove": "^3.1.0",
        "vfile": "^6.0.1",
        "vfile-matter": "^5.0.0"
      },
      "engines": {
        "node": ">=14",
        "npm": ">=7"
      },
      "peerDependencies": {
        "react": ">=16"
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.5.23",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.23.tgz",
      "integrity": "sha512-g50586zr4bZmwFiTlflMu8E0bDTb5I5gertgwAKmsdUlTQIhZtunzUlD1WSzwcVWPoAVpsrA6vlfCD7oXvRwgg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.16",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-exports-info": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/node-exports-info/-/node-exports-info-1.6.2.tgz",
      "integrity": "sha512-kXs9Go0cah0qHVV2v389IXQLdLCeE1xfFtjOAF+iobu0OIoG1pje8At2vMHyaPMiPMnG/LWP50twML21eMcAag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array.prototype.flatmap": "^1.3.3",
        "es-errors": "^1.3.0",
        "object.entries": "^1.1.9",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/node-fetch": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
      "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      },
      "peerDependencies": {
        "encoding": "^0.1.0"
      },
      "peerDependenciesMeta": {
        "encoding": {
          "optional": true
        }
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.58",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.58.tgz",
      "integrity": "sha512-BdiKAgbfRlvfMq/XzO/AF9NPmaA8a+YpLAyAFTVFBj3gARrAIfWvNq7Q7NE4se3KgFu0KkrvQMxTS0XVnsGzHg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.9.tgz",
      "integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/obug": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/obug/-/obug-2.2.1.tgz",
      "integrity": "sha512-XrsrhT5sybtKI6wakr2SPOlGZWWYbUXZ7a0jT8/QOeAPau+1X/bSegNe5YR75oJmEZQbKningirmGOEJCIk61Q==",
      "dev": true,
      "funding": [
        "https://github.com/sponsors/sxzz",
        "https://opencollective.com/debug"
      ],
      "license": "MIT",
      "engines": {
        "node": ">=12.20.0"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/on-headers": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.1.0.tgz",
      "integrity": "sha512-737ZY3yNnXy37FHkQxPzt4UZ2UWPWiCZWLvFZ4fu5cueciegX0zGPnrlY6bwRg4FdQOe9YU8MkmJwGhoMybl8A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/onetime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
      "integrity": "sha512-oyyPpiMaKARvvcgip+JV+7zci5L8D1W9RZIz2l1o08AM3pfspitVWnPt3mzHcBPp12oYMTy0pqrFs/C+m3EwsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-fn": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/open": {
      "version": "7.4.2",
      "resolved": "https://registry.npmjs.org/open/-/open-7.4.2.tgz",
      "integrity": "sha512-MVHddDVweXZF3awtlAS+6pgKLlm/JgxZ90+/NBurBoQctVOOB/zDdVjcyPzQ+0laDGbsWgrRkflI65sQeOgT9Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-docker": "^2.0.0",
        "is-wsl": "^2.1.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha512-D2FR03Vir7FIu45XBY20mTb+/ZSWB00sjU9jdQXt83gDrI4Ztz5Fs7/yy74g2N5SVQY4xY1qDr4rNddwYRVX0g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.2.tgz",
      "integrity": "sha512-19YVAg7T+WTrxggPukVq7DjTv6+PJ867TmhCvBsYwmbFCsZd344rq2Ld1p0wo8f8Qrrhgp82c6FJRqdXWtSEhg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pac-proxy-agent": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/pac-proxy-agent/-/pac-proxy-agent-7.2.0.tgz",
      "integrity": "sha512-TEB8ESquiLMc0lV8vcd5Ql/JAKAoyzHFXaStwjkzpOpC5Yv+pIzLfHvjTSdf3vpa2bMiUQrg9i6276yn8666aA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tootallnate/quickjs-emscripten": "^0.23.0",
        "agent-base": "^7.1.2",
        "debug": "^4.3.4",
        "get-uri": "^6.0.1",
        "http-proxy-agent": "^7.0.0",
        "https-proxy-agent": "^7.0.6",
        "pac-resolver": "^7.0.1",
        "socks-proxy-agent": "^8.0.5"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/pac-resolver": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/pac-resolver/-/pac-resolver-7.0.1.tgz",
      "integrity": "sha512-5NPgf87AT2STgwa2ntRMr45jTKrYBGkVU36yT0ig/n/GMAa3oPqhZfIQ2kMEimReg0+t9kZViDVZ83qfVUlckg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "degenerator": "^5.0.0",
        "netmask": "^2.0.2"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-cache-control": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parse-cache-control/-/parse-cache-control-1.0.1.tgz",
      "integrity": "sha512-60zvsJReQPX5/QP0Kzfd/VrpjScIQ7SHBW6bFCYfEP+fp0Eppr1SHhIO5nd1PjZtvclzSzES9D/p5nFJurwfWg==",
      "dev": true
    },
    "node_modules/parse-entities": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/parse-entities/-/parse-entities-4.0.2.tgz",
      "integrity": "sha512-GG2AQYWoLgL877gQIKeRPGO1xF9+eG1ujIb5soS5gPvLQ1y2o8FL90w2QWNdf9I361Mpp7726c+lj3U0qK1uGw==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "character-entities-legacy": "^3.0.0",
        "character-reference-invalid": "^2.0.0",
        "decode-named-character-reference": "^1.0.0",
        "is-alphanumerical": "^2.0.0",
        "is-decimal": "^2.0.0",
        "is-hexadecimal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/parse-entities/node_modules/@types/unist": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-2.0.11.tgz",
      "integrity": "sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==",
      "license": "MIT"
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-to-regexp": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.13.tgz",
      "integrity": "sha512-A/AGNMFN3c8bOlvV9RreMdrv7jsmF9XIfDeCd87+I8RNg6s78BhJxMu69NEMHBSJFxKidViTEdruRwEk/WIKqA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pend": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
      "integrity": "sha512-F3asv42UuXchdzt+xXqfW1OGlVBe+mxa2mqI0pg5yAHZPvFmY3Y6drSf/GQ1A86WgWEN9Kzh/WrgKa6iGcHXLg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
      "integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.29",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.29.tgz",
      "integrity": "sha512-49cGhUbXj8Qenv0iTMxA1cFBzxXoctpC9Ujd77t1WcbJIr6nF/eI7g/8MgxrYldFRuAXvja7xQRwavoW7kgrxQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.19",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.7.4",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.7.4.tgz",
      "integrity": "sha512-v6UNi1+3hSlVvv8fSaoUbggEM5VErKmmpGA7Pl3HF8V6uKY7rvClBOJlH6yNwQtfTueNkGVpOv/mtWL9L4bgRA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/progress": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
      "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/property-information": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/property-information/-/property-information-7.2.0.tgz",
      "integrity": "sha512-IAtzIB6sUiWaJYrX9smp3V46pBGbBeLFRGdh25kg1334VcBlD8HzhPeNIWQH9zhGmo2itIe25EHt9dQP7G5hmg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.8.tgz",
      "integrity": "sha512-5nnx0yGyVUcY6t9RnWcARWtwT9F1D8O9rt08htPvnd49W1IgZtmLkhu9WfMzQj1cFxjHIO6connUNVW5k7AVyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/proxy-agent": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/proxy-agent/-/proxy-agent-6.5.0.tgz",
      "integrity": "sha512-TmatMXdr2KlRiA2CyDu8GqR8EjahTG3aY3nXjdzFyoZbmB8hrBsTyMezhULIXKnC0jpfjlmiZ3+EaCzoInSu/A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "^4.3.4",
        "http-proxy-agent": "^7.0.1",
        "https-proxy-agent": "^7.0.6",
        "lru-cache": "^7.14.1",
        "pac-proxy-agent": "^7.1.0",
        "proxy-from-env": "^1.1.0",
        "socks-proxy-agent": "^8.0.5"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/proxy-agent/node_modules/lru-cache": {
      "version": "7.18.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-7.18.3.tgz",
      "integrity": "sha512-jumlc0BIUrS3qJGgIkWZsyfAM7NCWiBcCDhnd+3NNM5KbBmLTgHVfWBcg6W+rLUsIpzpERPsvwUP7CckAQSOoA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pump": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.4.tgz",
      "integrity": "sha512-VS7sjc6KR7e1ukRFhQSY5LM2uBWAUPiOPa/A3mkKmiMwSmRFUITt0xuj+/lesgnCv+dPIEYlkzrcyXgquIHMcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/puppeteer-core": {
      "version": "24.43.1",
      "resolved": "https://registry.npmjs.org/puppeteer-core/-/puppeteer-core-24.43.1.tgz",
      "integrity": "sha512-T5ScUMAsmhdNbgDR41AGESYeS6V9MSgetkSnVhhW+gXvzC42VesKCn5ld87gAZDJ6vLHL9GkRvY9WtQWSnwFbw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@puppeteer/browsers": "2.13.2",
        "chromium-bidi": "14.0.0",
        "debug": "^4.4.3",
        "devtools-protocol": "0.0.1608973",
        "typed-query-selector": "^2.12.2",
        "webdriver-bidi-protocol": "0.4.1",
        "ws": "^8.20.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/puppeteer-core/node_modules/devtools-protocol": {
      "version": "0.0.1608973",
      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1608973.tgz",
      "integrity": "sha512-Tpm17fxYzt+J7VrGdc1k8YdRqS3YV7se/M6KeemEqvUbq/n7At1rWVuXMxQgpWkdwSdIEKYbU//Bve+Shm4YNQ==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/puppeteer-core/node_modules/ws": {
      "version": "8.22.0",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.22.0.tgz",
      "integrity": "sha512-Ydggc987+RO0AnWtZ/7Wq9FtNvcrL1b/RO0ud9mWjUPgDrsAAwQSF51sm2hm1XofbU/4jkpGEsLFsZZxU+1DOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/qs": {
      "version": "6.16.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.16.0.tgz",
      "integrity": "sha512-h6fhOIaRrID2CbEY2fqs+7t+UXZo+MLAnU5gRIq85uFtdiUPCdsApMlHhXogKVM4HM2DVbIjGNTTYH2OcmP1vA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "es-define-property": "^1.0.1",
        "side-channel": "^1.1.1"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "2.5.3",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.3.tgz",
      "integrity": "sha512-s4VSOf6yN0rvbRZGxs8Om5CWj6seneMwK3oDb4lWDH0UPhWcxwOWw5+qk24bxq87szX1ydrwylIOp2uG1ojUpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.4.24",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/react": {
      "version": "19.2.0",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.0.tgz",
      "integrity": "sha512-tmbWg6W31tQLeB5cdIBOicJDJRR2KzXsV7uSK9iNfLWQ5bIZfxuPEHp7M8wiHyHnn0DD1i7w3Zmin0FtkrwoCQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.0.tgz",
      "integrity": "sha512-UlbRu4cAiGaIewkPyiRGJk0imDN2T3JjieT6spoL2UeSf5od4n5LB/mQ4ejmxhCFT1tYe8IvaFulzynWovsEFQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.0"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/recma-build-jsx": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/recma-build-jsx/-/recma-build-jsx-1.0.0.tgz",
      "integrity": "sha512-8GtdyqaBcDfva+GUKDr3nev3VpKAhup1+RvkMvUxURHpW7QyIvk9F5wz7Vzo06CEMSilw6uArgRqhpiUcWp8ew==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-util-build-jsx": "^3.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/recma-jsx": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/recma-jsx/-/recma-jsx-1.0.1.tgz",
      "integrity": "sha512-huSIy7VU2Z5OLv6oFLosQGGDqPqdO1iq6bWNAdhzMxSJP7RAso4fCZ1cKu8j9YHCZf3TPrq4dw3okhrylgcd7w==",
      "license": "MIT",
      "dependencies": {
        "acorn-jsx": "^5.0.0",
        "estree-util-to-js": "^2.0.0",
        "recma-parse": "^1.0.0",
        "recma-stringify": "^1.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      },
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/recma-parse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/recma-parse/-/recma-parse-1.0.0.tgz",
      "integrity": "sha512-OYLsIGBB5Y5wjnSnQW6t3Xg7q3fQ7FWbw/vcXtORTnyaSFscOtABg+7Pnz6YZ6c27fG1/aN8CjfwoUEUIdwqWQ==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "esast-util-from-js": "^2.0.0",
        "unified": "^11.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/recma-stringify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/recma-stringify/-/recma-stringify-1.0.0.tgz",
      "integrity": "sha512-cjwII1MdIIVloKvC9ErQ+OgAtwHBmcZ0Bg4ciz78FtbT8In39aAYbaA7zvxQ61xVMSPE8WxhLwLbhif4Js2C+g==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-util-to-js": "^2.0.0",
        "unified": "^11.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/rehype-recma": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/rehype-recma/-/rehype-recma-1.0.0.tgz",
      "integrity": "sha512-lqA4rGUf1JmacCNWWZx0Wv1dHqMwxzsDWYMTowuplHF3xH0N/MmrZ/G3BDZnzAkRmxDadujCjaKM2hqYdCBOGw==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/hast": "^3.0.0",
        "hast-util-to-estree": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/remark-mdx": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/remark-mdx/-/remark-mdx-3.1.1.tgz",
      "integrity": "sha512-Pjj2IYlUY3+D8x00UJsIOg5BEvfMyeI+2uLPn9VO9Wg4MEtN/VTIq2NEJQfde9PnX15KgtHyl9S0BcTnWrIuWg==",
      "license": "MIT",
      "dependencies": {
        "mdast-util-mdx": "^3.0.0",
        "micromark-extension-mdxjs": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/remark-parse": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/remark-parse/-/remark-parse-11.0.0.tgz",
      "integrity": "sha512-FCxlKLNGknS5ba/1lmpYijMUzX2esxW5xQqjWxw2eHFfS2MSdaHVINFmhjo+qN1WhZhNimq0dZATN9pH0IDrpA==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/remark-rehype": {
      "version": "11.1.2",
      "resolved": "https://registry.npmjs.org/remark-rehype/-/remark-rehype-11.1.2.tgz",
      "integrity": "sha512-Dh7l57ianaEoIpzbp0PC9UKAdCSVklD8E5Rpw7ETfbTl3FqcOOgq5q2LVDhgGCkaBv7p24JXikPdvhhmHvKMsw==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "mdast-util-to-hast": "^13.0.0",
        "unified": "^11.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-main-filename": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
      "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/resolve": {
      "version": "2.0.0-next.7",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.7.tgz",
      "integrity": "sha512-tqt+NBWwyaMgw3zDsnygx4CByWjQEJHOPMdslYhppaQSJUtL/D4JO9CcBBlhPoI8lz9oJIDXkwXfhF4aWqP8xQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.2",
        "node-exports-info": "^1.6.0",
        "object-keys": "^1.1.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/restore-cursor": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
      "integrity": "sha512-6IzJLuGi4+R14vwagDHX+JrXmPVtPpn4mffDJ1UdR7/Edm87fl6yi8mMBIVvFtJaNTUvjughmW4hwLhRG7gC1Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "onetime": "^2.0.0",
        "signal-exit": "^3.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/robots-parser": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/robots-parser/-/robots-parser-3.0.1.tgz",
      "integrity": "sha512-s+pyvQeIKIZ0dx5iJiQk1tPLJAWln39+MI5jtM8wnyws+G5azk+dMnMX0qfbqNetKKNgcWWOdi0sfm+FbQbgdQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/rolldown": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.2.13.tgz",
      "integrity": "sha512-/5apOkwWxtACcQtZ5WlrAsKS4JwXVThQPJZ3RqIruRY9UG9M8e0VlXN068xum/JRKA4aIUoJ13ghe/kGCvidiQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@oxc-project/types": "=0.153.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm-eabi": "1.2.13",
        "@rolldown/binding-android-arm64": "1.2.13",
        "@rolldown/binding-darwin-arm64": "1.2.13",
        "@rolldown/binding-darwin-x64": "1.2.13",
        "@rolldown/binding-freebsd-x64": "1.2.13",
        "@rolldown/binding-linux-arm-gnueabihf": "1.2.13",
        "@rolldown/binding-linux-arm64-gnu": "1.2.13",
        "@rolldown/binding-linux-arm64-musl": "1.2.13",
        "@rolldown/binding-linux-ppc64-gnu": "1.2.13",
        "@rolldown/binding-linux-s390x-gnu": "1.2.13",
        "@rolldown/binding-linux-x64-gnu": "1.2.13",
        "@rolldown/binding-linux-x64-musl": "1.2.13",
        "@rolldown/binding-openharmony-arm64": "1.2.13",
        "@rolldown/binding-win32-arm64-msvc": "1.2.13",
        "@rolldown/binding-win32-x64-msvc": "1.2.13"
      }
    },
    "node_modules/run-async": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
      "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/rxjs": {
      "version": "6.6.7",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
      "integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^1.9.0"
      },
      "engines": {
        "npm": ">=2.0.0"
      }
    },
    "node_modules/rxjs/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.4.tgz",
      "integrity": "sha512-wtZlHyOje6OZTGqAoaDKxFkgRtkF9CnHAVnCHKfuj200wAgL+bSJhdsCD2l0Qx/2ekEXjPWcyKkfGb5CPboslg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/section-matter": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/section-matter/-/section-matter-1.0.0.tgz",
      "integrity": "sha512-vfD3pmTzGpufjScBh50YHKzEu2lxBWhVEHsNGoEXmCmn2hKGfeNLYMzCJpe8cD7gqX7TJluOVpBkAequ6dgMmA==",
      "license": "MIT",
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/send": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/send/-/send-0.19.2.tgz",
      "integrity": "sha512-VMbMxbDeehAxpOtWJXlcUS5E8iXh6QmN+BkRX1GARS3wRaXEEgzCcB10gTQazO42tpNIya8xIyNx8fll1OFPrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "1.2.0",
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "~0.5.2",
        "http-errors": "~2.0.1",
        "mime": "1.6.0",
        "ms": "2.1.3",
        "on-finished": "~2.4.1",
        "range-parser": "~1.2.1",
        "statuses": "~2.0.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/send/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/send/node_modules/debug/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/serve-static": {
      "version": "1.16.3",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.3.tgz",
      "integrity": "sha512-x0RTqQel6g5SY7Lg6ZreMmsOzncHFU7nhnRWkKgWuMTu5NN0DR5oruckMqRvacAN9d5w6ARnRBXl9xhDCgfMeA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "encodeurl": "~2.0.0",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "~0.19.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/sharp": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.35.5.tgz",
      "integrity": "sha512-Ywn4OnzGukp7CDMrp08RQ50YKmuwG47brZgIVPTvBaaAfQlRlygrRqSrxdCiL9M+LlzLBiJ68IR1QqvzHyjC7g==",
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.1.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.8.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.35.5",
        "@img/sharp-darwin-x64": "0.35.5",
        "@img/sharp-freebsd-wasm32": "0.35.5",
        "@img/sharp-libvips-darwin-arm64": "1.3.4",
        "@img/sharp-libvips-darwin-x64": "1.3.4",
        "@img/sharp-libvips-linux-arm": "1.3.4",
        "@img/sharp-libvips-linux-arm64": "1.3.4",
        "@img/sharp-libvips-linux-ppc64": "1.3.4",
        "@img/sharp-libvips-linux-riscv64": "1.3.4",
        "@img/sharp-libvips-linux-s390x": "1.3.4",
        "@img/sharp-libvips-linux-x64": "1.3.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.3.4",
        "@img/sharp-linux-arm": "0.35.5",
        "@img/sharp-linux-arm64": "0.35.5",
        "@img/sharp-linux-ppc64": "0.35.5",
        "@img/sharp-linux-riscv64": "0.35.5",
        "@img/sharp-linux-s390x": "0.35.5",
        "@img/sharp-linux-x64": "0.35.5",
        "@img/sharp-linuxmusl-arm64": "0.35.5",
        "@img/sharp-linuxmusl-x64": "0.35.5",
        "@img/sharp-webcontainers-wasm32": "0.35.5",
        "@img/sharp-win32-arm64": "0.35.5",
        "@img/sharp-win32-ia32": "0.35.5",
        "@img/sharp-win32-x64": "0.35.5"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/sharp/node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.1.tgz",
      "integrity": "sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4",
        "side-channel-list": "^1.0.1",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/smart-buffer": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",
      "integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6.0.0",
        "npm": ">= 3.0.0"
      }
    },
    "node_modules/socks": {
      "version": "2.8.10",
      "resolved": "https://registry.npmjs.org/socks/-/socks-2.8.10.tgz",
      "integrity": "sha512-e0VyvkVTwVYViNovRkZ9aodhxVlyoMn7eJhVUPxZ+eK9P/7CBkxvvsBOHqFPEH416726W8tLXXXjKwqgTErrCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ip-address": "^10.1.1",
        "smart-buffer": "^4.2.0"
      },
      "engines": {
        "node": ">= 10.0.0",
        "npm": ">= 3.0.0"
      }
    },
    "node_modules/socks-proxy-agent": {
      "version": "8.0.5",
      "resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-8.0.5.tgz",
      "integrity": "sha512-HehCEsotFqbPW9sJ8WVYB6UbmIMv7kUUORIF2Nncq4VQvBfNBLibW9YZR5dlYCSUhwcD628pRllm7n+E+YTzJw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "^4.3.4",
        "socks": "^2.8.3"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/source-map": {
      "version": "0.7.6",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.6.tgz",
      "integrity": "sha512-i5uvt8C3ikiWeNZSVZNWcfZPItFQOsYTUAOkcUPGd8DqDy1uOUikjt5dG+uRlwyvR108Fb9DOd4GvXfT0N2/uQ==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.2.tgz",
      "integrity": "sha512-KGj/8Y43x35aZVDtt+J4mK1hoLGHULMYfSkODJNQjNDC3oW1PqPoxMwo0pLUsWM/UEGzON/NxeHywEfNXNP3Vw==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/space-separated-tokens": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/space-separated-tokens/-/space-separated-tokens-2.0.2.tgz",
      "integrity": "sha512-PEGlAwrG8yXGXRjW32fGbg66JAlOAwbObuqVoJpv/mRgoWDQfgH1wDPvtzWyUSNAXBGSk8h755YDbbcEy3SH2Q==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/speedline-core": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/speedline-core/-/speedline-core-1.4.3.tgz",
      "integrity": "sha512-DI7/OuAUD+GMpR6dmu8lliO2Wg5zfeh+/xsdyJZCzd8o5JgFUjCeLsBDuZjIQJdwXS3J0L/uZYrELKYqx+PXog==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "image-ssim": "^0.2.0",
        "jpeg-js": "^0.4.1"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==",
      "license": "BSD-3-Clause"
    },
    "node_modules/stable-hash": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
      "integrity": "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/std-env": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/std-env/-/std-env-4.3.0.tgz",
      "integrity": "sha512-OtU/EgQ1kIm5KwqQpBC6ZEMXrZRui11w8zgfTWp8cdO9B8OaPsbA8bTHO2P+HNo1VlUTGMVBwPhydu6poeXiag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
      "integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/streamx": {
      "version": "2.28.1",
      "resolved": "https://registry.npmjs.org/streamx/-/streamx-2.28.1.tgz",
      "integrity": "sha512-zEzXb0s5Cds7tqMH6rhZ05lcJydCWiQPEwiNngVqzsxCc962vLY4Uw+mW7od8kDH258k2Uz/JrOkdIAAhSh9VA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "events-universal": "^1.0.0",
        "fast-fifo": "^1.3.2",
        "text-decoder": "^1.1.0"
      }
    },
    "node_modules/string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/string-width/node_modules/ansi-regex": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.1.tgz",
      "integrity": "sha512-+O9Jct8wf++lXxxFc4hc8LsjaSq0HFzzL7cVsw8pRDIPdjKD2mT4ytDZlLuSBZ4cLKZFXIrMGO7DbQCtMJJMKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/string-width/node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha512-4XaJ2zQdCzROZDivEVIDPkcQn8LMFSa8kj8Gxb/Lnwzv9A8VctNZ+lfivC/sV3ivW8ElJTERXZoPBRrZKkNKow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
      "integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.1.0.tgz",
      "integrity": "sha512-tHNHTxInrYLCga9O9YGxWA3G9/nnzQw8UGAyqGx3Ar1pSTTzIuM4woFSq4SowkXCjJIwq5sIiQvEfRI9tCH1qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.4",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.11",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.11.tgz",
      "integrity": "sha512-PwvK7BU+CMTJGYQCTZb5RWXIML92lftJLhQz1tBzgKiqGxJaMlBAa48POXaNAC2s4y8jr3EFqrkF9+44neS46w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-object-atoms": "^1.1.2",
        "has-property-descriptors": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.10.tgz",
      "integrity": "sha512-2+3aDAOmPTmuFwjDnmJG2ctEkQKVki7vOSqaxkv42Mowj1V6PnvuwFCRrR5lChUux1TBskPjfkeTOhqczDMxTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/stringify-entities": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/stringify-entities/-/stringify-entities-4.0.4.tgz",
      "integrity": "sha512-IwfBptatlO+QCJUo19AqvrPNqlVMpW9YEL2LIVY+Rpv2qsjCGxaDLNRgeGsQWJhfItebuJhsGSLjaBbNSQ+ieg==",
      "license": "MIT",
      "dependencies": {
        "character-entities-html4": "^2.0.0",
        "character-entities-legacy": "^3.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^4.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-bom-string": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom-string/-/strip-bom-string-1.0.0.tgz",
      "integrity": "sha512-uCC2VHvQRYu+lMh4My/sFNmF2klFymLX1wHJeXnbEJERpV/ZsVuonzerjfrGpIGF7LBVa1O7i9kjiWvJiFck8g==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/style-to-js": {
      "version": "1.1.21",
      "resolved": "https://registry.npmjs.org/style-to-js/-/style-to-js-1.1.21.tgz",
      "integrity": "sha512-RjQetxJrrUJLQPHbLku6U/ocGtzyjbJMP9lCNK7Ag0CNh690nSH8woqWH9u16nMjYBAok+i7JO1NP2pOy8IsPQ==",
      "license": "MIT",
      "dependencies": {
        "style-to-object": "1.0.14"
      }
    },
    "node_modules/style-to-object": {
      "version": "1.0.14",
      "resolved": "https://registry.npmjs.org/style-to-object/-/style-to-object-1.0.14.tgz",
      "integrity": "sha512-LIN7rULI0jBscWQYaSswptyderlarFkjQ+t79nzty8tcIAceVomEVlLzH5VP4Cmsv6MtKhs7qaAiwlcp+Mgaxw==",
      "license": "MIT",
      "dependencies": {
        "inline-style-parser": "0.2.7"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.18.tgz",
      "integrity": "sha512-4+Z+0yiYyEtUVCScyfHCxOYP06L5Ne+JiHhY2IjR2KWMIWhJOYZKLSGZaP5HkZ8+bY0cxfzwDE5uOmzFXyIwxw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tar-fs": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/tar-fs/-/tar-fs-3.1.3.tgz",
      "integrity": "sha512-/hU4AXnIdZu+Gvl1pk0oI5f5HxWsCJRtY2aFaJdk9VvyL48DWU6iU5WAIPG+wIi1YvWA6eTJvIviP/tMAZZNwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pump": "^3.0.0",
        "tar-stream": "^3.1.5"
      },
      "optionalDependencies": {
        "bare-fs": "^4.0.1",
        "bare-path": "^3.0.0"
      }
    },
    "node_modules/tar-stream": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-3.2.2.tgz",
      "integrity": "sha512-+8NeqHRjQWH9nYlwo2gamAMImZCVzI4UoEgDpWorBt9OEfppiZn+uSkskzQKPWIZyji/C8fpWO7u69G0DX0tbg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "b4a": "^1.9.0",
        "bare-fs": "^4.8.2",
        "fast-fifo": "^1.3.2",
        "streamx": "^2.28.1"
      }
    },
    "node_modules/tar-stream/node_modules/b4a": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/b4a/-/b4a-1.9.0.tgz",
      "integrity": "sha512-dpfcF9fDNR6++cthXR67iyhgqWy9CBouAvIWhIntzBG6cvK/cnIPiZQjBwi/ZqjjBEDGfoNDtmB0kTjroOJ3pQ==",
      "dev": true,
      "license": "Apache-2.0",
      "peerDependencies": {
        "react-native-b4a": "*"
      },
      "peerDependenciesMeta": {
        "react-native-b4a": {
          "optional": true
        }
      }
    },
    "node_modules/teex": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/teex/-/teex-1.0.1.tgz",
      "integrity": "sha512-eYE6iEI62Ni1H8oIa7KlDU6uQBtqr4Eajni3wX7rpfXD8ysFx8z0+dri+KWEPWpBsxXfxu58x/0jvTVT1ekOSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "streamx": "^2.12.5"
      }
    },
    "node_modules/text-decoder": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/text-decoder/-/text-decoder-1.2.7.tgz",
      "integrity": "sha512-vlLytXkeP4xvEq2otHeJfSQIRyWxo/oZGEbXrtEEF9Hnmrdly59sUbzZ/QgyWuLYHctCHxFF4tRQZNQ9k60ExQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "b4a": "^1.6.4"
      }
    },
    "node_modules/text-decoder/node_modules/b4a": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/b4a/-/b4a-1.9.0.tgz",
      "integrity": "sha512-dpfcF9fDNR6++cthXR67iyhgqWy9CBouAvIWhIntzBG6cvK/cnIPiZQjBwi/ZqjjBEDGfoNDtmB0kTjroOJ3pQ==",
      "dev": true,
      "license": "Apache-2.0",
      "peerDependencies": {
        "react-native-b4a": "*"
      },
      "peerDependenciesMeta": {
        "react-native-b4a": {
          "optional": true
        }
      }
    },
    "node_modules/third-party-web": {
      "version": "0.26.7",
      "resolved": "https://registry.npmjs.org/third-party-web/-/third-party-web-0.26.7.tgz",
      "integrity": "sha512-buUzX4sXC4efFX6xg2bw6/eZsCUh8qQwSavC4D9HpONMFlRbcHhD8Je5qwYdCpViR6q0qla2wPP+t91a2vgolg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha512-w89qg7PI8wAdvX60bMDP+bFoD5Dvhm9oLheFp5O4a2QF0cSBGsBX4qZmadPMvVqlLJBBci+WqGGOAPvcDeNSVg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinybench": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/tinybench/-/tinybench-6.2.2.tgz",
      "integrity": "sha512-nIZ2N2dFpjBsg2hgitKu7mA+FvsIJuGJOwysRngmVRRmWgR/UyPjwJj8c/fT/dhm8EkHnF5EOogRf+0Z2qrimA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/tinyexec": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-1.3.1.tgz",
      "integrity": "sha512-GCvB3aoys96IuDFBMcTB46JOR6mdMtAToqwiW8JlWhsoh1mhHi/xn9ss/Dg7N555GiJyEt2qzoG/NHCwM6h1EA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.7.tgz",
      "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/tldts-core": {
      "version": "6.1.86",
      "resolved": "https://registry.npmjs.org/tldts-core/-/tldts-core-6.1.86.tgz",
      "integrity": "sha512-Je6p7pkk+KMzMv2XXKmAE3McmolOQFdxkKw0R8EYNr7sELW46JqnNeTX8ybPiQgvg1ymCoF8LXs5fzFaZvJPTA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tldts-icann": {
      "version": "6.1.86",
      "resolved": "https://registry.npmjs.org/tldts-icann/-/tldts-icann-6.1.86.tgz",
      "integrity": "sha512-NFxmRT2lAEMcCOBgeZ0NuM0zsK/xgmNajnY6n4S1mwAKocft2s2ise1O3nQxrH3c+uY6hgHUV9GGNVp7tUE4Sg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tldts-core": "^6.1.86"
      }
    },
    "node_modules/tmp": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.1.0.tgz",
      "integrity": "sha512-J7Z2K08jbGcdA1kkQpJSqLF6T0tdQqpR2pnSUXsIchbPdTI9v3e85cLW0d6WDhwuAleOV71j2xWs8qMPfK7nKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "rimraf": "^2.6.3"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tmp/node_modules/rimraf": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
      "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tree-kill": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
      "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "tree-kill": "cli.js"
      }
    },
    "node_modules/trim-lines": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/trim-lines/-/trim-lines-3.0.1.tgz",
      "integrity": "sha512-kRj8B+YHZCc9kQYdWfJB2/oUl9rA99qbowYYBtr4ui4mZyAQ2JpvVBd/6U2YloATfqBhBTSMhTpgBHtU0Mf3Rg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/trough": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/trough/-/trough-2.2.0.tgz",
      "integrity": "sha512-tmMpK00BjZiUyVyvrBK7knerNgmgvcV/KLVyuma/SC+TQN167GrMRciANTz09+k3zW8L8t60jWO1GpfkZdjTaw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.5.0.tgz",
      "integrity": "sha512-OJ/ibxhPlqrMM0UiNHJ/0CKQkoKF243/AEmplt3qpRgkW8VG7IfOS41h7V8TjITqdByHzrjcS/2si+y4lIh8NA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tsconfig-paths/node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/tsx": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.21.0.tgz",
      "integrity": "sha512-5C1sg4USs1lfG0GFb2RLXsdpXqBSEhAaA/0kPL01wxzpMqLILNxIxIOKiILz+cdg/pLnOUxFYOR5yhHU666wbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "~0.27.0",
        "get-tsconfig": "^4.7.5"
      },
      "bin": {
        "tsx": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.5.tgz",
      "integrity": "sha512-0FHJvLPqZ7KJzp17O13jfsAjsqazgrxBu2zEK95PmUz8lv2+GjRuxUInCr2Rk9Dms3ihN21zJ929ZO43yJ95QQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.9",
        "for-each": "^0.3.5",
        "gopd": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.8.tgz",
      "integrity": "sha512-phPGCwqr2+Qo0fwniCE8e4pKnGu/yFb5nD5Y8bf0EEeiI5GklnACYA9GFy/DrAeRrKHXvHn+1SUsOWgJp6RO+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "for-each": "^0.3.5",
        "gopd": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "possible-typed-array-names": "^1.1.0",
        "reflect.getprototypeof": "^1.0.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-query-selector": {
      "version": "2.12.3",
      "resolved": "https://registry.npmjs.org/typed-query-selector/-/typed-query-selector-2.12.3.tgz",
      "integrity": "sha512-/dtuMZyutHLlrxWhhC1uib00ELUr2dZ8C9B8YzZYsJmeE3V56OxRblrSM2UaF142pcMtak7ehZ6+poWGeehNIg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/typedarray-to-buffer": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-typedarray": "^1.0.0"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.71.1",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.71.1.tgz",
      "integrity": "sha512-oiNVPC3/NbV1FpaHU07l8O6ynqG9v4PAiW2WvTrAmZdR0f2HI/gE668ElMLCK7Xbsu5k2fK5C4fXNiq05j7/nQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.71.1",
        "@typescript-eslint/parser": "8.71.1",
        "@typescript-eslint/typescript-estree": "8.71.1",
        "@typescript-eslint/utils": "8.71.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.16.0.tgz",
      "integrity": "sha512-Zz+aZWSj8LE6zoxD+xrjh4VfkIG8Ya6LvYkZqtUQGJPZjYl53ypCaUwWqo7eI0x66KBGeRo+mlBEkMSeSZ38Nw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unified": {
      "version": "11.0.5",
      "resolved": "https://registry.npmjs.org/unified/-/unified-11.0.5.tgz",
      "integrity": "sha512-xKvGhPWw3k84Qjh8bI3ZeJjqnyadK+GEFtazSfZv/rKeTkTjOJho6mFqh2SM96iIcZokxiOpg78GazTSg8+KHA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "bail": "^2.0.0",
        "devlop": "^1.0.0",
        "extend": "^3.0.0",
        "is-plain-obj": "^4.0.0",
        "trough": "^2.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unique-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
      "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "crypto-random-string": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/unist-util-is": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/unist-util-is/-/unist-util-is-6.0.1.tgz",
      "integrity": "sha512-LsiILbtBETkDz8I9p1dQ0uyRUWuaQzd/cuEeS1hoRSyW5E5XGmTzlwY1OrNzzakGowI9Dr/I8HVaw4hTtnxy8g==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-position": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-position/-/unist-util-position-5.0.0.tgz",
      "integrity": "sha512-fucsC7HjXvkB5R3kTCO7kUjRdrS0BJt3M/FPxmHMBOm8JQi2BsHAHFsy27E0EolP8rp0NzXsJ+jNPyDWvOJZPA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-position-from-estree": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-position-from-estree/-/unist-util-position-from-estree-2.0.0.tgz",
      "integrity": "sha512-KaFVRjoqLyF6YXCbVLNad/eS4+OfPQQn2yOd7zF/h5T/CSL2v8NpN6a5TPvtbXthAGw5nG+PuTtq+DdIZr+cRQ==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-remove": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/unist-util-remove/-/unist-util-remove-3.1.1.tgz",
      "integrity": "sha512-kfCqZK5YVY5yEa89tvpl7KnBBHu2c6CzMkqHUrlOqaRgGOMp0sMvwWOVrbAtj03KhovQB7i96Gda72v/EFE0vw==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "unist-util-is": "^5.0.0",
        "unist-util-visit-parents": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-remove/node_modules/@types/unist": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-2.0.11.tgz",
      "integrity": "sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==",
      "license": "MIT"
    },
    "node_modules/unist-util-remove/node_modules/unist-util-is": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/unist-util-is/-/unist-util-is-5.2.1.tgz",
      "integrity": "sha512-u9njyyfEh43npf1M+yGKDGVPbY/JWEemg5nH05ncKPfi+kBbKBJoTdsogMu33uhytuLlv9y0O7GH7fEdwLdLQw==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-stringify-position": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-stringify-position/-/unist-util-stringify-position-4.0.0.tgz",
      "integrity": "sha512-0ASV06AAoKCDkS2+xw5RXJywruurpbC4JZSm7nr7MOt1ojAzvyyaO+UxZf18j8FCF6kmzCZKcAgN/yu2gm2XgQ==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/unist-util-visit/-/unist-util-visit-5.1.0.tgz",
      "integrity": "sha512-m+vIdyeCOpdr/QeQCu2EzxX/ohgS8KbnPDgFni4dQsfSCtpz8UqDyY5GjRru8PDKuYn7Fq19j1CQ+nJSsGKOzg==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-is": "^6.0.0",
        "unist-util-visit-parents": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit-parents": {
      "version": "5.1.3",
      "resolved": "https://registry.npmjs.org/unist-util-visit-parents/-/unist-util-visit-parents-5.1.3.tgz",
      "integrity": "sha512-x6+y8g7wWMyQhL1iZfhIPhDAs7Xwbn9nRosDXl7qoPTSCy0yNxnKc+hWokFifWQIDGi154rdUqKvbCa4+1kLhg==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "unist-util-is": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit-parents/node_modules/@types/unist": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-2.0.11.tgz",
      "integrity": "sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==",
      "license": "MIT"
    },
    "node_modules/unist-util-visit-parents/node_modules/unist-util-is": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/unist-util-is/-/unist-util-is-5.2.1.tgz",
      "integrity": "sha512-u9njyyfEh43npf1M+yGKDGVPbY/JWEemg5nH05ncKPfi+kBbKBJoTdsogMu33uhytuLlv9y0O7GH7fEdwLdLQw==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit/node_modules/unist-util-visit-parents": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/unist-util-visit-parents/-/unist-util-visit-parents-6.0.2.tgz",
      "integrity": "sha512-goh1s1TBrqSqukSc8wrjwWhL0hiJxgA8m4kFxGlQ+8FYQ3C/m11FcTs4YYem7V664AhHVvgoQLk890Ssdsr2IQ==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-is": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/unrs-resolver": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.12.2.tgz",
      "integrity": "sha512-dmlRxBJJayXjqTwC+JtF1HhJmgf3ftQ3YejFcZrf4+KKtJv0qDsK1pjqaaVjG7wJ5NJ6UVP1OqRMQ71Z4C3rxQ==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "napi-postinstall": "^0.3.4"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.12.2",
        "@unrs/resolver-binding-android-arm64": "1.12.2",
        "@unrs/resolver-binding-darwin-arm64": "1.12.2",
        "@unrs/resolver-binding-darwin-x64": "1.12.2",
        "@unrs/resolver-binding-freebsd-x64": "1.12.2",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.12.2",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.12.2",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-arm64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-loong64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-loong64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-x64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-x64-musl": "1.12.2",
        "@unrs/resolver-binding-openharmony-arm64": "1.12.2",
        "@unrs/resolver-binding-wasm32-wasi": "1.12.2",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.12.2",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.12.2",
        "@unrs/resolver-binding-win32-x64-msvc": "1.12.2"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.3.4.tgz",
      "integrity": "sha512-t8wonIOdQyOjtPd2VktlBu6QjTVTks6v8bSi7kd0r2Vll8TK1JYDZtRRdbmCHOAMphkZgrzK+L+vXK4pyZ8t4A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/uuid": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
      "deprecated": "uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).",
      "dev": true,
      "license": "MIT",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vfile": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/vfile/-/vfile-6.0.3.tgz",
      "integrity": "sha512-KzIbH/9tXat2u30jf+smMwFCsno4wHVdNmzFyL+T/L3UGqqk6JKfVqOFOZEpZSHADH1k40ab6NUIXZq422ov3Q==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/vfile-matter": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/vfile-matter/-/vfile-matter-5.0.1.tgz",
      "integrity": "sha512-o6roP82AiX0XfkyTHyRCMXgHfltUNlXSEqCIS80f+mbAyiQBE2fxtDVMtseyytGx75sihiJFo/zR6r/4LTs2Cw==",
      "license": "MIT",
      "dependencies": {
        "vfile": "^6.0.0",
        "yaml": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/vfile-message": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/vfile-message/-/vfile-message-4.0.3.tgz",
      "integrity": "sha512-QTHzsGd1EhbZs4AsQ20JX1rC3cOlt/IWJruk893DfLRr57lcnOeMaWG4K0JrRta4mIJZKth2Au3mM3u03/JWKw==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-stringify-position": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/vite": {
      "version": "8.3.4",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.3.4.tgz",
      "integrity": "sha512-IftLE8phJhdNRIGNEV4JCCvfNScoZQVfcXaN8TQropWGJtOHcu+iAB9pHcuGvmEb/kddw0LBe/jS8ztdC6xdiQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "lightningcss": "^1.33.0",
        "picomatch": "^4.0.7",
        "postcss": "^8.5.29",
        "rolldown": "~1.2.12",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.7.1",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vite/node_modules/lightningcss": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.33.0.tgz",
      "integrity": "sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==",
      "dev": true,
      "license": "MPL-2.0",
      "peer": true,
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.33.0",
        "lightningcss-darwin-arm64": "1.33.0",
        "lightningcss-darwin-x64": "1.33.0",
        "lightningcss-freebsd-x64": "1.33.0",
        "lightningcss-linux-arm-gnueabihf": "1.33.0",
        "lightningcss-linux-arm64-gnu": "1.33.0",
        "lightningcss-linux-arm64-musl": "1.33.0",
        "lightningcss-linux-x64-gnu": "1.33.0",
        "lightningcss-linux-x64-musl": "1.33.0",
        "lightningcss-win32-arm64-msvc": "1.33.0",
        "lightningcss-win32-x64-msvc": "1.33.0"
      }
    },
    "node_modules/vite/node_modules/lightningcss-android-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.33.0.tgz",
      "integrity": "sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-darwin-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.33.0.tgz",
      "integrity": "sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-darwin-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.33.0.tgz",
      "integrity": "sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-freebsd-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.33.0.tgz",
      "integrity": "sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.33.0.tgz",
      "integrity": "sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.33.0.tgz",
      "integrity": "sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.33.0.tgz",
      "integrity": "sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.33.0.tgz",
      "integrity": "sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-linux-x64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.33.0.tgz",
      "integrity": "sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.33.0.tgz",
      "integrity": "sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.33.0.tgz",
      "integrity": "sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/picomatch": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.7.tgz",
      "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/vitest": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/vitest/-/vitest-5.0.3.tgz",
      "integrity": "sha512-xMw97S3rjdtj5dkVat7jCsqWBpvchs3RlpQctUqwJD0KkERk40vz2fJ77lDwW/Vzh/pk18eItYAzkodhSes3jQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/chai": "^5.2.2",
        "@vitest/mocker": "5.0.3",
        "chai": "^6.2.2",
        "es-module-lexer": "^2.3.2",
        "expect-type": "^1.4.0",
        "magic-string": "^1.2.3",
        "obug": "^2.1.4",
        "picomatch": "^4.0.7",
        "std-env": "^4.2.0",
        "tinybench": "^6.1.4",
        "tinyexec": "^1.3.0",
        "tinyglobby": "^0.2.17",
        "why-is-node-running": "3.2.1"
      },
      "bin": {
        "vitest": "vitest.mjs"
      },
      "engines": {
        "node": "^22.12.0 || ^24.0.0 || >=26.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "@edge-runtime/vm": "*",
        "@opentelemetry/api": "^1.9.0",
        "@types/node": "^22.0.0 || >=24.0.0",
        "@vitest/browser-playwright": "5.0.3",
        "@vitest/browser-preview": "5.0.3",
        "@vitest/browser-webdriverio": "^5.0.0-beta.5 || >=5.0.0",
        "@vitest/coverage-istanbul": "5.0.3",
        "@vitest/coverage-v8": "5.0.3",
        "@vitest/ui": "5.0.3",
        "happy-dom": "*",
        "jsdom": "*",
        "vite": "^6.4.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "@edge-runtime/vm": {
          "optional": true
        },
        "@opentelemetry/api": {
          "optional": true
        },
        "@types/node": {
          "optional": true
        },
        "@vitest/browser-playwright": {
          "optional": true
        },
        "@vitest/browser-preview": {
          "optional": true
        },
        "@vitest/browser-webdriverio": {
          "optional": true
        },
        "@vitest/coverage-istanbul": {
          "optional": true
        },
        "@vitest/coverage-v8": {
          "optional": true
        },
        "@vitest/ui": {
          "optional": true
        },
        "happy-dom": {
          "optional": true
        },
        "jsdom": {
          "optional": true
        },
        "vite": {
          "optional": false
        }
      }
    },
    "node_modules/vitest/node_modules/magic-string": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-1.4.3.tgz",
      "integrity": "sha512-z12OxmaPGE0F4xlpGdjuAUckipLpQlTAuAmyGhNoD7ODpYUzvDfvtxUbjM/jwznyP178oju/KDdyi220wNJ0RQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.6.0"
      }
    },
    "node_modules/vitest/node_modules/picomatch": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.7.tgz",
      "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/webdriver-bidi-protocol": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/webdriver-bidi-protocol/-/webdriver-bidi-protocol-0.4.1.tgz",
      "integrity": "sha512-ARrjNjtWRRs2w4Tk7nqrf2gBI0QXWuOmMCx2hU+1jUt6d00MjMxURrhxhGbrsoiZKJrhTSTzbIrc554iKI10qw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/whatwg-fetch": {
      "version": "3.6.20",
      "resolved": "https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-3.6.20.tgz",
      "integrity": "sha512-EqhiFU6daOA8kpjOWTL0olhVOF3i7OrFzSYiGsEMB8GcXS+RrzauAERX65xMeNWVqxA6HXH2m69Z9LaKKdisfg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-module": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.1.tgz",
      "integrity": "sha512-iBdZ57RDvnOR9AGBhML2vFZf7h8vmBjhoaZqODJBFWHVtKkDmKuHai3cx5PgVMrX5YDNp27AofYbAwctSS+vhQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/which-typed-array": {
      "version": "1.1.24",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.24.tgz",
      "integrity": "sha512-wk4Mf4pR5mRP7eYuuTBCIQ9d0ud2Fv2jRLQpfgnRjbOxAFHmjKFValgTpitVKzJJS8ajnYQV2Du1SZ8j6b/EUQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/why-is-node-running": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/why-is-node-running/-/why-is-node-running-3.2.1.tgz",
      "integrity": "sha512-Tb2FUhB4vUsGQlfSquQLYkApkuPAFQXGFzxWKHHumVz2dK+X1RUm/HnID4+TfIGYJ1kTcwOaCk/buYCEJr6YjQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "why-is-node-running": "cli.js"
      },
      "engines": {
        "node": ">=20.11"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
      "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/write-file-atomic": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
      "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "imurmurhash": "^0.1.4",
        "is-typedarray": "^1.0.0",
        "signal-exit": "^3.0.2",
        "typedarray-to-buffer": "^3.1.5"
      }
    },
    "node_modules/ws": {
      "version": "7.5.13",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.13.tgz",
      "integrity": "sha512-rsKI6xDBFVf4r/x8XyChGK04QR/XHroxs/jUcoWvtEZM8TPU/X/uIY9B1CsSzYws9ZJb/6bbBu7dPhFW00CAoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.3.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": "^5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/xdg-basedir": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-4.0.0.tgz",
      "integrity": "sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/y18n": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz",
      "integrity": "sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yaml": {
      "version": "2.9.1",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.9.1.tgz",
      "integrity": "sha512-3NxN8+78OdzbT7C/WjGsyfPAtJaN3FNDsWxv7Y7mcDsT/oOmgW8BpyQQFFBnvZE3j9Y2Sdz1ULFLezL7Eb2yFw==",
      "license": "ISC",
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/eemeli"
      }
    },
    "node_modules/yargs": {
      "version": "15.4.1",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
      "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^6.0.0",
        "decamelize": "^1.2.0",
        "find-up": "^4.1.0",
        "get-caller-file": "^2.0.1",
        "require-directory": "^2.1.1",
        "require-main-filename": "^2.0.0",
        "set-blocking": "^2.0.0",
        "string-width": "^4.2.0",
        "which-module": "^2.0.0",
        "y18n": "^4.0.0",
        "yargs-parser": "^18.1.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs-parser": {
      "version": "13.1.2",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.2.tgz",
      "integrity": "sha512-3lbsNRf/j+A4QuSZfDRA7HRSfWrzO0YjqTJd5kjAq37Zep1CEgaYmrH9Q3GwPiB9cHyd1Y1UwggGhJGoxipbzg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "camelcase": "^5.0.0",
        "decamelize": "^1.2.0"
      }
    },
    "node_modules/yargs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/yargs/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/yargs/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/yargs-parser": {
      "version": "18.1.3",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
      "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "camelcase": "^5.0.0",
        "decamelize": "^1.2.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yauzl": {
      "version": "2.10.0",
      "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz",
      "integrity": "sha512-p4a9I6X6nu6IhoGmBqAcbJy1mlC4j27vEPZX9F4L4/vZT3Lyq1VkFHw/V/PUcB9Buo+DG3iHkT0x3Qya58zc3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer-crc32": "~0.2.3",
        "fd-slicer": "~1.1.0"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.3.6",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.3.6.tgz",
      "integrity": "sha512-rftlrkhHZOcjDwkGlnUtZZkvaPHCsDATp4pGpuOOMDaTdDDXF91wuVDJoWoPsKX/3YPQ5fHuF3STjcYyKr+Qhg==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    },
    "node_modules/zwitch": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/zwitch/-/zwitch-2.0.4.tgz",
      "integrity": "sha512-bXE4cR/kVZhKZX/RjPEflHaKVhUVl85noU3v6b8apfQEc1x4A+zBxjZ4lN8LqGd6WZ3dl98pY4o717VFmoPp+A==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    }
  }
}
````

## package.json

````json
{
  "name": "driveway-calculators",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "validate": "node --import tsx scripts/validate.ts",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "build": "npm run validate && next build --webpack && node --import tsx scripts/check-export.ts",
    "build:launch": "SITE_STAGE=launch npm run build",
    "check": "npm run typecheck && npm test && npm run build",
    "format": "prettier --write .",
    "lint": "eslint ."
  },
  "dependencies": {
    "next": "16.4.0",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "next-mdx-remote": "5.0.0",
    "gray-matter": "4.0.3",
    "zod": "4.3.6"
  },
  "devDependencies": {
    "typescript": "5.9.3",
    "@types/node": "24.10.1",
    "@types/react": "19.2.7",
    "@types/react-dom": "19.2.3",
    "tailwindcss": "4.1.18",
    "@tailwindcss/postcss": "4.1.18",
    "vitest": "5.0.3",
    "tsx": "4.21.0",
    "prettier": "3.7.4",
    "eslint": "9.39.2",
    "eslint-config-next": "16.4.0",
    "@cloudflare/workers-types": "5.20261011.1",
    "@lhci/cli": "0.15.1"
  },
  "type": "module"
}
````

## postcss.config.mjs

````text
export default { plugins: { '@tailwindcss/postcss': {} } };
````

## public/_headers

````text
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
/api/*
  X-Robots-Tag: noindex, nofollow
  Cache-Control: no-store
````

## public/icon.svg

````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#172d35"/><path d="M14 54L25 10H39L50 54M32 16V24M32 31V39M32 46V54" stroke="#f7f6f0" stroke-width="4" fill="none"/></svg>
````

## scripts/check-export.ts

````typescript
import fs from 'node:fs';
import { pages, trustPages } from '../lib/content';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { renderExample } from '../lib/calc';
import { toolFor } from '../lib/calc/ui';
const errors: string[] = [];
const urls = [...pages.map((p) => p.url), ...trustPages.map((p) => p.url)];
for (const url of urls) {
  const file = 'out' + url + 'index.html';
  if (!fs.existsSync(file)) {
    errors.push('Missing export ' + url);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const visibleHtml = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
  if (/\{\{(?:DATA|LOW|HIGH):?/.test(visibleHtml)) errors.push('Visible source placeholder ' + url);
  if (/arithmetic fixture|project specification|Technical review:/i.test(visibleHtml))
    errors.push('Visible internal editorial wording ' + url);
  if ([...visibleHtml.matchAll(/<h1\b/g)].length !== 1)
    errors.push('Page requires exactly one H1 ' + url);
  if (!html.includes('https://drivewaycalc.online' + url)) errors.push('Missing canonical ' + url);
  if (process.env.SITE_STAGE !== 'launch' && !html.includes('noindex'))
    errors.push('Draft missing noindex ' + url);
  for (const href of html.matchAll(/href="(\/[^"?#]*)"/g)) {
    const dest = href[1];
    if (dest.startsWith('/_next/') || dest === '/icon.svg') continue;
    if (!urls.includes(dest)) errors.push(`${url}: unknown internal link ${dest}`);
  }
  const page = pages.find((p) => p.url === url);
  if (page) {
    const heading = html
      .match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]
      ?.replace(/<br\s*\/?>/g, ' ')
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const expectedHeading = page.url === '/' ? 'Driveway Calculators.' : page.h1;
    if (heading !== expectedHeading) errors.push('Incorrect exported H1 ' + url);
    if (!html.includes(`<title>${page.title}</title>`))
      errors.push('Incorrect exported title ' + url);
    const meta = renderToStaticMarkup(
      createElement('meta', { name: 'description', content: page.description }),
    );
    if (!html.includes(meta)) errors.push('Incorrect exported description ' + url);
    const kind = toolFor(page.seq);
    const example =
      kind === 'asphalt'
        ? 'asphalt'
        : kind === 'gravel' || kind === 'layers'
          ? 'gravel'
          : kind === 'concrete'
            ? 'concrete'
            : null;
    if (example && !html.includes(renderExample(example)))
      errors.push('Worked example disagrees with engine ' + url);
  }
}
if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exit(1);
}
console.log(
  `Verified ${urls.length} exported pages: routes, canonical tags, internal links, generated examples, and draft indexing controls.`,
);
````

## scripts/validate.ts

````typescript
import fs from 'node:fs';
import sourceMetadata from '../data/source-metadata.json';
import { validateMetadata } from '../lib/metadata-validation';
import { pages, getContent, trustPages } from '../lib/content';
import defaults from '../data/defaults.json';
import prices from '../data/prices.json';
import checklist from '../data/launch-checklist.json';
import sources from '../data/sources.json';
const errors: string[] = [];
const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
const urls = new Set([...pages.map((p) => p.url), ...trustPages.map((p) => p.url)]);
const seqs = new Set(pages.map((p) => p.seq));
if (sourceMetadata.length !== 51 || new Set(sourceMetadata.map((p) => p.url)).size !== 51)
  errors.push('Source metadata register must contain 51 unique pages.');
if (pages.length !== 51 || seqs.size !== 51)
  errors.push('The master map must contain 51 unique pages.');
for (const seq of [26, 28, 34, 52])
  if (seqs.has(seq)) errors.push(`Merged Seq ${seq} must not have a page.`);
for (const [phase, count] of [
  ['1', 10],
  ['1b', 18],
  ['2', 22],
  ['3', 1],
] as const)
  if (pages.filter((p) => p.phase === phase).length !== count)
    errors.push(`Incorrect count for Phase ${phase}.`);
const published = pages.filter((p) => getContent(p.url).data.status === 'published');
const launch = process.env.SITE_STAGE === 'launch';
const requiredModules = [
  'AnswerBlock',
  'CalculatorShell',
  'ResultCard',
  'FormulaBox',
  'QASection',
  'RelatedLink',
  'SourceNote',
  'LastUpdated',
  'Disclosure',
];
for (const p of pages) {
  const { data, content } = getContent(p.url);
  errors.push(
    ...validateMetadata(
      p,
      sourceMetadata.find((row) => row.url === p.url),
      data,
    ).map((message) => `${p.url}: ${message}`),
  );
  const slug = p.url.replaceAll('/', '') || 'home';
  if (!/^\/(?:[a-z-]+\/)?$/.test(p.url))
    errors.push(`${p.url}: URL must be flat, lowercase, and trailing-slash.`);
  if (data.slug !== p.url || data.seq !== p.seq)
    errors.push(`${p.url}: frontmatter disagrees with master map.`);
  for (const k of [
    'title',
    'description',
    'slug',
    'type',
    'updated',
    'author',
    'primaryKeyword',
    'keywords',
    'related',
    'status',
  ])
    if (data[k] === undefined) errors.push(`${p.url}: missing ${k}.`);
  if (typeof data.title !== 'string' || data.title.length > 60)
    errors.push(`${p.url}: title exceeds 60 characters.`);
  if (typeof data.description !== 'string' || data.description.length > 155)
    errors.push(`${p.url}: description exceeds 155 characters.`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.updated) || Number.isNaN(Date.parse(data.updated)))
    errors.push(`${p.url}: invalid update date.`);
  if (JSON.stringify(data.keywords) !== JSON.stringify(p.keywords))
    errors.push(`${p.url}: keyword list disagrees with Section 11.`);
  if (!fs.existsSync(`app/${slug === 'home' ? '' : slug + '/'}page.tsx`))
    errors.push(`${p.url}: route is missing.`);
  for (const r of data.related ?? [])
    if (!urls.has(r.slug)) errors.push(`${p.url}: broken related slug ${r.slug}.`);
  for (const link of content.matchAll(/\]\((\/[^ )]+)\)/g))
    if (!urls.has(link[1])) errors.push(`${p.url}: broken content link ${link[1]}.`);
  if (data.status !== 'published') continue;
  if (!data.answer || !Array.isArray(data.sourceNames) || !data.sourceNames.length)
    errors.push(`${p.url}: missing sourced answer or source names.`);
  if (/\{\{DATA:/.test(content)) errors.push(`${p.url}: unresolved DATA placeholder.`);
  if (!checklist.humanReviewedPages.includes(p.seq as never))
    errors.push(`${p.url}: human editorial review not recorded.`);
  for (const m of requiredModules)
    if (!data.modules?.includes(m)) errors.push(`${p.url}: missing module ${m}.`);
  const body = normalize(content);
  for (const keyword of [p.primary, ...p.keywords].filter(Boolean)) {
    const text = normalize(keyword);
    const count = body.split(text).length - 1;
    if (!count) errors.push(`${p.url}: missing keyword ${keyword}.`);
    if (count > 4) errors.push(`${p.url}: keyword ${keyword} exceeds 4 occurrences.`);
  }
  for (const entity of p.entities)
    if (!body.includes(normalize(entity))) errors.push(`${p.url}: missing entity ${entity}.`);
  for (const h of content.matchAll(/^#{2,3}\s+(.+)$/gm))
    if (!h[1].endsWith('?') && !['Hub', 'Reference table', 'Comparison', 'Pillar'].includes(p.type))
      errors.push(`${p.url}: heading is not a question: ${h[1]}`);
  if (/\b(will|should|might|could|may|probably)\b|appears to|can help/i.test(content))
    errors.push(`${p.url}: forbidden hedging wording.`);
  for (const k of data.defaultsUsed ?? []) {
    const d = defaults[k as keyof typeof defaults];
    if (!d || d.value === null || !d.verified || !d.source)
      errors.push(`${p.url}: unverified default ${k}.`);
  }
  for (const key of data.dataRequired ?? []) {
    const [surface, field] = key.split('.');
    const record = prices[surface as keyof typeof prices] as Record<
      string,
      { value: number | null; verified: boolean; source: string | null }
    >;
    const d = record?.[field];
    if (!d || d.value === null || !d.verified || !d.source)
      errors.push(`${p.url}: missing verified data ${key}.`);
  }
  if (/Cost|Compare/.test(p.type)) {
    const surface = [5, 6, 15, 16, 37].includes(p.seq)
      ? 'concrete'
      : [49, 50].includes(p.seq)
        ? 'slab'
        : p.seq === 7
          ? 'gravel'
          : 'asphalt';
    const d = prices[surface];
    for (const k of ['installedLow', 'installedHigh'] as const)
      if (d[k].value === null || !d[k].verified || !d[k].source)
        errors.push(`${p.url}: missing verified ${surface}.${k}.`);
  }
}
if (launch) {
  for (const p of pages.filter((p) => p.phase === '1'))
    if (!published.some((x) => x.seq === p.seq))
      errors.push(`${p.url}: the full Phase 1 launch set must be published together.`);
  if (
    published.some((p) => p.seq === 42) &&
    ![3, 4, 5, 6, 7, 8].every((seq) => published.some((p) => p.seq === seq))
  )
    errors.push('Seq 42 requires Seq 3–8.');
  if (
    published.some((p) => p.seq === 33) &&
    published.filter((p) => p.type === 'Cost guide').length < 8
  )
    errors.push('The pillar requires 8 published cost guides.');
  if (!sources.length) errors.push('The approved source register is empty.');
  for (const [k, v] of Object.entries(checklist))
    if (k !== 'humanReviewedPages' && !v) errors.push(`Launch checklist incomplete: ${k}.`);
}
if (errors.length) {
  console.error(errors.map((e) => 'ERROR: ' + e).join('\n'));
  process.exit(1);
}
console.log(
  `Validated ${pages.length} master-map pages. ${published.length} published; ${pages.length - published.length} drafts. Stage: ${launch ? 'launch' : 'draft'}.`,
);
````

## tests/calculators.test.ts

````typescript
import { describe, it, expect } from 'vitest';
import {
  computeArea,
  computeAsphalt,
  computeGravel,
  computeGravelLayers,
  computeConcrete,
  computeSealcoat,
  computeConversion,
  computePavers,
  computeCost,
  computeCompare,
  roundUp,
  renderExample,
  deliveryLoads,
} from '@/lib/calc';
import { evaluateTool, emptyState, restoreState } from '@/lib/calc/ui';
const section = { length: 20, startWidth: 20, endWidth: 20, grade: 0, measured: 'slope' as const };
// All figures in this file are arithmetic fixtures, not sourced prices or recommended defaults.
describe('Measurement geometry', () => {
  it('sums rectangular and tapered sections', () =>
    expect(computeArea([section, { ...section, length: 10, startWidth: 5, endWidth: 15 }])).toBe(
      500,
    ));
  it('corrects flat distance for slope', () =>
    expect(computeArea([{ ...section, grade: 10, measured: 'flat' }])).toBeCloseTo(
      400 * Math.sqrt(1.01),
      10,
    ));
  it('uses a slope-measured length without correcting it again', () =>
    expect(computeArea([{ ...section, grade: 10 }])).toBe(400));
  it('rejects an empty shape', () => expect(() => computeArea([])).toThrow());
  it.each([0, -1, NaN, Infinity, 10001])('rejects invalid length %s', (length) =>
    expect(() => computeArea([{ ...section, length }])).toThrow(),
  );
});
describe('Material quantities', () => {
  it('matches the asphalt fixture and practical rounding', () => {
    const r = computeAsphalt({ area: 400, depth: 2, density: 145, waste: 0 });
    expect(r.tons).toBeCloseTo(4.83333333, 6);
    expect(r.orderTons).toBeCloseTo(4.9);
  });
  it('matches the gravel fixture', () => {
    const r = computeGravel({ area: 200, depth: 4, density: 1.4, waste: 0, compaction: 0 });
    expect(r.cubicYards).toBeCloseTo(2.4691358, 6);
    expect(r.tons).toBeCloseTo(3.45679, 5);
    expect(r.orderTons).toBeCloseTo(3.5);
  });
  it('applies waste and compaction separately', () => {
    const r = computeGravel({ area: 270, depth: 12, density: 1, waste: 10, compaction: 20 });
    expect(r.cubicYards).toBeCloseTo(13.2);
  });
  it('keeps driveway layers separate before summing', () => {
    const r = computeGravelLayers(
      [
        { area: 270, depth: 12, density: 1, waste: 0 },
        { area: 270, depth: 6, density: 2, waste: 0 },
      ],
      12,
    );
    expect(r.layers).toHaveLength(2);
    expect(r.tons).toBe(20);
    expect(r.cubicYards).toBe(15);
    expect(r.loads).toBe(2);
  });
  it('rejects empty layers', () => expect(() => computeGravelLayers([])).toThrow());
  it('matches the concrete fixture', () =>
    expect(computeConcrete({ area: 480, depth: 4, waste: 10 }).cubicYards).toBeCloseTo(
      6.5185185,
      6,
    ));
  it('rounds bags from product-label yield', () =>
    expect(computeConcrete({ area: 10, depth: 12, waste: 0, bagYield: 3, bagSize: 80 }).bags).toBe(
      4,
    ));
  it('does not invent bag yield', () =>
    expect(computeConcrete({ area: 10, depth: 12, waste: 0 }).bags).toBeNull());
  it('counts delivery loads', () => {
    expect(deliveryLoads(20.1, 10)).toBe(3);
    expect(computeConcrete({ area: 540, depth: 12, waste: 0, truckCapacity: 12 }).loads).toBe(2);
  });
  it('avoids rounding exact tenths upward through floating-point noise', () =>
    expect(roundUp(0.1 + 0.2, 0.1)).toBeCloseTo(0.3));
  it.each([0, -1, NaN, Infinity, 1e9])('rejects invalid area %s', (area) => {
    expect(() => computeAsphalt({ area, depth: 2, density: 145, waste: 0 })).toThrow();
    expect(() => computeGravel({ area, depth: 4, density: 1.4, waste: 0 })).toThrow();
    expect(() => computeConcrete({ area, depth: 4, waste: 0 })).toThrow();
  });
  it.each([0, -1, NaN, Infinity])('rejects invalid density %s', (density) =>
    expect(() => computeAsphalt({ area: 400, depth: 2, density, waste: 0 })).toThrow(),
  );
  it('rejects negative allowances', () =>
    expect(() => computeGravel({ area: 200, depth: 4, density: 1.4, waste: -1 })).toThrow());
});
describe('Coverage, conversions, and pavers', () => {
  it('rounds whole sealcoat containers', () => {
    const r = computeSealcoat({ area: 400, coats: 2, coverage: 100, containerSize: 5 });
    expect(r.gallons).toBe(8);
    expect(r.containers).toBe(2);
  });
  it.each([0, -1, NaN, Infinity])('rejects bad coverage %s', (coverage) =>
    expect(() => computeSealcoat({ area: 400, coats: 1, coverage, containerSize: 5 })).toThrow(),
  );
  it('rejects fractional coat count', () =>
    expect(() =>
      computeSealcoat({ area: 400, coats: 1.5, coverage: 100, containerSize: 5 }),
    ).toThrow());
  it('converts both directions without unit mixing', () => {
    expect(computeConversion({ amount: 10, density: 1.4, direction: 'yards-to-tons' }).tons).toBe(
      14,
    );
    expect(
      computeConversion({ amount: 14, density: 1.4, direction: 'tons-to-yards' }).cubicYards,
    ).toBe(10);
  });
  it.each([0, -1, NaN, Infinity])('rejects invalid conversion %s', (amount) =>
    expect(() => computeConversion({ amount, density: 1.4, direction: 'yards-to-tons' })).toThrow(),
  );
  it('computes pavers and separate base and sand weights', () => {
    const r = computePavers({
      area: 100,
      length: 12,
      width: 12,
      waste: 10,
      baseDepth: 6,
      sandDepth: 1,
      baseDensity: 1.4,
      sandDensity: 1.2,
      compaction: 0,
    });
    expect(r.pavers).toBe(110);
    expect(r.base.tons).toBeCloseTo(((100 * 0.5) / 27) * 1.1 * 1.4);
    expect(r.sand.tons).toBeCloseTo((100 / 12 / 27) * 1.1 * 1.2);
  });
  it('rejects invalid paver dimensions', () =>
    expect(() =>
      computePavers({
        area: 100,
        length: 0,
        width: 12,
        waste: 0,
        baseDepth: 6,
        sandDepth: 1,
        baseDensity: 1,
        sandDensity: 1,
        compaction: 0,
      }),
    ).toThrow());
});
describe('Costs and surface comparison', () => {
  const base = { area: 400, unit: { low: 1, high: 2 }, tier: 1, extras: [] };
  it('matches the fixture cost range', () => {
    const r = computeCost(base);
    expect(r?.low).toBe(400);
    expect(r?.high).toBe(800);
  });
  it('adds per-load delivery and a conditional short-load fee', () => {
    const r = computeCost({
      ...base,
      loads: 2,
      delivery: { low: 10, high: 20 },
      orderYards: 2,
      minimumOrder: 3,
      shortLoadFee: { low: 30, high: 40 },
    });
    expect(r?.low).toBe(450);
    expect(r?.high).toBe(880);
  });
  it('does not apply short-load fee at the supplier minimum', () =>
    expect(
      computeCost({ ...base, orderYards: 3, minimumOrder: 3, shortLoadFee: { low: 30, high: 40 } })
        ?.low,
    ).toBe(400));
  it('hides missing prices and tier', () => {
    expect(computeCost({ ...base, unit: null })).toBeNull();
    expect(computeCost({ ...base, tier: null })).toBeNull();
    expect(computeCost({ ...base, delivery: null })).toBeNull();
  });
  it('rejects reversed ranges', () =>
    expect(() => computeCost({ ...base, unit: { low: 2, high: 1 } })).toThrow());
  it.each([0, -1, NaN, Infinity, 1e9])('rejects invalid cost area %s', (area) =>
    expect(() => computeCost({ ...base, area })).toThrow(),
  );
  it('returns the comparison fixture and hides only missing fields', () => {
    const r = computeCompare(400, 1, [
      { name: 'a', unit: base.unit, lifespan: { low: 10, high: 10 }, upkeep: [], extras: [] },
      { name: 'b', unit: null, lifespan: null, upkeep: [], extras: [] },
      { name: 'c', unit: base.unit, lifespan: null, upkeep: [], extras: [] },
    ]);
    expect(r.rows[0].annual).toEqual({ low: 40, high: 80 });
    expect(r.rows[1].annual).toBeNull();
    expect(r.missing).toEqual(['b']);
  });
  it('uses the longer lifespan for the low annual estimate', () =>
    expect(
      computeCompare(400, 1, [
        { name: 'a', unit: base.unit, lifespan: { low: 10, high: 20 }, upkeep: [], extras: [] },
      ]).rows[0].annual,
    ).toEqual({ low: 20, high: 80 }));
  it('rejects zero comparison area and an empty selection', () => {
    expect(() => computeCompare(0, 1, [])).toThrow();
    expect(() => computeCompare(400, 1, [])).toThrow();
  });
});
describe('The same engine drives page results and worked examples', () => {
  it('uses the area engine across several UI sections', () => {
    const s = emptyState();
    s.sections = [
      {
        length: '20',
        width: '10',
        endWidth: '',
        grade: '',
        tapered: false,
        sloped: false,
        measured: 'flat',
      },
      {
        length: '10',
        width: '10',
        endWidth: '',
        grade: '',
        tapered: false,
        sloped: false,
        measured: 'flat',
      },
    ];
    s.fields = { depth: '4', waste: '0', compaction: '0', density: '1.4' };
    const r = evaluateTool('gravel', s);
    expect(r.area).toBe(300);
    expect(r.metrics.find((m) => m.label === 'Calculated weight')?.value).toBe('5.19');
  });
  it('keeps the empty-price cost UI from producing an estimate', () => {
    const s = emptyState();
    s.sections[0].length = '20';
    s.sections[0].width = '20';
    const r = evaluateTool('cost', s);
    expect(r.missing).toEqual(['asphalt']);
    expect(r.metrics).toHaveLength(1);
  });
  it('restores a shared input set and rejects malformed payloads', () => {
    const s = emptyState();
    expect(restoreState(JSON.stringify(s))).toEqual(s);
    expect(() => restoreState('{}')).toThrow();
    expect(() => restoreState('x')).toThrow();
  });
  it('requires the material fields instead of assigning invented defaults', () => {
    const s = emptyState();
    s.sections[0].length = '20';
    s.sections[0].width = '20';
    expect(() => evaluateTool('asphalt', s)).toThrow('Enter depth');
  });
  it('generates examples from function results', () => {
    expect(renderExample('asphalt')).toContain(
      computeAsphalt({ area: 400, depth: 2, density: 145, waste: 0 }).tons.toFixed(2) +
        ' short tons',
    );
    expect(renderExample('gravel')).toContain(
      computeGravel({ area: 200, depth: 4, density: 1.4, waste: 0 }).cubicYards.toFixed(2) + ' yd³',
    );
    expect(renderExample('concrete')).toContain(
      computeConcrete({ area: 480, depth: 4, waste: 10 }).cubicYards.toFixed(2) + ' yd³',
    );
  });
});
````

## tests/lead.test.ts

````typescript
import { expect, it } from 'vitest';
import { onRequestPost, onRequestGet, type Env } from '@/functions/api/lead';
const context = (env: Partial<Env>, request: Request) => ({ env: env as Env, request });
it('rejects lead requests before parsing or storing personal data while disabled', async () => {
  const response = await onRequestPost(
    context(
      {},
      new Request('https://drivewaycalc.online/api/lead', { method: 'POST', body: 'not-json' }),
    ),
  );
  expect(response.status).toBe(503);
});
it('does not expose consent or contact fields while disabled', async () => {
  const response = await onRequestGet(
    context({}, new Request('https://drivewaycalc.online/api/lead')),
  );
  expect(response.status).toBe(503);
  expect(await response.text()).not.toContain('consent');
});
it('remains off with an enabled flag but no approved network configuration', async () => {
  const response = await onRequestPost(
    context(
      { LEADS_ENABLED: 'true' },
      new Request('https://drivewaycalc.online/api/lead', { method: 'POST' }),
    ),
  );
  expect(response.status).toBe(503);
});
````

## tests/metadata.test.ts

````typescript
import { describe, expect, it } from 'vitest';
import reference from '@/data/source-metadata.json';
import { pages, getContent } from '@/lib/content';
import { validateMetadata } from '@/lib/metadata-validation';
describe('Source document metadata correspondence', () => {
  it.each(pages)('$url retains its own title, heading, and description', (page) => {
    expect(
      validateMetadata(
        page,
        reference.find((row) => row.url === page.url),
        getContent(page.url).data,
      ),
    ).toEqual([]);
  });
  it('keeps known calculator and later-table fields in their correct columns', () => {
    const asphalt = pages.find((page) => page.seq === 2)!;
    expect(asphalt.h1).toBe('Asphalt Calculator');
    expect(asphalt.title).toBe('Asphalt Calculator: Tons Needed for a Driveway or Lot');
    expect(asphalt.description).toBe(
      'Calculate tons of asphalt from length, width and thickness. Editable density and waste allowance. Free, no sign-up.',
    );
    const comparison = pages.find((page) => page.seq === 42)!;
    expect(comparison.h1).toBe('Driveway Cost Calculator');
    expect(comparison.description).toBe(
      'Enter your driveway size once and compare estimated cost, lifespan and upkeep for asphalt, concrete, gravel and pavers.',
    );
  });
  it('rejects the previous shifted-column import', () => {
    const correct = pages.find((page) => page.seq === 2)!;
    const broken = { ...correct, h1: correct.description, description: '3' };
    const issues = validateMetadata(
      broken,
      reference.find((row) => row.seq === 2),
      { title: broken.title, description: broken.description },
    );
    expect(issues).toContain('h1 differs from the source document.');
    expect(issues).toContain('Description is a sequence number or incomplete text.');
    expect(issues).toContain('H1 contains a paragraph rather than a page heading.');
  });
});
````

## tsconfig.json

````json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
````

## vitest.config.ts

````typescript
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('.', import.meta.url)) } },
  test: { include: ['tests/**/*.test.ts'], environment: 'node' },
});
````

## Commands to run

```sh
npm ci
npm run dev
npm run check
```

Cloudflare Pages: build command `npm run build`; output directory `out`; keep `SITE_STAGE=draft` until the launch checks pass.
