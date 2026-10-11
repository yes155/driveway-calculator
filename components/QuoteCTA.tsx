'use client';
import { useEffect, useState, useRef, type FormEvent } from 'react';
import Link from 'next/link';
import { FLAGS } from '@/lib/config';
import { track } from '@/lib/analytics';
type Config = {
  consent: string;
  success: string;
  phone: string;
  phoneRequired: boolean;
  turnstileSiteKey: string;
};
declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
    onDrivewayTurnstile?: () => void;
  }
}
export default function QuoteCTA({
  area,
  surface,
  slug,
}: {
  area?: number;
  surface: string;
  slug: string;
}) {
  const requestId = useRef<string | null>(null);
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState<Config | null>(null);
  const [token, setToken] = useState('');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (!FLAGS.leads || !open) return;
    let active = true;
    fetch('/api/lead')
      .then((r) => (r.ok ? r.json() : null))
      .then((c) => {
        if (active) setConfig(c);
      })
      .catch(() => setStatus('Quote requests are unavailable.'));
    return () => {
      active = false;
    };
  }, [open]);
  useEffect(() => {
    if (!config || !open) return;
    let widget: string | undefined;
    let removed = false;
    const init = () => {
      const el = document.getElementById('quote-turnstile');
      if (el && !removed && window.turnstile)
        widget = window.turnstile.render(el, {
          sitekey: config.turnstileSiteKey,
          action: 'quote',
          callback: (t: string) => setToken(t),
          'expired-callback': () => setToken(''),
        });
    };
    if (window.turnstile) init();
    else {
      window.onDrivewayTurnstile = init;
      const script = document.createElement('script');
      script.src =
        'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onDrivewayTurnstile&render=explicit';
      script.async = true;
      document.head.appendChild(script);
    }
    return () => {
      removed = true;
      if (widget) window.turnstile?.remove(widget);
    };
  }, [config, open]);
  if (!FLAGS.leads) return null;
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy || !config) return;
    const form = e.currentTarget;
    setBusy(true);
    setStatus('');
    try {
      const fields = Object.fromEntries(new FormData(form));
      requestId.current ??= crypto.randomUUID();
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          area: Number(fields.area),
          consent: fields.consent === 'on',
          token,
          idempotencyKey: requestId.current,
          pageUrl: location.origin + location.pathname,
        }),
      });
      if (!res.ok)
        throw new Error(
          res.status === 429
            ? 'Too many requests. Try again later.'
            : 'The request was not accepted. Check the fields and try again.',
        );
      setStatus(config.success);
      setOpen(false);
    } catch (e) {
      setStatus(e instanceof Error ? e.message : 'Request failed.');
    } finally {
      setBusy(false);
    }
  }
  return (
    <aside className="quote-cta">
      <h3>Get free driveway quotes</h3>
      <p>Share your project details with the approved quote network.</p>
      <button
        className="button primary"
        onClick={() => {
          setOpen(!open);
          track('quote_cta_viewed', slug);
          track('quote_cta_clicked', slug);
        }}
      >
        {open ? 'Close form' : 'Request quotes'}
      </button>
      {open && config && (
        <form onSubmit={submit} className="quote-form">
          <div className="field-grid">
            <label className="field">
              <span>ZIP code</span>
              <input name="zip" required pattern="[0-9]{5}" inputMode="numeric" maxLength={5} />
            </label>
            <label className="field">
              <span>Project type</span>
              <select name="project">
                <option value="new">New</option>
                <option value="replace">Replace</option>
                <option value="resurface">Resurface</option>
                <option value="repair">Repair</option>
                <option value="seal">Seal</option>
              </select>
            </label>
            <label className="field">
              <span>Surface</span>
              <select
                name="surface"
                defaultValue={
                  ['asphalt', 'concrete', 'gravel', 'pavers'].includes(surface)
                    ? surface
                    : 'not-sure'
                }
              >
                {['asphalt', 'concrete', 'gravel', 'pavers', 'not-sure'].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Approximate size (ft²)</span>
              <input name="area" type="number" step="any" required min="0.01" defaultValue={area} />
            </label>
            <label className="field">
              <span>Timeline</span>
              <select name="timeline">
                <option value="within-1-month">Within 1 month</option>
                <option value="1-to-3-months">1 to 3 months</option>
                <option value="researching">Researching</option>
              </select>
            </label>
            <label className="field">
              <span>First name</span>
              <input name="firstName" required maxLength={100} />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" required />
            </label>
            <label className="field">
              <span>Phone{config.phoneRequired ? '' : ' (optional)'}</span>
              <input name="phone" type="tel" required={config.phoneRequired} />
            </label>
          </div>
          <label className="honeypot" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <label className="check">
            <input name="consent" type="checkbox" required />
            {config.consent}
          </label>
          <div id="quote-turnstile" />
          <p>
            <Link href="/privacy/">Privacy policy</Link>
          </p>
          <button className="button primary" disabled={busy || !token}>
            {busy ? 'Sending…' : 'Submit request'}
          </button>
        </form>
      )}
      {status && <p role="status">{status}</p>}
      {config?.phone && (
        <a className="mobile-call" href={'tel:' + config.phone}>
          Call for quotes
        </a>
      )}
      <p className="disclosure">
        Driveway Calculators receives payment for accepted quote requests.
      </p>
    </aside>
  );
}
