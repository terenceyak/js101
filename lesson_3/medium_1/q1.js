let output = "The Flintstones Rock!";

for (let i = 1; i <= 10; i++) {
  output = " ".concat(output);
  console.log(output);
}

// proposed solution
// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flinstones Rock!");
// }