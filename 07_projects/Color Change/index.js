const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (item) => {
    console.log(item);
    item.addEventListener('click', (e) => { // The event listener is added to listen to the click event
            console.log(e); // it will lig the complete evebt
            console.log(e.target); // It will give the area from which the event was trigered
            body.style.backgroundColor = item.id;
            if(item.id === 'white')
            {
                body.style.color = '#212121';
            }
            else
            {
                body.style.color = '#fff';
            }
    });
})