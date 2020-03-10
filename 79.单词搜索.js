/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function dfs(x, y, i) {
        if (x < 0 || x >= board.length || y < 0 || y >= board[x].length || board[x][y] !== word[i]) {
            return false;
        }
        i++;
        if (i === word.length) {
            return true;
        }
        const t = board[x][y];
        board[x][y] = '';
        const result = dfs(x + 1, y, i) || dfs(x - 1, y, i) || dfs(x, y + 1, i) || dfs(x, y - 1, i);
        board[x][y] = t;
        return result;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};