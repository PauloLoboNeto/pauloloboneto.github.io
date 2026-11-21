/* Cache do app: abre sem internet. A versão muda a cada publicação. */
const VERSAO = "plano-127a6d44d6";
const ARQUIVOS = ["./", "index.html", "fitness-evolutivo.html", "fundamentos-que-nao-mudam.html", "perguntas.js", "manifest.webmanifest", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSAO).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const fonte = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (url.origin !== location.origin && !fonte) return;
  // Do cache primeiro (abre na hora e offline); atualiza em segundo plano.
  e.respondWith(caches.open(VERSAO).then((c) => c.match(req, { ignoreSearch: true }).then((hit) => {
    const rede = fetch(req).then((res) => { if (res && (res.ok || res.type === "opaque")) c.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || rede;
  })));
});
