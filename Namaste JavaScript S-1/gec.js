console.log("Initial value of n:", n);
var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}
console.log("Value of n after defining value:", n);

console.log("Initial value of Square1:", square1);
var square1 = square(n);
console.log(`Square of ${n}:`, square1);

console.log("Initial value of Square2:", square2);
var square2 = square(4);
console.log("Square of 4:", square2);
