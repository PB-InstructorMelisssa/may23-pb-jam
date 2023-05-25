console.log("js connected")
var sum = 0

function add02(a,b) {
    sum = a + b
    // sum  = sum + add02()
    return sum
}
console.log(add02(1,2))

document.getElementById('add').append(sum)
// hey html doc. find the tag with a id of "add".add to it(the value of sum)