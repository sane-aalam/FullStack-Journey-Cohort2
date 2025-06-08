/**
 * Algorithm of problem -
 * 1. consider first element as largest element into the array
 * 2. Go entire the array, search the element
 * 3. currentElement of array is greater than largestElement,
 * 4. Then we need to update the LargestElement of Array.
 * 5. Time complexity of problem statement - 0(N)
 * 6. Space Compleixty of problem statement - 0(1)
 */


class Solution {
  Findlargest(arr) {
    // code here
    let largestElement = -1000001;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > largestElement) {
        largestElement = arr[index];
      }
    }
    return largestElement;
  }
}
