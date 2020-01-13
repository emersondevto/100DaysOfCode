// console.log("Cliente side javascript is loaded");

// fetch("http://puzzle.mead.io/puzzle").then(response => {
//   response.json().then(data => {
//     console.log(data);
//   });
// });

const weather = document.querySelector("p");
const searchLocation = document.querySelector("input");
const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");

document.querySelector("form").addEventListener("submit", e => {
  fetch(`/weather?address=${searchLocation.value}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        msg1.textContent = data.error;
        msg2.textContent = "";
        return console.log("error: ", data.error);
      }
      msg1.textContent = data.location;
      msg2.textContent = data.msg;
    });
  });
  e.preventDefault();
});
