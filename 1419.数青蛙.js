/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    const arr = new Array(5).fill(0);
    for (const c of croakOfFrogs) {
        if (c === 'c') arr[0]++;
        else if (c === 'r') arr[1]++;
        else if (c === 'o') arr[2]++;
        else if (c === 'a') arr[3]++;
        else if (c === 'k') arr[4]++;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            return -1;
        }
    }

    const count = new Array(5).fill(0);
    let max = 0;
    for (const c of croakOfFrogs) {
        if (c === 'c') {
            count[0]++;
            max = Math.max(max, count[0]);
        } else if (c === 'r') {
            count[1]++;
            if (count[0] < count[1]) {
                return -1;
            }
        } else if (c === 'o') {
            count[2]++;
            if (count[1] < count[2]) {
                return -1;
            }
        } else if (c === 'a') {
            count[3]++;
            if (count[2] < count[3]) {
                return -1;
            }
        } else if (c === 'k') {
            count[4]++;
            if (count[3] < count[4]) {
                return -1;
            }
            for (let i = 0; i < count.length; i++) {
                count[i]--;
            }
        }
    }
    return max;
};

console.log(minNumberOfFrogs('croakcroka'));