let marvelHeroes = ["SpiderMan","Thor","Vision"]
let hinduGods = ["Hanuman","Ram","Krishna"]

// marvelHeroes.push(hinduGods); // It Will push the array hinduGods into marvelHeroes as an element
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// let allHeroes = marvelHeroes.concat(hinduGods); // It will concat or merge the array hinduGods in marvelHeroes
// console.log(allHeroes);

// let allHeroes = [...marvelHeroes,...hinduGods] // Using Spread Operator we can merge two arrays
// console.log(allHeroes);

// let allheroes = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]]]
// let anotherArray = allheroes.flat(Infinity); // It will take infinity depth of the array allHeroes and then will take the elements of depth at depth 0
// console.log(anotherArray);

// console.log(Array.isArray("Joshi")) //  It will tell whether the given value is array or not
// console.log(Array.from("Hitesh")) // It will detect the value and will try to make an array out of it
// console.log(Array.from({name: "Joshi"})); // It will give empty array

let s1 = 1;
let s2 = 2;
let s3 = 3;
console.log(Array.of(s1,s2,s3));