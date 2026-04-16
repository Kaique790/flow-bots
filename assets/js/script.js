import { initHero } from "./sections/hero.js";
import { initFooter } from "./sections/footer.js";
import { initAbout } from "./sections/about.js";
import { initServices } from "./sections/services.js";
import { initCta } from "./sections/cta.js";
import { initProblems } from "./sections/problems.js";
import { initHeader } from "./sections/header.js";

const larguraTela = window.innerWidth;
window.addEventListener("resize", () => {
  const larguraAtual = window.innerWidth;

  const diferenca = Math.abs(larguraAtual - larguraTela);

  if (diferenca > 300) {
    location.reload();
  }
});

//PRELOADER
const preloaderText = document.querySelector(".preloader-text");
const preloader = document.getElementById("preloader");
let count = 0;

function loading() {
  setTimeout(() => {
    preloader.style.opacity = 0;
    document.getElementById("smooth-wrapper").style.display = "block";

    initHero();
  }, 1500);
}

initHeader();
initProblems();
initServices();
initAbout();
initCta();
initFooter();

loading();

for (let i = 0; i <= 100; i++) {
  setTimeout(() => {
    preloaderText.textContent = `${i}%`;
  }, i * 20);
}
