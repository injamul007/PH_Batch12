const numberOfCircles = 48;
const numberContainer = document.querySelector(".numberContainer");
const scoreValue = document.querySelector(".scoreValue");
const timerValue = document.querySelector(".timerValue");
const targetValue = document.querySelector(".targetValue");

let timer = 20;

function timerReset() {
  timer = 20;
}

  setInterval(() => {
    if (timer <= 0) {
      numberContainer.innerHTML = `<div class='gameOver'><div>Game Over</div><div>Your Current Score: ${scoreValue.innerText}</div><button class='restart' onclick=restartGame()>Reset Game</button></div>`;
      return;
    }
    timer--;
    timerValue.innerText = timer;
  }, 1000);

function restartGame() {
  timerReset();
  generateTarget();
  scoreValue.innerText = 0;
  displayTheGame();
}

function generateTarget() {
  targetValue.innerText = Math.floor(Math.random() * 10) + 1;
}

function displayTheGame() {
  numberContainer.innerHTML = "";
  for (let i = 1; i <= numberOfCircles; i++) {
    const circleDivElem = document.createElement("div");
    circleDivElem.className = "circle";
    circleDivElem.innerText = Math.floor(Math.random() * 10) + 1;
    numberContainer.append(circleDivElem);
  }
}

displayTheGame();

numberContainer.addEventListener("click", (e) => {
  const targetElem = e.target;
  if (targetElem.className === "circle") {
    let displayNumber = Number(targetElem.innerText);
    let targetNumber = Number(targetValue.innerText);
    if (displayNumber === targetNumber) {
      scoreValue.innerText = Number(scoreValue.innerText) + 10;
    }
    generateTarget();
  }
});
