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

function loginMessage (username){
    if(!username)
    {
        console.log("Enter a UserName");
        return 
        
    }
    return `${username} just logged in`
}

// console.log(loginMessage("Joshi")); // Joshi just logged in
console.log(loginMessage()); // If we do not paas any parameter then the place of parameter variable in function would be treated as Undefined

