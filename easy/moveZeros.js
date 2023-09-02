// Description
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Parameters
// given an integer array nums

// Return
// return the array in place with all the 0's at the end of the array

// Example
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Pseudocode
// this can be solved using a two pointer approach
// first initialize a left pointer at 0
// then in a for loop initialize a right pointer at 0
// then check if the val at the right pointer is != to 0
// if this case if valid use a temp variable to hold nums[right] and swap the left and right pointers
// after doing the swap increment the left pointer so that its now on a 0 whcih can be used to swap 
// outside of the loop return nums since it now moved all the zeros to the end of the array

// Time complexity: O(n) where n is the length of the nums array
// Space complexity: O(1) space is constant regarding size of the input array


// My solution
var moveZeroes = function(nums) {
    let left = 0
    for(let right = 0; right < nums.length; right++){
        if(nums[right] != 0){
            let temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            left++
        }
    }
    return nums
};