/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const arr = new Array(128).fill(0);
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const n = s.charCodeAt(i);
        arr[n]++;
        if (arr[n] >= 2) {
            result += 2;
            arr[n] -= 2;
        }
    }
    return result + (arr.indexOf(1) === -1 ? 0 : 1);
};