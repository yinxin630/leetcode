/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  const result = [];
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      result.push('G');
    } else {
      if (command[i + 1] === ')') {
        result.push('o');
        i += 1;
      } else {
        result.push('al');
        i += 3;
      }
    }
  }
  return result.join('');
};
