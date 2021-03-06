/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const result = [];
  const map = {};

  function dfs(node) {
    if (!node) {
      return 'null';
    }
    const arr = [node.val, ...dfs(node.left), ...dfs(node.right)];
    const key = arr.join(',');
    if (map[key] === 1) {
      result.push(node);
      map[key] = 2;
    } else if (!map[key]) {
      map[key] = 1;
    }
    return arr;
  }
  dfs(root);

  return result;
};

function arrayToTree(arr) {
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  if (arr.length === 0) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  const list = [root];
  let i = 1;
  while (list.length > 0) {
    const node = list.shift();
    if (typeof arr[i] === 'number') {
      node.left = new TreeNode(arr[i]);
      list.push(node.left);
    }
    i++;
    if (typeof arr[i] === 'number') {
      node.right = new TreeNode(arr[i]);
      list.push(node.right);
    }
    i++;
  }
  return root;
}
