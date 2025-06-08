// JavaScript program to find the second largest element in the array

function getSecondLargest(arr) {
  const n = arr.length;

  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
      // student-1 have maximum marks, but student second marks greater than to current Marks have.
      // Update the marks of students 2.
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(getSecondLargest(arr));
