class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        // code here
        var largestElement = -1;
        var n = arr.length;
        
        for(var index = 0; index < n; index++){
            if(largestElement < arr[index]){
                largestElement = arr[index];
            }
        }
        return largestElement;
    }
}
