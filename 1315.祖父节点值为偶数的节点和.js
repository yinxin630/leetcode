/**
 * 1. 递归遍历所有节点, 记录父节点和祖父节点
 * 2. 如果祖父节点存在, 且值为偶数, 则将当前节点值加到和
 * 3. 每轮计算后, 将父节点赋值给祖父节点, 当前节点赋值给父节点, 向下层节点递归
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
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    let result = 0;

    function t(node, a, b) {
        if (!node) {
            return;
        }

        if (a !== null && a % 2 === 0) {
            result += node.val;
        }

        a = b;
        b = node.val;
        if (node.left) {
            t(node.left, a, b);
        }
        if (node.right) {
            t(node.right, a, b);
        }
    }
    t(root, null, null);

    return result;
};
