# DATA — Researched prices and material references

Read first: Instruction-set.txt and source-document Sections 7, 8, 10, and 11. Research retrieval date: October 12, 2026. Source observations retain publication dates separately; a page titled 2026 is not treated as a 2026 price list when the publication date is older.

## Evidence files

- `data/research/register.json`: 134 named sources, 216 observations, 80 decisions, technical facts, and product presets.
- `data/research/source-values.csv`: item, low, high, unit, source name, URL, date retrieved, exact source location, and scope/context.
- `data/research/field-dispositions.json`: all 170 original empty fields, with 46 sourced, 92 NOT FOUND, and 32 NOT APPLICABLE dispositions.
- `data/research/keyword-coverage.json`: current exact and declared grammatical-variant placements.
- `data/research/editorial-review.json`: unresolved repetition review for overlapping Section 11 phrases and question-wording precedence.

## Selected benchmarks

| Scope | Low | High | Unit | Selected source |
| --- | ---: | ---: | --- | --- |
| New asphalt installed | 7 | 13 | USD/ft² | Angi, new-driveway section |
| Standard concrete installed | 6 | 10 | USD/ft² | HomeGuide, standard concrete |
| Basic stamped concrete installed | 10 | 14 | USD/ft² | Concrete Network, basic pattern/color |
| Gravel installed | 4 | 10 | USD/ft² | HomeGuide, new installation |
| Pavers installed, generic comparison | 10 | 30 | USD/ft² | HomeGuide; material-specific alternatives remain separate |
| Tar and chip installed | 2 | 5 | USD/ft² | HomeGuide |
| Flat concrete slab installed | 6 | 12 | USD/ft² | HomeGuide |
| Millings installed | 2 | 5 | USD/ft² | HomeGuide |
| Asphalt overlay | 3 | 7 | USD/ft² | Angi |
| Asphalt replacement, removal included | 8 | 15 | USD/ft² | Angi |
| Sealcoating | 1.25 | 1.50 | USD/ft² | Angi, dedicated sealing guide |
| Asphalt hot patch | 2 | 5 | USD/ft² | HomeGuide; service minimum separate |
| Concrete resurfacing | 3 | 7 | USD/ft² | HomeGuide |

Concrete replacement 8–16 USD/ft² is explicitly a component calculation: HomeGuide standard concrete 6–10 plus Angi demolition 2–6. It is not an observed replacement quotation. Removal is already included in this calculated scope.

Every selected range comes from one intact named observation or an explicitly labeled formula. Source ranges are not averaged. Conflicting scopes, older dates, and internally inconsistent figures remain visible in the evidence register. Asphalt/concrete installation research includes at least three named guides and three independent contractor price pages. Suppliers and manufacturers provide local freight rules, product yields, and material references.

## Default policy

HMA uses the named Asphalt Institute 148 lb/ft³ in-place reference; the source comparison includes 142–148 and supplier values. Asphalt thickness uses CAPA’s 3-inch residential reference over an appropriate base, with design conditions. Pea gravel, washed rock, crusher run, road base, and crushed stone have named supplier examples, not a blended generic density. Loose millings density remains a reference rather than a prefilled compacted-depth conversion.

Concrete uses a 4-inch residential reference and editable 10% ordering contingency, with source and scope. The 80 lb QUIKRETE Concrete Mix 1101 yield is approximately 0.60 ft³; changing bag weight does not establish another product’s yield.

Sealcoat references are product-specific. Latex-ite Ultra Shield smooth/porous cases use the lower published per-coat coverage divided by 4.75 gallons. Henry 200’s linked sheet specifies one coat and 250–400 ft² per 5 gallons; its webpage differs, so the conflict remains explicit. SealMaster Ultra specifies 70–82 ft² per gallon per coat, with container size entered by the visitor. Rust-Oleum’s up-to coverage is not converted into an invented lower-bound default.

Zero waste/compaction entries represent excluded allowances, not recommended construction defaults. Baseline cost pricing uses an arithmetic identity multiplier of 1, with no regional adjustment; low/average/high regional index values remain null.

## Unresolved values

NOT FOUND applies to compatible national delivered material prices, universal hauling/short-load/minimum charges, driveway-specific regional multipliers, comparable annual upkeep totals, finite gravel renewal life, and other unsupported generic-schema fields. A local supplier fee remains a local example. Concrete per-ton prices and concrete short-load rules on asphalt are not applicable to the current model.

Visitors enter actual quote rates where the model supports them. Missing data is not replaced with zero, an averaged source range, or a guessed margin. Every original field has a research disposition; the generic schema contains many fields that do not apply to its surface.

## Implementation and limits

All 51 mapped pages have source-grounded draft content. Shared price tables and worked examples read the data book and call the actual calculator engine. Cost estimates now work on baseline ranges; extra fees are explicitly quoted or attributed and excluded unless selected. Replacement prevents duplicate removal charges. The result distinguishes pricing incompleteness from a completed estimate.

Original title/H1/description fields and the 51-route master map remain intact. The comma splits in the short-ton and reinforcement entity cells are corrected, and the parenthetical cement instruction is represented by its actual entity term.

Human editorial review is not fabricated. Draft noindex controls, disabled leads/ads, and the launch checklist remain in place. Overlapping long-tail questions still require repetition review; exact raw counts and grammatical variants are reported rather than silently marked approved. Browser layout, phone interaction, and performance verification remain unavailable.
