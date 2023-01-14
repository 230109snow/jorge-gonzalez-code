const searchBar = document.querySelector("input");
const form = document.querySelector("form");
const nameElement = document.querySelector("#dev-name");
const usernameElement = document.querySelector("#username");
const bioElement = document.querySelector("#bio");
const joinElement = document.querySelector("#join-date");
const imgElement = document.querySelector("img");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  getUserData(searchBar.value);
})


function getUserData(username) {

  fetch(`https://api.github.com/users/${username}`)
  .then(res => {
    res.json()
    .then(data => {

      const joinDate = {
        year: data.created_at.substring(0, 4),
        month: data.created_at.substring(5, 7),
        day: data.created_at.substring(8, 10)
      }

      updateUserInfo(
        data.name,
        data.login,
        data.bio,
        joinDate,
        data.avatar_url
      );

    })
  })
  
}


function updateUserInfo(name, username, bio, joinDate, src) {
  nameElement.innerText = name;
  usernameElement.innerText = username;
  bioElement.innerText = bio;
  joinElement.innerText = `Joined ${joinDate.month}/${joinDate.day}/${joinDate.year}`;
  imgElement.src = src;
}