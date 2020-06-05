/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);

    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length - 2; i++) {
        let a = i + 1;
        let b = nums.length - 1;
        while (a < b) {
            const sum = nums[a] + nums[b] + nums[i];
            if (Math.abs(target - sum) < Math.abs(target - result)) {
                result = sum;
            }
            if (sum < target) {
                a++;
            } else if (sum > target) {
                b--;
            } else {
                return target;
            }
        }
    }

    return result;
};