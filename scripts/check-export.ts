import fs from 'node:fs';
import { pages, trustPages } from '../lib/content';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { toolExample } from '../lib/calc/examples';
import { toolFor, surfaceFor } from '../lib/calc/ui';
import { computeGuideEstimate } from '../lib/calc/guide';
import { priceBook, verifiedValue } from '../lib/data';
import { money } from '../lib/format';
import { buildNavigationGroups } from '../lib/navigation';
const errors: string[] = [];
const quickGuideSeqs = new Set([3, 5, 49]);
const menuLinks = buildNavigationGroups(pages).flatMap((group) =>
  group.links.map((link) => link.href),
);
const expectedHeaderLinks = [...menuLinks, '/about/'];
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
  const headerNav = html.match(/<nav\b[^>]*aria-label="Main navigation"[^>]*>[\s\S]*?<\/nav>/)?.[0];
  if (!headerNav) {
    errors.push('Missing main navigation ' + url);
  } else {
    const actualLinks = [...headerNav.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)].map(
      (match) => match[1],
    );
    if (JSON.stringify(actualLinks) !== JSON.stringify(expectedHeaderLinks))
      errors.push('Primary navigation has duplicate, missing or misplaced links ' + url);
  }
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
  if (url === '/') {
    if (!html.includes('class="hero-area-check"') || !html.includes('<strong>400</strong>'))
      errors.push('Homepage missing working 20 ft by 20 ft area-check preview');
    for (const oldSection of [
      'project-intro',
      'purpose-section',
      'lime-ticker',
      'final-cta',
      'hero-collage',
    ]) {
      if (html.includes(`class="${oldSection}`))
        errors.push('Homepage still renders repeated section ' + oldSection);
    }
    const featuredMarkup = html.match(/class="tool-bento"[\s\S]*?<\/section>/)?.[0];
    const libraryMarkup = html.match(/class="library-grid"[\s\S]*?<\/section>/)?.[0];
    if (!featuredMarkup || !libraryMarkup) {
      errors.push('Homepage missing distinct featured and additional-tool groups');
    } else {
      const internalHrefs = (markup: string) =>
        [...markup.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)].map((match) => match[1]);
      const featuredHrefs = internalHrefs(featuredMarkup);
      const additionalHrefs = internalHrefs(libraryMarkup);
      if (featuredHrefs.length !== 6 || new Set(featuredHrefs).size !== 6)
        errors.push('Homepage featured cards contain missing or duplicate tools');
      if (!additionalHrefs.length || new Set(additionalHrefs).size !== additionalHrefs.length)
        errors.push('Homepage additional-tool library contains duplicate links');
      if (additionalHrefs.some((href) => featuredHrefs.includes(href)))
        errors.push('Homepage repeats featured calculators in its additional-tool library');
    }
  }
  const fragmentIds = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  for (const fragment of html.matchAll(/<a\b[^>]*href="#([^"]+)"/g)) {
    if (!fragmentIds.has(decodeURIComponent(fragment[1])))
      errors.push(`Missing local fragment ${fragment[1]} on ${url}`);
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
        if (
          !html.includes('class="guide-quick-estimate"') ||
          !html.replace(/<!--.*?-->/g, '').includes(rangeMarkup)
        )
          errors.push('Guide quick estimate disagrees with cost engine ' + url);
      }
      if (html.includes('class="calculator-shell"'))
        errors.push('Guide unexpectedly duplicates the full estimator ' + url);
    } else if (kind) {
      if (
        !html.includes('data-compact-workspace="true"') ||
        !html.includes('class="calculator-fields"') ||
        !html.includes('aria-label="Calculation actions"')
      )
        errors.push('Missing compact primary calculation controls ' + url);
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
  `Verified ${urls.length} exported pages: routes, canonical tags, single-home main navigation, internal links, generated examples, and draft indexing controls.`,
);
