const input = document.querySelector('.inputEle');
const btn = document.querySelector('.btn');
const pre_guess = document.querySelector('#pre-guess');
const rem_guess = document.querySelector('#rem-guess');
const msg = document.querySelector('#msg');
let guesses = [];
let noOfGuess = 10;
let toBeGuessed = Math.round(Math.random() * 100 + 1);
btn.addEventListener('click', () => {
    const val = Number(input.value);

    msg.style.display = "none";
    if (noOfGuess && !isNaN(val) && val >= 1 && val <= 100) {
        if (val === toBeGuessed) {
            msg.style.display = "flex";
            msg.innerHTML = "Congratulations! Your guess is right."
            setTimeout(() => {
                location.reload();
            }, 5000);
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