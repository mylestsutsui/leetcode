// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, 
// level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]

// Example 3:

// Input: root = []
// Output: []

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const output = [];
    if(!root) return output;
    const queue = [root];
    
    while (queue.length) {
        const inner = [];
        const size = queue.length;
        
        for(let i = 0; i < size; i++) {
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            inner.push(node.val);
        }
        output.push(inner);
    }
    return output;
};