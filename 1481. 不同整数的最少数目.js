/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const map = {};
  for (const n of arr) {
    map[n] = (map[n] || 0) + 1;
  }
  const nums = Object.values(map);
  nums.sort((a, b) => a - b);

  let i = 0;
  while (k > 0 && i < nums.length) {
    if (nums[i] <= k) {
      k -= nums[i];
      i++;
    } else {
      break;
    }
  }
  return nums.length - i;
};
