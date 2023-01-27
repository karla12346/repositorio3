const STATIC_CACHE = "static";
const APP_SHELL=[
    "/",
    "index.html",
    "style.css",
    "functions.js",
     "main.js",
     "script1",
     "script2",
     "1.jpg",
];
self.addEventListener("install",(e)=>{
    const cachesStatic = caches
    .open(STATIC_CACHE)
    .then((cache)=> cache.addAll(APP_SHELL));
    e.waitUntill(cachesStatic);
});

self.addEventListener("fetch",(e)=>{
    console.log("fetch!",e.request);

    e.respondWith(
        caches
        .match(e.request)
        .then(res => res || fetch (e.request))
        .catch(console.log)
    
        );
});