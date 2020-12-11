'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const messageContent = (message) => document.querySelector('.message').textContent = message
const scoreContent = (score) => document.querySelector('.score').textContent = score

// Not the right number actions
function notRightNumber(guess) {
  if (score > 1) {
    messageContent(guess > secretNumber ? '📈 Too High...' : '📉 Too Low...')
          score--;
    scoreContent(score);
  }
}

// Right number actions
function correctNumber() {
  messageContent('🎉 Correct Number!');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore
  }
}

// "Again" button actions
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

// Event listener for "check" button
document.querySelector('.check').addEventListener('click', () => {
  const guess = parseInt(document.querySelector('.guess').value);
  if (!guess) {
    messageContent('⛔ No number entered.')
  } else if (guess !== secretNumber) {
    notRightNumber(guess)
  } else if (guess === secretNumber) {
    correctNumber()
  } else {
    messageContent('🔥 You lost the game');
    document.querySelector('body').style.backgroundColor = 'red';
    scoreContent(0);
  }
});

// Event listener for "again" button
document.querySelector('.again').addEventListener('click', () => {
  reset();
});
