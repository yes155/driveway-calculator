import { z } from 'zod';
import type { D1Database } from '@cloudflare/workers-types';
export type Env = {
  DB: D1Database;
  LEADS_ENABLED?: string;
  NETWORK_APPROVED?: string;
  ALLOWED_ORIGIN?: string;
  NETWORK_CONSENT_TEXT?: string;
  NETWORK_SUCCESS_TEXT?: string;
  NETWORK_WEBHOOK_URL?: string;
  NETWORK_WEBHOOK_TOKEN?: string;
  NETWORK_PHONE?: string;
  NETWORK_PHONE_REQUIRED?: string;
  TURNSTILE_SITE_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  RATE_LIMIT_SALT?: string;
};
const leadSchema = z.object({
  zip: z.string().regex(/^\d{5}$/),
  project: z.enum(['new', 'replace', 'resurface', 'repair', 'seal']),
  surface: z.enum(['asphalt', 'concrete', 'gravel', 'pavers', 'not-sure']),
  area: z.number().positive().max(1e8),
  timeline: z.enum(['within-1-month', '1-to-3-months', 'researching']),
  firstName: z.string().trim().min(1).max(100),
  email: z.email().max(254),
  phone: z.string().max(40).optional().default(''),
  consent: z.literal(true),
  website: z.string().max(1000).optional().default(''),
  token: z.string().min(1).max(2048),
  idempotencyKey: z.uuid(),
  pageUrl: z.url().max(2048),
});
function configured(env: Env) {
  return (
    env.LEADS_ENABLED === 'true' &&
    env.NETWORK_APPROVED === 'true' &&
    env.DB &&
    !!env.ALLOWED_ORIGIN &&
    !!env.NETWORK_CONSENT_TEXT &&
    !!env.NETWORK_SUCCESS_TEXT &&
    !!env.NETWORK_WEBHOOK_URL?.startsWith('https://') &&
    !!env.TURNSTILE_SITE_KEY &&
    !!env.TURNSTILE_SECRET_KEY &&
    !!env.RATE_LIMIT_SALT
  );
}
const respond = (data: unknown, status: number) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
async function hash(text: string) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(bytes), (b) => b.toString(16).padStart(2, '0')).join('');
}
type Context = { env: Env; request: Request };
export const onRequestGet = async ({ env }: Context) =>
  configured(env)
    ? respond(
        {
          consent: env.NETWORK_CONSENT_TEXT,
          success: env.NETWORK_SUCCESS_TEXT,
          phone: env.NETWORK_PHONE ?? '',
          phoneRequired: env.NETWORK_PHONE_REQUIRED === 'true',
          turnstileSiteKey: env.TURNSTILE_SITE_KEY,
        },
        200,
      )
    : respond({ error: 'Quote requests are disabled.' }, 503);
export const onRequestPost = async ({ request, env }: Context) => {
  if (!configured(env)) return respond({ error: 'Quote requests are disabled.' }, 503);
  if (request.headers.get('Origin') !== env.ALLOWED_ORIGIN)
    return respond({ error: 'Invalid request origin.' }, 403);
  if (!request.headers.get('Content-Type')?.startsWith('application/json'))
    return respond({ error: 'Use JSON.' }, 415);
  const bytes = Number(request.headers.get('Content-Length') ?? 0);
  if (bytes > 16384) return respond({ error: 'Request too large.' }, 413);
  const text = await request.text();
  if (text.length > 16384) return respond({ error: 'Request too large.' }, 413);
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return respond({ error: 'Invalid request.' }, 400);
  }
  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) return respond({ error: 'Check the required fields.' }, 400);
  const lead = parsed.data;
  if (lead.website) return respond({ error: 'Invalid request.' }, 400);
  if (new URL(lead.pageUrl).origin !== env.ALLOWED_ORIGIN)
    return respond({ error: 'Invalid page URL.' }, 400);
  if (env.NETWORK_PHONE_REQUIRED === 'true' && !/^\+?[\d ()-]{7,30}$/.test(lead.phone))
    return respond({ error: 'Enter a phone number.' }, 400);
  const pageUrl = new URL(lead.pageUrl);
  pageUrl.search = '';
  pageUrl.hash = '';
  try {
    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
    const ipHash = await hash(env.RATE_LIMIT_SALT! + ip);
    const window = Math.floor(Date.now() / 3600000);
    const rate = await env.DB.prepare(
      'INSERT INTO rate_limits (ip_hash, window, count) VALUES (?, ?, 1) ON CONFLICT (ip_hash, window) DO UPDATE SET count = count + 1 RETURNING count',
    )
      .bind(ipHash, window)
      .first<{ count: number }>();
    if (!rate || rate.count > 5) return respond({ error: 'Too many requests.' }, 429);
    const fields = {
      zip: lead.zip,
      project: lead.project,
      surface: lead.surface,
      area: lead.area,
      timeline: lead.timeline,
      firstName: lead.firstName,
      email: lead.email,
      phone: lead.phone,
    };
    const payloadHash = await hash(JSON.stringify({ ...fields, pageUrl: pageUrl.toString() }));
    const existing = await env.DB.prepare('SELECT id, payload_hash, status FROM leads WHERE id = ?')
      .bind(lead.idempotencyKey)
      .first<{ id: string; payload_hash: string; status: string }>();
    if (existing) {
      if (existing.payload_hash !== payloadHash)
        return respond({ error: 'Request identifier conflict.' }, 409);
      return respond(
        { accepted: true, status: existing.status },
        existing.status === 'forwarded' ? 200 : 202,
      );
    }
    const turnstile = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY!,
        response: lead.token,
        remoteip: ip,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const verification = (await turnstile.json()) as {
      success?: boolean;
      hostname?: string;
      action?: string;
    };
    if (
      !verification.success ||
      verification.hostname !== new URL(env.ALLOWED_ORIGIN!).hostname ||
      verification.action !== 'quote'
    )
      return respond({ error: 'Complete the verification.' }, 400);
    const now = new Date().toISOString();
    const inserted = await env.DB.prepare(
      "INSERT INTO leads (id, created_at, payload, payload_hash, page_url, consent_text, consent_at, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'pending') ON CONFLICT(id) DO NOTHING",
    )
      .bind(
        lead.idempotencyKey,
        now,
        JSON.stringify(fields),
        payloadHash,
        pageUrl.toString(),
        env.NETWORK_CONSENT_TEXT,
        now,
      )
      .run();
    if (!inserted.meta.changes) {
      const concurrent = await env.DB.prepare('SELECT payload_hash, status FROM leads WHERE id = ?')
        .bind(lead.idempotencyKey)
        .first<{ payload_hash: string; status: string }>();
      if (!concurrent || concurrent.payload_hash !== payloadHash)
        return respond({ error: 'Request identifier conflict.' }, 409);
      return respond({ accepted: true, status: concurrent.status }, 202);
    }
    let forwarded = false;
    let attempts = 0;
    for (let attempt = 0; attempt < 3; attempt++) {
      attempts++;
      try {
        const res = await fetch(env.NETWORK_WEBHOOK_URL!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': lead.idempotencyKey,
            ...(env.NETWORK_WEBHOOK_TOKEN
              ? { Authorization: 'Bearer ' + env.NETWORK_WEBHOOK_TOKEN }
              : {}),
          },
          body: JSON.stringify({
            id: lead.idempotencyKey,
            timestamp: now,
            ...fields,
            pageUrl: pageUrl.toString(),
            consentText: env.NETWORK_CONSENT_TEXT,
            consentTimestamp: now,
          }),
          signal: AbortSignal.timeout(10000),
        });
        if (res.ok) {
          forwarded = true;
          break;
        }
      } catch {
        /* Retry without logging visitor data. */
      }
    }
    await env.DB.prepare('UPDATE leads SET status = ?, attempts = attempts + ? WHERE id = ?')
      .bind(forwarded ? 'forwarded' : 'failed', attempts, lead.idempotencyKey)
      .run();
    await env.DB.prepare('DELETE FROM rate_limits WHERE window < ?')
      .bind(window - 24)
      .run();
    return respond(
      { accepted: true, status: forwarded ? 'forwarded' : 'queued' },
      forwarded ? 200 : 202,
    );
  } catch {
    return respond({ error: 'Quote requests are temporarily unavailable.' }, 503);
  }
};
