/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let a = head;
    let b = head;
    let t = n;
    while (t && b.next) {
        b = b.next;
        t--;
    }
    while (b.next) {
        a = a.next;
        b = b.next;
    }

    if (a === b) {
        return null;
    } else if (t === 1) {
        return a.next;
    } else if (t === 2) {
        return head.next;
    }

    a.next = a.next.next;

    return head;
};
// @lc code=end

