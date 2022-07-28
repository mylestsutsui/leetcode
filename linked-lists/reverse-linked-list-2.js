// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes 
// of the list from position left to position right, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(!head) return null;
    
    let newNode = new ListNode();
    newNode.next = head;
    let temp = newNode;
    
    for(let i = 0; i < left - 1; i++) {
        temp = temp.next;
    }
    
    let tail = temp.next;
    
    for(let i = 0; i < right - left ; i++) {
        let temp2 = temp.next;
        temp.next = tail.next;
        tail.next = tail.next.next;
        temp.next.next = temp2
    }
    return newNode.next;
};