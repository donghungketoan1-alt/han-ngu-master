// Hán Ngữ Master — service worker: cho phép cài như app và học khi mất mạng.
// Mỗi lần sửa index.html KHÔNG cần sửa file này: trang luôn lấy bản mới khi có mạng.
const CACHE = "han-ngu-master-v1";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "https://cdn.tailwindcss.com/3.4.17",
  "https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => Promise.all(CORE.map(url =>
        cache.add(new Request(url, url.startsWith("http") ? { mode: "no-cors" } : {})).catch(() => {})
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Không cache máy chủ Apps Script / Gemini (dữ liệu tài khoản, AI)
  if (url.hostname.endsWith("script.google.com") || url.hostname.endsWith("googleusercontent.com") || url.hostname.endsWith("googleapis.com")) return;

  // Trang chính: ưu tiên mạng (luôn có bản mới), mất mạng thì dùng bản đã lưu
  if (req.mode === "navigate" || (url.origin === location.origin && url.pathname.endsWith(".html"))) {
    event.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html").then(r => r || caches.match("./")))
    );
    return;
  }

  // Thư viện, ảnh, font: dùng bản đã lưu, đồng thời cập nhật ngầm
  event.respondWith(
    caches.match(req).then(cached => {
      const net = fetch(req).then(res => {
        if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
