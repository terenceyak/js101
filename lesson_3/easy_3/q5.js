function isColorValid(color) {
  return (color === "blue" || color === "green");
}

// const isColorValid = color => color === "blue" || color === "green";
// const isColorValid = color => ["blue", "green"].includes(color);

console.log(isColorValid("blue")); //true
console.log(isColorValid("yellow")); //false
console.log(isColorValid("green")); //true