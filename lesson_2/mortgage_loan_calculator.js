const readline = require("readline-sync");
const MESSAGES = require('./mortgage_messages.json');

let prompt = (message) => {
  console.log(`=> ${message}`);
};

//function - validate user input as number
let validateUserInput = (num) => {
  while (isNaN(num) || num.trimStart() === "") {
    prompt(MESSAGES.invalidNumber);
    num = readline.question();
  }
  return Number(num);
};

//function - calculates monthly payment
let monthlyPaymentCalculation = (amount, apr, term) => {
  term *= 12;
  apr = (apr / 100) / 12;
  let result = amount * (apr / (1 - Math.pow((1 + apr), (-term))));
  return Math.round(result * 100) / 100;
};

//function - starts program and gets user input
let startMortgageProgram = () => {
  prompt(MESSAGES.loanAmount);
  let loanAmount = readline.question();
  loanAmount = validateUserInput(loanAmount);

  prompt(MESSAGES.APR);
  let APR = readline.question();
  APR = validateUserInput(APR);

  prompt(MESSAGES.loanTerm);
  let loanTerm = readline.question();
  loanTerm = validateUserInput(loanTerm);

  let monthlyPayment = monthlyPaymentCalculation(loanAmount, APR, loanTerm);
  prompt(MESSAGES.monthlyPaymentMessage + monthlyPayment);
};

startMortgageProgram();