// forin
// for (const key in object) { // here key referes to the key or index of element rather than refering to element itself

// }
// forof loop works for the array , string and object but does not work for map

const ext = {
    js: 'JavaScript',
    cpp: 'C++',
    c: 'C',
    java: 'Java',
    py: 'Python'
}

for (const key in ext) {
    // console.log(`${key} is extension for ${ext[key]}`);
}

const myArr = ["js","cpp","c","py","java"];
for (const key in myArr) {
   console.log(myArr[key]);
}

// Map is not iteratable hence forin would not work on map
