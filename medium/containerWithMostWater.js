// Description
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.




// Parameters
// given an integer array 'height' of length n

// Return
// you need to return the greatest area that can be found between two lines from their x axis

// Example
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// Pseudocode
//you can use a two pointer approach and declare a result var that you will return in the end.. then in a while loop compute the area by doing width(right-left) * (smaller height so use Math.min) height
//after declaring area update the result and then do the if cases to move your pointers
//if height at left pointer is less than height at right pointer then increment the left pointer.. else decrement the right pointer
// in the end return the result


// Time complexity: O(n) where n is the number of elements in the height array

// Space complexity: O(1) because the solution uses constant amount of additional space to store the result, left, right, and area variables 


// My solution
var maxArea = function(height) {
    let result = 0 
    let left = 0
    let right = height.length - 1

    while(left < right){
        let area = (right - left) * Math.min(height[left], height[right])
        result = Math.max(result, area)

        if(height[left] < height[right]){
            left++
        }else {
            right--
        }
    }
    return result
};