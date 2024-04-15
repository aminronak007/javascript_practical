/* --- Function Statement or Function Declaration ---*/
function a() {
  console.log("A called");
}
a();

/* --- Function Expression ---*/
var b = function () {
  console.log("b called");
};
b();

/* --- Anonymous Function ---*/
// function () {
//     console.log('Anonymous Function');
// }

/* --- Named Function Expression ---*/
var c = function x() {
  console.log("C called");
  console.log(x); // This will allow you
};
c();
// x(); - This will not allow and give Reference Error

/* --- Difference between Parameters and Arguments ---*/
var d = function (param1, param2) {
  console.log("Param1", param1);
  console.log("Param2", param2);
};

d(1, 2); // The values passed are called arguments

/* --- First Class Functions or Functions are used as First Class Citizens ---*/
// The ability of functions to be used as values and can be pass this in an argument to another functions and can be
// returned from the functions and this ability is known as First Class Functions.
let e = function (param) {
  param();
  return function x() {
    console.log("Function return as a value");
  };
};

const f = e(function () {
  console.log("Function pass as an argument");
});

f();

/* --- Arrow Functions ---*/
