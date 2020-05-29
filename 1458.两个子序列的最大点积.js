/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const dp = [];
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums1.length; i++) {
        dp[i] = [];
        let max = 0;
        for (let j = 0; j < nums2.length; j++) {
            if (dp[i - 1] && dp[i - 1][j - 1]) {
                max = Math.max(max, dp[i - 1][j - 1]);
            }
            if (i === 0 && j === 0) {
                dp[i][j] = nums1[i] * nums2[j];
            } else if (i === 0) {
                dp[i][j] = Math.max(dp[i][j - 1], nums1[i] * nums2[j]);
            } else if (j === 0) {
                dp[i][j] = Math.max(dp[i - 1][j], nums1[i] * nums2[j]);
            } else {
                dp[i][j] = Math.max(nums1[i] * nums2[j] + max, dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
            }
            result = Math.max(result, dp[i][j]);
        }
    }
    return result;
};
