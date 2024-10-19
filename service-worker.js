const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/math.html',
    '/chemistry.html',
    '/physics.html',
    '/style.css',
    '/basic_math.pdf',
    '/advanced_math.pdf',
    '/basic_chemistry.pdf',
    '/advanced_chemistry.pdf',
    '/basic_physics.pdf',
    '/advanced_physics.pdf',
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching files');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch from Cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                return response || fetch(event.request);
            })
    );
});

