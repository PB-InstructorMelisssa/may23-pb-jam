// Strings

const dateTimeString = new Date()
// console.log(dateTimeString)
// console.log(dateTimeString.toString())
// function date() {
//     console.log("will I print")
// }
// date()
var hi = "Hello"
// index  0 1 2 3 4
// length = 5
// console.log(hi[4])

// console.log(`Melissa's console-log: ${dateTimeString}`)

// // 3. console.log the time only
const time01 = dateTimeString.getHours() + ':' + dateTimeString.getMinutes() + ':' + dateTimeString.getSeconds();
// console.log(`ML ln11: ${time01}`)

const date = dateTimeString.toLocaleDateString();
// console.log(`Robert L17: ${date}`)

var a = 1
a = "Melissa"
a = true
// console.log(typeof a)

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}
console.log(`Carlos L40: ${convertTZ(dateTimeString, "America/Los_Angeles")}`)
// // that needs to be a string. sweet, thanks. AWESOME! try it! :D try now? I added Time to the function. That is.... strange.

// // Using the provided HTML file create functions to display things on the page (you can not edit the html document) and have a console.log for each


// // 6. Display date and time
// const dateTime = document.getElementById('dateTime')
// dateTime.innerHTML = dateTimeString
// // 7a. Display time only
// const mtElement = document.getElementById("mt")
// const ctElement = document.getElementById("ct")

// mtElement.innerText = 'MT: ' + mtTime;
// ctElement.innerText = 'CT: ' + ctTime;
// document.getElementById('pt').innerHTML ="PST: " + ptTime;

// // 7b. Include the current time zone in the display
// const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

// console.log(`Robert L70 ${tz}`); // does this work?

// // 8. Display date only
// function theDate() {
//     // console.log("inside the function")
//     var t = new Date()
//     var temp = t.toString()
//     dateOnly = temp.slice(4, 15)
//     console.log("the date:", temp)
//     document.getElementById('date').innerHTML = dateOnly
// }
// theDate()
// // 9. Display time only in each time zone listed

// function est() { // the -4*60*60*100 makes the time go back 4 hours
//     est = new Date(new Date().getTime() + -4*60*60*1000).toUTCString('en-GB')
//     console.log('EST: ', est)
//     adjust = est.slice(-13)
//     cut = adjust.substr(0,10)
//     zone = 'ET'
//     final = cut + zone
//     document.getElementById('et').innerHTML = final
// }
// est()
// // Bonus questions

// // 1. If there are differences in how the html displays and its corresponding console.log prints why?
// // 2. Are there other ways we can change what is displayed?

// // Arrays


// // 1. Max, Min, Average Given an array, print the max, min and average values for that array.

// // 2. Given an array that could contain indexes of arrays, determine the amount of numbers in all indexes. Example: lengthNested([4,[],8,[9,6,3],7]) returns 6. Do not consider there being a third level of nesting (something such as [11,[[6]]]).

// // 3. Same as above, but do not count empty indexes. [6, 4, , 8] should return 3, not 4.