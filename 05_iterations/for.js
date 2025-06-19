// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5)
    {
        // console.log("5 is the best number");
    }
    // console.log(element); 
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i}:`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i}*${j} = ${i*j}`);
    }
}

// For loop for arrays
let myHeroes = ["Ram","Krishna","Hanuman","Ganesha","Shiv"];
for (let index = 0; index < myHeroes.length; index++) {
    const element = myHeroes[index];
    // console.log(`My Hero is ${element}`);
}

// Break and Continue

for (let index = 1; index <= 20; index++) {
    if(index == 5)
    {
        console.log(`5 detected`);
        break; // Stops execution for complete loop
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if(index % 5 == 0)
    {
        console.log(`${index} detected`);
        continue; // Skip further statements of block for the index
    }
    console.log(`Value of i is ${index}`);
}