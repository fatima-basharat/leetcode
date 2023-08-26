// Description
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.


// Parameters
// given two integer arrays with preorder and inorder traversal 

// Return
// construct and return the binary tree

// Example
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Pseudocode
// first set the base case for recursion being that if the preorder array or inorder array is empty return null
// then assign the first node of preorder to the root
// then where ever the value of that root is in the inorder array set that to be the mid value
// this mid splits the in order array into left and right subtrees
// then you want to recursively construct the left and right subtrees
// for the left subtree call the buildTree function from the second element to the mid+1 and the inorder is from the beginning to mid
// then for the right subtree call the buildTree function and pass in the preorder at mid+1 and the inorder at mid+1
// finally return the root since this has the full construction now with its left and right subtrees


// Time complexity O(n^2)
// Space complexity: O(n)


// My solution
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null

    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(root.val)

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1))

    return root
};