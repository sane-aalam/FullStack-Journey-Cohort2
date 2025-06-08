var a = 10; // Old style
let b = 20; // Prferred for non-const
const c = 30; // Preferred for const (cannot be changed)

console.log(a);
console.log(b);
console.log(c);

// 2. Access of varible
// Var - Can be accessed outside block if within the function.
// Let,cosnt - Can not be accessed outside block if within the function.

var userAccountBalance = 100001;
if (true) {
  console.log(userAccountBalance);
  var updateBalanced = 2 * userAccountBalance;
  //   let takeBalanced = 1700;
}

console.log(updateBalanced);
// console.log(takeBalanced);
// takeBalanced is not defined

// 3. Hosting concept
// NamasteJavascript L-3 (hosting)
// we are trying to acces even before we have initilize it.
// Any varibles are store undefined (phase-1)
// Any function store completed same to same (phase-1)
// variable - undefined
// function - whole function store (actual copy of function)
// This is reason of displying undefined.
// Next time into interview don't say - top file into codebase. (rejected 100%)

getName(); // function called

console.log(x); // undefined
var x = 7;

// function declaration
function getName() {
  console.log("Hello 100xdevs");
}
