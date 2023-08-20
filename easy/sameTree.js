// Description
// Given the roots of two binary trees p and q, write a function to check if they are the same or not

// Parameters
// given the roots of two binary trees

// Return
// return true if trees are identical, false if not

// Example
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Pseudocode
// this problem can be solved using recursive dfs
// first check all the base cases
// if both q and p are null then return true
// if just one is null and the other has a value return false
// finally if both of their values are not equal to each other return false
// then just call the function recursively and use a return statement which will return a boolean

// Time complexity: O(p + q) where p and q is the number of nodes in each tree
// Space complexity:

// My solution
var isSameTree = function(p, q) {
    if(p == null && q == null){
        return true
    }
    if((p == null && q != null) || (q == null && p != null)){
        return false
    }
    if(p.val != q.val){
        return false
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};