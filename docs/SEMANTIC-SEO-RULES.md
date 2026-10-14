# Driveway Calculators — semantic SEO rules

Added October 13, 2026 (Asia/Karachi). Status: operative instructions for future work; not a completed site audit.

Updated October 14, 2026 with the owner's complete [microsemantic writing workflow](source-guidance/microsemantic-writing-workflow.txt). Section 9 is now the mandatory staged writing/audit procedure. It replaces the earlier incomplete writing-rule reconstruction; the structure, evidence and launch requirements remain in force.

The owner requested the semantic audit, structure and writing guidance from the other projects be added here. This rulebook transfers applicable guidance from the automotive audit framework, topical map, content/linking map, keyword review and launch review, and the recovered dental audit decisions. Source identities and retrieval limitations are recorded in [SEMANTIC-SEO-SOURCES.md](SEMANTIC-SEO-SOURCES.md). Driveway-specific additions and conflict resolutions below are explicitly identified.

## 1. Authority and application

Latest owner instructions govern. The [instruction set](source-guidance/instruction-set.txt) and [driveway source document](source-guidance/driveway-calculator.txt) remain the project specification; Sections 10 and 11 take precedence over earlier source sections. This supplement adds editorial and verification gates. Preserve the original [RTF](source-guidance/driveway-calculator.rtf).

The October 14 [supplied writing workflow](source-guidance/microsemantic-writing-workflow.txt) is a direct owner-provided source for content mechanics. Its attribution to Koray Tuğberk Gübür is the attachment's attribution, not a claim of independently authenticated authorship or a documented Google ranking formula. The application decisions in Sections 7 and 9 reconcile it with the driveway page types, evidence records and modes.

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

These rules combine driveway Sections 8.7, 8.8 and 10.7 with the automotive writing/interpretation workflow. The complete owner-supplied 14-rule list and mandatory stages are now incorporated in Section 9; the earlier missing-list status is resolved.

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
- After the direct answer, vary sentence length and use transitions only when they connect ideas. Stage 3 preserves the Stage 2 locks. If a first answer is faulty, return to Stage 1, correct it, recreate the Stage 2 locks and repeat readability and the audit; do not edit a locked answer silently during Stage 3.
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

### External source placement

The owner-supplied workflow prohibits outbound citation hyperlinks in visitor body copy unless the owner explicitly requests linked citations. Name the source in-text, keep full source URLs/locations in the research register and linked Methodology source register, and preserve meaningful internal task links. The source-name rule never removes the evidence record or turns an unsupported statement into an approved fact. This placement policy is for published visitor copy; internal instruction/provenance documents keep navigable references.

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

1. Complete Section 9 Step 0: ownership brief, verified EAV facts and evidence before writing.
2. Follow Section 9 Stages 1–3 separately for one mapped page; review the whole rendered page. Fix defects before reusing its section pattern elsewhere.
3. Complete Section 9 Stage 4, the driveway editorial checks and semantic findings. Record unresolved issues and corrections; repeat locks/readability after an authorized correction to a locked span.
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
| V4 auditor: “14 Microsemantic Writing Rules” | Earlier retrieval supplied only examples. Resolved October 14: the owner supplied the complete numbered list in Pasted text.txt. Apply Section 9 and the separate 15 driveway audit checks. Do not claim independently verified authorship. |
| Automotive October 8 calculator-first/no new articles | Transfer useful calculator explanations and connected tasks. Do not delete driveway guides or references explicitly required by its source map. |
| Automotive/dental identities, branch/deploy restrictions and completed-review wording | Project-specific; not copied as driveway facts or permissions. |
| Exact keyword/question headings versus anti-repetition | Preserve the coverage record; no synonym-only section. Record a blocking source conflict/exception before any broader waiver or validator change. |
| “No hedging” versus uncertain estimates | Direct factual wording with clear scope/assumptions; never fabricate certainty. |
| New workflow: lock first answers versus earlier readability wording | Stage 3 does not change locked spans. A factual defect returns to Stage 1 for correction and Stage 2 for new locks; repeat the subsequent stages. |
| New workflow: section transitions versus immediate answers | A transition never precedes or displaces the direct first answer under a heading. Connect the next sentence or the end of the preceding section. |
| New workflow: Q&A heading architecture versus source hub/table exceptions | Use short original question headings for substantive question sections. Preserve mapped H1/title and the driveway hub/table/reference heading exceptions; no copied question sets or synonym-only sections. |
| New workflow: no outbound body citations | Name sources without body citation URLs unless explicitly requested; full evidence URLs remain in the research register and Methodology source register. Internal bridges remain linked. |
| New workflow: fix audit violations versus standalone AUDIT report-only | Stage 4 corrects the draft within an authorized WRITE task. A standalone AUDIT reports findings and proposed corrections without changing site files unless rewriting is authorized. |
| New workflow: no files unless requested | The owner explicitly requested this repository rulebook update; source MDX is already required by the build specification. Do not generate unsolicited separate documents/PDFs/spreadsheets for writing. |
| New workflow: specificity/quantification versus incomplete data | Gather verified facts before drafting. Do not invent counts, numeric stakes or examples to satisfy a stylistic rule; explicitly retain a blocked/incomplete draft status when evidence is missing. |

## 8. Official references checked

Checked October 13, 2026 (Asia/Karachi). These support useful-content, link and structured-data principles; they do not validate the entire V4 audit framework.

- [Google: creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Google: crawlable links and anchor text](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).
- [Google: general structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## 9. Mandatory owner-supplied writing and audit workflow

Source: the complete [Pasted text.txt attachment, preserved unchanged](source-guidance/microsemantic-writing-workflow.txt), supplied October 14, 2026. Its numbered mechanics and severity labels are reproduced below with explicit driveway application notes. These are owner-required editorial rules; no claim is made that a search engine applies these exact pass/fail tests.

### Step 0 — complete the brief and verify facts

Before drafting, obtain the mapped topic, target attribute/EAV relationship and page type. Include the Title Tag, H1, micro-context entities and contextual-bridge notes from the map where available.

Record **3–6 concrete Entity → Attribute → Value facts** the page must state, with named evidence or clearly labeled user-input/formula provenance. Gather missing facts before drafting; do not manufacture data to satisfy a numeric rule. The source's wider requirements for every displayed figure still apply beyond these initial facts.

Record incoming/outgoing bridge destinations and the relationship expressed by each anchor/annotation. For a mapped driveway page these are supplied by its source row; do not assume the standalone-piece exception removes them. Set a target length only if supplied; otherwise let useful attributes determine length without padding.

### Stage 1 — semantic draft

Write the complete draft using all 14 rules below. Keep this stage separate from readability. The entire page serves the H1/title's one macro context; EAV facts are explicit and answer-first, with linear supporting context.

| # | Owner-supplied rule | Required writing/check | Severity |
| --- | --- | --- | --- |
| 1 | Proper word sequence | Lead the first answer with the part matching the heading's interrogative: what, where, how or when. | High |
| 2 | Be certain | No will, should, have to, need to, might, could, may, probably, appears to or likely in factual statements. Retain the driveway prohibition on “can help.” Certainty never licenses an unsupported claim. | High |
| 3 | Cut the fluff | Remove words that do not change meaning and throat-clearing openers. | Medium |
| 4 | Use numeric values | Quantify quantifiable claims with verified values; do not substitute many/several/various for known counts. | Medium |
| 5 | Qualify the instances | Introduce each list/category with its actual numeral count before enumerating it. | Medium |
| 6 | Verb context | Choose a precise relationship verb; increase, improve and develop are not interchangeable. | Low |
| 7 | Examples after plural nouns | Follow a plural-noun claim immediately with its named examples; vague groups without instances fail. | Medium |
| 8 | Same part-of-speech in list items | Open list items with the same grammatical role, such as all verbs or all nouns. | Medium |
| 9 | Match the heading's grammatical frame | Match the answer's frame to the question: a how-to question receives “To …”; preserve coherent predicate/noun/adjective order. | High |
| 10 | If-statements second | State the declaration first and the condition second. | Medium |
| 11 | Anchor text | Match the destination title/H1 and read naturally in context. | Medium |
| 12 | Do not delay the answer | The first sentence under each substantive question heading is the full direct answer, without lead-ins or scene-setting. | High |
| 13 | Bold the answer | Bold the factual answer span, never merely the query entity, keyword or transition. | High |
| 14 | Micro-context entities | Use the brief's entities in the sections where they belong. | Medium |

Use original short single-clause Q&A headings matching the page's real questions; do not copy PAA or competitor question sets. A necessary complex question becomes a grouper H2 with short H3 questions. Preserve the driveway exceptions for hub/table/reference headings and its mapped title/H1. Synonyms do not justify new sections.

Follow these document mechanics:

- Keep supporting context linear; do not require knowledge explained only later. Join related facts when they share one logical relationship; avoid unnecessary splitting and excessive dependency depth.
- Keep no more than one additional perspective per section, subordinate to its factual answer. Avoid analogies by default, subjective sentiment and conversational openers in factual answers.
- Introduce every table with its definition and add an outro where it contributes interpretation. Use tables/lists selectively rather than repeating the same answer in prose, list and table.
- Name external sources without body citation hyperlinks unless explicitly requested; keep the verifiable URL/location records in Methodology and the research register.
- Mark FS targets with a non-rendered editorial comment and keep each within **40 words and 320 characters**. Mark PAA-style answer targets separately; each is one certain sentence. These are editorial limits, not promises of a search feature.
- Give each specified bridge a natural descriptive predicate in its annotation sentence. A bare anchor lacks the required relationship. Verify a specified incoming bridge at its actual source page.

### Stage 2 — lock the load-bearing spans

Before readability, record these five groups of locks from the valid Stage 1 draft:

1. Every first answer sentence, including its factual claim and certainty level.
2. Every bolded factual answer span.
3. Every numeric value/range, EAV fact and named entity.
4. Every heading text, retaining its required question form or source exception.
5. Every anchor text and contextual bridge's predicate phrase.

Keep a before/after lock record in the writing audit. Do not silently weaken a claim, change a range, round a locked value, replace an entity or rewrite a bridge during readability. Formula/purchase rounding belongs to the source-approved calculation and Stage 1 result, not a later prose edit.

An invalid factual claim is not protected merely because it was locked. Return it to Stage 1, correct it using evidence, create new Stage 2 locks and repeat subsequent stages. Record this correction explicitly.

### Stage 3 — readability and engagement

Revise only unlocked material: supporting sentences from sentence 2 onward, transitions, examples, paragraph breaks, supporting-sentence order and list wording within the shared grammatical-role rule. Never merge this pass into Stage 1. The checklist wins over a readability technique.

Vary short/longer/short sentence rhythm, combine a shared logical thread and use because/which means/so that only for real relationships. A prepositional opener or dependent clause is permitted in supporting prose without hedging the claim. Add concise transitions for sections after the first, but put them after the immediate answer or at the end of the previous section; they never replace the first answer sentence.

Use paragraphs of 2–4 sentences where appropriate. The headings alone form a coherent outline, and factual bold spans remain skimmable anchors. Keep clear whitespace between sections in the rendered MDX/CMS layout; use tables/lists only for genuinely tabular or enumerated information.

Add one concrete factual scenario per major section where it earns its place. Use the actual entity, verified data or explicit user inputs, and the calculator-backed source example where required. Cut unsupported scenarios. Express stakes and surprising relationships through sourced specificity, not speculation; do not import the attachment's unrelated illustrative subject into driveway content. Retain at most one subordinate extra perspective per section.

Immediately fix unlocked text that introduces hedging, fluff, an unsupported example or inconsistent list openings. Check that first answers are still immediate, bold remains on answer content and all Stage 2 locks are intact. A required locked-span change follows the explicit return-to-Stage-1 process.

### Stage 4 — audit the final draft and correct violations

Audit every row; no skipped criteria and no invented passes. For an authorized WRITE task, correct violations and show the corrected passage below the relevant finding, then recheck affected rows and the locks. A standalone AUDIT remains report-only unless correction is authorized.

Use columns **Rule #/Name | Pass/Violation | Location | Note**. Name the exact heading/sentence or element and the violation's severity and fix. Where a conditional bridge/feature is not required by the brief, record an explicit applicability note instead of claiming it was tested. Unverified required checks stay visibly incomplete and block completion.

#### Audit section 1 — microsemantic rules

Complete one row for each of the **14 numbered Stage 1 rules**, preserving the severity labels in that table and the exact location evidence. Checking only keyword counts is not this audit.

#### Audit section 2 — document-level checks

| Check | Pass criteria | Severity |
| --- | --- | --- |
| One macro context | One canonical search intent throughout. | High |
| Linear flow | No backward jumps or forward dependencies. | Medium |
| No unnecessary sentence splitting | Related facts stay joined where they form one logical thread. | Low |
| Perspective richness | At most one extra perspective per section; subordinate to the answer. | Low |
| Short-form questions | Short single-clause question headings, with documented source exceptions. | Low |
| No PAA/competitor copying | Original question phrasing rather than copied question sets. | Medium |
| Tables/lists framed | Table definitions and useful outros; lists have accurate count introductions. | Low |
| No body citation hyperlinks | Named external sources without outbound body citation links, unless explicitly requested. | Medium |
| Sentence economy | Short, clear sentences without excessive factual dependency depth. | Low |
| No opinion/sentiment | No subjective sentiment in factual sections. | Medium |
| No casual register | No conversational lead-ins in factual answers. | High |

#### Audit section 3 — contextual bridges

| Check | Required evidence |
| --- | --- |
| Inbound bridge | Specified incoming destination/anchor and annotated predicate at the actual referring page; note applicability if not specified. |
| Outbound bridge | Specified outgoing destination/anchor and relationship annotation; note applicability if not specified. |
| Unique EAV signature | Compare sibling ownership; no competing second owner or duplicated task. |
| FS/PAA mechanics | FS within both limits; PAA answer is one certain sentence; markers are editorial comments. |

#### Audit section 4 — Stage 2/3 integrity

| Check | Required evidence |
| --- | --- |
| Locked first answers | Original definitive answers remain immediate and unsoftened. |
| Locked bold spans | Spans unchanged and still mark factual answers. |
| Transition certainty | Readability added no hedging in transitions. |
| Values and entities | No locked number, range, EAV fact or named entity altered, rounded or made vague. |
| Heading integrity | Original Q&A wording or documented source exception remains intact. |

Also compare locked anchors and bridge predicate phrases in the bridge audit. Preserve separate results for all **15 driveway Section 8.8 checks** and the Section 6 semantic/runtime checks; they are not replaced by this writing checklist.

Report the actual checked-row totals and unresolved/final violations. The supplied checklist has **34 rows** across its four sections (14 + 11 + 4 + 5); the driveway checks are additional. Do not count a row as completed while its required evidence is missing, or erase the record of an earlier failure after correction.

Finish the writing audit with:

```text
SUMMARY
Rules checked: <actual total, with checklist groups identified>
Violations: <count> (<High> High, <Medium> Medium, <Low> Low)
Stage 2/3 integrity: <intact / N issues found>
```

Include incomplete required checks and conditional applicability notes separately. Use High for failures of answer timing/frame, certainty, bold target or one macro context; Medium for other substantive signal failures; Low for precision of style/polish, preserving the explicit per-row labels above. This severity assignment is an editorial audit convention, not a Google penalty prediction.

### Writing output and exceptions

Show the final draft first, then audit tables, corrected passages and the summary in plain text/Markdown. Keep required source frontmatter/MDX in the authorized project repository. Do not generate separate Word/PDF/spreadsheet files unless requested; this explicit rulebook update is authorized.

Skip Stage 3 only when the owner requests it, and label the result as the pure semantic draft without readability revision. The factual rules, locks, audit and release gates still apply. Missing facts are gathered through authorized research first; no invented certainty, scenario, numeric stake, reviewer or source fills a gap.
