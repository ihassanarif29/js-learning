let randomNumber = parseInt(Math.random() * 100 + 1);
//console.log(randomNumber);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const previousGuess = document.querySelector(".guesses");
const remaningGusses = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.querySelector("p");
let previousGuesses = [];
let numberOfGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a valid nubmer which is more then one");
  } else if (guess > 100) {
    alert("Please enter a valid number which is less than 100");
  } else {
    previousGuesses.push(guess);
    if (numberOfGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guess it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`You guess a low number`);
  } else if (guess > randomNumber) {
    displayMessage(`You guess a high nubmer`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuess.innerHTML += `${guess}, `;
  numberOfGuesses++;
  remaningGusses.innerHTML = `${11 - numberOfGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses = [];
    numberOfGuesses = 1;
    previousGuess.innerHTML = "";
    remaningGusses.innerHTML = `${11 - numberOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
