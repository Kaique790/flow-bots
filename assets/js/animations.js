gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

let smoother;

if (window.innerWidth > 1000) {
  smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = link.getAttribute("href");

      smoother.scrollTo(target, true, "top top");
    });
  });
}

const textos2 = document.querySelectorAll(".textoAnimado3");
textos2.forEach((texto) => {
  const split = new SplitText(texto, { types: "words, chars" });

  gsap.from(split.words, {
    opacity: 0,
    y: 60,
    scale: 0.95,
    stagger: 0.1,
    duration: 0.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: texto,
      start: "top center",
    },
  });
});

// SHOW ELEMENTS WITH BLUR
const showWithBlur = document.querySelectorAll(".show-w-blur");
showWithBlur.forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top-=50 center",
      toggleActions: "play none none reverse",
    },
  });
});

const showY = document.querySelectorAll(".show-y");
showY.forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: el,
      start: "top-=90 center",
      toggleActions: "play none none reverse",
    },
  });
});

// TITLE TEXT ANIMATIONS
const textos = document.querySelectorAll(".textoAnimado");
textos.forEach((texto) => {
  const split = new SplitText(texto, { types: "words, chars" });

  gsap.from(split.chars, {
    filter: "blur(20px)",
    opacity: 0,
    duration: 0.5,
    stagger: {
      each: 0.04,
      from: "random",
    },
    scrollTrigger: {
      trigger: texto,
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });
});

function criarVideo(src, container) {
  if (!container) return;

  const video = document.createElement("video");
  video.src = src;
  video.muted = true;
  video.playsInline = true;

  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.setAttribute("preload", "auto");

  video.style.opacity = "1";

  container.appendChild(video);

  return video;
}

// AUTOPLAY DE VIDEOS
window.addEventListener("load", () => {
  const container = document.querySelector(".about .video-container");
  const video = criarVideo("assets/videos/about-bg.mp4", container);

  video.addEventListener("loadedmetadata", () => {
    gsap.to(video, {
      currentTime: video.duration,
      ease: "none",
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  });
});
