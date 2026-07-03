/* IronPeak — GoHighLevel site-wide tracking loader (registered as a Shopify ScriptTag).
   ScriptTags can't carry data-* attributes, so this shim injects the real tracker. */
(function () {
  if (document.querySelector('script[data-tracking-id="tk_0627744ee53e47fe9991a91ef1cbbdd0"]')) return;
  var s = document.createElement('script');
  s.src = 'https://link.msgsndr.com/js/external-tracking.js';
  s.setAttribute('data-tracking-id', 'tk_0627744ee53e47fe9991a91ef1cbbdd0');
  document.head.appendChild(s);
})();
