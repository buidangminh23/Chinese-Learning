# Pronunciation Coach Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a shared Mandarin pronunciation coach to `Tu vung` and `Luyen Nghe`, while removing the Page Agent demo widget.

**Architecture:** Keep the app static and browser-only. Add one shared pronunciation layer in `index.html`, then route vocabulary, communication sentence, pinyin, and listening playback through that layer. Add a small Node static regression test that checks the expected helpers and UI hooks exist.

**Tech Stack:** Static HTML/CSS/JavaScript, browser `Audio`, browser `speechSynthesis`, Google Translate TTS URL, Node.js static test, Python static server for QA, Codex Browser plugin for rendered verification.

---

## File Structure

- Modify: `index.html`
  - Remove Page Agent demo scripts.
  - Add shared `speakChinese`, `speakNormal`, `speakSlow`, `stopChineseAudio`, and updated `speakNative` compatibility wrapper.
  - Add vocabulary normal/slow controls.
  - Add listening normal/slow replay controls.
- Modify: `sw.js`
  - Bump cache name so deployed users receive the updated HTML.
- Delete: `page-agent-init.js`
  - Remove the unused Page Agent initializer after the demo script is removed.
- Create: `scripts/test_pronunciation_static.mjs`
  - Reads `index.html`.
  - Asserts Page Agent scripts are gone.
  - Asserts pronunciation helpers and UI hooks exist.
- Modify: `docs/superpowers/plans/2026-06-12-pronunciation-coach.md`
  - Track execution progress with checkboxes.

## Task 1: Static Regression Test

**Files:**
- Create: `scripts/test_pronunciation_static.mjs`

- [x] **Step 1: Write the failing test**

Create `scripts/test_pronunciation_static.mjs`:

```js
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
```

- [x] **Step 2: Run test to verify it fails**

Run:

```powershell
node scripts/test_pronunciation_static.mjs
```

Expected: FAIL with `Missing expected pronunciation marker: function speakChinese(text, options={})`.

## Task 2: Shared Pronunciation Layer

**Files:**
- Modify: `index.html`
- Modify: `sw.js`
- Delete: `page-agent-init.js`

- [x] **Step 1: Implement the minimal shared layer**

Replace the existing audio utility block with functions named exactly:

```js
let currentNativeAudio = null;
const PRONUNCIATION_RATES = { normal: 1, slow: 0.72, verySlow: 0.58 };

function stopChineseAudio(){
 if(currentNativeAudio) { currentNativeAudio.pause(); currentNativeAudio.currentTime=0; currentNativeAudio=null; }
 if('speechSynthesis' in window) speechSynthesis.cancel();
}

function speakChinese(text, options={}){
 if(!text || text.trim()==='') return;
 const mode = options.mode || 'normal';
 const rate = options.rate || PRONUNCIATION_RATES[mode] || PRONUNCIATION_RATES.normal;
 stopChineseAudio();
 const url = "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=zh-CN&q=" + encodeURIComponent(text);
 currentNativeAudio = new Audio(url);
 currentNativeAudio.playbackRate = rate;
 currentNativeAudio.play().catch(e => { console.warn("Native audio failed, using browser voice:", e); speak(text, { rate }); });
}

function speakNormal(text){ speakChinese(text, { mode:'normal' }); }
function speakSlow(text){ speakChinese(text, { mode:'slow' }); }
function speakNative(text){ speakNormal(text); }
```

Update `speak(text)` to accept an options object and use `options.rate`.

- [x] **Step 2: Remove Page Agent scripts**

Delete these script tags from the bottom of `index.html` and delete the unused `page-agent-init.js` file:

```html
<script src="https://cdn.jsdelivr.net/npm/page-agent@latest/dist/iife/page-agent.demo.js"></script>
<script src="page-agent-init.js" defer></script>
```

- [x] **Step 3: Run static test**

Run:

```powershell
node scripts/test_pronunciation_static.mjs
```

Expected during execution: PASS after vocabulary and listening UI hooks are added in the same implementation pass.

## Task 3: Vocabulary Audio Controls

**Files:**
- Modify: `index.html`

- [x] **Step 1: Add reusable audio button markup**

Add a helper near `renderVocabList()`:

```js
function pronunciationButtons(text){
 const safeText = esc(text);
 return `<div class="vocab-audio-actions">
  <button class="audio-btn" data-pronounce-mode="normal" onclick="event.stopPropagation();speakNormal('${safeText}')" title="Nghe chuẩn">🔊</button>
  <button class="audio-btn slow" data-pronounce-mode="slow" onclick="event.stopPropagation();speakSlow('${safeText}')" title="Nghe chậm">🐢</button>
 </div>`;
}
```

- [x] **Step 2: Replace vocabulary card speaker icons**

In vocabulary word cards and communication sentence cards, replace single `v-speak` controls with:

```js
${pronunciationButtons(w.hz)}
```

or:

```js
${pronunciationButtons(s.hz)}
```

For paired Q/A cards, use `q2.hz` and `a.hz`.

- [x] **Step 3: Add CSS for compact controls**

Add CSS near existing vocabulary styles:

```css
.vocab-audio-actions{display:flex;gap:6px;align-items:center;flex-shrink:0}
.audio-btn{width:34px;height:34px;border-radius:8px;border:1px solid var(--bg3);background:var(--card2);color:var(--text);cursor:pointer;font-size:15px;display:inline-flex;align-items:center;justify-content:center;transition:.2s}
.audio-btn:hover{border-color:var(--green);transform:translateY(-1px)}
.audio-btn.slow{color:var(--yellow)}
```

## Task 4: Listening Practice Controls

**Files:**
- Modify: `index.html`

- [x] **Step 1: Add a pronunciation toolbar to `renderListening()`**

Replace the listening replay area with:

```html
<div class="pronunciation-toolbar">
 <button class="listen-btn-big" id="listen-play">🔊</button>
 <button class="listen-btn-big slow" id="listen-play-slow">🐢</button>
</div>
<p style="color:var(--text3);font-size:13px;margin-top:12px">Nghe chuẩn hoặc nghe chậm</p>
```

- [x] **Step 2: Wire normal and slow replay**

Set listeners:

```js
document.getElementById('listen-play').addEventListener('click',()=>speakNormal(word.hz));
document.getElementById('listen-play-slow').addEventListener('click',()=>speakSlow(word.hz));
```

- [x] **Step 3: Add toolbar CSS**

```css
.pronunciation-toolbar{display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap}
.listen-btn-big.slow{background:linear-gradient(135deg,var(--yellow),#ff9f1c);box-shadow:0 8px 30px rgba(255,215,0,.28)}
```

## Task 5: Verify, Commit, And Push

**Files:**
- Verify: all changed files

- [x] **Step 1: Run static test**

Run:

```powershell
node scripts/test_pronunciation_static.mjs
```

Expected: `pronunciation static checks passed`.

- [x] **Step 2: Run syntax checks**

Run:

```powershell
Get-ChildItem -Filter *.js | ForEach-Object { node --check $_.FullName }
python -m py_compile auto_deploy.py fallback_pos_hsk3.py generate_hsk_pos.py jieba_hsk_pos.py run.py
```

Expected: exit code 0.

- [x] **Step 3: Start local server**

Run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Expected: app available at `http://127.0.0.1:4173/index.html`.

- [x] **Step 4: Browser QA**

Flow under test: `index.html -> Tu vung/Luyen Nghe -> normal and slow pronunciation controls render and respond without runtime errors`.

Use the Codex Browser plugin to verify:

- title is `汉语学堂 - Học Tiếng Trung`
- Page Agent widget text is absent
- `Tu vung` renders `.vocab-audio-actions`
- communication sentence search still returns results
- normal and slow pronunciation buttons are clickable
- `Luyen Nghe` renders `#listen-play` and `#listen-play-slow`
- console has no relevant errors

- [ ] **Step 5: Commit**

```powershell
git add index.html scripts/test_pronunciation_static.mjs docs/superpowers/plans/2026-06-12-pronunciation-coach.md
git commit -m "Add pronunciation coach"
```

- [ ] **Step 6: Push**

```powershell
git push origin main
```

Expected: `main -> main`.
