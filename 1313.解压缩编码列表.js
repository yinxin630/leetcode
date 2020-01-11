/**
 * 1. 取出每一组数, 创建 a 长度值为 b 的数组
 * 2. 将数组展开后, 添加到 result 中
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i += 2) {
        result.push(
            ...new Array(nums[i]).fill(nums[i + 1])
        )
    }
    return result;
};
