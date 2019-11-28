console.log("State Pattern");
const PageState = function() {
  let currrentState = new HomeState(this);

  this.init = function() {
    this.change(new HomeState());
  };

  this.change = function(state) {
    currrentState = state;
  };
};

// Home State
const HomeState = function(page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
  `;
};

const AboutState = function(page) {
  document.querySelector("#heading").textContent = "About Us";
  document.querySelector("#content").innerHTML = ` 
  <p>This is the about page</p>
  `;
};

const ContactState = function(page) {
  document.querySelector("#heading").textContent = "Contact Us";
  document.querySelector("#content").innerHTML = ` 
  <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
  `;
};

// Instantiate pageState

const page = new PageState();

// Init the first state
page.init();

// UI Variables
const home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");

// UI Click events

home.addEventListener("click", () => page.change(new HomeState()));
about.addEventListener("click", () => page.change(new AboutState()));
contact.addEventListener("click", () => page.change(new ContactState()));
