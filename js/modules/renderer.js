const containers = {
  projects: document.querySelector(".project-list"),
  skills: document.querySelector(".logos"),
  certs: document.querySelector(".cert-list"),
};

let _data = null;

async function loadData() {
  const response = await fetch("./data.json");
  _data = await response.json();
  renderAll();
}

function renderSkills() {
  containers.skills.innerHTML = "";
  _data.skills.forEach(skill => {
    containers.skills.insertAdjacentHTML(
      "beforeend",
      `<div class="logo-item">
        <img class="skill-svg" src="${skill.image}" alt="${skill.alt}" />
        <p class="logo-title">${skill.title}</p>
      </div>`,
    );
  });
}

function renderProjects() {
  const visitLabel = "Visit Website";
  const codeLabel = "View Code";

  containers.projects.innerHTML = "";
  _data.projects.forEach(project => {
    const title = project.title;
    const description = project.description;

    containers.projects.insertAdjacentHTML(
      "beforeend",
      `<div class="project">
        <div class="proj-img-container">
          <img src="${project.image}" loading="lazy" alt="${title}" />
        </div>
        <div class="overview">
          <h3 class="p-title">${title}</h3>
          <p class="p-summary">${description}</p>
          <div class="visit">
            <a href="${project.siteUrl}" target="_blank" class="project-link">${visitLabel}</a>
            <a href="${project.codeUrl}" target="_blank" aria-label="${codeLabel}">
              <i class="fa-brands fa-square-github"></i>
            </a>
          </div>
        </div>
      </div>`,
    );
  });
}

function renderCertifications() {
  if (!containers.certs || !_data.certifications?.length) return;
  const certifiedText = "Certified";

  containers.certs.innerHTML = "";
  _data.certifications.forEach(cert => {
    const title = cert.title;
    const clickAttr = cert.credentialUrl
      ? `role="link" style="cursor:pointer" onclick="window.open('${cert.credentialUrl}')"`
      : "";

    containers.certs.insertAdjacentHTML(
      "beforeend",
      `<div class="cert-card" ${clickAttr}>
        <div class="cert-icon"><i class="${cert.icon}"></i></div>
        <div class="cert-info">
          <h3 class="cert-title">${title}</h3>
          <p class="cert-meta">${cert.issuer} &middot; ${cert.year}</p>
        </div>
        <span class="cert-badge">${certifiedText}</span>
      </div>`,
    );
  });
}

export function renderAll() {
  if (!_data) return;
  renderSkills();
  renderProjects();
  renderCertifications();
}

loadData();
