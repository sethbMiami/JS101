/* eslint-disable max-len */
//Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur. important, important.";

console.log(advice.replaceAll("important", "urgent"));

//reverse and sort array without mutating

let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

let reversedArray2 = [];

numbers.forEach((number) => {
  reversedArray2.unshift(number);
});

console.log(reversedArray2); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

let numbers2 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = numbers2.includes(8);  // false
let number2 = numbers2.includes(95); // true

console.log(number1, number2);

let famousWords = "seven years ago...";
console.log("Four score and " + famousWords);
console.log(`Four score and ${famousWords}`);

//Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, 
//so that the array becomes [1, 2, 4, 5].

let array1 = [1, 2, 3, 4, 5];
array1.splice(2, 1);
console.log(array1);


let nestedArray = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let flatArray = nestedArray.flat();
console.log(flatArray);
console.log();

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barney = Object.entries(flintstones)[2];

console.log(barney);

//are they array

let numbers3 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers3));
console.log(Array.isArray(table));

let title = "Flintstone Family Members";
let count = Math.floor((40 - title.length) / 2);
console.log(title.length);

console.log(title.padStart(title.length + count));

//Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split("t").length - 1);
console.log(statement2.split("t").length - 1);
