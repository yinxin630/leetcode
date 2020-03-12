/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let n = Math.min(str1.length, str2.length);
    while (n > 0) {
        if (str1.length % n === 0 && str2.length % n === 0) {
            const sub = str1.substr(0, n);
            if (sub.repeat(str1.length / n) === str1 && sub.repeat(str2.length / n) === str2) {
                return sub;
            }
        }
        n--;
    }
    return '';
};