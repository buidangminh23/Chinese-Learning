# 汉语学堂 · Chinese Learning

A free, offline-first **PWA** for learning Chinese, covering the full **HSK 1–6** vocabulary. Pure vanilla HTML/CSS/JS — no framework, no build step.

## Key features
- Full HSK 1–6 vocabulary, grammar and common sentences
- Pronunciation coach (speech feedback)
- Flashcards, listening & writing drills, mini-games
- Installable PWA, works offline (service worker)

## Tech
Vanilla JS · PWA (`manifest.json` + `sw.js`) · Python tooling (`jieba` POS) · deployed on Vercel.

## Run
Static site — no build:
```bash
python -m http.server 8000   # then open http://localhost:8000
```
Or just open `index.html`.

Regenerate POS data: `pip install jieba && python generate_hsk_pos.py`
