function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

// line 21 = function called hello
// line 22 = instructions for function saying print the word hello
// line 23 =  ending function
//  line 24 = calling the function
// line 25 = printing the word dojo


var num = 15; // var called num = 15
console.log(num); // print value of num
function timesTwo(num){ // function called timesTWo taking a parameter called num
   console.log(num);   // printing the value of num from the supplied parameter
   return num*2; // returning the value of parameter num * 2
}
var result = timesTwo(10); // result will equal the return of the value of the function with supplied parameter of 10
console.log(result); // the answer to the result parameter * 2 (aka the return statement)
console.log(num); // just the value of num (the global one as it is not mentioning the function)


// Example T-Diagram
// num = 15
// function num = 10
// return = 20


// Ride example

// If kid over 42 in height - allow on ride otherwise try later
// if statement
// var for child trying to get on ride
// console.log in if statement to tell kids if yes or no

var kidHeight = 43  
var allowedHeight = 42

// kid height of 42 should fail because 42 not larger than 42

if(kidHeight >= allowedHeight) {
    // yes go on ride
    console.log("go for it")
} else {
    // sorry so sorry
    console.log("No good kid")
}