// Description
// Given a string s, find the length of the longest substring without repeating characters.
// sliding window problem w auxillary data structure (find longest substring without repeating chars)


// Parameters
//always given an input string of any length

// Return
//we want to return an int being the length of the longest substring seen without repeating chars

// Example
//Input: s = "abcabcbb"
//Output: 3
//Input: s = "bbbbb"
//Output: 1

// Pseudocode
//start by declaring variables for left pointer, result, and set to hold unique characters
//then in a for loop declare the right pointer and iterate with it
// first state a while loop to check if our set has s[right] then delete s[left] since its a duplicate and increment left++ pointer
// outside the while loop add s[right] to the set at each iteration 
// update the result with prev result and set.size


// Time complexity: O(n) where n is the length of the input string

// Space complexity: O(k) where k is the number of unique characters in a string stored in the set  



// My solution

var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let left = 0 
    let max = 0

    for(let right = 0; right < s.length; right++){
        if(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        max = Math.max(max, set.size)
    }
    return max
}