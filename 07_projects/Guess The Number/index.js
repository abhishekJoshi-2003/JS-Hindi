const input = document.querySelector('.inputEle');
const btn = document.querySelector('.btn');
const pre_guess = document.querySelector('#pre-guess');
const rem_guess = document.querySelector('#rem-guess');
const msg = document.querySelector('#msg');
const closure = document.querySelector('#closure');
let guesses = [];
let noOfGuess = 10;
let toBeGuessed = Math.round(Math.random() * 100 + 1);
let isGameOn = false;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const val = Number(input.value);

    msg.style.display = "none";
    if (noOfGuess && !isNaN(val) && val >= 1 && val <= 100) {
        if (val === toBeGuessed) {
            msg.style.display = "flex";
            msg.innerHTML = "Congratulations! Your guess is right."
            setTimeout(() => {
                input.setAttribute('disabled', '');
                btn.setAttribute('disabled', '');
                guesses = [];
                noOfGuess = 10;
                isGameOn = false;
                input.value = '';
                pre_guess.innerHTML = `Previous Guesses: ${guesses}`;
                rem_guess.innerHTML = `Guesses remaining: ${noOfGuess}`
                closure.innerHTML = "Start Game";
            }, 2000);
        }
        else {
            msg.style.display = "flex";
            msg.innerHTML = "Wrong guess!!";
        }
        guesses.push(val);
        pre_guess.innerHTML = `Previous Guesses: ${guesses}`;
        noOfGuess--;
        rem_guess.innerHTML = `Guesses remaining: ${noOfGuess}`
        if (!noOfGuess) {
            msg.innerHTML = `You are out of guesses<br> The Correct guess was ${toBeGuessed}`;
            setTimeout(() => {
                input.setAttribute('disabled', '');
                btn.setAttribute('disabled', '');
                guesses = [];
                noOfGuess = 10;
                isGameOn = false;
                input.value = '';
                msg.innerHTML = "";
                pre_guess.innerHTML = `Previous Guesses: ${guesses}`;
                rem_guess.innerHTML = `Guesses remaining: ${noOfGuess}`
                closure.innerHTML = "Start Game";
            }, 2000);
        }
    }
    else {
        if (noOfGuess) {
            msg.style.display = "flex";
            msg.innerHTML = "Enter Valid Number";
        }
        else {
            msg.style.display = "flex";
            msg.innerHTML = `You are out of guesses<br> The Correct guess was ${toBeGuessed}`;
        }
    }
});

closure.addEventListener('click', (e) => {
    e.preventDefault();
    if (isGameOn) {
        input.setAttribute('disabled', '');
        btn.setAttribute('disabled', '');
        guesses = [];
        noOfGuess = 10;
        isGameOn = false;
        input.value = '';
        pre_guess.innerHTML = `Previous Guesses: ${guesses}`;
        rem_guess.innerHTML = `Guesses remaining: ${noOfGuess}`
        closure.innerHTML = "Start Game";
    }
    else {
        input.removeAttribute('disabled');
        btn.removeAttribute('disabled');
        toBeGuessed = Math.round(Math.random() * 100 + 1);
        isGameOn = true;
        closure.innerHTML = "End Game";
    }
})