function timeConversion(s) {
  let timeArray = s.split(":");
  let hour = parseInt(timeArray[0]);
  let isPM = s.includes("PM");

  if (isPM && hour !== 12) {
    hour += 12;
  } else {
    hour = 0;
  }
  timeArray[0] = hour.toString().padStart(2, "0");

  if (timeArray[2].includes("PM")) {
    timeArray[2] = timeArray[2].replace("PM", "");
  } else {
    timeArray[2] = timeArray[2].replace("AM", "");
  }
  return timeArray.join(":");
}

let string = "04:59:59AM";
let result = timeConversion(string);
console.log(result);
