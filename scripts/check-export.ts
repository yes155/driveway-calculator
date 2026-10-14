import fs from 'node:fs';
import { pages, trustPages } from '../lib/content';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { toolExample } from '../lib/calc/examples';
import { toolFor, surfaceFor } from '../lib/calc/ui';
import { computeGuideEstimate } from '../lib/calc/guide';
import { priceBook, verifiedValue } from '../lib/data';
import { money } from '../lib/format';
const errors: string[] = [];
const quickGuideSeqs = new Set([3, 5, 49]);
const urls = [...pages.map((p) => p.url), ...trustPages.map((p) => p.url)];
for (const url of urls) {
  const file = 'out' + url + 'index.html';
  if (!fs.existsSync(file)) {
    errors.push('Missing export ' + url);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('<body class="theme-projectone">'))
    errors.push('Missing shared design theme ' + url);
  const visibleHtml = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
  if (/\{\{(?:DATA|LOW|HIGH):?/.test(visibleHtml)) errors.push('Visible source placeholder ' + url);
  if (/arithmetic fixture|project specification|Technical review:/i.test(visibleHtml))
    errors.push('Visible internal editorial wording ' + url);
  if ([...visibleHtml.matchAll(/<h1\b/g)].length !== 1)
    errors.push('Page requires exactly one H1 ' + url);
  if (!html.includes('https://drivewaycalc.online' + url)) errors.push('Missing canonical ' + url);
  if (process.env.SITE_STAGE !== 'launch' && !html.includes('noindex'))
    errors.push('Draft missing noindex ' + url);
  for (const href of html.matchAll(/href="(\/[^"?#]*)"/g)) {
    const dest = href[1];
    if (dest.startsWith('/_next/') || dest === '/icon.svg') continue;
    if (!urls.includes(dest)) errors.push(`${url}: unknown internal link ${dest}`);
  }
  const page = pages.find((p) => p.url === url);
  if (page) {
    const heading = html
      .match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]
      ?.replace(/<br\s*\/?>/g, ' ')
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const expectedHeading = page.url === '/' ? 'Driveway Calculators.' : page.h1;
    if (heading !== expectedHeading) errors.push('Incorrect exported H1 ' + url);
    if (!html.includes(`<title>${page.title}</title>`))
      errors.push('Incorrect exported title ' + url);
    const meta = renderToStaticMarkup(
      createElement('meta', { name: 'description', content: page.description }),
    );
    if (!html.includes(meta)) errors.push('Incorrect exported description ' + url);
    const decisionHeadings: Record<number, string> = {
      17: 'How do installed paver costs differ by material?',
      31: 'Which filler fits the crack rather than the product name?',
      32: 'How do the two documented cold-patch limits compare?',
      51: 'Which named sealer label matches the surface and coat plan?',
    };
    if (decisionHeadings[page.seq] && !visibleHtml.includes(decisionHeadings[page.seq]))
      errors.push('Missing sourced decision comparison ' + url);
    if ([4, 6, 50].includes(page.seq) && !html.includes('class="calculator-shell"'))
      errors.push('Detailed estimator is missing its full calculation interface ' + url);
    const kind = toolFor(page.seq);
    const material =
      page.seq === 22
        ? 'asphalt millings'
        : [25, 27, 29, 30].includes(page.seq)
          ? page.h1.replace(' Calculator', '').toLowerCase()
          : kind === 'asphalt'
            ? 'asphalt'
            : 'gravel';
    if (quickGuideSeqs.has(page.seq)) {
      const prices = priceBook[surfaceFor(page.seq)];
      const low = verifiedValue(prices.installedLow);
      const high = verifiedValue(prices.installedHigh);
      if (low === null || high === null) {
        errors.push('Guide lost verified installed price ' + url);
      } else {
        const preview = computeGuideEstimate(20, 20, low, high);
        const rangeMarkup = renderToStaticMarkup(
          createElement('strong', null, `${money(preview.low)}–${money(preview.high)}`),
        );
        if (!html.includes('class="guide-quick-estimate"') || !html.replace(/<!--.*?-->/g, '').includes(rangeMarkup))
          errors.push('Guide quick estimate disagrees with cost engine ' + url);
      }
      if (html.includes('class="calculator-shell"'))
        errors.push('Guide unexpectedly duplicates the full estimator ' + url);
    } else if (kind) {
      const result = toolExample(kind, material, surfaceFor(page.seq)).result;
      const expectedFormula = renderToStaticMarkup(createElement('code', null, result.formula));
      if (!html.includes(expectedFormula))
        errors.push('Worked example formula disagrees with engine ' + url);
      for (const metric of result.metrics) {
        const expectedMetric = renderToStaticMarkup(
          createElement('p', null, `${metric.label}: ${metric.value} ${metric.unit ?? ''}`),
        );
        const normalized = html.replace(/<!--.*?-->/g, '');
        if (!normalized.includes(expectedMetric))
          errors.push('Worked example metric disagrees with engine ' + url + ' ' + metric.label);
      }
    }
  }
}
if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exit(1);
}
console.log(
  `Verified ${urls.length} exported pages: routes, canonical tags, internal links, generated examples, and draft indexing controls.`,
);
