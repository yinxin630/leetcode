/*
 * @lc app=leetcode.cn id=1298 lang=javascript
 *
 * [1298] 你能从盒子里获得的最大糖果数
 * 
 * 1. 没什么算法, 模拟过程即可
 * 2. 详细逻辑看注释
 */

// @lc code=start
/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    const set = new Set(); // 已经处理过的盒子
    const key = new Set(); // 手上的钥匙
    const boxs = initialBoxes; // 待处理盒子队列
    const lockBoxs = []; // 待处理上锁的盒子
    let result = 0;

    while (boxs.length > 0) {
        const box = boxs.shift();

        // 如果当前盒子是锁着的, 而且没有钥匙, 则加入到"待处理上锁的盒子"
        if (status[box] === 0 && !key.has(box)) {
            lockBoxs.push(box);
            continue;
        }

        // 处理当前盒子
        set.add(box);
        key.delete(box);
        result += candies[box];
        // 所持钥匙加到"手上钥匙"
        keys[box].forEach(x => {
            key.add(x);
        })
        // 包含盒子加到队列
        containedBoxes[box].forEach(x => {
            if (!set.has(x)) {
                boxs.push(x);
            }
        })

        // 如果队列空了, 并且有上锁盒子, 并且还有钥匙, 则把上锁盒子推到队列中
        if (boxs.length === 0 && lockBoxs.length && key.size) {
            while (lockBoxs.length) {
                boxs.push(lockBoxs.pop());
            }
        }
    }

    return result;
};
// @lc code=end
