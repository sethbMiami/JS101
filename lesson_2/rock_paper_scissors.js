const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const QUICK_CHOICE = ['r', 'p', 's', 'sp', 'l'];

let playAgainLoop = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function convertQuickToValid(quickChoice) {
  switch (quickChoice) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 's':
      return 'scissors';
    case 'sp':
      return 'spock';
    case 'l':
      return 'lizard';
  }
  return null;
}

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
  prompt("Quick Choice: 'r' for rock, 'p' for paper, 's' for scissors, 'sp' for spock, or 'l' for lizard");
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice) && !QUICK_CHOICE.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }

  if (QUICK_CHOICE.includes(choice)) {
    choice = convertQuickToValid(choice);
  }

  console.clear();

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

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
  console.clear();
}