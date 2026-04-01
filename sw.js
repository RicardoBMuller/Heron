const CACHE_NAME = 'missao-metro-cache-v2';
const OFFLINE_FILES = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/hero-scene.svg',
  './assets/route-board.svg',
  './assets/station-signs.svg',
  './assets/help-scene.svg',
  './assets/step-1-sao-lucas.svg',
  './assets/step-2-transfer.svg',
  './assets/step-3-green-train.svg',
  './assets/step-4-consolacao.svg',
  './assets/step-5-walk.svg',
  './assets/step-6-yellow-train.svg',
  './assets/step-7-destination.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200 || response.type === 'opaque') {
            return response;
          }
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
