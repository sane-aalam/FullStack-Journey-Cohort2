// snytax method -

/*
var new_array = arr.map(function callback(element, index, array) {
     Return value for new_array
}[, thisArg])
*/

const myArray = [1, 2, 3];

myArray.forEach(function (item) {
  console.log(item);
});

myArray.forEach((item) => console.log(item));

// Map
myArray.map((element, index, array) => {
  console.log(element, index, array);
});

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10

const EvenNumber = numbers.filter((element) => {
  return element % 2 == 0;
});

console.log(EvenNumber);
