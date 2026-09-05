var CACHE_NAME = "warehouse-split-v1";
var APP_SHELL = [
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){ return cache.addAll(APP_SHELL); })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(names.filter(function(n){ return n !== CACHE_NAME; }).map(function(n){ return caches.delete(n); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event){
  if(event.request.method !== "GET") return;
  var url = new URL(event.request.url);
  var sameOrigin = url.origin === self.location.origin;

  if(sameOrigin){
    event.respondWith(
      caches.match(event.request).then(function(cached){
        var networkFetch = fetch(event.request).then(function(resp){
          if(resp && resp.ok){
            var copy = resp.clone();
            caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
          }
          return resp;
        }).catch(function(){ return cached; });
        return cached || networkFetch;
      })
    );
  } else {
    // cross-origin (fonts, pdf.js CDN): network-first so updates aren't stale, cached fallback offline
    event.respondWith(
      fetch(event.request).then(function(resp){
        var copy = resp.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
        return resp;
      }).catch(function(){ return caches.match(event.request); })
    );
  }
});
