import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/concrete-calculator/');
export default async function Page() {
  return renderPage('/concrete-calculator/');
}
