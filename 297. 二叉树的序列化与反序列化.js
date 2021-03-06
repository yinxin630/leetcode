function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) {
    return '';
  }
  const list = [root];
  const result = [];
  while (list.length > 0 && list.some((l) => l)) {
    const node = list.shift();
    result.push(node && node.val);
    if (node) {
      list.push(node.left);
      list.push(node.right);
    }
  }
  return result.map((x) => (typeof x === 'number' ? x : 'null')).join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length === 0) {
    return null;
  }
  const arr = data.split(',');
  const root = new TreeNode(parseInt(arr[0]));
  const list = [root];
  let i = 1;
  while (list.length > 0 && i < arr.length) {
    const node = list.shift();
    let nextVal = NaN;

    nextVal = arr[i] === 'null' ? NaN : parseInt(arr[i]);
    if (!isNaN(nextVal)) {
      node.left = new TreeNode(nextVal);
      list.push(node.left);
    }
    i++;
    nextVal = arr[i] === 'null' ? NaN : parseInt(arr[i]);
    if (!isNaN(nextVal)) {
      node.right = new TreeNode(nextVal);
      list.push(node.right);
    }
    i++;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
