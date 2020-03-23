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
var middleNode = function(head) {
    let length = 0;
    for (let t = head; t;) {
        length++;
        t = t.next;
    }

    length = length >> 1; 
    let result = head;
    while (length > 0) {
        result = result.next;
        length--;
    }
    return result;
};