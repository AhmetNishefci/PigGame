"use strict";

// Selecting elements
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let playing = true;

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

//Rolling dice funcionallity

btnRoll.addEventListener("click", () => {
  if (playing) {
    //Generating a random dice roll
    const random = Math.trunc(Math.random() * 6) + 1;
    //Display dice
    dice.classList.remove("hidden");
    dice.src = `dice-${random}.png`;
    //Check for rolled 1
    if (random !== 1) {
      //Add dice to current score
      currentScore += random;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
  }

  if (score[activePlayer] >= 20) {
    playing = false;
    dice.classList.add("hidden");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document.querySelector(`#score--${activePlayer}`).textContent =
      "🎉You Won!";
  } else {
    switchPlayer();
  }
});
