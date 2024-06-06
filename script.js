'use strict';

///// SELECTING ELEMENTS /////
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

///// SETTING SCORE TO 0 AND HIDDING THE DICE /////
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

///// SCORES //////
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

///// ROLLING DICE FUNCTIONALITY /////

btnRoll.addEventListener('click', function () {
  const rollDice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${rollDice}.png`;

  if (rollDice !== 1) {
    currentScore += rollDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    ///// SWITCH PLAYERS /////
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

///// HOLD BUTTON FUNCTIONALITY /////


