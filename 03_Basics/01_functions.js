// The Basic Syntax to make the function is as under
// Way to define Function
function sayMyName (){
    console.log("J")
    console.log("O") 
    console.log("S")
    console.log("H")
    console.log("I")
}

// sayMyName -> Reference to Function
// sayMyName() // Execution Of Funtion

// function addTwoNumbers (number1,number2){
//      console.log(number1+number2);
// }

// addTwoNumbers() // NaN
// addTwoNumbers(3,4) // 7
// addTwoNumbers(3,"4") // 34
// addTwoNumbers(3,"a") // 3a
// addTwoNumbers(3,null) // 3

function addTwoNumbers (number1,number2){
    // const result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,4)
// console.log(result)

function loginMessage (username = "Sam"){ // Given a default parameter
    if(!username)
    {
        console.log("Enter a UserName");
        return 
        
    }
    return `${username} just logged in`
}

// console.log(loginMessage("Joshi")); // Joshi just logged in
console.log(loginMessage()); // If we do not paas any parameter then the place of parameter variable in function would be treated as Undefined


function addToCart(...num1) // Rest Operator which says that num1 denotes a number of values which the quantity is unkonwn
{
    return num1; // It would return in form of arrays
}

function addCart(num1,num2,...num)
{
    return num;// It would return all numbers other than num1 and num2
}

// console.log(addToCart(1,2,3,4)); // [1,2,3,4]
// console.log(addCart(1,2,3,4)); // [3,4] 

const User = {
    username: "Balak",
    price: 99
}

// When passing objects in function and accessing its elements we need to check for type safety
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(User);
handleObject({
    username: "Gandhi",
    price: -1
});

const myArr = [100,200,300,400];
function returnSecond(anyArr){
    return anyArr[1];
}
console.log(returnSecond(myArr));