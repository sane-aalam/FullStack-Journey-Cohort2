// Class Stucture which can be re-usable
// Every class have at least one constructor()
// Whenever class is called

// Defining class using es6

class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name}.`;
  }
  getFullDetails() {
    let details = `full details ${(this.name, this.maker, this.engine)}`;
    return { details };
  }
}

// Making object with the help of the constructor

let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");
let bike3 = new Vehicle("TVS", "Suzuki", "1181E");

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());
console.log(bike1.getFullDetails());
