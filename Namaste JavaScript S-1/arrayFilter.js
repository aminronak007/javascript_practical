const arr = [5, 1, 3, 2, 6];

// Filter odd values
function isOdd(x) {
  return x % 2;
}

// Filter even values
function isEven(x) {
  return x % 2 === 0;
}
const output1 = arr.filter(isOdd);
const output2 = arr.filter(isEven);

console.log(output1);
console.log(output2);
