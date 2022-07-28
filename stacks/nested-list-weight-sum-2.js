// You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may 
// also be integers or other lists.

// The depth of an integer is the number of lists that it is inside of. For example, the nested list 
// [1,[2,2],[[3],2],1] has each integer's value set to its depth. Let maxDepth be the maximum depth of any integer.

// The weight of an integer is maxDepth - (the depth of the integer) + 1.

// Return the sum of each integer in nestedList multiplied by its weight.

// Example 1:

// Input: nestedList = [[1,1],2,[1,1]]
// Output: 8
// Explanation: Four 1's with a weight of 1, one 2 with a weight of 2.
// 1*1 + 1*1 + 2*2 + 1*1 + 1*1 = 8

// Example 2:

// Input: nestedList = [1,[4,[6]]]
// Output: 17
// Explanation: One 1 at depth 3, one 4 at depth 2, and one 6 at depth 1.
// 1*3 + 4*2 + 6*1 = 17

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
 var depthSumInverse = function(nestedList) {
    let maxDepth = 0;
    const stack = [], results = [];
    let sum = 0;
    for(let i = 0; i < nestedList.length; i++) {
        stack.push([nestedList[i], 1]);
    }
    while(stack.length) {
        let [element, depth] = stack.pop();
        if(element.isInteger()) {
            results.push([element.getInteger(), depth])
        } else {
            element.getList().forEach(el => {
                stack.push([el, depth + 1])
            });
        }
        if(depth > maxDepth) maxDepth = depth;
    }
    results.forEach(item => {
        sum += item[0] * (maxDepth - item[1] + 1);
    })
    return sum;
};