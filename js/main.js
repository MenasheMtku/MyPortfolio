import { init as initTheme }      from "./modules/theme.js";
import { init as initAnimations } from "./modules/animations.js";
import "./modules/renderer.js";

const yearEl = document.querySelector(".year");
if (yearEl) {
  yearEl.innerHTML = `&copy; ${new Date().getFullYear()} Menashe Mtku`;
}

initTheme();
initAnimations();
