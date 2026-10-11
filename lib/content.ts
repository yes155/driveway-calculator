import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import rawPages from '@/data/pages.json';
export type PageRecord = {
  order: number;
  seq: number;
  url: string;
  section: string;
  type: string;
  phase: string;
  primary: string;
  primaryVolume: number | null;
  primaryKd: number | null;
  primaryCpc: number | null;
  keywords: string[];
  title: string;
  h1: string;
  description: string;
  status: string;
  updated: string;
  author: string;
  entities: string[];
  related: { slug: string; annotation: string }[];
  imageAlt?: string;
};
export const pages: PageRecord[] = rawPages;
export function getPage(url: string) {
  const page = pages.find((p) => p.url === url);
  if (!page) throw new Error('Unknown page: ' + url);
  return page;
}
export function getContent(url: string) {
  const slug = url.replaceAll('/', '') || 'home';
  const file = path.join(process.cwd(), 'content', slug + '.mdx');
  const parsed = matter(fs.readFileSync(file, 'utf8'));
  return { ...parsed, file };
}
export function isPublic(url: string) {
  return process.env.SITE_STAGE === 'launch' && getContent(url).data.status === 'published';
}
export const trustPages = [
  { url: '/about/', title: 'About', description: 'About the site and its editorial scope.' },
  {
    url: '/author/farrukh-abdullah/',
    title: 'Farrukh Abdullah',
    description: 'Farrukh Abdullah, researcher and writer.',
  },
  {
    url: '/privacy/',
    title: 'Privacy Policy',
    description: 'How information is handled on this site.',
  },
  {
    url: '/terms/',
    title: 'Terms of Use',
    description: 'Terms for using the calculators and estimates.',
  },
  {
    url: '/disclosure/',
    title: 'Disclosure',
    description: 'Advertising, affiliate, and quote-request disclosures.',
  },
  { url: '/contact/', title: 'Contact', description: 'Contact the site editor.' },
];
