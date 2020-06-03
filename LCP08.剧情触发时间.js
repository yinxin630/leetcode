/**
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = function(increase, requirements) {
    const a = [0];
    const b = [0];
    const c = [0];
    for (const [x, y, z] of increase) {
        a.push(a[a.length - 1] + x);
        b.push(b[b.length - 1] + y);
        c.push(c[c.length - 1] + z);
    }

    function binarySearch(arr, n) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = (left + right) >> 1;
            if (arr[mid] >= n && (mid === 0 || arr[mid - 1] < n)) {
                return mid;
            }
            if (arr[mid] >= n) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }

    return requirements.map(([x, y, z]) => {
        const results = [
            binarySearch(a, x),
            binarySearch(b, y),
            binarySearch(c, z),
        ]
        return results.includes(-1) ? -1 : Math.max(...results);
    })
};