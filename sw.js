const CACHE_NAME = 'hanzhi-v5';
const ASSETS = [
  './',
  './index.html',
  './words_hsk1.js',
  './words_hsk2.js',
  './words_hsk3.js',
  './words_hsk4.js',
  './words_hsk5a.js',
  './words_hsk5b.js',
  './words_hsk6a.js',
  './words_hsk6b.js',
  './grammar_data.js',
  './comm_sentences.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network first for TTS, cache first for assets
  if (e.request.url.includes('translate.googleapis.com')) {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  } else {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
        if (resp.status === 200) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return resp;
      }))
    );
  }
});
