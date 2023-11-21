const readline = require("readline-sync");
const MESSAGES = require('./mortgage_messages.json');

let prompt = (message) => {
  console.log(`=> ${message}`);
};

//function - validate user input as number
let validateNumberInput = (num) => {
  while (isNaN(num) || num.trimStart() === "" || num === "0") {
    prompt(MESSAGES.invalidNumber);
    num = readline.question();
  }
  return Math.abs(Number(num));
};

//function - calculates monthly payment
let monthlyPaymentCalculation = (amount, apr, term) => {
  term *= 12;
  apr = (apr / 100) / 12;
  let result = amount * (apr / (1 - Math.pow((1 + apr), (-term))));
  return Math.round(result * 100) / 100;
};

//function - asks user if they want to perform another calculation
let anotherCalculation = () => {
  prompt(MESSAGES.anotherCalculationMessage);
  let userResponse = readline.question().toLowerCase();

  if (userResponse.includes("y")) {
    // would most likely store this function and others in a different file
    // eslint-disable-next-line no-use-before-define
    startMortgageProgram();
  }
};

//function - starts program and calls user input and calculate functions
let startMortgageProgram = () => {
  prompt(MESSAGES.loanAmount);
  let loanAmount = readline.question();
  loanAmount = validateNumberInput(loanAmount);

  prompt(MESSAGES.APR);
  let APR = readline.question();
  APR = validateNumberInput(APR);

  prompt(MESSAGES.loanTerm);
  let loanTerm = readline.question();
  loanTerm = validateNumberInput(loanTerm);

  let monthlyPayment = monthlyPaymentCalculation(loanAmount, APR, loanTerm);
  prompt(MESSAGES.monthlyPaymentMessage + monthlyPayment);

  anotherCalculation();
};

prompt(MESSAGES.welcomeMessage);
startMortgageProgram();
prompt(MESSAGES.closingMessage);
