# Homepage repetition and visual hierarchy audit — October 14, 2026

Status: implementation on the private draft PR; not a browser-signoff, editorial approval or launch.

## Evidence reviewed

- Four owner-provided full-page screenshots with Costs, Calculators and Materials menus expanded.
- Current `app/page.tsx`, the shared `app/globals.css`, `components/HeroCollage.tsx`, the 51-page route map and the shared calculator engine.
- Existing navigation-deduplication change, so the review separates dropdown duplication from homepage-content duplication.

## Before: redundant blocks

| Element | Same promise repeated elsewhere | Action |
| --- | --- | --- |
| Four orbiting links to surface calculators | Six actual calculator cards; linked surface shortcuts | Removed decorative linked collage |
| Dark checklist section ("One project. Every input") | Process cards; formula hero; methodology panel | Removed |
| Six feature tiles | Library repeated all quantity calculators | Kept six primary tools and omitted them from the supplemental library |
| Generic three-step copy ("Measure. Enter. Understand.") | Dark checklist and dark methodology panel | Rewrote steps with explicit area, volume and supplier-value relationships |
| Lime ticker | Hero US units, editable inputs, formulas | Removed |
| Dark purpose panel ("Every measurement. Every allowance") | Earlier workflow and footer methodology | Removed |
| Repeated final calculator CTA | Primary hero calculator CTA | Removed |

Repetition within contextual navigation, FAQs and supporting methodology remains intentional where it helps a different user task; repetition alone is not asserted to be a Google ranking penalty.

## After: sections and distinct tasks

1. **Traditional hero:** left-aligned `Driveway Calculators.` H1, direct material/installed-cost scope, two actual destination actions, three useful capability labels; right-side real `computeArea` rectangular area check with labelled editable ft inputs, live ft² result, formula, boundary/error handling, and a route to the detailed asphalt calculator. Default 20 × 20 ft yields 400 ft² using the shared arithmetic engine, and is explicitly area-only.
2. **Six featured material calculators:** entry point for core quantity tasks.
3. **Four surface cost guides:** separate pricing-research intent from material ordering intent.
4. **How quantity calculations work:** unique area, volume and material-specific conversion explanation with methodology link.
5. **More tools:** non-featured quantity tools, cost estimators and reference pages. Featured cards are not re-listed here.
6. **FAQs:** clarifies specific usage, supplier data, irregular measurements and price scope not covered by the category cards.

## Semantic/engineering checks

- Keep one H1 as specified by `data/pages.json`. Major H2s own separate intents.
- Preserve canonical routes, related links, cost-versus-quantity boundaries, citations/data rules and all 51 noindex drafts.
- Source-backed prices/density are not generated in the hero. Area arithmetic uses the existing pure `computeArea` function.
- `scripts/check-export.ts` now rejects repeated promotional sections, missing hero example, duplicate featured-card URLs and overlap between featured and extra-tool lists.
- CI contains static-export checks, Vitest, TypeScript and Lighthouse. A passing automated check is not a visual, keyboard or phone-browser approval.

## Unverified

A fresh deployment and real desktop/phone screenshots are needed to confirm final breakpoints, card dimensions, dropdown positioning, focus states and visible first-viewport balance. No updated private staging URL was issued by these source changes.
