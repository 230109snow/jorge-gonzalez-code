const flashcard = document.querySelector("#flashcard");
let flipped = false;

// Set the default state of flashcard
checkStatus();

function checkStatus() {

  if (flipped == false) {
    flashcard.innerText = "What's the difference between the null and undefined primitive data types?";
  }
  
  if (flipped == true) {
    flashcard.innerText = "undefined means a variable has not been declared yet, whereas null means this variable has been declared, but it has no value";
  }

}

flashcard.addEventListener("click", () => {
  // Change to the opposite of whatever "flipped is"
  flipped = !flipped;

  checkStatus();
})

// fetch("https://quizapi.io/api/v1/questions?limit=5&category=javascript", {
//   headers: {
//     "X-Api-Key": null
//   }
// })
// .then(res => res.json())
// .then(data => console.log(data));
