/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const char = [];
    const number = [];
    for (const a of s) {
        if (isNaN(+a)) {
            char.push(a);
        } else {
            number.push(a);
        }
    }
    if (Math.abs(char.length - number.length) > 1) {
        return '';
    }
    const result = [];
    const max = char.length >= number.length ? char : number;
    for (let i = 0; i < max.length; i++) {
        result[i * 2] = max[i];
    }
    const min = char === max ? number : char;
    for (let i = 0; i < min.length; i++) {
        result[i * 2 + 1] = min[i];
    }
    return result.join('');
};