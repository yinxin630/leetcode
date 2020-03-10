/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = -1;
    let j = 0;
    while (j < nums.length) {
        if (nums[j] === nums[i] && nums[j] === nums[i - 1]) {
            j++;
            continue;
        }
        i++;
        nums[i] = nums[j];
        j++;
    }
    return i + 1;
};