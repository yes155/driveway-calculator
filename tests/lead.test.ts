import { expect, it } from 'vitest';
import { onRequestPost, onRequestGet, type Env } from '@/functions/api/lead';
const context = (env: Partial<Env>, request: Request) => ({ env: env as Env, request });
it('rejects lead requests before parsing or storing personal data while disabled', async () => {
  const response = await onRequestPost(
    context(
      {},
      new Request('https://drivewaycalc.online/api/lead', { method: 'POST', body: 'not-json' }),
    ),
  );
  expect(response.status).toBe(503);
});
it('does not expose consent or contact fields while disabled', async () => {
  const response = await onRequestGet(
    context({}, new Request('https://drivewaycalc.online/api/lead')),
  );
  expect(response.status).toBe(503);
  expect(await response.text()).not.toContain('consent');
});
it('remains off with an enabled flag but no approved network configuration', async () => {
  const response = await onRequestPost(
    context(
      { LEADS_ENABLED: 'true' },
      new Request('https://drivewaycalc.online/api/lead', { method: 'POST' }),
    ),
  );
  expect(response.status).toBe(503);
});
