const input = document.querySelector("input");
const alphabet = document.querySelector("#alphabet");
const wordContainer = document.querySelector("#word-to-guess");
const alphabetArr = [];
let counter = 0;
// const wordToGuess = "compiler";
// const wordToGuess = "integer"
const wordToGuess = "variable";

const arrToCompare = [];

for (let i = 0; i < wordToGuess.length; i++) {
  arrToCompare.push(null);
}

const lettersRemaining = wordToGuess.split("");

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

  if(lettersRemaining === arrToCompare) {
    alert("You got it!");
  }

  if (lettersRemaining.includes(letterPressed)) {

    const index = lettersRemaining.indexOf(letterPressed);

    const blank = document.querySelector(`#letter-${index}`);

    blank.innerText = letterPressed;

    lettersRemaining.splice(index, 1);
    lettersRemaining.splice(index, 0, null);

    counter = counter + 1;

    if (counter == wordToGuess.length) {
      alert("You won!");
    }

  } else {
    console.log(`${letterPressed} is not in the word :(`)
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", event => {

    const letterPressed = event.target.innerText.toLowerCase();

    checkIfExists(letterPressed);

  })
})
