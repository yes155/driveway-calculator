import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/config';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return SITE.stage === 'launch'
    ? {
        rules: { userAgent: '*', allow: '/', disallow: '/api/' },
        sitemap: SITE.url + '/sitemap.xml',
      }
    : { rules: { userAgent: '*', disallow: '/' } };
}
