const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

let playAgainLoop = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

// eslint-disable-next-line complexity
function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (choice === computerChoice) {
    prompt("It's a tie!");
  } else if (((choice === 'rock' || choice === 'spock') && computerChoice === 'scissors') ||
  ((choice === 'paper' || choice === 'spock') && computerChoice === 'rock') ||
  ((choice === 'scissors' || choice === 'lizard') && computerChoice === 'paper') ||
  ((choice === 'paper' || choice === 'lizard') && computerChoice === 'spock') ||
  ((choice === 'scissors' || choice === 'rock') && computerChoice === 'lizzard')) {
    prompt('You win!');
  } else {
    prompt("Computer wins!");
  }
}

while (playAgainLoop) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    playAgainLoop = false;
  }
}