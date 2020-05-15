let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let newArr = [].concat(...flintstones);
console.log(newArr);