# BUILD — Implement the October 18 visual-semantic audit

Authorization: owner requested “implement improvements” after reviewing the six October 17 evening screenshots and nine findings. Base revision: `8987dcb0c28fae004bcd53572fdb38fdeaacea96`. Scope: the shared calculator and article templates, homepage spacing, concrete cost guide, and one equivalent visitor-copy correction on the asphalt guide. Existing 51 URLs, phases and draft/noindex status remain unchanged.

## Finding disposition

| Finding                                  | Implementation                                                                                                                                                                                                                        | Verification                                                                                                                             |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| V1 — lost measurement context            | Primary result shows dimensions for a single untapered, unsloped rectangle, or section count for other geometry, plus computed area. Edit measurements returns to and focuses the first input. Converter uses input-specific wording. | CI exercises edit focus/scroll; geometry and values still come from the existing state and engine                                        |
| V2 — empty column after expanded results | Breakdown, assumptions, comparison table and formula occupy a separate full-width row below the main input/result row                                                                                                                 | CI opens details and checks that the form height does not grow                                                                           |
| V3 — competing secondary numbers         | Secondary metrics use a smaller common style; primary metric retains existing prominence                                                                                                                                              | CI compares computed primary/secondary font sizes                                                                                        |
| V4 — buried result actions               | Copy/Print/Share immediately follow the primary result and its measurement summary                                                                                                                                                    | CI checks their position before the detail region                                                                                        |
| V5 — indirect DIY answer                 | Concrete guide now answers feasibility directly and attributes the professional-installation recommendation to Concrete Network                                                                                                       | New primary publisher source recorded in sources and research register; no DIY savings, technical dimensions or local legal claims added |
| V6 — synonym repetition                  | Equivalent cost questions consolidate into one price answer; subsequent sections own included work, replacement and DIY feasibility                                                                                                   | All source keywords retained in frontmatter; documented variants and QDS decisions preserve their existing URL owner                     |
| V7 — incorrect example promise           | Concrete guide names its fixed area/cost example and links volume calculations to the existing Concrete Calculator; equivalent engine-first wording removed from the asphalt guide                                                    | Source/export checks; no formula or example values changed                                                                               |
| V8 — excessive section spacing           | Shared homepage section gaps reduced; hero structure retained                                                                                                                                                                         | Desktop/phone screenshots and existing placement assertions                                                                              |
| V9 — generic contents                    | Shared article navigation lists actual source questions with matching fragment IDs; phone gets a compact contents disclosure                                                                                                          | Fragment checks across the existing viewport suite; phone DIY navigation interaction                                                     |

## Step 0 — page brief and evidence

Seq 5 `/concrete-driveway-cost/` owns sourced installed-cost interpretation. Seq 6 retains the editable installed estimator; Seq 35 retains material volume. Replacement and stamped pricing keep their existing destinations. The main page answer, benchmark selection, external price ranges and price retrieval dates are unchanged. The article update date changes to October 18 because its structure and answer copy materially changed.

Existing verified project facts used: standard-gray installed benchmark $6–$10/ft²; independent competing ranges remain separately attributed; 20 × 20 ft is the fixed illustrative area; installed and ready-mix material units are different; replacement has separately scoped demolition/disposal. This task does not freshly reverify those market observations or approve them for launch.

New nonnumeric evidence: Concrete Network’s **Can You Pour a Concrete Driveway Yourself?**, https://www.concretenetwork.com/concrete/concrete_driveways/diy.html, read October 18 Asia/Karachi; introduction and planning, subgrade, forms, finishing, jointing and curing sections (retrieved lines 76–108). It recommends professional installation and explains the skills/work taken on by a DIY owner. Source ID `concrete-cn-diy`; research technical fact `concreteDrivewayDIY`. No independent-source quota is claimed for this single publisher’s attributed recommendation.

## Stages 1–3 and lock record

Stage 1 deliberately reopens the old repetitive price headings and indirect DIY answer. The replacement section stops repeating the full benchmark. The price answer stays unchanged; the revised inclusion answer retains the existing placement/finishing scope. Stage 2 locks the following final headings/first answers before further readability changes:

| Heading                                        | Locked first answer                                                                                                                          |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| How much does a concrete driveway cost?        | HomeGuide’s standard gray concrete driveway benchmark is $6–$10 per square foot installed.                                                   |
| Which work does the installed rate cover?      | The installed rate covers concrete placement and finishing; the quote identifies the rest of the job scope.                                  |
| How does replacement change the project total? | Replacement adds demolition and disposal to the new-concrete installation scope when those charges are excluded from the installation quote. |
| Can I pour my own concrete driveway?           | Yes, but a concrete driveway requires placement and finishing skills; Concrete Network recommends professional installation.                 |

The four answer spans above remain bold. Numeric locks: $6–$10, $5–$8, $6–$8, $8–$12, 20 × 20 ft; unchanged generated example values stay engine-derived. Entity/source locks: HomeGuide, Concrete Network, Angi, standard gray concrete, installed scope, demolition, disposal, placement/finishing. Anchor/destination locks: Concrete Driveway Cost Calculator → installed estimate from area; Cost to Replace a Concrete Driveway → demolition/disposal/new pour; Concrete vs Asphalt Driveway → surface comparison; Stamped Concrete Driveway Cost → finish scope; Concrete Calculator → cubic yards from area/depth. Stage 3 changes supporting wording only; no later change of these locks is authorized implicitly. This records the bounded rewrite and does not recreate missing historical locks for all other articles.

## Keyword/task decision and source conflict

Section 10.7 asks for question keywords as headings and also forbids keyword-only prose. The later owner workflow forbids repeated synonym sections. These requirements conflict when several mapped questions ask for the same installed-price answer. Resolution for Seq 5: retain the entire Section 11 keyword array and canonical URL; classify equivalent cost, pour and cement-price phrasings as QDS under the canonical cost answer; retain distinct work-scope and DIY questions as QDH. The per-square-foot answer is explicit in the first cost answer, and “cement driveway” terminology appears once in supporting text. Existing declared-variant support records each equivalent query; no validator, exact map entry, URL or publication gate is weakened. This is an explicit editorial application decision within the owner-authorized cleanup, not proof of ranking coverage.

## Stage 4 — required checklist record

P = passes the bounded changed-content/source check; V = unresolved observed violation; NV = not verified; NA = not applicable. Desktop/phone interaction and layout results belong to the matching CI artifact, not to this source-only table. No human review or full-site editorial compliance is asserted.

| Check                            | Result | Evidence / limit                                                                                                       |
| -------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| M01 Word sequence                | P      | Four locked answers match their questions                                                                              |
| M02 Certain wording              | P      | Changed factual copy checked; uncertainty is expressed through scope                                                   |
| M03 No fluff                     | P      | Removed query-list prose and engine-first visitor wording                                                              |
| M04 Numeric specificity          | NV     | Existing sourced figures retained; no fresh market-source verification                                                 |
| M05 Counts introduced            | P      | Changed article introduces no unsupported counted list; shared four-item checklist unchanged                           |
| M06 Precise verbs                | P      | Covers, adds, applies, compares, calculates express the relationships                                                  |
| M07 Named instances              | P      | Work, reinforcement and source categories have named examples                                                          |
| M08 Parallel lists               | P      | Existing Verify/Match/Check/Confirm ordering checklist unchanged                                                       |
| M09 Heading frame                | P      | Cost, work, replacement and feasibility answers now match                                                              |
| M10 Conditions after declaration | P      | Replacement declaration precedes its quote condition                                                                   |
| M11 Anchor text                  | P      | Existing destination names retained for contextual body links                                                          |
| M12 Immediate answer             | P      | First sentence answers each revised question                                                                           |
| M13 Bold answer span             | P      | Four locks are bold; supporting paragraphs are not                                                                     |
| M14 Micro-context entities       | P      | Slab thickness, finish, control joints, formwork, subbase, reinforcement, rebar, mesh, cement and cubic yards retained |
| D01 Macro context                | P      | Installed-concrete cost interpretation                                                                                 |
| D02 Linear flow                  | P      | Price → included work → replacement → DIY → example                                                                    |
| D03 Sentence splitting           | P      | No single thought fragmented for keyword placement                                                                     |
| D04 Extra perspectives           | P      | Surface comparisons remain subordinate and linked                                                                      |
| D05 Short questions              | P      | Four distinct question headings                                                                                        |
| D06 Original question selection  | NV     | No new exhaustive PAA/competitor originality audit                                                                     |
| D07 Framed tables/lists          | P      | Fixed example introduced; generated table/checklist unchanged                                                          |
| D08 Citation placement           | P      | Publisher names in body; source URL retained in register/Methodology                                                   |
| D09 Sentence economy             | P      | Repeated price/query sections consolidated                                                                             |
| D10 Factual register             | P      | Recommendation is attributed, not invented expertise                                                                   |
| D11 No casual factual lead-in    | P      | Yes directly answers feasibility; supporting copy stays factual                                                        |
| B01 Incoming bridges             | NV     | All actual referring pages not re-audited                                                                              |
| B02 Outgoing bridges             | P      | Destination and purpose recorded in Stage 2                                                                            |
| B03 Unique EAV ownership         | P      | Cost interpretation, estimate and volume retain separate owners                                                        |
| B04 FS/PAA targets               | NV     | Editorial marker/length audit not performed                                                                            |
| I01 First-answer locks           | P      | Exact revised spans recorded above                                                                                     |
| I02 Bold locks                   | P      | Same spans remain bold                                                                                                 |
| I03 Transition certainty         | P      | Supporting edits add no hedged factual transition                                                                      |
| I04 Values/entities              | P      | Locked values, publishers and entities retained                                                                        |
| I05 Heading integrity            | P      | Four revised headings relocked explicitly                                                                              |
| S01 Title/H1 context             | P      | Existing macro context retained                                                                                        |
| S02 Direct first answers         | P      | Four locked answers                                                                                                    |
| S03 Prohibited factual wording   | P      | Existing research validation plus changed-copy review                                                                  |
| S04 Count numerals               | P      | Existing four-item checklist unchanged                                                                                 |
| S05 Numerical provenance         | NV     | Existing register retained; no new market review                                                                       |
| S06 Condition order              | P      | Revised replacement answer checked                                                                                     |
| S07 Question headings            | P      | Four source headings remain questions                                                                                  |
| S08 Keyword coverage             | P      | Map array preserved; QDS conflict and declared variants explicit                                                       |
| S09 Micro-context coverage       | P      | Required Seq 5 entities retained contextually                                                                          |
| S10 Link graph                   | NV     | Changed outgoing links checked; complete incoming graph not re-audited                                                 |
| S11 Intent ownership             | P      | No sibling task imported or URL added                                                                                  |
| S12 Units/USD                    | P      | Existing US inputs and USD benchmarks unchanged                                                                        |
| S13 Disclosure                   | NV     | Existing feature flags retained; no new lead/affiliate activation                                                      |
| S14 Trust claims                 | P      | No reviewer, approval, credential or DIY saving invented                                                               |
| S15 Metadata limits              | P      | Existing title/description retained                                                                                    |

Framework 21-row disposition for this implementation: 1 centerpiece, 2 intent layout, 3 attributes and 5 no-filler addressed by the shared UI and guide changes, with actual render confirmation delegated to CI; 4 exact 2% threshold NA; 6 arbitrary code-signature uniqueness NA (shared components preserved); 7 factual mode and 8 direct answer P in the bounded guide; 9 genuine UGC NA; 10 numeric competitor surplus NA; 11 query classification P for the changed Seq 5 queries, NV for the entire site register; 12 aging NA; 13 randomized cadence NA; 14 burst quota NA; 15 click-test freeze NA; 16 external placements NA; 17 consensus quota NA; 18 linking-domain campaign NA; 19 distribution NA; 20 book/profile activity NA; 21 analytics NV. Source hypotheses are not added as ranking or release gates.

## Verification and remaining limits

TypeScript, 171 tests, source/keyword validation, build and 57-page static export checks pass locally. The two additional unit tests cover heading/fragment normalization and duplicate navigation entries. The CI browser suite retains the 200 placement observations and prior workflows, checks fragment targets, expanded detail layout, primary/secondary hierarchy, edit focus and mobile question navigation, and saves full-page screenshots. A report is only a pass after its matching run succeeds; source checks are not an accessibility or editorial approval.

Remaining: verified publisher contact details, full manual keyboard/screen-reader/zoom review, historic editorial locks and launch approvals. No merge, public launch, lead/ad enablement, price/default change or map change is part of this work.
