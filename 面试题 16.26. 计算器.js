/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const priority = {
    '+': 1,
    '-': 2,
    '*': 3,
    '/': 3,
  };
  function isNumber(charCode) {
    const ZeroCharCode = '0'.charCodeAt(0);
    const NineCharCode = '9'.charCodeAt(0);
    return charCode >= ZeroCharCode && charCode <= NineCharCode;
  }
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
        return Math.floor(n2 / n1);
        break;
      }
    }
  }

  const numberStack = [];
  const operatorStack = [];
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (isNumber(s.charCodeAt(i))) {
      num = num * 10 + +s[i];
      if (i === s.length - 1) {
        numberStack.push(num);
      }
    } else {
      if (isNumber(s.charCodeAt(i - 1))) {
        numberStack.push(num);
        num = 0;
      }

      if (isOperator(s[i])) {
        while (
          operatorStack.length &&
          priority[operatorStack[operatorStack.length - 1]] >= priority[s[i]]
        ) {
          numberStack.push(getResult(numberStack.pop(), numberStack.pop(), operatorStack.pop()));
        }
        operatorStack.push(s[i]);
      }
    }
  }

  while (operatorStack.length) {
    numberStack.push(getResult(numberStack.pop(), numberStack.pop(), operatorStack.pop()));
  }

  return numberStack[0];
};
