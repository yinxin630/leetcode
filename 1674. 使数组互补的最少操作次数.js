/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function (nums, limit) {
  const diffArray = new Array(limit * 2 + 1).fill(0);

  function addValueInRange(diffArray, l, r, value) {
    if (l >= 0 && l < diffArray.length) {
      diffArray[l] += value;
    }
    if (r + 1 >= 0 && r + 1 < diffArray.length) {
      diffArray[r + 1] -= value;
    }
  }

  for (let i = 0; i < nums.length / 2; i++) {
    const a = nums[i];
    const b = nums[nums.length - 1 - i];

    addValueInRange(diffArray, 2, limit * 2, 2);
    addValueInRange(diffArray, 1 + Math.min(a, b), limit + Math.max(a, b), -1);
    addValueInRange(diffArray, a + b, a + b, -1);
  }

  let result = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = 2; i < diffArray.length; i++) {
    sum += diffArray[i];
    result = Math.min(result, sum);
  }
  return result;
};
