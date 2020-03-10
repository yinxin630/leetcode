/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    const sum = A.reduce((r, n) => r += n, 0);
    if (sum % 3 !== 0) {
        return false;
    }

    const avg = sum / 3;
    let cur = 0;
    let count = 0;
    for (const a of A) {
        cur += a;
        if (cur === avg) {
            cur = 0;
            count++;
        }
    }
    return count >= 3;
};