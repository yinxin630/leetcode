/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 * 
 * 1. dfs 的返回值表示: 将当前节点作为根节点的[单行线]最大和
 * 2. 对于每个节点, 取到[左子树单行线最大和]和[右子树单行线最大和], 再加上自身节点值就是以当前节点作为根节点的完整路径和
 * 3. 取最大的路径和即可
 */

// @lc code=start
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
var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;

    function dfs(node) {
        if (!node) {
            return 0;
        }
        const lMax = Math.max(node.left && dfs(node.left), 0);
        const rMax = Math.max(node.right && dfs(node.right), 0);
        max = Math.max(max, lMax + rMax + node.val);
        return Math.max(lMax + node.val, rMax + node.val);
    }
    dfs(root);

    return max;
};
// @lc code=end
