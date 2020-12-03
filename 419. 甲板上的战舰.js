/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let result = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] === 'X' &&
        board[i][j - 1] !== 'X' &&
        (!board[i - 1] || board[i - 1][j] !== 'X')
      ) {
        result++;
      }
    }
  }
  return result;
};
