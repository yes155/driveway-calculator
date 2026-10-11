# BUILD — Project One design adaptation

Reference: https://www.projectone.website/ and the supplied full-page screenshot.

The design language is adapted to Driveway Calculators across the homepage, calculator pages, guides, and supporting trust pages. The reference's agency copy, testimonials, projects, numbers, and pricing are not part of this implementation.

| Reference element | Driveway implementation |
| --- | --- |
| Off-white, charcoal, and lime palette | Shared CSS tokens: `#fafaf8`, `#1d1e1b`, `#c7ff52`; cream `#f0f0e5` |
| Bold centered opening | Large two-line homepage title, concise description, lime action, circular backdrop |
| Tilted website mockups | Four linked calculator cards with material-specific SVG scenes |
| Dark pill navigation | Existing functional dropdown navigation restyled in charcoal with lime accents |
| Dark checklist introduction | Measurement checklist paired with an oversized highlighted heading |
| Mixed-color feature grid | Six real calculator links in charcoal, lime, and cream tiles |
| Staggered process cards | Measure, enter material values, inspect the formula |
| Lime feature strip | Static strip listing supported calculator features |
| Dark panel and curved transition | Centered formula section with rotated formula cards and a curved cream boundary |
| Project image gallery | Four illustrative driveway material cards linking to the relevant cost guides |
| Lime FAQ panel | Native accessible disclosure controls with accurate calculator information |
| Large footer lettering | Decorative two-line Driveway Calculators wordmark above the existing footer links |
| Consistent inner pages | Shared form, result, formula, diagram, sidebar, source, and trust-page styles |
| Phone layouts | Two-column hero mockups, stacked calculator panels, single-column narrow-screen input fields |

## Source files

- `app/page.tsx`: homepage composition and content.
- `app/globals.css`: shared theme, all page and calculator styles, responsive and print rules.
- `app/layout.tsx`: shared body theme marker.
- `components/HeroCollage.tsx`: linked floating calculator preview cards.
- `components/MaterialGraphic.tsx`: deterministic material-specific SVG scenes.
- `components/Footer.tsx`: large decorative footer lettering.
- `public/icon.svg`: matching lime and charcoal icon.
- `scripts/check-export.ts`: shared theme verification for all checked exports.

## Validation

Strict TypeScript, 116 existing tests, the source map validator, and the production static export passed. All 57 content and trust pages passed exported HTML checks, including the shared theme marker, H1, metadata, canonical URLs, internal links, generated examples, and draft indexing controls.

Supported browser tooling is unavailable in this environment. Pixel matching, phone rendering, keyboard interactions, and visual layout checks were not executed. The reference screenshot is narrow, so the desktop composition is interpreted rather than copied pixel for pixel. System sans-serif fonts keep the build self-contained.

Prices and material defaults still require verified DATA records. All mapped pages remain drafts and retain noindex controls. GitHub contains the source; the owner's Cloudflare Pages Git connection remains unverified.
