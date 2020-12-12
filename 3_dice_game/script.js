"use strict";

// Select elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores;
let currentScoreValue;
let activePlayer;
let playing;

// init the game
const init = () => {
  scores = [0, 0];
  currentScoreValue = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice.classList.add("hidden");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
};

init();

// Switch player function
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScoreValue = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

// Rolling dice functionality
btnRoll.addEventListener("click", () => {
  // Only active if playing
  if (playing) {
    // Generate random number
    const diceValue = Math.floor(Math.random() * 6) + 1;
    // Show dice pic based on value
    dice.classList.remove("hidden");
    dice.src = `dice-${diceValue}.png`;
    // If dice value isn't one add to score, if one then reset and switch players
    if (diceValue !== 1) {
      currentScoreValue += diceValue;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScoreValue;
    } else {
      switchPlayer();
    }
  }
});

// Selecting hold functionality
btnHold.addEventListener("click", () => {
  // Only active if playing
  if (playing) {
    scores[activePlayer] += currentScoreValue;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Once someone wins
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// New Game reset functionalty
btnNew.addEventListener("click", init);

// Modal instructions
const modal = document.querySelector('.modal')
const openButton = document.querySelector('.btn--instructions')
const closeButton = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')


// Close button functionailty
const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

// Open button functionality
const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

// Open modal by clicking button
openButton.addEventListener('click', openModal)


// Close modal with X button OR clicking overlay
closeButton.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

