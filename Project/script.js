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

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

//Rolling dice funcionallity

btnRoll.addEventListener("click", () => {
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
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
  }
});
