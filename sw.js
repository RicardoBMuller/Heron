const CACHE_NAME = 'metroquinho-cartoon-v8';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/mascot.svg',
  './assets/train.svg',
  './assets/station.svg',
  './assets/walk.svg',
  './assets/finish.svg',
  './assets/hero-scene.svg',
  './assets/hero-train.svg',
  './assets/help-scene.svg',
  './assets/route-board.svg',
  './assets/station-signs.svg',
  './assets/step-1.svg',
  './assets/step-2.svg',
  './assets/step-3.svg',
  './assets/step-4.svg',
  './assets/step-5.svg',
  './assets/step-6.svg',
  './assets/step-station.svg',
  './assets/step-walk.svg',
  './assets/step-train-green.svg',
  './assets/step-train-prata.svg',
  './assets/step-train-yellow.svg',
  './assets/trophy.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {});
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
