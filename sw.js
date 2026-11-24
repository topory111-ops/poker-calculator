// "הקופה" — service worker מינימלי.
// לא שומר שום דבר במטמון: כל טעינה מגיעה ישר מהאתר, כך שעדכונים מופיעים מיד.
// הוא קיים רק כדי שכרום יציע "התקנת אפליקציה".
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request));
});
