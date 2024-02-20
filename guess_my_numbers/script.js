"use strict";

let correctNumber = Math.trunc(Math.random() * 20) + 1;
console.log(correctNumber);
let highScore = 0;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number.";
  } else if (guess > correctNumber) {
    if (score < 1) {
      document.querySelector(".message").textContent = "You have lost.";
      document.querySelector("body").style.backgroundColor = "#FF0000";
    } else {
      document.querySelector(".message").textContent =
        "Greater then actual number.";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < correctNumber) {
    if (score < 1) {
      document.querySelector(".message").textContent = "You have lost.";
      document.querySelector("body").style.backgroundColor = "#FF0000";
    } else {
      document.querySelector(".message").textContent =
        "Less then actual number.";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "Correct Number.";
    document.querySelector(".number").textContent = correctNumber;
    score++;
    document.querySelector(".score").textContent = score;
    highScore = Math.max(score, highScore);
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  correctNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
