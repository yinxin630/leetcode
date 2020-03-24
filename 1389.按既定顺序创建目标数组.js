/*
直接构建结果数组, 按所在 index 逐个插入
*/

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const result = [];
    for (let i = 0; i < index.length; i++) {
        result.splice(index[i], 0, nums[i]);
    }
    return result;
};
