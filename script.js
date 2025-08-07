"use strict";

const Class_URL =
  "https://api.airtable.com/v0/app17NBIG27MwNyLa/Trainees";

// function for our list view
async function fetchAlleys() {
  let getResultElement = document.getElementById("alley-container");

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

      let newHtml = "";
      for (let i = 0; i < data.records.length; i++) {
        let picture = data.records[i].fields["Photo"];
        let name = data.records[i].fields["Name"];
        let  = data.records[i].fields["address"];
        let  = data.records[i].fields["hours"];
        let  = data.records[i].fields["url"];
        let  = formatPhoneNumber(data.records[i].fields["phone"]);
        let  = data.records[i].fields["lanes"];
        let  = data.records[i].fields["cost"];

//         newHtml += `
        
//           <div class="col-md-4 alley-card">
//             <div class="card">
//               ${alleyPic ? `<img src="${alleyPic[0].url}" alt="Photo of ${alleyName}">` : ``}
//               <div class="card-body">
//                 <h5 class="card-title">
//                    ${alleyName}
//                 </h5>
//                 <p>${alleyAddress}</p>
//                 <a class="mt-1 btn btn-primary mt-2" href="index.html?id=${
//                   data.records[i].id
//                 }">View Details</a>
//               </div>
//             </div>
//           </div>
    
//         `;
//       }

//       getResultElement.innerHTML = newHtml;
//     });
// }

