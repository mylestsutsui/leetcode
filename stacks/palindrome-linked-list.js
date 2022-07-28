// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let current = head;
    const stack = [];
    while(current) {
        stack.push(current.val);
        current = current.next;
    }
    let start = 0, end = stack.length - 1;
    while(start <= end) {
        if(stack[start] !== stack[end]) return false;
        start++;
        end--;
    }
    return true;
};