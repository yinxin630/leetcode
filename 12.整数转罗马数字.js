/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const table = {
        1: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        10: ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        100: ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        1000: ['M', 'MM', 'MMM']
    }

    let result = [];
    let cur = 1000;
    while (num) {
        if (num / cur >= 1) {
            result.push(table[cur][Math.floor(num / cur) - 1]);
            num = num % cur;
        }

        cur /= 10;
    }

    return result.join('');
};
