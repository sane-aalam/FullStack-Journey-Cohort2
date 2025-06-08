// /^\d{10}$/

function checkValidPhone(phoneNumber) {
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

let res1 = checkValidPhone("1234567890");
let res2 = checkValidPhone("123456-7890");
let res3 = checkValidPhone("1&101-234567890");

console.log("res1 -", res1);
console.log("res2 -", res2);
console.log("res3 -", res3);

// output 
// res1 - true
// res2 - false
// res3 - false