// Description
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


//Parameters
//given an integer array nums 

//Return
// return true if any value in the array appears at least twice in the array false if every element is distinct

//Example
// Input: nums = [1,2,3,1]
// Output: true

//Pseudocode
// use a set to keep track of values seen in the array so far.. then iterate over the array with a for of loop and within the loop first check if the set already has the current num if so then return true bc that means its a duplicate and outside the loop return false bc its distinct

// Time complexity: linear O(n) because we iterate over n elements in the array

// Space complexity : linear O(n) because we created a set which takes up extra memory and could possibly hold n unique elements based on the input 


// My solution
var containsDuplicate = function(nums) {
    let numsSet = new Set()

    for(const num of nums){

        if(numsSet.has(num)){
            return true
        }
        numsSet.add(num)
    }
    return false
};