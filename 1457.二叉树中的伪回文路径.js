// LeetCode 有 BUG, 最后一个测试用例直接 return 0 都会超时

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
var pseudoPalindromicPaths  = function(root) {
    const count = new Array(10).fill(0);
    let ji = 0;
    let result = 0;
    function dfs(node) {
        if (node === null) {
            return;
        }
        count[node.val]++;
        const x = count[node.val] % 2 === 1 ? 1 : -1;
        ji += x;
        if (!node.left && !node.right) {
            if (ji <= 1) {
                result++;
            }
        } else {
            node.left && dfs(node.left);
            node.right && dfs(node.right);
        }
        count[node.val]--;
        ji -= x;
    }
    dfs(root);
    return result;
};