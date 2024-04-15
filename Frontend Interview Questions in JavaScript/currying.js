// With Bind method
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// With Closures
let multiply2 = function (x) {
  return function (y) {
    console.log("With Closures", x * y);
  };
};

let multiplyWithClosures1 = multiply2(2);
multiplyWithClosures1(3);

let multiplyWithClosures2 = multiply2(2);
multiplyWithClosures2(4);
