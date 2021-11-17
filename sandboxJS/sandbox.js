/* 
Concepts - Closures, Prototypes, New features

Async - Event loops, promises, callbacks, OS level

Debugging & profiling - v8 snapshots/flamegraphs

Tech stack - Ecosystems
Webpack
Babel
NodeJS 
Typescript
*/

// function is a snippet of code which performs a specific task
// Method is just a function that is associated with a particular object or data type

// Order of operation in math - B I D M A S

// NaN JS console error = Not A Number

//
/* 
VARIABLES

let - is most common variable, You can update this value - Can only be updated inside another code block or scope
const - cannot be changed. This will stay the same throughout the whole program. Can be updated in local scope by redefining const. However this cannot be changed.
var - has global scope even when declared within code blocks

A variable can hold any data type
*/

//
/* 
Data types

Number
String - Series of characters in single or double quotes
Boolean - true/false
Null - Explicitly set a variable with no value - Empty value
Undefined - For variables that have not yet been defined - Empty value
Object - Complex data structures -Arrays, Dates, Literals etc
Symbol - Newer addition to JS - Used with objects
*/

//
/*
STRINGS

Concatenation = Combining things together
Javascript counts from [0] up
*/

// Common string methods
//
// .index
let myVariable = "test@test.com";
myVariable.indexOf("@"); /*- would give me 4 */

// .slice
let slideResult = myVariable.slice(0, 4); /*- would give me myVar */

// .substr
let substrResult = myVariable.slice(4, 5); /*- would give me iable */

// .replace
let replaceResult = myVariable.replace("v", "p"); /*- would give me myPariable */

//
/*
Template strings - (template literal)

Allows you to inject variables into the string without exiting out and concatenating
*/
// Concatenation way
const title1 = "Best reads of 2021";
const author1 = "Mario";
const likes1 = 30;
let result1 = "The blog called " + title1 + " by " + author1 + " has " + likes1 + " likes";

// Template string way
const title2 = "Best reads of 2021";
const author2 = "Mario";
const likes2 = 30;
let result2 = `The blog called ${title2} by ${author2} has ${likes2} likes`;

// Creating HTML Template
// let html = `
// <h2>${title2}</h2>
// <p>By ${author2}</p>
// <span>This blog has ${likes2} likes</span>
// `;

// console.log(html); return <h2>Best reads of 2021</h2><p>By Mario</p><span>This blog has 30 likes</span>

//
// ARRAYS
//
let ninjas = ["shaun", "ryu", "chun-li"];
// console.log(ninjas[1]); = ryu

let ages = [20, 25, 30, 35];
// console.log(ages[2]); = 30

// let random = ['shaun', 'crystal', 30, 20];

// console.log(ninjas.length);

//
// Array methods
//
let resultarray1 = ninjas.join("-");
// console.log(result); /* shaun,ryu,chun-li */

let resultarray2 = ninjas.indexOf("chun-li");
// console.log(result); /* 2 (chun-li = second in array) */

let resultarray3 = ninjas.concat(["ken", "crystal"]);
// console.log(result); /* adds 'ken', 'crystal' to the array */

let resultarray4 = ninjas.push("ken");
// console.log(ninjas); /* Adds ken to array */
resultarray4 = ninjas.pop("ken");
// console.log(resultarray4); /* Removes 'ken' from array and returns this value */

//
// Null / Undefined
//
let ageNull = null;
// console.log(ageNull, ageNull + 3, `the age is ${ageNull}`);
// null 3 'the age is null' - Used in cases where a value needs to be reset. e.g. clearing a form

//
// Booleans
//
// console.log(true, false, "true", "false");

// methods can return booleans
let email = "luigi@thenetninja.co.uk";
let names = ["mario", "luigi", "toad"];

let resultboolean1 = email.includes("@");
let resultboolean2 = names.includes("luigi");
// console.log(resultboolean1); /* returns true becasue email array includes an '@' - would return false if not */
// console.log(resultboolean2); /* returns true becasue names array includes 'luigi' - would return false if not */

// comparison operators
// single = sets a value
// double == means is eqaul to (abstract equality/loose equality/loose comparison)
// triple === means is eqaul to same value and type (strict equality/strict comparison)
// != means is not equal to
let ageComparison = 25;
// console.log(ageComparison == 25); /* true as age is equal to 25 */
// console.log(ageComparison == 30); /* false as age is not equal to 30 */
// console.log(ageComparison != 30); /* true as age is not equal to 30 */
// console.log(ageComparison > 20); /* true as age is over 20 */
// console.log(ageComparison < 20); /* false as age is not less then 20 */
// console.log(ageComparison <= 25); /* true because it is equal to or less than 25 */
// console.log(ageComparison >= 25); /* true because it is equal to or greater than 25 */

let name = "shaun";
// console.log(name == "shaun"); /* true */
// console.log(name == "Shaun"); /* false */
// console.log(name > "crystal"); /* true because s comes later in Alphabet than c - therefore it is greater than in JS */
// console.log(name > "Shaun"); /* true lowercase is greater than uppercase in JS */
// console.log(name > "Crystal"); /* true lowercase is greater than uppercase in JS */

//
// loose comparison (different types can still be equal)
// console.log(ageComparison != 25); /* false */
// console.log(ageComparison != "25"); /* false */

//
//strict comparison (different types cannot be equal)
// console.log(ageComparison === 25); /* true */
// console.log(ageComparison === "25"); /* false */
// console.log(ageComparison !== 25); /* false */
// console.log(ageComparison !== "25"); /* true */

//
// Type conversion
//
// explicit type conversion
let score = "100";
score = Number(score); /* Number converts string into a number */
// console.log(score + 1); /* equals 101 */
// console.log(typeof score); /* typeof - checks type of value  */

// let resultType = Number("hello"); /* "hello" is not a number - returns NaN */
// let resultType = String(50);
// let resultType = Boolean(100);
let resultType = Boolean("0");
// console.log(resultType, typeof resultType);

//
// Control Flow - loops and conditionals
//
// LOOPS
//
// for (let i = 0; i < 5; i++) {
//   console.log("in loop:", i);
// }

// console.log("loop finished");

const namesForloop = ["shaun", "mario", "luigi"];

//
// for loop
//
for (let i = 0; i < namesForloop.length; i++) {
  // console.log(namesForloop[i]); /* loops through array and returns each name */
  let htmlForloop = `<div>${namesForloop[i]}</div>`;
  // console.log(htmlForloop); /* returns html list of each name (<div>shaun</div> etc) */
}

//
// while loop
//
const namesWhileloop = ["shaun", "mario", "luigi"];
// let i = 0;
// while (i < 5) {
//   console.log("in loop: ", i);
//   i++;
// }
// let i = 0;
// while (i < namesWhileloop.length) {
//   console.log(namesWhileloop[i]);
//   i++;
// }

//
// do while loop - this will always run the loop at least once. Even though i = 5
//
// let i = 5;
// do {
//   console.log("val of i is: ", i);
//   i++;
// } while (i < 5);

//
// if/else/else if statements
//
const ageIf = 25;
if (ageIf > 20) {
  // console.log("you are over 20 years old");
}

const ninjasIf = ["shaun", "ryu", "chun-li", "yoshi"];
if (ninjasIf.length > 3) {
  // console.log("that's a lot of ninjas");
}

const passwordIf = "p@ss";
if (passwordIf.length >= 12) {
  // console.log("that password is mighty strong");
} else if (passwordIf.length >= 8) {
  // console.log("that password is long enough!");
} else {
  // console.log("password is not long enough!");
}

//
// logical operators - OR || and AND &&
//
// || = or
// && = and
const passwordLogical = "p@ss12";
if (passwordLogical.length >= 12 && passwordLogical.includes("@")) {
  // console.log("that password is mighty strong");
} else if (
  passwordLogical.length >= 8 ||
  (passwordLogical.includes("@") && passwordLogical.length >= 5)
) {
  // console.log("that password is strong enough!");
} else {
  // console.log("password is not strong enough!");
}

//
// logical NOT(!)
//
let userNot = false;

if (!userNot) {
  // console.log("you must be logged in to continue");
}

//
// break and continue
//
const scoresBC = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scoresBC.length; i++) {
  if (scoresBC[i] === 0) {
    /* This starts the loop again, ignoring code beneath and removing '0' from array list */
    continue;
  }

  // console.log("your score:", scoresBC[i]);

  if (scoresBC[i] === 100) {
    /* This halts the loop */
    // console.log("congrats, you got the top score!");
    break;
  }
}

//
// SWITCH STATEMENTS - Good for evaluating a varaible that could be several different values - They use strict equality
//
const grade = "D";

// switch (grade) {
//   case "A":
//     console.log("you got an A");
//     break;
//   case "B":
//     console.log("you got a B");
//     break;
//   case "C":
//     console.log("you got a C");
//     break;
//   case "D":
//     console.log("you got a D");
//     break;
//   case "E":
//     console.log("you got an E");
//     break;
//   default:
//     console.log("not a valid grade");
// }

//
// VARIABLES & BLOCK SCOPE
//
let ageBlock = 30; /* global scope */
if (true) {
  let ageBlock = 40; /* local scope - redifined variable inside code block */
  let nameBlock = "shaun"; /* local scope - can only be accessed within this code block */
  // console.log("inside 1st code block: ", ageBlock, nameBlock); /* 40 */

  if (true) {
    /* nested code block */
    let ageBlock = 50;
    // console.log("inside 2nd code block: ", ageBlock); /* 50 */
  }
}
// console.log("outside code block: ", ageBlock); /* 30 */

//
// FUNCTIONS - define a block of code that can be called or exacuted whenever needed
//
// FUNCTION declaration - function declarations are hoisted to the top of JS file (declared before rest of JS). Therefore A declaration could be written after the function is called because of hoisting
function greet() {
  console.log("hello there");
}
// greet();

//
// FUNCTION expression - When you store a function inside a variable (eg. speak const below) - JS does not hoist function expressions - These are best practice for file organisation etc
const speakExpr = function () {
  console.log("This is an expression function");
};
// speakExpr();

//
// arguments & parameters
// - 'name' is a local variable only available within this function
// - 'name' when we recieve the value and create different values inside the function. These (name, time) are called function parameters (inside the brackets)
const speakArgPar = function (name = "luigi", time = "night") {
  /* 'luigi', 'night' (above) are fallback values in case function is invoked without any arguments passed in below ("mario", "morning") */
  console.log(`good ${time} ${name}`);
};
// speakArgPar(
//   "mario",
//   "morning"
// ); /* When a value ("mario") is passed like this into a function it is known as an argument */

//
// returning values - How you can return values from functions
const calcArea = function (radius) {
  // let area = 3.14 * radius ** 2;
  // return area;
  return 3.14 * radius ** 2; /* This gives same result as above 2 lines */
};

// when a function like above (calcArea) returns a value it needs to be stored in a variable (area) - So that it has global scope
const area = calcArea(5);
// console.log(area);
// we are able to re-use a value that a function (calcArea) returns

//
// ARROW FUNCTION - Shorter and newer way to write functions - Allows you to return values in a shorter cleaner/more concise format
//
// const calcAreaArrow = (radius) => {
//   3.14 * radius ** 2;
//  };
const calcAreaArrow = (radius) =>
  3.14 *
  radius **
    2; /* same result as above function - if one parameter you can remove parenthesis. Return keyword is not needed neither is curly braces if simple function */
const areaArrow = calcAreaArrow(5);
// console.log("area is:", areaArrow);

// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };
// console.log(bill([10, 15, 30], 0.2));

// arrow function version of function above (bill) ^^
const billArrow = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
// console.log(billArrow([10, 15, 30], 0.2));

// FUNCTIONS
//
const greetArrow = () => "hello";
let resultOne = greetArrow();
// console.log(resultOne);

// METHODS
// methods are functions but they are associated with an object or data type e.g. string they're definedon an object or data type - essentially functions but they are invoked differently - This is the main difference (eg .toUpperCase notation below)
const nameArrow = "shaun";
let resultTwo = nameArrow.toUpperCase();
// console.log(resultTwo);

//
//  callbacks & foreach
//
//  CALLBACK function - normal function that you pass into another function or method as an argument
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};
myFunc((value) => {
  // console.log(value);
});

// FOR EACH method
// - a method which iterates over an array - for each iteration within people array it calls callback funtion within .forEach
let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];
const logPerson = (person, index) => {
  // console.log(`${index} - hello ${person}`);
};
// people.forEach(logPerson);

// get a ref to the 'ul'
const ul = document.querySelector(".people");

let html = ``;

people.forEach((person) => {
  // create HTML template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

