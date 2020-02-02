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
var maxProduct = function(root) {
    let a = 0;
    let b = 0;

    let sum = 0;
    function dfs(node) {
        if (!node) {
            return 0;
        }
        sum += node.val;
        node.lSum = dfs(node.left);
        node.rSum = dfs(node.right);
        return node.val + node.lSum + node.rSum;
    }
    dfs(root);

    let result = 0;
    function cal(node) {
        result = Math.max(result, node.lSum * (sum - node.lSum), (sum - node.rSum) * node.rSum);
        if (node.left) {
            cal(node.left);
        }
        if (node.right) {
            cal(node.right);
        }
    }
    cal(root);

    return result % 1000000007;
};
