function BinarSearch(arr) {
  let target = 50;
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let middIndex = Math.floor((startIndex + endIndex) / 2);

  while (startIndex <= endIndex) {
    console.log("middle index of -", middIndex);
    if (arr[middIndex] == target) {
      return middIndex;
    } else if (arr[middIndex] < target) {
      startIndex = middIndex + 1;
    } else {
      endIndex = middIndex - 1;
    }
    // update the middle index
    middIndex = Math.floor((startIndex + endIndex) / 2);
  }
  return -1;
}

const arr = [12, 34, 40, 50];
console.log(BinarSearch(arr));
