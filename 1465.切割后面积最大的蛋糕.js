/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    horizontalCuts.unshift(0);
    horizontalCuts.push(h);
    verticalCuts.unshift(0);
    verticalCuts.push(w);

    let maxH = 0;
    for (let i = 1; i < horizontalCuts.length; i++) {
        maxH = Math.max(maxH, horizontalCuts[i] - horizontalCuts[i - 1]);
    }

    let maxV = 0;
    for (let i = 1; i < verticalCuts.length; i++) {
        maxV = Math.max(maxV, verticalCuts[i] - verticalCuts[i - 1]);
    }

    return maxH * maxV % (10 ** 9 + 7);
};