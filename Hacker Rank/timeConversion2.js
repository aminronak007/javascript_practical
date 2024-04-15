function timeConversion(s) {
  // Write your code here
  const isPM = s.includes("PM");
  let [hours, minutes, seconds] = s.slice(0, -2).split(":");

  if (isPM && hours !== "12") {
    hours = String(Number(hours) + 12);
  } else if (!isPM && hours === "12") {
    hours = "00";
  }

  return `${hours.padStart(2, "0")}:${minutes}:${seconds}`;
}

let string = "07:05:45PM";
let result = timeConversion(string);
console.log(result);
