/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 * 
 * 有两种办法
 * 1. 用 Set 存 A 中存在的节点, 然后遍历 B 查找是否有重合
 * 2. 计算 A 和 B 的长度, 把较长的部分去掉使其等长, 然后 A 和 B 一起向下遍历
 *    因为 A 和 B 是等长的, 那么如果有相交则一定是当前遍历到的 a 和 b 节点相等
 *    如果找不到相等的节点, 那就是不想交
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    function getLen(head) {
        let c = 0;
        while (head) {
            c++;
            head = head.next;
        }
        return c;
    }
    const lenA = getLen(headA);
    const lenB = getLen(headB);
    if (lenA > lenB) {
        let n = lenA - lenB;
        while (n > 0) {
            n--;
            headA = headA.next;
        }
    } else {
        let n = lenB - lenA;
        while (n > 0) {
            n--;
            headB = headB.next;
        }
    }

    let curA = headA, curB = headB;
    while (curA && curB) {
        if (curA === curB) {
            return curA;
        }
        curA = curA.next;
        curB = curB.next;
    }
    return null;
};

// var getIntersectionNode = function(headA, headB) {
//     const set = new Set();
//     let a = headA;
//     while (a) {
//         set.add(a);
//         a = a.next;
//     }

//     let b = headB;
//     while (b) {
//         if (set.has(b)) {
//             return b;
//         }
//         b = b.next;
//     }

//     return null;
// };
// @lc code=end

