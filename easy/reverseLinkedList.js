// Description
// Given the head of a singly linked list, reverse the list, and return the reversed list.


// Parameters
// given head of linked list

// Return
// return it in reverse

// Example
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Pseudocode
// initialize two variables previous and current
// asign null to previous and assign head to current
// initialze a while loop to iterate over the linked list as long as the current node is not null
// inside the loop initalize a next variable to temporarily hold the reference of current.next since this will be modified in the next step
// then modify current.next = previous
// then shift your previous pointer to current and your current pointer to next
// outside the loop return previous since this pointer now points to the head of the reversed linked list

// Time complexity: O(n) where n is the number of nodes in the linked list

// Space complexity: O(1) since it uses a constant amount of extra space regardless of the input


// My solution
const reverseList = (head) => {
    let previous = null
    let current = head

    while(current){
        let next = current.next
        current.next = previous
        previous = current
        current = next
    }
    return previous
}