// let sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// console.log(sum(1)(2));

// Recursive Function
let sum = (a) => (b) => b ? sum(a + b) : a;
let calculate = sum(1)(2)(3)(4)();
console.log(calculate);
