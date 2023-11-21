const readline = require("readline-sync");
const OBJ = require('./mortgage_messages.json');

let prompt = (message) => {
  console.log(`=> ${message}`);
};

//function - validate user input as number
let checkNumber = (num) => {
  while (isNaN(num) || num.trimStart() === "") {
    prompt(OBJ.invalidNumber);
    num = readline.question();
  }
  return Number(num);
};

//function - converts term to month, APR to MPR, and calculate payment
let paymentFormula = (amount, apr, term) => {
  term *= 12;
  apr = (apr / 100) / 12;
  let result = amount * (apr / (1 - Math.pow((1 + apr), (-term))));
  return Math.round(result * 100) / 100;
};

//function - starts program and gets user input
let startMortgage = () => {
  prompt(OBJ.loanAmount);
  let loanAmount = readline.question();
  loanAmount = checkNumber(loanAmount);

  prompt(OBJ.APR);
  let APR = readline.question();
  APR = checkNumber(APR);

  prompt(OBJ.loanTerm);
  let loanTerm = readline.question();
  loanTerm = checkNumber(loanTerm);

  let monthlyPayment = paymentFormula(loanAmount, APR, loanTerm);
  prompt(OBJ.monthlyPaymentMessage + monthlyPayment);
};

startMortgage();