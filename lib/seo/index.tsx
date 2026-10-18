import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import type { PageRecord } from '@/lib/content';
import profile from '@/data/author-profile.json';
export function authorPerson() {
  return {
    '@type': 'Person',
    '@id': SITE.url + '/author/farrukh-abdullah/#person',
    name: profile.name,
    url: SITE.url + '/author/farrukh-abdullah/',
    description: profile.description,
    jobTitle: profile.role,
    sameAs: [profile.website, profile.linkedin],
    email: profile.email,
  };
}
export function authorProfileSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: SITE.url + '/author/farrukh-abdullah/',
    dateModified: profile.updatedOn,
    mainEntity: authorPerson(),
  };
}
export function metadataFor(
  page: Pick<PageRecord, 'title' | 'description' | 'url'>,
  published = false,
): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: SITE.url + page.url },
    robots: published ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url: SITE.url + page.url,
      siteName: SITE.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: { card: 'summary', title: page.title, description: page.description },
  };
}
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': SITE.url + '/#organization',
    name: SITE.name,
    url: SITE.url,
  };
}
export function breadcrumbs(page: Pick<PageRecord, 'h1' | 'url'>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: SITE.name, item: SITE.url + '/' },
      ...(page.url === '/'
        ? []
        : [{ '@type': 'ListItem', position: 2, name: page.h1, item: SITE.url + page.url }]),
    ],
  };
}
export function pageSchema(page: PageRecord) {
  const common = {
    '@context': 'https://schema.org',
    name: page.h1,
    url: SITE.url + page.url,
    description: page.description,
  };
  if (/tool|estimator|Converter/i.test(page.type))
    return {
      ...common,
      '@type': 'WebApplication',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    };
  return {
    ...common,
    '@type': 'Article',
    headline: page.h1,
    dateModified: page.updated,
    author: {
      '@type': 'Person',
      ...(page.author === profile.name
        ? { '@id': SITE.url + '/author/farrukh-abdullah/#person' }
        : {}),
      name: page.author,
      url: SITE.url + '/author/farrukh-abdullah/',
    },
    publisher: { '@id': SITE.url + '/#organization' },
  };
}
