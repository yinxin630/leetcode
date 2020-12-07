/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let result = 0;
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] === k) {
      i++;
      j--;
      result++;
    } else if (nums[i] + nums[j] < k) {
      i++;
    } else {
      j--;
    }
  }
  return result;
};
