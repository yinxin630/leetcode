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
var longestZigZag = function(root) {
    let result = 0;
    function dfs(node, direction, step) {
        if (!node) {
            return;
        }

        step++;
        result = Math.max(result, step);

        if (direction === 'l') {
            dfs(node.right, 'r', step);
            dfs(node.left, 'l', 0);
        } else {
            dfs(node.left, 'l', step);
            dfs(node.right, 'r', 0);
        }
    }
    dfs(root, 'l', -1);
    dfs(root, 'r', -1);
    return result;
};
