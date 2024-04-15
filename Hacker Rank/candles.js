function birthdayCakeCandles(candles) {
  let maxHeight = Math.max(...candles);
  let tallestCount = candles.filter((height) => height === maxHeight).length;
  return tallestCount;
}

// let candles = [3, 2, 1, 3];
let candles = [4, 4, 4, 3];

let result = birthdayCakeCandles(candles);
console.log("result", result);
