export function init() {
  initSectionReveal();
  initScrollHandlers();
  initActiveNav();
}

function initSectionReveal() {
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("section--hidden");
        obs.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: "0px 0px -80px 0px" }
  );

  sections.forEach((section) => {
    if (section.id === "section-home") return;
    observer.observe(section);
    section.classList.add("section--hidden");
  });
}

function initScrollHandlers() {
  const bttButton = document.querySelector(".btt");
  const navbar    = document.querySelector(".navbar");

  function onScroll() {
    if (window.scrollY > 400) {
      bttButton.classList.add("show");
    } else {
      bttButton.classList.remove("show");
    }

    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  bttButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
}

function initActiveNav() {
  const navLinks    = document.querySelectorAll(".nav__link");
  const pageSections = document.querySelectorAll("[id^='section-']");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    { rootMargin: "0px 0px -60% 0px" }
  );

  pageSections.forEach((section) => observer.observe(section));
}
