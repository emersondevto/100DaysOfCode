import { http } from "./http";
import { ui } from "./UI";
//##############################################################################
const urlJSONServer = "https://59f89abe.ngrok.io"

// Get Posts on Dom Loads
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Listen for delete post
document.querySelector("#posts").addEventListener("click", deletePost);

// Listen for enable to edit 
document.querySelector('#posts').addEventListener('click', enableEdit)

// Listen for cancel edit 
document.querySelector(".card-form").addEventListener("click", cancelEdit)

// Cancel edit
function cancelEdit(e) {
  if (e.target.classList.contains("post-cancel")) {
    ui.changeFormState("add")
  } else {
    
  }
  e.preventDefault()
}

// Enable Edit State
function enableEdit(e){
  if (e.target.parentElement.className.includes("edit")) {
    const idPost = e.target.parentElement.dataset.id
    let url = `${urlJSONServer}/posts/${idPost}`;
    http
      .get(url)
      .then(data => {
        ui.fillForm(data)
      })
      .catch(err => console.error(err))
  }
  e.preventDefault()
}

// delete post
function deletePost(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    let idPost = e.target.parentElement.attributes["data-id"].value;
    let url = `${urlJSONServer}/posts/${idPost}`;
    http
      .delete(url)
      .then(msg => {
        // console.log(msg);
        // Mostrar una alerta que el post fue elminado
        ui.showAlert("Post deleted", "alert alert-info");        
        getPosts();
      })
      .catch(err => console.error(err));
  }
  e.preventDefault()
}

// Add Post
function submitPost(e) {
  // Extraer los datos del DOM Form
  const newPost = ui.getDataForm();

  // Gardar los datos a traves de post
  if (newPost.valid) {
    if (newPost.isNew) {
         // Create Post
         http
        .post(`${urlJSONServer}/posts`, newPost)
        .then(data => {
          // Mostrar una alerta que el post fue agregado
          ui.showAlert("Post added", "alert alert-success");
          getPosts();
          // Limpiar los valores del form
          ui.clearFields();
        })
        .catch(err => console.error(err));
    } else {
         let id = document.querySelector("#id").value
         // Update the Post
         http
        .put(`${urlJSONServer}/posts/${id}`, newPost)
        .then(data => {
          // Mostrar una alerta que el post fue agregado
          ui.showAlert("Post updated", "alert alert-success");
          ui.changeFormState("add")
          getPosts(); 
          
          // Limpiar los valores del form
          // ui.clearFields();
        })
        .catch(err => console.error(err));   
    }
  }
  else {
    ui.showAlert("Some of the fields has an error", "alert alert-danger");
  }
  e.preventDefault()
}

function getPosts(e) {
  http
    .get(`${urlJSONServer}/posts`)
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
  e.preventDefault()
}
