/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (s.length === k) {
        return true;
    }
    const arr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 97]++;
    }
    let one = 0;
    for (const n of arr) {
        one += n % 2;
    }
    return one <= k && s.length >= k;
};
