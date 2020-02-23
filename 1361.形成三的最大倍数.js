/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    digits.sort((a, b) => a - b);
    const map = [[], [], []];
    
    let sum = 0;
    for (const n of digits) {
        map[n % 3].push(n);
        sum += n;
    }

    function formatResult() {
        const arr = [...map[0], ...map[1], ...map[2]].sort((a, b) => b - a);
        while (arr.length > 1 && arr[0] === 0) {
            arr.shift();
        }
        return arr.join('');
    }

    if (sum % 3 === 0) {
        return formatResult();
    } else {
        const a = sum % 3;
        const b = a === 1 ? 2 : 1;
        if (map[a].length >= 1) {
            map[a].shift();
        } else if (map[b].length >= 2) {
            map[b].shift();
            map[b].shift();
        } else {
            return '';
        }
        return formatResult();
    }
};
