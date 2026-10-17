/** Stable fragment IDs shared by article headings and their navigation links. */
export function sectionId(title: string): string {
  return (
    'section-' +
    title
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  );
}
export function articleHeadings(markdown: string): { title: string; id: string }[] {
  const seen = new Set<string>();
  return [...markdown.matchAll(/^##\s+(.+?)\s*#*$/gm)].flatMap((match) => {
    const title = match[1].replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '');
    const id = sectionId(title);
    if (seen.has(id)) return [];
    seen.add(id);
    return [{ title, id }];
  });
}
