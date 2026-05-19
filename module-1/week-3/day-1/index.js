//functions
//declaring a function with the function keyword
function add(number1, number2, aWord) {
  const total = number1 + number2;
  console.log("here is the total, ", total);
}
//declariing a function with a fat arrow
const subtract = () => {
  console.log("we subtracted some things");
};
//invoking a function
// add(2, 3, "hello");
// subtract();

//arrays
const pizzaTypes = ["Pineapple", "Pepp", "Cheese", "Meat lovers"];
const slicePractice = pizzaTypes.slice(0, 4);
//.push() this adds to the end of the array
pizzaTypes.push("Vegan");
//.pop() removes from the end
pizzaTypes.pop();
//.shift() removes from the front of the array
pizzaTypes.shift();
//.unshift adds something new to the front of the array
pizzaTypes.unshift("Pineapple after unshift");

//.splice is NOT .slice and it removes and adds elements to the array at certain indexes
//three arguments
//1. the starting index
//2. the delete count
//3. elements to add at that index (optional)
pizzaTypes.splice(
  1,
  2,
  "this is added during the splice",
  "this is pretty cool",
);
// console.log(pizzaTypes);

//.split() this splits a string into an array
const greeting = "this is a sentence for the split.";
// console.log(greeting.split(" ").reverse().join(" "));

//create an array of pet names
// add two pet names to the back and to the front of the array
//remove the last name from the array
//remove the middle name from the array and add 'Ragnar'
//loop over the array and print to the terminal each pet name

//.forEach() array method
const numArr = [1, 2, 3, 4, 5];
const doubledArr = [];
numArr.forEach((oneNum, index) => {
  const theNumDoubled = oneNum * 2;
  doubledArr.push(theNumDoubled);
});
// console.log({ numArr, doubledArr });

//for loop for the same purpose
// for(let i=0; i<numArr.length; i++){
//   const currentElement = numArr[i]
// }

//write a function that takes two arguments and  counts the number of times a name is repeated
const namesArr = [
  "Joshua",
  "Joao",
  "Ragnar",
  "Miguel",
  "Ragnar",
  "Ragnar",
  "Joao",
];
//declaring the fuction
function countNames(array, name) {
  let count = 0;
  //JC code
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === name) {
  //     count++;
  //   }
  // }

  //with a forEach
  array.forEach((oneName) => {
    if (oneName === name) {
      count = count + 1;
    }
  });

  return count;
}
//calling the function
const nameCount = countNames(namesArr, "Ragnar");
// console.log(nameCount);

//double every number in an array
const arrOfNums = [2, 5, 10];
function doubleArray(arr) {
  const newArray = [];
  arr.forEach(function (aNumber) {
    newArray.push(aNumber * 2);
  });
  return newArray;
}
console.log(doubleArray(arrOfNums));
