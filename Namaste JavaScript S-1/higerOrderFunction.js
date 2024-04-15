// ----- Start : Basic example of Higher Order Function -----
// function x() {
//   console.log("X");
// }
// function y(a) {
//   a();
// }
// y(x);
// ----- End -----

// ----- Start: Functional Programming - HOF -----
const radius = [3, 1, 2, 4];

const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const diameter = (radius) => 2 * radius;

// Calculate function is a Higher Order Function
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
};
console.log(radius.map(area));
console.log("Area:", radius.calculate(area));
// console.log("Circumference:", radius.calculate(circumference));
// console.log("Diameter:", radius.calculate(diameter));
// // ----- End -----
