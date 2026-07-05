/* IronPeak storefront enhancements — theme-hosted replacement for the legacy
   ironpeak-glitch.github.io cta-inject.js ScriptTag (product + home CTAs and
   FAQ/Product JSON-LD for SEO/AEO). Same-origin, version-controlled.
   Self-suppresses while the legacy GitHub ScriptTag is still installed, so it is
   safe to publish BEFORE removing that ScriptTag; it activates once the tag is gone. */
/**
 * IronPeak CTA Injector
 * Adds a "Calculate my profit" callout to product pages and homepage.
 * Hosted on GitHub Pages; attached to the Shopify store as a ScriptTag.
 * Safe to remove via Shopify Admin → Apps → Script tags.
 */
(function () {
  'use strict';
  if (document.querySelector('script[src*="ironpeak-glitch.github.io"]')) return; /* dedup: defer to legacy ScriptTag until it is removed */


  var CALC_URL = '/pages/profit-calculator';
  var body = document.body;

  /* ── Product page CTA bar ─────────────────────────────────────────── */
  var isProduct =
    body.classList.contains('template-product') ||
    window.location.pathname.indexOf('/products/') > -1;

  if (isProduct) {
    var bar = document.createElement('div');
    bar.style.cssText =
      'background:#0d1522;border:1px solid #24344d;border-radius:10px;' +
      'padding:16px 20px;margin:20px 0;display:flex;align-items:center;' +
      'justify-content:space-between;gap:12px;flex-wrap:wrap;';
    bar.innerHTML =
      '<div>' +
        '<div style="font-weight:700;font-size:15px;color:#e8eef7;">' +
          'See your exact profit on this kit' +
        '</div>' +
        '<div style="font-size:13px;color:#93a5bd;margin-top:3px;">' +
          'Move two sliders — get your margin in 30 seconds. Free.' +
        '</div>' +
      '</div>' +
      '<a href="' + CALC_URL + '" ' +
        'style="background:#1e7fff;color:#fff;text-decoration:none;' +
        'padding:11px 20px;border-radius:8px;font-weight:700;font-size:14px;' +
        'white-space:nowrap;">' +
        'Calculate my profit →' +
      '</a>';

    // Insert before the add-to-cart form; fall back to appending inside main
    var anchor =
      document.querySelector('form[action*="/cart/add"]') ||
      document.querySelector('[data-product-form]') ||
      document.querySelector('.product__info-container') ||
      document.querySelector('.product-info') ||
      document.querySelector('#product-info') ||
      document.querySelector('.product-form');

    if (anchor) {
      anchor.parentNode.insertBefore(bar, anchor);
    } else {
      var main = document.querySelector('main') || body;
      main.appendChild(bar);
    }
  }

  /* ── Store header: Apply CTA (parity with the flagship nav) ───────── */
  var headerWrap = document.querySelector('.header__first-level-wrapper');
  if (headerWrap && !document.querySelector('.iph-nav-apply')) {
    var applyBtn = document.createElement('a');
    applyBtn.className = 'iph-nav-apply';
    applyBtn.href = '/pages/dealer-program';
    applyBtn.innerHTML = 'Apply <span aria-hidden="true">\u2192</span>';
    applyBtn.style.cssText =
      'background:#1e7fff;color:#fff;text-decoration:none;padding:.62rem 1.15rem;' +
      'border-radius:2px;font-weight:600;font-size:.78rem;letter-spacing:.1em;' +
      'text-transform:uppercase;white-space:nowrap;margin-left:1rem;flex:0 0 auto;align-self:center;';
    headerWrap.appendChild(applyBtn);
    var mq = window.matchMedia('(max-width: 990px)');
    var syncApply = function () { applyBtn.style.display = mq.matches ? 'none' : 'inline-block'; };
    if (mq.addEventListener) mq.addEventListener('change', syncApply); else if (mq.addListener) mq.addListener(syncApply);
    syncApply();
  }

  /* ── Homepage calculator band ─────────────────────────────────────── */
  var isHome =
    body.classList.contains('template-index') ||
    window.location.pathname === '/';

  if (isHome) {
    var band = document.createElement('section');
    band.style.cssText =
      'background:#0E1116;padding:48px 24px;text-align:center;';
    band.innerHTML =
      '<div style="max-width:640px;margin:0 auto;">' +
        '<div style="color:#6FB1FF;font-size:12px;font-weight:700;' +
          'letter-spacing:.12em;text-transform:uppercase;margin-bottom:12px;">' +
          'Free Installer Tool' +
        '</div>' +
        '<div style="color:#E6E8EB;font-size:28px;font-weight:800;' +
          'letter-spacing:-.02em;margin-bottom:12px;line-height:1.25;">' +
          'See what permanent lighting pays you<br>before you spend a dollar' +
        '</div>' +
        '<div style="color:#8B949E;font-size:16px;margin-bottom:24px;">' +
          'No buy-in. No sales call. Just move two sliders and see your margin.' +
        '</div>' +
        '<a href="' + CALC_URL + '" ' +
          'style="display:inline-block;background:#2B7CF0;color:#fff;' +
          'text-decoration:none;padding:15px 32px;border-radius:10px;' +
          'font-weight:700;font-size:16px;">' +
          'Calculate my profit — free →' +
        '</a>' +
      '</div>';

    // Append inside <main>; fall back to body
    var mainEl = document.querySelector('main') || body;
    mainEl.appendChild(band);
  }
})();

/* ── Structured data (JSON-LD) for SEO / AEO ──────────────────────────
 * Injects Product schema (from Shopify product meta) + a shared FAQ schema
 * on product pages. Adds the FAQ schema alone on key marketing pages.
 * Google + AI search read JS-injected JSON-LD. Safe + additive.
 * ------------------------------------------------------------------- */
(function () {
  'use strict';
  if (document.querySelector('script[src*="ironpeak-glitch.github.io"]')) return; /* dedup: defer to legacy ScriptTag until it is removed */


  var body = document.body;

  function addJsonLd(obj) {
    try {
      var s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    } catch (e) { /* never break the page over schema */ }
  }

  var path = window.location.pathname;
  var isProduct = path.indexOf('/products/') > -1;

  /* Installer-intent FAQ — the questions buyers (and AI assistants) actually ask */
  var FAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How long does an IronPeak permanent lighting kit take to install?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'IronPeak kits are pre-built and pitch-matched, so a perfect, symmetrical peak goes up in under 5 minutes instead of 25+ minutes of cutting and fitting on a ladder. Most homes install dramatically faster than traditional permanent lighting, with no cutting or splicing on the roof.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is there a dealer buy-in or franchise fee to sell IronPeak?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. IronPeak has a $0 buy-in dealer program — no $10,000–$20,000 inventory requirement and no paywalled training. You can start with a single kit and earn better pricing as your volume grows over a rolling 12-month window.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Which roof pitch do I choose for my Apex Track?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pick the pitch closest to your roof: 4/12 (low slope, ranch and single-story, covers 3/12–5/12), 6/12 (standard, the most common American pitch, covers 5/12–7/12), 9/12 (steep, colonial and two-story, covers 8/12–10/12), or 12/12 (very steep, Cape Cod and A-frame, covers 11/12–12/12). Your pre-built Apex peak is matched to the pitch you select.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the IronPeak guarantee and warranty?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Every Apex peak is covered by the Perfect-Peak Guarantee: if a peak arrives not true and symmetrical, IronPeak replaces it free and covers shipping. New customers get a 30-day money-back guarantee (cash refund up to the price of one standard kit; store credit beyond that). LEDs, controllers, and power supplies carry a 5-year warranty.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is included in an IronPeak roofline lighting kit?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Each kit includes powder-coated aluminum track, RGBW LED strands, one or more pre-built TrueCenter Apex Track peaks matched to your roof pitch and color, a 600W power supply with multi-layer surge protection, an app-enabled RGBW controller, color-matched mounting hardware, spare data cables, an install guide, and free access to IronPeak install training.'
        }
      }
    ]
  };

  if (isProduct) {
    /* Product schema from Shopify's product meta (price in cents) */
    try {
      var meta = (window.ShopifyAnalytics && window.ShopifyAnalytics.meta) || {};
      var p = meta.product;
      var og = function (prop) {
        var el = document.querySelector('meta[property="' + prop + '"]');
        return el ? el.getAttribute('content') : null;
      };
      if (p && p.variants && p.variants.length) {
        var prices = p.variants.map(function (v) { return v.price; });
        var low = Math.min.apply(null, prices) / 100;
        var high = Math.max.apply(null, prices) / 100;
        var cur = (meta.currency) || (window.Shopify && window.Shopify.currency && window.Shopify.currency.active) || 'USD';
        var titleEl = document.querySelector('h1');
        var name = og('og:title') || (titleEl && titleEl.textContent.trim()) || p.type || 'IronPeak Product';
        var desc = og('og:description') || '';
        var img = og('og:image');
        var prod = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': name,
          'brand': { '@type': 'Brand', 'name': 'IronPeak Lighting' },
          'url': window.location.href.split('?')[0]
        };
        if (desc) prod.description = desc;
        if (img) prod.image = img;
        var offer = {
          '@type': (low === high ? 'Offer' : 'AggregateOffer'),
          'priceCurrency': cur,
          'availability': 'https://schema.org/InStock',
          'url': window.location.href.split('?')[0]
        };
        if (low === high) { offer.price = low.toFixed(2); }
        else { offer.lowPrice = low.toFixed(2); offer.highPrice = high.toFixed(2); }
        prod.offers = offer;
        addJsonLd(prod);
      }
    } catch (e) { /* ignore */ }

    addJsonLd(FAQ);
  } else if (
    path.indexOf('/pages/dealer-program') > -1 ||
    path.indexOf('/pages/returns-guarantee') > -1 ||
    path.indexOf('/pages/profit-calculator') > -1 ||
    path === '/' ||
    body.classList.contains('template-index')
  ) {
    /* FAQ schema on the key marketing pages too (AEO surface) */
    addJsonLd(FAQ);
  }
})();
