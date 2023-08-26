// Description
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.


// Parameters
// given the root of a BST and an integer k

// Return
// return the kth smallest value of all the values in the tree

// Example
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Pseudocode
// this problem can be solved using in order traversal on the BST
// start by initializing an empty values array which is what will store the BST nodes in order
// then define a recursive helper function
// it will take in the current node being traversed and the values array
// in that function first check if there is a left child, if so call the function recursively on it
// then push the value of the current node to the values array
// then check if there is a right child and if so call the function recursively on it
// after writing the helper function call the helper function and pass in the root node and values array
// in the end return the values array at k-1 index since this is the value being asked for

// Time complexity: O(n) where n is the number of nodes in the tree
// Space complexity: O(n) since each node could be places in the values array


// My solution
var kthSmallest = function(root, k) {
    const values = []

    const inOrder = (root, values) => {
        if(root.left) inOrder(root.left, values)
        values.push(root.val)
        if(root.right) inOrder(root.right, values)
    }

    inOrder(root, values)

    return values[k-1]
}