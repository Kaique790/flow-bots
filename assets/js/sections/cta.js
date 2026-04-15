// CARDS CTA SCROLL X ANIMATION
export function initCta() {
  let mm = gsap.matchMedia();

  mm.add("(max-width: 940px)", () => {
    gsap.to(".cta__cards", {
      x: -1400,
      scrollTrigger: {
        trigger: ".cta",
        start: "top+=90",
        end: "bottom top",
        pin: true,
        scrub: 1,
      },
    });
  });

  // TRANSITION TO FOOTER ANIMATION
  gsap.to(".cta__cards .card-black", {
    scale: 5,
    scrollTrigger: {
      trigger: ".cta",
      start: "top+=100",
      end: "bottom+=190 bottom",
      pin: true,
      scrub: 1,
    },
  });
}
