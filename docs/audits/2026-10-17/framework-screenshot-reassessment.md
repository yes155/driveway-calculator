# AUDIT — Framework-based screenshot reassessment

Date: October 17, 2026 (Asia/Karachi). Mode: report only. Source revision associated with the reviewed design: `0c9dc8ad4b9511f49952231541fd89dc45e9bcf2`; no claim that the screenshots prove a Git SHA by themselves.

## Resources and evidence

- Owner attachment **AI_SEO_Implementation_Framework(1).md** matches the [canonical framework](../../source-guidance/ai-seo-implementation-framework.md) byte for byte. The [operative application decisions](../../SEMANTIC-SEO-RULES.md#10-visual-semantics-and-topical-authority-implementation-framework) reconcile it with the original driveway instructions; all eight modules remain accounted for.
- **H-full:** image(20261017-093023).png, 487 × 2048, complete homepage capture. It is scaled; do not infer original CSS font size from this thumbnail.
- **H-fold:** image(20261017-093045).png, 1349 × 633, homepage laptop viewport including operating-system taskbar. Only the upper part of the area result is visible; hero actions are below the captured content edge.
- **C-full:** image(20261017-093144).png, 733 × 2048, complete Asphalt Driveway Cost Calculator capture, showing initial empty input/result state and supporting article.
- **C-fold:** image(20261017-093204).png, 1242 × 657, laptop viewport including taskbar. Workspace starts near y=430; dimensions are only partly visible near the lower content edge; Calculate is absent from this first view.

The supplied folds establish a problem at these captured laptop viewports, not at every desktop resolution. Browser zoom, display scaling and CSS viewport dimensions are not established. The clipped right edge of C-fold is not proof of horizontal site overflow. Repeated Edit site pills are preview-interface evidence; do not count them as repeated authored content or assert their origin from the page source without checking it.

No new browser interaction, mobile capture, current SERP study, source-price verification, metadata/schema inspection, crawl, analytics or external campaign was executed for this audit. Prior deployment/build evidence is historical and is not relabeled a fresh test.

## Findings and proposed corrections

| ID | Severity | Evidence and finding | Proposed correction |
| --- | --- | --- | --- |
| V01 | High | C-fold: tool layout exists but the working interface does not dominate the first view. Title/byline/navigation spacing precede a workspace whose first fields are cut by the lower edge; Calculate is farther below. | Compact the heading area and workspace padding. Group primary dimensions, Calculate and installed-cost summary in the first workspace view. Keep optional extras accessible below. Verify short laptops and phones after an authorized implementation. |
| V02 | Medium | H-fold: the displayed 400 ft² result is clipped and hero CTAs are below the captured edge; left copy begins much lower than the card. | Reduce top spacing, use a restrained heading size for short desktop viewports and align columns nearer their tops. Keep the quick area check distinct from the site's full tools; this hub serves multiple tasks. |
| V03 | Medium | C-full: the dark empty-state result column stretches through the complete tall form with substantial blank space. Its main idle label is Your measured area although the page owns installed cost. | Prioritize Estimated installed cost, then measured area, rate and selected extras. Reduce the diagram/idle height. Inspect a calculated result before concluding that its dollar output is missing. |
| V04 | High | C-full: the first sentence under What does a worked example look like? is The calculator engine generates this example. It describes implementation instead of the example. | Lead with the displayed 400 ft² × $7–$13/ft² = $2,800–$5,200 example before extras, with illustrative-input context afterward. The figures are screenshot evidence, not freshly verified market prices. Reopen/relock the first answer through the writing stages when rewriting is authorized. |
| V05 | Medium | H-full: Additional tools not shown in the featured calculator cards above explains page composition rather than a task. | Describe the specialized material quantities, cost estimates and reference values the reader finds here. Preserve the nonduplicated lists. |
| V06 | Medium | C-full: a single methodology sidebar card leaves an otherwise unused column beside most of the article. | Use a compact in-page contents panel plus method link, or integrate the method card into the main flow. Preserve readable text line length rather than stretching paragraphs across all available width. |
| V07 | Low | H-full: the oversized decorative footer wordmark adds considerable height after useful footer navigation. | Reduce wordmark size and spacing; retain the functional footer links and brand. |

The proposed example wording in V04 is audit guidance, not a changed or approved page draft. The resource update does not authorize site-wide rewrites. Summary: **7 findings — 2 High, 4 Medium, 1 Low.**

## Module 7 — all 21 framework checks

Statuses are evidence-specific: Pass, Violation, Not verified or Not applicable. Not applicable never counts as Pass. Exact numeric thresholds and campaign requirements follow the recorded application decisions rather than becoming automatic release gates.

| # / source rule | Homepage | Cost calculator | Evidence / application |
| --- | --- | --- | --- |
| 1 — Dominant first-viewport centerpiece (1.1) | Violation | Violation | H-fold V02; C-fold V01. Visual workspace presence is partial at these laptop captures. Inputs/result behavior and phone layout remain unverified. |
| 2 — Query-appropriate layout (1.2) | Pass | Pass | H-full separates quantity tools and cost research; C-full uses an actual calculator interface before article support. First-viewport execution still fails row 1. |
| 3 — 2–3 above-fold attributes (1.3) | Violation | Violation | Home US units/editable assumptions/visible formulas appear in H-full but below H-fold; calculator shows a US-units label but lacks a clearly grouped 2–3-label set next to an actionable first-view workspace. Feature truth requires interaction/source checks. |
| 4 — First 2% entity rule (1.4) | Not applicable | Not applicable | Exact 2% weighting is an unverified source hypothesis. Early task clarity passes the visual reading: driveway quantities on H; asphalt installed cost on C. No token-position ranking inference. |
| 5 — Minimum sufficient copy/no filler (1.4/2.6) | Violation | Violation | V05 page-layout commentary; V04 implementation-first example sentence. Retain useful formulas, source scope, interpretation and limitations; no blanket word reduction. |
| 6 — AI-builder signatures (1.5) | Not verified | Not verified | Screenshots do not expose DOM/classes/comments. Shared components are retained; random renaming or unique skeletons are not adopted as a quality gate. Preview overlays are not diagnosed as authored boilerplate. |
| 7 — Factual/experiential mode (2.1) | Pass | Pass | Visible copy is factual/instructional; no invented first-person field testing or expert persona is observed. This is a screenshot observation, not external claim verification. |
| 8 — Definition/predicate/attribute sequence (2.3) | Pass | Violation | Adapted answer-first rule applies. Hub introductory task statement is direct; calculator example opening fails the question's actual task (V04). No universal definition-first rewrite. |
| 9 — Hybrid UGC with schema (2.5) | Not applicable | Not applicable | No genuine contribution brief or verified replies supplied; do not fabricate a forum/expert persona or add unsupported markup. Native FAQ/helpful-vote UI is not proof of UGC. |
| 10 — 120% merged competitor coverage (3.1) | Not applicable | Not applicable | The numeric surplus is not an adopted gate. No competitor inventory reviewed here; preserve 51 mapped URLs. |
| 11 — All queries QDP/QDH/QDS (3.2) | Not verified | Not verified | Screenshots cannot certify a complete query register. Candidate classification below is explicitly provisional, not human approval or a new map. |
| 12 — Three-month aging (3.3) | Not applicable | Not applicable | Unsupported automatic age failure is not adopted. No new property/account campaign. |
| 13 — Randomized 7–8-month cadence (3.4) | Not applicable | Not applicable | Existing source phases and release authorization govern; no simulated cadence or calendar quota. |
| 14 — Single-day 5% burst (3.3/3.4) | Not applicable | Not applicable | Unsupported percentage failure is not adopted; no public publication batch in this task. |
| 15 — Click-test freeze (3.5) | Not applicable | Not applicable | No live query/click/update dataset was supplied; no click-test mechanism inferred and no defect frozen. |
| 16 — Link/mention/claim (4.1) | Not applicable | Not applicable | No external-placement campaign authorized or executed. |
| 17 — Five-source claim consensus (4.2) | Not applicable | Not applicable | No external-consensus claim made. Repetition alone is not independent evidence; quota is not adopted. |
| 18 — Linking-domain topic match (4.3) | Not applicable | Not applicable | No external placements assessed. |
| 19 — Three distribution formats (5.1) | Not applicable | Not applicable | No authorized distribution brief; useful future assets require real source/version records. |
| 20 — IMDb/podcast/ebook presence (5.2) | Not applicable | Not applicable | No relevant authentic publication/profile work in this task. |
| 21 — AI/web measurement in 30 days (6.1) | Not verified | Not verified | No analytics/log dataset supplied or queried; no separate AI-impression figures invented. |

Framework totals across the two page columns (42 determinations): **5 Pass**; **7 Violation**; **6 Not verified**; **24 Not applicable**. These are checklist determinations, not unique defects, an editorial approval or a Google score.

## Provisional query-task interpretation

| Query/task | Class | Existing owner | Rationale/status |
| --- | --- | --- | --- |
| asphalt driveway cost calculator | QDP | /asphalt-driveway-cost-calculator/ | Enter geometry/rates/extras and obtain an installed range. Existing mapped owner; interaction unverified here. |
| asphalt driveway cost | QDP | /asphalt-driveway-cost/ | Interpret sourced ranges and scope. Preserve the guide/tool distinction; no merging. |
| which editable assumptions change the asphalt estimate | QDH | /asphalt-driveway-cost-calculator/ | An estimator sub-intent already addressed by a distinct section. Semantic proposal, not a new search-volume claim. |
| measured area / square feet within the estimate | QDS | /asphalt-driveway-cost-calculator/ | Supporting input/result attribute, not a second main page purpose. |
| broad driveway calculator choice | Hub task | / | Route between quantity and cost tasks; do not narrow the entire hub to the rectangular asphalt handoff. |

No source map or keyword ownership changes result from these proposals. The full query register remains incomplete.

## Supplementary 49-row writing/editorial record

This table prevents screenshot evidence being promoted into full semantic approval. It records 14 microsemantic, 11 document-level, 4 bridge, 5 stage-integrity and 15 original driveway checks. NP is not used: every required check is explicitly Pass, Violation or Not verified. Homepage exceptions apply to genuine hub/table headings. The two page columns are scoped to what the supplied screenshots establish; unreadable/hidden content is not passed.

| ID / check | Homepage | Cost calculator | Evidence / remaining work |
| --- | --- | --- | --- |
| M01 Word sequence | Not verified | Violation | V04 example answer does not state the example; exhaustive heading/sentence reading is incomplete. |
| M02 Certain wording | Not verified | Not verified | No exhaustive sentence-level prohibited-word scan of the current render. |
| M03 Remove fluff | Violation | Violation | V05 and V04 respectively. |
| M04 Verified numeric specificity | Not verified | Not verified | Displayed example arithmetic is readable; every numeric claim/source is not verified. |
| M05 Count lists | Not verified | Pass | C-full names 4 checks and displays 4 items; H lists need the full readable text. |
| M06 Precise verbs | Not verified | Not verified | Full copy review pending. |
| M07 Examples after plural claims | Not verified | Not verified | Full copy review pending. |
| M08 Parallel list grammar | Not verified | Pass | C checklist starts Verify, Match, Check, Confirm: verbs. |
| M09 Heading-answer frame | Not verified | Violation | V04 does not supply the requested example. |
| M10 Conditions after declaration | Not verified | Not verified | Complete if-sentence review pending. |
| M11 Destination-title anchors | Not verified | Not verified | Targets and all actual link text need source/render verification. |
| M12 Immediate direct answer | Not verified | Violation | V04. |
| M13 Bold factual answer span | Not verified | Violation | The bold example opening highlights engine provenance rather than the example answer. |
| M14 Required entities | Not verified | Not verified | Full map-entity contextual audit pending. |
| D01 Single macro context | Pass | Pass | H routes driveway planning tasks; C owns installed asphalt calculation. |
| D02 Linear flow | Pass | Pass | Visible top-level sequence moves from task/tool to explanation and related tasks. |
| D03 Sentence splitting | Not verified | Not verified | Full readable sentence text required. |
| D04 Subordinate perspectives | Not verified | Not verified | Full section-level review pending. |
| D05 Short headings/exceptions | Pass | Pass | Home hub labels apply; visible calculator substantive sections are questions. |
| D06 Original questions | Not verified | Not verified | No competitor/PAA comparison was executed. |
| D07 Framed tables/lists | Not verified | Pass | C example has contextual prose; four-item checklist has a count introduction. |
| D08 Body citation hyperlink placement | Not verified | Not verified | Screenshots cannot establish link destinations reliably. |
| D09 Sentence economy | Violation | Violation | V05 page-layout commentary and V04 implementation lead-in. |
| D10 No subjective factual sentiment | Pass | Pass | No subjective expertise/testing or performance superlative observed in readable sections. |
| D11 No casual factual lead-in | Not verified | Not verified | Not every FAQ/hidden block is readable in the captures. |
| B01 Annotated incoming bridge | Not verified | Not verified | Actual referring pages and predicates not audited. |
| B02 Annotated outgoing bridge | Not verified | Pass | C-full related links explain rate review vs separate material tonnage; destinations themselves not tested. |
| B03 Distinct EAV ownership | Not verified | Not verified | Visible purpose is clear but sibling full-page comparison is incomplete. |
| B04 FS/PAA targets | Not verified | Not verified | Editorial markers and exact word/character counts are not exposed. |
| I01 First-answer locks | Not verified | Not verified | No Stage 2 before/after lock record checked. |
| I02 Bold locks | Not verified | Not verified | No Stage 2 before/after lock record checked. |
| I03 Readability transition certainty | Not verified | Not verified | Editing-stage history unavailable. |
| I04 Number/entity locks | Not verified | Not verified | Editing-stage history unavailable. |
| I05 Heading locks | Not verified | Not verified | Editing-stage history unavailable. |
| S01 Title/H1 macro agreement | Not verified | Not verified | H1 visible; metadata title not in the screenshots. |
| S02 Direct first answers | Not verified | Violation | V04. |
| S03 No prohibited factual wording | Not verified | Not verified | Complete prose scan pending; questions are distinct from factual statements. |
| S04 Numeral counts with matching items | Not verified | Pass | C-full has 4 listed checks. |
| S05 Numeric provenance | Not verified | Not verified | 400 = 20 × 20; 2800–5200 = 400 × 7–13. Arithmetic alone does not verify source price scope/currency/date. |
| S06 Condition order | Not verified | Not verified | Exhaustive if-clause review pending. |
| S07 Question/hub headings | Pass | Pass | Visible page-format exceptions respected. |
| S08 Natural mapped keyword coverage | Not verified | Not verified | No fresh full text/coverage audit. |
| S09 Micro-context entity coverage | Not verified | Not verified | No completed entity-by-section audit. |
| S10 Anchor/title/predicate agreement | Not verified | Not verified | C annotations appear task-specific; exact target title verification remains outstanding. |
| S11 No competing mapped intent | Not verified | Not verified | No full sibling comparison; no canonical/URL change proposed. |
| S12 US units/USD | Pass | Pass | Home ft/ft²; C square feet and displayed USD worked result. Other tool paths unverified. |
| S13 Applicable disclosure | Not verified | Pass | C-full names lead/affiliate disclosure; actual feature flags/integration not retested. Home feature applicability unverified. |
| S14 No unproved credential/review claim | Not verified | Pass | C names Farrukh Abdullah as author and shows no appointed reviewer or contractor credential in the supplied view. Identity not externally reverified. |
| S15 Metadata length limits | Not verified | Not verified | Title/meta description not available in screenshots. |

Supplementary totals across two page columns (98 determinations): **19 Pass**; **9 Violation**; **70 Not verified**. These repeated criteria are not additional unique findings.

## Execution and integrity summary

- Source attachment read in full; exact-byte equality and SHA-256 checked.
- Framework checklist: all 21 source rows recorded for both pages. Supplementary checklist: all 49 rows recorded for both pages; incomplete checks are not counted as passes.
- Unique findings: **7 (2 High, 4 Medium, 1 Low)**. No content corrected because the active request is resource registration and audit.
- Stage 2/3 integrity: **Not verified**. No lock record or human editorial approval invented.
- Metadata, interaction, calculated-state layout, mobile layout, current external prices, site-wide task coverage and analytics remain incomplete.
- Preserve all 51 mapped pages, draft/noindex status, disabled lead features and the unmerged draft PR. No deployment, merge, distribution, account creation or outreach performed.
