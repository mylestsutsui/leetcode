// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
 

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]

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
 var levelOrderBottom = function(root) {
  const output = [];
  if(!root) return output;
  const queue = [root];
  
  while(queue.length) {
      const inner = [];
      const size = queue.length;
      for(let i = 0; i < size; i++) {
          const node = queue.shift();
          inner.push(node.val);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
      output.unshift(inner);
  }
  return output;
};