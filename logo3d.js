/* ==========================================================================
   IronPeak — 3D spinning logo (GLB edition, 2026-07-03)

   Loads Devan's full-mark GLB (assets/ironpeak-logo.glb — Side Peaks, chevron
   layers, inner band/V, and the IRON PEAK wordmark, PBR metal materials, built
   in Claude Design and exported via THREE.GLTFExporter). This replaced the old
   SVG-extrusion pipeline, which could only reproduce half the mark.

   Contract (unchanged from the SVG edition):
   - export function initLogo3D(container, opts = {}) → { dispose() }
   - opts: { accent, spinSpeed } with sane defaults.
   - Transparent canvas absolutely positioned over the container. If the
     container holds an <img> (the poster/fallback), it is hidden once the
     model is mounted — and left alone on any failure, so the hero is never
     empty. WebGL-unavailable or a failed load = safe no-op.
   - pixelRatio ≤ 2; ResizeObserver; IntersectionObserver + visibilitychange
     pause the rAF offscreen/hidden; zero-size-safe; dispose() frees GPU
     resources and removes the canvas.
   - Spin is applied manually (constant yaw + gentle bob) so prefers-reduced-
     motion can slow it to near-still; the GLB's baked "Turntable" clip is
     intentionally not played — same motion, less machinery.
   ========================================================================== */

import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/* ------------------------------------------------------------------ defaults */
const DEFAULTS = {
  accent: 0x1e7fff,  // brand blue (rim light from behind)
  spinSpeed: 0.6,    // constant Y auto-spin, rad/s
};

// Resolve the GLB relative to THIS module, regardless of host page URL.
const GLB_URL = new URL('./assets/ironpeak-logo.glb', import.meta.url).href;

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

const toColor = (c) =>
  c instanceof THREE.Color ? c.clone() : new THREE.Color(c);

export function initLogo3D(container, opts = {}) {
  if (!container) {
    console.warn('[logo3d] no container element supplied');
    return { dispose() {} };
  }

  const settings = { ...DEFAULTS, ...opts };
  const spinSpeed = Number.isFinite(settings.spinSpeed) ? settings.spinSpeed : DEFAULTS.spinSpeed;

  /* ----------------------------------------------------------- renderer */
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,                       // transparent canvas over the page bg
      powerPreference: 'high-performance',
    });
  } catch (err) {
    console.warn('[logo3d] WebGL unavailable — logo not mounted (poster img stays).', err);
    return { dispose() {} };
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.setClearColor(0x000000, 0);   // fully transparent

  const canvas = renderer.domElement;
  // Overlay the poster <img> (if any) rather than stacking below it.
  if (!container.style.position) container.style.position = 'relative';
  canvas.style.cssText = 'display:block;position:absolute;inset:0;width:100%;height:100%;';
  container.appendChild(canvas);

  /* -------------------------------------------------------------- scene */
  const scene = new THREE.Scene();       // no background → transparent

  // model group: the spin (yaw) + bob is applied here.
  const model = new THREE.Group();
  scene.add(model);

  let hasSize = false, inView = true, pageVisible = !document.hidden;
  let needsRender = true;

  /* --------------------------------------------------------- environment */
  // PMREM RoomEnvironment → believable reflections on the GLB's metals.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const roomEnv = new RoomEnvironment();
  const envTex = pmrem.fromScene(roomEnv, 0.04).texture;
  scene.environment = envTex;
  roomEnv.dispose?.();
  pmrem.dispose();

  /* ------------------------------------------------------------ lighting */
  // Soft key from front-upper-right; brand-blue rim from BEHIND so the
  // silhouette pops on near-black; faint hemi fill so the steel never goes dead.
  const key = new THREE.DirectionalLight(0xffffff, 2.0);
  key.position.set(2.5, 3.2, 4.0);
  const rim = new THREE.DirectionalLight(toColor(settings.accent), 2.6);
  rim.position.set(-2.0, 0.6, -4.0);     // behind → blue edge glow
  const fill = new THREE.HemisphereLight(0x9fb4d8, 0x0a0e16, 0.45);
  scene.add(key, rim, fill);

  /* -------------------------------------------------------------- camera */
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 5.2);
  camera.lookAt(0, 0, 0);

  /* ------------------------------------------------------- load the GLB */
  let cancelled = false;
  let mark = null;                       // the loaded gltf.scene, once mounted
  new GLTFLoader().load(
    GLB_URL,
    (gltf) => {
      if (cancelled) { disposeObject(gltf.scene); return; }
      mark = gltf.scene;

      // Centre on its bounding box and scale to a comfortable framing that is
      // independent of the export's units.
      const box = new THREE.Box3().setFromObject(mark);
      const center = new THREE.Vector3();
      const size = new THREE.Vector3();
      box.getCenter(center);
      box.getSize(size);
      mark.position.sub(center);
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      model.scale.setScalar(2.6 / maxDim);

      model.add(mark);

      // Poster img has done its job — the real thing is here.
      const poster = container.querySelector('img');
      if (poster) poster.style.display = 'none';

      // One synchronous frame so the mark is visible even if rAF is throttled
      // (backgrounded tab) before the loop's first tick.
      if (hasSize) renderer.render(scene, camera);
      needsRender = true;
    },
    undefined,
    (err) => {
      console.warn('[logo3d] GLB failed to load — poster img stays.', err);
    },
  );

  /* ------------------------------------------- reduced-motion preference */
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = mq.matches;
  const onMQ = () => { reduced = mq.matches; needsRender = true; };
  mq.addEventListener?.('change', onMQ);

  /* ------------------------------------------------------ size/visibility */
  const resize = () => {
    const w = container.clientWidth, h = container.clientHeight;
    hasSize = w > 1 && h > 1;             // zero-size-safe: skip until measured
    if (!hasSize) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    needsRender = true;
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  const io = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) needsRender = true;
  }, { rootMargin: '120px' });
  io.observe(container);

  const onVis = () => { pageVisible = !document.hidden; if (pageVisible) needsRender = true; };
  document.addEventListener('visibilitychange', onVis);

  /* ------------------------------------------------------- render loop */
  let disposed = false, raf = 0, lastNow = performance.now();
  let tSec = 0, yaw = 0;

  const tick = (now) => {
    if (disposed) return;
    raf = requestAnimationFrame(tick);
    const dt = clamp((now - lastNow) / 1000, 0, 0.05);
    lastNow = now;
    if (!hasSize || !inView || !pageVisible) return;   // paused offscreen/hidden — keep clock fresh

    tSec += dt;

    // Constant Y auto-spin forever. prefers-reduced-motion slows it dramatically.
    const speed = reduced ? spinSpeed * 0.12 : spinSpeed;
    yaw += speed * dt;
    model.rotation.y = yaw;

    // Subtle floating bob (held still under reduced-motion).
    model.position.y = reduced ? 0 : Math.sin((tSec * Math.PI * 2) / 6) * 0.06;

    renderer.render(scene, camera);
    needsRender = false;
  };
  raf = requestAnimationFrame(tick);

  /* ---------------------------------------------------------------- dispose */
  function disposeObject(root) {
    root.traverse((node) => {
      if (node.isMesh) {
        node.geometry?.dispose();
        const mats = Array.isArray(node.material) ? node.material : [node.material];
        mats.forEach((m) => m?.dispose());
      }
    });
  }

  return {
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      mq.removeEventListener?.('change', onMQ);

      if (mark) disposeObject(mark);
      envTex.dispose();
      renderer.dispose();

      if (canvas.parentNode === container) container.removeChild(canvas);
    },
  };
}
