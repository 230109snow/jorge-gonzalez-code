const searchBar = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  getUserData(searchBar.value);
})


function getUserData(username) {

  fetch(`https://api.github.com/users/${username}`)
  .then(res => {
    res.json()
    .then(data => {
      console.log("Name:", data.name)
      console.log("GitHub username:", data.login);
    })
  })
  
}