// Description
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.


// Parameters
// always given a string containing the characters '(', ')', '{', '}', '[' and ']' we want to determine if its valid

// Return
// return a boolean that tells us if the input string was valid. brackets must be closed by the same type of brackets and in the same order

// Example
// Input: s = "()"
// Output: true
// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: false

// Pseudocode
// create a hashmap to match key value pairs of each open and closing bracket
// create an empty stack
// iterate over the string with a for of loop and check if you have encountered an opening bracket
// if it is an opening bracket then push the corresponding closing bracket to the stack
// the else case would be that you have encountered a closing bracket so check if the element at the top of the stack matches the character.. if not return false since its not balanced
// then outside the loop only return true if the stack is empty


// Time complexity: O(n) where n is the size of the input string

// Space complexity: O(n) where n is the size of the input string and each character could possibly be stored in the stack


// My solution

var isValid = function(s) {

    let hashmap = {
        "(":")",
        "{":"}",
        "[":"]"
    }

    let stack = []

    for(let char of s){
        if (hashmap[char]){
            stack.push(hashmap[char])
        }else{
            if(stack.pop()!== char){
                return false
            }
        }
    }
    return stack.length === 0
};