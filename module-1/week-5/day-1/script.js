//grabbing the elements from the HTML
const headerElement = document.querySelector("h1");
const headerTextElement = document.getElementById("header-paragraph");
const ragnarImageElement = document.querySelector("img");
const firstPetCardElement = document.querySelector("#first-pet-card");
const darkModeButton = document.getElementById("dark-mode");
const addPetButton = document.getElementById("add-pet-button");
const petContainerElement = document.querySelector("#pet-container");
const bodyElement = document.querySelector("body");
//changing the elements
headerElement.style.color = "blue";
headerTextElement.innerText = " <h1>I changed this! Yay :)</h1>";
headerTextElement.style.display = "none";
headerElement.style.color = "green";
headerElement.style.backgroundColor = "gray";

//adding and removing a class via JS
// ragnarImageElement.classList.add("main-image");
// firstPetCardElement.classList.add("pet-card");
// ragnarImageElement.classList.remove("main-image");
// console.log(ragnarImageElement.classList);

//event listeners
darkModeButton.addEventListener("click", () => {
  console.log("button clicked");
  //this adds the class of dark mode to the body
  bodyElement.classList.toggle("dark-mode");
  //this changes the text of the button
  if (darkModeButton.innerText === "Dark Mode") {
    darkModeButton.innerText = "Light Mode";
  } else {
    darkModeButton.innerText = "Dark Mode";
  }
});

//variable with pet info
const pets = [
  { name: "Ragnar", owner: "Joshua", image: "./ragnar.png" },
  { name: "Lola", owner: "Joao", image: "./lola.png" },
  { name: "Rogue", owner: "Samantha", image: "./rogue.png" },
];
addPetButton.addEventListener("click", () => {
  //for grabbing a random pet
  //first grab a random index from the array
  const randomIndex = Math.floor(Math.random() * pets.length);
  const randomPet = pets[randomIndex];
  //create a new element in JS
  const newDivElement = document.createElement("div");
  //add the correct class to the created div
  newDivElement.classList.add("pet-card");
  //add the HTML into the card
  newDivElement.innerHTML = `
        <img alt="ragnar picture" src="${randomPet.image}" />
        <h4>Name: ${randomPet.name}</h4>
        <h4>Owner: ${randomPet.owner}</h4>
        <button class='btn-delete'>Delete</button>`;
  // append the new div to the actual page
  petContainerElement.appendChild(newDivElement);

  //remove the random pet from the array so not to choose twice
  pets.splice(randomIndex, 1);

  //add an event listener to the delete button on the new div... (not the document)
  const deleteButton = newDivElement.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    newDivElement.remove();
    //add the pet back to the array
    pets.push(randomPet);
  });
});
