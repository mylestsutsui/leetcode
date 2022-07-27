// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., 
// from left to right, then right to left for the next level and alternate between).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

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
 var zigzagLevelOrder = function(root) {
    const output = [];
    if(!root) return output;
    const queue = [root];
    let reversed = false;
    
    while(queue.length) {
        let size = queue.length;
        const inner = [];
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            if(reversed) {
                inner.unshift(node.val);
            }else {
                inner.push(node.val);
            }
        }
        output.push(inner);
        reversed = !reversed;
    }
    return output;
};