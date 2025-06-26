// document.getElementById('clock').addEventListener('click', (e) => {
//        e.preventDefault();
//        const clock = document.getElementById('clock');
//        const date = new Date().toLocaleString().split(",")[1];
//        clock.innerHTML = date;
// })

const clock = document.getElementById('clock');

setInterval(() => {
     const date = new Date();
     clock.innerHTML = date.toLocaleTimeString();
},1000); // SetInterval make it happen to run every 1000 ms