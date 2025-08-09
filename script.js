"use strict";

const Class_URL =
  "https://api.airtable.com/v0/app17NBIG27MwNyLa/Trainees";

// function for our list view
async function fetchAlleys() {
  let getResultElement = document.getElementById("airtable");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patfzwGyoXnDBp6EM.8d05507446ee0c9c79d7e02a2232ce9edb412a4b7818e4630a90760543b2d650`,
    },
  };

  await fetch(
    `${Class_URL}`,
    options
  )
    .then((response) => response.json())

    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear alleys

      let newHtml = ""; // No extra row wrapper

      for (let i = 0; i < data.records.length; i++) {
        let record = data.records[i].fields;
        let picture = record["Photo"] ? record["Photo"][0].url : ""; // Check if Photo exists
        let name = record["Name"];
        let linkedIn = record["LinkedIn"];
        let biography = record["Biography"];
        let personality = record["Personality"];
        let projectLink = record["Project Link"];
        let restaurant = record["Restaurant"];
        let order = record["Order"];

        // Append a single card (column) for each trainee
        newHtml += `
          <div class="col">
            <div class="card">
              <img src="${picture}" class="card-img-top" alt="${name}'s Photo">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${biography}</p>
                <p class="card-text">MBTI Personality: ${personality}</p>
                <p class="card-text">Restaurant: ${restaurant}</p>
                <p class="card-text">Favorite order: ${order}</p>
                <a href="..." class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

document.addEventListener('DOMContentLoaded', fetchAlleys);

