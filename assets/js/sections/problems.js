export function initProblems() {
  gsap.from(".problems__image", {
    filter: "blur(20px)",
    scrollTrigger: {
      trigger: ".problems__image",
      start: "top-=30 center",
    },
  });

  const problemsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".problems",
      scrub: 1,
      pin: true,
      start: "bottom bottom",
      end: window.innerWidth >= 490 ? "+=1000" : "+=400",
    },
  });

  problemsTl.from(".transition div", {
    height: "0%",
    duration: 1,
    stagger: 0.08,
  });
}
