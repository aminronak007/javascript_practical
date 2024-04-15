"use strict";
// this in global space.
console.log(this); // refers to the window object in browser, in nodejs its global

// this inside a function
function x() {
  // value depends on strict and non-strict mode
  console.log(this);
}
x();

const obj = {
  a: 10,
  x: function () {
    console.log("object this", this.a);
  },
};

obj.x();

// Call, Apply and Bind
const student = {
  name: "Ronak",
  printName: function () {
    console.log(this.name);
  },
  y: function x() {
    console.log("normal function", this);
  },
  x: () => {
    console.log("inside arrow", this); // this inside a arrow function
  },
  // this inside nested arrow function
  z: function () {
    // Enclosing lexical context
    const y = () => {
      console.log("nested arrow", this);
    };
    y();
  },
};

student.printName();
const student2 = {
  name: "Shivani",
};

student.printName.call(student2);
student.x();
student.y();
student.z();
