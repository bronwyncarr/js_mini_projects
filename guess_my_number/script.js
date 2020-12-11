'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const messageContent = (message) => document.querySelector('.message').textContent = message
const scoreContent = (score) => document.querySelector('.score').textContent = score
// const messageContent = (message) => document.querySelector('.message').textContent = message

document.querySelector('.check').addEventListener('click', () => {
  const guess = parseInt(document.querySelector('.guess').value);
  if (!guess) {
    messageContent('⛔ No number entered.')
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageContent(guess > secretNumber ? '📈 Too High...' : '📉 Too Low...')
            score--;
      scoreContent(score);
    } else {
      messageContent('🔥 You lost the game');
      document.querySelector('body').style.backgroundColor = 'red';
      scoreContent(0);
    }
  } else if (guess === secretNumber) {
    messageContent('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore
    }
  }
});

function reset() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreContent(score);
  messageContent('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.again').addEventListener('click', () => {
  reset();
});
