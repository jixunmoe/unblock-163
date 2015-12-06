chrome.webRequest.onBeforeRequest.addListener(function (details) {
  return { redirectUrl: details.url.replace('http://', 'http://203.130.59.9/') };
}, {
  urls: ["http://*.music.126.net/*"]
}, ["blocking"]);
