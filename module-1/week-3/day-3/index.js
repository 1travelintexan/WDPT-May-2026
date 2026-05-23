//objects
const pet1 = {
  name: "Ragnar",
  age: 5,
  toys: ["ball", "rope"],
  owner: {
    name: "Joshua",
    email: "j@j.com",
    address: {
      streetNumber: "123",
      streetName: "Texas Way",
      state: "Texas",
      town: "Cut and Shoot",
    },
  },
  bark: function (name) {
    console.log(`${name} says .... woof woof`);
  },
};
//the dot method
// console.log(pet1.name);
// the square brackets method
const example = "age";
// console.log(pet1.example);
// console.log(pet1[example]);
// console.log(pet1.owner["address"]["town"]);
// console.log(pet1.owner.address.town);

//invoking a method in an object
// pet1.bark("Ragnar");

//removing a property in an object
// console.log("before", pet1);
// delete pet1.toys;
// console.log("after", pet1);

//in operator
// console.log("pizza" in pet1);

// //Object.keys and Object.values
// console.log(Object.keys(pet1));

// console.log(Object.values(pet1));

//looping an object
for (key in pet1) {
  console.log(pet1[key]);
}
