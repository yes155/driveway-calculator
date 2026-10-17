# BUILD — Project One palette and revised homepage hierarchy

Initial design reference: https://www.projectone.website/ and the supplied full-page screenshot. The October 14 owner screenshots prompted a more traditional hero and removal of repetitive sections; see [the evidence-led homepage audit](audits/2026-10-14/homepage-visual-semantics.md).

The design language is adapted to Driveway Calculators across the homepage, calculator pages, guides, and supporting trust pages. The reference's agency copy, testimonials, projects, numbers, and pricing are not part of this implementation.

| Reference element | Driveway implementation |
| --- | --- |
| Off-white, charcoal, and lime palette | Shared CSS tokens: `#fafaf8`, `#1d1e1b`, `#c7ff52`; cream `#f0f0e5` |
| Traditional first viewport | Two-column hero, left-aligned H1 and calls to action, right-side live area check |
| Functional example, not extra hero links | Editable length and width return surface area through the shared `computeArea` engine |
| Dark pill navigation | Existing functional dropdown navigation restyled in charcoal with lime accents |
| Consolidated explanation | Redundant opening checklist removed; the formula process appears once beneath distinct cost and quantity choices |
| Mixed-color feature grid | Six real calculator links in charcoal, lime, and cream tiles |
| Staggered process cards | Measure, enter material values, inspect the formula |
| Useful attributes | Three concise facts beside hero actions; duplicate ticker removed |
| Purpose-driven formula section | Detailed area, volume and density relationships replace the repeated promotional formula panel |
| Project image gallery | Four illustrative driveway material cards linking to the relevant cost guides |
| Lime FAQ panel | Native accessible disclosure controls with accurate calculator information |
| Large footer lettering | Decorative two-line Driveway Calculators wordmark above the existing footer links |
| Consistent inner pages | Shared form, result, formula, diagram, sidebar, source, and trust-page styles |
| Phone layouts | Stacked hero copy and area check, two numeric fields, stacking calculator panels and narrow-screen controls |

## Source files

- `app/page.tsx`: homepage composition and content.
- `app/globals.css`: shared theme, all page and calculator styles, responsive and print rules.
- `app/layout.tsx`: shared body theme marker.
- `components/HeroAreaCheck.tsx`: accessible rectangular area check with live calculation and validation.
- `components/MaterialGraphic.tsx`: deterministic material-specific SVG scenes.
- `components/Footer.tsx`: large decorative footer lettering.
- `public/icon.svg`: matching lime and charcoal icon.
- `scripts/check-export.ts`: shared theme verification for all checked exports.

## Validation

The original design review recorded 116 successful tests. Later changes add a task-based homepage hierarchy and exported HTML regression checks; consult the active draft PR checks for the latest build and test result. All 57 content and trust pages passed exported HTML checks, including the shared theme marker, H1, metadata, canonical URLs, internal links, generated examples, and draft indexing controls.

Supported browser tooling is unavailable in this environment. Pixel matching, phone rendering, keyboard interactions, and visual layout checks were not executed. The reference screenshot is narrow, so the desktop composition is interpreted rather than copied pixel for pixel. System sans-serif fonts keep the build self-contained.

Prices and material defaults still require verified DATA records. All mapped pages remain drafts and retain noindex controls. GitHub contains the source; the owner's Cloudflare Pages Git connection remains unverified.
