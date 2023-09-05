// Description
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.


// Parameters
// given an array nums in sorted order

// Return
// return k which is the number of unique elements in num

// Example
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Pseudocode
// this problem can be solved with two pointers
// first initialize the left pointer at 1 since we know the first val in the nums array will always be unique and stay at that position
// then in a for loop initialize a right pointer at 1
// then you want to check and see if the val at the right pointer is not the same as the val of the number before it
// if this is true then wewant to put the new uniwue value where th eleft pointer is and increment the left pointer
// outside the for loop we return left since this is the number of unique elements in nums

// Time complexity: O(n) where n is the length of the nums array
// Space complexity: O(1) space is constant regarding input size


// My solution
var removeDuplicates = function(nums) {
    let left = 1

    for(let right = 1; right < nums.length; right++){
        if(nums[right] !== nums[right-1]){
            nums[left] = nums[right]
            left++
        }
    }
    return left
};