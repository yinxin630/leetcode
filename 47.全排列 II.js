/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const temp = [];
    
    function dfs() {
        if (nums.length === 0) {
            result.push(temp.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                temp.push(nums[i]);
                nums.splice(i, 1);
                dfs();
                const num = temp.pop();
                nums.splice(i, 0, num);
            }
        }
    }
    dfs();

    return result;
};