let swLocation = "sw.js";
if (navigator.serviceWorker){
    if(window.Location.href.includes("localhost"))
         swLocation="/sw.js";
         navigator.serviceWorker.register(swLocation);
}