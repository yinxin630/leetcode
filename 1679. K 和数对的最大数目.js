/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  function binarySearch(i, j, v) {
    while (i <= j) {
      const mid = Math.ceil((i + j) / 2);
      if (nums[mid] === v) {
        return mid;
      } else if (nums[mid] < v) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
    return -1;
  }

  let result = 0;
  let i = 0;
  while (nums.length > 1 && i < nums.length - 1) {
    if (nums[i] >= k) {
      break;
    }

    if (k - nums[i] >= nums[i]) {
      const target = binarySearch(i + 1, nums.length - 1, k - nums[i]);
      if (target !== -1) {
        nums.splice(target, 1);
        nums.splice(i, 1);
        result++;
        continue;
      }
    }
    i++;
  }

  return result;
};
