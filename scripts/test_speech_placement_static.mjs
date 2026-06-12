import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const mustInclude = [
  'data-screen="speaking"',
  'data-screen="placement"',
  'id="screen-speaking"',
  'id="screen-placement"',
  "speaking:'🎙️ Luyện Nói'",
  "placement:'🧪 Kiểm tra trình độ'",
  'function renderSpeaking()',
  'function renderPlacement()',
  'function getSpeechRecognition()',
  'function startSpeechRecognition()',
  'function scoreSpeechOffline(target, transcript)',
  'function renderAiModePanel',
  'function callGeminiScoring(prompt)',
  'generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent',
  'x-goog-api-key',
  'data-ai-mode="offline"',
  'data-ai-mode="online"',
  'data-ai-mode="hybrid"',
  'function buildPlacementQuestions()',
  'function answerPlacementQuestion',
  'function finishPlacementTest()',
  'state.aiPractice',
  'state.placement',
  'function createDefaultState()',
  'function isPlainObject(value)',
  'function normalizeState(parsed)',
  'renderFatalStartupError(err)',
  'localStorage.removeItem'
];

for (const marker of mustInclude) {
  assert.ok(html.includes(marker), `Missing expected speech/placement marker: ${marker}`);
}

console.log('speech placement static checks passed');
