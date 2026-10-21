// Pierre — service worker : réseau d'abord avec revalidation forcée (toujours la dernière version), cache en secours hors-ligne
const CACHE = "pierre-v3";
const CORE = ["./", "./index.html", "./style.css", "./app.js", "./supabase-config.js", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const sameOrigin = new URL(request.url).origin === location.origin;
  // Revalidation forcée pour les fichiers du site : pas d'ancienne version gardée 10 minutes
  const netRequest = sameOrigin ? new Request(request, { cache: "no-cache" }) : request;
  event.respondWith(
    fetch(netRequest)
      .then((response) => {
        const copy = response.clone();
        if (response.ok && sameOrigin) {
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});

// ---------- Notifications push (lot n° 34) ----------
self.addEventListener("push", (event) => {
  let data = { title: "Pierre", body: "", url: "./", tag: undefined };
  try { data = { ...data, ...event.data.json() }; } catch { try { data.body = event.data.text(); } catch { /* charge vide */ } }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "./icon-192.png",
      badge: "./icon-192.png",
      tag: data.tag || undefined,
      data: { url: data.url || "./" },
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || "./";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ("focus" in c) { if ("navigate" in c) c.navigate(url); return c.focus(); }
      }
      return clients.openWindow(url);
    })
  );
});
