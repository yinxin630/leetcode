/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 * 
 * 1. 存储每个点的最左端和最右端
 * 2. 新增点时, 判断左端是否存在, 存在则当前点的最左端为左端点的最左端, 右端点同理
 * 3. 新的点插入后, 更新该点所在的最左端点的最右端值, 和最右端点的最左端值
 * 4. 取每次最左和最右端点距离中的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = {};
    let result = 0;

    for (const n of nums) {
        if (map[n]) {
            continue;
        }
        map[n] = {};

        if (map[n - 1]) {
            map[n].left = map[n - 1].left;
        } else {
            map[n].left = n;
        }

        if (map[n + 1]) {
            map[n].right = map[n + 1].right;
        } else {
            map[n].right = n;
        }

        map[map[n].left].right = map[n].right;
        map[map[n].right].left = map[n].left;

        result = Math.max(result, map[n].right - map[n].left + 1);
    }

    return result;
};
// @lc code=end

