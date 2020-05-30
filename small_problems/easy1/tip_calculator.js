const readline = require('readline-sync');

const bill = readline.question('What is the bill? ');
const tipRate = readline.question('What is the tip percentage? ');

const tip = Number(bill) * Number(tipRate) / 100;
const total = Number(bill) + tip;

console.log(`The tip is $ ${tip.toFixed(2)}`);
console.log(`The total is $ ${total.toFixed(2)}`);
