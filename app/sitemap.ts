import type { MetadataRoute } from 'next';
import { pages, getContent, isPublic } from '@/lib/content';
import { SITE } from '@/lib/config';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return pages
    .filter((p) => isPublic(p.url))
    .map((p) => ({ url: SITE.url + p.url, lastModified: getContent(p.url).data.updated }));
}
