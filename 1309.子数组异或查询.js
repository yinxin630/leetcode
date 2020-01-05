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

// console.log(xorQueries(arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]));
// console.log(xorQueries(arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]));

// const arr = new Array(30000).fill(3);
// const queries = new Array(30000).fill([0, 29999]);
// console.log(xorQueries(arr, queries));