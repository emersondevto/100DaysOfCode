console.log("Github Finder");
// Search input

const searchUser = document.getElementById("searchUser");
const gitHub = new GitHub();

// search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // make http call
    gitHub.getUser(userText).then(data => {
      if (data.status === 200) {
        // Show el perfil
        console.log("Profile");
      } else {
        // show alert
        console.log("El usuario no existe");
      }
    });
  } else {
    // clear the profile
  }
});
