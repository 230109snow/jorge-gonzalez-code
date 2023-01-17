const input = document.querySelector("input");
const alphabet = document.querySelector("#letters-container");
const wordContainer = document.querySelector("#word-to-guess");
const alphabetArr = [];
let counter = 0;
// const wordToGuess = "compiler";
// const wordToGuess = "integer"
const wordToGuess = "variable";


const wordBank = [];

// Random function to choose word

let livesCounter = wordToGuess.length;

const livesElement = document.querySelector("#lives");

livesElement.innerText = `Lives: ${livesCounter}`;

const arrToCompare = [];

for (let i = 0; i < wordToGuess.length; i++) {
  arrToCompare.push(null);
}

let lettersRemaining = wordToGuess.split("");

// Generate underscores for word to guess
for(let i = 0; i < wordToGuess.length; i++) {

  const span = document.createElement("span");

  span.setAttribute("id", `letter-${i}`);

  span.innerText = "_ ";

  wordContainer.appendChild(span);
}

const spans = document.querySelectorAll("#word-to-guess span");

/*
Generate array from alphabet using String.fromCharCode()

We will begin a counter variable at 65 and increment by 1
On each iteration, we will fetch the ASCII character
using its decimal value

For example, the on first iteration, i will be 65, so
String.fromCharCode(i) will fetch "A", next "B", etc.
This will repeat until we reach "Z", ending the loop
when i is 90.
*/

for (i = 65; i <= 90; i++) {
  alphabetArr.push(String.fromCharCode(i));
  // console.log(`ASCII Decimal Value: ${i} Character: ${String.fromCharCode(i)}`);
}

alphabetArr.forEach(letter => {
  const button = document.createElement("button");
  button.innerText = letter;
  alphabet.appendChild(button);
})

function checkIfExists(letterPressed) {

  if (lettersRemaining.includes(letterPressed)) {

    const index = lettersRemaining.indexOf(letterPressed);

    const blank = document.querySelector(`#letter-${index}`);

    blank.innerText = letterPressed;

    // remove the character guessed correctly
    lettersRemaining.splice(index, 1); 

    // replace with null so the position doesn't change
    lettersRemaining.splice(index, 0, null); 

    counter = counter + 1;

    // If player wins the game
    if (counter == wordToGuess.length) {
      livesCounter = wordToGuess.length;
      counter = 0;
      spans.forEach(letter => {
        letter.innerText = "_ ";
      }) 
      livesElement.innerText = `Lives: ${livesCounter}`
      lettersRemaining = wordToGuess.split("");
      alert("You won!");
    }

  } else {
    livesCounter = livesCounter - 1;

    if (livesCounter === 0) {
      alert("Sorry, you lost!");
      livesCounter = wordToGuess.length;
      counter = 0;
      lettersRemaining = wordToGuess.split("");
      livesElement.innerText = `Lives: ${livesCounter}`
      spans.forEach(letter => {
        letter.innerText="_ ";
      })
    } else {
      livesElement.innerText = `Lives: ${livesCounter}`;
    }

  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", event => {

    const letterPressed = event.target.innerText.toLowerCase();

    checkIfExists(letterPressed);

  })
})
