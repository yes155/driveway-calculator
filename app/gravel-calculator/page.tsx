import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/gravel-calculator/');
export default async function Page() {
  return renderPage('/gravel-calculator/');
}
