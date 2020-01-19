/**
 * 1. 找到第1个6改为9即可
 */

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const chars = num.toString().split('');
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '6') {
            chars[i] = '9';
            break;
        }
    }

    return chars.join('');
};
