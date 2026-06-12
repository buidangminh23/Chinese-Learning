import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const sw = readFileSync(new URL('../sw.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const mustInclude = [
  "const CACHE_NAME = 'hanzhi-v11'",
  "e.request.mode === 'navigate'",
  'fetch(e.request).then(resp => {',
  "cache.put('./index.html', clone)",
  "caches.match('./index.html')",
  "new Response(",
  'Promise.allSettled',
  "e.request.url.includes('translate.googleapis.com')"
];

for (const marker of mustInclude) {
  assert.ok(sw.includes(marker), `Missing expected service worker marker: ${marker}`);
}

const htmlMarkers = [
  "const SW_VERSION='hanzhi-v11'",
  "navigator.serviceWorker.register(`sw.js?v=${SW_VERSION}`)",
  'registration.update()',
  "navigator.serviceWorker.addEventListener('controllerchange'"
];

for (const marker of htmlMarkers) {
  assert.ok(html.includes(marker), `Missing expected service worker registration marker: ${marker}`);
}

console.log('service worker static checks passed');
