// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

//this makes the first row clickable
//the delete button
const deleteButton = exampleRow.querySelector(".btn-delete");
deleteButton.addEventListener("click", () => {
  console.log("delete clicked");
  exampleRow.remove();
});
//the like button
const likeButton = exampleRow.querySelector(".btn-like");
likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("selected");
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach((oneContact) => {
  const ourRow = document.createElement("tr");
  ourRow.innerHTML = `
  <td>
    <img src="${oneContact.pictureUrl}" />
  </td>
  <td> ${oneContact.name} </td>
  <td> ${oneContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like ">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(ourRow);

  //the delete button
  const deleteButton = ourRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    console.log("delete clicked");
    ourRow.remove();
  });
  //the like button
  const likeButton = ourRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
});

//add random contact
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  // Get the element from the spliced array
  const randomContact = contacts[randomIndex];
  //delete the random contact so not to choose twice
  contacts.splice(randomIndex, 1);

  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(exampleRow);

  //the delete button
  const deleteButton = exampleRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    console.log("delete clicked");
    exampleRow.remove();
  });
  //the like button
  const likeButton = exampleRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
});
