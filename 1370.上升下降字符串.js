/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const chars = s.split('').sort((a, b) => a < b ? -1 : 1);
    let result = [];
    let count = chars.length;
    let i = 0;
    let di = 1;
    let prev = '';
    while (count) {
        if (chars[i] && (prev === '' || chars[i] !== prev)) {
            result.push(chars[i]);
            prev = chars[i];
            chars[i] = '';
            count--;
        }
        i += di;
        if (i === chars.length - 1) {
            di = -1;
            prev = '';
        } else if (i === 0) {
            di = 1;
            prev = '';
        }
    }

    return result.join('');
};
