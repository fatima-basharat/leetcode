// Description
// Given an array of strings strs, group the anagrams together. You can return the answer in any order

// Parameters
// given an array of strings

// Return
// retun the array with all the anagrams grouped together

// Example
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Pseudocode
// use a hashmap and iterate over the array with a for loop... in that loop sort each string using .split('').sort().join('')
//then check if the sorted version of the word exists as a key of the results object and if it does then use .push to add that word to the array associated with that key
// else this means the key didnt exist so create a new array and assign that word to it..
// outside the loop return Object.values(result) since we want an array returned


// Time complexity: overall time complexity is O(n * k * log k), where n is the number of words in the input array and k is the average length of the words.

// Space complexity: O(n) since in the worst case all words are unique and and results object will have n entries each containing an array of words



// My solution
var groupAnagrams = function(strs) {
    let result = {}

    for(const word of strs){
        let sorted = word.split('').sort().join('')
        
        if(result[sorted]){
            result[sorted].push(word)
        }else{
            result[sorted] = [word]
        }
    }
    return Object.values(result)
};
