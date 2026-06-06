//scope
//global scope
let pet = "Ragnar";

{
  //block scoped variable
  const innerVariable = "hello";
  //   console.log(innerVariable);
}

//functional scoped
function add(a, b) {
  let total = a + b;
  return total;
  //   console.log(total);
}
add(2, 3);

//hoisting
// console.log(differentVariable);
const name = "Joshua";
var differentVariable = "this is a var variable";

//functions are hoisted
function subtract(a, b) {
  return a - b;
}
//functions with the arrow function
const divide = (a, b) => {
  return a / b;
};
// console.log(divide(10, 5));

//shadowing
const age = 5;
if (2 + 2 === 4) {
  const age = 10;
  //   console.log(age);
}

//copies
const num1 = 12;
let num2 = num1;
num2 = 100;

const arr1 = [1, 2, 3, [4, 5, 6]];
const arr2 = arr1;
//the spread operator is a deep copy... only one level deep
const arr3 = [...arr1];
//this is a true deep copy
const arr4 = JSON.parse(JSON.stringify(arr1)); //'[1,2,3]' ---> [1,2,3]
//structure clone
const arr5 = structuredClone(arr1);
arr2[3].push(7);
arr3.push(100);
// console.log({ arr1, arr2, arr3, arr4, arr5 });

//asyncronous coding
//setTimeout
setTimeout(() => {
  //   console.log("three second has passed");
}, 3000);

//this is below the timeout
// console.log("this happens first");
//variables from the HTML
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const textBoxElement = document.getElementById("text-box");
//setInterval
let count = 0;
let intervalId;
//event listeners
startButton.addEventListener("click", () => {
  intervalId = setInterval(() => {
    count++;
    console.log("inside the interval", count);
    timerElement.innerText = count;
    if (count === 3) {
      textBoxElement.innerText = "Hey 3 is my lucky number :)";
      setTimeout(() => {
        textBoxElement.innerText = "";
      }, 2000);
    } else if (count === 7) {
      textBoxElement.innerText = "7 is also my lucky number :)";
      setTimeout(() => {
        textBoxElement.innerText = "";
      }, 2000);
    }
  }, 1000);
});
stopButton.addEventListener("click", () => {
  if (stopButton.innerText === "Stop") {
    console.log("stop clicked");
    stopButton.innerText = "Reset";
    clearInterval(intervalId);
  } else if (stopButton.innerText === "Reset") {
    count = 0;
    timerElement.innerText = count;
    stopButton.innerText = "Stop";
  }
});
