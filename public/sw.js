const CACHE_NAME = "jungle-cache-v2"; // version change karna padega har deploy pe

self.addEventListener("install", (event) => {
  self.skipWaiting(); // new SW immediately activate
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // old cache delete
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request)); // ❗ NO CACHE for HTML
});