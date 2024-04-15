let finalObj = {};
// let magic = (obj, parent) => {
//   for (let key in obj) {
//     let objField = parent + "_" + key;
//     if (typeof obj[key] === "object") {
//       magic(obj[key], objField);
//     } else {
//       finalObj[objField] = obj[key];
//     }
//   }
// };

const magic = (obj, parent) => {
  for (const [key, value] of Object.entries(obj)) {
    const objField = `${parent}_${key}`;
    if (typeof value === "object") {
      magic(value, objField);
    } else {
      finalObj[objField] = value;
    }
  }
};

let user = {
  name: "Ronak",
  address: {
    personal: {
      city: "Vadodara",
      area: "Majra",
    },
    office: {
      city: "Mumbai",
      area: {
        landmark: "Hi Tech City",
      },
    },
  },
};

magic(user, "user");
console.log(finalObj);
