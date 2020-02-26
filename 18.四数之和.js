/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);

    const result = [];
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let a = j + 1;
            let b = nums.length - 1;
            while (a < b) {
                const sum = nums[i] + nums[j] + nums[a] + nums[b];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[a], nums[b]]);
                }
                if (sum <= target) {
                    do {
                        a++;
                    } while (nums[a] === nums[a - 1]);
                }
                if (sum >= target) {
                    do {
                        b--;
                    } while (nums[b] === nums[b + 1]);
                }
            }
        }
    }

    return result;
};

console.log(fourSum([-3,-1,0,2,4,5],
    2));