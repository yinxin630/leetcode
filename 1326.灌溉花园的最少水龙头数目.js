/**
 * 1. 线段覆盖问题, 使用贪心算法
 * 2. 先将线段按从小到大排序
 * 3. 首先找到第一根线
 *    a. 如果第一根线 > 0, 则不能全覆盖, 返回 -1
 *    b. 找到 line[0] <= 0 && line1[1] 最大的那根线, 作为第一根线
 * 4. 循环找到能和上一根线连上, 并且右端点最大的线
 *    a. 如果存在满足条件的线, 则计数加一
 *    b. 如果不存在, 则说明连接不上, 返回 -1
 *    c. 如果连接当前线后, 已经 >= n 达到末尾了, 则中断循环
 * 5. 返回计数值
 */

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    const lines = [];
    for (let i = 0; i < ranges.length; i++) {
        lines.push([i - ranges[i], i + ranges[i]]);
    }
    lines.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] < b[1] ? -1 : 1;
        }
    })

    if (lines[0][0] > 0) {
        return -1;
    }
    
    let current = null;
    while (lines.length) {
        if (lines[0][0] <= 0) {
            const line = lines.shift();
            if (current === null || line[1] > current[1]) {
                current = line;
            }
        } else {
            break;
        }
    }
    let result = 1;

    if (current[1] >= n) {
        return result;
    }

    while (lines.length) {
        let max = null;
        while (lines.length && lines[0][0] <= current[1]) {
            const line = lines.shift();
            if (!max) {
                max = line;
            } else {
                if (line[1] > max[1]) {
                    max = line;
                }
            }
        }

        if (!max) {
            return -1;
        }

        result++;
        current = max;

        if (current[1] >= n) {
            break;
        }
    }

    return result;
};