/**
 * 1. 找规律: 数组内最大值 - 数组内其他值的和 = 该值的前一个值
 * 2. 先记录当前所有值的和, 再使用优先队列获取当前最大值, 最大值的前一个值 = max - (sum - max), 将最大值移出队列并将前一个值加入队列
 * 3. 重复 2 过程, 直到前一个值 < 1 (构造失败) 或者 当前最大值 = 1 (构造成功)
 */

/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    const queue = [];
    function push(val) {
        queue.push(val);
        for (let i = queue.length - 1; i > 0; ) {
            const parent = (i - 1) >> 1;
            if (queue[i] > queue[parent]) {
                const t = queue[i];
                queue[i] = queue[parent];
                queue[parent] = t;
                i = parent;
            } else {
                break;
            }
        }
    }
    function pop() {
        const result = queue[0];
        const last = queue.pop();
        if (queue.length) {
            queue[0] = last;
        }
        for (let i = 0; i < queue.length; ) {
            let next = i;
            const left = i * 2 + 1;
            const right = i * 2 + 2;
            if (left < queue.length && queue[left] > queue[next]) {
                next = left;
            }
            if (right < queue.length && queue[right] > queue[next]) {
                next = right;
            }
            if (i !== next) {
                const t = queue[i];
                queue[i] = queue[next];
                queue[next] = t;
                i = next;
            } else {
                break;
            }
        }
        return result;
    }

    let sum = 0;
    for (const n of target) {
        push(n);
        sum += n;
    }

    while (queue[0] > 1) {
        const top = queue[0];
        const next = top - (sum - top);
        if (next < 1) {
            return false;
        }
        sum = sum - top + next;
        pop();
        push(next);
    }
    return true;
};