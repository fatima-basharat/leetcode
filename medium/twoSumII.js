// Description
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.


// Parameters
// given a numbers array and a target number

// Return
// Return the indices of the two numbers that add up to the target but return the indices added by one

// Example
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]

// Pseudocode
// this can be solved using the two pointers approach
// first initialize a left pointer at 0 and a right pointer at the end of the numbers array
// then while left <= right create a sum variable to hold the value of numbers[left] + numbers[right]
// if the sum is less than the target left++
// else if the sum is greater than the target right--
// the final else condition would be that the sum is equal to the target so return [left+1, right+1]

// Time complexity: O(n) where n is the length of the numbers array

// Space complexity: O(1) uses a constant amount of space regardless of the input size


// My solution
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1

    while(left < right){
        let sum = numbers[left] + numbers[right]

        if(sum > target){
            right--
        }else if(sum < target){
            left++
        }else{
            return [left+1, right+1]
        }
    }
}