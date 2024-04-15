function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  let n = 5;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] === 0) {
      zeroCount++;
    } else {
      negativeCount++;
    }
  }

  let positiveRatio = (positiveCount / n).toFixed(6);
  let negativeRatio = (negativeCount / n).toFixed(6);
  let zeroRatio = (zeroCount / n).toFixed(6);
  // Printing the ratios
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

let arr = [1, 1, 0, -1, -1];
plusMinus(arr);
