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
   // declare an output array to push inner arrays into
  const output = [];
  // edge case if no root is passed in
  if(!root) return output;
  // create a queue and initialize it with the root being the first element in it
  const queue = [root];
  
  // as long as there is something in the queue, keep performing operations
  while(queue.length) {
    //declare inner array to push the values for the row onto
      const inner = [];
      // declare size variable to know how many times to iterate over queue for that row
      const size = queue.length;
      // iterate over queue for current row
      for(let i = 0; i < size; i++) {
        // declare node and set it equal to first element in queue
          const node = queue.shift();
          // push node value to inner array
          inner.push(node.val);
          // check for children and add them to queue
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
      // after iterating through the row in the queue, push the inner array into the output
      output.unshift(inner);
  }
  return output;
};