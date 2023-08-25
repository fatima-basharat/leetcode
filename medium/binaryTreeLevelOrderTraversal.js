// Description
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


// Parameters
// always given the root of a binary tree, root could be empty

// Return
// return the level order traversel of its nodes' values (from left to right level by level

// Example
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Input: root = [1]
// Output: [[1]]

// Input: root = []
// Output: []

// Pseudocode
// this can be solved using a BFS and implementing a queue data structure.
// begin by checking if the root is empty, return an empty array
// then initialze an empty queue and an empty result array which is what we want to return in the end
// then push the root onto the queue, this will serve as the starting point of the traversal.
// now in a while loop that will run while the queue has values in it,
// store the current length of the queue in a variable len which represents the number of nodes at the current level of the tree
// then initialize an empty array row to hold the values of the nodes at the current level
// then in a for loop iterate over each node at the current level it runs len times
// remove the first node from the queue and store it in a variable cur
// then check if cur has any children left to right, push it to the queue then push cur.val to the row array
// once this for loop executes that means each value at the current row is in the row array and now push this onto the result array
// the outer while loop continues to the next level and repeats this process until all levels of the tree are processed. 
// finally outside the while loop return the result array


// Time complexity: O(n) where n is the number of nodes in the tree

// Space complexity: O(n)


// My solution
var levelOrder = function(root) {
    if(!root){
        return []
    }

    const queue = []
    const result = []

    queue.push(root)
    while(queue.length){
        const len = queue.length
        const row = []
        for(let i = 0; i < len; i++){
            const cur = queue.shift()
            if(cur.left) queue.push(cur.left)
            if(cur.right) queue.push(cur.right)
            row.push(cur.val)
        }
        result.push(row)
    }
    return result
    
};