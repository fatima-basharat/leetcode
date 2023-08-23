// Description
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.


// Parameters
// given the root of a BST, a value of q and a value of p

// Return
// return the lowest common ancestor of q and p in the tree

// Example
//Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
//Output: 6

// Pseudocode
// initiliaze curr at the root of the tree
// then in a while loop until curr is null
// check if both the values of q and p are greater than the curr.val then shift curr to its right child since that means the lca is in the right subtree
// then check the opposite if the values of q and p are less than the curr.val then shift curr to its left child to check the left subtree
// the else case is that one of the values is smaller and one is greater which means curr is on the number where the split occured so return curr since this is the lca


// Time complexity: O(logn) since at each iteration it either moves left or right effectively reducing the search time by half
// Space complexity: O(1) no extra space is being created regardless of the input size


// My solution
var lowestCommonAncestor = function(root, p, q) {
    let curr = root

    while(curr){
        if(p.val > curr.val && q.val > curr.val){
            curr = curr.right
        }else if(p.val < curr.val && q.val < curr.val){
            curr = curr.left
        }else{
            return curr
        }
    }
};