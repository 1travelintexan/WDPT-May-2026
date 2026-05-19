// Iteration 1: Names and Input
const hacker1 = "Ragnar";
const hacker2 = "Ragnar";
console.log("The driver's name is" + " " + hacker1);
console.log(`The navigators's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
  );
} else {
  console.log(
    `Wow you have the same length names with ${hacker1.length} characters`,
  );
}
// Iteration 3: Loops
let capName = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    capName = capName + hacker1[i].toUpperCase();
  } else {
    capName = capName + hacker1[i].toUpperCase() + " ";
  }
}

//reversed name
let revName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  revName += hacker2[i];
}
console.log(revName);

// for (let i = 0; i < hacker1.length; i++) {
//   const hacker1Letter = hacker1[i];
//   const hacker2Letter = hacker2[i];
//   if (hacker1Letter > hacker2Letter) {
//     console.log("the drivers name goes first");
//   } else if (hacker2Letter > hacker1Letter) {
//     console.log("the navs name goes first");
//   }
// }
console.log(hacker2.localeCompare(hacker1));
const whichGoesFirst = hacker1.localeCompare(hacker2);
if (whichGoesFirst === 1) {
  console.log("nav name goes first");
} else if (whichGoesFirst === -1) {
  console.log("drivers name def goes first");
} else {
  console.log("wow yall have the same name");
}

//palindrome bonus 97 is the charcode for a and 122 is for z
const phrase = "taco...?!:) cato";
let cleanPhrase = "";
let revCleanPhrase = "";
for (let i = 0; i < phrase.length; i++) {
  if (phrase.charCodeAt(i) >= 97 && phrase.charCodeAt(0) <= 122) {
    cleanPhrase += phrase[i];
  }
}
//advanced method
// let revCleanPhrase = cleanPhrase.split("").reverse().join("");
for (let i = cleanPhrase.length - 1; i >= 0; i--) {
  revCleanPhrase += cleanPhrase[i];
}
console.log(revCleanPhrase, cleanPhrase);
if (cleanPhrase === revCleanPhrase) {
  console.log("wow you have a really cool palidrome", phrase);
} else {
  console.log("nice try, its not a palidrome");
}
