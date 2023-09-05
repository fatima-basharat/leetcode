// Description
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Parameters
// given an input string as an array of chars s

// Return
// you want to return the array reversed

// Example
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Pseudocode
// use a two pointer approach.. initialize left and right pointers, in a while loop declare a temp variable to hold the left index
// then reassign the left to the right pointer and the right to the temp variable
// then increment right pointer and decrement left to make sure pointers move with each iteration of the loop

// Time complexity: O(n) where n is the length of the input array
// Space complexity: O(1) modified input array in place


// My solution
var reverseString = function(s) {
    let left = 0
    let right = s.length - 1

    while(left <= right){
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
};