// String can be represented using single quote('') as well as using douoble quote(" ")
let name = "Joshi"
let gameCount = 50

// Old Way of Concatanating the strings is this,But this is old fashioned and we would not be using it
console.log(name + " has a gameCount of " + gameCount);

// The new way of concatanation is known as String Interpolation
console.log(`${name} has a gameCount of ${gameCount}`);

// Other way of declaring the string is
const gameName = new String('Abhishek')

// console.log(gameName[0]); // Accessing specific index of String
// console.log(gameName.__proto__) // It will give Prototype of the string
// console.log(gameName.length) // It will give the length of the String
// console.log(gameName.toUpperCase()); // It will give complete string in Upper Case

// console.log(gameName.charAt(2)); // It tells which character is present at specific index
// console.log(gameName.indexOf('h')); // It tells the position of a specific character

let var1 = gameName.substring(0, 4); // It will give substring from index 0 to index 4 excluding index 4 and the index should not be negative
// console.log(var1);

let var2 = gameName.slice(-6,6); // It will slice the string with starting index to ending index excluding ending index and negative index can be used
// console.log(var2);

// Whenever we trim a string using trim function then it would remove all the white spaces from the leftmost as well as rightmost side of the string
let toTrim = "      Joshi      "
// console.log(toTrim);
// console.log(toTrim.trim());
// console.log(toTrim.trimStart()); // Trim at start
// console.log(toTrim.trimEnd()); // Trim at end

// To replace some part of string with some other part we use replace function
let url = "http://Joshi.com/Joshi%20Coder"
// console.log(url.replace('%20','_'));

// To find a string into a string
// console.log(url.includes('Abhishek'));

// We can split a string into array object on some basis
let st = "My Name is Abhishek Joshi"
console.log(st.split(' ')); // It will split the string on the base of white spaces