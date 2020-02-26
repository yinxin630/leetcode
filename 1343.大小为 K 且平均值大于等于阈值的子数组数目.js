/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let result = 0;
    const target = threshold * k;
    
    const sum = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        sum[i] = sum[i - 1] + arr[i];
    }

    for (let i = k - 1; i < arr.length; i++) {
        if (sum[i] - (sum[i - k] || 0) >= target) {
            result++;
        }
    }

    return result;
};
