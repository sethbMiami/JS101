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

