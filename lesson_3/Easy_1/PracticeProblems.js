/* eslint-disable max-len */
//Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

console.log(numbers);

// eslint-disable-next-line max-len
//How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

let exclaim = str1.endsWith('!');
let exclaim2 = str2.endsWith('!');


console.log(exclaim);
console.log(exclaim2);

//Determine whether the following object of people and their age contains an entry for 'Spot':

//let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

//console.log(ages.hasOwnProperty('Spot'));

//Using the following string, create a new string that contains all lowercase letters except for the first character, 
//which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newString = munstersDescription.charAt(0).toUpperCase() + munstersDescription.slice(1).toLowerCase();

console.log(newString);

//We have most of the Munster family in our ages object:
//Add entries for Marilyn and Spot to the object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

console.log(Object.assign(ages, additionalAges));

//Determine whether the name Dino appears in the strings below -- check each string separately:

let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str3.includes('Dino'));
console.log(str4.includes('Dino'));

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");
console.log(flintstones);

//remove from house to the end
let advice = "Few things in life are as important as house training your pet dinosaur.";

let newAdvice = advice.slice(0, advice.indexOf("house"));
console.log(newAdvice);

// Expected return value:
// => 'Few things in life are as important as '