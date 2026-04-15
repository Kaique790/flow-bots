export function initAbout() {
  // ABOUT ELEMENTS ANIMATION
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top top",
      pin: true,
      scrub: 1,
    },
  });

  const split2 = new SplitText(".textoAnimado2", {
    types: "lines, words, chars",
    mask: "lines",
  });

  aboutTl.from(
    split2.chars,
    {
      y: "100%",
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
    },
    "-=.5",
  );

  aboutTl.from(".about__buttons .btn", {
    opacity: 0,
    y: 60,
    scale: 0.95,
    stagger: 0.35,
    duration: 1,
    ease: "back.out(1.7)",
  });
}
