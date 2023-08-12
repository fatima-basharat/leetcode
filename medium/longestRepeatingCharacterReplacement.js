// Description
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times


// Parameters
// given a string s and an integer k

// Return
// return the length of the longest substring containing the same letter you can get after performing the above operations

// Example
// Input: s = "ABAB", k = 2
// Output: 4

// Pseudocode
// use the sliding window method along with a hashmap to store the frequency of each letter seen in the window
// declare a result variable at 0 which will be updated and returned in the end
// also declare left pointer and a count map
// in a for loop iterate over the string
// at each iteration add the current char to your count map
// then declare a variable which gives the length of the current substring
// if the difference between the length of the current substring and the max frequency of any character in the current window is greater than k... decrement the count of the left boundary in our map and increment the left pointer to shrink the window
// after adjusting the left boundary calculate the length of the new substring and update the result val
// in the end result the result 



// Time complexity: O(n) where n is the length of the input string

// Space complexity: O(1) since additional space is constant regardless of the input size



// My solution
var characterReplacement = function(s, k) {
    let left = 0
    let count = new Map()
    let result = 0

    for(let right = 0; right < s.length; right++){
        let length = right - left + 1
        count.set(s[right], 1 + (count.get(s[right]) || 0))
        
        if((length - Math.max(...count.values())) > k){
            count.set(s[left], count.get(s[left]) - 1)
            left++
        }
        length = right - left + 1
        result = Math.max(result, length)
    }
    return result
}