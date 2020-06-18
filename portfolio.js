// avatar and name

const GITHUB_URL = "https://api.github.com/users/solomiiaivychuk";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const profileName = document.getElementById("my-name");
    profileName.innerText = data.name;
  });



// footer
const tools = ["HTML", "CSS", "and", "JavaScript"];
const text = document.querySelector('.tools').innerText;

document.querySelector('.tools').innerText = text + " " + tools[0] + ", " + tools.slice(1, 4).join(' ');




