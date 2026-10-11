import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/rock-calculator/');
export default async function Page() {
  return renderPage('/rock-calculator/');
}
