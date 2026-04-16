export function initFooter() {
  // SHOW FOOTER ELEMENTS ANIMATION
  gsap.to(".footer-wrapper", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".cta",
      start: "top+=101",
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".footer-deco", {
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
      trigger: ".footer",
      start: "top-=150 top",
      toggleActions: "play none none reverse",
    },
  });

  gsap.set(".footer-wrapper", { pointerEvents: "none" });

  const textosFooter = document.querySelectorAll(".textoAnimadoFooter");
  const showFooterElements = document.querySelectorAll(".footer .show-blur");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top-=350 top",
      toggleActions: "play none none reverse",
    },
  });

  // 👉 TEXTOS (SplitText)
  textosFooter.forEach((texto) => {
    const split = new SplitText(texto, { types: "words, chars" });

    tl.from(
      split.chars,
      {
        filter: "blur(20px)",
        opacity: 0,
        duration: 0.3,
        stagger: {
          each: 0.02,
          from: "random",
        },
      },
      "<",
    );
  });

  // 👉 ELEMENTOS COM BLUR
  tl.from(
    showFooterElements,
    {
      filter: "blur(20px)",
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
    },
    "<",
  );

  // 👉 LIBERA INTERAÇÃO NO FINAL
  tl.to(".footer-wrapper", {
    pointerEvents: "auto",
    duration: 0,
  });
}
