// Description
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.


// Parameters
// given the head of a singly linked list

// Return
// return the list modifying the order of the list's nodes

// Example
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// Pseudocode
// reordering this list can be done in a 4 step process 
// first find the middle of the list by using fast and slow pointers
// then break the linked list at the middle node
// then reverse the second half of the linked list
// then combine both lists alternating the order

// Time complexity: O(n) where n is the number of nodes in the list . It's O(n) time overall since in the worst case of each step it still takes linear time

// Space complexity: O(n) since extra space does not grow with the input size


// My solution
var reorderList = function(head) {
    //find mid
    let slow = head
    let fast = head
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }

    //break the linked list
    let current = slow.next
    slow.next = null
    
    //reverse second linked list
    let prev = null
    while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    //combine the lists
    let h1 = head
    let h2 = prev
    while(h2){
        let temp = h1.next
        h1.next = h2
        h1 = h2
        h2 = temp
    }
}