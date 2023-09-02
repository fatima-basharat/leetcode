// Description
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


// Parameters
// given an int array nums in non decreasing order

// Return
// return an array of the squares of each num sorted in non decreasing order

// Example
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Pseudocode
// this can be solved using a two pointer approach
// start by declaring a left and right pointer, and an empty result array
// then check if the left pointer squared is greater than the right pointer squared push that val to the result array and increment the left pointer
// else push the right val to the result array and decrement the right pointer
// once the while loop finishes return the result array with the .reverse() method since they asked for it to be sorted in non decreasing order.

// Time complexity: O(n) where n is the length of the nums array
// Space complexity: O(n) for the result array which can be equal to the size of nums


// My solution
var sortedSquares = function(nums) {
    let result = []
    let left = 0
    let right = nums.length - 1
 
    while(left <= right){
        if(nums[left] * nums[left] > nums[right] * nums[right]){
            result.push(nums[left] * nums[left])
            left++
        }else{
            result.push(nums[right] * nums[right])
            right--
        }
    }
    return result.reverse() 
 };