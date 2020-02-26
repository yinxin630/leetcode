/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let a = 0;
    let b = nums.length - 1;
    while (a <= b) {
        const mid = (a + b) >> 1;
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }

        if (nums[a] < nums[b] || nums[mid] < nums[a]) {
            b = mid - 1;
        } else {
            a = mid + 1;
        }
    }

    return nums[0];
};
