// Description
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Parameters
// always given two lists, always sorted

// Return
// return the head of the merged linked list and make sure the two lists are merged into one sorted list.

// Example
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Input: list1 = [], list2 = []
// Output: []

// Pseudocode
// declare a dummy node to have a previous pointer
// set a while loop of while both lists are not empty check if list one value is less than list two then move the previous pointer to l1 and l1 to the next node 
// and then have an else statement doing the same thing for for list 2
// once the while loop ends factor in the edge cases so move the prev pointer to which ever list wasnt empty

// Time complexity: O(n) where n is the number of nodes in the linked lists

// Space complexity: O(1) space is always constant regardless of the input size of the linked list



// My solution
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode()
    let prev = dummy

    while(l1 && l2){
        if(l1.val <= l2.val){
            prev.next = l1
            prev = l1
            l1 = l1.next
        }else {
            prev.next = l2
            prev = l2
            l2 = l2.next
        }
    }
    if(l1){
        prev.next = l1
    }else if(l2){
        prev.next = l2
    }
    return dummy.next
};