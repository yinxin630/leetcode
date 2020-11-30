// 差分数组: arr[i + 1] = nums[i] - nums[i - 1];

function getDiffArray(arr) {
  const diffArray = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    diffArray[i + 1] = arr[i] - (arr[i - 1] || 0);
  }
  return diffArray;
}

function addValueInRange(diffArray, l, r, value) {
  diffArray[l] += value;
  diffArray[r + 1] -= value;
}

const arr = [1, 2, 3, 4, 5];
const diffArray = getDiffArray(arr);
console.log(diffArray); // [0, 1, 1, 1, 1, 1] => [1, 2, 3, 4, 5]

addValueInRange(diffArray, 2, 4, 1);
console.log(diffArray); // [0, 1, 2, 1, 1, 0] => [1, 3, 4, 5, 5]
