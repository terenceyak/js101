let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));

//Alternate Solution

//str1.match('Dino') !== null; // false
//str2.match('Dino') !== null; // true

//Yet another Solution

//str1.indexOf('Dino') > -1; // false
//str2.indexOf('Dino') > -1; // true
