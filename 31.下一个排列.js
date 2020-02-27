/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i + 1] <= nums[i]) {
        i--;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--
        }
        const t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }

    let a = i + 1;
    let b = nums.length - 1;
    while (a < b) {
        const t = nums[a];
        nums[a] = nums[b];
        nums[b] = t;
        a++;
        b--;
    }

    return nums;
};
