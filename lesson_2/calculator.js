// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.


//readline var and functions for game
const readline = require("readline-sync");
const obj = require('./calculator_messages.json');

let calculationCounter = 0;

let prompt = (message) => {
  console.log(`=> ${message}`);
};

let translator = (message, lang = "en") => {
  return obj[lang][message];
};

let invalidNumber = (number) => {
  return number.trimStart() === '' || Number.isNaN(Number(number));
};

let checkNumber = (num) => {
  while (invalidNumber(num)) {
    prompt(translator("invalidNumber"));
    num = readline.question();
  }
  return num;
};

let checkOperation = (oper) => {
  while (!['1', '2', '3', '4'].includes(oper)) {
    prompt(translator("invalidOperation"));
    oper = readline.question();
  }
};

let performOperation = (validOper, num1, num2) => {
  switch (validOper) {
    case '1':
      return Number(num1) + Number(num2);
    case '2':
      return Number(num1) - Number(num2);
    case '3':
      return Number(num1) * Number(num2);
    case '4':
      return Number(num1) / Number(num2);
  }
  return null;
};

//new feature - another calculation function

let anotherCalculation = () => {
  prompt(translator("anotherCalc"));
  let answer = readline.question().toLowerCase();
  //add checks to validate answer

  if (answer.includes("y")) {
    // eslint-disable-next-line no-use-before-define
    startCalculator();
  }
};

let startCalculator = () => {
  prompt(translator("greeting", "es"));

  prompt(translator("firstNumber", "es"));
  let number1 = readline.question();
  number1 = checkNumber(number1);

  prompt(translator("secondNumber"));
  let number2 = readline.question();
  number2 = checkNumber(number2);

  prompt(obj.en.operation);
  let operation = readline.question();
  checkOperation(operation);

  let output = performOperation(operation, number1, number2);
  prompt(translator("result") + output);

  calculationCounter++;
  anotherCalculation();
};

//start calculator

startCalculator();
prompt(`You performed ${calculationCounter} calculations. Thank you and have a nice day.`);
