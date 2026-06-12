import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const sw = readFileSync(new URL('../sw.js', import.meta.url), 'utf8');

const mustInclude = [
  "const CACHE_NAME = 'hanzhi-v10'",
  "e.request.mode === 'navigate'",
  'fetch(e.request).then(resp => {',
  "cache.put('./index.html', clone)",
  "caches.match('./index.html')",
  "e.request.url.includes('translate.googleapis.com')"
];

for (const marker of mustInclude) {
  assert.ok(sw.includes(marker), `Missing expected service worker marker: ${marker}`);
}

console.log('service worker static checks passed');
