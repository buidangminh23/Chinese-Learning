# Speech And Placement Design

Date: 2026-06-12
Repo: Chinese-Learning
Status: approved for implementation

## Goal

Add two new learning surfaces to the static Chinese app:

- `Luyen Noi`: speech recognition practice with offline, online, and hybrid scoring modes.
- `Kiem tra`: a placement test that recommends an HSK level using existing app data.

Chatbot conversation is out of scope for this change.

## Modes

### Offline Mode

Offline mode always works without an API key. Speech practice uses browser speech recognition when available and compares the transcript with the target Chinese text. Placement tests are generated from existing `ALL_WORDS` data and scored locally.

### Online Mode

Online mode is optional. The user can enter a Gemini API key in the app. The key is stored only in `localStorage`, never hardcoded in source. The app calls Gemini `generateContent` through `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent` with the key in the `x-goog-api-key` header.

### Hybrid Mode

Hybrid is the default. It uses online scoring when a key is configured and the request succeeds. If online scoring fails or no key exists, it falls back to offline scoring without breaking the session.

## Speaking Practice

Add a `Luyen Noi` screen with:

- Target text from HSK 1-3 words and common sentences.
- Listen, new prompt, and microphone controls.
- Transcript display.
- Score, label, and feedback.
- Mode selector: hybrid, offline, online.
- Optional Gemini key input and save/clear controls.

Unsupported speech recognition must show a clear fallback message and keep the rest of the screen usable.

## Placement Test

Add a `Kiem tra` screen with:

- 20 local questions sampled across HSK 1-6.
- Question types: choose meaning, choose pinyin, listen and choose hanzi.
- Progress indicator.
- Final score, suggested HSK level, and per-HSK breakdown.
- Save latest result to `state.placement`.
- Reuse the same AI mode panel for optional online feedback when available.

## Data And State

Extend app state with:

- `state.aiPractice`: `{ mode, geminiKey }`
- `state.placement`: latest test result object

Existing progress data remains compatible.

## Testing

Add a static test that asserts the new screens, nav items, mode controls, recognition helpers, Gemini helper, placement helpers, and state keys exist.

Browser QA must verify:

- App loads without runtime overlay.
- `Luyen Noi` renders mode selector, microphone control, target text, and fallback/support status.
- `Kiem tra` starts a test, advances through at least one answer, and renders progress.
- Existing `Luyen Nghe` pronunciation controls still render.
- No relevant console errors.

