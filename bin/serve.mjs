#!/usr/bin/env node
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/manifest+json; charset=utf-8',
};
const SITE_FILES = new Set(['index.html', 'manifest.json', 'sw.js', 'comm_sentences.js', 'grammar_data.js']);
const DEFAULT_PORT = 8000;
const MAX_PORT_TRIES = 20;

export function resolveSiteFile(urlPath) {
  const name = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '') || 'index.html';
  if (SITE_FILES.has(name) || /^words_hsk[0-9][ab]?\.js$/.test(name)) return path.join(ROOT, name);
  return null;
}

export function createSiteServer() {
  return createServer(async (req, res) => {
    const file = resolveSiteFile(req.url ?? '/');
    if (!file || (req.method !== 'GET' && req.method !== 'HEAD')) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Not found');
      return;
    }
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream', 'cache-control': 'no-cache' });
      res.end(req.method === 'HEAD' ? undefined : body);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Not found');
    }
  });
}

export function listen(server, port, triesLeft = MAX_PORT_TRIES) {
  return new Promise((resolve, reject) => {
    server.once('error', (error) => {
      if (error.code === 'EADDRINUSE' && triesLeft > 1) resolve(listen(server, port + 1, triesLeft - 1));
      else reject(error);
    });
    server.listen(port, '127.0.0.1', () => resolve(server.address().port));
  });
}

function openBrowser(url) {
  const [command, args] = process.platform === 'win32'
    ? ['cmd', ['/c', 'start', '', url]]
    : [process.platform === 'darwin' ? 'open' : 'xdg-open', [url]];
  spawn(command, args, { stdio: 'ignore', detached: true }).on('error', () => {}).unref();
}

async function main(argv) {
  const portIndex = argv.indexOf('--port');
  const port = portIndex !== -1 ? Number(argv[portIndex + 1]) : DEFAULT_PORT;
  if (!Number.isInteger(port) || port < 0 || port > 65535) throw new Error('--port needs a number between 0 and 65535');
  const actual = await listen(createSiteServer(), port);
  const url = `http://localhost:${actual}/`;
  console.log(`汉语学堂 · Chinese Learning is running at ${url}`);
  console.log('Press Ctrl+C to stop.');
  if (!argv.includes('--no-open')) openBrowser(url);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch((error) => {
    console.error(`Chinese Learning: ${error.message}`);
    process.exit(1);
  });
}
