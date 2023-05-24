// const time = new Date()  // pull the current date and time
// // https://www.w3schools.com/jsref/jsref_obj_date.asp
// testing

// console.log(time)
// var hour = time.getHours() // pulls just the hour data form the const time


// hour = time.toTimeString()
// console.log(hour)

// const newDate = Date.now()
// console.log(newDate)

// var x = 75; // var x is equal to 75
// if (x > 100) {    // 1st question is x larger than 100
//     console.log("bigger than 100"); // if yes print me if not ignore these instructions
// }
// else if (x > 50) {    // another question is x larger than 50
//     console.log("bigger than 50"); // if yes and q1 is no then print me other 
// }
// else if(x > 25) {
//     console.log("bigger than 25");
// }
// else {    
//     console.log("small number"); // if all if / else if statements fail print me
// }

// CONDITIONALS

// if's will always print if true
// else if's will only print if they are true and no other if's printed
// else will print if not if's or else if's were true

// VERSION 1
if (100 == 100) {
    console.log("print 100")
}
if (100 > 50) {
    console.log("if i am true i can print as well")
}
else if (100 < 200) {
    console.log("if the ifs before me are true i don't print even if i am true")
}
else {
    console.log("I only print when everyone else failed to pass their test")
}

// 36 and 39 and 42 are true but only 36 and 39 can run due to the else if of 42

// VERSION 2
if (100 != 100) {
    console.log("print 100")
}
if (100 > 50) {
    console.log("if i am true i can print as well")
}
else if (100 < 200) {
    console.log("if the ifs before me are true i don't print even if i am true")
}
else {
    console.log("I only print when everyone else failed to pass their test")
}

// 55 and 58 are true but like above only 55 can print due to else if of 58

// VERSION 3
if (100 != 100) {
    console.log("print 100")
}
if (100 < 50) {
    console.log("if i am true i can print as well")
}
else if (100 < 200) {
    console.log("if the ifs before me are true i don't print even if i am true")
}
else {
    console.log("I only print when everyone else failed to pass their test")
}

// only 74 is true and will print

// VERSION 4
if (100 != 100) {
    console.log("print 100")
}
if (100 < 50) {
    console.log("if i am true i can print as well")
}
else if (100 > 200) {
    console.log("if the ifs before me are true i don't print even if i am true")
}
else {
    console.log("I only print when everyone else failed to pass their test")
}
// all if and else if statements are false so 93 will run