/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    let current = 0;
    const stack = [];
    while (current < height.length) {
        while (stack.length && height[current] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (stack.length === 0) {
                break;
            }
            const distance = current - stack[stack.length - 1] - 1;
            const h = Math.min(height[current], height[stack[stack.length - 1]]) - height[top];
            result += distance * h;
        }
        stack.push(current);
        current++;
    }
    return result;
};