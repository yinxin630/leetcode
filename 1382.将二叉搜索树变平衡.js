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
var balanceBST = function(root) {
    const arr = [];
    function dfs(node) {
        if (!node) {
            return;
        }
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    }
    dfs(root);

    function buildTree(i, j) {
        if (i > j) {
            return null;
        }
        const mid = (i + j) >> 1;
        const node = new TreeNode(arr[mid]);
        node.left = buildTree(i, mid - 1);
        node.right = buildTree(mid + 1, j);
        return node;
    }
    return buildTree(0, arr.length - 1);
};