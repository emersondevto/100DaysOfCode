const easyHTTP2 = new EasyHTTP();

// Get posts
easyHTTP2
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Get a single post
easyHTTP2
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then(data => console.log(data))
  .catch(err => console.log(err));

// create data

const userData = {
  name: "Aleja",
  username: "Alejagalesa"
};

// Post request
easyHTTP2
  .post("https://jsonplaceholder.typicode.com/users", userData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

easyHTTP2
  .put("https://jsonplaceholder.typicode.com/users/1", userData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

easyHTTP2
  .delete("https://jsonplaceholder.typicode.com/users/1")
  .then(data => console.log(data))
  .catch(err => console.log(err));

// update post
// easyHttp.put("https://jsonplaceholder.typicode.com/posts/1",data,function (err, post) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// })

// detelete post
// easyHttp.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });
