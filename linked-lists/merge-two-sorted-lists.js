// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of 
// the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: list1 = [], list2 = []
// Output: []

// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let newHead = null;
    let l1 = list1, l2 = list2;
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val < l2.val) {
        newHead = l1;
        l1 = l1.next;
    } else {
        newHead = l2;
        l2 = l2.next;
    }
    let current = newHead;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        } 
        current = current.next;
    }
    if (l1 || l2) {
        current.next = (l1 || l2);
    }
    return newHead;
};