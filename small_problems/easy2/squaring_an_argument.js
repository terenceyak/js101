console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true

function square(arg) {
    return multiply(arg, arg);
}

function multiply(num1, num2) {
    return num1 * num2;
}