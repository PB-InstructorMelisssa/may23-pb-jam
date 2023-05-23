// The Problem
// Write a program that goes 1-100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// for loop starting at 1 ending at 100 incrementing by 1
// identify the number are at = i


// function fizzBuzz() {
//     for(var i = 1; i <=20; i++) {
//         if(i % 3 == 0) {
//             console.log("Fizz")
//         }
//         else if(i % 5 == 0) {
//             console.log("Buzz")
//         }
//         else if(i % 3 == 0 && i % 5 == 0) {
//             console.log("FizzBuzz")
//         } else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz()


function fizzBuzz() {
    for(var i = 1; i <=20; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }         
        else if(i % 3 == 0) {
            console.log("Fizz")
        }
        else if(i % 5 == 0) {
            console.log("Buzz")
        }else {
            console.log(i)
        }
    }
}
fizzBuzz()