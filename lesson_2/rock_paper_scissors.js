const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (choice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
        (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock'))) {
    prompt('You win!');
  } else if ((choice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
               (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
               (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
               (choice === 'spock' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
               (choice === 'lizard' && (computerChoice === 'scissors' || computerChoice === 'rock'))) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

