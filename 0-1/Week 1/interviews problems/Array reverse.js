
function reverseArrayMethod(arr) {
  let reverseArray = [];
  let n = arr.length - 1;

  for (let lastIndex = n; lastIndex >= 0; lastIndex--) {
    let backElement = arr[lastIndex];
    reverseArray.push(backElement);
  }
  console.log(reverseArray);
}

const arr = [12, 34, 40, 50];
reverseArrayMethod(arr);
