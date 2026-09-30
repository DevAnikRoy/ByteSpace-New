import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const offsets: Record<string, gsap.TweenVars> = {
  fade: {},
  "fade-up": { y: 28 },
  "fade-down": { y: -20 },
  "scale-in": { scale: 0.96 },
  "from-left": { x: -40 },
  "from-right": { x: 40 },
  pop: { y: 16, scale: 0.92 },
};

const defaults: gsap.TweenVars = { duration: 0.7, ease: "power3.out" };

function revealVars(el: HTMLElement): gsap.TweenVars {
  const preset = el.dataset.preset ?? el.dataset.animate ?? "fade-up";
  return { autoAlpha: 0, ...(offsets[preset] ?? offsets["fade-up"]), clearProps: "transform" };
}

function isIntro(el: HTMLElement) {
  return el.closest("[data-intro]") !== null;
}

function playIntro(root: ParentNode) {
  const tl = gsap.timeline({ defaults });

  root.querySelectorAll<HTMLElement>("[data-intro] [data-animate]").forEach((el) => {
    const at = Number(el.dataset.at ?? 0);
    if (el.dataset.animate === "stagger") {
      gsap.set(el, { autoAlpha: 1 });
      tl.from(el.children, { ...revealVars(el), stagger: 0.08 }, at);
    } else {
      tl.from(el, revealVars(el), at);
    }
  });
}

function revealOnScroll(root: ParentNode) {
  root.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
    if (isIntro(el)) return;

    if (el.dataset.animate === "stagger") {
      gsap.set(el, { autoAlpha: 1 });
      gsap.from(el.children, {
        ...defaults,
        ...revealVars(el),
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    } else if (el.dataset.animate === "marquee") {
      return;
    } else if (el.dataset.animate === "batch") {
      gsap.set(el, { autoAlpha: 1 });
      const items = Array.from(el.children);
      gsap.set(items, { autoAlpha: 0, ...offsets[el.dataset.preset ?? "fade-up"] });
      ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { ...defaults, autoAlpha: 1, x: 0, y: 0, scale: 1, stagger: 0.1, clearProps: "transform" }),
      });
    } else {
      gsap.from(el, {
        ...defaults,
        ...revealVars(el),
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }
  });
}

function marquee(root: ParentNode) {
  const cleanups: Array<() => void> = [];

  root.querySelectorAll<HTMLElement>('[data-animate="marquee"]').forEach((track) => {
    const sets = Array.from(track.children) as HTMLElement[];
    const first = sets[0];
    if (!first) return;

    const setWidth = first.offsetWidth;
    const gap = parseFloat(getComputedStyle(first).paddingRight) || 0;
    const viewport = track.parentElement?.clientWidth ?? setWidth;
    const start = (viewport - (setWidth - gap)) / 2;

    const loop = gsap.to(track, {
      xPercent: -100 / sets.length,
      duration: setWidth / 60,
      ease: "none",
      repeat: -1,
      paused: true,
    });
    loop.progress((((setWidth - start) % setWidth) + setWidth) % setWidth / setWidth);

    ScrollTrigger.create({
      trigger: track,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
    });

    const perSet = first.children.length;
    gsap.set(track, { autoAlpha: 1 });
    gsap.from(track.querySelectorAll("li"), {
      ...defaults,
      autoAlpha: 0,
      y: 16,
      stagger: (index) => (index % perSet) * 0.08,
      scrollTrigger: { trigger: track, start: "top 85%", once: true },
    });

    const slow = () => gsap.to(loop, { timeScale: 0, duration: 0.4, overwrite: true });
    const resume = () => gsap.to(loop, { timeScale: 1, duration: 0.4, overwrite: true });
    track.addEventListener("mouseenter", slow);
    track.addEventListener("mouseleave", resume);
    cleanups.push(() => {
      track.removeEventListener("mouseenter", slow);
      track.removeEventListener("mouseleave", resume);
    });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

function floatShapes(root: ParentNode) {
  root.querySelectorAll<HTMLElement>("[data-float]").forEach((el) => {
    const height = el.offsetHeight;
    if (!height) return;
    const distance = Number(el.dataset.float || 10);
    gsap.to(el, {
      yPercent: (-distance / height) * 100,
      duration: gsap.utils.random(3, 4),
      delay: gsap.utils.random(0, 1),
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });
}

function countUp(root: ParentNode) {
  root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const match = el.textContent?.trim().match(/^(\d+)(.*)$/);
    if (!match) return;
    const [, digits, suffix] = match;
    const counter = { value: 0 };
    gsap.to(counter, {
      value: Number(digits),
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.value)}${suffix}`;
      },
    });
  });
}

export function animatePage(root: ParentNode) {
  playIntro(root);
  revealOnScroll(root);
  const stopMarquee = marquee(root);
  floatShapes(root);
  countUp(root);
  return stopMarquee;
}
