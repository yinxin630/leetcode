/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 子数组异或查询
 * 
 * 1. 试了一下最大数据也就执行 1.8s, 直接计算没啥优化就过了
 * 
 */

 /**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        result[i] = 0;
        for (let j = queries[i][0]; j <= queries[i][1]; j++) {
            result[i] ^= arr[j];
        }
    }

    return result;
};
