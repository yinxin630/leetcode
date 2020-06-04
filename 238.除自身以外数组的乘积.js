/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const a = [nums[0]];
    const b = [nums[nums.length - 1]];
    for (let i = 1; i < nums.length; i++) {
        a.push(a[i - 1] * nums[i]);
        b.push(b[i - 1] * nums[nums.length -1 - i]);
    }
    return nums.map((n, i) => {
        return (a[i - 1] === undefined ? 1 : a[i - 1]) * (b[b.length - 2 - i] === undefined ? 1 : b[b.length - 2 - i]);
    })
};