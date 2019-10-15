const easyHttp = new easyHTTP();

// Get posts
easyHttp.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
