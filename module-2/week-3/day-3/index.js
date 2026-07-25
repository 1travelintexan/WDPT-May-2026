// //creating a promise
// const ourPromise = new Promise((resolve, reject) => {
//   if (2 + 2 === 5) {
//     resolve("here are all the pizzas");
//   } else {
//     reject("sorry no pizzas for you");
//   }
// });

//consuming a promise
// ourPromise
//   .then((theData) => {
//     console.log(theData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //callbacks
// function func1() {
//   setTimeout(() => {
//     console.log("Hi");
//   }, 2000);
// }

// function func2() {
//   console.log("Goodbye!");
// }

// func1();
// func2();

//passing a callback
// function func1(callback) {
//   // The `callback` parameter represents a function
//   setTimeout(() => {
//     console.log("Hi");
//     callback();
//   }, 2000);
// }

// function func2() {
//   console.log("Goodbye!");
// }

// func1(func2);

//callback hell
// const directions = [
//   "Starting point: Ironhack Miami",
//   "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
//   "➔ Turn right onto S Miami Ave",
//   "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
// ];

// function getDirections(step, callback, errorCallback) {
//   // setTimeout(() => {
//   console.log(directions[step]);

//   if (!directions[step]) errorCallback("Instructions not found.");
//   else callback();
//   // }, 2000);
// }

// // Single callback
// getDirections(
//   0,
//   () => {
//     getDirections(
//       1,
//       () => {
//         getDirections(
//           2,
//           () => {
//             getDirections(
//               3,
//               () => {},
//               () => {
//                 console.log("no step at that index");
//               },
//             );
//           },
//           () => {
//             console.log("no step at that index");
//           },
//         );
//       },
//       () => {
//         console.log("no step at that index");
//       },
//     );
//   },
//   () => {
//     console.log("no step at that index");
//   },
// );

//promises
const directions = [
  "Starting point: Ironhack Madrid",
  "➔ Turn right toward P. de la Chopera",
  "← At the roundabout, take the 1st exit onto P. de la Chopera",
  "* Lune Creperie P. de la Chopera 33, Madrid",
];

function obtainDirections(step) {
  return new Promise(function (resolve, reject) {
    if (!directions[step]) reject("Instructions not found.");
    else resolve(directions[step]);
  });
}

// obtainDirections(0)
//   .then(() => {
//     return obtainDirections(1);
//   })
//   .then(() => obtainDirections(2))
//   .then(() => obtainDirections(3))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("nice work, you arrived");
//   });

//async and await
async function getAllDirections() {
  try {
    const direction1 = await obtainDirections(-9);
    const direction2 = await obtainDirections(1);
    const direction3 = await obtainDirections(2);
    const direction4 = await obtainDirections(3);
    console.log({ direction1, direction2, direction3, direction4 });
  } catch (error) {
    console.log(error);
  }
}
// getAllDirections();

//real world ex

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
