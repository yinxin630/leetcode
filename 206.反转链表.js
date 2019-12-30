/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return null;
    }

    let result = head;
    head = head.next;
    result.next = null;
    while (head) {
        const next = head.next;
        head.next = result;
        result = head;
        head = next;
    }
    return result;
};
// @lc code=end
