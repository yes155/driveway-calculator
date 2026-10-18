# Primary navigation deduplication — October 14, 2026

## Scope and finding

Audited the `Header.tsx` menu configuration against all **51** mapped URLs in `data/pages.json`. Before the fix, independently evaluated text filters placed **9 pages in two dropdowns**, including all four cost-estimator routes and the sealcoat calculator, and omitted **four visitor content pages** from all dropdowns. The homepage was also omitted intentionally because it is the brand destination.

## Corrected primary menu ownership

| Header menu | Count | Inclusion rule |
| --- | ---: | --- |
| Costs | 17 | Cost guides/hubs, driveway-cost pillar, and concrete-versus-asphalt comparison |
| Calculators | 16 | Quantity tools, cost estimators, compare estimator, and cubic-yard/ton converter |
| Materials | 8 | Material references, specification and weight tables, gravel construction and asphalt installation guides |
| Repair & Maintenance | 8 | Product selection, repair/sealing how-to guides, drainage and maintenance guides |
| **Total** | **49** | Each main-menu page appears exactly once |

The remaining two mapped pages are intentionally outside the dropdowns: `/` is reached by the header brand; `/methodology/` is reached by the site's methodology links/footer. The About page is its own permanent header link, not one of the 51 mapped URLs.

**Specific corrections:** `/asphalt-driveway-cost-calculator/`, `/concrete-driveway-cost-calculator/`, `/driveway-cost-calculator/`, and `/concrete-slab-cost-calculator/` now belong solely to Calculators. The sealcoat calculator also belongs solely to Calculators. Repair and sealcoating *cost guides* belong to Costs; repair and product-selection guidance belongs to Repair & Maintenance.

The following formerly unlisted pages now appear in one dropdown each: `/gravel-driveway/` and `/how-to-lay-an-asphalt-driveway/` under Materials, `/concrete-vs-asphalt-driveway/` under Costs, and `/driveway-drainage/` under Repair & Maintenance.

## Engineering guardrails

- `lib/navigation.ts` is the single source of menu classifications. Unknown page types/new routes fail instead of disappearing silently.
- `components/Header.tsx` no longer combines regex filters or duplicates one URL across menus.
- `tests/navigation.test.ts` checks all 49 eligible mapped routes are present exactly once, verifies their categories and checks excluded home/methodology routes.
- `scripts/check-export.ts` verifies the exact links in the rendered header on each exported page, including supporting trust pages.
- No canonical URL, site-map row, sidebar annotation, content ownership or publication/launch flag was modified. Draft/noindex controls remain intact.

**Status:** Engineering change in the existing draft PR; verify the latest workflow for the final run result. This does not constitute a browser interaction or human editorial approval.
