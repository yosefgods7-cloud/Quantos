const CACHE_NAME = 'quantos-v20';
const CORE_ASSETS = [
    './',
    './index.html'
];
const OPTIONAL_ASSETS = [
    'https://unpkg.com/lucide@latest',
    'https://cdn.jsdelivr.net/npm/chart.js',
    'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];
const ALLOWED_CDN_ORIGINS = new Set([
    'https://unpkg.com',
    'https://cdn.jsdelivr.net',
    'https://cdnjs.cloudflare.com',
    'https://cdn.sheetjs.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
]);

function isCacheableRequest(request) {
    try {
        const parsed = new URL(request.url);
        if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;
        return parsed.origin === self.location.origin || ALLOWED_CDN_ORIGINS.has(parsed.origin);
    } catch {
        return false;
    }
}

function isCacheableResponse(response) {
    return Boolean(
        response &&
        response.ok &&
        response.status === 200 &&
        (response.type === 'basic' || response.type === 'cors')
    );
}

self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            await Promise.allSettled(
                [...CORE_ASSETS, ...OPTIONAL_ASSETS].map((url) =>
                    cache.add(url).catch((err) => {
                        console.warn('SW precache skipped:', url, err?.message || err);
                    })
                )
            );
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') return;
    const reqUrl = e.request.url;
    if (
        reqUrl.includes('/api/') ||
        reqUrl.includes('api.telegram.org') ||
        reqUrl.includes('generativelanguage.googleapis.com') ||
        reqUrl.includes('swissquote.com') ||
        reqUrl.includes('finance.yahoo.com') ||
        reqUrl.includes('api.gold-api.com') ||
        reqUrl.includes('api.binance.com') ||
        reqUrl.includes('open.er-api.com')
    ) {
        return;
    }
    if (!isCacheableRequest(e.request)) return;

    const parsedUrl = new URL(reqUrl);
    const isHtml =
        e.request.mode === 'navigate' ||
        e.request.headers.get('accept')?.includes('text/html') ||
        parsedUrl.pathname.endsWith('.html') ||
        parsedUrl.pathname.endsWith('/');

    if (isHtml) {
        // Network-first for HTML
        e.respondWith(
            fetch(e.request).then((response) => {
                if (isCacheableResponse(response)) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(e.request, responseClone);
                    });
                }
                return response;
            }).catch(() => {
                return caches.match(e.request).then((r) => r || caches.match('./index.html') || caches.match('./'));
            })
        );
    } else {
        // Cache-first for static assets
        e.respondWith(
            caches.match(e.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(e.request).then((response) => {
                    if (isCacheableResponse(response)) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(e.request, responseClone);
                        });
                    }
                    return response;
                });
            })
        );
    }
});
