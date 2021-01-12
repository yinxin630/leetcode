/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[max]) {
      max = i;
    }
  }
  return new TreeNode(
    nums[max],
    constructMaximumBinaryTree(nums.slice(0, max)),
    constructMaximumBinaryTree(nums.slice(max + 1)),
  );
};
