/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {
    let result = 0;
    function dfs(node) {
        if (!node) {
            return 0;
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (left === null || right === null || (node.left && node.left.val >= node.val) || (node.right && node.right.val <= node.val)) {
            return null;
        }
        const sum = left + right + node.val;
        result = Math.max(result, sum);
        return sum;
    }
    dfs(root);
    return result;
};