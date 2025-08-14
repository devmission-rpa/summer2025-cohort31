"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const directory = document.getElementById("directory");
  const enterBtn = document.getElementById("enterBtn");
  const navbar = document.getElementById("navbar");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Splash Page Enter Button
  enterBtn.addEventListener("click", () => {
    splash.style.transition = "opacity 0.8s";
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.style.display = "none";
      navbar.classList.remove("d-none");
      directory.classList.remove("d-none");
      fetchTrainees();
    }, 800);
  });

  // Theme Toggle Button
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    themeToggle.textContent = body.classList.contains("light-mode") ? "Dark Mode" : "Light Mode";
  });
});

// Airtable API
const Class_URL = "https://api.airtable.com/v0/app17NBIG27MwNyLa/Trainees";
async function fetchTrainees() {
  const getResultElement = document.getElementById("airtable");
  const options = { method: "GET", headers: { Authorization: `Bearer patfzwGyoXnDBp6EM.8d05507446ee0c9c79d7e02a2232ce9edb412a4b7818e4630a90760543b2d650` } };
  try {
    const response = await fetch(Class_URL, options);
    const data = await response.json();
    getResultElement.innerHTML = "";
    let newHtml = "";
    data.records.forEach(record => {
      const fields = record.fields;
      const picture = fields.Photo ? fields.Photo[0].url : "";
      const name = fields.Name || "";
      const linkedIn = fields.LinkedIn || "";
      const biography = fields.Biography || "";
      const personality = fields.Personality || "";
      const aboutMe = fields["About Me"] || "";
      const webApp = fields["Web App"] || "";
      const restaurant = fields.Restaurant || "";
      const order = fields.Order || "";
      newHtml += `
        <div class="col">
          <div class="card">
            <div class="card-img-wrapper">
              <img src="${picture}" class="card-img-top" alt="${name}'s photo">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">${name} ${linkedIn ? `<a href="${linkedIn}" target="_blank"><i class="bi bi-linkedin"></i></a>` : ''}</h5>
              <div class="d-flex justify-content-center gap-3 mb-2">
                ${aboutMe ? `<a href="${aboutMe}" target="_blank" class="btn btn-outline-light btn-sm">About Me</a>` : ''}
                ${webApp ? `<a href="${webApp}" target="_blank" class="btn btn-outline-light btn-sm">Web App</a>` : ''}
              </div>
              <p class="card-text">${biography}</p>
              <p class="card-text">MBTI: ${personality}</p>
              <p class="card-text">Restaurant: ${restaurant}</p>
              <p class="card-text">Favorite order: ${order}</p>
            </div>
          </div>
        </div>`;
    });
    getResultElement.innerHTML = newHtml;
  } catch (error) {
    console.error("Error fetching Airtable data:", error);
    getResultElement.innerHTML = "<p class='text-center text-danger'>Failed to load data. Check your API key and table name.</p>";
  }
}