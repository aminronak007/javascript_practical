/* --- Simple example of encapsulation but it is not Scalable. */
function counter() {
  var count = 0;

  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

var c1 = counter();
// c1();
// c1();

var c2 = counter();
// c2();
// c2();
// c2();
/* --- Simple example of encapsulation but it is not Scalable. */

/* --- Example of encapsulation in closures but with Scalabilty. */
function Counter() {
  var count = 0;

  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

/* --- Example of encapsulation in closures but with Scalabilty. */
