# Driveway Calculators — semantic SEO rules

Added October 13, 2026 (Asia/Karachi). Status: operative instructions for future work; not a completed site audit.

The owner requested the semantic audit, structure and writing guidance from the other projects be added here. This rulebook transfers applicable guidance from the automotive audit framework, topical map, content/linking map, keyword review and launch review, and the recovered dental audit decisions. Source identities and retrieval limitations are recorded in [SEMANTIC-SEO-SOURCES.md](SEMANTIC-SEO-SOURCES.md). Driveway-specific additions and conflict resolutions below are explicitly identified.

## 1. Authority and application

Latest owner instructions govern. The [instruction set](source-guidance/instruction-set.txt) and [driveway source document](source-guidance/driveway-calculator.txt) remain the project specification; Sections 10 and 11 take precedence over earlier source sections. This supplement adds editorial and verification gates. Preserve the original [RTF](source-guidance/driveway-calculator.rtf).

Do not silently weaken a source requirement to make a check pass. Record a conflict with the source section, page, proposed resolution and status. A page with an unresolved mandatory conflict stays a draft. Transferred automotive or dental publication dates, contacts, reviewer identities and credentials do not apply to this site.

The rules in this document are editorial and engineering requirements. They are not claimed Google ranking formulas. Keyword placement, EAV coverage, link counts, content length, source counts and internal audit scores do not guarantee rankings.

## 2. Semantic foundation and site structure

### Source context and topical boundary

- Central entity: **driveway**.
- Audience: US homeowners and small contractors budgeting projects, ordering materials or comparing itemized quotes.
- Main tasks: determine installed project cost; determine material quantities; compare surfaces and project methods; understand ordering and maintenance requirements.
- Surface entities: asphalt, plain/stamped concrete, gravel, pavers, tar and chip, asphalt millings.
- Project entities: new installation, replacement, resurfacing/overlay, repair, sealcoating.
- Quantity relationships: measurements → area → layer volume → material-specific weight or coverage → practical purchase quantity.
- Cost relationships: measured area → scoped unit range → explicit separate items → project range → quote comparison.
- Supporting aggregate pages connect to driveways through an actual quantity/ordering relationship. Do not introduce unrelated landscaping topics into driveway cost pages.
- Retain the source exclusions: near-me, contractor/company/directory queries, city/state landing pages, unrelated asphalt meanings and general construction math outside the mapped scope.

### URL ownership

Use `data/pages.json` and the Section 11 map as the existing ownership register. Each URL has one primary task and one entity/attribute/output relationship. Before writing, document these fields:

| Required field | What to record |
| --- | --- |
| Canonical owner | Existing Seq and URL; page type and phase |
| Main intent | The concrete task the visitor completes |
| Macro context | The title/H1 topic and promised result |
| Micro context | Required entities, variables, units, scope and conditions |
| Owned questions | Distinct questions this page answers in depth |
| Neighbor boundaries | What belongs to the guide, tool, reference or comparison next door |
| Evidence | Source/observation IDs, quoted or derived values, unresolved items |
| Added value | The worked comparison, interpretation or workflow beyond a copied range |
| Contextual bridges | Destination, relationship and reader's next action |

Do not create synonym pages. Decide page versus section by distinct task, entities/outputs, demonstrated demand and enough useful content. Volume/KD alone is insufficient. A mode solving the existing task belongs in the existing tool unless the source map establishes a distinct owner. Do not migrate slugs or merge mapped URLs without a documented reason and authorization for the resulting scope change.

Preserve flat, lowercase, hyphenated, trailing-slash URLs, the 51-page map and phases (10 / 18 / 22 / 1). Merged Seq 26, 28, 34 and 52 do not get separate routes. Seq 42 depends on Seq 3–8; Seq 33 depends on eight published cost guides. Do not import the automotive project's calculator-only restriction: this driveway source explicitly includes cost guides, comparisons, product guides and references.

### Distinguish neighboring tasks

| Page family | It owns | It does not reproduce |
| --- | --- | --- |
| Material quantity tool | Measurements, quantity calculation, assumptions, ordering result | A full installed-cost guide |
| Cost estimator | Entered area/scope, price basis, breakdown, editable quote items | The complete general material guide |
| Material cost guide | Source ranges, project examples, inclusions, drivers and budgeting decisions | Another full duplicate estimator explanation |
| Repair/replacement/overlay guide | The named operation and its applicable units/scope | New installation pricing relabeled as repair |
| Comparison | Same-basis comparison and decision criteria | Two copied material articles joined together |
| Hub/pillar | Route readers to the right surface/project task; early grouped comparison | A long directory of near-identical questions |
| Weight/conversion reference | Unit relationship and material-specific evidence | A universal aggregate density assumption |
| Product guide | Verified label, coverage/yield, buying/usage context | Unsupported universal product performance |

## 3. Content writing rules

These rules combine driveway Sections 8.7, 8.8 and 10.7 with the verified automotive writing/interpretation workflow. They are not a reconstruction of the unlocated complete “14 Microsemantic Writing Rules” list.

### Answer and information order

1. State the page's main number, result or functional answer first. For a price, identify its unit and work scope. A cost question receives a sourced cost answer, not “it depends” or “the estimator returns a range.”
2. Put the primary tool/results or comparison early using the source page-type template. A cost pillar surfaces its material comparison and grouped child tasks before secondary explanation.
3. Under each question heading, answer that question in the first sentence. Add conditions and explanation afterward. Hub and table headings retain the source exceptions.
4. Bold the answer span; do not make an entire multi-sentence paragraph bold by default.
5. Explain each calculation as **input → unit → formula/relationship → result → interpretation → limitation**. Define a term at first use and name which value is entered, sourced or computed.
6. Explain what the result changes in the reader's next action: material order, delivery capacity, quote comparison or choice of project method. Generic “use the calculator” text is insufficient.

### Semantic precision and readability

- Use entity–attribute–value statements where a fact is being expressed: name the material/project, the attribute and its scoped value/unit. This is a clarity method, not permission to write robotic triples.
- Use consistent terminology across labels, headings, formulas and results. Distinguish compacted/loose volume; material/installed cost; nominal/reference/project-specific values; individual coat/total coverage; short ton/other ton conventions.
- Keep factual prose direct and free of the source's prohibited hedging and filler. Express uncertainty through explicit scope, assumptions, missing values and estimate labels. Do not convert an uncertain claim into a false certainty to satisfy a style check.
- Put conditions after the answer. Use numeral counts and immediately list the counted items. Do not introduce a count that the section fails to deliver.
- After the direct answer, vary sentence length and use transitions only when they connect ideas. Do not freeze a poor first sentence during the readability pass; return to the factual pass and correct it.
- Keep each section responsible for a distinct question. Test whether removing it loses a fact, decision, definition or action. If nothing is lost, merge or remove it.
- Do not surface internal placeholders, research dispositions or implementation language as visitor explanations. Explain a missing project value using the real task: obtain the supplier's density, product-label yield or itemized local quote.
- Do not add filler to reach a word count, FAQs to hit a quota, decorative visuals to hit an image quota, or repeated limitations in several blocks.

### Keyword handling

- Retain the mapped primary/fold-in keywords and the driveway placement/occurrence rules. Place phrases naturally in useful prose, headings, row labels or examples; do not use text merely to satisfy a string matcher.
- Never create a sequence of headings for near-identical cost questions with the same answer. Group the reader's intent and give distinct questions their own sections.
- Retain exact-word coverage where it reads naturally. Use documented grammatical variants where the source permits them. Never silently count a broader unsupported task as covered.
- Keep keyword coverage separate from task coverage. Record `covered`, `partial`, `deferred`, `excluded` or `intent review` for a task, plus exact phrase/variant locations for the source's lexical check. Occurrence does not prove that a task is answered.
- Section 10.7's question-heading instruction can conflict with its prohibition on keyword-only sentences. Log that conflict when synonymous questions lack distinct answers; do not resolve it by producing repetitive sections. A broader meaning-based exception requires a recorded source-rule decision before changing the validators or publication status.
- Do not sum overlapping synonym search volumes or merge old/new metric snapshots. No traffic or ranking forecast follows from a coverage percentage.

### Useful information gain

Every major section needs a useful answer or decision, not a rewritten sentence from a price guide. Depending on page type, provide:

- A common-area comparison with all arithmetic and work-scope differences shown.
- An explained source disagreement: what differs in geography, date, material, thickness, labor or included operations.
- A calculator-backed worked example with measurements, rate/default provenance, result and practical meaning. Follow the source's example requirements; distinguish illustrative inputs from recommendations.
- An ordering checklist, scope checklist or quote comparison that addresses the actual result.
- A measurement or layer diagram with visible labels and a text/table equivalent when the relationship benefits from a visual.

Comparisons use the same area, unit basis, project scope and treatment of extras. Name any differences that prevent equivalence. A derived replacement total is labeled as a derivation; it is not recast as an independently surveyed national replacement price. Do not manufacture annualized cost from unsupported lifespan or maintenance assumptions.

Original interpretation and calculations are added value. Do not label sourced arithmetic as original field research, measured installation performance or a contractor survey.

## 4. Evidence and numerical consistency

The later owner instruction authorizes finding missing figures. It replaces the earlier restriction to owner-supplied DATA only; it does not remove sourcing requirements.

For every external figure/default, record the item, low/high or exact value, unit, named source, URL, retrieval date, location on the source, geography, inclusions/exclusions and pages/fields using it. Follow the instruction set's minimum independent-source requirement, preserve conflicts and the selected scope, and do not silently average sources. Count independent sources honestly rather than several URLs from one publisher.

Classify each displayed number as exact unit conversion, illustrative user input, formula result, published benchmark, product-label/supplier value or project quote. Preserve the distinction everywhere the value appears.

Use the existing research register and observation IDs. Verify that the source actually supports the specific number and application before treating it as approved. `NOT FOUND` stays missing: no fabricated regional multipliers, freight fees, density, lifespan or recommended allowance. Supplier quotes/product labels remain scoped to that supplier/product.

Audit the same value through the source record, visible prose/table, defaults, calculator adapter/output, worked example, metadata and JSON-LD. A shared engine reduces drift; independent arithmetic checks still verify the example. Do not round intermediate computations for charts or follow-on calculations; round readable labels and final purchase quantities according to the documented policy.

## 5. Internal links, metadata, schema and trust

### Contextual link graph

- Hubs link to their mapped tools/guides; tools link to a matching interpretation/guide and relevant next tool; guides link back to the task's calculator and hub where appropriate.
- Use crawlable anchor links with meaningful destinations and the source-required destination-title anchor. The surrounding sentence explains the actual relationship: an asphalt quantity leads to an asphalt cost estimate, or a cost guide leads to an estimator using the reader's area.
- Replace repeated “Explains the … scope” annotations with page-specific relationships. Do not repeat the same link directory in prose, sidebar and footer to manufacture coverage.
- Preserve mandatory mapped links. Group a hub's child pages by task/surface with useful answer cards rather than deleting required destinations to meet an arbitrary numerical cap.
- Every intended published page is reachable from another relevant page. Check URLs and fragments, not just matching anchor strings.

### Context and structured data

- Title and H1 share one macro context and accurately describe the page's available function. They need not be identical strings where the driveway source supplies distinct text. Keep one H1; keep source title/description length limits and unique, useful metadata.
- Canonical, social URLs, breadcrumbs and entity IDs use the correct configured production/review state. Shared input parameters do not create new canonical owners.
- Structured data describes the visible content and actual page type. Calculator functions, article authorship, collection items, FAQ text and breadcrumbs agree with the page. Do not add unsupported merchant, local-business, product-offer, rating or review claims.
- Treat `sameAs` as an identity relationship; do not claim that this publisher is a Wikipedia/Wikidata driveway entity. Topic references are not identity aliases.
- Use accurate authorship and actual completed review status. A reviewer appointed to another project is not this project's reviewer. No invented licenses, biography, dates, reviews, addresses or guarantees.
- Sources, methodology, corrections and disclosures explain the real process. Lead and affiliate disclosures follow the source and actual enabled features.
- Use descriptive filenames, natural contextual alt text, meaningful captions and accessible alternatives. Alt text describes the image, not a spare keyword inventory.

## 6. Semantic audit and release gate

### Required audit record

Run all 15 source checks in Section 8.8. Supplement them with this record for each page and for shared templates:

| Audit area | Evidence required |
| --- | --- |
| Intent/ownership | Main task, URL owner, neighbor boundaries, specific overlap findings |
| Macro/micro context | Title/H1 alignment, required entities, terminology, definitions and units |
| Direct answers | Heading/first-sentence pairs, actual cost/result answer, repetition check |
| Task completion | Functioning tool or useful guide/comparison, interpretation and next action |
| Added value | Example/comparison/checklist and the decision it enables |
| Data integrity | Source locations, scope, defaults, derived values and consistency across outputs |
| Link graph | Required incoming/outgoing relationships, actual anchors/destinations and fragments |
| Metadata/schema | Canonicals, unique metadata, one H1, visible/structured-data agreement |
| Trust | Real authorship/review status, source explanation and applicable disclosures |
| Retrieval/indexing | Status/redirect behavior, reachability, appropriate sitemap/robots/noindex state |
| Experience | Above-fold priority, result clarity, phone/keyboard/error/recovery evidence |

For each check, record **Pass, Violation, Not verified or Not applicable**, the URL/element or passage, supporting evidence, severity and exact fix. Preserve the source's Pass/Violation report for checks that were actually completed; never convert an unexecuted check into a pass. A suspected algorithmic consequence is not an observed Google penalty.

An optional internal score is a checklist summary only. It does not measure Google's `siteFocusScore`, NavBoost, PageRank, information-gain score or ranking probability. Do not generate a convincing-looking score without page-level evidence.

### Separate approvals and checkpoints

1. Prepare ownership brief and evidence before writing.
2. Draft one mapped page and review the whole rendered page. Fix defects before reusing its section pattern elsewhere.
3. Complete source editorial checks and semantic findings. Record unresolved issues and corrections.
4. Verify affected arithmetic, calculator adapter, exported content and actual browser interaction/layout as applicable. Reuse valid unchanged evidence; do not run the full suite after each small edit.
5. Record a separate human editorial review. Automated flags or `contentReady: true` do not establish this approval.
6. Complete the existing launch checklist, data approval, phase dependencies, contact/trust requirements and host/indexing verification before release. Adding this policy does not enable publication, leads or indexing.

A page fails editorial review when it has repeated synonymous questions without distinct answers, a cost answer without price/unit/scope, unsupported data, intent overlap, generic link annotations, or no interpretation of the tool result. These are explicit driveway acceptance criteria added to prevent recurrence of the October 12 content defect.

As of this instructions-only change, the 51 pages remain drafts. No page is declared semantically approved; the previous technical checks are not retrospectively described as content review.

## 7. Source conflicts and applicability decisions

| Retrieved rule/claim | Application here |
| --- | --- |
| V4 auditor: strict maximum 15 body links | Not a hard rule. Later automotive map/linking guidance has no arbitrary quota; driveway hubs retain mapped child links. Audit relevance and duplication. Google also states there is no ideal link number. |
| V4 auditor: literal H1/title equality | Use the driveway source's macro-context agreement and mapped text. Do not force identical strings against its supplied metadata. |
| V4 auditor: tri-gram passage scoring and “last bits” attention assertions | Do not treat as proven Google/LLM requirements. Keep direct answers and useful summaries without forced phrasing or footer stuffing. |
| V4 auditor: server response below 100 ms, leak-derived scores, host-age sandbox, automatic information-gain demotion | Not adopted as established algorithmic thresholds or penalties. Measure actual technical behavior and describe only supported findings. |
| V4 auditor: every page needs a transactional interactive action | Apply working functionality to tools; guides and references satisfy their own informational task. An informational page is not inherently misleading functionality. |
| V4 auditor: local 40% uniqueness, storefront directions, merchant/shipping/return markup | Not applicable to this national calculator publisher. Do not expand into source-excluded location pages or fabricate storefront/commerce facts. |
| V4 auditor: “14 Microsemantic Writing Rules” | The retrieved framework names selected examples but does not contain the full list. Complete original list: NOT FOUND. Apply the writing rules actually recovered and the driveway's explicit 15 audit checks. |
| Automotive October 8 calculator-first/no new articles | Transfer useful calculator explanations and connected tasks. Do not delete driveway guides or references explicitly required by its source map. |
| Automotive/dental identities, branch/deploy restrictions and completed-review wording | Project-specific; not copied as driveway facts or permissions. |
| Exact keyword/question headings versus anti-repetition | Preserve the coverage record; no synonym-only section. Record a blocking source conflict/exception before any broader waiver or validator change. |
| “No hedging” versus uncertain estimates | Direct factual wording with clear scope/assumptions; never fabricate certainty. |

## 8. Official references checked

Checked October 13, 2026 (Asia/Karachi). These support useful-content, link and structured-data principles; they do not validate the entire V4 audit framework.

- [Google: creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Google: crawlable links and anchor text](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).
- [Google: general structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).
