// Map method
// Filter was returning the element only if it satisfied some condition but the map method can perform some operations on the elemnt of array and return the updated values of operation 
// It also take a callback function

const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.map( (num) => num + 10);
// console.log(newNums);

// Method Chaining
// In method chaining when we add another method then rather than assignment the result of first method is paased as parameter to next method
// Any number and type of methods can be the part of this chain

const newNums = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 50);
console.log(newNums);