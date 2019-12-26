/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 * 
 * 1. dfs 遍历
 * 2. 边界条件比较多, 我都搞晕了
 * 3. 有重复计算, 应该剪枝, 我简单用了 Set 对结果去重, 会存在重复计算
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s.length < 4) {
        return [];
    }

    let numbers = s.split('').map(num => +num);
    if (s.length === 4) {
        return [numbers.join('.')];
    }

    let result = new Set();
    let ip = [];

    function r(a, b) {
        if (b === 3) {
            if (a === s.length) {
                if (ip[b] !== undefined) {
                    result.add(ip.join('.'));
                }
            } else if (ip[b] === 0) {
                return;
            } else if ((ip[b] || 0) * 10 + numbers[a] <= 255) {
                ip[b] = (ip[b] || 0) * 10 + numbers[a];
                r(a + 1, b);
            }
        } else {
            if (ip[b] === undefined && numbers[a] === 0) {
                ip[b] = 0;
                ip[b + 1] = undefined;
                r(a + 1, b + 1);
            } else {
                if ((ip[b] || 0) * 10 + numbers[a] <= 255) {
                    ip[b] = (ip[b] || 0) * 10 + numbers[a];
                    ip[b + 1] = undefined;
                    r(a + 1, b + 1);
                    r(a + 1, b);
                } else {
                    ip[b + 1] = undefined;
                    r( a, b + 1);
                }
            }
        }
    }
    r(0, 0);

    return [...result.values()];
};
// @lc code=end
