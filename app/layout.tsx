import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import { JsonLd, organization } from '@/lib/seo';
import { SITE } from '@/lib/config';
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.name,
  description: 'Driveway cost guides and material calculators.',
  robots: { index: false, follow: true },
  icons: { icon: '/icon.svg' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className="theme-projectone">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {SITE.stage === 'draft' && (
          <div className="draft-banner">
            Development preview · Prices and material defaults await verified source data.
          </div>
        )}
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organization()} />
        <Analytics />
      </body>
    </html>
  );
}
