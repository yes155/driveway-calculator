import fs from 'node:fs';
import { pages, trustPages } from '../lib/content';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { renderExample } from '../lib/calc';
import { toolFor } from '../lib/calc/ui';
const errors: string[] = [];
const urls = [...pages.map((p) => p.url), ...trustPages.map((p) => p.url)];
for (const url of urls) {
  const file = 'out' + url + 'index.html';
  if (!fs.existsSync(file)) {
    errors.push('Missing export ' + url);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
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
    const kind = toolFor(page.seq);
    const example =
      kind === 'asphalt'
        ? 'asphalt'
        : kind === 'gravel' || kind === 'layers'
          ? 'gravel'
          : kind === 'concrete'
            ? 'concrete'
            : null;
    if (example && !html.includes(renderExample(example)))
      errors.push('Worked example disagrees with engine ' + url);
  }
}
if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exit(1);
}
console.log(
  `Verified ${urls.length} exported pages: routes, canonical tags, internal links, generated examples, and draft indexing controls.`,
);
