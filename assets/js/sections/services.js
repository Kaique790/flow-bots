// SERVICES CARDS ANIMATIONS
export function initServices() {
  gsap.from(".services__card--light", {
    scrollTrigger: {
      trigger: ".services",
      start: "top+=200 center",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".services__card--dark", {
    scrollTrigger: {
      trigger: ".services__cards",
      start: "top-=260 center",
      end: "bottom bottom",
      scrub: 1,
    },
  });
}
