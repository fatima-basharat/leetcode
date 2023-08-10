// Description
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


// Parameters
// given an integer array nums

// Return
// return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0

// Example
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Pseudocode
// first start off by sorting the input array in ascending order
// then declare an empty results array that you want to return in the end
// use a for loop to iterate over the array
// in the loop check if the current element is equal to the previous element then continue
// declare variables for target which would be 0-nums[i] and your left and right pointers
// then run a while loop checking if the sum of the left and right pointers are greater than target, decrement the right pointer
// if the sum is less than the target increment the left pointer
// in the third case this means that the sum is === to target and we want to push the values onto our results array
// then check the cases to move each pointer
// finally return the results array outside the for loop


// Time complexity: O(n^2) due to sorting and nested loops

// Space complexity: O(n^2) - due to the results array


// My solution
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    const results = []

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i-1])continue

        let target = 0 - nums[i]
        let left = i+1
        let right = nums.length - 1

        while(left < right){
            const sum = nums[left] + nums[right]
            if(sum > target){
                right--
            }else if(sum < target){
                left++
            }else{
                results.push([nums[i], nums[left], nums[right]])
                while(nums[left] === nums[left+1]) left++
                while(nums[right] === nums[right-1]) right--
                left++
                right--
            }
        }
    }
    return results
}