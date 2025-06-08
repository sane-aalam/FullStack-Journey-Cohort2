// valid user email id
function validRegExp(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

let result1 = validRegExp("test@example.com");
let result2 = validRegExp("sane@gmai.com");
let result3 = validRegExp("test@.com");
let result4 = validRegExp("@example.com");

console.log("result1 -", result1);
console.log("result2 -", result2);
console.log("result3 -", result3);
console.log("result4 -", result4);
