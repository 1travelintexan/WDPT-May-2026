//classes
//class defines the shape of the object
class Animal {
  //static property to count how many animals in total there are
  static numberOfAnimals = 0;
  //the shape {type: 'dog', size: '32kg'}
  //every class needs a constructor
  constructor(type, size, canWalk = true) {
    //you must bind the properties to the new instance of the class
    this.type = type;
    this.size = size;
    this.toys = [];
    this.canWalk = canWalk;
    Animal.numberOfAnimals++;
  }
  sleep() {
    console.log(`A ${this.type} is sleeping... zzzzzz`);
  }
  countNumberOfAnimals() {
    console.log(`The number of total animals is.... `, Animal.numberOfAnimals);
  }
}
const Trouser = new Animal("snake", "2lbs");
const Akil = new Animal("snake", "25lbs", "pizza");
Akil.countNumberOfAnimals();

//extending the parent class
class Dog extends Animal {
  static numberOfDogs = 0;
  #owner;
  constructor(name, type, size, age) {
    //the super keyword invokes the constructor from the parent class
    super(type, size);
    this.name = name;
    this.age = age;
    //static number of dogs to count all of the dogs in the world
    Dog.numberOfDogs++;
    //private owner property for the dogs
    this.#owner = "Joshua";
  }
  showOwner() {
    console.log(`The owner of this dog is...`, this.#owner);
  }
  bark() {
    console.log(`${this.name} says.... woof woof!`);
  }
  sleep() {
    console.log(`${this.name} is sleeping.... Zzzzzzzzz`);
  }

  //create a method to allow the Dog to have a birthday
  birthday() {
    this.age = this.age + 1;
    // this.age += 1;
    console.log(`${this.name} is turning ${this.age}`);
  }

  //I need a method to add a toy to the toys array
  giveToy(aToy) {
    this.toys.push(aToy);
    console.log(`${this.name} was good and got a toy`, this.toys);
  }

  //method to log the number of dogs
  countNumberOfDogs() {
    console.log(`The number of dogs is...`, Dog.numberOfDogs);
  }
}
//create a new class for Bird that extends the Animals
class Bird extends Animal {
  constructor(name, type, size, color) {
    super(type, size);
    this.name = name;
    this.color = color;
  }
  goFly() {
    console.log(`flap flap flap, ${this.name} is flying around`);
  }
}

//this is creating a new object
const Ragnar = new Dog("Ragnar", "Dog", "32kg", 5);
const Kiwi = new Bird("Kiwi", "Bird", ".1kg", "lime green");
// Ragnar.countNumberOfDogs();
console.log(Ragnar.showOwner());
Kiwi.goFly();
// console.log(Ragnar);
// console.log(Kiwi);
// Ragnar.sleep();
// Ragnar.sleep();
// Kiwi.sleep();
// Ragnar.birthday();
// Ragnar.giveToy("ball");
// Ragnar.giveToy("bone");
//trying to explain the 'this' keyword
// const object1 = {
//   name: "Joshua",
//   logThis: function () {
//     console.log(this);
//   },
// };
// object1.logThis();
