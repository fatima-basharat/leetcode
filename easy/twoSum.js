// Description
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


//Parameters
//always given an array of integers nums and an integer target 

//Return
// we want to return the indices of the two numbers that add up to target in nums

//Example
//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

//Pseudocode
// use a hashmap to store numbers as we iterate over the array
// in a for loop then declare a variable to hold num at each iteration and a goal subtraction that we want which is target-num
// then check to see if the hashtable has the goal and if so return the indices of i and the goal val from our hashmap
// else just set the num and i in our hashmap

// Time complexity: O(n) where n is the length of the input array in the loop
// Space complexity: O(n) because in the worst case all elements of nums are unique and need to be stored in the hashmap 


// My solution
let twoSum = function(nums, target) {
    let hashMap = new Map()

    for(let i = 0; i<nums.length; i++){
        let num = nums[i]
        let goal = target - num

        if(hashMap.has(goal)){
            return [i, hashMap.get(goal)]
        }else{
            hashMap.set(num, i)
        }
    }
}
