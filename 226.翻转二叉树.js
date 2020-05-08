/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function dfs(node) {
        if (!node) {
            return node;
        }
        const { left, right } = node;
        node.left = invertTree(right);
        node.right = invertTree(left);
        return node;
    }
    return dfs(root);
};