let name1 = {
  firstname: "Ronak",
  lastname: "Amin",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " - " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

let printMyName = printName.bind(name1, "Vadodara");
printMyName("Gujarat", "India");

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name1, "Vadodara");
printMyName2("Gujarat", "India");
