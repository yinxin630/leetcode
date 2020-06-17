/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let result = A[0] + A[1] - 1;
    let max = A[0];
    for (let i = 1; i < A.length; i++) {
        result = Math.max(result, max + A[i] - i);
        max = Math.max(max, A[i] + i);
    }
    return result;
};