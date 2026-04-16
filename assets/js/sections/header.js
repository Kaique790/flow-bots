export function initHeader() {
  // =============================
  // MOBILE MENU
  // =============================
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu ul li");
  const menuToggle = document.getElementById("menuToggle");
  const closeBtn = document.querySelector(".menu .close");
  const menuOverlay = document.getElementById("menu-overlay");

  let isMenuOpen = false;

  // timeline
  const tl = gsap.timeline({ paused: true });

  tl.to(menu, {
    pointerEvents: "all",
  });

  // entrada overlay
  tl.to(menuOverlay, {
    opacity: 1,
    pointerEvents: "all",
    duration: 0.3,
  });

  // itens
  tl.to(
    menuItems,
    {
      x: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
    },
    "-=0.2",
  );

  // abrir
  menuToggle.addEventListener("click", () => {
    tl.play();

    isMenuOpen = true;
  });

  // fechar
  closeBtn.addEventListener("click", () => {
    tl.reverse();
    isMenuOpen = false;
  });

  // =============================
  // HEADER + SCROLL CONTROL
  // =============================
  const header = document.querySelector(".header");

  let lastScrollY = window.scrollY;

  // MOSTRAR HEADER
  function showHeader() {
    gsap.to(header, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.4,
      ease: "power2.out",
    });
  }

  // ESCONDER HEADER
  function hideHeader() {
    gsap.to(header, {
      y: "-100%",
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.3,
      ease: "power2.in",
    });
  }

  // SCROLL
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // evita micro scroll
    if (Math.abs(currentScroll - lastScrollY) < 5) return;

    // fecha menu ao descer
    if (isMenuOpen && currentScroll != lastScrollY) {
      tl.reverse();
      isMenuOpen = false;
    }

    // lógica do header
    if (currentScroll > lastScrollY) {
      hideHeader(); // descendo
    } else {
      showHeader(); // subindo
    }

    lastScrollY = currentScroll;
  });
}
