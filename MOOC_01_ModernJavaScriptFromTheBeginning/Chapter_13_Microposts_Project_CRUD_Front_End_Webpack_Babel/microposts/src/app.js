import { http } from "./http";
import { ui } from "./UI";

// Get Posts on Dom Loads
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Add Post
function submitPost() {
  // Extraer los datos del DOM Form
  const newPost = ui.getDataForm();

  // Gardar los datos a traves de post
  http
    .post("http://localhost:3000/posts", newPost)
    .then(data => {
      // Mostrar una alerta que el post fue agregado
      ui.showAlert("Post added", "alert alert-success");
      getPosts();
      // Limpiar los valores del form
      ui.clearFields();
    })
    .catch(err => console.error(err));
}

function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}
