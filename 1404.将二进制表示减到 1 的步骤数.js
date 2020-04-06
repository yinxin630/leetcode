/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    if (s.length === 1) {
        return s[0] === '0' ? 1 : 0;
    }

    s = s.split('').reverse().map(n => +n);
    let i = 0;
    let result = 0;
    while (i < s.length - 1 || s[i] !== 1) {
        if (s[i] === 0) {
            i++;
        } else {
            let j = i;
            while (j < s.length) {
                s[j]++;
                if (s[j] > 1) {
                    s[j] = 0;
                    j++;
                } else {
                    break;
                }
            }
            if (j === s.length) {
                s.push(1);
            }
        }
        result++;
    }
    return result;
};