import fs from 'node:fs';
import sourceMetadata from '../data/source-metadata.json';
import { validateMetadata } from '../lib/metadata-validation';
import { pages, getContent, trustPages } from '../lib/content';
import defaults from '../data/defaults.json';
import prices from '../data/prices.json';
import checklist from '../data/launch-checklist.json';
import sources from '../data/sources.json';
const errors: string[] = [];
const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
const urls = new Set([...pages.map((p) => p.url), ...trustPages.map((p) => p.url)]);
const seqs = new Set(pages.map((p) => p.seq));
if (sourceMetadata.length !== 51 || new Set(sourceMetadata.map((p) => p.url)).size !== 51)
  errors.push('Source metadata register must contain 51 unique pages.');
if (pages.length !== 51 || seqs.size !== 51)
  errors.push('The master map must contain 51 unique pages.');
for (const seq of [26, 28, 34, 52])
  if (seqs.has(seq)) errors.push(`Merged Seq ${seq} must not have a page.`);
for (const [phase, count] of [
  ['1', 10],
  ['1b', 18],
  ['2', 22],
  ['3', 1],
] as const)
  if (pages.filter((p) => p.phase === phase).length !== count)
    errors.push(`Incorrect count for Phase ${phase}.`);
const published = pages.filter((p) => getContent(p.url).data.status === 'published');
const launch = process.env.SITE_STAGE === 'launch';
const requiredModules = [
  'AnswerBlock',
  'CalculatorShell',
  'ResultCard',
  'FormulaBox',
  'QASection',
  'RelatedLink',
  'SourceNote',
  'LastUpdated',
  'Disclosure',
];
for (const p of pages) {
  const { data, content } = getContent(p.url);
  errors.push(
    ...validateMetadata(
      p,
      sourceMetadata.find((row) => row.url === p.url),
      data,
    ).map((message) => `${p.url}: ${message}`),
  );
  const slug = p.url.replaceAll('/', '') || 'home';
  if (!/^\/(?:[a-z-]+\/)?$/.test(p.url))
    errors.push(`${p.url}: URL must be flat, lowercase, and trailing-slash.`);
  if (data.slug !== p.url || data.seq !== p.seq)
    errors.push(`${p.url}: frontmatter disagrees with master map.`);
  for (const k of [
    'title',
    'description',
    'slug',
    'type',
    'updated',
    'author',
    'primaryKeyword',
    'keywords',
    'related',
    'status',
  ])
    if (data[k] === undefined) errors.push(`${p.url}: missing ${k}.`);
  if (typeof data.title !== 'string' || data.title.length > 60)
    errors.push(`${p.url}: title exceeds 60 characters.`);
  if (typeof data.description !== 'string' || data.description.length > 155)
    errors.push(`${p.url}: description exceeds 155 characters.`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.updated) || Number.isNaN(Date.parse(data.updated)))
    errors.push(`${p.url}: invalid update date.`);
  if (JSON.stringify(data.keywords) !== JSON.stringify(p.keywords))
    errors.push(`${p.url}: keyword list disagrees with Section 11.`);
  if (!fs.existsSync(`app/${slug === 'home' ? '' : slug + '/'}page.tsx`))
    errors.push(`${p.url}: route is missing.`);
  for (const r of data.related ?? [])
    if (!urls.has(r.slug)) errors.push(`${p.url}: broken related slug ${r.slug}.`);
  for (const link of content.matchAll(/\]\((\/[^ )]+)\)/g))
    if (!urls.has(link[1])) errors.push(`${p.url}: broken content link ${link[1]}.`);
  if (data.status !== 'published') continue;
  if (!data.answer || !Array.isArray(data.sourceNames) || !data.sourceNames.length)
    errors.push(`${p.url}: missing sourced answer or source names.`);
  if (/\{\{DATA:/.test(content)) errors.push(`${p.url}: unresolved DATA placeholder.`);
  if (!checklist.humanReviewedPages.includes(p.seq as never))
    errors.push(`${p.url}: human editorial review not recorded.`);
  for (const m of requiredModules)
    if (!data.modules?.includes(m)) errors.push(`${p.url}: missing module ${m}.`);
  const body = normalize(content);
  for (const keyword of [p.primary, ...p.keywords].filter(Boolean)) {
    const text = normalize(keyword);
    const count = body.split(text).length - 1;
    if (!count) errors.push(`${p.url}: missing keyword ${keyword}.`);
    if (count > 4) errors.push(`${p.url}: keyword ${keyword} exceeds 4 occurrences.`);
  }
  for (const entity of p.entities)
    if (!body.includes(normalize(entity))) errors.push(`${p.url}: missing entity ${entity}.`);
  for (const h of content.matchAll(/^#{2,3}\s+(.+)$/gm))
    if (!h[1].endsWith('?') && !['Hub', 'Reference table', 'Comparison', 'Pillar'].includes(p.type))
      errors.push(`${p.url}: heading is not a question: ${h[1]}`);
  if (/\b(will|should|might|could|may|probably)\b|appears to|can help/i.test(content))
    errors.push(`${p.url}: forbidden hedging wording.`);
  for (const k of data.defaultsUsed ?? []) {
    const d = defaults[k as keyof typeof defaults];
    if (!d || d.value === null || !d.verified || !d.source)
      errors.push(`${p.url}: unverified default ${k}.`);
  }
  for (const key of data.dataRequired ?? []) {
    const [surface, field] = key.split('.');
    const record = prices[surface as keyof typeof prices] as Record<
      string,
      { value: number | null; verified: boolean; source: string | null }
    >;
    const d = record?.[field];
    if (!d || d.value === null || !d.verified || !d.source)
      errors.push(`${p.url}: missing verified data ${key}.`);
  }
  if (/Cost|Compare/.test(p.type)) {
    const surface = [5, 6, 15, 16, 37].includes(p.seq)
      ? 'concrete'
      : [49, 50].includes(p.seq)
        ? 'slab'
        : p.seq === 7
          ? 'gravel'
          : 'asphalt';
    const d = prices[surface];
    for (const k of ['installedLow', 'installedHigh'] as const)
      if (d[k].value === null || !d[k].verified || !d[k].source)
        errors.push(`${p.url}: missing verified ${surface}.${k}.`);
  }
}
if (launch) {
  for (const p of pages.filter((p) => p.phase === '1'))
    if (!published.some((x) => x.seq === p.seq))
      errors.push(`${p.url}: the full Phase 1 launch set must be published together.`);
  if (
    published.some((p) => p.seq === 42) &&
    ![3, 4, 5, 6, 7, 8].every((seq) => published.some((p) => p.seq === seq))
  )
    errors.push('Seq 42 requires Seq 3–8.');
  if (
    published.some((p) => p.seq === 33) &&
    published.filter((p) => p.type === 'Cost guide').length < 8
  )
    errors.push('The pillar requires 8 published cost guides.');
  if (!sources.length) errors.push('The approved source register is empty.');
  for (const [k, v] of Object.entries(checklist))
    if (k !== 'humanReviewedPages' && !v) errors.push(`Launch checklist incomplete: ${k}.`);
}
if (errors.length) {
  console.error(errors.map((e) => 'ERROR: ' + e).join('\n'));
  process.exit(1);
}
console.log(
  `Validated ${pages.length} master-map pages. ${published.length} published; ${pages.length - published.length} drafts. Stage: ${launch ? 'launch' : 'draft'}.`,
);
