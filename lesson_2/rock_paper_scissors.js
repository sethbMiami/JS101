//global variables

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const QUICK_CHOICE = ['r', 'p', 's', 'sp', 'l'];

let playAgain = true;
let numberOfGames = 0;
let score = 0;

//functions

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

  if (choice === computerChoice) {
    return ("It's a tie!");
  } else if (((choice === 'rock' || choice === 'spock') && computerChoice === 'scissors') ||
  ((choice === 'paper' || choice === 'spock') && computerChoice === 'rock') ||
  ((choice === 'scissors' || choice === 'lizard') && computerChoice === 'paper') ||
  ((choice === 'paper' || choice === 'lizard') && computerChoice === 'spock') ||
  ((choice === 'scissors' || choice === 'rock') && computerChoice === 'lizzard')) {
    return ('You win!');
  } else {
    return ("Computer wins!");
  }
}

//game logic

while (playAgain) {
  prompt("WELCOME TO **RPS + Spock & Lizard** PLAY 5 ROUNDS - BEST OF 5 IS GRAND WINNER");
  prompt("-".repeat(78));
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);

  while (numberOfGames < 5) {
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

    let result = displayWinner(choice, computerChoice);
    prompt(`${result} You chose ${choice}, computer chose ${computerChoice}`);

    //if its a tie it doesn't count towards numberOfGames
    if (result === "You win!") {
      score++;
      numberOfGames++;
    } else if (result !== "It's a tie!") {
      numberOfGames++;
    } else {
      prompt("Let's try that again.");
    }

    prompt(`Game ${numberOfGames} of 5`);
  }

  if (score >= 3) {
    prompt(`You won ${score} out of 5 games! You are the GRAND WINNER!!!!`);
  } else {
    prompt(`You only won ${score} out of 5 games. Better luck next time.`);
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    playAgain = false;
  }
  score = 0;
  numberOfGames = 0;
  console.clear();
}