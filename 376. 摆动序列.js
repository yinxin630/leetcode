/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  const dp1 = [];
  const dp2 = [];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    dp1[i] = 1;
    dp2[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp1[i] = Math.max(dp1[i], dp2[j] + 1);
      } else if (nums[i] < nums[j]) {
        dp2[i] = Math.max(dp2[i], dp1[j] + 1);
      }
    }
    max = Math.max(max, dp1[i], dp2[i]);
  }
  return max;
};
