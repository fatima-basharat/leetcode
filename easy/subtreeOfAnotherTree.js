// Description
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.


// Parameters
// always given the roots of two binary trees

// Return
// return true if subroot is in root false if it is not

// Example
//Input: root = [3,4,5,1,2], subRoot = [4,1,2]
//Output: true

// Pseudocode
// this problem can be solved using a helper function which will check if two trees are the same
// in the sametree helper function check if both branches are null return true
// then check if one tree has a val but the other is null return false
// then check if their values dont match return false
// then recursively call this function on the left and right subtrees of both trees
// now back in our main function if the subroot is null this can be a subtree of any tree so return true
// if root is null there is no subtree to be found so return false
// then check if when you call the sametree function on the root and subroot, if that evaluates to true return true
// finally if none of the conditions are met then check if the subroot is a subtree of the left subtree or right subtree of root


// Time complexity: O(M * N) where M and N are the sizes of the two trees being compared

// Space complexity:


// My solution
var isSubtree = function(root, subRoot) {
    if(subRoot === null){
        return true
    }
    if(root === null){
        return false
    }
    if(sameTree(root, subRoot)){
        return true
    }

    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
};

let sameTree = function(r,s){
    if(r === null && s === null){
        return true
    }
    if((r === null && s != null) || (s === null && r != null)){
        return false
    }
    if(r.val != s.val){
        return false
    }

    return sameTree(r.left, s.left) && sameTree(r.right, s.right)
}