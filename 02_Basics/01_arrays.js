// Arrays are collection of multiple elements
// Arrays can have elements of Different Data Types
// Arrays in JS are resizable and use 0-based indexing
// When we copy an array it makes a shallow copy of that array

let myArr = [0,1,2,3,4,5]
let myHeroes = ["Ram","Krishna","Hanuman"]
// console.log(myArr[0]);

let myArr2  = new Array(1,2,3,4,5)

// myArr.push(6) // It would insert element at end of array
// myArr.push(7)
// myArr.pop() // It would remove the last element of array

// myArr.unshift(9) // It would add 9 in starting of the array
// myArr.shift() // It would remove first element of the Array

// console.log(myArr.includes(9)); // It simply tells true if the element is in array otherwise false
// console.log(myArr.indexOf(3)); // If element is there it would give index of element otherwise -1

const transArr = myHeroes.join() // It would join myArr into transArr into String format
// console.log(myHeroes);
// console.log(transArr);

let myn1 = myArr.slice(1,3) // It will take myArr from index 1 to index 3(exclusive) and save in myn1 without modifying original array 
console.log(myArr);
console.log(myn1);

let myn2 = myArr.splice(1,3) // It will take myArr from index 1 to index 3(inclusive) and save in myn2 with trimming this part from original array
console.log(myArr);
console.log(myn2);