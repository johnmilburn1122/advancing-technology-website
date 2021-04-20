"use strict";

const modal = document.querySelector(".modal");

const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".open-modal");

const openModal = function () {
  modal.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const guesses = document.querySelector(".guesses");
const guessField = document.querySelector(".guessField");
const resetbutton = document.querySelector(".buttonReset");

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (userGuess === 38776) {
    alert("Congratulations - Your a Winner");
    setGameOver();
  } else if (guessCount === 5) {
    alert("Sorry you have not won");
    setGameOver();
  } else {
    alert("Wrong number! Try Again");
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  resetButton = document.createElement("buttonReset");
  resetButton.classList.remove("hidden");
  alert("Start new game");
  document.body.append(resetButton);
  resetButton.addEventListener("click", location.reload());
}


