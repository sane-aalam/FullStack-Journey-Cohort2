// A function in JavaScript is a set of statements that performs a task or  calculates a value
// It should take some input and return an output where there is some obvious
// relationship between the input and the output.
// Whey we need of function?
// Don't repeat yourself (simple)

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 6));

// declare the function of calculatedSum(Name of function)
function calculatedSum(n) {
  let ans = 0;
  for (let currentNumber = 0; currentNumber < n; currentNumber++) {
    ans += currentNumber;
  }
  // return the contorl of program where function is execute
  return ans;
}

let result1 = calculatedSum(50); // call the function
console.log(result1);

let result2 = calculatedSum(100);
console.log(result2);
