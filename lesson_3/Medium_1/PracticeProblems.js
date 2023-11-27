/* eslint-disable max-len */
//For this practice problem, write a program that outputs The Flintstones Rock!
//10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     ...

let string = "The Flintstones Rock!";

for (let x = 0; x < 10; x++) {
  console.log(string.padStart(string.length + x, " "));
}

//Return a new string that swaps the case of all of the letters:

let munstersDescription = "The Munsters are creepy and spooky.";

//`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

let munsterReverseCap = "";

for (let letter of munstersDescription) {
  if (letter === letter.toUpperCase()) {
    munsterReverseCap += letter.toLowerCase();
  } else if (letter === letter.toLowerCase()) {
    munsterReverseCap += letter.toUpperCase();
  } else {
    munsterReverseCap += " ";
  }
}

console.log(munsterReverseCap);

let otherSolution = munstersDescription.split("").map((char) => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

console.log(otherSolution);

//Alyssa noticed that this code would fail when the input is 0 or a negative number,
//and asked Alan to change the loop. How can he make this work without using a do/while loop?
//Note that we're not looking to find the factors for 0 or negative numbers,
//but we want to handle it gracefully instead of raising an exception or going into an infinite loop.


function factors(number) {
  if (number <= 0) {
    return null;
  }

  let factors = [];
  for (let num = 1; num <= number; num++) {
    if (number % num === 0) {
      factors.push(num);
    }
  }
  return factors;
}

console.log(factors(100));

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));