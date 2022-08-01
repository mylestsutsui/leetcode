// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Example 1:

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:

// Input: root = [1]
// Output: ["1"]

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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    const output = [];
    const dfs = (root, string = "") => {
        if(!root) return;
        if(!root.left && !root.right) output.push(string + root.val);
        let temp = root.val + "->";
        
        dfs(root.left, string + temp);
        dfs(root.right, string + temp);
    }
    dfs(root);
    return output;
};