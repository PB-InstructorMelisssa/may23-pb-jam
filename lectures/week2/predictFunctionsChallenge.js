/* MVP
As a user, I need to know how many pieces of cake I will have left if I divide out my cake (which has 12 pieces) for 5 people to eat.

Feature 1
As the designated cake slicer and distributor at our office birthday parties, I want a function called howMuchLeftOverCake that passes two variables numberOfPieces and numberOfPeople into it and figures out the remaining pieces of cake.

Feature 2
Building off Feature 1, I want a console.log() to display...

"No leftovers for you!" if there aren't any leftovers
"You have some leftovers" if there are 2 pieces of cake or less
"You have leftovers to share" if there are 3 - 5 pieces of cake left over
"Hold another party!" if there are more than 5 pieces of cake left over. */

// 12 / 5 = 2 with 2r

function howMuchLeft(cake, humans) {
    var result = cake % humans
    // console.log(result)
    return result
}
// howMuchLeft(12, 5)

function feature(cake, humans) {
    var condition = howMuchLeft(cake, humans)
    if (condition === 0) {
        console.log("No soup for you")
    }
    else if(condition <= 2) {
        console.log("Left overs")
    }
    else if(condition >= 3 && condition <= 5) {
        console.log("share away")
    }
    else if(condition > 5) {
        console.log("Party Time")
    }
}
// feature(12,5)
// feature(13,5)
feature(20,2)