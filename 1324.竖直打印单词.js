/**
 * 1. 找到最大单词长度
 * 2. 以 0 ~ 最大长度 为下标遍历各单词
 * 3. 删除末尾空格
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    const words = s.split(' ');
    let max = 0;
    for (const word of words) {
        max = Math.max(max, word.length);
    }

    const result = [];
    for (let i = 0; i < max; i++) {
        result[i] = [];
        for (let j = 0; j < words.length; j++) {
            result[i].push(words[j][i] || ' ');
        }
        while (result[i][result[i].length - 1] === ' ') {
            result[i].pop();
        }
        result[i] = result[i].join('');
    }

    return result;
};