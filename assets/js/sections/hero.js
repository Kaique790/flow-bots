// BG HERO ANIMATION
export function initHero() {
  gsap.to(".hero__background", {
    y: "90vh",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.1,
    },
  });

  const split = new SplitText(".hero .title h1", { types: "words, chars" });
  gsap.from(split.chars, {
    filter: "blur(20px)",
    opacity: 0,
    duration: 0.5,
    stagger: {
      each: 0.04,
      from: "random",
    },
  });

  const split2 = new SplitText(".hero .title p", { types: "words" });
  gsap.from(split2.words, {
    opacity: 0,
    y: 60,
    scale: 0.95,
    stagger: 0.1,
    duration: 0.3,
    ease: "back.out(1.7)",
  });

  const showWithBlur = document.querySelectorAll(".hero-show-w-blur");
  gsap.from(showWithBlur, {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
    duration: 1,
    ease: "power2.out",
    stagger: {
      each: 0.2,
    },
  });

  const items = document.querySelectorAll(".gradient-border");

  gsap.from(items, {
    x: (i) => 200 * (i + 1),
    rotate: (i) => i * 120,
    opacity: 0,
    delay: 0.4,
    duration: 1.2,
    ease: "power2.out",
    stagger: {
      each: 0.2,
    },
  });
}
