# AI SEO Implementation Framework — Visual Semantics & Topical Authority

**Source:** Julian Goldie interview with Koray Tugberk Gubur (YouTube, "Google's Ranking Secret? Visual Semantics").
**Purpose:** Instruction set for AI agents executing site building, content writing, publishing, link acquisition, distribution, and auditing.
**Usage:** Treat each numbered rule as an executable instruction. Decision trees are written as IF/THEN logic. The Audit Checklist (Module 7) is pass/fail and can be run against any existing page or site.

**Risk legend:** 🟢 standard practice · 🟡 aggressive / gray-area, monitor closely · 🔴 high-risk tactic documented in the source — flag to a human before executing.

---

## Module 1 — Site Building & Page Construction (Visual Semantics)

### 1.1 Centerpiece Annotation Rule
- Google evaluates a page's **above-the-fold visual centerpiece** (not just text) to decide whether to rank it.
- **Instruction:** Every page must have ONE dominant visual element in the first viewport that instantly communicates the page's function.
  - Tool page → oversized interactive element (e.g., drag-and-drop upload zone, calculator input).
  - Product page → product image + price + buy action.
  - Article → clear H1 + answer block, not a wall of navigation or ads.

### 1.2 Layout-Aware Document Ranking (Query-Appropriate Design)
- Design is a ranking signal (per the Google "document-aware layout ranking" patent).
- **Decision tree:**
  - IF query intent = transactional/shopping → THEN render an e-commerce-style layout (product cards, pricing, CTA buttons) — even for affiliate or lead-gen pages. 🟡
  - IF query intent = tool/utility → THEN render a minimal tool interface, not an article.
  - IF query intent = informational → THEN render a clean editorial layout with structured headings.
- The layout must match what a user *expects* to see for that query class.

### 1.3 Above-the-Fold Attribute Annotation
- AI agents and classifiers look for **attribute signals** (e.g., "free", "no signup", "instant").
- **Instruction:** Identify the 2–3 attributes most valued in the query space (extract them from AI answers / competitor pages) and display them as visible labels on or next to the centerpiece element — not buried in body text.
  - Example: badge reading "No sign-up required" directly under the main button.

### 1.4 Token Economy Rule
- Every token on a page dilutes the importance of every other token. More text = weaker per-word relevance.
- **Instruction:**
  - Keep total page copy minimal where the page's function is visual/interactive (a few sentences can suffice).
  - Place ALL critical n-grams, entities, and "X to Y" combinations (synonyms, file formats, variants) within the **first 2% of the page's tokens**.
  - Never pad a page with filler text to reach a word count.

### 1.5 AI Signature Cleanup (Code-Level)
- AI site builders leave detectable fingerprints: default class names, identical div hierarchies, template CSS patterns.
- **Instruction:** After any AI-generated build:
  1. Rename all generic/default CSS classes and IDs to unique, human-plausible names.
  2. Restructure div nesting/hierarchy away from the generator's default output.
  3. Remove generator comments, meta tags, and boilerplate.
  4. Vary patterns across pages — no two pages should share an identical DOM skeleton.
- Rationale: mass-produced template signatures (e.g., the GeneratePress wave) have historically triggered "scaled content abuse" classification.

### 1.6 Free Tools as Ranking Assets
- Informational clicks are being absorbed by AI Overviews; interactive tools are the most defensible format.
- **Instruction:** For every industry vertical, spec at least one free tool:
  - Legal → case compensation calculator, document evaluator.
  - Finance → ROI / loan calculators.
  - Media → converters, compressors, analyzers.
- Each tool page: interactive centerpiece (1.1) + attribute badges (1.3) + minimal copy (1.4) + CTA to a human service.

---

## Module 2 — Content Writing Rules

### 2.1 Factual vs. Opinionated Decision
- **Decision tree:**
  - IF query demands expertise/accuracy (definitions, YMYL, technical) → THEN write 100% factual sentences. Zero opinion markers.
  - IF query is experiential/review/social ("best", "worth it", "my experience") → THEN use casual, opinionated, first-person language.
- Never mix modes within the same section.

### 2.2 Structured vs. Unstructured Format
- IF query implies comparison/enumeration → THEN use listicles, tables, spec rows.
- IF query implies a single direct answer → THEN use one tight paragraph.
- Match the format distribution seen on current top-ranking pages for the query.

### 2.3 Factual Sentence Sequencing
- For factual blocks, enforce this order:
  1. **Sentence 1 — "is-a" definition:** "Negligence is [definition]."
  2. **Sentence 2 — predicate expansion:** "Negligence means/requires/causes [predicate]."
  3. **Sentence 3 — attribute statement using "X of Y" construction:** "The importance of negligence…", "The compensation for negligence…"
- Keep entity names as sentence subjects; avoid pronoun drift.

### 2.4 Opinionated Section Rules
- No fixed sentence order — naturalness IS the rule. Vary rhythm, length, and openings.
- First-person expertise framing ("In my experience…", expert persona quotes) is encouraged.

### 2.5 Hybrid Factual + UGC Composition
- Pages should combine both language modalities (factual + user-generated-style) in visually segmented sections with appropriate structured data.
- Pattern: main factual content → bottom-of-page Q&A/forum-style block where an expert persona answers repeated core questions casually.
- Rationale: Google's AI-overview scoring evaluates and aggregates both modalities; covering both doubles eligibility.

### 2.6 Brevity & Detection Resilience
- Short pages are mathematically harder to classify as AI-generated; long AI text is easy to flag.
- **Instruction:** Default to the minimum viable word count that satisfies the query. Where AI drafting is used: maintain blacklist of overused AI words, sentence templates, and punctuation habits; rotate structures across pages. 🟡

---

## Module 3 — Topical Mapping & Publishing Cadence

### 3.1 Competitor Coverage Baseline (the 20% Rule)
- **Instruction:**
  1. Identify the top ~8 ranking competitors.
  2. Scrape and merge their sitemaps into a unified topic inventory.
  3. Build a topical map covering **20–30% more topics, at equal or greater depth**, than the combined competitor set.
  4. Beyond ~25% surplus is waste; below it you are not a credible replacement candidate at core updates.
- Where a competitor covers a topic you cannot serve commercially, cover it **informationally** instead — coverage completeness beats business-model purity.

### 3.2 Query Deserves a Page / Heading / Section (QDP/QDH/QDS SOP)
- For every query in the topical map, classify:
  - **QDP (page):** distinct intent + search volume + cannot be merged without dilution → own URL.
  - **QDH (heading):** sub-intent of a parent query → H2/H3 on the parent page.
  - **QDS (section/sentence):** minor variant → single sentence or internal link anchor.
- Human (or human-simulating review pass) makes the final call; automation drafts the classification.

### 3.3 Subfolder / Property Aging Rule
- **Instruction:** Any NEW subfolder, subdomain, subreddit, or account must age **~3 months** with light, organic-looking activity before scaled publishing begins.
- Fresh property + sudden content burst = scaled-content classification risk, regardless of brand strength (reference case: BrowserStack lost ~70% of traffic in 8 months after publishing ~2,000 AI documents in one day, despite 23,000 referring domains).

### 3.4 Publishing Schedule Algorithm
- **Instruction:**
  1. Define total planned page count N for the topical map.
  2. Target completion window: **7–8 months**, with months 1–3 as low-velocity aging period.
  3. Compute required daily average for months 4–8, then **randomize daily counts** around it (e.g., 2, 27, 7, 8…) — never a flat, machine-regular cadence.
  4. Post-maturity ramp ceiling: roughly 50–70 pages/day only on aged properties with existing click signals.
- Exception: naturally huge inventories (vehicle models, train types) justify higher volume — calibrate to what's "normal" for the vertical.

### 3.5 Stability / Patience Rule
- Once a page gains impressions/clicks, **do not edit it** during ranking volatility — even 50% traffic drops.
- Google re-tests pages across core updates; confident pages recover and climb. Churn resets the confidence clock.
- **Instruction:** Log a "do-not-touch" flag on any page in an active click-test phase. Re-evaluate only after 2+ update cycles of stable decline.

---

## Module 4 — Link Building & Entity Attributes (External Topical Map)

### 4.1 Three Outputs Per Link
- Every external publication must deliver, in priority order:
  1. **PageRank** (the link itself),
  2. **Mention** (brand/entity name in relevant context),
  3. **Claim** (an attribute assignment in declarative form: "X is the largest law firm in Texas").
- A link without a mention+claim is an incomplete execution.

### 4.2 Attribute Assignment Strategy
- **Instruction:**
  1. Define the target attribute set for the entity (e.g., "highest success rate", "no signup", "free").
  2. Seed those exact attribute+entity co-occurrences across external publications.
  3. Goal: build **cross-source consensus** so AI answers repeat the claims. Consensus requires external sources — self-published claims don't count.

### 4.3 Domain–Topic Matching
- Match each link placement's topic to the linking domain's own identity/ranking power (e.g., a skills/education domain links with "skills to be a lawyer" content; a trucking domain covers truck-accident topics).
- Topical mismatch between linking domain and content weakens the annotation value.

### 4.4 External Topical Map
- Maintain a second topical map for off-site publications, mirroring Module 3.1 methodology: which topics, which domains, which claims, which anchors — planned as a network, not ad-hoc guest posts.

---

## Module 5 — Content Syndication & Entity Surface Expansion

### 5.1 Reformatting Pipeline
- **Instruction:** Every core content asset flows through:
  - Text article → video → podcast episode → ebook chapter → Reddit/forum post → social clips.
- Each format targets its native platforms (below). Objective: maximize entity surface area so LLMs and crawlers encounter the brand's narrative more often than competitors' ("echo chamber" effect).

### 5.2 Platform Matrix
- **Video:** YouTube + 20–30 syndication endpoints in varied formats.
- **Podcast:** Spotify, Apple Podcasts; register the show on **IMDb** → creates a professional profile + biography for the person entity.
- **Ebook:** Goodreads, Google Books/Scholar, Amazon (free tier) → confers "author" entity status; book title may use exact-match query phrasing; chapters become crawlable subpages.
- **Community:** Reddit (aged subreddits per 3.3), Quora-style Q&A.
- **Secondary properties:** exact-match micro-domains and subdomains on publishing platforms (Notion, Mintlify, Docusaurus-style docs) carrying reformatted content. 🟡

### 5.3 Social Hook Rule
- Short-form video: 3 posts/day minimum, **3-second hook** at open, maximally simplified message, CTA via comment-keyword → funnel.

---

## Module 6 — Measurement & Data Feedback Loops

### 6.1 AI Overview Impression Analysis
- **Instruction:** Per page, pull and compare:
  - Regular web impressions vs. AI Overview impressions (Search Console),
  - Crawl frequency by user-agent type (log data).
- Analyze correlations: which content styles/subfolders earn disproportionate AI impressions; which sentence openings get selected. Feed findings back into Modules 2–3.

### 6.2 Click-Test Monitoring
- Track first-clicks date, click trajectory, and update-cycle deltas per page. Rising-through-updates = leave untouched (3.5). Flat after full topical coverage = revisit 1.1/1.2 layout compliance.

---

## Module 7 — Audit Checklist (Pass/Fail)

Run per page, then roll up per site.

**Page-Level (Modules 1–2)**
- [ ] Single dominant visual centerpiece in first viewport matching page function? (1.1)
- [ ] Layout matches query-intent class (tool / e-commerce / editorial)? (1.2)
- [ ] 2–3 key attribute labels visible above the fold? (1.3)
- [ ] Critical entities/n-grams within first 2% of tokens? (1.4)
- [ ] No filler copy; word count at minimum viable level? (1.4 / 2.6)
- [ ] No AI-builder signatures in class names, DOM hierarchy, or comments? (1.5)
- [ ] Correct factual/opinionated mode for the query, not mixed per section? (2.1)
- [ ] Factual blocks follow definition → predicate → attribute ("X of Y") order? (2.3)
- [ ] Hybrid factual + Q&A/UGC-style block present with structured data? (2.5)

**Site-Level (Modules 3–4)**
- [ ] Topical map ≥ 120% of merged top-8 competitor coverage? (3.1)
- [ ] Every mapped query classified QDP/QDH/QDS? (3.2)
- [ ] Any property/subfolder < 3 months old under scaled publishing? → **FAIL** (3.3)
- [ ] Daily publish counts randomized, total plan spread over 7–8 months? (3.4)
- [ ] Any single-day burst > ~5% of total site URLs? → **FAIL** (3.3/3.4)
- [ ] Pages in click-test phase flagged do-not-touch? (3.5)
- [ ] Every external link delivers mention + claim, not just PageRank? (4.1)
- [ ] Attribute claims consistent across ≥ 5 independent external sources? (4.2)
- [ ] Link placements matched to linking domain's topical identity? (4.3)

**Distribution-Level (Modules 5–6)**
- [ ] Core assets reformatted into ≥ 3 media types? (5.1)
- [ ] Entity present on IMDb / podcast platforms / ebook platforms where applicable? (5.2)
- [ ] AI-impression vs. web-impression analysis run in the last 30 days? (6.1)

---

## Module 8 — Risk Register (Human Review Required)

| Tactic from source | Module | Risk | Note |
|---|---|---|---|
| Mimicking e-commerce layouts on non-commerce pages | 1.2 | 🔴 | Source cites gambling-vertical abuse; engagement deception can backfire |
| Mass account/subreddit aging & automation | 3.3, 5.2 | 🔴 | Violates platform ToS; document, don't execute autonomously |
| Exact-match micro-domains/subdomains for AI seeding | 5.2 | 🟡 | Effective per source; monitor for spam-policy exposure |
| AI-detection evasion via brevity/blacklists | 2.6 | 🟡 | Frame as "write naturally short", not deception |
| Rapid randomized publishing | 3.4 | 🟡 | Safe only on aged properties with click history |

**Standing guardrail for the implementing AI:** execute 🟢 freely, execute 🟡 with logging, escalate 🔴 to a human with context before acting.
