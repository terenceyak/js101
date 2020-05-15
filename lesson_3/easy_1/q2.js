let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(getLastChar(str1));
console.log(getLastChar(str2));

function getLastChar(string) {
    return string[string.length - 1] === "!";
}


// can also use
// str1.endsWith("!"); // true
// str2.endsWith("!"); // false