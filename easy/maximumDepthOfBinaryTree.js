// Description
// Given the root of a binary tree, return its maximum depth

// Parameters
// always given root of a binary tree

// Return
// return its maximum depth

// Example
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Input: root = [1,null,2]
// Output: 2

// Pseudocode
// this problem can be solved using recursive dfs
// first right the base base which is that if the root is null return 0 since that means you've reached the end of the tree
// but if the root is not null the max depth is found by recursively calling the maxdepth function on both the left and right nodes and then adding the max val between those two to 1 to account for the current level of the root node


// Time complexity: O(n) where n is the number of nodes in the tree

// Space complexity: O(h) where h is the height of the tree


// My solution
var maxDepth = function(root) {
    if(root===null){
        return 0
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};