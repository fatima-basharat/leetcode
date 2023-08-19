// Description
// Given the root of a binary tree, invert the tree, and return its root.

// Parameters
// will always be given an array, only containing integers

// Return
// return the root of the inverted tree

// Example
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Input: root = [2,1,3]
// Output: [2,3,1]

// Pseudocode
// this problem can be solved recursively
// so first check the base case if root === null then return null
// then in order to invert the binary tree you want to swap each left node with the right node and hold root.left in a temp variable
// after swaping the nodes make 2 recursive calls with the right and left subtrees of the current node 
// finally return root once the tree has been fully inverted 

// Time complexity: O(n) where n is the number of nodes in the tree
// Space complexity: O(n)


// My solution
var invertTree = function(root) {
    if(root === null){
        return null
    }
    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.right)
    invertTree(root.left)

    return root
};