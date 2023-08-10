// Description
// Given a string s, return true if it is a palindrome, or false otherwise.


// Parameters
// will always be a string, if empty always return true, s will consist of only ascii characters

// Return
// return true if the string reads to same forward and backwards false otherwise

// Example
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Input s = "aba"
// Output: true

// Pseudocode
// clean up the string by removing special characters and making sure the string is lowercase
// declare pointers on the right and left side of the string
// have a while loop of while left < right 
// in the loop first check if left character is not equal to the right return false
// then we want to increment left++ decrease right-- so it moves inwards, this while loop will continue till they both reach the middle point
// return true outside of the while loop


// Time complexity: O(n) where n is the length of the input string

// Space complexity: O(n) where n is the length of the input string


// My solution

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[\W_]/g, '')

    let left = 0
    let right = s.length - 1

    while(left < right){
        if(s[left] != s[right]){
            return false
        }
        left++
        right--
    }
    return true
}