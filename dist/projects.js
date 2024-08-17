console.log("project js loaded");

// const logos = document.querySelector(".language-logos-flex");
// const cards = document.querySelectorAll(".project-card");
const projects_container = document.querySelector(".project-list");
const skills_container = document.querySelector(".logos");

console.log(projects_container);

const response = await fetch("./data.json");
const data = await response.json();
const projects = data.projects;
const skills = data.skills;
console.log(skills);

// about section
skills.forEach(skill => {
  skills_container.insertAdjacentHTML(
    "beforeend",
    `<div class="logo-item">
            <p class="logo-title">${skill.title}</p>
            <img class="skill-svg" src = ${skill.image} alt=${skill.alt}/>
          </div>`
  );
});

// projects section
projects.forEach(project => {
  projects_container.insertAdjacentHTML(
    "beforeend",
    `<div class="project">
              <div class="proj-img-container">
                <img src="${project.image}" loading="lazy" />
              </div>
              <div class="overview">
                <h3 class="p-title">${project.title}</h3>
                <p class="p-summary">
                ${project.description}
                </p>
                <div class="visit">
                  <a href="${project.siteUrl}" target="_blank" class="project-link"
                    >Visit Website</a
                  >
                    <a href="${project.codeUrl}" target="_blank">
                     <i class="fa-brands fa-square-github"></i>
                  </a>
                </div>
              </div>
            </div>`
  );
});
