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

//// Asyncronous way using promise

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      posts.push(post);
      // mimic an error
      const error = false;
      if (error) {
        reject("This is a mimic error");
      } else {
        resolve();
      }
    }, 2000);
  });
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

function printError(error) {
  console.log(error);
}

createPost({
  title: "post 3",
  body: "This is Post 3"
})
  .then(getPost)
  .catch(printError);
