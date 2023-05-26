/* Construct an algorithm that takes an array of coordinates and returns an optimal taco truck location

Test an algorithm written to solve a problem by running several test cases

Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to the locations of his customers. He also uses an array of [x,y] as coordinates corresponding to the location where he parks his truck. Customers walk from their location to his truck, but Joe wants to minimize the total distance from his truck to his customers, so he's looking for a better place to park. Feature request: given a customer coordinate array, return an optimal taco truck location.

Here's what we know: City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe checks the array before deciding where to park. Given a customer coordinate array, return an optimal taco truck location. */

let truck01 = []
let cust01 = [1,2]
let cust03 = [0,0]
let cust02 = [3,0]
// want to know how many block are in city 
// size of the blocks 4x4
// distance == [x,y] or x + y
// if distance > 3 move truck
function add(arr01, arr02) {
    let result01 = arr01[0] + arr02[0]
    let result02 = arr01[1] + arr02[1]
    result01 = result01 / 2
    result02 = result02/2
    let final = [result01, result02]
    return final
}
console.log(add(cust01, cust02))

function test(t,c) {
    let start = 0
    let avg = 0

}