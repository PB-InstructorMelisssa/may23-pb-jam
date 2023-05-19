// Example
function add(a,b) {
    var sum = a + b
    console.log("Sum = ", sum)
}
// add(3, 4)
// Line 2 = A Function called add taking 2 parameters called a and b
// Line 3 = Starting instructions - creating a var called sum and setting it equal to the sum of a and b
// Line 4 = Printing to the console the value of sum with the comment of Sum = before it
// Line 5 = Indicates end of instructions and in this case the function a well
// Line 6 = Calling or instantiating the function called add and providing the values for the variables needed for the function of 3 for a and 4 for b

function whatIf(a,b) {
    var sum = a + b
    if(a == 24) {
        console.log("A is equal to 24")
    }
    if(b > 10) {
        console.log("A is larger than 10")
    }
    if(sum >= 24) {
        console.log("the sum of a and b is larger than 24")
    } else {
        console.log("I have no idea")
    }
}
whatIf(24, 12)






// Bonus

function adding() {
    for(var i = 0; i < 10; i++) {
        if(i == 5) {
            console.log("i is now 5")
        }
        console.log("The value of I is: ", i)
    }
}
// adding()