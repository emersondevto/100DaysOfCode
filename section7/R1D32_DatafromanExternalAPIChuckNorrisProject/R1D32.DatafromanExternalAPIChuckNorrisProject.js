console.log("Data from an External API - Chuck Norris Project");

function getJokes(e) {
  const number = parseInt(document.querySelector('input[type="number"]').value);

  console.log(number);

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    let jokes;
    if (this.status === 200) {
      jokes = JSON.parse(this.responseText);
      let output = "";
      if (jokes.type === "success") {
        jokes.value.forEach(function(joke) {
          output += `
          <li>${joke.joke}</>
          `;
        });
      } else {
        output += `<li>Something whet wrong</li>`;
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}

document.querySelector(".get-jokes").addEventListener("click", getJokes);
