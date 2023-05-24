const sadDay = () => {
    console.log("The PB&JaM Cruise is almost over")
    sadDay()
}
// sadDay()


// Create a function that can look through an array of any dimension, that is a list that could have any number of lists in it, and will return the sum of all values within.
// Using this five dimensional array should return 80

data = [
    3,
    [1, 2, 3, 4],
    [
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [
            [1, 2, 3],
            [1, 2, 3, 4, [1, 2, 3, 4]],
        ],
        []
    ],
    [3, 4, 5],
    1,
    3,
]
var sum = 0
// for(var i = 0; i < data.length; i++) {
//      sum += data[i]
//      console.log(sum)
// }

// This just concatenates the numbers together doesn't sum them

function funWithRecursion(d) {
    for (var i = 0; i < d.length; i++){
        if(!Array.isArray(d[i])) {
            sum = sum + d[i]
        } else {
            funWithRecursion(d[i])
        }
    }
    return sum
}
console.log(funWithRecursion(data))
// console.log('the final Sum', sum)