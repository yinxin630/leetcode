/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const t = [];
    for (let i = 0; i < numRows; i++) {
        t[i] = [];
    }
    
    for (let i = 0, j = 0, inc = (numRows > 1 ? 1 : 0); i < s.length; i++) {
        t[j].push(s[i]);
        j += inc;
        if (j === 0 || j === numRows - 1) {
            inc = -inc;
        }
    }

    return t.map(arr => arr.join('')).join('');
};
