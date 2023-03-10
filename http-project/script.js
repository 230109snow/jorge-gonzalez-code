const searchBar = document.querySelector("input");
const form = document.querySelector("form");
const nameElement = document.querySelector("#dev-name");
const usernameElement = document.querySelector("#username");
const bioElement = document.querySelector("#bio");
const joinElement = document.querySelector("#join-date");
const imgElement = document.querySelector("img");
const reposElement = document.querySelector("#repos");
const followersElement = document.querySelector("#followers");
const followingElement = document.querySelector("#following");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  getUserData(searchBar.value);
})


function getUserData(username) {

  fetch(`https://api.github.com/users/${username}`)
  .then(res => {
    res.json()
    .then(data => {

      console.log(data);

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
        data.avatar_url,
        data.public_repos,
        data.followers,
        data.following
      );

    })
  })
  
}


function updateUserInfo(name, username, bio, joinDate, avatarUrl, repos, followers, following) {
  nameElement.innerText = name;
  usernameElement.innerText = `@${username}`;
  bio === null ? bioElement.innerText = "This user has no bio.": bioElement.innerText = bio;
  joinElement.innerText = `Joined ${joinDate.month}/${joinDate.day}/${joinDate.year}`;
  imgElement.src = avatarUrl;
  reposElement.innerText = `repos ${repos}`;
  followersElement.innerText = `${followers} followers`;
  followingElement.innerText = `following ${following}`;
}