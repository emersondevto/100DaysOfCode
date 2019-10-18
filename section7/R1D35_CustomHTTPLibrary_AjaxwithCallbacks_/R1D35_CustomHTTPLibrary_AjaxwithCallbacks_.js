const easyHttp = new easyHTTP();

// Get posts
// easyHttp.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get a single post
// easyHttp.get("https://jsonplaceholder.typicode.com/posts/1", function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// create data

const data = {
  title: "Custom Post",
  body: 'this is a custom post'
};

// Post request
// easyHttp.post("https://jsonplaceholder.typicode.com/posts",data, function(err, post) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(post)    
//   }
// })

// update post
// easyHttp.put("https://jsonplaceholder.typicode.com/posts/1",data,function (err, post) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(post)    
//   }
// })


// detelete post
easyHttp.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});