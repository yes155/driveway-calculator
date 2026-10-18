# Step 0 editorial briefs — driveway cost guide / estimator pairs

Prepared 2026-10-14 on `audit-fixes-2026-10-14`. **Status: draft Step 0 inputs, not human reviewed or Stage 2 locked.** These facts come from the project's sourced price book, research register, named MDX sources and calculator functions. Publisher-source verification and the full 14-rule Stage 1 review remain necessary; no page has received owner approval from this document.

The mapped URL, title and H1 remain controlled by `data/pages.json`; these briefs do not create new pages. All per-page related links and their task annotations remain controlled by `data/pages.json` and `data/related-handoffs.json`.

## Seq 3 — /asphalt-driveway-cost/

- **Mapped H1:** Asphalt Driveway Cost in 2026. **Title:** Asphalt Driveway Cost per Sq Ft (2026). **Type:** Cost guide.
- **Owned task:** Explain the new-asphalt installed-price benchmark, where the range applies and what to compare in a contractor quote. This is **not** the complete multi-section estimator.
- **Micro context:** new asphalt; square feet; installed USD/ft²; included labor; grading exclusions; compaction; thickness; asphalt order tons; site work.

| Entity → attribute | Value / evidence |
| --- | --- |
| New-asphalt installation → installed rate | **$7–$13/ft²**; Angi selected intact range, `asphalt-angi-asphalt`; excludes major grading |
| Rectangular driveway → area | 20 × 20 ft = **400 ft²**, derived from entered illustrative geometry |
| Illustrative installed asphalt job → baseline total | **$2,800–$5,200** = 400 × $7–$13, cost engine, no extra work |
| Asphalt material order → tonnage | Square feet × finished thickness in feet × supplier mix density (lb/ft³) ÷ 2,000; quantity task belongs to `/asphalt-calculator/` |

- **Bridge:** `/asphalt-driveway-cost-calculator/` owns entered geometry and quote extras; `/concrete-vs-asphalt-driveway/` owns cross-surface choice; `/repave-asphalt-driveway-cost/` owns overlay vs removal; `/driveway-sealcoating-cost/` owns ongoing coating expense.
- **Gaps:** Published regional cost multiplier and a transferable national delivered-ton rate are not established in this project's evidence.
- **Task boundary check:** Quick rectangular estimate + documented rate comparison in guide; no duplicate full calculator.

## Seq 4 — /asphalt-driveway-cost-calculator/

- **Mapped H1:** Asphalt Driveway Cost Calculator. **Title:** Asphalt Driveway Cost Calculator: Free Estimate. **Type:** Cost estimator.
- **Owned task:** Compute an entered multi-section asphalt installed cost with editable scope and quote assumptions, plus optional separate asphalt quantity.
- **Micro context:** rectangular/tapered sections; slope measurement basis; USD/ft²; Angi new-paving benchmark; removal; additional base; delivery; optional thickness/density.

| Entity → attribute | Value / evidence |
| --- | --- |
| New-asphalt installed rate → selected base input | **$7–$13/ft²**; `asphalt-angi-asphalt`, unchanged, without regional scaling |
| Asphalt project → entered area | Sum section footprints; tapered section = length × (start width + end width) / 2; engine `computeArea` |
| Installed estimate → baseline calculation | Entered area × selected installed rate; optional extras added **only if excluded** from the selected price scope; engine `computeCost` |
| Asphalt order → optional material output | US short tons from entered finished thickness and mix density, a material quantity rather than a separate installed-dollar surcharge |

- **Bridge:** `/asphalt-driveway-cost/` explains source/range/inclusions; `/asphalt-calculator/` owns the complete tonnage order.
- **Gaps:** No universal regional tiers or hauling fees. Additional-work costs require source-verified defaults or user quotes.
- **Task boundary check:** Full inputs and output card here; static benchmark discussion and rectangular quick estimate remain in guide.

## Seq 5 — /concrete-driveway-cost/

- **Mapped H1:** Concrete Driveway Cost in 2026. **Title:** Concrete Driveway Cost per Sq Ft (2026). **Type:** Cost guide.
- **Owned task:** Compare plain-concrete installed-price sources, finishes and quote inclusions; guide a homeowner to a scoped budget.
- **Micro context:** standard gray concrete; installed rate; slab thickness; cubic yards; reinforcement; subbase; finishing and curing; removal vs fresh installation.

| Entity → attribute | Value / evidence |
| --- | --- |
| Standard concrete driveway → installed benchmark | **$6–$10/ft²**; HomeGuide `concrete-hg-concrete` |
| Concrete driveway 20 × 20 ft → illustrative area | **400 ft²**, entered dimensions; not a recommendation for driveway width |
| Illustrative standard concrete installation → baseline total | **$2,400–$4,000**, 400 × $6–$10, no extras |
| Installed price vs ready mix → unit distinction | USD/ft² prices the selected installed work; yd³ is the concrete material ordering unit; do not substitute one for the other |

- **Bridge:** `/concrete-driveway-cost-calculator/` owns entered options and quote extras; `/concrete-vs-asphalt-driveway/` compares surfaces; `/stamped-concrete-driveway-cost/` owns decorated finishing; `/replace-concrete-driveway-cost/` adds the removal scope.
- **Gaps:** Project structural specifications, required reinforcement and local quotes are not selected by the calculator.
- **Task boundary check:** Quick cost preview on guide; full detailed worksheet on calculator.

## Seq 6 — /concrete-driveway-cost-calculator/

- **Mapped H1:** Concrete Driveway Cost Calculator. **Title:** Concrete Driveway Cost Calculator: Free Estimate. **Type:** Cost estimator.
- **Owned task:** Estimate installed standard-concrete driveway cost and volume using entered measurements and quote-only charges.
- **Micro context:** area; thickness (in); yd³; ordering allowance; delivery; minimum order; short-load fees; scope exclusions.

| Entity → attribute | Value / evidence |
| --- | --- |
| Concrete installed-rate basis | **$6–$10/ft²**, HomeGuide `concrete-hg-concrete` |
| Concrete volume → cubic yards | Area (ft²) × thickness (in) ÷ 12 ÷ 27; measurement-based engine calculation |
| Concrete order → editable contingency | NRMCA guidance **4%–10%** and cited concrete ordering references; selected **10%** is an editable planning allowance, not a requirement (`concrete-nrmca-cip31`) |
| Ready-mix delivery → short-load/minimum charge | The selected supplier’s billed terms are separate user inputs; no national fee or universal minimum is asserted |

- **Bridge:** `/concrete-driveway-cost/` owns scope and source comparisons; `/concrete-calculator/` owns bag counts and cubic yards without installed pricing.
- **Gaps:** Actual mix specification and supplier fees, structural design and any excluded site work require local verification.
- **Task boundary check:** Full calculator only here, not duplicated on the guide.

## Seq 49 — /concrete-slab-cost/

- **Mapped H1:** Concrete Slab Cost. **Title:** Concrete Slab Cost per Sq Ft (2026). **Type:** Cost guide.
- **Owned task:** Explain flat-slab benchmark scope, size-driven cost, finishes, structural use and quote inclusions; not a foundation design.
- **Micro context:** pad vs slab; 12×12, 20×40 and 30×50 examples; area; finish; reinforcement; supporting base; installed USD/ft².

| Entity → attribute | Value / evidence |
| --- | --- |
| Flat slab → installed benchmark | **$6–$12/ft²**, HomeGuide `concrete-hg-slab`, no regional factor |
| 12 × 12 ft rectangle → area and cost | **144 ft²; $864–$1,728**, benchmark multiplication |
| 20 × 40 ft rectangle → area and cost | **800 ft²; $4,800–$9,600**, benchmark multiplication |
| 30 × 50 ft rectangle → area and cost | **1,500 ft²; $9,000–$18,000**, benchmark multiplication |

- **Bridge:** `/concrete-slab-cost-calculator/` owns entered slab quote assumptions; `/concrete-driveway-cost/` adds vehicle-use context; `/concrete-calculator/` owns cubic yards.
- **Gaps:** No universal garage/foundation structural design, reinforcement or special finish cost is assumed.
- **Task boundary check:** Size comparison and material/rate interpretation here; detailed quote controls on estimator.

## Seq 50 — /concrete-slab-cost-calculator/

- **Mapped H1:** Concrete Slab Cost Calculator. **Title:** Concrete Slab Cost Calculator: Free Estimate. **Type:** Cost estimator.
- **Owned task:** Apply entered slab area, thickness, contingency and known quote extras to an installed baseline, with volume reported separately.
- **Micro context:** pad/patio/slab; installed USD/ft²; thickness; cubic yards; reinforcement/finishing inclusions; demolition; delivery; supplier billing.

| Entity → attribute | Value / evidence |
| --- | --- |
| Installed flat-slab input → base rate | **$6–$12/ft²**, HomeGuide `concrete-hg-slab` |
| Geometry → concrete volume | Entered area × thickness in feet ÷ 27 = yd³ before contingency; engine `computeConcrete` |
| Ordering allowance → selected starting value | Editable **10%**, supported by the named NRMCA/Sakrete/Ozinga ordering references; not structural code |
| Other price items → basis | User-entered removal, additional base, delivery and short-load costs only if they fall outside the installed quote |

- **Bridge:** `/concrete-slab-cost/` owns example size table and interpretation; `/concrete-calculator/` owns material-volume/bag takeoff; `/concrete-driveway-cost-calculator/` owns vehicle driveway installation.
- **Gaps:** Universal delivered prices/fees and load requirements are not established.
- **Task boundary check:** Dedicated multi-section worksheet; guide only gives a rectangular quick budget.

## Review status and remaining release gates

- **Step 0:** Six draft ownership/EAV briefs created, grounded in the existing source register and engine. **Not externally source-reverified in this task.**
- **Stage 1:** Existing MDX prose edited for guide/calculator separation; **no complete six-page 14-rule pass recorded**.
- **Stage 2:** No locks or owner sign-offs claimed.
- **Stage 3:** No full sentence-level readability pass recorded.
- **Stage 4:** No mobile visual/interaction or 21-check framework certification claimed.
- **Other pages:** The remaining **45 mapped pages** still need their own Step 0 briefs and staged evidence. All **51 mapped pages** remain draft with human review unapproved; `data/launch-checklist.json` stays unchanged.
- **Release:** Confirm genuine contact, Privacy/Terms approvals, tested browser interactions and source verification; do not merge, publish or set launch flags based on automated tests alone.
