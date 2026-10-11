import { renderPage, pageMetadata } from '@/lib/page';
export const metadata = pageMetadata('/methodology/');
export default async function Page() {
  return renderPage('/methodology/');
}
