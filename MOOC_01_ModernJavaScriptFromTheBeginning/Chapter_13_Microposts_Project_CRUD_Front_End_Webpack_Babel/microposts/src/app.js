import { http } from "./http";
import { ui } from "./UI";

// Get Posts on Dom Loads
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Listen for delete post
document.querySelector("#posts").addEventListener("click", deletePost);

// Listen for edit state
// document.querySelector(#posts)

// delete post
function deletePost(e) {
  if (e.target.parentElement.className.includes("delete")) {
    let idPost = e.target.parentElement.attributes["data-id"].value;
    let url = `http://localhost:3000/posts/${idPost}`;
    http
      .delete(url)
      .then(msg => {
        // console.log(msg);
        getPosts();
      })
      .catch(err => console.error(err));
  }
}

// Add Post
function submitPost(e) {
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

function getPosts(e) {
  http
    .get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}
