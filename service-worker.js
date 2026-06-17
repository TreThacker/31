/* <------------------------------------------------
      THIRTY-ONE SERVICE WORKER
   -------------------------------------------------> */
const CACHE_NAME = 'thirty-one-cache-v1-00';

const APP_FILES = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './favicon.ico',

  './image/icon/icon-16.png',
  './image/icon/icon-32.png',
  './image/icon/icon-192.png',
  './image/icon/icon-512.png',
  './image/icon/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse =>
      cachedResponse || fetch(event.request)
    )
  );
});