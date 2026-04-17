// CARDS CTA SCROLL X ANIMATION
export function initCta() {
  let mm = gsap.matchMedia();

  mm.add("(max-width: 940px)", () => {
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta",
        start: "bottom bottom",
        pin: true,
        scrub: 1,
      },
    });

    ctaTl.to(".cta__cards", {
      x: -1400,
    });

    ctaTl.to(".cta__cards .card-black", {
      scale: 8,
    });
  });

  mm.add("(min-width: 941px)", () => {
    gsap.to(".cta__cards .card-black", {
      scale: 5,
      scrollTrigger: {
        trigger: ".cta",
        start: "bottom bottom",
        pin: true,
        scrub: 1,
      },
    });
  });

  // TRANSITION TO FOOTER ANIMATION
}
