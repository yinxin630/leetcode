/*
对于 arr1 中的每个数字 n, 逐个与 arr2 中的数字比较距离
距离小于等于 d 就终止比较
如果搜到结尾(i === arr2.length)都没有出现小于等于 d 的情况, 则当前数字 n 满足条件, 计数加一
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let result = 0;
    for (const n of arr1) {
        let i = 0;
        while (i < arr2.length) {
            if (Math.abs(n - arr2[i]) <= d) {
                break;
            }
            i++;
        }
        if (i === arr2.length) {
            result++;
        }
    }
    return result;
};