// const studentNames = [];
var studentNames = ['Dan', 'Maria', 'Sara', 'Raj'];
       // Index [n]   [0]  , [1]    , [2]   , [3]
console.log(studentNames);  // ["Dan", "Maria", "Sara", "Raj"]
// console.log(studentNames.length);  // 4
// console.log(studentNames[2]);  // "Sara"
// console.log(studentNames[studentNames.length - 3]);  // "Maria"
studentNames.push('Ryan');    // Add an item to the end
console.log(studentNames);
studentNames.pop();           // Remove an item from the end
console.log(studentNames);
studentNames.unshift('Ryan'); // Add an item to the beginning
console.log(studentNames);
studentNames.shift();         // Remove an item from the beginning
console.log(studentNames);
studentNames.splice(2,1,'Mark','Lucy');     // Remove items at the specified index, and optionally add more items.
console.log(studentNames);

var test = "Hello there class time to play"
var result = test.substring(17);
console.log(result)

var arr01 = [9, -1, 6, 8, -12]
var x = arr01[0]
var final = [] //[-1, 9, ]
final.push(x)
for(var i = 1; i < arr01.length; i++) {
  console.log("I =", i, "value of i =", arr01[i])
    if(x > arr01[i]) {
       final.unshift(arr01[i])
       x = arr01[i] 
    } else {
        final.push(arr01[i])
        x = arr01[i]
    }
}