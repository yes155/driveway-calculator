export type AnalyticsEvent =
  | 'calculator_used'
  | 'result_viewed'
  | 'quote_cta_viewed'
  | 'quote_cta_clicked';
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
export function track(name: AnalyticsEvent, tool: string) {
  // An allowlist prevents form fields or URL query strings from entering analytics.
  window.gtag?.('event', name, { tool: tool.replace(/[^a-z-]/g, '') });
}
