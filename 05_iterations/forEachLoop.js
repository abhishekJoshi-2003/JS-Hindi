// forEach loop
// This is an array specific loop which is a property of array
// It is a high level loop which takes a callback function as a parameter

const myLanguages = ["JavaScript","C++","C","Python","Java"];

// array_name.forEach(callback function);

// First : using function keyword
// myLanguages.forEach( function (val)  // Here val represents the element of the array you can give it any name no issues
// {
//         console.log(val);
// });

// Second : using arrow function
myLanguages.forEach( (val) =>  // Here val represents the element of the array you can give it any name no issues
{
        // console.log(val);
});

// Third : passing a function

function helper(val)  // Here val represents the element of the array you can give it any name no issues
{
        // console.log(val);
}

myLanguages.forEach(helper);

// Forth : it can have element , index and array itself as parameter for callback function
myLanguages.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})

const myLang = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "C++",
        languageFile: "cpp"
    }
];

myLang.forEach( (item) => {
    console.log(item.languageName);
})