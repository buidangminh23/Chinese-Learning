const CACHE_NAME = 'hanzhi-v11';
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

const OFFLINE_FALLBACK_HTML = `<!doctype html>
<html lang="vi">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Hoc tieng Trung</title></head>
<body style="font-family:system-ui,sans-serif;margin:32px;background:#09111f;color:#f8fafc">
<h1>Khong tai duoc ung dung</h1>
<p>Ket noi dang bi gian doan. Hay tai lai trang sau khi mang on dinh.</p>
</body>
</html>`;

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.allSettled(ASSETS.map(asset => cache.add(asset))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(resp => {
        if (resp.status === 200) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', clone)).catch(() => {});
        }
        return resp;
      }).catch(() => caches.match('./index.html')
        .then(r => r || caches.match('./'))
        .then(r => r || new Response(OFFLINE_FALLBACK_HTML, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        })))
    );
    return;
  }

  // Network first for TTS, cache first for assets
  if (e.request.url.includes('translate.googleapis.com')) {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request).then(r => r || Response.error())));
  } else {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
        if (resp.status === 200) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone)).catch(() => {});
        }
        return resp;
      }).catch(() => Response.error()))
    );
  }
});
