/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    const node = new TreeNode(preorder[0]);
    const index = inorder.indexOf(preorder[0]);
    const leftPreorder = preorder.slice(1, index + 1);
    node.left = leftPreorder.length ? buildTree(leftPreorder, inorder.slice(0, index)) : null;
    const rightPreorder = preorder.slice(index + 1);
    node.right = rightPreorder.length ? buildTree(rightPreorder, inorder.slice(index + 1)) : null;
    return node;
};