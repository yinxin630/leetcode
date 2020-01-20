/*
 * @lc app=leetcode.cn id=1187 lang=javascript
 *
 * [1187] 使数组严格递增
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
    // 去重+排序
    arr2 = Array.from(new Set(arr2)).sort((a, b) => a - b);

    // 初始化dp, dp[i][j] 表示将前 j 个元素通过 i 次替换后变为严格递增序列时, 最后一个元素的最小值
    const dp = new Array(arr1.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(arr1.length + 1).fill(Number.MAX_SAFE_INTEGER);
    }
    dp[0][0] = Number.MIN_SAFE_INTEGER;

    for (let j = 1; j < dp.length; j++) {
        for (let i = 0; i <= j; i++) {
            if (arr1[j - 1] > dp[i][j - 1]) {
                dp[i][j] = arr1[j - 1];
            }

            // 找到 arr2 中第一个大于 dp[i-1][j-1] 的数
            let a = 0;
            let b = arr2.length - 1;
            let t;
            while (i > 0 && a <= b) {
                t = (a + b) >> 1;
                if (arr2[t] > dp[i - 1][j - 1] && (t - 1 < 0 || arr2[t - 1] <= dp[i - 1][j - 1])) {
                    break;
                }
                if (arr2[t] <= dp[i - 1][j - 1]) {
                    a = t + 1;
                } else {
                    b = t - 1;
                }
            }

            // 存在且小于则更新值
            if (i > 0 && a <= b) {
                dp[i][j] = Math.min(dp[i][j], arr2[t]);
            }

            // 返回最终结果
            if (j == dp.length - 1 && dp[i][j] != Number.MAX_SAFE_INTEGER) return i;
        }
    }
    return -1;
};
// @lc code=end
