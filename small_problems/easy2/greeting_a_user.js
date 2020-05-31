const readline = require('readline-sync');

const name = readline.question('What is your name? ');

if(name.split('').pop() === '!') {
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
    console.log(`Hello ${name}.`);
}