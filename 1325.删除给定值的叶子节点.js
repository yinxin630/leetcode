/**
 * 1. DFS 判断当前节点是否为要删除的叶子节点, 是则返回 true, 否则返回 false
 * 2. 判断左右子节点删除情况, 如果都删除了, 则自身变为叶子节点, 再做一遍第1步判断
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    function dfs(node) {
        if (!node.left && !node.right) {
            return node.val === target;
        }

        
        if (node.left && dfs(node.left)) {
            node.left = null;
        }
        if (node.right && dfs(node.right)) {
            node.right = null;
        }

        if (!node.left && !node.right) {
            return node.val === target;
        }
        return false;
    }

    if (dfs(root)) {
        return null;
    }
    return root;
};
