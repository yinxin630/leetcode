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
var countNodes = function(root) {
  function dfs(node) {
    if (!node) {
      return 0;
    }
    return 1 + dfs(node.left) + dfs(node.right);
  }
  return dfs(root);
};
