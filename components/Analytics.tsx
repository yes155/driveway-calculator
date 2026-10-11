'use client';
import { useEffect } from 'react';
export default function Analytics() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA4_ID;
    if (!id || !/^G-[A-Z0-9]+$/.test(id)) return;
    const load = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => window.dataLayer!.push(args);
      window.gtag('js', new Date());
      window.gtag('config', id, { send_page_view: false });
      window.gtag('event', 'page_view', {
        page_location: location.origin + location.pathname,
        page_path: location.pathname,
      });
      const s = document.createElement('script');
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
      s.async = true;
      document.head.appendChild(s);
    };
    window.addEventListener('pointerdown', load, { once: true });
    return () => window.removeEventListener('pointerdown', load);
  }, []);
  return null;
}
