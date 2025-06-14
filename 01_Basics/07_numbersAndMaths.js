// Traditional way of defining a number
const num1 = 100
// console.log(num1); // 100

// Object way of making Number
const num2 = new Number(100)
// console.log(num2); // [Number: 100] as it is clearly defined that it is a number

// We can convert the number into string and then apply the string operations on it
// console.log(num2.toString().length);

// We can make the number be displayed with a fixed number of digits after the decimal point
// console.log(num2.toFixed(2)); // Fixed to two digits after decimal

// We can give precision based on the number of digits from left
const num3 = 12.876
const num4 = 112.8859
const num5 = 1345.9588
// console.log(num3.toPrecision(3)); // 12.9 -> first three digits precision
// console.log(num4.toPrecision(3)); // 113 -> first three digits precision
// console.log(num5.toPrecision(3)); // 1.35e+3 -> first three digits precision

const num6 = 1000000
// console.log(num6.toLocaleString()); // It will add commas into number based on US Standards
// console.log(num6.toLocaleString('en-IN')); // It will add commas into number based on Indian Standards

// Some values
// console.log(Number.EPSILON); // It will give value of Epsilon
// console.log(Number.MAX_VALUE); // It will give max Value of Number
// console.log(Number.MIN_VALUE); // It will give min Value of Number
// console.log(Number.MAX_SAFE_INTEGER); // It will give max safe Value of Number
// console.log(Number.MIN_SAFE_INTEGER); // It will give min safe Value of Number


/********************************************MATHS******************************************************/
// The Math is a library of Javascript which we can use for some operations
// console.log(Math); // It is Object
// console.log(Math.E); // Value of E
// console.log(Math.LN10); // Value of LN10
// console.log(Math.LN2); // Value of LN2
// console.log(Math.LOG2E); // Value of LOG2E
// console.log(Math.PI); // // Value of PI

// console.log(Math.abs(-10)); // It will give absolute value
// console.log(Math.round(45.6)); // It will give round off value
// console.log(Math.ceil(4.7)); // It will give ceil value
// console.log(Math.floor(4.7)); // It will give floor value
// console.log(Math.sqrt(25)); // It will give square root

// console.log(Math.min(2,6,8,5)); // Gives min value
// console.log(Math.max(2,6,8,5)); // Gives max value

// Random Function

// console.log(Math.random()); // It will give a random value between 0 and 1 
// console.log(Math.floor(Math.random()*10) + 1); // It will give random number form 1 to 10

const max = 20
const min = 10

console.log(Math.floor(Math.random()*(max-min+1)) + min); // It will give Random number from 11 to 20
