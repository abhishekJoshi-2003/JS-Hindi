// Reduce Fuction
// Reduce method is used mostly to calculate some entity by performing some operations on array elements
// It completely returns some value not an array
const myNums = [1,2,3,4,5,6,7,8,9,10];
// Using Function keyword
// const myTotal = myNums.reduce( function(acc,currval){ // acc is the value which is initially the calculated value
//       console.log(`Accumulator: ${acc} and Current Value: ${currval}`);
//       return acc + currval
// },0); // here after , we give the initial value to accumuator

// Using Arrow Function
const myTotal = myNums.reduce( (acc,currval) => acc+currval,0);
console.log(myTotal);

// Example with Object
const myCart = [
    {
         courseName: "JS Course",
         price: 2999
    },
    {
         courseName: "Python Course",
         price: 999
    },
    {
         courseName: "C++ Course",
         price: 299
    },
    {
         courseName: "Data Science Course",
         price: 5999
    },
]

const cartTotal = myCart.reduce( (total,cartItem) => total+cartItem.price,0);
console.log(cartTotal);