/* eslint-disable max-len */
//Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];
//numbers = [];
//numbers.length = 0;
numbers = numbers.slice(4);
console.log(numbers);

const isColorValid = color => ["blue", "green"].includes(color);
console.log(isColorValid("red"));
console.log(isColorValid("blue"));
