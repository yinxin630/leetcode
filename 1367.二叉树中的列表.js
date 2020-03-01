/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    if (!head) {
        return true;
    }
    if (!root) {
        return false;
    }

    function dfs(lNode, node) {
        if (!lNode) {
            return true;
        }
        if (!node) {
            return false;
        }
        if (lNode.val !== node.val) {
            return false;
        }
        return dfs(lNode.next, node.left) || dfs(lNode.next, node.right);
    }

    return dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
};
