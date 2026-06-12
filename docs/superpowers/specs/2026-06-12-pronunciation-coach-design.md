# Pronunciation Coach Design

Date: 2026-06-12
Repo: Chinese-Learning
Status: approved for implementation planning

## Goal

Add a shared Mandarin pronunciation system that makes Chinese audio more reliable and useful across the app. The first version focuses on `Luyen Nghe` and `Tu vung`, because those are the places where users repeatedly need to hear words, sentences, and slower pronunciation.

## User-Facing Scope

- Remove the Page Agent demo widget from the learning app.
- Add one shared pronunciation controller used by all audio buttons.
- In `Tu vung`, provide normal-speed and slow-speed audio for vocabulary cards and communication sentences.
- In `Luyen Nghe`, provide normal replay, slow replay, and answer feedback that helps learners connect sound, hanzi, pinyin, and meaning.
- Keep the app static and browser-only; do not add a backend or paid audio provider.

## Approach

The app already has `speakNative(text)` backed by Google Translate TTS and a Web Speech fallback. The implementation should replace the scattered audio calls with a small shared pronunciation layer:

- `speakChinese(text, options)` handles normal playback.
- `stopChineseAudio()` stops active native audio and browser speech.
- Options include `rate` and an optional label such as `normal`, `slow`, or `very-slow`.
- Native Google TTS remains the first choice for realistic Mandarin pronunciation.
- Web Speech remains the fallback and should select the best available `zh-CN` voice.

## Components

### Shared Pronunciation Layer

Located in `index.html` near existing audio utilities. It owns active audio state, voice selection, playback rate, fallback behavior, and small helper wrappers such as `speakNormal(text)` and `speakSlow(text)`.

### Vocabulary Audio Controls

Vocabulary cards and communication sentence cards get separate controls:

- normal listen button
- slow listen button

These controls must stop event propagation where needed so clicking audio does not accidentally trigger the whole card behavior twice.

### Listening Practice Controls

The listening screen gets:

- main normal-speed play button
- slow replay button
- answer feedback that shows hanzi, pinyin, and Vietnamese meaning after the user answers

The existing quiz behavior remains intact.

## Data Flow

1. UI button passes a Chinese string and mode to the shared pronunciation layer.
2. The layer stops any current playback.
3. It tries native Google TTS for `zh-CN`.
4. If native audio fails, it falls back to Web Speech with the selected Mandarin voice and requested rate.
5. UI remains responsive even when audio fails.

## Error Handling

- Empty text returns without throwing.
- Native audio failures fall back to Web Speech and log a concise warning.
- Missing Web Speech support fails silently after native audio failure, matching the app's current lightweight behavior.
- Repeated clicks cancel the previous audio before starting the next one.

## Testing

Add a lightweight static regression test that checks the pronunciation helpers and key UI hooks exist in `index.html`.

Manual/browser verification:

- app loads without the Page Agent widget
- `Tu vung` opens and vocabulary cards render audio controls
- communication sentence search still works
- normal and slow audio buttons can be clicked without console errors
- `Luyen Nghe` normal and slow replay buttons render and respond
- existing JS syntax checks still pass

## Out of Scope

- Speech recognition or scoring the learner's spoken voice
- Downloading or bundling offline audio files
- Paid cloud TTS providers
- Redesigning the whole app layout

