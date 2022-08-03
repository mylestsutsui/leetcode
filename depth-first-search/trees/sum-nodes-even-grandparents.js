// Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no 
// nodes with an even-valued grandparent, return 0.

// A grandparent of a node is the parent of its parent if it exists.

// Example 1:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value 
// grandparents.

// Example 2:

// Input: root = [1]
// Output: 0

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
 var sumEvenGrandparent = function(root) {
    let sum = 0;
    const dfs = (root, parent = 1, grandParent = 1) => {
        if(!root) return;
        if(grandParent % 2 === 0) sum += root.val;
        dfs(root.left, root.val, parent);
        dfs(root.right, root.val, parent);
    }
    dfs(root);
    return sum;
};