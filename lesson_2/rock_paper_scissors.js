const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function decodeChoice(choice) {
  switch (choice.toLowerCase()) {
    case 'r' :
      return 'rock';
    case 'p' :
      return 'paper';
    case 'sc':
      return 'scissors';
    case 'l':
      return 'lizard';
    case 'sp':
      return 'spock';
    default:
      return undefined;
  }
}

function validateChoice(choice) {
  if (choice === undefined) {
    return false;
  } else {
    return true;
  }
}

function getOutcome(choice, computerChoice) {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    return 'win';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'lose';
  }
}

function displayChoice (choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
}

function displayWinner(outcome) {
  if (outcome === 'win') {
    prompt("You win!");
  } else if ( outcome === 'lose') {
    prompt("Computer Wins!");
  } else {
    prompt("Its a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt("Enter the short hand of your choice.");
  prompt("r - rock, p - paper, sc - scissors, li - lizard, sp - spock");
  let choice = readline.question();
  let playerChoice = decodeChoice(choice);

  while (!validateChoice(playerChoice)) {
    prompt("That's not a valid option, please choose a valid option");
    choice = readline.question();
    playerChoice = decodeChoice(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayChoice(playerChoice, computerChoice);

  let outcome = getOutcome(playerChoice, computerChoice);

  displayWinner(outcome);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
