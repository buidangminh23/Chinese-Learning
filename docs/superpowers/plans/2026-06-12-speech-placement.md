# Speech And Placement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add speech recognition practice and placement testing with offline, online, and hybrid modes.

**Architecture:** Keep the app as a static single-page app. Add two screens to `index.html`, store optional Gemini settings in `localStorage`, use Web Speech API for speech recognition, use existing HSK data for placement questions, and add static regression tests to guard the new hooks.

**Tech Stack:** Static HTML/CSS/JavaScript, browser `SpeechRecognition`/`webkitSpeechRecognition`, browser `fetch`, Gemini REST `generateContent`, Node.js static tests, Python static server, Codex Browser QA.

---

## Files

- Modify: `index.html`
  - Add `speaking` and `placement` nav items and screens.
  - Add state keys `aiPractice` and `placement`.
  - Add AI mode panel helpers.
  - Add speech recognition helpers and speaking UI.
  - Add placement question generation, scoring, and result UI.
- Modify: `sw.js`
  - Bump cache name to force updated HTML.
- Create: `scripts/test_speech_placement_static.mjs`
  - Static regression test for screen hooks, mode hooks, speech helpers, AI helpers, and placement helpers.

## Tasks

- [ ] Write failing static test in `scripts/test_speech_placement_static.mjs`.
- [ ] Run `node scripts/test_speech_placement_static.mjs` and confirm it fails on missing `screen-speaking`.
- [ ] Add nav items, screens, titles, and render routing.
- [ ] Add shared AI mode settings panel and Gemini helper.
- [ ] Add speech recognition practice screen and offline/hybrid scoring.
- [ ] Add placement test screen and local scoring.
- [ ] Bump service worker cache.
- [ ] Run static tests, JS checks, Python checks, and inline script parse.
- [ ] Run Browser QA for `Luyen Noi`, `Kiem tra`, and existing `Luyen Nghe`.
- [ ] Commit and push.

