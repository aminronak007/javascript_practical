function reverseString(s) {
  let reverseString1 = s.slice(0, 5).split("").reverse().join("");
  let reverseString2 = s.slice(5, 11).split("").reverse().join("");

  return reverseString2 + reverseString1;
}

let string = "Hello World";
let result = reverseString(string);
console.log("result", result);
