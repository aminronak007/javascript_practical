function diagonalDifference(arr) {
  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < arr.length; i++) {
    primarySum += arr[i][i];
    secondarySum += arr[i][arr.length - 1 - i];
  }

  const absoluteDifference = Math.abs(primarySum - secondarySum);
  return absoluteDifference;
}
const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
let result = diagonalDifference(matrix);
console.log(result);
