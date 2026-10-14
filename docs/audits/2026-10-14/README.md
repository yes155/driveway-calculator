# AUDIT — Current Driveway Calculators site

Date: October 14, 2026 (Asia/Karachi). **Decision: not ready for public launch.** The highest-priority defects are editorial task completion, answer timing, repeated questions and absent review records. No site content was rewritten.

Audited site: https://driveway-calculators-review.ekselllondon.chatgpt.site. Live version 5, app source `f4db28e728ed1713796834ed981d616827797532`. The newer local source `2d41f3a9633e4dbd10563af101892d44f3bcd402` changes instructions only; app/components/content/data are unchanged from the live version.

## Evidence and scope

- Authenticated reads: all 51 mapped pages and 6 trust pages returned HTTP 200 and matched local exported HTML byte for byte. Robots and sitemap also returned 200; a real unknown path returned 404.
- Fresh read-only checks: the 51-page validator and 57-page exported metadata/route/link/example checks passed. These are technical/content checks, not editorial approval or browser JavaScript execution.
- Read the original driveway instructions, source page templates/audit rules, supplied microsemantic workflow and AI implementation framework, and their documented applicability decisions.
- Collected every mapped page’s visible headings/first paragraphs, answer block, related annotations, source IDs, tables, checklist and metadata. Detailed body/template reviews cover representative quantity, cost, comparison, repair, how-to, product and trust pages. Uncompleted sentence-level checks remain Not verified in the per-page record.
- Registry integrity: 134 sources, 216 observations, 80 decisions (45 sourced / 35 NOT FOUND); zero broken observation source IDs. The 45 sourced decisions each list at least 3 source IDs. This does not certify publisher independence, every numerical claim, current legal provisions or owner approval.
- All 51 mapped pages remain drafts. No public ranking/indexation/traffic audit or Google internal score is claimed.

Evidence files: [page-checks.json](page-checks.json) and [live-verification.json](live-verification.json). The first has all 70 checklist labels per mapped page and clearly bounded completion states.

## Prioritized findings

| ID | Severity | Finding | Scope |
| --- | --- | --- | --- |
| F01 | High | Cost questions do not receive a price-first answer | 3, 5, 11, 12, 15, 16, 33, 37, 39, 49 |
| F02 | High | Synonymous questions repeat the same answer | 33, 54 |
| F03 | High | Entire multi-sentence introductions are bold | 7, 14, 17, 18, 33, 38, 39, 43, 45, 46 |
| F04 | High | Staged editorial approval and query classifications are not evidenced | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55 |
| F05 | Medium | Related-link annotations are generic across the site | 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55 |
| F06 | Medium | One checklist is reused for materially different tasks | 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15, 16, 17, 18, 19, 21, 22, 24, 25, 27, 29, 30, 35, 36, 37, 42, 49, 50 |
| F07 | Medium | Guide/estimator template boundaries are weak | 3, 4, 5, 6, 49, 50 |
| F08 | High | How-to answer frames do not follow the supplied rule | 2, 9, 35, 43 |
| F09 | Medium | Some wording is incorrect or exists chiefly to hold a keyword | 49, 51 |
| F10 | Medium | Useful comparison data is not organized around the decision | 17, 31, 32, 51 |
| F11 | Medium | Cost-query coverage is partial on quantity-only tools | 27, 36 |
| F12 | High | Primary comparison tables appear after secondary questions | 14, 33 |
| F13 | High | Public trust/release requirements remain incomplete | Contact / Privacy / Terms / launch flags |
| F14 | Medium | Visitor copy exposes internal research/implementation language | 32, 33, 49 |
| F15 | Medium | Written counts conflict with the numeral requirement | 13, 19, 20, 31, 32, 40, 48, 51 |

### F01 — Cost questions do not receive a price-first answer (High)

23 headings across 10 pages; e.g. Asphalt cost → “The cost of asphalt driveway installation starts with measured square feet and an installed unit range.” The $7–$13 figure follows later.

Fix requirement: Give the sourced rate/unit/scope or a stated size example in the first answer sentence. Do not invent a national total.

### F02 — Synonymous questions repeat the same answer (High)

Driveway Cost repeats six versions of how much a driveway costs; Gravel Weight repeats yard/cubic-yard versions without a new answer.

Fix requirement: Use one question per distinct intent; put lexical variants naturally in supporting copy/coverage records. Record any source-rule exception instead of filling extra headings.

### F03 — Entire multi-sentence introductions are bold (High)

The shared renderer wraps the entire answer field in strong; 10 headers contain 2–3 sentences, including scope/method commentary.

Fix requirement: Separate the direct factual answer span from ordinary explanatory text. Revisit the corresponding Stage 1/2 locks.

### F04 — Staged editorial approval and query classifications are not evidenced (High)

No per-page EAV brief/lock/readability audit record or QDP/QDH/QDS register found; humanReviewedPages is empty and humanReviewComplete is false. Existing keyword-coverage records are lexical, not task approval.

Fix requirement: Run and record the new staged process per page; distinguish draft content availability from editorial approval. Do not fabricate earlier locks or completed human reviews.

### F05 — Related-link annotations are generic across the site (Medium)

50 pages render 200 template-style annotations. “Calculates the quantities used in this project’s material order.” occurs 58 times in the MDX annotation corpus. Some broad task relationships are valid, but the copy rarely explains the specific handoff.

Fix requirement: Write the particular relationship/output/next action for each destination. Preserve mapped links and destination-title anchors; no arbitrary link cap.

### F06 — One checklist is reused for materially different tasks (Medium)

29 pages render identical Check 4 project details lists, including density/yield/coverage, even on installed-price, repair, converter and material-order tasks. The counts and list grammar themselves are correct.

Fix requirement: Use task-specific 3–5-item checklists while retaining valid reusable safety/measurement facts.

### F07 — Guide/estimator template boundaries are weak (Medium)

Asphalt, concrete and slab guide/estimator pairs render the same full Calculator interface and repeated worked/reference modules; the map calls for a guide quick estimate linked to the full estimator. Their titles/body sections differ, so actual ranking cannibalization is not established.

Fix requirement: Make the guide own price/scope interpretation and the estimator own entered calculations. Preserve URLs and useful mathematical reuse.

### F08 — How-to answer frames do not follow the supplied rule (High)

7 How to headings begin with Multiply/Use/Apply/Prepare/Measure rather than the specified To frame; Gravel Driveway also uses “How to gravel driveway sections with different depths?”

Fix requirement: Use natural original headings and the requested grammatical answer frame; declare permitted grammatical variants in the coverage record.

### F09 — Some wording is incorrect or exists chiefly to hold a keyword (Medium)

Slab: “Concrete slab cost per square foot multiplies the measured slab area by the selected installed range” confuses unit rate with total cost. Sealer: “The phrase asphalt sealer for driveways still requires a named product…” adds a keyword-hosting explanation.

Fix requirement: Name the correct quantity/relationship and remove sentences without a new fact, decision or action. The engine arithmetic was not found wrong by this wording observation.

### F10 — Useful comparison data is not organized around the decision (Medium)

Paver opening gives Angi material-specific ranges, but the main table/form use HomeGuide generic pavers $10–$30. The sources are named; this is a scope/presentation gap, not established price fabrication. Product guides contain useful individual label facts without a clear selection comparison.

Fix requirement: Show named material/product differences and explain which basis the estimate uses; present verifiable selection criteria without invented tested winners or affiliate offers.

### F11 — Cost-query coverage is partial on quantity-only tools (Medium)

Paver targets “cost calculator for paver patio”; Pea Gravel targets “pea gravel cost calculator.” Live HTML labels and source adapter show quantity/density inputs, with no supplier-price input or monetary output.

Fix requirement: Record those intents as partial and align copy with available functions. Either use a clear scoped handoff or implement separately authorized quote-based purchasing cost; do not claim full coverage from a phrase.

### F12 — Primary comparison tables appear after secondary questions (High)

The driveway pillar places SurfaceComparison after all 8 MDX questions; the concrete/asphalt page places its pair table after 4 question sections. This is a verified document-order issue, not a measured screen coordinate.

Fix requirement: Move the primary comparison into the source-template opening flow, followed by scoped interpretation and grouped child tasks.

### F13 — Public trust/release requirements remain incomplete (High)

Contact explicitly awaits a verified publisher method; Privacy and Terms say they are in editorial preparation. Approval flags are false. No fake reviewer or licensing claim was observed.

Fix requirement: Complete genuine publisher contact/correction routes and approved policies before public launch. Do not invent identities, credentials, addresses or review completion.

### F14 — Visitor copy exposes internal research/implementation language (Medium)

Pillar: “Regional low/high multipliers remain unavailable until transferable driveway evidence is sourced.” Cold Patch: “a generated quantity example requires the matching engine and input specification.”

Fix requirement: Explain the actual quote/product input needed by the reader. Keep research dispositions and implementation notes in the evidence records.

### F15 — Written counts conflict with the numeral requirement (Medium)

8 MDX pages introduce checks with “Compare three…” or “Check three…” rather than a numeral. Instances follow the count; the defect is the documented number style.

Fix requirement: Use the numeral and retain the matching items; do not quantify unsupported categories.

### Additional source-only release check

`pageSchema()` in `lib/seo/index.tsx` uses `page.updated` from the map, while visible bylines use MDX `content.data.updated`. The map is October 11 and the current MDX bylines are October 12. Article markup is deliberately absent on these drafts, so this is a source-only date-consistency issue to resolve/test before enabling published Article schema, not a current live structured-data mismatch.

## Full rulebook checklist

Results below are site-level/scoped findings. A Pass is restricted to the evidence described; it does not signify a full editorial or visual signoff. No unexecuted check is converted to Pass.

| ID / rule | Result | Location | Evidence / required correction |
| --- | --- | --- | --- |
| M01 — Word sequence | Violation | F01/F08 | First sentence does not supply the price/action frame required by the heading. |
| M02 — Certain factual wording | Violation | /driveway-drainage/; /driveway-sealer/ | Both contain prohibited “need to” wording. This is a style failure, not a demonstrated false fact. |
| M03 — Cut fluff | Violation | F05/F09/F14 | Generic relationship and implementation/keyword-hosting prose remains. |
| M04 — Quantify quantifiable claims | Violation | F01/F15 | Available price values are omitted from direct answers; counts are written as words. Missing annual upkeep remains correctly uninvented. |
| M05 — Qualify lists/categories | Violation | /methodology/ source register | Named source register lists 134 entries without an introductory numeral count; 29 order lists correctly say 4. |
| M06 — Precise predicate verbs | Not verified | All 51 pages | No exhaustive linguistic verb audit completed; F09 records one concrete rate/total relationship defect. |
| M07 — Examples after plural claims | Not verified | All 51 pages | Named instances were inspected in selected sections; universal compliance is not inferred. |
| M08 — Same grammatical role in lists | Pass | 29 shared order checklists | All four items begin Confirm; this is scoped to those explicit lists, not all prose enumerations. |
| M09 — Heading grammatical frame | Violation | F08 | 7 source heading/answer pairs across 4 pages fail the supplied How to → To pattern. |
| M10 — Declaration before condition | Violation | /gravel-driveway/ | “If the route tapers, use the start and end widths…” puts the condition first. |
| M11 — Destination-title anchors | Pass | 200 rendered RelatedLink anchors | Destination labels/links are present; specificity of surrounding annotations is separately F05. |
| M12 — Immediate complete answer | Violation | F01/F02 | 23 cost questions omit a price in their first sentence; repeated headings add little new information. |
| M13 — Bold answer span | Violation | F03 | 10 entire multi-sentence headers are bold. |
| M14 — Micro-context entities | Not verified | 51-page presence scan | All mapped entity strings were detected except cost area tier, which is intentionally replaced by baseline/no-regional-adjustment controls. Presence does not certify correct contextual use. |
| D01 — One macro context | Pass | 51 titles/H1s/source map | Same mapped subject/context; no unrelated vertical expansion detected. Detailed task completeness is separate. |
| D02 — Linear information flow | Violation | F12 | The main comparison follows secondary question blocks. |
| D03 — No unnecessary sentence splitting | Not verified | All 51 pages | No exhaustive sentence-level readability approval. |
| D04 — Subordinate extra perspective | Not verified | All 51 pages | No per-section perspective-count record; no fabricated experience detected in inspected pages. |
| D05 — Original short questions | Violation | F08 | The gravel how-to has an ungrammatical forced-query heading; hub/table exceptions are respected. |
| D06 — No competitor/PAA copying | Not verified | Competitor question comparison | No plagiarism/competitor-question comparison was run; coincident common questions are not called copying. |
| D07 — Tables/lists framed | Pass | Visible captions and preceding context | Research/reference tables have captions and lead-in content. Usefulness, location and scope are F10/F12. |
| D08 — No outbound body citations | Pass | 50 non-Methodology pages | No external article-body links detected outside the permitted Methodology source register. |
| D09 — Sentence economy | Violation | F09/F14 | Keyword-hosting and implementation statements do not serve the reader’s task. |
| D10 — No factual opinion/sentiment | Not verified | Full factual corpus | Selected pages do not claim fake firsthand expertise; an exhaustive sentiment audit is incomplete. |
| D11 — No casual factual lead-ins | Pass | Visible question-answer paragraphs | No Did you know/Let’s dive in-style factual opener observed in the scan; homepage hub CTAs are a separate format. |
| B01 — Annotated incoming bridges | Not verified | Incoming graph | Crawlable reachability exists; specific annotated incoming relationships need a page-by-page ownership review. |
| B02 — Annotated outgoing bridges | Violation | F05 | Anchors are present, but reusable annotations lack page-specific handoff detail. |
| B03 — Unique EAV task signature | Not verified | F07/F11 | Guide/tool boundaries and partial cost aliases need a recorded intent review. Actual search-result cannibalization is unmeasured. |
| B04 — FS/PAA mechanics | Not verified | All 51 MDX drafts | No FS/PAA target/marker record found. No fabricated snippet eligibility or missing mandatory per-page quota is asserted. |
| I01 — Locked first answers intact | Not verified | F04 | No Stage 2 before/after lock record. |
| I02 — Locked bold spans intact | Not verified | F04 | No before/after lock record; F03 proves current span defects. |
| I03 — No transition hedging added | Not verified | F04 | Current need to cases exist, but their Stage 3 origin cannot be established. |
| I04 — Values/entities unchanged through readability | Not verified | F04 | Current engine/reference checks do not reconstruct editing-stage history. |
| I05 — Heading locks preserved | Not verified | F04 | No heading lock history; current frame problems are F08. |
| S01 — Title/H1 macro agreement | Pass | 51 mapped pages | Export and source contexts agree; exact literal equality is not required. |
| S02 — Direct first answers | Violation | F01/F08 | Price and grammar failures verified. |
| S03 — Prohibited wording | Violation | /driveway-drainage/; /driveway-sealer/ | Expanded owner-supplied rule bans need to; documented question-keyword exceptions are not mislabeled prose hedging. |
| S04 — Numeral counts/items | Violation | F15 | Written three introductions; 29 four-item checklist counts match. |
| S05 — Every numeric claim traceable | Not verified | 134 sources/216 observations | All observation source IDs resolve and 45 selected decisions list >=3 source IDs. Every external claim/source, independence and current legal value was not reverified; data approval remains false. |
| S06 — If clauses second | Violation | /gravel-driveway/ | One confirmed condition-first sentence. |
| S07 — Questions or hub/table exceptions | Pass | 51-page heading scan | Substantive MDX headings are questions; documented hub/reference/table exceptions apply. |
| S08 — Natural keyword coverage/limits | Violation | F02/F09; recorded repeat-review cases | Lexical coverage exists; natural task coverage does not follow from it. Raw count overlaps include mandated phrases and repeated labels, not a proven Google penalty. |
| S09 — Entities appropriately used | Not verified | 51-page presence scan | Exact presence is mostly established; complete contextual interpretation is not approved. |
| S10 — Anchor and relationship sentence | Violation | F05 | Destination-title labels pass; specific relationship copy needs correction. |
| S11 — No competing page intent | Not verified | F07/F11 | Maps preserve owners; boundaries/partial coverage need editorial decisions, not automatic merging. |
| S12 — US units/USD | Pass | Visible labels and price/quantity references | USD, feet/inches, square feet, cubic yards, gallons and US short tons are labeled; no metric toggle or invented ton convention found in the sampled calculation paths. |
| S13 — Applicable disclosure | Pass | 50 inner mapped pages; disabled features | Inner-page disclosure links are present; live leads/ads/affiliate activation is disabled. This does not approve a future integration. |
| S14 — No false credentials/reviews/guarantees | Pass | Trust/bylines/reviewer register | Researcher/writer authorship matches supplied identity; no fabricated appointed reviewer or contractor credential observed. |
| S15 — Title/description limits | Pass | 57 exported page check | Mapped titles/descriptions agree with source and length limits; one H1/canonical/control checks pass. |
| A01 — Functional first-viewport centerpiece | Not verified | Browser rendering | DOM places 29 calculator workspaces before article content; actual screen dominance is not measured. |
| A02 — Intent-appropriate layout | Violation | F07/F12 | Document-order/template boundaries fail the source expectations; visual execution remains unverified. |
| A03 — 2–3 useful visible attributes | Not verified | Homepage/inner tool labels | Homepage source includes US units, editable inputs and no sign-up. Actual viewport placement/visibility is unverified. |
| A04 — Early entity clarity/exact 2% | Not applicable | Source hypothesis disposition | Exact 2% is not an adopted gate; title/intro task clarity is reviewed under M/D/S rows. |
| A05 — No filler/minimum sufficient copy | Violation | F02/F05/F09/F14 | No arbitrary word-count target is applied. |
| A06 — Starter debris/DOM uniqueness | Pass | Visible source/HTML | No exposed starter/generator debris detected; shared templates alone are not a spam finding. |
| A07 — Factual/experiential mode | Pass | Inspected technical/product sections | No invented expert persona or firsthand testing claim observed; genuine UGC is not a mandatory block. |
| A08 — Definition sequence/direct answer | Violation | F01/F08 | Concrete cost/cement question receives a definition instead of cost; answer-first overrides universal definition-first sequencing. |
| A09 — Hybrid UGC | Not applicable | No genuine contributions feature | No fabricated UGC/forum schema is required or added. |
| A10 — 120% competitor topic coverage | Not applicable | Unsupported threshold | No competitor surplus percentage is adopted or measured. |
| A11 — QDP/QDH/QDS record | Violation | F04/F11 | No classification/meaning-based task coverage register found. |
| A12 — Three-month property age | Not applicable | Unsupported aging threshold | No age-based failure or fresh-account campaign is adopted. |
| A13 — Randomized 7–8-month schedule | Not applicable | Source phase release | Source phases/review capacity govern; no artificial random schedule is required. |
| A14 — 5% burst threshold | Not applicable | Unsupported threshold | No percentage-only failure; Phase 1 remains a ten-page source requirement. |
| A15 — Click-test monitoring/edit flags | Not applicable | Private unlaunched site | No live search performance/click-test dataset; defects are not frozen pending hypothetical update cycles. |
| A16 — External link/mention/claim | Not applicable | No authorized campaign | No link-acquisition execution is audited as completed. |
| A17 — Five-source external attribute consensus | Not applicable | No authorized campaign/unsupported quota | No independent consensus claim is manufactured. |
| A18 — External placement topical relevance | Not applicable | No campaign inventory | No external placement campaign was executed. |
| A19 — Three media formats | Not applicable | No distribution brief | No compulsory syndication quota for each calculator. |
| A20 — IMDb/podcast/ebook identity | Not applicable | No applicable publication | No identity/profile is fabricated for authority. |
| A21 — AI/web measurement in 30 days | Not applicable | No Search Console setup | No measured ranking/AI-impression data. Separate AI totals are not invented from Web data or crawler requests. |

## Page-by-page correction inventory

Every mapped page is represented. F04 applies to all pages because staged approval/task classification is not recorded. Browser/keyboard/result-focus/accessibility/color/first-viewport checks are Not verified throughout. A page’s flags are findings to resolve, not a claim that its full content was hand-approved.

| Seq | Page | Type | Findings |
| --- | --- | --- | --- |
| 1 | [/methodology/](https://driveway-calculators-review.ekselllondon.chatgpt.site/methodology/) | Reference | F04, F05 |
| 2 | [/asphalt-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/asphalt-calculator/) | Quantity tool | F04, F05, F06, F08 |
| 3 | [/asphalt-driveway-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/asphalt-driveway-cost/) | Cost guide | F01, F04, F05, F06, F07 |
| 4 | [/asphalt-driveway-cost-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/asphalt-driveway-cost-calculator/) | Cost estimator | F04, F05, F06, F07 |
| 5 | [/concrete-driveway-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/concrete-driveway-cost/) | Cost guide | F01, F04, F05, F06, F07 |
| 6 | [/concrete-driveway-cost-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/concrete-driveway-cost-calculator/) | Cost estimator | F04, F05, F06, F07 |
| 7 | [/gravel-driveway-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/gravel-driveway-cost/) | Cost guide | F03, F04, F05, F06 |
| 8 | [/gravel-driveway-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/gravel-driveway-calculator/) | Quantity tool | F04, F05, F06 |
| 9 | [/gravel-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/gravel-calculator/) | Quantity tool | F04, F05, F06, F08 |
| 10 | [/](https://driveway-calculators-review.ekselllondon.chatgpt.site/) | Hub | F04 |
| 42 | [/driveway-cost-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/driveway-cost-calculator/) | Compare estimator | F04, F05, F06 |
| 50 | [/concrete-slab-cost-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/concrete-slab-cost-calculator/) | Cost estimator | F04, F05, F06, F07 |
| 49 | [/concrete-slab-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/concrete-slab-cost/) | Cost guide | F01, F04, F05, F06, F07, F09, F14 |
| 43 | [/gravel-driveway/](https://driveway-calculators-review.ekselllondon.chatgpt.site/gravel-driveway/) | How-to guide | F03, F04, F05, F08 |
| 12 | [/driveway-sealcoating-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/driveway-sealcoating-cost/) | Cost guide | F01, F04, F05, F06 |
| 11 | [/repave-asphalt-driveway-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/repave-asphalt-driveway-cost/) | Cost guide | F01, F04, F05, F06 |
| 13 | [/asphalt-driveway-repair-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/asphalt-driveway-repair-cost/) | Cost guide | F04, F05, F06, F15 |
| 14 | [/concrete-vs-asphalt-driveway/](https://driveway-calculators-review.ekselllondon.chatgpt.site/concrete-vs-asphalt-driveway/) | Comparison | F03, F04, F05, F12 |
| 15 | [/replace-concrete-driveway-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/replace-concrete-driveway-cost/) | Cost guide | F01, F04, F05, F06 |
| 16 | [/stamped-concrete-driveway-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/stamped-concrete-driveway-cost/) | Cost guide | F01, F04, F05, F06 |
| 17 | [/paver-driveway-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/paver-driveway-cost/) | Cost guide | F03, F04, F05, F06, F10 |
| 18 | [/tar-and-chip-driveway-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/tar-and-chip-driveway-cost/) | Cost guide | F03, F04, F05, F06 |
| 19 | [/asphalt-millings-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/asphalt-millings-cost/) | Cost guide | F04, F05, F06, F15 |
| 20 | [/asphalt-driveway-thickness/](https://driveway-calculators-review.ekselllondon.chatgpt.site/asphalt-driveway-thickness/) | Spec guide | F04, F05, F15 |
| 37 | [/concrete-driveway-repair-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/concrete-driveway-repair-cost/) | Cost guide | F01, F04, F05, F06 |
| 38 | [/driveway-repair-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/driveway-repair-cost/) | Cost hub | F03, F04, F05 |
| 39 | [/driveway-replacement-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/driveway-replacement-cost/) | Cost guide | F01, F03, F04, F05 |
| 46 | [/standard-driveway-width/](https://driveway-calculators-review.ekselllondon.chatgpt.site/standard-driveway-width/) | Reference | F03, F04, F05 |
| 35 | [/concrete-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/concrete-calculator/) | Quantity tool | F04, F05, F06, F08 |
| 36 | [/paver-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/paver-calculator/) | Quantity tool | F04, F05, F06, F11 |
| 40 | [/how-to-lay-an-asphalt-driveway/](https://driveway-calculators-review.ekselllondon.chatgpt.site/how-to-lay-an-asphalt-driveway/) | How-to guide | F04, F05, F15 |
| 41 | [/hot-mix-asphalt/](https://driveway-calculators-review.ekselllondon.chatgpt.site/hot-mix-asphalt/) | Reference | F04, F05 |
| 44 | [/asphalt-driveway-maintenance/](https://driveway-calculators-review.ekselllondon.chatgpt.site/asphalt-driveway-maintenance/) | Guide | F04, F05 |
| 45 | [/driveway-drainage/](https://driveway-calculators-review.ekselllondon.chatgpt.site/driveway-drainage/) | Guide | F03, F04, F05 |
| 47 | [/how-to-repair-concrete-driveway-cracks/](https://driveway-calculators-review.ekselllondon.chatgpt.site/how-to-repair-concrete-driveway-cracks/) | How-to guide | F04, F05 |
| 48 | [/how-to-repair-asphalt-driveway-cracks/](https://driveway-calculators-review.ekselllondon.chatgpt.site/how-to-repair-asphalt-driveway-cracks/) | How-to guide | F04, F05, F15 |
| 21 | [/sealcoat-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/sealcoat-calculator/) | Quantity tool | F04, F05, F06 |
| 22 | [/asphalt-millings-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/asphalt-millings-calculator/) | Quantity tool | F04, F05, F06 |
| 23 | [/material-weights/](https://driveway-calculators-review.ekselllondon.chatgpt.site/material-weights/) | Reference table | F04, F05 |
| 24 | [/cubic-yards-to-tons/](https://driveway-calculators-review.ekselllondon.chatgpt.site/cubic-yards-to-tons/) | Converter | F04, F05, F06 |
| 25 | [/rock-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/rock-calculator/) | Quantity tool | F04, F05, F06 |
| 27 | [/pea-gravel-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/pea-gravel-calculator/) | Quantity tool | F04, F05, F06, F11 |
| 29 | [/crusher-run-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/crusher-run-calculator/) | Quantity tool | F04, F05, F06 |
| 30 | [/road-base-calculator/](https://driveway-calculators-review.ekselllondon.chatgpt.site/road-base-calculator/) | Quantity tool | F04, F05, F06 |
| 53 | [/concrete-weight-per-cubic-yard/](https://driveway-calculators-review.ekselllondon.chatgpt.site/concrete-weight-per-cubic-yard/) | Reference | F04, F05 |
| 54 | [/gravel-weight-per-cubic-yard/](https://driveway-calculators-review.ekselllondon.chatgpt.site/gravel-weight-per-cubic-yard/) | Reference | F02, F04, F05 |
| 51 | [/driveway-sealer/](https://driveway-calculators-review.ekselllondon.chatgpt.site/driveway-sealer/) | Product guide | F04, F05, F09, F10, F15 |
| 55 | [/how-to-seal-a-driveway/](https://driveway-calculators-review.ekselllondon.chatgpt.site/how-to-seal-a-driveway/) | How-to guide | F04, F05 |
| 31 | [/driveway-crack-filler/](https://driveway-calculators-review.ekselllondon.chatgpt.site/driveway-crack-filler/) | Product guide | F04, F05, F10, F15 |
| 32 | [/asphalt-cold-patch/](https://driveway-calculators-review.ekselllondon.chatgpt.site/asphalt-cold-patch/) | Product guide | F04, F05, F10, F14, F15 |
| 33 | [/driveway-cost/](https://driveway-calculators-review.ekselllondon.chatgpt.site/driveway-cost/) | Pillar | F01, F02, F03, F04, F05, F12, F14 |

## What passes and what remains useful

- Exact mapped URL/phase structure is retained, including merged-route exclusions; the intentional draft indexing boundary remains intact.
- One H1, source-aligned metadata, canonicals, existing internal destinations and engine-generated example rendering pass the export checks.
- Named price/data records, distinct repair units, explicit quoted extras, and selected-source rather than averaged ranges are present. Millings supplier comparisons, concrete bag-yield distinctions and product-specific label limits contain useful information to retain.
- The counted four-item checklists use consistent verb openings; their problem is task specificity, not missing counts.
- Sources are named in inner-page body text and linked in Methodology as required. Unavailable national/regional values remain missing; no unsupported value was filled merely to satisfy this audit.
- The review site does not display a fabricated technical reviewer or contractor qualification; leads/ads/affiliate activation remains disabled.

## Correction order

1. Prepare the intent/EAV brief and coverage classification for the driveway-cost pillar. Correct its answer, repeated questions, comparison placement and grouped navigation first; audit the complete page before propagation.
2. Correct primary cost-guide answers and guide/estimator distinctions for asphalt, concrete and slab, then method-specific repair/replacement pages. Keep scoped sourced values and the existing engine.
3. Correct shared answer-span rendering, task-specific checklists, annotation copy and the verified wording/frame/count defects. Changes remain page-type-aware; do not replace them with another universal prose template.
4. Address paver/product price-selection context and the two partial cost aliases; use actual available functions and evidence, without false testing claims.
5. Complete genuine contact/policies and explicit editorial review records; check source-only schema dates before enabling publication markup.
6. Execute desktop/mobile/keyboard/error/result behavior and performance checks when the supported browser capability is available, then complete existing data/phase/host release gates.

## Verification limits

Browser control is unavailable. The [Sites skill](sandbox:/root/.codex/plugins/cache/openai-curated-remote/sites/1.0.1/skills/sites/SKILL.md) explicitly says: “If `$control-browser` is unavailable, skip browser QA.” No preview server, browser installation or alternate control path was used. This audit therefore establishes HTTP content, document order and source behavior; it does not establish rendered first-viewport geometry, mobile typography, keyboard/clipboard/print/share behavior, live result updates, contrast, Lighthouse or field INP.

The 70-row checklist combines 34 writing checks, 15 driveway checks and 21 adapted framework checks. Unsupported token/coverage/aging/publication thresholds and inactive external campaigns are Not applicable. Stage integrity and unperformed source/style/browser checks are Not verified.

```text
SUMMARY
Rules checked: 37 completed scoped rows; 70 considered (34 writing + 15 driveway + 21 framework)
Results: 14 Pass; 23 Violation; 20 Not verified; 13 Not applicable
Systemic findings: 15 (7 High, 8 Medium, 0 Low)
Stage 2/3 integrity: NOT VERIFIED — no before/after lock records
Editorial/human release approval: NOT COMPLETE
```
