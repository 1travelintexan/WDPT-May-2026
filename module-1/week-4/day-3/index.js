const students = [
  {
    name: "Miguel",
    email: "m@m.com",
    phoneNumber: "1234567678",
    premium: true,
    money: 70,
  },
  {
    name: "Moises",
    email: "mo@m0.com",
    phoneNumber: "1234567678",
    premium: false,
    money: 500,
  },
  {
    name: "JC",
    stuentEmail: "jc@jc.com",
    phoneNumber: "1234567678",
    premium: true,
    money: 5,
  },
  {
    name: "Joao",
    email: "j@j.com",
    phoneNumber: "1234567678",
    premium: false,
    money: 70,
  },
];

//.map()
//looping over an array and pulling certain data out of each element
//example of emails
//non-one liner version
const arrayOfEmails = students.map((oneStudent) => {
  return oneStudent.email;
});
//*************one liner version */
// const arrayOfEmails = students.map((oneStudent) => oneStudent.email);
// console.log(arrayOfEmails);

//.filter() used to remove elements from an array
const premiumStudents = students.filter((student) => student.premium);
//   .map((student) => student.name);

// const richStudents = students.filter((student) => {
//   if (student.money > 50) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(premiumStudents);

//.reduce() perfect for summing numbers for a cart or bank accounts
const numsArray = [3, 4, 5, -9, 6, 78];
const totalMoney = students.reduce((acc, student) => {
  if (student.money) {
    return acc + student.money;
  } else {
    return acc;
  }
}, 0);

const totalNums = numsArray.reduce((acc, number) => {
  return number + acc;
}, 0);

//.sort()
const nums = [1, 21, 21, 2000, 50, 76, 11];
// nums.sort((currentNumber, nextNumber) => {
//   if (currentNumber > nextNumber) {
//     return -1;
//   } else if (currentNumber < nextNumber) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

//oneliner
nums.sort((a, b) => b - a);

//sort the students array based on the .money
students.sort((currentStudent, nextStudent) => {
  if (currentStudent.money > nextStudent.money) {
    return -1;
  } else if (currentStudent.money < nextStudent.money) {
    return 1;
  } else {
    if (currentStudent.name.localeCompare(nextStudent.name) === 1) {
      return 1;
    } else if (currentStudent.name.localeCompare(nextStudent.name) === -1) {
      return -1;
    } else {
      return 0;
    }
  }
});

//.reverse()
const str = "hello world this is fun";
const reversedString = str.split(" ").reverse().join("-----");
console.log(reversedString);
