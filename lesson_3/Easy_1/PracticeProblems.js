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

//scrap paper

let arrayMutate = [1, 2, 3];
arrayMutate.pop();
console.log(arrayMutate);

let string1 = 'me';

let mutateString = () => {
  string1 = 'you';
};

mutateString();
console.log(string1);

//- **Excercise:**
//Create a function that takes two arguments: starting number and end number and returns an array with numbers 
//starting from `startNumber` and ending on `endNumber`.

const createArray = (startNum, endNum) => {
  let array = [];

  while (startNum <= endNum) {
    array.push(startNum);
    startNum++;
  }

  return array;
};

console.log(createArray(2, 20));

//Create a function that takes a string as an argument and return an object with letters of the string and 
//their occurrence as properties:  eg: 'abbab' `{a:2, b: 3}`

const countOccurencies = (str) => {
  let keyIndex = 0;
  let keyArray = [];
  let valuesArray = [];

  while (keyIndex < str.length) {
    let letter = str[keyIndex];
    let letterRegExp = new RegExp(letter, "g");

    if (keyArray.indexOf(letter) === -1) {
      keyArray.push(letter);
      let count = (str.match(letterRegExp)).length;
      console.log(count);
      valuesArray.push(count);
    }
    keyIndex++;
  }

  return Object.assign(...keyArray.map((key, value) => ({
    [key]: valuesArray[value] })));
};

console.log(countOccurencies('aabccabcbaaaaab'));