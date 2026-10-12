import fs from 'node:fs';
import { pages, getContent } from '../lib/content';
import sources from '../data/sources.json';
import register from '../data/research/register.json';
const normalize = (v: string) => v.toLowerCase().replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
const errors: string[] = [],
  coverage: unknown[] = [];
const sourceIds = new Set(sources.map((s) => s.id));
for (const o of register.observations)
  if (!sourceIds.has(o.sourceId)) errors.push('Unknown observation source ' + o.sourceId);
for (const p of pages) {
  const { data, content } = getContent(p.url);
  if (!data.contentReady) continue;
  const body = normalize(data.answer + ' ' + content);
  const report = data.keywordVariants ?? [];
  for (const kw of [p.primary, ...p.keywords].filter(Boolean)) {
    const count = body.split(normalize(kw)).length - 1;
    const variant = report.find(
      (v: { keyword?: string; variant?: string }) =>
        typeof v === 'object' &&
        v.keyword === kw &&
        v.variant &&
        body.includes(normalize(v.variant)),
    );
    if (!count && !variant)
      errors.push(`${p.url}: keyword/declared grammatical variant missing: ${kw}`);
    coverage.push({
      seq: p.seq,
      url: p.url,
      keyword: kw,
      exactOccurrences: count,
      variant: variant ?? null,
      status: count ? 'exact' : 'variant',
    });
  }
  for (const source of data.sourceIds ?? [])
    if (!sourceIds.has(source)) errors.push(`${p.url}: unresolved source ${source}`);
  if (/\{\{DATA:/.test(content)) errors.push('Visible draft has unresolved placeholders ' + p.url);
  for (const heading of content.matchAll(/^#{2,3}\s+(.+)$/gm))
    if (!heading[1].endsWith('?')) errors.push('Non-question article heading ' + p.url);
  // Section 11 questions containing will/should take precedence over the earlier blanket wording rule.
  const prose = content.replace(/^#{2,3} .+$/gm, '');
  if (/\b(will|should|might|could|may|probably)\b|appears to|can help/i.test(prose))
    errors.push('Hedged factual prose ' + p.url);
}
fs.writeFileSync('data/research/keyword-coverage.json', JSON.stringify(coverage, null, 2) + '\n');
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(
  `Verified source references and ${coverage.length} keyword/declared variant placements. Human review of overlapping phrase counts remains pending.`,
);
