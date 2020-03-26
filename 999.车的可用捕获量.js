/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let result = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'R') {
                for (let di = i; di >= 0; di--) {
                    if (board[di][j] === 'p') {
                        result++;
                        break;
                    } else if (board[di][j] === 'B') {
                        break;
                    }
                }
                for (let di = i; di < board.length; di++) {
                    if (board[di][j] === 'p') {
                        result++;
                        break;
                    } else if (board[di][j] === 'B') {
                        break;
                    }
                }
                for (let dj = j; dj >= 0; dj--) {
                    if (board[i][dj] === 'p') {
                        result++;
                        break;
                    } else if (board[i][dj] === 'B') {
                        break;
                    }
                }
                for (let dj = j; dj < board[i].length; dj++) {
                    if (board[i][dj] === 'p') {
                        result++;
                        break;
                    } else if (board[i][dj] === 'B') {
                        break;
                    }
                }
            }
        }
    }
    return result;
};