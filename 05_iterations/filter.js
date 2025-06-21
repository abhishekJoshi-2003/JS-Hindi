// const myLanguages = ["JavaScript","C++","C","Python","Java"];
// const values = myLanguages.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);

// Filter Function
// Filter loop also need a callback function
// Filter would return the values based on some condition and these values can be stored in a aseperate array
const myNums = [1,2,3,4,5,6,7,8,9,10];

// Implicit Return
// const newNum = myNums.filter( (num) => num > 4);
// console.log(newNum);

// Explicit Return
// const newNum = myNums.filter( (num) => {
//        return num > 4
// });
// console.log(newNum);

// Same with forEach
// const newNum = [];
// myNums.forEach( (num) => {
//     if(num > 4) newNum.push(num);
// })
// console.log(newNum);

// New Example
const userBooks = [
    {
        book: "Book One",genre: "fiction",publish: 1989,edition: 2004
    },
    {
        book: "Book Two",genre: "non-fiction",publish: 1990,edition: 2005
    },
    {
        book: "Book Three",genre: "science",publish: 1991,edition: 2006
    },
    {
        book: "Book Four",genre: "story",publish: 1992,edition: 2007
    },
    {
        book: "Book Five",genre: "drama",publish: 1993,edition: 2006
    },
    {
        book: "Book Six",genre: "novel",publish: 1994,edition: 2008
    },
    {
        book: "Book Seven",genre: "mystry",publish: 1995,edition: 2004
    },
    {
        book: "Book Eight",genre: "crime",publish: 1996,edition: 2005
    },
    {
        book: "Book Nine",genre: "lieterature",publish: 1997,edition: 2006
    },
    {
        book: "Book Ten",genre: "poem",publish: 1998,edition: 2007
    },
    {
        book: "Book Eleven",genre: "grammer",publish: 1999,edition: 2008
    }
]

const myBooks = userBooks.filter( (bk) => bk.edition > 2007); // We can have multiple conditions connected by AND or OR Operator in return statement
console.log(myBooks);