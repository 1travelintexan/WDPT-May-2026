//destructuring in JS
const user1 = {
  name: "Ragnar",
  age: 5,
  owner: {
    name: "Joshua",
    address: {
      number: 123,
      street: "Texas Way",
      state: "Texas",
    },
  },
};

//destructuring objects
const { owner } = user1;

//destructuring arrays
const pets = ["Buddy", "Rogue", "Ragnar"];
const [pet1, _, pet3] = pets;
console.log(pet3);
