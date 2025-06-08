// # How to Use JavaScript Arrow Functions – Explained in Detail
// What Is the Arrow Function Syntax?
// How to Convert a Regular Function to an Arrow Function Easily
// Why Arrow Functions Are Recommended Over Regular Functions
// Arrow Functions Are Better for Short Functions
// Arrow Functions Have an Implicit Return Statement
// Arrow Functions Don’t Have this Binding
// When You Should Not Use Arrow Functions?

// When you need to create a function in JavaScript,
// the main method is to use the function keyword followed by the function name as shown below

function gettingName(name) {
  let str = `Hello, ${name}!`;
  let str1 = `${name} is good boy!`;
  console.log(str);
  console.log(str1);
}

gettingName("John"); // Hello, John!

// convert into the arrow function
// When you declare a function with the arrow function syntax,
// you need to assign the declaration to a variable so that the function has a name.
// No need to write the functoin keyword.

const gettingParents = (name) => {
  let str = `Hello, ${name}!`;
  let str1 = `${name} is good boy!`;
  console.log(str);
  console.log(str1);
};

gettingParents("Alien");

// Array
const myArray = [1, 2, 3];

myArray.forEach(function (item) {
  console.log(item);
});

myArray.forEach((item) => console.log(item));

// Map
myArray.map((element, index, array) => {
  console.log(element, index, array);
});

// this(keyword)
const person = {
  name: "Nathan",
  skills: ["HTML", "CSS", "JavaScript"],

  // create the method to show the skills
  showSkills() {
    this.skills.forEach(function (skill) {
      console.log(`${this.name} is skilled in ${skill}`);
    });
  },
};

person.showSkills();
