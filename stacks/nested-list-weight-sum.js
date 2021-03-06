// You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements 
// may also be integers or other lists.

// The depth of an integer is the number of lists that it is inside of. For example, the nested list 
// [1,[2,2],[[3],2],1] has each integer's value set to its depth.

// Return the sum of each integer in nestedList multiplied by its depth.

// Example 1:

// Input: nestedList = [[1,1],2,[1,1]]
// Output: 10
// Explanation: Four 1's at depth 2, one 2 at depth 1. 1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10.

// Example 2:

// Input: nestedList = [1,[4,[6]]]
// Output: 27
// Explanation: One 1 at depth 1, one 4 at depth 2, and one 6 at depth 3. 1*1 + 4*2 + 6*3 = 27.

// Example 3:

// Input: nestedList = [0]
// Output: 0

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
 var depthSum = function(nestedList) {
    let sum = 0;
    let stack = [];
    
    nestedList.forEach(el => {
        stack.push([el, 1]);
    })
    
    while(stack.length) {
        let [val, depth] = stack.pop();
        if(val.isInteger()) {
            sum += val.getInteger() * depth;
        } else {
            val.getList().forEach(el => {
                stack.push([el, depth + 1]);
            })
        }
    }
    return sum;
    
};