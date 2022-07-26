// Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, 
// return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

// Two nodes of a binary tree are cousins if they have the same depth with different parents.

// Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.

// Example 1:

// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false

// Example 2:

// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true

// Example 3:

// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    let xDepth, xParent, yDepth, yParent;
    
    const traverse = (root, depth, parent) => {
        if(!root) return;
        if(root.val === x) {
            xDepth = depth;
            xParent = parent;
        }
        if(root.val === y) {
            yDepth = depth;
            yParent = parent;
        }
        
        traverse(root.left, depth + 1, root);
        traverse(root.right, depth + 1, root);
    }
    traverse(root, 0, root);
    return xDepth === yDepth && xParent !== yParent;
};