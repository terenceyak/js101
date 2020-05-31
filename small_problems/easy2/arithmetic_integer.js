const readline = require('readline-sync');

function prompt(msg) {
    console.log(`==> ${msg}`);
}

prompt('Enter the first number:');

const num1  = Number(readline.question());

prompt('Enter the second number:');

const num2 = Number(readline.question());

const sum = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
const quotient = Math.floor(num1 / (num2));
const remainder = num1 % num2;
const power = (num1 ** num2);

prompt(`${num1} + ${num2} = ${sum}`);
prompt(`${num1} - ${num2} = ${sub}`);
prompt(`${num1} * ${num2} = ${mul}`);
prompt(`${num1} / ${num2} = ${quotient}`);
prompt(`${num1} % ${num2} = ${remainder}`);
prompt(`${num1} ** ${num2} = ${power}`);