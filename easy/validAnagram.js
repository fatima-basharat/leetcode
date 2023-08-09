// Description
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//Parameters
// always given a string, always given 2 strings

//Return
// return true if t is an anagram of s and false if otherwise

//Examples
// Input: s = "anagram", t = "nagaram"
// Output: true 
// Input: s = "rat", t = "car"
// Output: false

//Pseudocode
// create two new variables to hold our new sorted strings
// take each given string use .split('') to convert to an array 
// then i would use .sort() which will sort the array into alphabetical order then .join('') to convert it back to a string
// then just compare both strings and return true if they match

// Time complexity: O(nlogn) because sorting the array using the built in sort function typically takes O(nlogn) time which is the worst case 

// Space complexity: O(n) because of the space used to store the sorted version of the strings and the intermediate arrays during the split and join 



// My solution
var isAnagram = function(s, t) {
    let sSorted = s.split('').sort().join('')
    let tSorted = t.split('').sort().join('')

    return sSorted === tSorted
}
