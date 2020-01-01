/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
 * 
 * 1. 中序遍历二叉搜索树, 得到结果是从小到大排好序的
 * 2. 然后问题就变成了两个有序数组合并问题
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    function getArray(tree) {
        const result = [];
        function left(node) {
            if (node.left) {
                left(node.left);
            }
            result.push(node.val);
            if (node.right) {
                left(node.right);
            }
        }
        if (tree) {
            left(tree);
        }
        return result;
    }

    const array1 = getArray(root1);
    const array2 = getArray(root2);

    const result = [];
    let a = 0;
    let b = 0;
    while (a < array1.length && b < array2.length) {
        if (array1[a] < array2[b]) {
            result.push(array1[a]);
            a++;
        } else {
            result.push(array2[b]);
            b++;
        }
    }
    while (a < array1.length) {
        result.push(array1[a]);
        a++;
    }
    while (b < array2.length) {
        result.push(array2[b]);
        b++;
    }

    return result;
};
// @lc code=end
