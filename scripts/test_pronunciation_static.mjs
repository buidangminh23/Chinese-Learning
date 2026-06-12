import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const mustInclude = [
  'function speakChinese(text, options={})',
  'function stopChineseAudio()',
  'function speakNormal(text)',
  'function speakSlow(text)',
  'data-pronounce-mode="normal"',
  'data-pronounce-mode="slow"',
  'id="listen-play-slow"',
  'pronunciation-toolbar',
  'vocab-audio-actions'
];

for (const marker of mustInclude) {
  assert.ok(html.includes(marker), `Missing expected pronunciation marker: ${marker}`);
}

const mustExclude = [
  'page-agent@latest',
  'page-agent-init.js'
];

for (const marker of mustExclude) {
  assert.ok(!html.includes(marker), `Unexpected Page Agent marker remains: ${marker}`);
}

console.log('pronunciation static checks passed');
