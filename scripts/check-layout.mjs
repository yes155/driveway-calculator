// Runs in GitHub CI with its existing Chrome installation, against the draft export.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { pages } from '../lib/content.ts';
import { toolFor } from '../lib/calc/ui.ts';

const directory = path.resolve('out');
const screenshots = path.resolve('.layout-checks');
fs.mkdirSync(screenshots, { recursive: true });
const chrome = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/opt/google/chrome/chrome',
].find((p) => p && fs.existsSync(p));
assert(chrome, 'Use the CI Chrome installation; no browser is downloaded by this check.');
const server = http.createServer((req, res) => {
  let name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (name.endsWith('/')) name += 'index.html';
  const file = path.resolve(directory, '.' + name);
  if (
    !file.startsWith(directory + path.sep) ||
    !fs.existsSync(file) ||
    !fs.statSync(file).isFile()
  ) {
    res.writeHead(404).end();
    return;
  }
  const mime = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
  }[path.extname(file)];
  res.setHeader('Content-Type', mime ?? 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
const observations = [],
  failures = [];
try {
  browser = await puppeteer.launch({
    executablePath: chrome,
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  const tab = await browser.newPage();
  const toolPages = pages.filter((p) => toolFor(p.seq));
  for (const viewport of [
    { width: 1280, height: 600 },
    { width: 1366, height: 620 },
    { width: 390, height: 844 },
    { width: 360, height: 740 },
  ]) {
    await tab.setViewport(viewport);
    for (const page of [pages.find((p) => p.url === '/'), ...toolPages]) {
      await tab.goto(origin + page.url, { waitUntil: 'load' });
      await tab.evaluate(
        () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))),
      );
      const quick = [3, 5, 49].includes(page.seq);
      const selectors =
        page.url === '/'
          ? ['h1', '.hero-area-fields input', '.hero-area-result', '.hero-area-next a']
          : quick
            ? ['h1', '.guide-quick-fields input', '.guide-quick-result', '.guide-quick-footer a']
            : [
                'h1',
                '.calculator-fields input[type="number"]',
                '.form-actions button[type="submit"]',
                '.calculator-output .result-card',
              ];
      const checks = await tab.evaluate(
        (selectors) =>
          selectors.map((selector) => {
            const element = document.querySelector(selector),
              rect = element?.getBoundingClientRect();
            return {
              selector,
              top: rect?.top,
              bottom: rect?.bottom,
              visible:
                !!rect &&
                rect.width > 0 &&
                rect.height > 0 &&
                rect.top >= 0 &&
                rect.bottom <= innerHeight,
            };
          }),
        selectors,
      );
      const overflow = await tab.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      );
      const record = { page: page.url, viewport, checks, overflow };
      observations.push(record);
      if (overflow || checks.some((check) => !check.visible)) {
        failures.push(record);
        console.log('Placement failure:', JSON.stringify(record));
      }
      if (
        [
          '/',
          '/asphalt-driveway-cost-calculator/',
          '/paver-calculator/',
          '/asphalt-driveway-cost/',
        ].includes(page.url)
      ) {
        await tab.screenshot({
          path: path.join(screenshots, `${page.seq}-${viewport.width}x${viewport.height}.png`),
        });
      }
    }
    fs.writeFileSync(
      path.join(screenshots, 'placement.json'),
      JSON.stringify({ observations, failures }, null, 2),
    );
    console.log(
      `Checked ${viewport.width}×${viewport.height}; ${failures.length} placement failures so far.`,
    );
  }
  // Exercise the changed submission path and confirm the visible cost result.
  await tab.setViewport({ width: 1280, height: 600 });
  await tab.goto(origin + '/asphalt-driveway-cost-calculator/', { waitUntil: 'networkidle0' });
  await tab.type('input[name="section-0-length"]', '20');
  await tab.type('input[name="section-0-width"]', '20');
  await tab.click('.form-actions button[type="submit"]');
  await tab.waitForFunction(() =>
    document.querySelector('.primary-metric')?.textContent.includes('$2,800–$5,200'),
  );
  assert(
    await tab.$eval('.primary-metric', (el) => el.getBoundingClientRect().bottom <= innerHeight),
    'The calculated installed-cost range remains above the fold.',
  );
  await tab.screenshot({ path: path.join(screenshots, 'cost-calculated-1280x600.png') });
  // Required fields inside a collapsed settings panel must reopen on validation.
  await tab.click('.form-actions button[type="button"]');
  await tab.type('input[name="section-0-length"]', '20');
  await tab.type('input[name="section-0-width"]', '20');
  await tab.click('.cost-settings > summary');
  const custom = await tab.$('.cost-settings input[type="checkbox"]');
  await custom.click();
  await tab.click('.cost-settings > summary');
  await tab.click('.form-actions button[type="submit"]');
  assert(
    await tab.$eval('.cost-settings', (el) => el.open),
    'Validation opens required quoted-rate inputs.',
  );
  fs.writeFileSync(
    path.join(screenshots, 'placement.json'),
    JSON.stringify(
      { observations, failures, costInteraction: 'passed', hiddenRequiredValidation: 'passed' },
      null,
      2,
    ),
  );
  assert.equal(failures.length, 0, JSON.stringify(failures, null, 2));
  console.log(
    `Verified ${observations.length} page/viewport placements, cost submission and collapsed-required-field validation.`,
  );
} finally {
  fs.writeFileSync(
    path.join(screenshots, 'placement.json'),
    JSON.stringify({ observations, failures }, null, 2),
  );
  await browser?.close();
  await new Promise((resolve) => server.close(resolve));
}
