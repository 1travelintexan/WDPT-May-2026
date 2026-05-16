//variables
const pet = "raGniiiiiIIIIiiI";
let age = 5;
let isAGoodBoy = true;
let toy;

age = 6;
//you cant change a const variable
// pet = "Ragni";
// with backticks its name is a template literal
const sentence = `My name is Joshua and my pets name is ${pet} and his age is ${age}`;
const sentence2 =
  pet + " is a good boy most of the time, now is he?" + " " + isAGoodBoy;
// console.log(sentence2);

//Math Object
// console.log(Math.ceil(2.000000000001));
// console.log(Math.max(2, 55, 6633, 1, 400));

const lastLetter = pet[pet.length - 1];

//to make the whole string uppercase
const uppercaseName = pet.toUpperCase();
const properName = pet[0].toUpperCase() + pet.slice(1).toLowerCase();
// console.log(properName);

let petAge = 12;
petAge += 3;

//modulo operator
const remainder = 11 % 3;
// console.log(remainder);

//OR and AND operators
// if (2 + 3 === 5 || 1 + 1 === 2) {
//   console.log("yay we made it!");
// } else {
//   console.log("nope... no good");
// }

//difference between = and == and ===
// one = is assignment
const myAge = 39;
// two == is asking if they are the same
// console.log(2 != 2);
// // three is asking if they are the same with strict comparison
// console.log("2" !== 2);

const typeExample = "true";
console.log(typeof typeExample);

//types of casing in programming
//camel case  => thisIsInCamelCase
//snake case => this_is_snake_case
//pascal case => ThisIsPascalCase
//kebab case => this-is-kebab-case
