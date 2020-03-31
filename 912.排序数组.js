/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mergeSort(i, j) {
        if (i === j) {
            return [nums[i]];
        }
        const mid = (i + j) >> 1;
        const left = mergeSort(i, mid);
        const right = mergeSort(mid + 1, j);
        const result = [];
        let a = 0;
        let b = 0;
        while (a < left.length && b < right.length) {
            if (left[a] <= right[b]) {
                result.push(left[a]);
                a++;
            } else {
                result.push(right[b]);
                b++;
            }
        }
        while (a < left.length) {
            result.push(left[a]);
            a++;
        }
        while (b < right.length) {
            result.push(right[b]);
            b++;
        }
        return result;
    }
    return mergeSort(0, nums.length - 1);
};