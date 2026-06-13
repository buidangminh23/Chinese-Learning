<div align="center">

# 汉语学堂 · Chinese Learning

### A free, offline-first Progressive Web App for learning Chinese (HSK 1–6)

[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-No_Framework-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![HSK](https://img.shields.io/badge/HSK-1→6-E53935?style=for-the-badge)](https://en.wikipedia.org/wiki/Hanyu_Shuiping_Kaoshi)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-43A047?style=for-the-badge)](#-license)

</div>

---

## 📖 Overview

**汉语学堂 (Chinese Learning)** is a self-contained Progressive Web App for studying Mandarin Chinese, covering the full **HSK 1–6** vocabulary range. It is written in **vanilla HTML/CSS/JavaScript** — no framework, no build step — and works fully offline once installed thanks to a service worker.

The interface follows a gamified, Duolingo-style design and supports listening, writing, flashcards, and mini-games, plus a **pronunciation coach** powered by the browser's Speech APIs.

---

## ✨ Features

- 📚 **Full HSK 1–6 vocabulary** — split per level (`words_hsk1.js` … `words_hsk6b.js`)
- 🧩 **Grammar & sentence packs** — `grammar_data.js`, `comm_sentences.js`
- 🗣️ **Pronunciation coach** — real-time speech feedback and placement
- 🎴 **Flashcards & mini-games** — active-recall practice
- ✍️ **Listening & writing drills**
- 🏷️ **Part-of-speech tagging** — generated offline with `jieba`
- 📶 **Offline-first PWA** — installable, service-worker cached (`sw.js`, `manifest.json`)

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML / CSS / JavaScript |
| App shell | PWA — `manifest.json` + service worker (`sw.js`) |
| Fonts | Inter + Noto Sans SC |
| Tooling | Python (`jieba` POS generation, auto-deploy watcher) |
| Hosting | Vercel (static) |

---

## 📁 Project Structure

```
Chinese-Learning/
├── index.html              # single-page app entry
├── manifest.json           # PWA manifest
├── sw.js                   # service worker (offline cache)
├── words_hsk1.js … hsk6b.js# HSK 1–6 vocabulary datasets
├── grammar_data.js         # grammar reference data
├── comm_sentences.js       # common sentence packs
├── run.py                  # auto-deploy watcher entry
├── auto_deploy.py          # watch → commit → push (GitHub/Vercel)
├── generate_hsk_pos.py     # build part-of-speech data
├── jieba_hsk_pos.py        # jieba-based POS tagging
├── fallback_pos_hsk3.py    # POS fallback rules
├── docs/                   # design specs & plans
└── scripts/                # static smoke tests (*.mjs)
```

---

## 🚀 Getting Started

The app is **static** — no build is required.

```bash
# Simplest: open the app directly
# → open index.html in any modern browser

# Or serve it locally over HTTP (recommended for PWA/service worker)
python -m http.server 8000
# then visit http://localhost:8000
```

### Regenerate vocabulary part-of-speech data

```bash
pip install jieba
python generate_hsk_pos.py
```

### Auto-deploy watcher (optional)

`run.py` watches the working directory and automatically commits & pushes changes to GitHub (which Vercel then deploys):

```bash
python run.py
```

---

## ☁️ Deployment

Deployed as a **static site on Vercel**. Any push to `main` is built and published automatically.

---

## 👤 Author

**Bùi Đăng Minh** — Swinburne University
[GitHub @buidangminh23](https://github.com/buidangminh23)

## 📄 License

Released under the **MIT License**.
