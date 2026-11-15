import assert from 'node:assert/strict';
import { createSiteServer, listen, resolveSiteFile } from '../bin/serve.mjs';

assert.ok(resolveSiteFile('/').endsWith('index.html'));
assert.ok(resolveSiteFile('/words_hsk5a.js?v=5').endsWith('words_hsk5a.js'));
assert.equal(resolveSiteFile('/../package.json'), null);
assert.equal(resolveSiteFile('/bin/serve.mjs'), null);
assert.equal(resolveSiteFile('/%2e%2e/etc/passwd'), null);

const server = createSiteServer();
const port = await listen(server, 0);
try {
  for (const [route, type] of [['/', 'text/html'], ['/sw.js', 'text/javascript'], ['/manifest.json', 'application/manifest+json'], ['/words_hsk1.js?v=5', 'text/javascript']]) {
    const response = await fetch(`http://127.0.0.1:${port}${route}`);
    assert.equal(response.status, 200, route);
    assert.ok(response.headers.get('content-type').startsWith(type), route);
  }
  assert.equal((await fetch(`http://127.0.0.1:${port}/run.py`)).status, 404);
} finally {
  server.close();
}
console.log('serve tests passed');
