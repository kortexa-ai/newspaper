// The signature element: a sky rendered with three.js' WebGPURenderer
// (automatic WebGL2 fallback) that moves from pre-dawn indigo to full
// morning as the reader scrolls through the edition. The page enacts
// the premise: reading the news makes things brighter.

import * as THREE from 'three/webgpu';
import {
  Fn,
  uniform,
  uv,
  vec2,
  vec3,
  float,
  mix,
  pow,
  sin,
  dot,
  fract,
  clamp,
  smoothstep,
} from 'three/tsl';

const PI = Math.PI;

export class DawnSky {
  constructor(canvas) {
    this.canvas = canvas;
    this.progress = uniform(0); // 0 = pre-dawn, 1 = morning
    this.aspect = uniform(1);
    this.targetProgress = 0;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.disposed = false;
  }

  async init() {
    const renderer = new THREE.WebGPURenderer({
      canvas: this.canvas,
      antialias: true,
    });
    await renderer.init();
    this.renderer = renderer;

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
    this.camera.position.z = 1;

    // --- Sky quad ---------------------------------------------------------
    const prog = this.progress;
    const aspect = this.aspect;

    const skyMaterial = new THREE.MeshBasicNodeMaterial();
    skyMaterial.colorNode = Fn(() => {
      const u = uv();
      const h = u.y; // 0 = horizon (bottom), 1 = zenith (top)

      // Palettes: night → morning
      const zenithNight = vec3(0.05, 0.08, 0.16);
      const zenithDay = vec3(0.58, 0.74, 0.9);
      const horizonNight = vec3(0.29, 0.2, 0.29);
      const horizonDay = vec3(1.0, 0.88, 0.72);

      const zenith = mix(zenithNight, zenithDay, prog);
      const horizon = mix(horizonNight, horizonDay, prog);

      // Warm dawn band hugging the horizon, strongest mid-sunrise
      const dawnStrength = sin(prog.mul(PI)).mul(0.6).add(0.12);
      const dawnBand = vec3(1.0, 0.58, 0.38).mul(smoothstep(0.55, 0.0, h)).mul(dawnStrength);

      let col = mix(horizon, zenith, pow(h, float(0.75))).add(dawnBand.mul(0.55));

      // The sun, rising from below the horizon to mid-sky
      const p = vec2(u.x.sub(0.5).mul(aspect), u.y);
      const sunY = mix(float(-0.14), float(0.62), prog);
      const d = p.sub(vec2(float(0.0), sunY)).length();

      const sunColor = mix(vec3(1.0, 0.66, 0.34), vec3(1.0, 0.95, 0.8), prog);
      const disc = smoothstep(0.052, 0.044, d);
      const glow = float(0.05).div(d.add(0.16));

      col = col.add(sunColor.mul(glow.mul(0.55))).add(sunColor.mul(disc));

      // Fine grain to prevent gradient banding
      const n = fract(sin(dot(u, vec2(12.9898, 78.233))).mul(43758.5453));
      col = col.add(n.sub(0.5).mul(0.02));

      return clamp(col, 0.0, 1.0);
    })();

    const sky = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), skyMaterial);
    this.scene.add(sky);

    // --- Light motes ------------------------------------------------------
    const COUNT = 130;
    const positions = new Float32Array(COUNT * 3);
    this.moteSpeeds = new Float32Array(COUNT);
    this.moteSway = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = Math.random() * 2 - 1;
      positions[i * 3 + 1] = Math.random() * 2 - 1;
      positions[i * 3 + 2] = 0.1;
      this.moteSpeeds[i] = 0.01 + Math.random() * 0.03;
      this.moteSway[i] = Math.random() * PI * 2;
    }
    const moteGeometry = new THREE.BufferGeometry();
    moteGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.moteMaterial = new THREE.PointsMaterial({
      color: 0xffd98a,
      size: 2.2,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.motes = new THREE.Points(moteGeometry, this.moteMaterial);
    this.scene.add(this.motes);

    // --- Wiring -----------------------------------------------------------
    this.onResize = () => this.resize();
    this.onScroll = () => this.updateTarget();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScroll, { passive: true });

    this.resize();
    this.updateTarget();

    if (this.reducedMotion) {
      // No ambient animation; re-render only on scroll/resize.
      this.progress.value = this.targetProgress;
      this.renderOnce();
      window.addEventListener('scroll', () => this.renderOnce(), { passive: true });
      window.addEventListener('resize', () => this.renderOnce(), { passive: true });
    } else {
      this.clock = new THREE.Clock();
      renderer.setAnimationLoop(() => this.tick());
    }
  }

  updateTarget() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.targetProgress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h);
    this.aspect.value = w / h;
  }

  tick() {
    if (this.disposed) return;
    const dt = Math.min(this.clock.getDelta(), 0.05);

    // Ease the sunrise toward the scroll position
    this.progress.value += (this.targetProgress - this.progress.value) * Math.min(1, dt * 3.2);

    // Drift the motes upward, gentle sway
    const pos = this.motes.geometry.attributes.position;
    const t = this.clock.elapsedTime;
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i) + this.moteSpeeds[i] * dt;
      if (y > 1.05) y = -1.05;
      pos.setY(i, y);
      pos.setX(i, pos.getX(i) + Math.sin(t * 0.4 + this.moteSway[i]) * 0.00008);
    }
    pos.needsUpdate = true;
    this.moteMaterial.opacity = 0.15 + this.progress.value * 0.3;

    this.renderer.render(this.scene, this.camera);
  }

  renderOnce() {
    this.progress.value = this.targetProgress;
    this.updateTarget();
    this.progress.value = this.targetProgress;
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.disposed = true;
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.onScroll);
    this.renderer?.setAnimationLoop(null);
    this.renderer?.dispose();
  }
}
