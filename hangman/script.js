const input = document.querySelector("input");
const alphabet = document.querySelector("#alphabet");
const wordToGuess = "compiler";

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

const alphabetArr = [];

for (i = 65; i <= 90; i++) {
  alphabetArr.push(String.fromCharCode(i));
  // console.log(`ASCII Decimal Value: ${i} Character: ${String.fromCharCode(i)}`);
}

alphabetArr.forEach(letter => {
  const button = document.createElement("button");
  button.innerText = letter;
  alphabet.appendChild(button);
})


document.querySelector("button").addEventListener("click", (event) => {

  event.preventDefault();

  const value = input.value;

  if (value === wordToGuess) {
    console.log("You got it!");
  } else {
    console.log("Sorry, try again!");
  }

})
