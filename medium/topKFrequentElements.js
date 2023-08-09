// Description
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


// Parameters
// given an integer array nums and an integer k

// Return
// return the k most frequent elements in any order.. return as an array

// Example
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Input: nums = [1], k = 1
// Output: [1]

// Pseudocode
// use a for of loop to iterate over the nums array
// use a hashmap to store each number as a key and if the element has already been seen in hashmap we increment the count otherwise intialize it to 0
// then we want to turn our hashmap to an array so use Object.entries(hashmap)
// then we want to sort our array in decending order based on frequency
// then we want to store the sorted elements in a new array and make sure each string is an integer
// finally return the first k elements of this array using the .slice method


// Time complexity: O(nlogn) because we used the sort function which was the worst case

// Space complexity: O(n) where n is the number of distinct elements in the nums array


// My solution
var topKFrequent = function(nums, k) {
    let hashmap = {}

    for(const num of nums){
        if(!hashmap[num]){
            hashmap[num] = 0
        }
        hashmap[num]++
    }

    const hashToArray = Object.entries(hashmap)
    const sortedArray = hashToArray.sort((a,b) => b[1] - a[1])
    const sortedElements = sortedArray.map(num => parseInt(num[0]))
    return sortedElements.slice(0, k)
};