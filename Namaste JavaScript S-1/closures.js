function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
// z();

function outest() {
  var c = 10;
  function outer(b) {
    var a = 7;
    function inner() {
      console.log(a, b, c);
    }
    return inner;
  }
  return outer;
}

/* --- 1st Way to call -- */
var close = outest();
close("Hello JavaScript")();

/* --- 2nd Way to call --- */
var close = outest()("Hello JavaScript");
close();

/* --- 3rd Way to call --- */
var outer = outest();
var inner = outer("Hello JavaScript");
inner();

/* --- 4th Way to call --- */
var close = outest()("Hello JavaScript")();
