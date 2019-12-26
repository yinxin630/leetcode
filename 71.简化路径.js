/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 * 
 * 1. 按 / 分词
 * 2. 用栈存结果, 新路径入栈, ..出栈(判空), .不变
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.split(/\/+/);

    const result = [];
    for (let i = 0; i < path.length; i++) {
        if (path[i] === '' || path[i] === '.') {
            continue;
        } else if (path[i] === '..') {
            if (result.length) {
                result.pop();
            }
        } else {
            result.push(path[i]);
        }
    }

    return '/' + result.join('/');
};
// @lc code=end
