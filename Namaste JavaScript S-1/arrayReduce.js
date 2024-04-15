const arr = [5, 1, 3, 2, 6];

// sum
const output1 = arr.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(output1);

// max
const output2 = arr.reduce((accumulator, current) => {
  if (current > accumulator) {
    accumulator = current;
  }
  return accumulator;
}, 0);
console.log(output2);
