/****************************************CONVERSION****************************************************/

let score = "33"
let score2 = "33abc"

// console.log(typeof(score));

let secondVar = Number(score); // It will Convert Score to Number DataType
// console.log(typeof secondVar);

let thirdVar = Number(score2);
// console.log(typeof thirdVar);
// console.log(thirdVar); // It will print NaN which means not a number

// CONVERSION TO A NUMBER
//If we convert string to a number which can not be converted to a number then it will give NaN
//If we convert a null to a number then it will give 0
//If we convert undefined to a number it will give NaN
//If we convert a boolean to number then true->1 false->0

let var1 = 1
let var2 = Boolean(var1);
// console.log(var2);

let var3 = ""
let var4 = Boolean(var3);
// console.log(var4);

let var5 = "Joshi"
let var6 = Boolean(var5);
// console.log(var6);


// CONVERSION TO A BOOLEAN
// Any Number -> true , 0 -> false
// "" -> false , "Joshi" -> true

let a = 33
let stringNum = String(a);
// console.log(stringNum);
// console.log(typeof stringNum);


/************************************************OPERATIONS**********************************************/

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2); // Addition
// console.log(2-2); // Subtraction
// console.log(2*2); // Multiplication
// console.log(2**3); // Power
// console.log(2/2); // Division
// console.log(2%2); // Remainder

let str1 = "Hello "
let str2 = "World"
let str3 = str1 + str2
// console.log(str3);

// console.log(1 + "2"); // 12
// console.log("1" + 2); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
//if string is before then all after it would be string additions
//if string is at end then all the before operations would be number addition

// console.log(+true); // 1
// console.log(+""); // 0

let gameScore = 100
//gameScore++; // Post Increment
++gameScore; // Pre Increment
console.log(gameScore);
