const readline = require('readline-sync');

function prompt (message) {
  console.log(`=> ${message}`);
}

function invalidAmount (amount) {
  return invalidNumber(amount) || // must be valid number
        amount.split('.')[1] === undefined || // must have decimal portion
        amount.split('.')[1].length !== 2; // decimal places must be 2
}

function invalidNumber(number) {
  return number.trim() === '' || // cannot be empty
            Number(number) < 0; // number must be positive
}

prompt ("Welcome to the Mortgage Calculator");
// loop to ask user for inputs

while (true) {
  // get loan amount
  prompt("Please enter the loan amount in dollars and cents eg. $100.50.");
  let loanAmount = readline.question();

  // validate loan amount in dollars and cents
  while (invalidAmount(loanAmount)) {
    prompt("Please ensure amount is valid. Try again...");
    loanAmount = readline.question();
  }

  // get apr
  prompt("Please enter the annual interest rate in decimals eg. 0.05 means 5%");
  let interestRate = readline.question();

  // validate apr is in decimal
  while (invalidAmount(interestRate)) {
    prompt("Please ensure amount is valid. Try again...");
    interestRate = readline.question();
  }

  // get loan duration
  prompt("Please enter duration of loan in years");
  let duration = readline.question();

  // validate loan duration is valid number
  while (invalidNumber(duration)) {
    prompt("Please ensure duration is valid. Try again...");
    duration = readline.question();
  }

  let monthlyInterestRate = interestRate / 12;
  let months = Number(duration) * 12;

  // calculate monthly payment
  let monthlyPayment = Number(loanAmount) *
                (monthlyInterestRate /
                (1 - Math.pow((1 + monthlyInterestRate),(-Number(months)))));

  // return monthly payment
  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  // ask if user wants to calculate again
  prompt("Calculate again?");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}


