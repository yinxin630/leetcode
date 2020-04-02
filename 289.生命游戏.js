/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const d = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    for (let i = 0; i< board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let alive = 0;
            for (const t of d) {
                if (board[i + t[0]] && (board[i + t[0]][j + t[1]] & 1) === 1) {
                    alive++;
                }
            }
            if (board[i][j] === 0) {
                if (alive === 3) {
                    board[i][j] = 2;
                }
            } else {
                if (alive < 2 || alive > 3) {
                    board[i][j] = 3;
                }
            }
        }
    }
    for (let i = 0; i< board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] > 1) {
                board[i][j] = 3 - board[i][j];
            }
        }
    }
    return board;
};