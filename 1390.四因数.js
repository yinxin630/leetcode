/*
逐个判断每个数字是否满足仅有 4 个因数, 满足就将因数和加到 result
因为 1 和自身是 2 个因数, 如果从 2 到 sqrt(n) 只有 2 个因数就是满足条件的, 注意如果 i * i == n 则只新增一个因数, 否则新增 i 和 n / i 两个因数
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let result = 0;
    for(const n of nums) {
        let t = [];
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                t.push(i);
                if (i * i !== n) {
                    t.push(n / i);
                }
            }
            if (t.length > 2) {
                break;
            }
        }
        if (t.length === 2) {
            result += t[0] + t[1] + 1 + n;
        }
    }
    return result;
};