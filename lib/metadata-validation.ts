export type SourceMetadata = {
  seq: number;
  url: string;
  title: string;
  h1: string;
  description: string;
};
export function validateMetadata(
  actual: SourceMetadata,
  expected: SourceMetadata | undefined,
  frontmatter: Record<string, unknown>,
): string[] {
  const issues: string[] = [];
  if (!expected || expected.seq !== actual.seq) return ['Missing source metadata record.'];
  for (const field of ['title', 'h1', 'description'] as const) {
    if (actual[field] !== expected[field])
      issues.push(`${field} differs from the source document.`);
  }
  for (const field of ['title', 'description'] as const) {
    if (frontmatter[field] !== actual[field])
      issues.push(`MDX ${field} differs from the page map.`);
  }
  if (/^\d+$/.test(actual.description.trim()) || actual.description.trim().length < 30)
    issues.push('Description is a sequence number or incomplete text.');
  if (actual.h1.length > 85 || /\.\s+[A-Z]/.test(actual.h1))
    issues.push('H1 contains a paragraph rather than a page heading.');
  if (actual.title.includes('{{') || actual.description.includes('{{'))
    issues.push('Metadata contains unresolved price placeholders.');
  return issues;
}
