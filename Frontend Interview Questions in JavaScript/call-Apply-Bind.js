let name1 = {
  firstname: "Ronak",
  lastname: "Amin",
};

let printFullName = function (hometown) {
  console.log(this.firstname + " " + this.lastname + " " + hometown);
};

let name2 = {
  firstname: "Ms",
  lastname: "Dhoni",
};

printFullName.call(name1, "vadodara");
printFullName.call(name2, "Mumbai");
printFullName.apply(name2, ["Mumbai"]);

let printMyName = printFullName.bind(name2, "Hello");
printMyName();
