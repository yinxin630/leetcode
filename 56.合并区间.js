/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 * 
 * 1. 将区间排序, 小的在前面
 * 2. 记录当前区间, 对于每一项, 先判断是否与区间相连
 * 3. 相连且右侧值更大则拼接, 否则忽略
 * 4. 不相连则将上一个区间存起来, 该区间作为新当前区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            if (a[1] <= b[1]) {
                return -1;
            } else {
                return 1;
            }
        }
    });

    let result = [];
    let current = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= current[1]) {
            if (intervals[i][1] > current[1]) {
                current[1] = intervals[i][1];
            }
        } else {
            result.push(current);
            current = intervals[i];
        }
    }

    result.push(current);
    return result;
};
// @lc code=end

