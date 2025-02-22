'use strict';
let score;
let highScore;
let number;
const createRandom = function () {
    number = Math.trunc(Math.random() * 20 + 1);
}
//type1 function

const initializeScore = () => {
    score = 20;
}
//type2 function

function setHighScore() {
    highScore = 0;
}
//type3 function

const setMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const game = function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        setMessage('Enter a Number!');
    }
    else if (guess < 1 || guess > 20) {
        setMessage('Enter a number between 1 and 20');
    }
    else {
        if (guess == number) {
            setMessage("Correct guess");
            highScore = Math.max(highScore, score);
            document.querySelector('.highscore').textContent = highScore;
            document.querySelector('.number').textContent = number;
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '25rem';
        }
        else {
            if (score > 0) {
                document.querySelector('.message').textContent = guess > number ? "Number is to high!" : "Number is to low!";
                score--;
            }
            else {
                setMessage("You Lost the game!!!😭");
            }
            document.querySelector('.score').textContent = score;
        }
    }
}

const playAgain = function () {
    score = 20;
    setMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = '20';
    createRandom();
}

createRandom();
initializeScore();
setHighScore();
document.querySelector('.check').addEventListener('click', game);
document.querySelector('.again').addEventListener('click', playAgain);