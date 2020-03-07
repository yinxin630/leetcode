/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {
    let result = 0;
    function dfs(node) {
        if (!node) {
            return 0;
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (left === null || right === null || (node.left && node.left.val >= node.val) || (node.right && node.right.val <= node.val)) {
            return null;
        }
        const sum = left + right + node.val;
        result = Math.max(result, sum);
        return sum;
    }
    dfs(root);
    return result;
};

console.log(maxSumBST(arrayToTree([5,4,8,3,null,6,3])));

function arrayToTree(arr) {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
    if (arr.length === 0) {
        return null;
    }
    const root = new TreeNode(arr[0]);
    const list = [root];
    let i = 1;
    while (list.length > 0) {
        const node = list.shift();
        if (typeof arr[i] === 'number') {
            node.left = new TreeNode(arr[i]);
            list.push(node.left);
        }
        i++;
        if (typeof arr[i] === 'number') {
            node.right = new TreeNode(arr[i]);
            list.push(node.right);
        }
        i++;
    }
    return root;
}