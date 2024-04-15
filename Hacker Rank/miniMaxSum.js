function miniMaxSum(arr) {
  let minimum = 0;
  let maximum = 0;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    minimum += arr[i];
  }

  for (let i = 1; i < arr.length; i++) {
    maximum += arr[i];
  }

  console.log(`${minimum} ${maximum}`);
}

let arr = [7, 69, 2, 221, 8974];
let result = miniMaxSum(arr);
