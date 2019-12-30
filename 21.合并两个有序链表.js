/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let result = null;
    let current = null;

    while (l1 && l2) {
        let next = l1.val <= l2.val ? l1 : l2;
        if (!result) {
            result = next;
            current = next;
        } else {
            current.next = next;
            current = next;
        }

        if (l1 === next) {
            l1 = l1.next;
        } else {
            l2 = l2.next;
        }
    }

    while (l1) {
        if (!result) {
            result = l1;
            current = l1;
        } else {
            current.next = l1;
            current = l1;
        }

        l1 = l1.next;
    }

    while (l2) {
        if (!result) {
            result = l2;
            current = l2;
        } else {
            current.next = l2;
            current = l2;
        }

        l2 = l2.next;
    }

    return result;
};
// @lc code=end

