/**
 * Definition for a binary tree node->
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */


int pseudoPalindromicPaths (struct TreeNode* root){
    int count[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
    int ji = 0;
    int result = 0;
    void dfs(struct TreeNode* node) {
        if (node == NULL) {
            return;
        }
        count[node->val]++;
        int x = count[node->val] % 2 == 1 ? 1 : -1;
        ji += x;
        if (!node->left && !node->right) {
            if (ji <= 1) {
                result++;
            }
        } else {
            if (node->left) {
                dfs(node->left);
            }
            if (node->right) {
                dfs(node->right);
            }
        }
        count[node->val]--;
        ji -= x;
    }
    dfs(root);
    return result;
}