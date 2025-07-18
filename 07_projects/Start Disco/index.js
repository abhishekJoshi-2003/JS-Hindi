// Way 1
// function generateRandom(){
//       const num = Math.round(Math.random()* 0xFFFFFF);
//       const hex = num.toString(16).padStart(6, '0');
//       console.log(hex);
//       document.querySelector('body').style.backgroundColor = `#${hex}`;
// }

// Way 2
function generateRandom() {
    const num = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += num[Math.floor(Math.random() * 16)];
    }
    document.querySelector('body').style.backgroundColor = hex;
}

let interval;
document.querySelector('.start').addEventListener('click', () => {
    if (!interval)
        interval = setInterval(generateRandom, 1000);
});
document.querySelector('.end').addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    document.querySelector('body').style.backgroundColor = "#212121";
});