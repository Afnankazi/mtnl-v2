/*
 * MTNL service worker — offline support only (no push).
 *
 * Strategy:
 *  - Precache the app shell + offline fallback on install.
 *  - Navigations: network-first, fall back to the cached page, then to
 *    /en/offline (or /hi/offline) so a cold offline load still shows chrome.
 *  - Static assets (_next/static, icons, fonts): stale-while-revalidate.
 *  - Never cache API/proxy responses or non-GET requests.
 */

const VERSION = "v1";
const SHELL_CACHE = `mtnl-shell-${VERSION}`;
const ASSET_CACHE = `mtnl-assets-${VERSION}`;
const PAGE_CACHE = `mtnl-pages-${VERSION}`;

const PRECACHE = ["/en", "/hi", "/en/offline", "/hi/offline", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => ![SHELL_CACHE, ASSET_CACHE, PAGE_CACHE].includes(k))
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

function offlineFallback(request) {
  const url = new URL(request.url);
  const locale = url.pathname.startsWith("/hi") ? "hi" : "en";
  return caches.match(`/${locale}/offline`) || caches.match("/en/offline");
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api")) return;

  // HTML navigations: network-first with a cached / offline fallback.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(PAGE_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((hit) => hit || offlineFallback(request)))
    );
    return;
  }

  // Build output & other static assets: stale-while-revalidate.
  if (
    url.pathname.startsWith("/_next/static") ||
    url.pathname.startsWith("/icons/") ||
    /\.(?:css|js|woff2?|png|jpg|jpeg|svg|webp|ico)$/.test(url.pathname)
  ) {
    event.respondWith(
      caches.open(ASSET_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        const network = fetch(request)
          .then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
  }
});
