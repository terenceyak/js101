let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));


// To center some text, we need to pad it on the left with some spaces.
// The hard part here is determining how many spaces you need.
// You can determine the correct value by subtracting the length of the string from the desired width, then dividing that result by 2.
// That gives you the number of spaces you need on the left, and an equivalent number of spaces on the right, after allowance for rounding.
// Once we know how many spaces we need on the left, we can use padStart to pad the original string to a length that includes those additional spaces.