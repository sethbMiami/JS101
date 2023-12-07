/* eslint-disable max-len */
// What will be logged to the console? What concept does the code demonstrate? -- Seth

//This code will return an error because on line 2 the greetiest() function is out of scope. It is declared within
//the function greeter() and cannot be called outside of that scope. This example demonstrates variable scoping rules in JavaScript;
//specifically a function declared in an inner scope is not accessible in the outer global scope

greeter();
greetiest();

function greeter() {
  const hello = "Hello";
  const world = "World";

  function greetiest() {
    console.log(world);
  }

  console.log(hello);
}

// What will the code output? What concept does it demonstrate? -- Nick

let output = 10;

const logger = () => {
  // do i have local variable
  output = 5;
}

logger();
console.log(output); // 5


// What will be the output on the last line of code? What concept does it demonstrate? -- Derek
function addOne(num) {
  return num + 1
}

function mutater(adder) {
  adder['a'] = 'mutated'
}

mutater(addOne);
console.log(addOne.a);
// when run the code will output `mutated` to the console. 
// this demonstrates the concept of mutability of objects, even though addOne was defined
// at the top as a function, it is an object and passed by reference to the function mutater as an argument when called, then inside mutater it is assigned to property `a` using 
// brackets as an accessor and thus mutating the original object. Then the object property is accessed with dot notation and logged to the console



// What is the output? Explain what is going in the code. -- Shuka
function world(string) {
  return string;
}

const shout = (toShout) => `${toShort()}!`;   // toShout == () => 'world'()
console.log(shout(world)); 

/* Shukastar
2 Functions are being declared in lines 49 and 50. The first function just returns a string `world` whenever it's called
and the second function, takes parameter, presumebly object and returns a string from string literal template. 
shout function is called and the function world is passed in. Specifecally pointer to function is passed into the function shout
the local variable toShout inside shout and variable world both point to the same object. So whatever definitions world had, toShout can use. 
toShout is used and returned with the string `world` to form a new string with literal string. 
*/