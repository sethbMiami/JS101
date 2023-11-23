let array = ['seth', 'may', 'kai'];

for (let x in array) {
  console.log(x);
}

for (let y of array) {
  console.log(y);
}

let number = 1;
let newNumber = number; // is this pass by value?
number = 5;

let arr = [1, 2, 3];
let newArr = arr; // is this pass by reference?
arr.push(4);

console.log(number);
console.log(newNumber);
console.log(arr);
console.log(newArr);

let newVar = 2;

function random () {
  newVar += 2;
}

random(newVar);
console.log(newVar);

function longestWord1(sentence) {
  let words = sentence.split(' ');
  let savedWord = words[0];

  words.forEach(word => {
    if (word.length >= savedWord.length) {
      savedWord = word;
    }
  });

  return savedWord;
}

function longestWord4(sentence) {
  let words = sentence.split(' ');
  let savedWord = words[0];

  words.forEach(word => {
    if (savedWord.length <= word.length) {
      savedWord = word;
    }
  });

  return savedWord;
}

console.log(Number("12.5"));
console.log(parseInt("12.5"));

let readline = require("readline-sync");

function askYesOrNo(prompt) {
  let answer = readline.question(prompt);
  return answer;
}

let xyz = askYesOrNo([1, 2, 3]);
console.log(xyz);