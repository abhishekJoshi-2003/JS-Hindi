// This Keyword -> This Keyword is basically used to refer to the current context or current situation of any entity such as some object
const user = {
    userName: "Joshi",
    price: 999,
    welcomeMessage: function(){
         console.log(`${this.userName} , Welcome to my Environment`); // this.userName shows current value of userName
         console.log(this); // It will log complete current object
    }
}

// user.welcomeMessage();
// user.userName = "Nandan";
// user.welcomeMessage();
// console.log(this); // As there is no context it would show empty object but if it would be any browser environment it would be a Window Object

function chai(){
    let userName = "Me";
    // console.log(this.userName); // It will show Undefined as it is intended for objects not for functions
    //  console.log(this); // It would show a number of things replated to functions
}
// chai();

const toast = function(){
    let userName = "Me";
    // console.log(this.userName); // It will show Undefined as it is intended for objects not for functions
    //  console.log(this); // It would show a number of things related to function
}
// toast();

const biscuit = () => { // This is function declaration using Arrow Operator
    let userName = "Me";
    console.log(this); // It will show an empty object;
}
// biscuit();

// Other Ways to use Arrow Function 
// 1) Basic Way
// const addNum = (num1,num2) => {
//     return num1 + num2;
// }

// 2) Implicit return
// const addNum = (num1,num2) => num1 + num2 // It will return their sum we do not need to make block or return keyword

// 3) Implicit return
// const addNum = (num1,num2) => (num1+num2); // It will return their sum we do not need to make block or return keyword

const addNum = (num1,num2) => ({username: "Joshi"});
console.log(addNum(3,4));