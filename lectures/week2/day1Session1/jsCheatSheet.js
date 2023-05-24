// VARIABLES

var firstName = 'John';
console.log(firstName)
var firstName = 'James';
console.log(firstName)
firstName = 'Kurt';

let lastName = 'Smith';
// let lastName = 'Jones';
// let does not like to be re-declared
lastName = 'Jones';

const favoriteFood = 'Taco';
// favoriteFood = 'Hamburger';
// const does not like to be edited

console.log(firstName);
console.log(lastName);
console.log(favoriteFood);

// DATA TYPES

// Strings  // 'house' 'car'
// Numbers  // 1, 345, -581374
// Booleans // true, false
// Arrays   // ['1', 'house', 5]
// Objects  // {name: John, age: 35}

// OPERATIONS

// 1 + 1 = 2
// 2 * 2 = 4
// 2 - 2 = 0
// 2 / 2 = 1
// 21 % 5 = 1;
// 21 % 6 = 3;
// 21 % 7 = 0;
// Math.pow(2,2) = 4;
// Math.pow(3,2) = 9;
// Math.pow(3,3) = 27;
// Math.round(6.5) = 7;
// Math.round(6.45) = 6;
// Math.floor(6.999) = 6;
// Math.ceil(6.0001) = 7;
// x++ returns x then adds 1 to x;
// ++x adds 1 to x then returns x;
// -- subtracts 1 from variable;

let num1 = 1 + 1
console.log(num1);

// PROPERTIES

const names = ['Pace', 'Missa', 'Jeremy']
console.log(names[2]);
console.log(names.length);

// METHODS

const num = 42;
console.log(num);

num.toString(); //"42"
console.log(num);

// FUNCTIONS

function logsHello(word) {
  console.log(word)
  console.log(`${word}`)
  console.log(`the word of the day is ${word}, so use it at least once today`)
  console.log("the word of the day is", word, "so use it at least once today")
}

logsHello('whats up');
logsHello(75)

function myFunc() {}
const anotherFunc = function () {};
const yetAnother = () => {};
const myOtherFunction = () => {}


// FUNCTION ARGUMENTS

// Function Declaration, it has a name
function logsHelloName(name) {
    console.log('Hello, ' + name);
    console.log( `Hello, ${name}`);
}

logsHelloName('Dan');

function addsTwoNumbers(a, b) {
    const sum = a + b;
    return sum;
}

addsTwoNumbers(1, 5); // 6

// Function Expression, it's anonymous
const add = function(a,b){ 
 return a + b;
} 
console.log(add(2,4)) // 6 

// Arrow Function Expression
const add1 = (a,b) => a + b;
const add2 = (a,b) => { 
 return a + b;
}  
console.log(add1(2,4)) // 6 
console.log(add2(1,8)) // 9

// RETURN

function subtractsTwoNumbers(a, b) {
    var difference = a - b;
    var difference2 = a - b;
    // return difference;
    console.log(difference)
    return difference - 1;
}

const differenceValue = subtractsTwoNumbers(10, 7); 
console.log(differenceValue); // 1
// console.log(difference); // undefined
// console.log(difference2); // undefined


// IF STATEMENTS (CONTROL FLOW)
function canDrive(age) {
    if (age > 15) {
        return true;
    }

    return false;
}

canDrive(16); // true


// UNDEFINED and NULL

// console.log(unkownVar); // returns 'undefined'
let unknownVar = null;
console.log(unknownVar);


// TRUTHINESS

//     // items that are coerced to true
//     true 
//     1
//     ' '
//     [] // an array, you'll learn more about this later
//     {} // an object, you'll learn more about this later
//     function() {}

//     // items that are coerced to false
//     false
//     0
//     undefined
//     null
//     ''


// COMPARISON OPERATORS

1 > 2;     // false
2 < 3;     // true
10 >= 10;  // true
100 <= 1;  // false
1 == '1';  // true
1 === '1'; // false
1 === 1;   // true
1 !== 1;          // false
1 !== '1';        // true
'cat' !== 'cat';  // false
'cat' !== 'Cat';  // true

//  &&  'and'
if (100 > 10 && 10 === 10) {
  console.log('Both statements are true, so this code will be run');
}

//  ||  'or'
if (100 > 10 || 10 === 10) {
  console.log('Both statements are true, so this code will be run');
}

//  !   'not'
if (!false) {
  console.log('The ! will return true because it is the opposite of false. This code will be run');
}


// IF ELSE STATEMENTS

if (false) {
  console.log('This will be skipped!');
} else if (true) {
  console.log('This code will be run.');
} else if (true) {
  console.log('This code will NOT be run.');
} else {
  console.log('This will be skipped!');;
}


// CONDITIONAL (TERNARY) OPERATOR

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true)); // expected output: "$2.00"
console.log(getFee(false)); // expected output: "$10.00"
console.log(getFee(1)); // expected output: "$2.00"


//  FOR LOOPS

for ( let i = 0 ; i < 10 ; i++ ) {
    // declare a var | conditional expression | increment var
        console.log(i);
    }

//  FOR "KEY IN"
// for (let item in myArray) {
// }

// INFINITE LOOPS
//     for (let i = 0; i >= 0; i++) {
    //     console.log(i);
    // }


// ARRAYS

// const studentNames = [];
const studentNames = ['Dan', 'Maria', 'Sara', 'Raj'];
       // Index [n]   [0]  , [1]    , [2]   , [3]
console.log(studentNames);  // ["Dan", "Maria", "Sara", "Raj"]
console.log(studentNames.length);  // 4
console.log(studentNames[2]);  // "Sara"
console.log(studentNames[num-39]); // "Raj"
console.log(studentNames[studentNames.length - 3]);  // "Maria"
studentNames.push('Ryan');    // Add an item to the end
studentNames.pop();           // Remove an item from the end
studentNames.unshift('Ryan'); // Add an item to the beginning
studentNames.shift();         // Remove an item from the beginning
studentNames.splice(2,1,'Mark','Lucy');     // Remove items at the specified index, and optionally add more items.
console.log(studentNames);

// Use .foreach to change an array
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

// Use .map to create a new changed array
const array2 = [1, 4, 9, 16];
const map1 = array2.map(x => x * 2); // pass a function to map
console.log(map1); // expected output: Array [2, 8, 18, 32]

// Use .filter to return a smaller array where items meet conditions
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(x => x.length > 8); // pass a function to filter
console.log(result); // expected output: Array ["exuberant", "destruction"]

// Use .reduce to combine all the items in an array together
const nums = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(nums.reduce(reducer, 5)); // (5 + 1 + 2 + 3 + 4) === 15

// OBJECTS

// const newObj = {};
const user = {
  username: 'dan.frehner',
  password: 'abc123',
  lovesJavascript: true,
  favoriteNumber: 42,
};

console.log(user);

// You can access Object values in multiple ways:

// Bracket Notation
console.log(user['lovesJavascript']); // true
// Dot Notation
console.log(user.username); // "dan.frehner"
// With Variables
const passString = 'password';
console.log(user[passString]); // "abc123"

// Assigning new values using '='
user.username = 'pace.ellsworth';
console.log(user.username); // "pace.ellsworth"
user.newProperty = 'new value';
console.log(user);

// Deleting properties
delete user.newProperty;
console.log(user);

// METHODS are when you run functions from inside Objects
user.sayHiMethod = function(name) {
  console.log(`Hi, ${name}!`);
}

user.sayHiMethod("Pace");

// Built-in METHODS
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


// FOR LOOPS with Objects
for (let key in user){
  console.log(key);
  console.log(user[key]);
}

// 'THIS' KEYWORD
user.sayHiMethod = function() {
  console.log(`Hi, ${this.username}!`);
}

user.sayHiMethod();

// CHALLENGE
// Accessing data from Objects with Arrays with Objects with Arrays

const myObj = {
  "name":"John",
  "age": 30,
  "cars": [
    { "name":"Ford", 
      "models":[ "Fiesta", "Focus", "Mustang" ] },
    { "name":"BMW", 
      "models":[ "320", "X3", "X5" ] },
    { "name":"Fiat", 
      "models":[ "500", "Panda" ] }
  ]
 }

// How would you access the last BMW Model?
// myObj.cars[1].models[2]; // "X5"
// How would you access the number of Ford models?
// myObj.cars[0].models.length; // 3


