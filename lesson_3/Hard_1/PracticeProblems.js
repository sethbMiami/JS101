//Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

//What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

//Given the following similar sets of code, what will each code snippet print?

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

//console.log(`one is: ${one}`); //one
//console.log(`two is: ${two}`); //two
//console.log(`three is: ${three}`); //three

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); //two
console.log(`two is: ${two}`); //three
console.log(`three is: ${three}`); //two

console.log(["one"].splice(0, 1, "two"));

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length === 4) {
    for (let word of dotSeparatedWords) {
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(isDotSeparatedIpAddress("w.h.a.t"));