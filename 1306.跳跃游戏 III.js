/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1306] 跳跃游戏 III
 * 
 * 1. 用 Set 记录走过的点
 * 2. 每一步最多只有两种走法, 可行路线其实类似于二叉树, 我们采用 BFS 对结果遍历
 * 3. 如果碰到走过的点说明循环了, 抛弃该路径
 * 4. 如果碰到 0 了, 说明存在可行路径
 * 5. BFS 队列空了还没走到, 就说明无路可达
 * 
 */

 // @lc code=start
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const queue = [start];
    const set = new Set([start]);

    while (queue.length) {
        const i = queue.shift();
        if (arr[i] === 0) {
            return true;
        }

        if (i - arr[i] >= 0 && !set.has(i - arr[i])) {
            queue.push(i - arr[i]);
            set.add(i - arr[i]);
        }
        if (i + arr[i] < arr.length && !set.has(i + arr[i])) {
            queue.push(i + arr[i]);
            set.add(i + arr[i]);
        }
    }

    return false;
};
// @lc code=end
