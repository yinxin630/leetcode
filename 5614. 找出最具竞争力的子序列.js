/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
  let result = [];
  let deleted = 0;
  for (let i = 0; i < nums.length; i++) {
    if (result.length === 0) {
      result.push(nums[i]);
    } else if (nums[i] >= result[result.length - 1]) {
      result.push(nums[i]);
    } else {
      while (result.length && result[result.length - 1] > nums[i] && deleted < nums.length - k) {
        deleted++;
        result.pop();
      }
      result.push(nums[i]);
    }
  }
  return result.slice(0, k);
};
