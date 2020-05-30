const readline = require('readline-sync');

const integer = readline.question('Please enter an integer greater than 0: ');
const op = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (op === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${sum(integer)}.`);
} else if (op === 'p') {
  console.log(`The product of the integers between 1 and ${integer} is ${factorial(integer)}.`);
}

function sum(n) {
  n = Number(n);
  return (n * (n + 1)) / 2;
}

function factorial(n) {
  n = Number(n);
  return n ? n * factorial(n - 1) : 1;
}