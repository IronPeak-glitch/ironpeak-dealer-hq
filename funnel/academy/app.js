/* ============================================================================
   IRONPEAK SALES ACADEMY — APP ENGINE
   ----------------------------------------------------------------------------
   Hash-routed SPA over window.IRONPEAK_CURRICULUM (+ window.IRONPEAK_PLAYBOOK).
   The DATA is authored separately (data/00..06 + 90) to ACADEMY-SPEC §6/§9.
   This file is the ENGINE: router, views, lesson renderer (multi-modal),
   interactives, localStorage tracking, quizzes, exam, certificate, manager
   dashboard, and motion. Self-contained; no build step. Zero console errors.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------ helpers */
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;
  document.documentElement.classList.toggle('reduced', reduced);

  var hasGsap = (typeof gsap !== 'undefined');
  var hasST = hasGsap && (typeof ScrollTrigger !== 'undefined');
  if (hasST) { gsap.registerPlugin(ScrollTrigger); ScrollTrigger.config({ ignoreMobileResize: true }); }

  function esc (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  /* Replace [Your Company] / [Your Name] placeholders with styled spans, then
     it's safe to insert as HTML because the surrounding text is already escaped
     or author-controlled clean HTML per the data model. */
  function markPlaceholders (s) {
    return String(s == null ? '' : s)
      .replace(/\[Your Company\]/g, '<span class="ph">[Your Company]</span>')
      .replace(/\[Your Name\]/g, '<span class="ph">[Your Name]</span>');
  }
  /* For copy: strip tags + decode the placeholders back to plain bracket text. */
  function toPlainText (html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/\s+\n/g, '\n').trim();
  }
  function clampPct (n) { return Math.max(0, Math.min(100, Math.round(n))); }

  var ICON = {
    check: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arr: '<span class="arr" aria-hidden="true">→</span>',
    read: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h7v15H4zM13 5h7v15h-7z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    watch: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" stroke-width="1.7"/><path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor"/></svg>',
    listen: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 14v-3a8 8 0 0116 0v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><rect x="3" y="13" width="4" height="6" rx="1.6" stroke="currentColor" stroke-width="1.7"/><rect x="17" y="13" width="4" height="6" rx="1.6" stroke="currentColor" stroke-width="1.7"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 5.5l11 6.5-11 6.5z" fill="currentColor"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M5 15V5a2 2 0 012-2h8" stroke="currentColor" stroke-width="1.7"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M12 11v5M12 8h.01" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
    warning: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4l9 16H3z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 10v4M12 17h.01" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
    guardrail: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="currentColor"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    hash: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 4l-2 16M17 4l-2 16M4 9h16M3 15h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    cert: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="10" r="6" stroke="currentColor" stroke-width="1.7"/><path d="M9 15l-1.5 6 4.5-2.5 4.5 2.5L15 15" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="6" height="6" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="4" width="6" height="6" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="14" width="6" height="6" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="14" width="6" height="6" stroke="currentColor" stroke-width="1.7"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="1.8"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
  };

  /* ============================================================ STORAGE
     localStorage 'ironpeak_academy_v1' — exact §5 model. */
  var LS_KEY = 'ironpeak_academy_v1';
  var store = null;

  function defaultStore () {
    return {
      user: { name: '', company: '', role: 'learner', startedAt: null },
      progress: {},      // [lessonId]: { completed:true, completedAt, mode }
      quiz: {},          // [moduleId]: { best, total, attempts, passedAt }
      exam: { best: 0, total: 0, passedAt: null },
      cert: { issued: false, issuedAt: null, name: '' },
      prefs: { mode: 'read' }   // remembered lesson mode (engine-local)
    };
  }
  function loadStore () {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (!raw) return defaultStore();
      var p = JSON.parse(raw);
      var d = defaultStore();
      return {
        user: Object.assign(d.user, p.user || {}),
        progress: p.progress || {},
        quiz: p.quiz || {},
        exam: Object.assign(d.exam, p.exam || {}),
        cert: Object.assign(d.cert, p.cert || {}),
        prefs: Object.assign(d.prefs, p.prefs || {})
      };
    } catch (e) { return defaultStore(); }
  }
  function saveStore () {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); }
    catch (e) { /* storage full / private mode — app still works in-session */ }
  }

  /* ----------------------------------------------------------------------------
     THE EVENTS WRITE SEAM (see ACADEMY-BACKEND.md §4, "Seam 1 — writeProgress").
     Every meaningful learner action (lesson_completed, quiz_passed, quiz_attempted,
     certified) flows through this ONE function. Demo: persists locally (the caller
     already wrote `store` + saveStore()). Production: POST the event to the backend
     and keep localStorage as an offline cache — a one-function change.
     event = { type, ref, mode?, score?, total?, passed?, occurredAt }
  ---------------------------------------------------------------------------- */
  function writeProgress (event) {
    // DEMO: state is already in `store` (the caller mutated + saved it). No-op here.
    // PRODUCTION — uncomment to emit to the backend; the rest of the app is unchanged:
    // try {
    //   fetch((window.ACADEMY_API || (location.origin + '/apps/academy')) + '/events', {
    //     method: 'POST', credentials: 'include',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(Object.assign({ eventId: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())) }, event))
    //   }).catch(function () { /* offline-safe: localStorage is the cache, replay later */ });
    // } catch (e) {}
    return event;
  }

  /* ============================================================ DATA */
  var MODULES = [];
  var PLAYBOOK = [];
  var ALL_LESSONS = [];           // flat, in module+lesson order
  var LESSON_BY_ID = {};
  var MODULE_BY_ID = {};

  function ingestData () {
    var c = window.IRONPEAK_CURRICULUM;
    if (!c || !c.modules || !c.modules.length) return false;
    MODULES = c.modules.slice().sort(function (a, b) { return (a.num || 0) - (b.num || 0); });
    MODULES.forEach(function (m) {
      MODULE_BY_ID[m.id] = m;
      (m.lessons || []).forEach(function (l) {
        l._moduleId = m.id;
        ALL_LESSONS.push(l);
        LESSON_BY_ID[l.id] = l;
      });
    });
    // Playbook: prefer the dedicated source; ALSO fold in every script block
    // across lessons so the library is complete regardless of file shape.
    var pb = window.IRONPEAK_PLAYBOOK;
    var cards = [];
    var seen = {};
    if (pb) {
      var raw = pb.scripts || pb.cards || [];
      raw.forEach(function (s) {
        var card = normalizeCard(s);
        cards.push(card); if (card.id) seen[card.id] = true;
      });
    }
    // fold in lesson scripts not already represented
    ALL_LESSONS.forEach(function (l) {
      (l.blocks || []).forEach(function (b, i) {
        if (b.type !== 'script') return;
        var id = 'ls-' + l.id + '-' + i;
        if (seen[id]) return;
        cards.push(normalizeCard({
          id: id, label: b.label, situation: b.situation,
          module: l._moduleId, body: b.body, tags: []
        }));
      });
    });
    PLAYBOOK = cards;
    return true;
  }
  function normalizeCard (s) {
    return {
      id: s.id || ('pb-' + Math.random().toString(36).slice(2)),
      label: s.label || 'Script',
      situation: s.situation || '',
      module: s.module || s.moduleId || '',
      tags: s.tags || [],
      body: s.body || ''
    };
  }

  /* ============================================================ PROGRESS MATH */
  function lessonDone (id) { return !!(store.progress[id] && store.progress[id].completed); }
  function moduleStats (m) {
    var lessons = m.lessons || [];
    var done = 0;
    lessons.forEach(function (l) { if (lessonDone(l.id)) done++; });
    var pct = lessons.length ? (done / lessons.length) * 100 : 0;
    return { done: done, total: lessons.length, pct: clampPct(pct) };
  }
  function overallStats () {
    var total = ALL_LESSONS.length, done = 0;
    ALL_LESSONS.forEach(function (l) { if (lessonDone(l.id)) done++; });
    return { done: done, total: total, pct: total ? clampPct((done / total) * 100) : 0 };
  }
  function allModulesComplete () {
    return MODULES.every(function (m) { return moduleStats(m).done === (m.lessons || []).length && (m.lessons || []).length > 0; });
  }
  function examPassed () { return !!store.exam.passedAt; }
  function certEarned () { return allModulesComplete() && examPassed(); }
  function firstIncompleteLesson () {
    for (var i = 0; i < ALL_LESSONS.length; i++) {
      if (!lessonDone(ALL_LESSONS[i].id)) return ALL_LESSONS[i];
    }
    return ALL_LESSONS[0] || null;
  }
  function nextRecommendedModule () {
    for (var i = 0; i < MODULES.length; i++) {
      var s = moduleStats(MODULES[i]);
      if (s.done < s.total) return MODULES[i];
    }
    return MODULES[MODULES.length - 1];
  }

  /* ============================================================ ROUTER */
  var app = $('#app');
  var ROUTES = {};
  function parseHash () {
    var h = (location.hash || '#/').replace(/^#/, '');
    if (!h || h === '/') return { name: 'home', parts: [] };
    var parts = h.split('/').filter(Boolean);
    return { name: parts[0], parts: parts.slice(1) };
  }
  function navigate (hash) { location.hash = hash; }
  function render () {
    var r = parseHash();
    var fn = ROUTES[r.name] || ROUTES.home;
    // Manager-only gating: dashboard requires manager role view
    if (r.name === 'dashboard' && store.user.role !== 'manager') {
      // allow viewing but flip the role for convenience
    }
    teardownMotion();
    app.innerHTML = '';
    var node = fn(r.parts);
    if (node) app.appendChild(node);
    syncHeader();
    window.scrollTo(0, 0);
    setupMotion(r.name);
    setActiveNav(r.name);
  }
  function setActiveNav (name) {
    $$('#headNav a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-route') === name);
    });
  }

  /* ============================================================ HEADER SYNC */
  var RING_C = 2 * Math.PI * 15.5; // mini ring circumference
  function syncHeader () {
    var o = overallStats();
    var arc = $('#miniRingArc');
    if (arc) {
      arc.setAttribute('stroke-dasharray', RING_C.toFixed(1));
      arc.setAttribute('stroke-dashoffset', (RING_C * (1 - o.pct / 100)).toFixed(1));
    }
    var pct = $('#miniRingPct'); if (pct) pct.textContent = o.pct + '%';
    var dash = $('#navDash');
    if (dash) dash.textContent = store.user.role === 'manager' ? 'Dashboard' : 'Dashboard';
    $('#roleLearner').setAttribute('aria-pressed', store.user.role !== 'manager');
    $('#roleManager').setAttribute('aria-pressed', store.user.role === 'manager');
  }

  /* ============================================================ TOAST */
  var toastTimer = null;
  function toast (msg) {
    var t = $('#toast');
    t.innerHTML = ICON.check + '<span>' + esc(msg) + '</span>';
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  /* ============================================================ DOM build util */
  function el (html) {
    var d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstElementChild;
  }
  function frag (html) {
    var d = document.createElement('div');
    d.innerHTML = html;
    var f = document.createDocumentFragment();
    while (d.firstChild) f.appendChild(d.firstChild);
    return f;
  }

  /* ============================================================ HOME VIEW */
  ROUTES.home = function () {
    var o = overallStats();
    var resumeLesson = firstIncompleteLesson();
    var resumeAllDone = o.done === o.total && o.total > 0;
    var view = el('<div class="view"></div>');

    /* hero */
    var hero = el(
      '<section class="hero" id="homeHero" aria-label="Academy intro">' +
        '<canvas id="heroParticles" aria-hidden="true"></canvas>' +
        '<div class="hero-vignette" aria-hidden="true"></div>' +
        '<div class="hero-in">' +
          '<div class="hero-copy">' +
            '<p class="hero-label"><span class="pk">▲</span> IronPeak Sales Academy</p>' +
            '<h1 class="hero-h1">The $20,000 training. <span class="accent">Free.</span></h1>' +
            '<p class="hero-sub">The field-tested IronPeak sales doctrine — diagnosis, offer, the phone, quoting, closing, referrals — as an interactive program you can <b>read, watch, or listen to</b>. Track your progress, drill the scripts, earn your certification.</p>' +
            '<div class="hero-ctas">' +
              '<button class="btn btn-primary mag" id="resumeBtn">' + (resumeAllDone ? 'Review the program' : (o.done > 0 ? 'Resume training' : 'Start training')) + ' ' + ICON.arr + '</button>' +
              '<a class="btn btn-ghost mag" href="#/playbook">Field Playbook ' + ICON.arr + '</a>' +
            '</div>' +
            '<p class="hero-meta">' +
              '<span><b>' + MODULES.length + '</b> modules</span>' +
              '<span><b>' + ALL_LESSONS.length + '</b> lessons</span>' +
              '<span><b>Read</b> · Watch · Listen</span>' +
              '<span><b>' + (certEarned() ? 'Certified' : o.pct + '% complete') + '</b></span>' +
            '</p>' +
          '</div>' +
          '<div class="hero-stage">' +
            '<div id="logo-stage" role="img" aria-label="The IronPeak mark"><img src="../../assets/logo.svg" alt="" style="width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 18px 50px rgba(30,127,255,.28))" loading="eager" decoding="async"></div>' +
            '<div class="ring-wrap">' +
              '<svg viewBox="0 0 120 120" aria-hidden="true">' +
                '<circle cx="60" cy="60" r="52" fill="none" stroke="#23272e" stroke-width="6"/>' +
                '<circle id="heroRingArc" cx="60" cy="60" r="52" fill="none" stroke="#1E7FFF" stroke-width="6" stroke-linecap="round" stroke-dasharray="' + (2 * Math.PI * 52).toFixed(1) + '" stroke-dashoffset="' + (2 * Math.PI * 52).toFixed(1) + '" transform="rotate(-90 60 60)"/>' +
              '</svg>' +
              '<div class="ring-center"><span class="ring-pct" id="heroRingPct">0%</span><span class="ring-cap">Overall</span></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
    view.appendChild(hero);

    /* body */
    var body = el('<div class="wrap pad-top pad-bottom"></div>');

    /* ascent map */
    body.appendChild(el('<p class="sec-label"><span class="lab-n">01</span> The Ascent — your 7-module climb</p>'));
    var ascent = el('<div class="ascent"><div class="ascent-track" id="ascentTrack"><div class="ascent-line" aria-hidden="true"><span class="fill" id="ascentFill"></span></div></div></div>');
    var track = $('.ascent-track', ascent);
    var rec = nextRecommendedModule();
    MODULES.forEach(function (m) {
      var s = moduleStats(m);
      var state = s.done === s.total && s.total > 0 ? 'done' : (m.id === rec.id ? 'active' : 'todo');
      var row = el(
        '<div class="ascent-row" data-state="' + state + '" data-mod="' + esc(m.id) + '" role="link" tabindex="0" aria-label="' + esc(m.title) + ', ' + s.pct + ' percent complete">' +
          '<div class="ascent-node"><span class="dot">' + (state === 'done' ? ICON.check : esc(m.num)) + '</span></div>' +
          '<div class="ascent-card">' +
            '<div class="ac-main">' +
              '<p class="ac-tag">Module ' + esc(m.num) + (state === 'active' ? ' · Recommended next' : '') + '</p>' +
              '<h3>' + esc(m.title) + '</h3>' +
              '<p class="ac-sum">' + esc(m.tagline || m.summary || '') + '</p>' +
            '</div>' +
            '<div class="ac-prog" data-done="' + (state === 'done') + '">' +
              '<span class="ac-state" data-s="' + state + '">' + (state === 'done' ? 'Complete' : state === 'active' ? 'In progress' : 'Not started') + '</span>' +
              '<span class="ac-pct">' + s.pct + '%</span>' +
              '<span class="ac-bar"><i style="width:' + s.pct + '%"></i></span>' +
              '<span class="ac-meta">' + s.done + '/' + s.total + ' · ' + (m.estMinutes || '~') + ' min</span>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
      var go = function () { navigate('#/module/' + m.id); };
      $('.ascent-card', row).addEventListener('click', go);
      row.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
      track.appendChild(row);
    });
    body.appendChild(ascent);

    /* tiles */
    body.appendChild(el('<p class="sec-label" style="margin-top:3.5rem"><span class="lab-n">02</span> Reference &amp; certification</p>'));
    var tiles = el('<div class="tiles"></div>');
    var tileDefs = [
      { route: '#/playbook', ico: ICON.book, h: 'Field Playbook', p: PLAYBOOK.length + ' copy-ready scripts, searchable by situation.', badge: '' },
      { route: '#/numbers', ico: ICON.hash, h: 'Numbers Reference', p: 'Verified kit economics + the margin & floor logic.', badge: 'Verified' },
      { route: '#/exam', ico: ICON.cert, h: 'Certification Exam', p: 'Cumulative exam across all modules. 80% to pass.', badge: examPassed() ? 'Passed' : '' },
      { route: '#/dashboard', ico: ICON.grid, h: 'Manager Dashboard', p: 'Team roster, completion heat, certifications.', badge: '' }
    ];
    tileDefs.forEach(function (t) {
      var tile = el(
        '<a class="tile" href="' + t.route + '">' +
          (t.badge ? '<span class="t-badge ' + (t.badge === 'Verified' || t.badge === 'Passed' ? 'ok' : '') + '">' + esc(t.badge) + '</span>' : '') +
          '<span class="t-ico" aria-hidden="true">' + t.ico + '</span>' +
          '<h4>' + esc(t.h) + '</h4><p>' + esc(t.p) + '</p>' +
          '<span class="t-go">Open ' + ICON.arr + '</span>' +
        '</a>'
      );
      tiles.appendChild(tile);
    });
    body.appendChild(tiles);

    /* certificate teaser */
    if (certEarned()) {
      var teaser = el('<div style="margin-top:2rem"><a class="btn btn-primary mag" href="#/certificate">View your certificate ' + ICON.arr + '</a></div>');
      body.appendChild(teaser);
    }

    view.appendChild(body);

    /* wire resume */
    setTimeout(function () {
      var rb = $('#resumeBtn', view);
      if (rb) rb.addEventListener('click', function () {
        if (resumeAllDone) { navigate('#/exam'); return; }
        if (resumeLesson) navigate('#/lesson/' + resumeLesson.id);
      });
    }, 0);

    return view;
  };

  /* ============================================================ MODULE VIEW */
  ROUTES.module = function (parts) {
    var m = MODULE_BY_ID[parts[0]];
    if (!m) return notFound('Module not found');
    var s = moduleStats(m);
    var view = el('<div class="view wrap pad-top pad-bottom"></div>');
    view.appendChild(crumbs([['#/', 'Academy'], [null, 'Module ' + m.num]]));

    var head = el(
      '<div class="mod-head">' +
        '<div>' +
          '<p class="sec-label"><span class="lab-n">' + esc(String(m.num).padStart(2, '0')) + '</span> Module ' + esc(m.num) + '</p>' +
          '<h1 class="mod-h1">' + esc(m.title) + '</h1>' +
          '<p class="mod-tagline">' + esc(m.tagline || '') + '</p>' +
          '<p class="mod-summary lead">' + esc(m.summary || '') + '</p>' +
        '</div>' +
        '<aside class="mod-aside">' +
          '<div class="ma-row"><span class="ma-k">Progress</span><span class="ma-v"><em>' + s.pct + '%</em> · ' + s.done + '/' + s.total + '</span></div>' +
          '<div class="ma-row"><span class="ma-k">Lessons</span><span class="ma-v">' + s.total + '</span></div>' +
          '<div class="ma-row"><span class="ma-k">Est. time</span><span class="ma-v">' + esc(m.estMinutes || '~') + ' min</span></div>' +
          '<div class="ma-row"><span class="ma-k">Knowledge check</span><span class="ma-v">' + ((m.moduleQuiz && m.moduleQuiz.length) ? m.moduleQuiz.length + ' Qs' : '—') + '</span></div>' +
        '</aside>' +
      '</div>'
    );
    view.appendChild(head);

    var list = el('<ol class="lesson-list" aria-label="Lessons in this module"></ol>');
    (m.lessons || []).forEach(function (l) {
      var done = lessonDone(l.id);
      var li = el(
        '<li class="lesson-item" data-done="' + done + '" data-lesson="' + esc(l.id) + '" tabindex="0" role="link" aria-label="Lesson ' + esc(l.num) + ': ' + esc(l.title) + (done ? ', complete' : '') + '">' +
          '<span class="lesson-check" aria-hidden="true">' + ICON.check + '</span>' +
          '<span class="lesson-num">' + esc(l.num) + '</span>' +
          '<span class="lesson-main"><h4>' + esc(l.title) + '</h4>' + (l.subtitle ? '<p>' + esc(l.subtitle) + '</p>' : '') + '</span>' +
          '<span class="lesson-time">' + esc(l.estMinutes || '~') + ' min</span>' +
          '<span class="lesson-arr" aria-hidden="true">' + ICON.arr + '</span>' +
        '</li>'
      );
      var go = function () { navigate('#/lesson/' + l.id); };
      li.addEventListener('click', go);
      li.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
      list.appendChild(li);
    });
    view.appendChild(list);

    /* module knowledge check */
    if (m.moduleQuiz && m.moduleQuiz.length) {
      view.appendChild(el('<p class="sec-label" style="margin-top:3rem"><span class="lab-n">QC</span> Module ' + esc(m.num) + ' knowledge check</p>'));
      view.appendChild(buildQuiz(m.moduleQuiz, {
        scope: 'module', moduleId: m.id, title: m.title
      }));
    }

    /* module nav */
    var idx = MODULES.indexOf(m);
    var nav = el('<div class="lf-nav" style="margin-top:3rem"></div>');
    if (idx > 0) {
      var pm = MODULES[idx - 1];
      nav.appendChild(el('<a href="#/module/' + pm.id + '"><span class="ln-k">← Prev module</span><span class="ln-t">' + esc(pm.title) + '</span></a>'));
    }
    if (idx < MODULES.length - 1) {
      var nm = MODULES[idx + 1];
      nav.appendChild(el('<a class="ln-next" href="#/module/' + nm.id + '"><span class="ln-k">Next module →</span><span class="ln-t">' + esc(nm.title) + '</span></a>'));
    } else {
      nav.appendChild(el('<a class="ln-next" href="#/exam"><span class="ln-k">Next →</span><span class="ln-t">Certification Exam</span></a>'));
    }
    view.appendChild(nav);
    return view;
  };

  /* ============================================================ LESSON VIEW */
  ROUTES.lesson = function (parts) {
    var l = LESSON_BY_ID[parts[0]];
    if (!l) return notFound('Lesson not found');
    var m = MODULE_BY_ID[l._moduleId];
    var flatIdx = ALL_LESSONS.indexOf(l);
    var prev = ALL_LESSONS[flatIdx - 1];
    var next = ALL_LESSONS[flatIdx + 1];
    var view = el('<div class="view wrap pad-top pad-bottom"></div>');
    view.appendChild(crumbs([['#/', 'Academy'], ['#/module/' + m.id, 'Module ' + m.num], [null, 'Lesson ' + l.num]]));

    var shell = el('<article class="lesson-shell"></article>');
    shell.appendChild(el(
      '<header>' +
        '<p class="sec-label"><span class="lab-n">' + esc(l.num) + '</span> ' + esc(m.title) + '</p>' +
        '<h1 class="lesson-h1">' + esc(l.title) + '</h1>' +
        (l.subtitle ? '<p class="lesson-sub">' + esc(l.subtitle) + '</p>' : '') +
      '</header>'
    ));

    /* mode toggle */
    var pref = store.prefs.mode || 'read';
    var toggle = el(
      '<div class="mode-toggle" role="tablist" aria-label="Learning mode">' +
        '<button role="tab" data-mode="read" aria-pressed="' + (pref === 'read') + '">' + ICON.read + ' Read</button>' +
        '<button role="tab" data-mode="watch" aria-pressed="' + (pref === 'watch') + '">' + ICON.watch + ' Watch</button>' +
        '<button role="tab" data-mode="listen" aria-pressed="' + (pref === 'listen') + '">' + ICON.listen + ' Listen</button>' +
      '</div>'
    );
    shell.appendChild(toggle);

    var bodyWrap = el('<div class="lesson-body" id="lessonBody"></div>');
    shell.appendChild(bodyWrap);

    /* per-lesson quiz (optional) — under the content */
    function renderMode (mode) {
      store.prefs.mode = mode; saveStore();
      $$('.mode-toggle button', shell).forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.mode === mode); });
      bodyWrap.innerHTML = '';
      if (mode === 'read') {
        (l.blocks || []).forEach(function (b) { bodyWrap.appendChild(renderBlock(b, l)); });
      } else if (mode === 'watch') {
        bodyWrap.appendChild(renderWatch(l));
        // Read remains the source of truth — show a hint linking back
        bodyWrap.appendChild(el('<p class="media-note">The full written lesson is always available under <b>Read</b> — every word of the value lives there.</p>'));
      } else {
        bodyWrap.appendChild(renderListen(l));
        bodyWrap.appendChild(el('<p class="media-note">The full written lesson is always available under <b>Read</b>.</p>'));
      }
      if (hasST && !reduced) setupLessonReveals(bodyWrap);
    }

    $$('.mode-toggle button', toggle).forEach(function (b) {
      b.addEventListener('click', function () { renderMode(b.dataset.mode); });
    });

    /* footer: per-lesson quiz + complete + nav */
    var foot = el('<footer class="lesson-foot"></footer>');
    if (l.quiz && l.quiz.length) {
      foot.appendChild(el('<p class="sec-label"><span class="lab-n">QC</span> Quick check</p>'));
      foot.appendChild(buildQuiz(l.quiz, { scope: 'lesson', lessonId: l.id, title: l.title }));
    }

    var done = lessonDone(l.id);
    var completeRow = el('<div class="lf-complete"></div>');
    function renderCompleteRow () {
      completeRow.innerHTML = '';
      if (lessonDone(l.id)) {
        completeRow.appendChild(el('<span class="lf-done-tag">' + ICON.check + ' Lesson complete</span>'));
        if (next) {
          var nb = el('<button class="btn btn-primary mag">Continue ' + ICON.arr + '</button>');
          nb.addEventListener('click', function () { navigate('#/lesson/' + next.id); });
          completeRow.appendChild(nb);
        } else {
          var eb = el('<a class="btn btn-primary mag" href="#/exam">To the Certification Exam ' + ICON.arr + '</a>');
          completeRow.appendChild(eb);
        }
      } else {
        var cb = el('<button class="btn btn-primary mag">Mark complete &amp; continue ' + ICON.arr + '</button>');
        cb.addEventListener('click', function () {
          markComplete(l.id, store.prefs.mode || 'read');
          toast('Lesson ' + l.num + ' complete');
          if (next) navigate('#/lesson/' + next.id);
          else { renderCompleteRow(); syncHeader(); maybeCelebrateModule(m); }
        });
        completeRow.appendChild(cb);
      }
    }
    renderCompleteRow();
    foot.appendChild(completeRow);

    var nav = el('<div class="lf-nav"></div>');
    if (prev) nav.appendChild(el('<a href="#/lesson/' + prev.id + '"><span class="ln-k">← Previous</span><span class="ln-t">' + esc(prev.num + ' · ' + prev.title) + '</span></a>'));
    if (next) nav.appendChild(el('<a class="ln-next" href="#/lesson/' + next.id + '"><span class="ln-k">Next →</span><span class="ln-t">' + esc(next.num + ' · ' + next.title) + '</span></a>'));
    foot.appendChild(nav);

    shell.appendChild(foot);
    view.appendChild(shell);

    renderMode(pref);
    return view;
  };

  function markComplete (lessonId, mode) {
    store.progress[lessonId] = { completed: true, completedAt: Date.now(), mode: mode };
    saveStore();
    writeProgress({ type: 'lesson_completed', ref: lessonId, mode: mode, occurredAt: Date.now() });
  }
  function maybeCelebrateModule (m) {
    var s = moduleStats(m);
    if (s.done === s.total && s.total > 0) {
      toast('Module ' + m.num + ' complete — ' + m.title);
      celebrate();
    }
  }

  /* ============================================================ BLOCK RENDERER */
  function renderBlock (b, lesson) {
    switch (b.type) {
      case 'prose':
        return el('<div class="blk blk-prose">' + markPlaceholders(b.html || '') + '</div>');
      case 'principle':
        return el('<div class="blk blk-principle">' + (b.title ? '<p class="blk-t">' + esc(b.title) + '</p>' : '') + markPlaceholders(b.html || '') + '</div>');
      case 'callout': {
        var tone = (b.tone === 'warning' || b.tone === 'guardrail') ? b.tone : 'info';
        return el(
          '<div class="blk callout tone-' + tone + '">' +
            '<span class="co-ico" aria-hidden="true">' + (ICON[tone] || ICON.info) + '</span>' +
            '<div>' + (b.title ? '<p class="blk-t">' + esc(b.title) + '</p>' : '') + markPlaceholders(b.html || '') + '</div>' +
          '</div>'
        );
      }
      case 'list': {
        var ordered = b.style === 'ordered';
        var tag = ordered ? 'ol' : 'ul';
        var items = (b.items || []).map(function (it) { return '<li>' + markPlaceholders(it) + '</li>'; }).join('');
        return el('<div class="blk blk-list ' + (ordered ? 'ordered' : 'bullet') + '"><' + tag + '>' + items + '</' + tag + '></div>');
      }
      case 'table': {
        var head = (b.head || []).map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('');
        var rows = (b.rows || []).map(function (r) {
          return '<tr>' + r.map(function (c, i) {
            // first cell of each row as row-header for a11y
            return i === 0 ? '<th scope="row" style="font-weight:600;color:var(--ink)">' + markPlaceholders(c) + '</th>' : '<td>' + markPlaceholders(c) + '</td>';
          }).join('') + '</tr>';
        }).join('');
        return el('<div class="blk blk-table"><table><thead><tr>' + head + '</tr></thead><tbody>' + rows + '</tbody></table></div>');
      }
      case 'script':
        return renderScriptCard(b);
      case 'example':
        return el('<div class="blk blk-example">' + (b.title ? '<p class="blk-t">' + esc(b.title) + '</p>' : '') + markPlaceholders(b.html || '') + '</div>');
      case 'keytakeaways': {
        var lis = (b.items || []).map(function (it) { return '<li>' + markPlaceholders(it) + '</li>'; }).join('');
        return el('<div class="blk blk-kt"><p class="blk-t">' + ICON.spark + ' Key takeaways</p><ul>' + lis + '</ul></div>');
      }
      case 'interactive':
        return renderInteractive(b, lesson);
      default:
        return el('<div class="blk blk-prose">' + markPlaceholders(b.html || '') + '</div>');
    }
  }

  function renderScriptCard (b) {
    var card = el(
      '<div class="blk blk-script">' +
        '<div class="sc-head">' +
          '<div>' +
            '<span class="sc-label">' + esc(b.label || 'Script') + '</span>' +
            (b.situation ? '<div class="sc-sit">' + esc(b.situation) + '</div>' : '') +
          '</div>' +
          '<button class="copy-btn" type="button">' + ICON.copy + ' Copy</button>' +
        '</div>' +
        '<div class="sc-body">' + markPlaceholders(b.body || '') + '</div>' +
      '</div>'
    );
    wireCopy($('.copy-btn', card), $('.sc-body', card));
    return card;
  }
  function wireCopy (btn, sourceEl) {
    if (!btn) return;
    btn.addEventListener('click', function () {
      var text = toPlainText(sourceEl.innerHTML);
      var done = function () {
        btn.classList.add('copied');
        btn.innerHTML = ICON.check + ' Copied';
        setTimeout(function () { btn.classList.remove('copied'); btn.innerHTML = ICON.copy + ' Copy'; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
      } else { fallbackCopy(text); done(); }
    });
  }
  function fallbackCopy (text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
    } catch (e) { /* no-op */ }
  }

  /* ============================================================ WATCH / LISTEN */
  function renderWatch (l) {
    var v = l.video || {};
    if (v.url) {
      var poster = v.poster ? ' poster="' + esc(v.poster) + '"' : '';
      return el('<div class="media-frame"><video class="media-video" controls preload="metadata"' + poster + ' src="' + esc(v.url) + '">' + esc(v.caption || '') + '</video></div>');
    }
    if (v.embed) {
      return el('<div class="media-frame"><div style="aspect-ratio:16/9"><iframe src="' + esc(v.embed) + '" title="' + esc(v.caption || 'Lesson video') + '" style="width:100%;height:100%;border:0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div></div>');
    }
    return el(
      '<div class="media-frame"><div class="media-placeholder">' +
        '<span class="mp-ico" aria-hidden="true">' + ICON.watch + '</span>' +
        '<h4>Video lesson coming soon</h4>' +
        '<p>' + esc(v.caption || 'A guided walkthrough is in production.') + ' When it ships, this slot becomes the player automatically — adding it is a one-field edit (<code>video.url</code> in the lesson data).</p>' +
      '</div></div>'
    );
  }

  function renderListen (l) {
    var a = l.audio || {};
    if (!a.url) {
      return el(
        '<div class="audio-player is-placeholder">' +
          '<div class="ap-top">' +
            '<button class="ap-play" type="button" disabled aria-label="Audio coming soon">' + ICON.play + '</button>' +
            '<div class="ap-mid">' +
              '<div class="ap-cap">Audio version coming soon — listen on the go</div>' +
              '<div class="ap-scrub"><input type="range" min="0" max="100" value="0" disabled aria-label="Audio scrubber (disabled)"><span class="ap-time">0:00</span></div>' +
            '</div>' +
            '<button class="ap-speed" type="button" disabled>1×</button>' +
          '</div>' +
          '<p class="media-note">' + esc(a.caption || 'For the truck.') + ' Drop in <code>audio.url</code> and this becomes a real player.</p>' +
        '</div>'
      );
    }
    var player = el(
      '<div class="audio-player">' +
        '<div class="ap-top">' +
          '<button class="ap-play" type="button" aria-label="Play">' + ICON.play + '</button>' +
          '<div class="ap-mid">' +
            '<div class="ap-cap">' + esc(a.caption || 'Listen') + '</div>' +
            '<div class="ap-scrub"><input type="range" min="0" max="1000" value="0" aria-label="Audio position"><span class="ap-time">0:00</span></div>' +
          '</div>' +
          '<button class="ap-speed" type="button" aria-label="Playback speed">1×</button>' +
        '</div>' +
      '</div>'
    );
    var audio = new Audio(a.url);
    audio.preload = 'metadata';
    var playBtn = $('.ap-play', player);
    var scrub = $('.ap-scrub input', player);
    var timeEl = $('.ap-time', player);
    var speedBtn = $('.ap-speed', player);
    var speeds = [1, 1.5]; var si = 0;
    var fmtT = function (t) { t = Math.max(0, t | 0); return (t / 60 | 0) + ':' + ('0' + (t % 60)).slice(-2); };
    playBtn.addEventListener('click', function () {
      if (audio.paused) { audio.play(); playBtn.innerHTML = ICON.pause; playBtn.setAttribute('aria-label', 'Pause'); }
      else { audio.pause(); playBtn.innerHTML = ICON.play; playBtn.setAttribute('aria-label', 'Play'); }
    });
    speedBtn.addEventListener('click', function () { si = (si + 1) % speeds.length; audio.playbackRate = speeds[si]; speedBtn.textContent = speeds[si] + '×'; });
    audio.addEventListener('timeupdate', function () {
      if (audio.duration) { scrub.value = String((audio.currentTime / audio.duration) * 1000 | 0); scrub.style.setProperty('--p', ((audio.currentTime / audio.duration) * 100) + '%'); }
      timeEl.textContent = fmtT(audio.currentTime);
    });
    audio.addEventListener('ended', function () { playBtn.innerHTML = ICON.play; playBtn.setAttribute('aria-label', 'Play'); });
    scrub.addEventListener('input', function () { if (audio.duration) audio.currentTime = (scrub.value / 1000) * audio.duration; });
    // dispose when the view tears down
    motionCleanups.push(function () { try { audio.pause(); audio.src = ''; } catch (e) {} });
    return player;
  }

  /* ============================================================ INTERACTIVES */
  function renderInteractive (b, lesson) {
    var kind = b.kind || (b.data && b.data.kind);
    var data = b.data || {};
    if (kind === 'value-equation') return ixValueEquation(data);
    if (kind === 'buyer-types') return ixBuyerTypes(data);
    if (kind === 'objection-trainer') return ixObjectionTrainer(data);
    if (kind === 'margin-explainer') return ixMarginExplainer(data);
    // unknown interactive — graceful note
    return el('<div class="blk ix"><p class="ix-head">' + ICON.spark + ' Interactive</p><p class="ix-intro">' + esc((data && data.intro) || 'Interactive exercise.') + '</p></div>');
  }

  /* --- Value Equation (handles both author variants: id/moves and key/detail) */
  function ixValueEquation (data) {
    var levers = (data.levers || []).map(function (lv) {
      return {
        id: lv.id || lv.key || lv.label,
        label: lv.label || '',
        direction: lv.direction || 'up',
        short: lv.short || '',
        detail: lv.detail || lv.moves || ''
      };
    });
    var wrap = el(
      '<div class="blk ix">' +
        '<p class="ix-head">' + ICON.spark + ' ' + esc(data.title || 'The Value Equation') + '</p>' +
        (data.intro ? '<p class="ix-intro">' + esc(data.intro) + '</p>' : '') +
        (data.formula ? '<p class="ve-formula">' + esc(data.formula) + '</p>' : '<p class="ve-formula">Value = (Dream Outcome × Likelihood) ÷ (Time × Effort)</p>') +
        '<div class="ve-levers" role="group" aria-label="Value levers"></div>' +
        '<div class="ve-meter"><div class="vm-cap"><span>Perceived value</span><b class="vm-val">Low</b></div><div class="ve-bar"><i></i></div></div>' +
        (data.note ? '<p class="ve-note">' + esc(data.note) + '</p>' : '') +
      '</div>'
    );
    var host = $('.ve-levers', wrap);
    var bar = $('.ve-bar i', wrap);
    var valLabel = $('.vm-val', wrap);
    var active = {};
    levers.forEach(function (lv) {
      var btn = el(
        '<button class="ve-lever" type="button" data-dir="' + esc(lv.direction) + '" aria-pressed="false">' +
          '<span class="vl-label">' + esc(lv.label) + '<span class="vl-dir">' + (lv.direction === 'up' ? 'Raises ↑' : 'Lowers ↓') + '</span></span>' +
          (lv.short ? '<span class="vl-short">' + esc(lv.short) + '</span>' : '') +
          (lv.detail ? '<span class="vl-detail">' + esc(lv.detail) + '</span>' : '') +
        '</button>'
      );
      btn.addEventListener('click', function () {
        var on = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', String(!on));
        active[lv.id] = !on;
        updateMeter();
      });
      host.appendChild(btn);
    });
    function updateMeter () {
      var count = 0; levers.forEach(function (lv) { if (active[lv.id]) count++; });
      var pct = levers.length ? 8 + (count / levers.length) * 92 : 8;
      bar.style.width = clampPct(pct) + '%';
      var label = count === 0 ? 'Low' : count >= levers.length ? 'Maxed' : count >= 2 ? 'Strong' : 'Rising';
      valLabel.textContent = label;
    }
    updateMeter();
    return wrap;
  }

  /* --- Buyer-Types trainer (read scenario, pick type, feedback w/ lever+why) */
  function ixBuyerTypes (data) {
    var scenarios = data.scenarios || [];
    // derive the option set from the scenarios' types (+ pretty labels)
    var TYPE_LABELS = {
      hassle: 'Hassle / cheapest', status: 'Status / keep-up', maximalist: 'Holiday maximalist',
      tech: 'Tech buyer', 'new-build': 'New-build owner'
    };
    var types = [];
    scenarios.forEach(function (s) { if (types.indexOf(s.type) < 0) types.push(s.type); });
    var i = 0, score = 0, answered = false;
    var wrap = el(
      '<div class="blk ix">' +
        '<p class="ix-head">' + ICON.spark + ' Buyer-Types Trainer</p>' +
        (data.intro ? '<p class="ix-intro">' + esc(data.intro) + '</p>' : '') +
        '<p class="drill-progress"></p>' +
        '<p class="drill-quote"></p>' +
        '<div class="drill-opts" role="group" aria-label="Pick the buyer type"></div>' +
        '<div class="drill-feedback" hidden></div>' +
        '<div class="drill-actions"></div>' +
      '</div>'
    );
    var progEl = $('.drill-progress', wrap);
    var quoteEl = $('.drill-quote', wrap);
    var optsEl = $('.drill-opts', wrap);
    var fbEl = $('.drill-feedback', wrap);
    var actEl = $('.drill-actions', wrap);

    function renderScenario () {
      answered = false;
      var s = scenarios[i];
      progEl.textContent = 'Caller ' + (i + 1) + ' of ' + scenarios.length + ' · Score ' + score + '/' + scenarios.length;
      quoteEl.textContent = s.quote;
      optsEl.innerHTML = ''; fbEl.hidden = true; actEl.innerHTML = '';
      types.forEach(function (t) {
        var b = el('<button class="drill-opt" type="button" data-type="' + esc(t) + '">' + esc(TYPE_LABELS[t] || t) + '</button>');
        b.addEventListener('click', function () { pick(t, b); });
        optsEl.appendChild(b);
      });
    }
    function pick (t, btn) {
      if (answered) return;
      answered = true;
      var s = scenarios[i];
      var correct = t === s.type;
      if (correct) score++;
      $$('.drill-opt', optsEl).forEach(function (o) {
        o.setAttribute('disabled', 'true');
        if (o.dataset.type === s.type) o.setAttribute('data-state', 'correct');
        else if (o === btn) o.setAttribute('data-state', 'wrong');
      });
      fbEl.className = 'drill-feedback ' + (correct ? 'ok' : 'no');
      fbEl.hidden = false;
      fbEl.innerHTML =
        '<p class="df-verdict">' + (correct ? '✓ Right — ' + (TYPE_LABELS[s.type] || s.type) : '✕ It’s the ' + (TYPE_LABELS[s.type] || s.type)) + '</p>' +
        '<div class="df-block"><p class="df-k">The lever</p><p class="df-v">' + markPlaceholders(esc(s.lever)) + '</p></div>' +
        '<div class="df-block"><p class="df-k">Why it works</p><p class="df-v">' + esc(s.why) + '</p></div>';
      actEl.innerHTML = '';
      if (i < scenarios.length - 1) {
        var nb = el('<button class="btn btn-primary btn-sm mag">Next caller ' + ICON.arr + '</button>');
        nb.addEventListener('click', function () { i++; renderScenario(); });
        actEl.appendChild(nb);
      } else {
        actEl.appendChild(el('<p class="drill-progress" style="margin:0">Drill complete — ' + score + '/' + scenarios.length + ' correct. Train your ear until it’s automatic.</p>'));
        var rb = el('<button class="btn btn-ghost btn-sm">Run again</button>');
        rb.addEventListener('click', function () { i = 0; score = 0; renderScenario(); });
        actEl.appendChild(rb);
      }
    }
    renderScenario();
    return wrap;
  }

  /* --- Objection trainer (pick objection → reveal move + script + principle) */
  function ixObjectionTrainer (data) {
    var objs = data.objections || [];
    var wrap = el(
      '<div class="blk ix">' +
        '<p class="ix-head">' + ICON.spark + ' Objection Trainer — Drill</p>' +
        (data.intro ? '<p class="ix-intro">' + esc(data.intro) + '</p>' : '') +
        '<div class="drill-opts" role="group" aria-label="Pick the objection"></div>' +
        '<div class="drill-feedback" hidden></div>' +
      '</div>'
    );
    var optsEl = $('.drill-opts', wrap);
    var fbEl = $('.drill-feedback', wrap);
    objs.forEach(function (o, idx) {
      var b = el('<button class="drill-opt" type="button" data-i="' + idx + '">“' + esc(o.objection) + '”</button>');
      b.addEventListener('click', function () { reveal(idx, b); });
      optsEl.appendChild(b);
    });
    function reveal (idx, btn) {
      var o = objs[idx];
      $$('.drill-opt', optsEl).forEach(function (x) { x.removeAttribute('data-state'); });
      btn.setAttribute('data-state', 'reveal');
      fbEl.className = 'drill-feedback ok';
      fbEl.hidden = false;
      fbEl.innerHTML =
        '<p class="df-verdict">The move on “' + esc(o.objection) + '”</p>' +
        (o.move ? '<div class="df-block"><p class="df-k">The move</p><p class="df-v">' + markPlaceholders(esc(o.move)) + '</p></div>' : '') +
        (o.script ? '<div class="df-block"><p class="df-k">The script <button class="copy-btn" type="button" data-copy>' + ICON.copy + ' Copy</button></p><p class="df-v df-script">' + markPlaceholders(esc(o.script)) + '</p></div>' : '') +
        (o.principle ? '<div class="df-block"><p class="df-k">The principle</p><p class="df-v">' + markPlaceholders(esc(o.principle)) + '</p></div>' : '');
      var cb = $('[data-copy]', fbEl);
      if (cb) wireCopy(cb, $('.df-script', fbEl));
    }
    return wrap;
  }

  /* --- Margin / Floor explainer (read-only verified-cost visual) */
  function ixMarginExplainer (data) {
    var kits = data.kits || [];
    var rates = data.rates || [{ rate: 25, label: '$25/ft (floor)', isFloor: true }, { rate: 30, label: '$30/ft' }, { rate: 32, label: '$32/ft' }, { rate: 35, label: '$35/ft' }];
    var floor = data.floor || 25;
    // pick a default rate (first non-floor, else first)
    var defIdx = 0; for (var k = 0; k < rates.length; k++) { if (!rates[k].isFloor) { defIdx = k; break; } }
    var curRate = rates[defIdx].rate;

    var wrap = el(
      '<div class="blk ix">' +
        '<p class="ix-head">' + ICON.spark + ' ' + esc(data.title || 'Material Margin & Floor') + '</p>' +
        (data.subtitle ? '<p class="ix-intro">' + esc(data.subtitle) + '</p>' : '') +
        '<div class="mx-rates" role="group" aria-label="Customer rate"></div>' +
        (data.note ? '<p class="mx-note">' + esc(data.note) + '</p>' : '') +
        '<div class="mx-bars"></div>' +
        '<div class="mx-link"><a class="btn btn-ghost btn-sm mag" href="' + esc(data.calculatorUrl || 'https://ironpeaklighting.com/pages/profit-calculator') + '" target="_blank" rel="noopener">Open the live profit calculator ' + ICON.arr + '</a></div>' +
      '</div>'
    );
    var ratesEl = $('.mx-rates', wrap);
    var barsEl = $('.mx-bars', wrap);
    rates.forEach(function (r) {
      var b = el('<button class="mx-rate" type="button" data-rate="' + r.rate + '" data-floor="' + (!!r.isFloor) + '" aria-pressed="' + (r.rate === curRate) + '">' + esc(r.label || ('$' + r.rate + '/ft')) + '</button>');
      b.addEventListener('click', function () { curRate = r.rate; $$('.mx-rate', ratesEl).forEach(function (x) { x.setAttribute('aria-pressed', String(+x.dataset.rate === curRate)); }); drawBars(); });
      ratesEl.appendChild(b);
    });
    function drawBars () {
      barsEl.innerHTML = '';
      kits.forEach(function (kit) {
        var cost = kit.costPerFt != null ? kit.costPerFt : (kit.price && kit.feet ? kit.price / kit.feet : 0);
        var costPct = curRate > 0 ? clampPct((cost / curRate) * 100) : 0;
        var marginPct = clampPct(100 - costPct);
        var floorPctOfRate = curRate > 0 ? clampPct((floor / curRate) * 100) : 0;
        var bar = el(
          '<div class="mx-kit">' +
            '<div class="mk-head"><span class="mk-name">' + esc(kit.label) + '</span><span class="mk-cost">$' + cost.toFixed(2) + '/ft cost · $' + curRate + '/ft rate · ' + marginPct + '% material margin</span></div>' +
            '<div class="mx-track">' +
              '<div class="mx-cost-fill" style="width:' + costPct + '%"><span class="mx-lbl">Cost $' + cost.toFixed(2) + '</span></div>' +
              '<div class="mx-margin-fill"><span class="mx-lbl">Margin ' + marginPct + '%</span></div>' +
              (curRate > floor ? '<span class="mx-floor" style="left:' + floorPctOfRate + '%"></span>' : '') +
            '</div>' +
          '</div>'
        );
        barsEl.appendChild(bar);
      });
    }
    drawBars();
    return wrap;
  }

  /* ============================================================ QUIZ ENGINE */
  function buildQuiz (questions, ctx) {
    var passMark = 80;
    var state = []; // selected index per q
    var graded = false;
    var wrap = el('<div class="quiz" role="form" aria-label="' + esc((ctx.title || 'Knowledge') + ' quiz') + '"></div>');
    questions.forEach(function (q, qi) {
      state[qi] = -1;
      var qEl = el(
        '<fieldset class="quiz-q" style="border:none;padding:0;margin-bottom:1.8rem">' +
          '<p class="qq-n">Question ' + (qi + 1) + ' of ' + questions.length + '</p>' +
          '<legend class="qq-text" style="padding:0">' + esc(q.q) + '</legend>' +
          '<div class="quiz-choices"></div>' +
          '<p class="quiz-explain"><b>Why:</b> ' + esc(q.explain || '') + '</p>' +
        '</fieldset>'
      );
      var choicesEl = $('.quiz-choices', qEl);
      (q.choices || []).forEach(function (ch, ci) {
        var b = el('<button class="quiz-choice" type="button" role="radio" aria-checked="false" aria-pressed="false"><span class="qc-key">' + String.fromCharCode(65 + ci) + '</span><span>' + esc(ch) + '</span></button>');
        b.addEventListener('click', function () {
          if (graded) return;
          state[qi] = ci;
          $$('.quiz-choice', choicesEl).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); x.setAttribute('aria-checked', 'false'); });
          b.setAttribute('aria-pressed', 'true'); b.setAttribute('aria-checked', 'true');
        });
        choicesEl.appendChild(b);
      });
      wrap.appendChild(qEl);
    });

    var foot = el('<div class="quiz-foot"></div>');
    var submitBtn = el('<button class="btn btn-primary mag" type="button">Submit answers</button>');
    var scoreEl = el('<span class="quiz-score" hidden></span>');
    var retryBtn = el('<button class="btn btn-ghost btn-sm" type="button" hidden>Retake</button>');
    foot.appendChild(submitBtn); foot.appendChild(scoreEl); foot.appendChild(retryBtn);
    wrap.appendChild(foot);

    // restore prior best display
    var prior = priorScore(ctx);
    if (prior) {
      var pr = el('<p class="ac-meta" style="margin-top:.8rem;width:100%">Best so far: ' + prior.best + '/' + prior.total + (prior.passedAt ? ' · passed ✓' : '') + '</p>');
      foot.appendChild(pr);
    }

    submitBtn.addEventListener('click', function () {
      if (graded) return;
      var unanswered = state.indexOf(-1);
      if (unanswered >= 0) { toast('Answer all questions first'); $$('.quiz-q', wrap)[unanswered].scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); return; }
      graded = true;
      var correct = 0;
      $$('.quiz-q', wrap).forEach(function (qEl, qi) {
        var q = questions[qi];
        var choices = $$('.quiz-choice', qEl);
        choices.forEach(function (c) { c.classList.add('locked'); c.setAttribute('disabled', 'true'); });
        if (state[qi] === q.answer) correct++;
        choices.forEach(function (c, ci) {
          if (ci === q.answer) c.setAttribute('data-res', ci === state[qi] ? 'correct' : 'missed');
          else if (ci === state[qi]) c.setAttribute('data-res', 'incorrect');
        });
        $('.quiz-explain', qEl).classList.add('show');
      });
      var pct = Math.round((correct / questions.length) * 100);
      var passed = pct >= passMark;
      scoreEl.hidden = false;
      scoreEl.className = 'quiz-score ' + (passed ? 'pass' : 'fail');
      scoreEl.innerHTML = pct + '%<small>' + correct + '/' + questions.length + ' · ' + (passed ? 'Passed (≥80%)' : 'Below 80% — retake') + '</small>';
      submitBtn.hidden = true; retryBtn.hidden = false;
      recordScore(ctx, correct, questions.length, passed);
      if (passed) { toast('Passed — ' + pct + '%'); if (ctx.scope === 'exam') { celebrate(); } }
      syncHeader();
    });

    retryBtn.addEventListener('click', function () {
      graded = false;
      state = state.map(function () { return -1; });
      $$('.quiz-q', wrap).forEach(function (qEl) {
        $$('.quiz-choice', qEl).forEach(function (c) { c.classList.remove('locked'); c.removeAttribute('disabled'); c.removeAttribute('data-res'); c.setAttribute('aria-pressed', 'false'); c.setAttribute('aria-checked', 'false'); });
        $('.quiz-explain', qEl).classList.remove('show');
      });
      scoreEl.hidden = true; submitBtn.hidden = false; retryBtn.hidden = true;
      wrap.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    });

    return wrap;
  }
  function priorScore (ctx) {
    if (ctx.scope === 'module') return store.quiz[ctx.moduleId] || null;
    if (ctx.scope === 'exam') return store.exam.total ? { best: store.exam.best, total: store.exam.total, passedAt: store.exam.passedAt } : null;
    return null;
  }
  function recordScore (ctx, correct, total, passed) {
    if (ctx.scope === 'module') {
      var prev = store.quiz[ctx.moduleId] || { best: 0, total: total, attempts: 0, passedAt: null };
      store.quiz[ctx.moduleId] = {
        best: Math.max(prev.best || 0, correct),
        total: total,
        attempts: (prev.attempts || 0) + 1,
        passedAt: prev.passedAt || (passed ? Date.now() : null)
      };
      writeProgress({ type: passed ? 'quiz_passed' : 'quiz_attempted', ref: ctx.moduleId, score: correct, total: total, passed: passed, occurredAt: Date.now() });
    } else if (ctx.scope === 'exam') {
      var pe = store.exam;
      store.exam = {
        best: Math.max(pe.best || 0, correct),
        total: total,
        passedAt: pe.passedAt || (passed ? Date.now() : null)
      };
      writeProgress({ type: passed ? 'quiz_passed' : 'quiz_attempted', ref: 'exam', score: correct, total: total, passed: passed, occurredAt: Date.now() });
      maybeIssueCert();
    }
    saveStore();
  }

  /* ============================================================ FIELD PLAYBOOK */
  ROUTES.playbook = function () {
    var view = el('<div class="view wrap pad-top pad-bottom"></div>');
    view.appendChild(crumbs([['#/', 'Academy'], [null, 'Field Playbook']]));
    view.appendChild(el('<p class="sec-label"><span class="lab-n">PB</span> Field Playbook</p>'));
    view.appendChild(el('<h1 class="mod-h1">Every script. <span class="accent">Copy-ready.</span></h1>'));
    view.appendChild(el('<p class="lead" style="margin-top:1rem">The full library of field scripts, tagged by module and situation. Search it, filter it, copy it. The words are yours to adapt — the framework is the asset.</p>'));

    var controls = el(
      '<div class="pb-controls" style="margin-top:2rem">' +
        '<label class="pb-search">' + ICON.search + '<input type="search" placeholder="Search scripts, situations, tags…" aria-label="Search the playbook"></label>' +
      '</div>'
    );
    var filters = el('<div class="pb-filters" role="group" aria-label="Filter by module"></div>');
    var moduleFilters = [{ id: '', label: 'All' }].concat(MODULES.map(function (m) { return { id: m.id, label: 'M' + m.num }; }));
    var activeFilter = '';
    moduleFilters.forEach(function (f) {
      var b = el('<button class="pb-filter" type="button" data-f="' + esc(f.id) + '" aria-pressed="' + (f.id === '') + '">' + esc(f.label) + '</button>');
      b.addEventListener('click', function () {
        activeFilter = f.id;
        $$('.pb-filter', filters).forEach(function (x) { x.setAttribute('aria-pressed', String(x.dataset.f === activeFilter)); });
        renderCards();
      });
      filters.appendChild(b);
    });
    controls.appendChild(filters);
    view.appendChild(controls);

    var grid = el('<div class="pb-grid"></div>');
    view.appendChild(grid);
    var searchEl = $('.pb-search input', controls);
    var q = '';
    searchEl.addEventListener('input', function () { q = searchEl.value.toLowerCase().trim(); renderCards(); });

    function moduleLabel (id) { var m = MODULE_BY_ID[id]; return m ? 'Module ' + m.num : ''; }
    function renderCards () {
      grid.innerHTML = '';
      var list = PLAYBOOK.filter(function (c) {
        if (activeFilter && c.module !== activeFilter) return false;
        if (!q) return true;
        var hay = (c.label + ' ' + c.situation + ' ' + (c.tags || []).join(' ') + ' ' + toPlainText(c.body) + ' ' + moduleLabel(c.module)).toLowerCase();
        return hay.indexOf(q) >= 0;
      });
      if (!list.length) { grid.appendChild(el('<div class="pb-empty">No scripts match — try a different word or clear the filter.</div>')); return; }
      list.forEach(function (c) {
        var card = el(
          '<div class="pb-card">' +
            '<div class="pc-head"><div><div class="pc-label">' + esc(c.label) + '</div>' + (c.situation ? '<div class="pc-sit">' + esc(c.situation) + '</div>' : '') + '</div>' +
              '<button class="copy-btn" type="button">' + ICON.copy + ' Copy</button></div>' +
            '<div class="pc-body">' + markPlaceholders(c.body) + '</div>' +
            '<div class="pc-foot"><div class="pb-tags">' +
              (c.module ? '<span class="pb-tag">' + esc(moduleLabel(c.module)) + '</span>' : '') +
              (c.tags || []).slice(0, 4).map(function (t) { return '<span class="pb-tag">' + esc(t) + '</span>'; }).join('') +
            '</div></div>' +
          '</div>'
        );
        wireCopy($('.copy-btn', card), $('.pc-body', card));
        grid.appendChild(card);
      });
    }
    renderCards();
    return view;
  };

  /* ============================================================ NUMBERS REFERENCE */
  ROUTES.numbers = function () {
    var view = el('<div class="view wrap pad-top pad-bottom"></div>');
    view.appendChild(crumbs([['#/', 'Academy'], [null, 'Numbers Reference']]));
    view.appendChild(el('<p class="sec-label"><span class="lab-n">#</span> Numbers Reference</p>'));
    view.appendChild(el('<h1 class="mod-h1">The economics, <span class="accent">verified.</span></h1>'));
    view.appendChild(el('<p class="lead" style="margin-top:1rem">The kit costs below are exact (Shopify, Jun 2026). The rate guidance is the doctrine’s taught range; teaching figures are marked as examples to set your own.</p>'));
    view.appendChild(el('<p class="num-verified" style="margin-top:1.4rem">' + ICON.guardrail + ' Verified — Shopify, Jun 2026</p>'));

    // VERIFIED kit economics (exact per §0)
    var KITS = [
      { ft: 100, price: '$1,299', perft: '$12.99', name: 'Roofline Kit' },
      { ft: 150, price: '$1,762.50', perft: '$11.75', name: 'Roofline Kit' },
      { ft: 200, price: '$2,399', perft: '$12.00', name: 'Roofline Kit' },
      { ft: 300, price: '$3,499', perft: '$11.66', name: 'Full-Perimeter Kit' },
      { ft: 25, price: '$299', perft: '$11.96', name: 'Add-on (no PSU)' },
      { ft: 50, price: '$499', perft: '$9.98', name: 'Add-on (no PSU)' }
    ];
    var grid = el('<div class="num-grid"></div>');
    KITS.forEach(function (k) {
      grid.appendChild(el(
        '<div class="num-card">' +
          '<div class="nc-ft">' + k.ft + '<small> FT</small></div>' +
          '<div class="nc-name">' + esc(k.name) + '</div>' +
          '<div class="nc-row"><span class="nc-k">List price</span><span class="nc-v">' + k.price + '</span></div>' +
          '<div class="nc-row"><span class="nc-k">Material cost / ft</span><span class="nc-v"><em>' + k.perft + '</em></span></div>' +
        '</div>'
      ));
    });
    view.appendChild(grid);

    // The margin / rate logic
    view.appendChild(el('<p class="sec-label" style="margin-top:1rem"><span class="lab-n">B</span> The rate logic (taught guidance)</p>'));
    view.appendChild(el(
      '<div class="quiz" style="max-width:760px">' +
        '<div class="ma-row" style="display:flex;justify-content:space-between;padding:.7rem 0;border-bottom:1px solid var(--line-soft)"><span class="ma-k">Typical installed rate</span><span class="ma-v"><em>$30–32 / ft</em></span></div>' +
        '<div class="ma-row" style="display:flex;justify-content:space-between;padding:.7rem 0;border-bottom:1px solid var(--line-soft)"><span class="ma-k">Universal floor</span><span class="ma-v"><em>$25 / ft</em></span></div>' +
        '<div class="ma-row" style="display:flex;justify-content:space-between;padding:.7rem 0"><span class="ma-k">Your personal hard line</span><span class="ma-v">≥ floor (never shown to a customer)</span></div>' +
        '<p style="margin-top:1rem;font-size:.86rem;color:var(--body)">Material-only margin = (rate − material cost) ÷ rate — gross-of-labor, never net. Dealer-tier volume discounts only push margins higher. The full margin-by-rate visual lives inside <a class="ulink" href="#/module/m4">Module 4 — Quoting</a>.</p>' +
        '<p style="margin-top:1rem;font-size:.82rem;color:var(--dim)"><span class="figure-note" title="example — set your own / confirm">Payback figures, full-wrap ceilings, and the $35 rate</span> are teaching examples — confirm or set your own. Hard-line minimum is never revealed to customers.</p>' +
      '</div>'
    ));

    view.appendChild(el('<div style="margin-top:2rem"><a class="btn btn-primary mag" href="https://ironpeaklighting.com/pages/profit-calculator" target="_blank" rel="noopener">Run the live profit calculator ' + ICON.arr + '</a></div>'));
    return view;
  };

  /* ============================================================ EXAM */
  ROUTES.exam = function () {
    var view = el('<div class="view wrap pad-top pad-bottom"></div>');
    view.appendChild(crumbs([['#/', 'Academy'], [null, 'Certification Exam']]));
    view.appendChild(el('<p class="sec-label"><span class="lab-n">EX</span> Certification Exam</p>'));
    view.appendChild(el('<h1 class="mod-h1">Prove it. <span class="accent">Get certified.</span></h1>'));

    var examQs = buildExamQuestions();
    var intro = el(
      '<div class="exam-intro">' +
        '<p>A cumulative exam drawn from every module. You need <b>80%</b> to pass. Combined with completing all ' + MODULES.length + ' modules, passing issues your certificate.</p>' +
        '<div class="exam-stat">' +
          '<div><div class="es-v">' + examQs.length + '</div><div class="es-k">Questions</div></div>' +
          '<div><div class="es-v">80%</div><div class="es-k">To pass</div></div>' +
          '<div><div class="es-v ' + (allModulesComplete() ? 'pass' : '') + '">' + overallStats().pct + '%</div><div class="es-k">Modules done</div></div>' +
          '<div><div class="es-v ' + (examPassed() ? 'pass' : '') + '">' + (examPassed() ? 'Passed' : (store.exam.total ? Math.round((store.exam.best / store.exam.total) * 100) + '%' : '—') ) + '</div><div class="es-k">Best exam</div></div>' +
        '</div>' +
      '</div>'
    );
    view.appendChild(intro);

    if (!allModulesComplete()) {
      view.appendChild(el('<div class="callout tone-info" style="max-width:760px;margin-bottom:2rem"><span class="co-ico" aria-hidden="true">' + ICON.info + '</span><div><p class="blk-t">Tip</p><p>You can take the exam any time, but the certificate also requires all modules complete. ' + (overallStats().total - overallStats().done) + ' lessons to go. <a class="ulink" href="#/' + (firstIncompleteLesson() ? 'lesson/' + firstIncompleteLesson().id : '') + '">Resume where you left off →</a></p></div></div>'));
    }

    view.appendChild(buildQuiz(examQs, { scope: 'exam', title: 'Certification Exam' }));

    if (certEarned()) {
      view.appendChild(el('<div style="margin-top:2rem"><a class="btn btn-primary mag" href="#/certificate">View your certificate ' + ICON.arr + '</a></div>'));
    }
    return view;
  };

  function buildExamQuestions () {
    // Cumulative: pull module quiz questions across all modules, capped & stable.
    var pool = [];
    MODULES.forEach(function (m) {
      (m.moduleQuiz || []).forEach(function (q) { pool.push(q); });
    });
    // Cap to a sensible exam length; take a spread across modules.
    var MAX = 12;
    if (pool.length <= MAX) return pool;
    var step = pool.length / MAX, out = [];
    for (var i = 0; i < MAX; i++) out.push(pool[Math.floor(i * step)]);
    return out;
  }

  /* ============================================================ CERTIFICATE */
  function maybeIssueCert () {
    if (certEarned() && !store.cert.issued) {
      store.cert = { issued: true, issuedAt: Date.now(), name: store.user.name || 'IronPeak Dealer' };
      saveStore();
      writeProgress({ type: 'certified', ref: 'cert', score: store.exam.best, total: store.exam.total, occurredAt: Date.now() });
    }
  }
  ROUTES.certificate = function () {
    maybeIssueCert();
    var view = el('<div class="view wrap pad-top pad-bottom"></div>');
    view.appendChild(crumbs([['#/', 'Academy'], [null, 'Certificate']]));

    if (!certEarned()) {
      var mc = allModulesComplete(), ep = examPassed();
      view.appendChild(el('<p class="sec-label"><span class="lab-n">★</span> Certification</p>'));
      var locked = el(
        '<div class="cert-locked">' +
          '<h2 class="mod-h1">Almost there.</h2>' +
          '<p class="lead" style="margin:1rem auto 0;max-width:46ch">Two requirements unlock your certificate:</p>' +
          '<div class="cert-req">' +
            '<div class="cert-req-item" data-ok="' + mc + '"><span class="cri-ck">' + ICON.check + '</span><span>Complete all ' + MODULES.length + ' modules' + (mc ? '' : ' (' + (overallStats().total - overallStats().done) + ' lessons left)') + '</span></div>' +
            '<div class="cert-req-item" data-ok="' + ep + '"><span class="cri-ck">' + ICON.check + '</span><span>Pass the Certification Exam (≥80%)</span></div>' +
          '</div>' +
          '<div style="margin-top:2rem;display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">' +
            (mc ? '' : '<a class="btn btn-ghost mag" href="#/' + (firstIncompleteLesson() ? 'lesson/' + firstIncompleteLesson().id : '') + '">Resume training ' + ICON.arr + '</a>') +
            (ep ? '' : '<a class="btn btn-primary mag" href="#/exam">Take the exam ' + ICON.arr + '</a>') +
          '</div>' +
        '</div>'
      );
      view.appendChild(locked);
      return view;
    }

    var name = store.cert.name || store.user.name || 'IronPeak Dealer';
    var company = store.user.company || '';
    var dateStr = new Date(store.cert.issuedAt || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    var certId = 'IPA-' + (store.cert.issuedAt || Date.now()).toString(36).toUpperCase().slice(-6);

    var wrap = el('<div class="cert-wrap"></div>');
    wrap.appendChild(el('<p class="sec-label" style="justify-content:center"><span class="lab-n">★</span> Certified</p>'));
    var cert = el(
      '<div class="certificate" id="certCard">' +
        '<img class="cert-mark" src="../../assets/logo.svg" alt="" aria-hidden="true">' +
        '<p class="cert-kicker">IronPeak Sales Academy</p>' +
        '<h2 class="cert-title">Certificate of Completion</h2>' +
        '<p class="cert-presented">This certifies that</p>' +
        '<p class="cert-name">' + esc(name) + '</p>' +
        (company ? '<p class="cert-company">' + esc(company) + '</p>' : '') +
        '<p class="cert-body">has completed the full IronPeak Sales Doctrine — diagnosis, offer, the phone, quoting, closing, and the referral flywheel — and passed the cumulative certification exam at the mastery standard.</p>' +
        '<div class="cert-foot">' +
          '<div><div class="cf-v">' + esc(dateStr) + '</div><div class="cf-k">Date issued</div></div>' +
          '<div class="cert-seal" aria-hidden="true">IRON<br>PEAK<br>★</div>' +
          '<div><div class="cf-v">' + esc(certId) + '</div><div class="cf-k">Credential ID</div></div>' +
        '</div>' +
      '</div>'
    );
    wrap.appendChild(cert);
    var actions = el(
      '<div class="cert-actions" style="margin-top:1.6rem;display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">' +
        '<button class="btn btn-primary mag" id="printCert">Print / Save PDF ' + ICON.arr + '</button>' +
        '<a class="btn btn-ghost mag" href="#/">Back to Academy ' + ICON.arr + '</a>' +
      '</div>'
    );
    wrap.appendChild(actions);
    view.appendChild(wrap);

    setTimeout(function () {
      var pc = $('#printCert', view); if (pc) pc.addEventListener('click', function () { window.print(); });
      certReveal(cert);
    }, 0);
    return view;
  };

  function certReveal (cert) {
    if (!hasGsap || reduced) return;
    // Defensive: clearProps on complete so a stalled rAF / interrupted tween can
    // NEVER leave the certificate hidden; the resting CSS state is fully visible.
    var parts = $$('.cert-kicker,.cert-title,.cert-presented,.cert-name,.cert-company,.cert-body,.cert-foot,.cert-mark', cert);
    var tl = gsap.timeline({
      onComplete: function () { gsap.set(cert, { clearProps: 'opacity,visibility,transform' }); gsap.set(parts, { clearProps: 'opacity,visibility,transform' }); },
      onInterrupt: function () { gsap.set(cert, { clearProps: 'opacity,visibility,transform' }); gsap.set(parts, { clearProps: 'opacity,visibility,transform' }); }
    });
    tl.from(cert, { autoAlpha: 0, y: 30, scale: 0.96, duration: 0.8, ease: 'power3.out' })
      .from($$('.cert-kicker,.cert-title,.cert-presented', cert), { autoAlpha: 0, y: 16, stagger: 0.08, duration: 0.5 }, '-=0.3')
      .from($('.cert-name', cert), { autoAlpha: 0, scale: 0.9, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.1')
      .from($$('.cert-body,.cert-foot', cert), { autoAlpha: 0, y: 14, stagger: 0.1, duration: 0.5 }, '-=0.2');
    // Hard safety net: if the tween hasn't progressed within ~1.5s of wall-clock
    // (e.g. rAF throttled in a background tab), force the visible end-state.
    setTimeout(function () {
      if (tl.progress() < 1) { tl.progress(1); gsap.set(cert, { clearProps: 'opacity,visibility,transform' }); gsap.set(parts, { clearProps: 'opacity,visibility,transform' }); }
    }, 1600);
    celebrate();
  }

  /* ============================================================ DASHBOARD */
  ROUTES.dashboard = function () {
    // Switching to dashboard implies a manager wants to see it
    if (store.user.role !== 'manager') { store.user.role = 'manager'; saveStore(); syncHeader(); }
    var roster = getRoster();
    var view = el('<div class="view wrap pad-top pad-bottom"></div>');
    view.appendChild(crumbs([['#/', 'Academy'], [null, 'Manager Dashboard']]));
    view.appendChild(el('<p class="sec-label"><span class="lab-n">MD</span> Manager Dashboard</p>'));
    view.appendChild(el('<h1 class="mod-h1">The team, <span class="accent">at a glance.</span></h1>'));
    view.appendChild(el('<p class="lead" style="margin-top:1rem">Roster of your dealers with per-module progress, quiz scores, certification status, and last activity. The local learner (you) is live; the rest is sample team data.</p>'));

    /* rollups */
    var avg = Math.round(roster.reduce(function (a, r) { return a + r.overall; }, 0) / roster.length);
    var certified = roster.filter(function (r) { return r.certified; }).length;
    var activeWeek = roster.filter(function (r) { return (Date.now() - r.lastActive) < 7 * 864e5; }).length;
    var rollups = el(
      '<div class="dash-rollups">' +
        '<div class="roll"><div class="r-v accent">' + avg + '%</div><div class="r-k">Avg completion</div></div>' +
        '<div class="roll"><div class="r-v">' + certified + '<span style="font-size:.5em;color:var(--steel-3)"> / ' + roster.length + '</span></div><div class="r-k">Certified</div></div>' +
        '<div class="roll"><div class="r-v">' + activeWeek + '</div><div class="r-k">Active this week</div></div>' +
        '<div class="roll"><div class="r-v">' + roster.length + '</div><div class="r-k">Dealers</div></div>' +
      '</div>'
    );
    view.appendChild(rollups);

    /* per-module heat */
    var heat = el('<div class="heat-wrap"><h4>Module-by-module completion</h4><div class="heat"></div></div>');
    var heatGrid = $('.heat', heat);
    MODULES.forEach(function (m) {
      var pcts = roster.map(function (r) { return r.modules[m.id] != null ? r.modules[m.id] : 0; });
      var mavg = Math.round(pcts.reduce(function (a, b) { return a + b; }, 0) / pcts.length);
      var hue = mavg >= 75 ? '55,211,155' : mavg >= 40 ? '30,127,255' : '112,135,165';
      heatGrid.appendChild(el(
        '<div class="heat-row">' +
          '<span class="hr-lbl">M' + m.num + ' · ' + esc((m.title || '').split('—')[0].trim()) + '</span>' +
          '<div class="heat-cell" style="width:' + Math.max(8, mavg) + '%;background:linear-gradient(90deg,rgba(' + hue + ',.5),rgba(' + hue + ',.18))">' + mavg + '%</div>' +
        '</div>'
      ));
    });
    view.appendChild(heat);

    /* tools: search + filter */
    var tools = el(
      '<div class="dash-tools">' +
        '<label class="pb-search">' + ICON.search + '<input type="search" placeholder="Search dealers…" aria-label="Search dealers"></label>' +
        '<button class="pb-filter" type="button" data-cf="all" aria-pressed="true">All</button>' +
        '<button class="pb-filter" type="button" data-cf="certified" aria-pressed="false">Certified</button>' +
        '<button class="pb-filter" type="button" data-cf="active" aria-pressed="false">Active this week</button>' +
        '<button class="pb-filter" type="button" data-cf="stalled" aria-pressed="false">Stalled (&lt;30%)</button>' +
      '</div>'
    );
    view.appendChild(tools);

    /* roster table */
    var tableWrap = el('<div class="roster-wrap"></div>');
    view.appendChild(tableWrap);

    var sortKey = 'overall', sortDir = -1, query = '', cfilter = 'all';
    function rosterFiltered () {
      var list = roster.filter(function (r) {
        if (cfilter === 'certified' && !r.certified) return false;
        if (cfilter === 'active' && (Date.now() - r.lastActive) >= 7 * 864e5) return false;
        if (cfilter === 'stalled' && r.overall >= 30) return false;
        if (query && (r.name + ' ' + r.company).toLowerCase().indexOf(query) < 0) return false;
        return true;
      });
      list.sort(function (a, b) {
        var av = a[sortKey], bv = b[sortKey];
        if (sortKey === 'name' || sortKey === 'company') { av = String(av).toLowerCase(); bv = String(bv).toLowerCase(); return av < bv ? -sortDir : av > bv ? sortDir : 0; }
        return (av - bv) * sortDir;
      });
      return list;
    }
    function drawTable () {
      var list = rosterFiltered();
      var cols = [
        { k: 'name', label: 'Dealer' }, { k: 'company', label: 'Company' },
        { k: 'overall', label: 'Overall' }, { k: 'examPct', label: 'Exam' },
        { k: 'certified', label: 'Cert' }, { k: 'lastActive', label: 'Last active' }
      ];
      var head = cols.map(function (c) {
        var sortAttr = sortKey === c.k ? (sortDir === 1 ? 'ascending' : 'descending') : 'none';
        return '<th data-k="' + c.k + '" aria-sort="' + sortAttr + '" scope="col">' + esc(c.label) + '<span class="sort-ind"></span></th>';
      }).join('');
      var rows = list.map(function (r) {
        return '<tr>' +
          '<td><span class="r-name">' + esc(r.name) + '</span>' + (r.isLocal ? '<span class="r-you">You</span>' : '') + '</td>' +
          '<td>' + esc(r.company) + '</td>' +
          '<td><span class="r-mini-bar"><i style="width:' + r.overall + '%"></i></span>' + r.overall + '%</td>' +
          '<td>' + (r.examPct ? r.examPct + '%' : '—') + '</td>' +
          '<td>' + (r.certified ? '<span class="r-cert yes">' + ICON.check + ' Yes</span>' : '<span class="r-cert no">No</span>') + '</td>' +
          '<td>' + relTime(r.lastActive) + '</td>' +
        '</tr>';
      }).join('');
      tableWrap.innerHTML = '<table class="roster"><thead><tr>' + head + '</tr></thead><tbody>' + rows + '</tbody></table>';
      $$('th', tableWrap).forEach(function (th) {
        th.addEventListener('click', function () {
          var k = th.dataset.k;
          if (sortKey === k) sortDir = -sortDir; else { sortKey = k; sortDir = (k === 'name' || k === 'company') ? 1 : -1; }
          drawTable();
        });
      });
    }
    $('.pb-search input', tools).addEventListener('input', function (e) { query = e.target.value.toLowerCase().trim(); drawTable(); });
    $$('[data-cf]', tools).forEach(function (b) {
      b.addEventListener('click', function () { cfilter = b.dataset.cf; $$('[data-cf]', tools).forEach(function (x) { x.setAttribute('aria-pressed', String(x.dataset.cf === cfilter)); }); drawTable(); });
    });
    drawTable();

    /* backend blueprint */
    view.appendChild(el(
      '<div class="dash-blueprint">' +
        '<h4>From demo to 2,000 dealers</h4>' +
        '<p>This roster is served by a single function — <code>getRoster()</code> in <code>app.js</code>. Swapping in a real backend is a one-function change: point it at Shopify customer metafields or a lightweight store (e.g. Supabase) that records <code>lesson_completed</code>, <code>quiz_passed</code>, and <code>certified</code> events per authenticated dealer. The rollups, heat map, sort and filter all read from whatever <code>getRoster()</code> returns. See <code>ACADEMY-BACKEND.md</code> for the full auth/role + events-API blueprint.</p>' +
      '</div>'
    ));
    return view;
  };

  function relTime (ts) {
    var d = Math.floor((Date.now() - ts) / 864e5);
    if (d <= 0) return 'Today';
    if (d === 1) return 'Yesterday';
    if (d < 7) return d + ' days ago';
    if (d < 30) return Math.floor(d / 7) + 'w ago';
    return Math.floor(d / 30) + 'mo ago';
  }

  /* ---- ROSTER SOURCE (swap this one function for a real backend) ---- */
  function getRoster () {
    var totalLessons = ALL_LESSONS.length || 1;
    // 14 seeded sample dealers + the live local learner
    var SAMPLE = [
      ['Marcus Bell', 'Bell Exterior Co.', 100, 96, true, 1],
      ['Dana Whitfield', 'Whitfield Lighting', 100, 92, true, 2],
      ['Reggie Okafor', 'Summit Glow LLC', 88, 83, false, 1],
      ['Tina Alvarez', 'Bright Ridge Pros', 76, 81, false, 3],
      ['Paul Chen', 'Northgate Lights', 71, 0, false, 4],
      ['Sondra Vance', 'Vance & Sons', 64, 78, false, 6],
      ['Kyle Brennan', 'Brennan Holiday', 58, 0, false, 2],
      ['Aisha Rahman', 'Lumen Trade Co.', 52, 73, false, 9],
      ['Joe Petrakis', 'Petrakis Roofworks', 43, 0, false, 12],
      ['Cole Dawson', 'Dawson Outdoor', 37, 0, false, 8],
      ['Mira Santos', 'Santos Custom', 29, 0, false, 18],
      ['Wes Calloway', 'Calloway Exteriors', 22, 0, false, 21],
      ['Nina Park', 'Parkway Lights', 14, 0, false, 27],
      ['Travis Hoyt', 'Hoyt Brothers', 6, 0, false, 33]
    ];
    var roster = SAMPLE.map(function (s, idx) {
      var overall = s[2];
      // synth per-module distribution that sums ~ to overall (deterministic)
      var mods = {};
      MODULES.forEach(function (m, mi) {
        var bias = overall - mi * 9;
        mods[m.id] = clampPct(Math.max(0, Math.min(100, bias + ((idx * 7 + mi * 13) % 17) - 8)));
      });
      return {
        id: 'd' + idx, name: s[0], company: s[1], overall: overall,
        examPct: s[3], certified: s[4], lastActive: Date.now() - s[5] * 864e5,
        modules: mods, isLocal: false
      };
    });
    // live local learner
    var o = overallStats();
    var myMods = {};
    MODULES.forEach(function (m) { myMods[m.id] = moduleStats(m).pct; });
    roster.push({
      id: 'local', name: (store.user.name || 'You'), company: (store.user.company || 'Your Company'),
      overall: o.pct, examPct: store.exam.total ? Math.round((store.exam.best / store.exam.total) * 100) : 0,
      certified: certEarned(), lastActive: Date.now(), modules: myMods, isLocal: true
    });
    return roster;
  }

  /* ============================================================ SHARED UI */
  function crumbs (items) {
    var html = items.map(function (it, i) {
      var sep = i < items.length - 1 ? '<span class="sep">/</span>' : '';
      return (it[0] ? '<a href="' + it[0] + '">' + esc(it[1]) + '</a>' : '<span>' + esc(it[1]) + '</span>') + sep;
    }).join('');
    return el('<nav class="crumbs" aria-label="Breadcrumb">' + html + '</nav>');
  }
  function notFound (msg) {
    return el('<div class="view wrap data-error"><h2>' + esc(msg) + '</h2><p style="margin-top:1rem"><a class="btn btn-ghost mag" href="#/">Back to Academy ' + ICON.arr + '</a></p></div>');
  }

  /* ============================================================ MOTION */
  var motionCleanups = [];
  var logoHandle = null;
  function teardownMotion () {
    motionCleanups.forEach(function (fn) { try { fn(); } catch (e) {} });
    motionCleanups = [];
    if (hasST) { ScrollTrigger.getAll().forEach(function (t) { t.kill(); }); }
    if (logoHandle && logoHandle.dispose) { try { logoHandle.dispose(); } catch (e) {} logoHandle = null; }
  }
  function setupMotion (routeName) {
    /* 3D spinning logo — Devan's full-mark GLB (2026-07-03). The static <img>
       in the home-view markup is the poster + fallback; logo3d.js hides it once
       the model mounts, and leaves it untouched on any failure. */
    if (routeName === 'home') {
      var stage = $('#logo-stage');
      if (stage) {
        import('../../logo3d.js').then(function (mod) {
          if ($('#logo-stage') !== stage) return; // view changed
          try { logoHandle = mod.initLogo3D(stage, { spinSpeed: 0.55 }); } catch (e) {}
        }).catch(function () { /* module/WebGL unavailable — static logo stays */ });
      }
      mountHeroParticles();
      animateHomeRings();
      animateAscent();
    }
    if (!reduced && hasGsap) animateViewIn();
    revealWatchdog();
  }
  function animateViewIn () {
    // light, universal: nothing heavy; the .view CSS handles base fade.
  }
  /* Safety net: if any GSAP `from(... autoAlpha:0 ...)` reveal fails to run
     (e.g. requestAnimationFrame throttled in a background tab), content would be
     left invisible. After a grace period, force-show anything still hidden by an
     inline GSAP autoAlpha so the page is NEVER stuck blank for a real user. */
  function revealWatchdog () {
    if (!hasGsap || reduced) return;
    setTimeout(function () {
      $$('#app [style]').forEach(function (node) {
        var st = node.style;
        if ((st.visibility === 'hidden' || parseFloat(st.opacity) === 0)) {
          // only clear if GSAP left it hidden (it sets visibility:hidden for autoAlpha)
          gsap.set(node, { clearProps: 'opacity,visibility' });
        }
      });
    }, 1800);
  }
  function animateHomeRings () {
    var o = overallStats();
    var arc = $('#heroRingArc'); var pctEl = $('#heroRingPct');
    if (!arc) return;
    var C = 2 * Math.PI * 52;
    if (reduced || !hasGsap) {
      arc.setAttribute('stroke-dashoffset', (C * (1 - o.pct / 100)).toFixed(1));
      if (pctEl) pctEl.textContent = o.pct + '%';
      return;
    }
    var finalOffset = C * (1 - o.pct / 100);
    gsap.fromTo(arc, { strokeDashoffset: C }, { strokeDashoffset: finalOffset, duration: 1.4, ease: 'power3.out' });
    var counter = { v: 0 };
    gsap.to(counter, { v: o.pct, duration: 1.4, ease: 'power3.out', onUpdate: function () { if (pctEl) pctEl.textContent = Math.round(counter.v) + '%'; } });
    // Safety: if rAF stalls (background tab), snap to the true final state so the
    // ring + number are never left mid-count.
    setTimeout(function () {
      if (pctEl && pctEl.textContent !== o.pct + '%') { pctEl.textContent = o.pct + '%'; arc.setAttribute('stroke-dashoffset', finalOffset.toFixed(1)); }
    }, 1700);
  }
  function animateAscent () {
    var fill = $('#ascentFill');
    var rows = $$('.ascent-row');
    if (!rows.length) return;
    // fill the climbing line to the proportion of done/active reached
    var lastLit = 0;
    rows.forEach(function (r, i) { if (r.getAttribute('data-state') !== 'todo') lastLit = i; });
    var pct = rows.length > 1 ? (lastLit / (rows.length - 1)) * 100 : 0;
    if (fill) {
      if (reduced || !hasGsap) fill.style.height = pct + '%';
      else gsap.fromTo(fill, { height: '0%' }, { height: pct + '%', duration: 1.2, ease: 'power2.inOut', delay: 0.2 });
    }
    if (hasST && !reduced) {
      rows.forEach(function (r, i) {
        gsap.from(r, { autoAlpha: 0, x: -18, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: r, start: 'top 92%', once: true }, delay: i * 0.02 });
      });
    }
  }
  function setupLessonReveals (scope) {
    if (!hasST || reduced) return;
    $$('.blk', scope).forEach(function (b) {
      gsap.from(b, { autoAlpha: 0, y: 24, duration: 0.7, ease: 'power3.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: b, start: 'top 90%', once: true } });
    });
  }

  /* ---- hero particle field (light Three.js; perf-capped; offscreen-pause) ---- */
  function mountHeroParticles () {
    var hero = $('#homeHero'); var canvas = $('#heroParticles');
    if (!hero || !canvas) return;
    if (reduced) { return; } // reduced motion: keep the static gradient hero
    import('three').then(function (THREE) {
      if ($('#heroParticles') !== canvas) return;
      var renderer;
      try { renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false, powerPreference: 'high-performance' }); }
      catch (e) { return; }
      var PR = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(PR);
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(55, 1, 0.1, 220); camera.position.set(0, 0, 52);
      var PEAKS = [[-34, 9.5, 17], [0, 15.5, 23], [34, 9.5, 17]];
      var ridgeY = function (x) { var y = 0.6; PEAKS.forEach(function (p) { y = Math.max(y, p[1] * (1 - Math.abs(x - p[0]) / p[2])); }); return y; };
      var mobile = window.matchMedia('(max-width:768px)').matches;
      var COUNT = mobile ? 1600 : 6000;
      var pos = new Float32Array(COUNT * 3), col = new Float32Array(COUNT * 3), siz = new Float32Array(COUNT), pha = new Float32Array(COUNT);
      for (var i = 0; i < COUNT; i++) {
        var x = (Math.random() * 2 - 1) * 62;
        var ry = ridgeY(x) + (Math.random() - 0.5) * 0.5;
        var onEdge = Math.random() < 0.4;
        var y = onEdge ? ry + (Math.random() - 0.5) * 0.9 : ry - Math.pow(Math.random(), 1.7) * (ry + 9);
        var z = (Math.random() * 2 - 1) * 9;
        pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
        var ice = Math.random() < 0.14;
        var mlt = onEdge ? 0.75 + Math.random() * 0.45 : 0.35 + Math.random() * 0.5;
        if (ice) { col[i * 3] = 0.85 * mlt; col[i * 3 + 1] = 0.92 * mlt; col[i * 3 + 2] = mlt; }
        else { col[i * 3] = 0.12 * mlt; col[i * 3 + 1] = 0.5 * mlt; col[i * 3 + 2] = mlt; }
        siz[i] = (onEdge ? 1.8 + Math.random() * 2.2 : 0.8 + Math.random() * 1.4) * (ice ? 1.3 : 1);
        pha[i] = Math.random() * Math.PI * 2;
      }
      var geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
      geo.setAttribute('aSize', new THREE.BufferAttribute(siz, 1));
      geo.setAttribute('aPhase', new THREE.BufferAttribute(pha, 1));
      var mat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uPR: { value: PR } },
        vertexShader: 'attribute float aSize;attribute float aPhase;attribute vec3 aColor;uniform float uTime;uniform float uPR;varying vec3 vColor;varying float vTw;void main(){vec3 p=position;p.y+=sin(uTime*0.55+aPhase)*0.4;p.x+=cos(uTime*0.35+aPhase*1.71)*0.3;vec4 mv=modelViewMatrix*vec4(p,1.0);gl_PointSize=aSize*uPR*(320.0/-mv.z);vColor=aColor;vTw=0.72+0.28*sin(uTime*0.9+aPhase*2.7);gl_Position=projectionMatrix*mv;}',
        fragmentShader: 'precision mediump float;varying vec3 vColor;varying float vTw;void main(){float d=length(gl_PointCoord-vec2(0.5));float a=smoothstep(0.5,0.04,d);a*=a;gl_FragColor=vec4(vColor*(1.05+0.5*vTw),a*(0.45+0.55*vTw));}',
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      var points = new THREE.Points(geo, mat); points.position.y = -20; scene.add(points);
      function size () { var w = canvas.clientWidth, h = canvas.clientHeight; if (w < 2 || h < 2) return; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
      size();
      var onScreen = true;
      var io = new IntersectionObserver(function (en) { onScreen = en[0].isIntersecting; }, { threshold: 0 });
      io.observe(canvas);
      var disposed = false;
      function draw (t) { camera.lookAt(0, -10, 0); mat.uniforms.uTime.value = t; renderer.render(scene, camera); }
      function loop (t) { if (disposed || document.hidden || !onScreen) return; draw(t); }
      draw(12.5);
      hero.classList.add('particles-ready');
      var onResize = function () { size(); };
      window.addEventListener('resize', onResize);
      if (hasGsap) gsap.ticker.add(loop2);
      function loop2 (t) { loop(t); }
      // cleanup on view change
      motionCleanups.push(function () {
        disposed = true; io.disconnect(); window.removeEventListener('resize', onResize);
        if (hasGsap) gsap.ticker.remove(loop2);
        geo.dispose(); mat.dispose(); renderer.dispose();
      });
    }).catch(function () { /* three unavailable — gradient hero stands */ });
  }

  /* ---- celebration: confetti-of-light ---- */
  function celebrate () {
    if (reduced) return;
    var host = $('#celebrate'); if (!host) return;
    // Hard cleanup: ensure no stray particle ever lingers (covers a stalled rAF).
    setTimeout(function () { while (host.firstChild) host.removeChild(host.firstChild); }, 2600);
    var N = 26;
    for (var i = 0; i < N; i++) {
      var dot = document.createElement('span');
      var size = 4 + Math.random() * 6;
      dot.style.cssText = 'position:absolute;top:46%;left:50%;width:' + size + 'px;height:' + size + 'px;border-radius:50%;background:' + (Math.random() < 0.5 ? '#1E7FFF' : '#b9d9ff') + ';box-shadow:0 0 12px rgba(30,127,255,.9);pointer-events:none;';
      host.appendChild(dot);
      if (hasGsap) {
        var ang = Math.random() * Math.PI * 2, dist = 120 + Math.random() * 320;
        gsap.to(dot, {
          x: Math.cos(ang) * dist, y: Math.sin(ang) * dist - 60, opacity: 0, scale: 0.2,
          duration: 1 + Math.random() * 0.8, ease: 'power2.out',
          onComplete: function () { if (this.targets()[0].parentNode) this.targets()[0].parentNode.removeChild(this.targets()[0]); }
        });
      } else {
        setTimeout((function (d) { return function () { if (d.parentNode) d.parentNode.removeChild(d); }; })(dot), 1200);
      }
    }
  }

  /* ============================================================ MAGNETIC BTNS */
  document.addEventListener('mousemove', function (e) {
    if (!finePointer || reduced || !hasGsap) return;
    var btn = e.target.closest && e.target.closest('.mag');
    if (!btn) return;
    var r = btn.getBoundingClientRect();
    gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.4, ease: 'power3.out' });
  });
  document.addEventListener('mouseout', function (e) {
    if (!finePointer || reduced || !hasGsap) return;
    var btn = e.target.closest && e.target.closest('.mag');
    if (btn && (!e.relatedTarget || !btn.contains(e.relatedTarget))) gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.45)' });
  });

  /* ============================================================ EMAIL + NAME GATE
     Email-gated per Devan (2026-07-02): the site academy is the lead-capture funnel
     (YouTube is the open one). GoHighLevel is the primary CRM (inbound-webhook
     workflow; automations key off `source`, and name/company enrich the contact).
     HubSpot kept as a dual-write backstop during the transition — delete its fetch
     to cut over. HubSpot payload stays email-only (that form rejects unknown
     fields). Progress, name, and certificate still live only on this device. */
  var GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/99eVuuXW11CRRtiGwcXE/webhook-trigger/5b7b3d77-8087-4f57-999f-a13bf0580e0c';
  var HS_PORTAL = '246087675';
  var HS_FORM = '227f991a-f1ea-478d-992f-c1b4efcf4959';
  var LEAD_KEY = 'ip_vault_unlock'; // shared lead state with the vault pages

  function showGate () {
    var overlay = el(
      '<div class="gate-overlay" role="dialog" aria-modal="true" aria-labelledby="gateTitle">' +
        '<form class="gate-card" id="gateForm">' +
          '<img src="../../assets/logo.svg" alt="" aria-hidden="true">' +
          '<h2 id="gateTitle">Welcome to the Academy</h2>' +
          '<p>The whole program is free — the price is an email. Your progress and certificate stay on this device; your email gets dealer resources and course updates.</p>' +
          '<div class="gate-field"><label for="gateEmail">Email</label><input id="gateEmail" type="email" autocomplete="email" placeholder="you@yourcompany.com" required></div>' +
          '<div class="gate-field"><label for="gateName">Your name</label><input id="gateName" type="text" autocomplete="name" placeholder="e.g. Jordan Avery" required></div>' +
          '<div class="gate-field"><label for="gateCompany">Company (optional)</label><input id="gateCompany" type="text" autocomplete="organization" placeholder="e.g. Avery Exteriors"></div>' +
          '<button class="btn btn-primary gate-go mag" type="submit">Enter the Academy →</button>' +
        '</form>' +
      '</div>'
    );
    document.body.appendChild(overlay);
    var emailInput = $('#gateEmail', overlay);
    setTimeout(function () { emailInput.focus(); }, 50);
    function finish (email, name, company) {
      store.user.name = (name || '').trim();
      store.user.company = (company || '').trim();
      store.user.email = (email || '').trim();
      store.user.startedAt = store.user.startedAt || Date.now();
      saveStore();
      if (store.user.email) {
        try { localStorage.setItem(LEAD_KEY, '1'); } catch (err) { /* private mode */ }
        // fire-and-forget — never block entry on the network
        try {
          fetch(GHL_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: store.user.email,
              name: store.user.name,
              company: store.user.company,
              source: 'IronPeak Sales Academy'
            })
          }).catch(function () {});
          fetch('https://api.hsforms.com/submissions/v3/integration/submit/' + HS_PORTAL + '/' + HS_FORM, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fields: [{ name: 'email', value: store.user.email }],
              context: { pageName: 'IronPeak Sales Academy' }
            })
          }).catch(function () {});
        } catch (err) { /* ignore */ }
      }
      // Remove via a setTimeout (event-loop, not rAF) so the gate ALWAYS clears even
      // if GSAP's ticker is stalled (e.g. backgrounded tab). The fade is cosmetic only.
      var done = function () { if (overlay && overlay.parentNode) overlay.remove(); };
      if (hasGsap && !reduced) { gsap.to(overlay, { autoAlpha: 0, duration: 0.35 }); setTimeout(done, 380); }
      else done();
      syncHeader();
      render();
    }
    $('#gateForm', overlay).addEventListener('submit', function (e) {
      e.preventDefault();
      if (!emailInput.checkValidity()) { emailInput.reportValidity(); return; }
      finish(emailInput.value, $('#gateName', overlay).value, $('#gateCompany', overlay).value);
    });
  }

  /* ============================================================ ROLE TOGGLE */
  function wireRoleToggle () {
    $('#roleLearner').addEventListener('click', function () { store.user.role = 'learner'; saveStore(); syncHeader(); });
    $('#roleManager').addEventListener('click', function () { store.user.role = 'manager'; saveStore(); syncHeader(); navigate('#/dashboard'); });
  }

  /* ============================================================ BOOT */
  function boot () {
    store = loadStore();
    if (!ingestData()) {
      app.innerHTML = '';
      app.appendChild(el('<div class="data-error"><h2>Curriculum failed to load</h2><p style="margin-top:1rem">The data files (data/00…06 + 90) did not populate <code>window.IRONPEAK_CURRICULUM</code>. Check the &lt;script src&gt; includes in index.html.</p></div>'));
      return;
    }
    wireRoleToggle();
    syncHeader();
    window.addEventListener('hashchange', render);
    render();
    // first-visit name gate (after first paint so the home view is behind it)
    if (!store.user.startedAt && !store.user.name) {
      setTimeout(showGate, 350);
    } else {
      store.user.startedAt = store.user.startedAt || Date.now();
      saveStore();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

})();
