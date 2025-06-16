class Solution {
    getSecondLargest(arr) {
        // code here
        var n = arr.length;
        var first_largest_element = -1;
        var second_largest_element = -1;
        
        for(var i = 0; i<n; i++){
            if(first_largest_element < arr[i]){
                second_largest_element = first_largest_element;
                first_largest_element = arr[i];
            }else if(first_largest_element > arr[i] && second_largest_element < arr[i]){
                second_largest_element = arr[i];
            }
        }
        return second_largest_element;
    }
}