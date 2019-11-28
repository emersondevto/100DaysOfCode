console.log("R1D40_FetchAPI");

function catchError(error) {
  console.log(error);
}

function printText(text) {
  console.log(text);
  document.getElementById("output").innerHTML = text;
}

function getText(text) {
  console.log(text);
  return text.text();
}

function getJSON(json) {
  console.log(json);
  return json.json();
}

function printResponse(res) {
  console.log(res);
  return res;
}

function fetchDataText(e) {
  fetch("test.txt")
    .then(printResponse)
    .then(getText)
    .then(printText)
    .catch(catchError);
}

function printJson(json) {
  let html = "";
  json.forEach(function(value, index) {
    html += `<ul> 
      <li>
      ${value.title}
      ${value.login}
      </li>
    </ul>`;
  });
  document.getElementById("output").innerHTML = html;
}

function fetchDataJson(e) {
  fetch("posts.json")
    .then(printResponse)
    .then(getJSON)
    .then(printJson)
    .catch(catchError);
}

function fetchDataAPIGET(e) {
  fetch("https://api.github.com/users")
    .then(printResponse)
    .then(getJSON)
    .then(printJson)
    .catch(catchError);
}

document.getElementById("button1").addEventListener("click", fetchDataText);
document.getElementById("button2").addEventListener("click", fetchDataJson);
document.getElementById("button3").addEventListener("click", fetchDataAPIGET);
