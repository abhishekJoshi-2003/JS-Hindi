# Projects related to DOM

## Project Link
[Click here](http://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
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
```

## Project 2

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); // THis will prevent all the random events from affecting submission of form

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## Project 3

```javascript
const clock = document.getElementById('clock');

setInterval(() => {
     const date = new Date();
     clock.innerHTML = date.toLocaleTimeString();
},1000); // SetInterval make it happen to run every 1000 ms
```