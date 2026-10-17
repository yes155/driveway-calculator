# BUILD — Compact calculator workspaces

Owner authorization: October 17, 2026, apply the screenshot/framework recommendations sitewide, with calculator and CTA above the fold. Working branch: `audit-fixes-2026-10-14`; preserve private review and all 51 draft/noindex mapped pages.

## Shared changes

- Compact heading, navigation and hero spacing; mobile navigation has an explicit Menu disclosure.
- Full calculators use an independently scrollable input region with a persistent Calculate/Reset row. Optional geometry and installed-rate settings remain available as disclosures. Required inputs inside a collapsed disclosure are opened before browser validation, rather than silently bypassing validation.
- Result panels lead with their primary metric. Secondary metrics, assumptions and formula steps remain available in labeled disclosures; Copy/Print/Share stay beside the main result. Installed-cost idle states name their cost purpose when prices exist; missing-price scopes retain area-only wording.
- The mobile homepage puts the area check after the title and before supporting description. Desktop hero columns align near their tops; the hero result and its next action remain primary.
- Hero/guide validation messages are linked to their numeric inputs. The guide quick estimates remain distinct from full estimators.
- Sidebar navigation exposes the calculator, explanation and methodology. The homepage specialized-tool description names actual tasks; its decorative footer wordmark is smaller.

## Worked-example editorial correction

Stage 1: the shared example opening now states the engine-generated result for the existing illustrative inputs instead of saying that an engine generates an example. No price, default, formula or quantity was invented or changed.

Stage 2 locks: for each existing `toolExample(kind, material, surface)`, the first metric value/unit/label is inserted unchanged in the bold first answer. Compare-mode answers use each existing comparison row's surface and low/high values. Existing example inputs, context, formula and complete metric list remain the source of truth; the explanatory formula and metrics are retained immediately below. The heading stays `What does a worked example look like?` and existing bridge destinations remain unchanged.

Stage 3: supporting context is retained unchanged; no readability rewrite of locked quantities or external factual claims. This shared renderer correction does not retrospectively certify all page MDX or complete missing historical page locks.

Stage 4: existing unit tests, source/keyword validation and exported example comparisons remain required. Human editorial review and unresolved screenshot-audit rows remain open; automation is not editorial approval.

## Verification contract

- `scripts/check-export.ts` verifies the compact workspace marker, scrollable-input region and calculation actions on every full-calculator export, in addition to prior route/metadata/noindex/engine-example checks.
- `scripts/check-layout.mjs` runs in GitHub CI using its existing Chrome. It measures the H1, first primary numeric input, Calculate action and result heading at 1280×600, 1366×620, 390×844 and 360×740. Homepage and quick-guide variants check their input, live result and detailed-tool CTA. It saves screenshots and raw placement records, exercises a 20×20 asphalt cost submission and confirms collapsed required quoted rates reopen on validation.
- These checks assert primary-control placement at the recorded sizes, not that all advanced fields and every supporting result fit every device. Larger input sets scroll inside the card while the action row remains outside that scroll area. Keyboard/zoom/manual accessibility remain distinct checks.
- See the latest branch CI artifact `workspace-layout-checks` for actual results. Do not label a check passed before that run completes. Supported local browser control is unavailable in this session; no local browser was installed or improvised.

## Preserved release boundaries

No URL, map phase, price/default record, author/reviewer approval, launch flag, lead activation or public audience change. The draft PR is not merged. Existing release gates remain in force.
