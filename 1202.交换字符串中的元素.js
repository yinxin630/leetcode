/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 * 
 * 1. 使用并查集获取可交换的元素集合
 * 2. 对每个集合内的元素排序
 * 3. 将排序后的结果按原始遍历顺序更新原值
 * 
 * 并查集优化
 * 1. 并查集用递归查找并更新, 而不是用循环去更新
 * 2. 重点优化就是在查找时发现不匹配直接更新
 * 
 * 更新值优化
 * 1. pop 要比 shift 性能好的多, 比 length - 1 也要好
 * 2. 实测发现正序排序倒序更新值, 会比倒序排序正序更新值, 性能要快的多
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const union = new Array(s.length);
    for (let i = 0; i < union.length; i++) {
        union[i] = i;
    }
    function father(x) {
        if (x !== union[x]) {
            union[x] = father(union[x]);
        }
        return union[x];
    }
    for (const [a, b] of pairs) {
        union[father(a)] = father(b);
    }

    const map = {};
    for (let i = 0; i < union.length; i++) {
        const f = father(i);
        map[f] = map[f] || [];
        map[f].push(s[i]);
    }
    Object.keys(map).forEach(key => {
        map[key].sort();
    })

    const result = s.split('');
    for (let i = result.length - 1; i >= 0; i--) {
        result[i] = map[father(i)].pop();
    }

    return result.join('');
};
// @lc code=end
