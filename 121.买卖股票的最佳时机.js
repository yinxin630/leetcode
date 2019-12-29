/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 * 
 * 1. 记录到当前天的最小值
 * 2. 最大差值等于 当前天值 - 到当前天的最小值
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    let result = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        result = Math.max(result, prices[i] - min);
        min = Math.min(min, prices[i]);
    }

    return result;
};
// @lc code=end

