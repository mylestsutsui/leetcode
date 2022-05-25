// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 2

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
 * @return {number}
 */
 var minDepth = function(root) {
  // base case: if current root is null return 0 | if there are no child nodes we know were are on a leaf node, return 1
  if(!root) return 0;
  if(!root.left && !root.right) return 1;
  
  // declare left and right variables and set them equal to invokation of minDepth on child nodes
  // if there is only one left node but not a right, it can't be minimum depth since it's not a leaf node so set to infinity
  let left = root.left ? minDepth(root.left): Infinity;
  let right = root.right ? minDepth(root.right): Infinity
   
  // return the minimum value of the left and right branch of the tree
  return 1 + Math.min(left, right);
};