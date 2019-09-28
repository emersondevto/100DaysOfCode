/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a sertain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct number if loose
- Let player choose to play again
*/

// Math.ceil(Math.random() * 10)
// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

console.log(game, minNum, maxNum, guessBtn, guessInput, message);

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// game over
function gameOver(won, msg) {
  let color = won ? "green" : "red";
  // disable input
  guessInput.disabled = true;
  // change border input
  guessInput.style.borderColor = color;
  // let the user know if thet won
  setMessage(msg, color);
}

// Establece un mensaje al usuario
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function listenForGuess(e) {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // validate input
  if (isNaN(guess) || guess < min || guess > 10) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    // Game Over - Won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft--;
    if (guessesLeft === 0) {
      // Game Over - lost
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong

      // change border input
      guessInput.style.borderColor = "red";

      // Clear the input
      guessInput.value = "";

      // Tell user is the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
}

// Listen for guess
guessBtn.addEventListener("click", listenForGuess);
