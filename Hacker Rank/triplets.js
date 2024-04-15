function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }

  return [alice, bob];
}

let a = [17, 28, 30];
let b = [99, 16, 8];

let result = compareTriplets(a, b);
console.log(result);
