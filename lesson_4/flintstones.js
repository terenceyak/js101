let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = {};

flintstones.forEach((names, index) => {
    flintstonesObj[names] = index;
});

console.log(flintstonesObj);