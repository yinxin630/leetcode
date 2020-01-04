/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 * 
 * 1. 根据数学计算, 直接推断每个位置的数字, 将待用数字存到数组中
 * 2. 对于位置 i, 后 i - 1 位有 i - 1 的阶乘种可能, 用 k / 阶乘数, 并向上取整, 可以得到目前处于第几轮阶乘
 * 3. 第几轮阶乘即用到了第几位的数字, 从待用数组中取出数字, 并存到结果中
 * 4. 然后将 k 减去 当前轮数 * 阶乘数, 则得到下一位的 k 值, 重复 2~3 即可
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const factorial = [0, 1];
    for (let i = 2; i < 10; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    const arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    const result = [];
    while (arr.length > 1) {
        const fac = factorial[arr.length - 1];
        const index = Math.ceil(k / fac);
        result.push(...arr.splice(index - 1, 1))
        k -= fac * index;
    }

    result.push(arr[0]);

    return result.join('');
};
// @lc code=end
