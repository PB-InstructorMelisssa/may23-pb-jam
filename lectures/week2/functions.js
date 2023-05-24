// #1 Not reusable

function add01() {
    var sum = 1 + 2
    return sum  // does not print anything to the console but typically prints to web page
}
console.log(add01()) // calling a function like this allows us to visually see the return statement
add01()

// #2 DRY = Does not repeat it's self = aka reusable
function add02(a,b) {
    var sum = a + b
    sum  = sum + add01()
    return sum
}
console.log(add02(1,2))