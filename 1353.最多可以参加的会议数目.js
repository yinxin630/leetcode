/**
 * 1. 使用优先队列存储当前时间可参加的会议, 优先取结束时间最小的
 * 2. 每轮循环, 将当前可参加的会议的加到优先队列, 将当前过期的会议移出优先队列
 * 3. 如果队列不为空, 则说明有可参加会议, 计数加一并移除该会议
 */

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    const queue = [];
    function push(val) {
        queue.push(val);
        for (let i = queue.length - 1; i > 0; ) {
            const parent = (i - 1) >> 1;
            if (queue[i] < queue[parent]) {
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
            if (left < queue.length && queue[left] < queue[next]) {
                next = left;
            }
            if (right < queue.length && queue[right] < queue[next]) {
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

    const map = {};
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < events.length; i++) {
        map[events[i][0]] = map[events[i][0]] || [];
        map[events[i][0]].push(i);
        max = Math.max(max, events[i][1]);
    }

    let result = 0;
    for (let i = 1; i <= max; i++) {
        if (map[i]) {
            for (const n of map[i]) {
                push(events[n][1]);
            }
        }
        while (queue.length && queue[0] < i) {
            pop();
        }
        if (queue.length) {
            pop();
            result++;
        }
    }

    return result;
};
