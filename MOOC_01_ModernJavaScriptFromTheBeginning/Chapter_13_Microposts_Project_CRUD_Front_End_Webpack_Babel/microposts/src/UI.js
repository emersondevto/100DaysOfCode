import { Post } from "./post";

class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.forState = "add";
  }
  changeFormState(state){
    if (state === "edit") {
      this.forState = state
      this.postSubmit.textContent = "Update Post"
      this.postSubmit.className = "post-submit btn btn-warning btn-block"
      
      //Create cancel button
      const cancelButton = document.createElement("button")
      cancelButton.textContent = "Cancel Edit"
      cancelButton.className = "post-cancel btn btn-danger btn-block"
      
      // Get parent
      const cardForm = document.querySelector(".card-form")
      // get element to insert before
      const formEnd = document.querySelector(".form-end")
      // Insert cancel button
      cardForm.insertBefore(cancelButton, formEnd)
    } else {
      this.forState = state
      this.postSubmit.textContent = "Post It"
      this.postSubmit.className = "post-submit btn btn-primary btn-block"
      // Remove the cancel button if it is there
      if(document.querySelector('.post-cancel')){
        document.querySelector('.post-cancel').remove()
      }
      // clear the ID from hidden field
      this.clearIdInput()
      // clear text fields
      this.clearFields()
    }
  }
  
  clearIdInput(){
    this.idInput.value = ""
  }
  
  
  
  fillForm(post){
    this.titleInput.value = post.title;
    this.bodyInput.value = post.body;
    this.idInput.value = post.id
    this.changeFormState("edit")
  }

  showAlert(message, className) {
    this.clearAlert();

    // create div
    const div = document.createElement("div");
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector(".postContainer");
    // Get Posts
    const posts = document.querySelector("#posts");
    // Insert alert div
    container.insertBefore(div, posts);
    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  getDataForm() {
    let title = this.titleInput.value,
      body = this.bodyInput.value;
    return new Post(title, body, this.forState === "add"?true:false);
  }

  showPosts(posts) {
    let output = "";
    posts.forEach(post => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">
              ${post.title}
            </h4>
            <p class="card-text">
              ${post.body}
            </p>
            <a href="#" class="edit card-link" data-id=${post.id}>
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id=${post.id}>
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }
}

export const ui = new UI();
