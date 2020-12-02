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
var countNodes = function (root) {
  function isExist(level, k) {
    let bits = 1 << (level - 1);
    let node = root;
    while (node && bits) {
      if (k & bits) {
        node = node.right;
      } else {
        node = node.left;
      }
      bits = bits >> 1;
    }
    return node;
  }

  if (!root) {
    return 0;
  }

  let level = 0;
  let node = root;
  while (node.left) {
    level++;
    node = node.left;
  }

  let l = 1 << level;
  let r = (1 << (level + 1)) - 1;
  while (l < r) {
    const mid = Math.ceil((l + r) / 2);
    if (isExist(level, mid)) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
};
