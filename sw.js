/* 作業手順書メーカー：オフライン用（版 ea9c4560） */
const CACHE="tejunsho-ea9c4560";
const FILES=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png","apple-touch-icon.png"];
const OCR=["tesseract.min.js","tesseract-worker.min.js","tesseract-core-lstm.wasm.js","eng.traineddata.gz"];   // 現品札の文字認識（無くても本体は動く）
self.addEventListener("install",e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES).then(()=>Promise.all(OCR.map(f=>c.add(f).catch(()=>{}))))).then(()=>self.skipWaiting())); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
/* 電波があれば最新を取りに行き、なければ保存しておいた物を使う */
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin) return;
  e.respondWith(fetch(e.request).then(r=>{ if(r.ok){ const c=r.clone(); caches.open(CACHE).then(x=>x.put(e.request,c)); } return r; })
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match("index.html"))));
});
