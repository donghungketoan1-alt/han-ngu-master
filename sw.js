// Hán Ngữ Master — service worker: cho phép cài như app và học khi mất mạng.
// Mỗi lần sửa index.html KHÔNG cần sửa file này: trang luôn lấy bản mới khi có mạng.
// Các file data.js, app.css, icons.js có đuôi ?v=... đổi theo mỗi lần cập nhật, nên máy học viên tự lấy bản mới.
const CACHE = "han-ngu-master-v3";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./img/logo.jpg",
  "./icon-192.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => Promise.all(CORE.map(url => cache.add(url).catch(() => {}))))
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

// Lưu bản mới, đồng thời xóa bản cũ cùng tên nhưng khác ?v= để bộ nhớ không phình ra
async function putFresh(req, res) {
  const cache = await caches.open(CACHE);
  const url = new URL(req.url);
  if (url.search) {
    const keys = await cache.keys();
    await Promise.all(keys.filter(k => {
      const u = new URL(k.url);
      return u.origin === url.origin && u.pathname === url.pathname && u.search !== url.search;
    }).map(k => cache.delete(k)));
  }
  await cache.put(req, res);
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Không cache máy chủ Apps Script / Gemini (dữ liệu tài khoản, AI)
  if (url.hostname.endsWith("script.google.com") || url.hostname.endsWith("googleusercontent.com") || url.hostname.endsWith("googleapis.com")) return;

  // Trang chính: luôn hỏi GitHub bản mới nhất (bỏ qua bộ nhớ đệm), mất mạng thì dùng bản đã lưu
  if (req.mode === "navigate" || (url.origin === location.origin && url.pathname.endsWith(".html"))) {
    event.respondWith(
      fetch(req, { cache: "no-cache" })
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html").then(r => r || caches.match("./")))
    );
    return;
  }

  // Dữ liệu, giao diện, ảnh: dùng bản đã lưu, đồng thời cập nhật ngầm
  event.respondWith(
    caches.match(req).then(cached => {
      const net = fetch(req).then(res => {
        if (res && (res.ok || res.type === "opaque")) putFresh(req, res.clone());
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
