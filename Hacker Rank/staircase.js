function staircase(n) {
  for (let i = 1; i <= n; i++) {
    // Print spaces
    for (let j = n - i; j > 0; j--) {
      process.stdout.write(" ");
    }
    // Print hash symbols
    for (let k = 1; k <= i; k++) {
      process.stdout.write("# ");
    }
    // Move to the next line
    process.stdout.write("\n");
  }
}

let result = staircase(6);
