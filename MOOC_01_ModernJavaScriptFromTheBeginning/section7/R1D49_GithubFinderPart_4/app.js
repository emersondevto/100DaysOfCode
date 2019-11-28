console.log("Github Finder");
// Search input

const searchUser = document.getElementById("searchUser");
const gitHub = new GitHub();
// Init UI
const ui = new UI();

// search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // make http call
    gitHub.getUser(userText).then(data => {
      if (data.status === 200) {
        // Show el perfil
        ui.showProfile(data.profile);
      } else {
        // show alert
        ui.showAlert("User not found", "alert alert-danger");
      }
    });
  } else {
    // clear the profile
    ui.clearProfile();
  }
});
