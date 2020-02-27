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
var swapPairs = function(head) {
    if (!head.next) {
        return head;
    }

    const v = new ListNode();
    v.next = head;
    let cur = v;

    while (cur) {
        const a = cur.next;
        const b = a && a.next;

        if (b) {
            a.next = b.next;
            b.next = a;
            cur.next = b;
            cur = a;
        } else {
            break;
        }
    }

    return v.next;
};