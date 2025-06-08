// 🙂 Array and Methods(all)
// A pair of square brackets [] represents an array in JavaScript. All the elements in the array are comma(,) separated.
// To access element, we can use indexes
// Provide lot of methods
// Iterative Methods(Map,filter,Reduce,Sum)

const mixedTypedArray = [100, true, "freeCodeCamp", {}];
console.log(mixedTypedArray);

// 🙂 Write function to remove elements into the array
function removeElement(numbers, targetElement) {
  let newNumbers = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] == targetElement) {
      continue;
    } else {
      newNumbers.push(numbers[index]);
    }
  }
  return newNumbers;
}

const numbers = [11, 12, 14, 15, 18, 19, 20];
const targetElement = 14;
let newNumbersArray = removeElement(numbers, targetElement);
console.log(newNumbersArray);

// 🙂 Write function to search element into the array.
// while-loop

function LinearSearch(nums, findElement) {
  let N = nums.length;
  let index = 0;
  while (index < N) {
    // target is equal to array element,
    // which means element is present into the array
    if (nums[index] == findElement) {
      return 1;
    }
    index++;
  }
  // element is not present into the array
  return 0;
}

// Linear Search Algorithm
// Time complexity - 0(N)
function LinearSearch(nums, targetValue) {
  let N = nums.length;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == targetValue) {
      return 1;
    }
  }
  return 0;
}

const nums = [11, 12, 14, 15, 18, 19, 20];
const findElement = 118;
let isPresentOrNOt = LinearSearch(nums, findElement);
console.log(isPresentOrNOt);

// 🙂 1. Arary Length
function ArrayLength(nums) {
  let counter = 0;
  for (let index = 0; index < nums.length; index++) {
    counter++;
  }
  console.log(counter);

  // pre-define
  console.log("size of array", nums.length);
}

ArrayLength([11, 12, 14, 151, 515, 111, 998]);

// 🙂 2. Array toString()
// convert array into string

function ArrayToString() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const stringFruits = fruits.toString();
  console.log(stringFruits);
}

ArrayToString();

// 🙂 3. Array at()
// The at() method returns the same as []

function ArrayFindElementAtIndex(nums) {
  const zeroIndexElement = nums.at(0);
  const oneIndexElement = nums.at(1);
  const twoIndexElement = nums.at(2);
  const fiveIndexElement = nums[4];
  console.log("original arary -", nums);
  console.log(
    "all indexes element - ",
    zeroIndexElement,
    oneIndexElement,
    twoIndexElement
  );
  console.log({
    oneIndexElement,
    zeroIndexElement,
    twoIndexElement,
    fiveIndexElement,
  });
}

ArrayFindElementAtIndex([11, 12, 14, 151, 515, 111, 998]);

// 4. Push,pop,shift,unshift(all)

function updatedElements(nums, insertedElement) {
  // perform end of the arary(push,pop)
  // perform start of the array(shift,unshift);
  // The shift() method removes the first array element and "shifts" all other elements to a lower index.
  // The Unshift() method inserts the first array element at index lower index(0)

  console.log("original array - ", nums);
  nums.push(insertedElement);
  console.log("after push element array - ", nums);
  nums.pop();
  console.log("after popped element array -", nums);
  nums.unshift(insertedElement);
  console.log("after push element array - ", nums);
  nums.shift();
  console.log("after pop element array - ", nums);
}

updatedElements([11, 12, 14, 151, 515, 111, 998], 17);

// 5. 😇 Merging Arrays (Concatenating)

function MergeAllStudents() {
  const myGirls = ["Cecilie", "Lone"];
  const myBoys = ["Emil", "Tobias", "Linus"];
  const myChildren = myGirls.concat(myBoys);
  console.log(myChildren);
  const orderBoysfirst = myBoys.concat(myGirls);
  console.log(orderBoysfirst);

  // copy of elements
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // numbers of times copy elements
  const newList = fruits.copyWithin(2, 0);
  console.log(newList);
}

MergeAllStudents();

// 6. 😇 Array flat()
// using forEach
// using Valina(pure for looping concept)
function convertMatrixIntoArray(matrix) {
  console.log("original matrix - ", matrix);
  console.log("typeof matix -", typeof matrix);
  let flatedArray = [];

  // forEach take callback function.
  // ES6
  matrix.forEach((element) => {
    let subArray = element;
    subArray.forEach((data) => {
      flatedArray.push(data);
    });
  });
  console.log("flated array -", flatedArray);
}

function convertMatrixIntoArray(matrix) {
  let falatedArray = [];
  for (let outterIndex = 0; outterIndex < matrix.length; outterIndex++) {
    // first row traversal
    // second row traversal
    // third row tarversal
    let array = matrix[outterIndex];
    for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
      falatedArray.push(array[innerIndex]);
    }
  }
  console.log("pure valina js -", falatedArray);
}

convertMatrixIntoArray([
  [1, 2],
  [3, 4],
  [5, 6],
]);

// 7. 😇 Slice method
// The slice() method slices out a piece of an array into a new array:
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

function SliceArrayElements() {
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus = fruits.slice(1);
  console.log(fruits);
  console.log(citrus);
}

SliceArrayElements();

// 8, 😇 The fill() array method
// The fill() method creates a new array.
// The fill() method modify any elements from the source array.

function fillNewMethod() {
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus = fruits.fill("apple");
  console.log(fruits);
  console.log(citrus);
}

fillNewMethod();

// 9. 😇 sort and reverse method

function sortedArray() {
  let array = [1, 2, 3, 4, 5];
  console.log("original arary", array);
  array.reverse();
  console.log("reverse -", array);
  array.sort();
  console.log("sort -", array);
}

sortedArray();
