/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const arr = new Array(s.length);
    arr[-1] = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            arr[i] = arr[i - 1] + 1;
        } else {
            arr[i] = arr[i - 1];
        }
    }
    let result = arr[k - 1];
    for (let i = k; i < arr.length; i++) {
        result = Math.max(result, arr[i] - arr[i - k]);
    }
    return result;
};