/* IronPeak — GoHighLevel site-wide loader (registered as a Shopify ScriptTag).
   1) Injects the GHL tracking script (ScriptTags can't carry data-* attributes).
   2) Dual-writes the native profit-calculator page's leads to the GHL inbound
      webhook (its inline code posts to HubSpot; this adds GHL without touching
      the page body — delete this block once the page's own code migrates). */
(function () {
  if (!document.querySelector('script[data-tracking-id="tk_0627744ee53e47fe9991a91ef1cbbdd0"]')) {
    var s = document.createElement('script');
    s.src = 'https://link.msgsndr.com/js/external-tracking.js';
    s.setAttribute('data-tracking-id', 'tk_0627744ee53e47fe9991a91ef1cbbdd0');
    document.head.appendChild(s);
  }
  var GHL = 'https://services.leadconnectorhq.com/hooks/99eVuuXW11CRRtiGwcXE/webhook-trigger/257e637f-23dd-4c1c-9f31-e34e268ac3ad';
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || f.id !== 'ip-leadForm') return;
    var em = document.getElementById('ip-email');
    if (!em || !em.value || em.value.indexOf('@') < 1) return;
    var g = function (id) { var el = document.getElementById(id); return el ? el.textContent : ''; };
    try {
      fetch(GHL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: em.value.trim(),
          source: 'IronPeak Profit Calculator',
          roofline_footage: g('ip-ftVal'),
          price_per_ft: g('ip-rateVal')
        })
      }).catch(function () {});
    } catch (err) { /* never interfere with the page's own submit */ }
  }, true);
})();
