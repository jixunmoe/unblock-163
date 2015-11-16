chrome.webRequest.onBeforeRequest.addListener(function (details) {
  return { redirectUrl: details.url.replace('http://m', 'http://p') };
}, {
  urls: ["http://*.music.126.net/*"]
}, ["blocking"]);
