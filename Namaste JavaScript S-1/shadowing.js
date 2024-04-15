/* --- Shadowing --- */
var a = 1;
function foo() {
  let a = 2;
  console.log(a); // 2
}
foo();

/* --- Illegal Shadowing --- */
var b = 1;
function foo() {
  var b = 2;
  console.log("in the fucntion", b); // Error
}
console.log("out of the function", b);
foo();
