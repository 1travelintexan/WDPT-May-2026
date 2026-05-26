//if/else if statements
const age = 15;
const isAdmin = false;
// if (age >= 21) {
//   console.log("you are able to drink and go into bars");
// } else if (age >= 18) {
//   console.log("you can vote but still not drink alcohol");
// } else {
//   console.log("you cannot buy alcohol or go into bars and also NOT vote");
// }
// if (isAdmin || age > 120) {
//   console.log("you have special ablities");
// } else {
//   console.log("you are a normal user");
// }

//switch statement
// const charName = "Joshua";

// switch (charName) {
//   case "Jon":
//     console.log("House Targaryen");
//     break;
//   case "Sansa":
//   case "Rob":
//   case "Ned":
//     console.log("House Stark");
//     break;
//   case "Jaime":
//   case "Cersei":
//     console.log("House Lannister");
//     break;
//   default:
//     console.log("Character does not belog to an important house");
// }

//loops
//for loop
//needs three things:
// 1. where to start counting
// 2. when to stop counting
// 3. how much to increment by
// for (let i = 1; i <= 50; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i, "is an even number");
//   } else {
//     console.log(i, "is an odd number");
//   }
// }

//a for loop in reverse from 20 down to 5
// for (let i = 20; i >= 5; i -= 3) {
//   console.log(i);
// }

//FIZZ BUZZ
//make a loop to count to 1-100
//for every number that is divisible by 3 log 'FIZZ'
//for every number that is divisible by 5 log 'BUZZ'
//and for every number divisible by both, log 'FIZZ BUZZ'
//otherwise just log the number
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FIZZ BUZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else if (i % 3 === 0) {
//     console.log("FIZZ");
//   } else {
//     console.log(i);
//   }
// }

//while loop
let number = 11;
while (number <= 10) {
  console.log("inside of the while loop", number);
  number++;
}
do {
  console.log("the do loop");
  number++;
} while (number <= 10);

// Capitalize every other letter in a string 'aBcDeFgH'
const str = "abcdefghijklmnopqrs";
let capStr = "";
for (let i = 0; i < str.length; i += 1) {
  if (str[i] === "h") {
    break;
  }
  if (i % 2 !== 0) {
    capStr += str[i].toUpperCase();
  } else {
    capStr += str[i];
  }
}
console.log(capStr);

//try catch block
try {
  //go get some data
  //if you have the data, then show on page
} catch (error) {
  console.log(error);
}finally{
    console.log('this always happens, with try and catch')
}
