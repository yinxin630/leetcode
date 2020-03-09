/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const temp = [];
    
    function dfs() {
        if (nums.length === 0) {
            result.push(temp.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            temp.push(nums[i]);
            nums.splice(i, 1);
            dfs();
            const num = temp.pop();
            nums.splice(i, 0, num);
        }
    }
    dfs();

    return result;
};