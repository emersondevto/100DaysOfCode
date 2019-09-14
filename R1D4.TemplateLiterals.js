const name = "Emerson";
const age = 31;
const job = "Full Stack Developer";
const city = "Bogota";
let html;

console.log("Sin Template Literals");

html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

document.body.innerHTML = html;

console.log("CON Template Literals");

function hello() {
  return "world";
}

html = `
<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>Expresiones: ${2 + 2}</li>
  <li>Functions: ${hello()}</li>
  <li>${age > 30 ? " mayor a 30" : "menor a 30"}</li>
  <li></li>
</ul>
`;

document.body.innerHTML += html;
