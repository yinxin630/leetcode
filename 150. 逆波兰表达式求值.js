/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  function getResult(n1, n2, opr) {
    switch (opr) {
      case '+': {
        return n2 + n1;
        break;
      }
      case '-': {
        return n2 - n1;
        break;
      }
      case '*': {
        return n2 * n1;
        break;
      }
      case '/': {
        return (n2 / n1) > 0 ? Math.floor(n2 / n1) : Math.ceil(n2 / n1);
        break;
      }
    }
  }

  const stack = [];
  for (let i = 0; i < tokens.length ; i++) {
    if (isOperator(tokens[i])) {
      stack.push(getResult(stack.pop(), stack.pop(), tokens[i]))
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack[0];
};
