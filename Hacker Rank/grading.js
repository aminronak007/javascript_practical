function gradingStudents(grades) {
  let roundedGrades = [];
  for (let grade of grades) {
    if (grade < 38) {
      roundedGrades.push(grade);
    } else {
      let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
      if (nextMultipleOf5 - grade < 3) {
        roundedGrades.push(nextMultipleOf5);
      } else {
        roundedGrades.push(grade);
      }
    }
  }

  return roundedGrades;
}

let grades = [73, 67, 38, 33];
let result = gradingStudents(grades);
console.log("result", result);
