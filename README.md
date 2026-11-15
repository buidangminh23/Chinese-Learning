# 汉语学堂 · Chinese Learning

<p align="center"><a href="https://www.npmjs.com/package/@minhspark/chinese-learning"><img src="https://img.shields.io/npm/v/@minhspark/chinese-learning?logo=npm&amp;color=CB3837" height="20" alt="npm" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/buidangminh23/Chinese-Learning" height="20" alt="license" /></a></p>

A free, offline-first **PWA** for learning Chinese, covering the full **HSK 1–6** vocabulary. Pure vanilla HTML/CSS/JS — no framework, no build step.

## Key features
- Full HSK 1–6 vocabulary, grammar and common sentences
- Pronunciation coach (speech feedback)
- Flashcards, listening & writing drills, mini-games
- Installable PWA, works offline (service worker)

## Tech
Vanilla JS · PWA (`manifest.json` + `sw.js`) · Python tooling (`jieba` POS) · deployed on Vercel.

## Run
With Node.js 18+, run it on your own computer (it opens your browser):
```bash
npx @minhspark/chinese-learning
```
Add `--port <n>` to pick a port or `--no-open` to skip opening the browser.

Or serve the folder as a static site — no build:
```bash
python -m http.server 8000   # then open http://localhost:8000
```
Or just open `index.html`.

Regenerate POS data: `pip install jieba && python generate_hsk_pos.py`
