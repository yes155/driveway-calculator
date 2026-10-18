# DATA / BUILD — Regional index applicability review

Date retrieved: **2026-10-18, Asia/Karachi**. Owner authorization: search suitable indexes, document applicability, and implement only supported adjustments. Base GitHub commit: `6c378e93fc8075dffb355d3e36eef9ea497ef372`; branch `audit-fixes-2026-10-14`; PR remains draft and unmerged.

## Decision

**No automatic regional multiplier is supported for the current selected driveway benchmarks.** This is the outcome of the applicability review, not a claim that regional construction indexes do not exist. An earlier October 12 decision already assessed RSMeans and left tiers unavailable; the conversational description that research was entirely absent was inaccurate. This expanded review examines six primary-publisher pages from five independent publishers. The two Gordian pages count as one publisher. No values were averaged, invented, purchased or imported from third-party uploads.

RSMeans is a conditional future location-data candidate. Its composite building model is not established here as a compatible factor for the selected Angi/HomeGuide driveway installation ranges. Those ranges are attributed publisher benchmarks, not a documented RSMeans national-basis line-item estimate. Applying a general city factor directly would introduce an unverified model assumption. This is our applicability judgment, not a publisher prohibition on all paving use.

ENR explicitly says its city indexes do not measure cost differentials between cities. FHWA measures changes over time in state roadway construction prices. BLS's regional series describes new nonresidential buildings and their contractor groups. BEA measures consumer price levels. Neither a time-index ratio nor a consumer purchasing-power ratio is adopted as a driveway price-level factor.

## Section 7 evidence table

Each row evaluates the requested **driveway regional multiplier**, rather than reproducing unrelated index values. NOT FOUND means no numerical factor established for this site's current baseline and work scope. The evidence locations identify the exact publisher sections inspected.

| Item | Low | High | Unit | Source and URL | Retrieved | Evidence location | Use / applicability |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Driveway regional multiplier | NOT FOUND | NOT FOUND | multiplier | [Gordian RSMeans — City Cost Index methodology](https://www.gordian.com/resources/city-cost-index-everything-need-know/) | 2026-10-18 | What costs are in the City Cost Index?; How is the City Cost Index produced?; Common mistakes | Potential future source with matched paving items, geography, period, baseline and permitted data use. Its composite building model does not validate a multiplier for selected Angi/HomeGuide driveway ranges. |
| Driveway regional multiplier | NOT FOUND | NOT FOUND | multiplier | [Gordian RSMeans — 2026 cost book updates](https://www.rsmeans.com/landing-pages/2026-rsmeans-cost-index) | 2026-10-18 | Access Quarterly Construction Cost Index Updates | No driveway-specific location factor or low/average/high mapping was adopted from this page. Historical-index levels are not regional factors. |
| Driveway regional multiplier | NOT FOUND | NOT FOUND | multiplier | [Engineering News-Record — Using ENR Indexes](https://www.enr.com/economics/faq) | 2026-10-18 | Do the indexes measure cost differentials between cities?; Do ENR cost indexes capture all factors? | Reject as a spatial multiplier, including city-index divided by national-index ratios. |
| Driveway regional multiplier | NOT FOUND | NOT FOUND | multiplier | [Federal Highway Administration — NHCCI frequently asked questions](https://www.fhwa.dot.gov/policy/otps/nhcci/faq.cfm) | 2026-10-18 | What is the NHCCI?; How can I compare NHCCI to my State index? | Reject for residential driveway location factors: temporal index and public-highway procurement scope. |
| Driveway regional multiplier | NOT FOUND | NOT FOUND | multiplier | [Bureau of Labor Statistics — Regional indexes for new nonresidential building construction](https://www.bls.gov/ppi/notices/2016/ppi-introduces-regional-indexes-for-new-nonresidential-building-construction.htm) | 2026-10-18 | Introductory methodology above Tables 1 and 2 | Reject for residential driveway price-level multipliers. A common index base does not establish equal initial regional price levels. |
| Driveway regional multiplier | NOT FOUND | NOT FOUND | multiplier | [Bureau of Economic Analysis — Technical notes on regional price parities](https://www.bea.gov/news/technical-notes-regional-price-parities-and-implicit-regional-price-deflators) | 2026-10-18 | Regional price parities paragraphs; CPI and housing-rent inputs | Reject as a driveway installation multiplier: consumer purchasing-power scope is not driveway contractor installation scope. |

The machine-readable evidence is `data/research/regional-index-review.json`. The existing `regionalTierMultipliers` decision and all three tier field dispositions link to the new review. `data/prices.json` retains null, unverified regional values. Existing source retrieval dates and selected unit prices remain unchanged; the main research register's October 12 date remains its original observation-batch date, with this review dated separately.

The RSMeans 2026 update page was inspected for current publication context. Its historical-index values are time measures, not city multipliers. The October 2026 product listing was also inspected: https://www.rsmeans.com/2026-construction-cost-indexes-october; it showed pre-order and a future shipping date at retrieval. No October factor table was claimed retrieved. A USACE area-cost-factor page was found in search but direct retrieval returned 403; no numerical factor or applicability conclusion relies on that inaccessible page.

## Implementation

- Replace the single-working-option Price basis dropdown and three disabled regional choices with an explicit price-basis label, no-regional-adjustment statement and Methodology link.
- Retain the existing single-surface quoted low/high rate inputs. Label their results as quote-based rather than published benchmarks. The comparison tool continues to use each surface's published range; a single-surface quote flag in a shared payload does not relabel that comparison.
- Use identity arithmetic only in the UI adapter; reject all non-baseline tier requests, including old/edited shared links. No unsupported request silently falls back to baseline.
- Remove sourced-tier wording from visible calculation steps. Rates and separately selected extras are not regionally scaled. The underlying general-purpose pure calculation formula remains available and its existing tests remain intact.
- Explain applicability on Methodology and add source URLs to its named source register. No new route, geographic landing page, source price, reviewer claim or launch approval.

## Future regional-data acceptance

A future regional feature requires a named dataset with permitted reuse, edition/date, explicit geographic assignment, paving scope and compatible baseline. It also requires treatment of material/labor/equipment weights, separately quoted fees and evidence for any tier boundaries. If location-level data is appropriate but three broad tiers are not, implement explicit locations only after recording that design decision. Buying a general index alone does not validate a factor for an unrelated baseline. No purchase or provider outreach is part of this task.

## Step 0 — bounded content brief

Seq 1 `/methodology/` owns formulas, defaults and source selection; its title/H1 and routes remain unchanged. The addition answers the QDH sub-intent regional driveway pricing; low/average/high variants remain QDS within it. Regional benchmark-versus-quote handling remains on the existing estimator QDP pages. No city/state content is added.

Verified EAV facts: (1) the current UI accepts no automatic regional factor, (2) single-surface tools accept quoted low/high rates, (3) comparison uses individual surface benchmarks, (4) RSMeans models standardized construction by location, (5) FHWA/ENR measure price trends, and (6) BEA consumer price levels and BLS nonresidential movements have different scopes. The first three are source-code/adapter facts; the last three are linked publisher-methodology evidence above. No new external numerical price is asserted.

New incoming bridge: the shared cost-workspace label links “Methodology” to the regional question and states that Methodology “explains regional pricing.” Its destination exists in the export. Existing outgoing tool bridges are preserved; this task does not recertify the full historic link graph.

## Stage 1 — new Methodology passage

### How are regional prices handled?

**Published benchmarks receive no regional adjustment; single-surface cost calculators also accept your quoted unit rates.**

Enter the quoted low and high rates for the same work scope. The surface comparison retains each publisher's benchmark. Add removal, base work or delivery separately only when the quoted unit rate excludes that work.

RSMeans City Cost Index compares standardized construction costs by location, but its general model does not establish driveway multipliers for the benchmarks selected here. FHWA's highway index and ENR's construction indexes track changes over time. BEA regional price parities measure consumer price levels, and BLS regional building indexes track nonresidential construction price movements. None of these reviewed measures establishes low-, average- and high-cost driveway tiers for this site's price ranges.

## Stage 2 locks and Stage 3 review

Locks: heading “How are regional prices handled?”; the entire bold first sentence above; quoted rate/benchmark distinctions; named RSMeans, FHWA, ENR, BEA and BLS scope facts; no numerical multiplier; incoming “Methodology” anchor and “explains regional pricing” predicate. Existing first answers and price claims are untouched. Stage 3 retains those locks and checks supporting sentence flow; it changes no locked span. A supporting extras sentence was clarified to state that quoted work is added only when excluded from the unit rate; it is not a new external price fact.

## Scoped writing and framework audit

P = pass for the new passage/changed labels only; NA = not applicable with reason; NV = not verified. These rows do not certify all 51 drafts or historical editorial integrity. UI writing uses concise field labels rather than manufactured Q&A headings. No new FS/PAA target or number was introduced.

| Check | Status | Location / evidence |
| --- | --- | --- |
| M01 — answer word sequence | P | Regional heading receives the pricing method first. |
| M02 — certainty | P | New passage has no prohibited hedging. |
| M03 — fluff | P | Each sentence describes method, input or an index-scope distinction. |
| M04 — numeric specificity | P | No external quantitative factor added; missing factors remain null. |
| M05 — counted lists | NA | New visitor passage has no enumerated list or asserted count. |
| M06 — precise verbs | P | Compares, tracks and measures distinguish index functions. |
| M07 — examples after plurals | P | Additional work names removal/base/delivery; index descriptions name publishers. |
| M08 — parallel list grammar | NA | No new visitor list. |
| M09 — heading/frame match | P | How regional prices are handled is answered with benchmark and quote handling. |
| M10 — conditions follow statements | P | Extras instruction leads with Add, followed by only when. |
| M11 — destination-title anchors | P | Methodology anchor matches destination H1; fragment targets new question. |
| M12 — direct first answer | P | Bold first sentence states current supported behavior. |
| M13 — bold actual answer | P | Whole first-answer claim is bold, not a keyword. |
| M14 — micro-context entities | P | Benchmark, quoted unit rates, location factors, scope and source names appear. |
| D01 — macro context | P | Methodology/source selection remains the page purpose. |
| D02 — linear flow | P | Supported method, input scope, then source limitations. |
| D03 — sentence splitting | P | Related consumer/building scope facts are joined. |
| D04 — extra perspectives | P | Index explanation is subordinate to the current method. |
| D05 — short question | P | How are regional prices handled? |
| D06 — original question | P | Task-specific heading, not copied from a competitor question set. |
| D07 — framed tables/lists | NA | No new visitor table/list; internal evidence table has an introduction. |
| D08 — source placement | P | Visitor prose names sources; URLs remain in Methodology register. |
| D09 — sentence economy | P | No implementation jargon in changed visitor labels. |
| D10 — factual register | P | No subjective quality/ranking claim. |
| D11 — no conversational lead-ins | P | Direct factual answer retained. |
| B01 — incoming bridge | P | Cost settings Methodology link and explanatory predicate in shared component. |
| B02 — outgoing bridge | NA | No new outgoing Methodology bridge specified; existing links preserved, not reaudited. |
| B03 — distinct ownership | P | Regional method is QDH on Methodology; estimates remain on mapped calculators. |
| B04 — FS/PAA | NA | No new search-feature target declared. |
| I01 — first-answer lock | P | Stage 2 first answer preserved. |
| I02 — bold lock | P | Same first-answer span. |
| I03 — certainty in transitions | P | Supporting copy introduces no hedging. |
| I04 — numbers/entities lock | P | No new prices or factors; source entities preserved. |
| I05 — heading lock | P | Same short question. |
| S01 — title/H1 | P | Existing Methodology metadata retained. |
| S02 — direct answers | P | New heading has direct first answer. |
| S03 — factual wording | P | New passage checked for project prohibited wording. |
| S04 — numeral counts | NA | No new visitor count. |
| S05 — numerical provenance | P | No new external number; tier fields remain null. |
| S06 — conditional order | P | Add-work declaration precedes scope condition. |
| S07 — question heading | P | New heading is a short question. |
| S08 — mapped keywords | NA | Methodology has no primary/fold-in keyword phrases; existing map untouched. |
| S09 — micro-context | P | Added regional method supplements unchanged formula/default source context. |
| S10 — links and relationships | P | New incoming link targets the actual regional question with Methodology anchor. |
| S11 — competing intent | P | No estimate or city landing page added. |
| S12 — units/currency | P | No new unit toggle or currency; quoted rates remain USD/ft². |
| S13 — disclosures | P | Existing disclosure components and disabled lead state untouched. |
| S14 — credentials/reviews | P | No credential, review or approval claim added. |
| S15 — metadata length | P | Existing metadata unchanged; validated during build. |
| F01 — first-viewport centerpiece | NV | No fresh local browser available; CI placement check retained. |
| F02 — intent-matched layout | P | Existing estimator workspace preserved; price settings remain optional. |
| F03 — useful attributes | P | Price basis, no adjustment and quote distinction are truthful. |
| F04 — exact 2% requirement | NA | Unsupported source threshold, not adopted. |
| F05 — minimum sufficient copy | P | Inactive regional menu replaced with short task-specific explanation. |
| F06 — builder debris | NA | No starter/generator artifacts introduced; cosmetic DOM uniqueness not adopted. |
| F07 — factual mode | P | Publisher scope and code behavior separated from applicability inference. |
| F08 — heading/answer order | P | Method first, index background afterward. |
| F09 — genuine UGC | NA | No UGC feature. |
| F10 — competitor surplus | NA | No topical expansion; numerical surplus not adopted. |
| F11 — QDP/QDH/QDS | P | Bounded classification recorded in Step 0; full map not recertified. |
| F12 — property aging | NA | No property created. |
| F13 — randomized cadence | NA | No publication campaign. |
| F14 — daily publication limit | NA | Private draft revision only. |
| F15 — click-test freeze | NA | No analytics-based freeze; factual correction authorized. |
| F16 — external link/mention/claim | NA | No outreach or external placement. |
| F17 — five-source consensus | NA | Five independent publishers assessed for scope, not a manufactured consensus claim. |
| F18 — referring-domain match | NA | No link campaign. |
| F19 — three media types | NA | No distribution brief. |
| F20 — profiles/media | NA | No identity/profile work. |
| F21 — recent AI/web analysis | NA | No measurement-data brief or fabricated analytics. |

SUMMARY: 70 rows recorded: 34 writing/integrity, 15 driveway and 21 framework. No unresolved writing violation identified in the changed passage; conditional items are NA, and fresh visual placement is NV until CI. Stage 2/3 locks for this addition are intact. No full-site editorial approval is claimed.

## Validation and release record

- TypeScript and 179 unit tests passed locally, including rejected legacy/edited tiers, unchanged comparison prices and quote-based rates plus delivery.
- Local build/export passed: 51 mapped drafts, 57 exported pages, routes/canonicals/internal links/examples/noindex. Targeted HTML inspection verifies all four cost workspaces and the regional Methodology fragment.
- New GitHub browser assertions cover quoted-rate calculation, basis labeling, inactive-tier removal and the Methodology destination. Browser/performance CI status remains attached to the pushed commit; it is not assumed from local checks.
- No local browser QA was run: managed Sites requires the unavailable control-browser skill. Existing GitHub browser checks remain the runtime verification path.
- All mapped pages retain draft/noindex. No merge, public launch, lead activation or external-source purchase.
