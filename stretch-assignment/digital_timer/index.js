const startButton = document.createElement('button');

startButton.textContent = 'Start Timer';

document.querySelector('.button-holder').appendChild(startButton);

let time = 0;

const maxTime = 10000;

const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const digits = document.querySelectorAll('.digits')


startButton.addEventListener('click', event => {
    digits.forEach(item => item.style.color = null);
    time = 0;
    startButton.disabled = true;
    const timerInterval = setInterval(() => {
        time += 10;
        console.log(time);
        msTens.textContent = (time / 10) % 10;
        msHundreds.textContent = Math.floor(time / 100) % 10;
        secondOnes.textContent = Math.floor(time / 1000) % 10;
        secondTens.textContent = Math.floor(time / 10000);

        if (time >= maxTime){
            clearInterval(timerInterval);
            digits.forEach(item => {
                item.style.color = 'red';
            })
            startButton.disabled = false;
        }
    }, 10);
})