/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  const result = new Array(k);

  let length = 0;
  let node = root;
  while (node) {
    length++;
    node = node.next;
  }

  const pre = Math.floor(length / k);
  node = root;
  for (let i = 0; i < result.length; i++) {
    if (!node) {
      result[i] = null;
      continue;
    }

    let currentLength = pre + (length % k > i ? 1 : 0);
    result[i] = node;
    while (node && currentLength > 1) {
      node = node.next;
      currentLength--;
    }
    if (node) {
      const next = node.next;
      node.next = null;
      node = next;
    }
  }

  return result;
};
