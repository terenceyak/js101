const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function prompt (message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

prompt(messages('welcome', LANGUAGE));

let repeat;

do {
  // Ask the user for the first number.
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }
  // Ask the user for the second number.
  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }
  prompt(`${number1} ${number2}`);
  // Ask the user for an operation to perform.
  prompt('What operation would you like to perform?\n' +
    '1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  // Perform the operation on the two numbers.
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  // Print the result to the terminal.
  console.log(`The result is: ${output}`);
  prompt("Would you like to perform another calculation?");
  prompt("1) Yes 2) No");
  let another = readline.question();

  while (!['1', '2'].includes(another)) {
    prompt('Can only choose 1) Yes or 2) No');
    another = readline.question();
  }

  switch (another) {
    case '1':
      repeat = true;
      break;
    case '2':
      repeat = false;
      break;
  }

} while (repeat);

