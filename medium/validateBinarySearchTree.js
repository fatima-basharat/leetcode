// Description
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).


// Parameters
// given the root of a binary tree

// Return
// return true if it is valid, false if not

// Example
// Input: root = [2,1,3]
// Output: true
// Input: root = [5,1,4,null,null,3,6]
// Output: false

// Pseudocode
// this problem can be solved with an inner helper function
// the inner helper function takes in 3 arguements, a node, min and max
// inside of it we want to note a base case that if node is null return true
// then check if the node.val is <= the min or the node.val is >= max return false since this is not a valid BST
// if the nodes value is in the correct range then the function continues recursively down the left and right subtrees
// for the left subtree the max val becomes the current nodes value
// for the right subtree the min val becomes the current nodes value
// this enforces BST properties on each node and its children
// combine the recursive calls on the left and right subtrees to make sure both satisfy the conditions
// then back in the main function call the helper function with the initial root and set the min val to -Infinity and max to Infinity
// put the helper call in a return statement to return a boolean

// Time complexity: O(n) where n is the number of nodes in the tree 

// Space complexity:


// My solution
var isValidBST = function(root) {

    const helper = (node, min, max) => {
        if(!node) return true
        if(node.val <= min || node.val >= max) return false
    
        return helper(node.left, min, node.val) && helper(node.right, node.val, max)
    }
    return helper(root, -Infinity, Infinity)
};