// Description
// Given the head of a linked list, remove the nth node from the end of the list and return its head

// Parameters
// head of linked list, integer n

// Return
// remove the nth node from the end of the list and return its head

// Example
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Pseudocode
// start by creating a dummy node with a value of 0 and set its next to the head of the linked list (this is done to handle edge cases where the head itself needs to be removed)
// then initialize a left pointer at the dummy node and a right pointer at the head
// then in a while loop the right pointer is moved forward by n nodes. this effectively creates a gap of 'n' nodes between left and right
// then in another while loop you want to advance both pointers simultaneously until right reaches null. 
// then after the second loop the left pointer is pointing to the node we want to remove so delete it by moving the second pointer twice 
// in the end return dummy.next since this points to the head of the modified linked list  

// Time complexity: O(n) where n is the number of nodes in the list

// Space complexity: O(1) since space created is constant regardless of the input 


// My solution
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head)
    left = dummy
    right = head

    while(n > 0 && right){
        right = right.next
        n--
    }

    while(right){
        left = left.next
        right = right.next
    }

    //delete
    left.next = left.next.next
    return dummy.next
};