const posts = [
  {
    title: "post 1",
    body: "This is Post 1"
  },
  {
    title: "post 2",
    body: "This is Post 2"
  }
];

//// Syncronous way

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// function getPost() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach(post => {
//       output += `
//       <li>${post.title}</li>
//       `;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({
//   title: "post 3",
//   body: "This is Post 3"
// });

// getPost();

//// Asyncronous way using callbacks

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach(post => {
      output += `
      <li>${post.title}</li>
      `;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost(
  {
    title: "post 3",
    body: "This is Post 3"
  },
  getPost
);
