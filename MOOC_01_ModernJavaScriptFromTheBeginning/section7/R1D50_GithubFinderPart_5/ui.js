class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showRepos(repos) {
    const HTMLrepos = document.getElementById("repos");

    let output = "";

    repos.forEach(repo => {
      output += `<div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">
              Stars ${repo.stargazers_count}
            </span>
            <span class="badge badge-secondary">
              Watchers ${repo.watchers_count}
            </span>
            <span class="badge badge-success">
              Forks ${repo.forks_count}
            </span>
          </div>
        </div>
      </div>
      `;
    });

    HTMLrepos.innerHTML = output;
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}"/>
            
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4"> View Profile </a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">
              Public Repo ${user.public_repos}
            </span>
            <span class="badge badge-secondary">
              Public Gists ${user.public_gists}
            </span>
            <span class="badge badge-success">
              Followers ${user.followers}
            </span>
            <span class="badge badge-info">
              Following ${user.following}
            </span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">
                Company: ${user.company}
              </li>
              <li class="list-group-item">
                Website: ${user.blog}
              </li>
              <li class="list-group-item">
                Location: ${user.location}
              </li>
              <li class="list-group-item">
                Member Since: ${user.created_at}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // clear profile display
  clearProfile() {
    this.profile.innerHTML = "";
  }

  // show alert message
  showAlert(message, className) {
    // clear remaining alert
    this.clearAlert();
    //create a div
    const div = document.createElement("div");
    // adding classes
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // get a parent
    const container = document.querySelector(".searchContainer");
    //get search box
    const searchBox = document.querySelector(".search");
    // insert the alert
    container.insertBefore(div, searchBox);
    // Timeout after 3 seconds
    setTimeout(() => {
      div.remove();
    }, 3000);
  }
  // Clear error message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
