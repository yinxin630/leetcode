/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    const arr = speed.map((s, i) => [s, efficiency[i]]);
    arr.sort((a, b) => b[1] - a[1]);

    const heap = [];
    function add(n) {
        if (heap.length >= k - 1) {
            if (heap.length === 0 || n <= heap[0]) {
                return n;
            }
            let r = heap[0];
            heap[0] = n;
            let i = 0;
            while (i < heap.length) {
                let next = i;
                if (i * 2 + 1 < heap.length && heap[i * 2 + 1] < heap[next]) {
                    next = i * 2 + 1;
                }
                if (i * 2 + 2 < heap.length && heap[i * 2 + 2] < heap[next]) {
                    next = i * 2 + 2;
                }
                if (i === next) {
                    break;
                } else {
                    const t = heap[i];
                    heap[i] = heap[next];
                    heap[next] = t;
                    i = next;
                }
            }
            return r;
        } else {
            heap.push(n);
            let i = heap.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (heap[i] < heap[p]) {
                    const t = heap[i];
                    heap[i] = heap[p];
                    heap[p] = t;
                    i = p;
                } else {
                    break;
                }
            }
            return 0;
        }
    }

    let result = 0n;
    let sum = 0n;
    for (let i = 0; i < n; i++) {
        let e = BigInt(arr[i][1]);
        sum += BigInt(arr[i][0]);
        if (e * sum > result) {
            result = e * sum;
        }
        sum -= BigInt(add(arr[i][0]));
    }
    return result % 1000000007n;
};
