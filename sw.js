const CACHE_NAME = 'yandex-yuk-v2';
const ASSETS = [
  './mijoz.html',
  './haydovchi.html',
  './style.css',
  './manifest.json',
  'https://unpkg.com',
  'https://unpkg.com'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
