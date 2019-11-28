console.log("DOM Selectors for Single Elements");

console.log("Get Element By ID");

let val;
val = document.getElementById("task-title");
console.log(val);

console.log("obtener cosas del elemento");
console.log(val.id);
console.log(val.innerHTML);
console.log(val.className);

console.log("Cambiando el estilo de un elemento");

console.log((val.style.background = "black"));
console.log((val.style.color = "white"));
console.log((val.style.padding = "5px"));
// console.log((val.style.display = "none"));

console.log("Cambiar contenido");

val.textContent = "Hola textContent";
val.innerText = "Hola innerText";
val.innerHTML = "<span style='color:red'>Hola InnerHTML</span>";

console.log("Query Selector es nuevo y es mucho mas poderoso");

val = document.querySelector("#task-title");
console.log(val);

val = document.querySelector(".card-title");
console.log(val);

val = document.querySelector("h5");
console.log(val);

console.log(
  "querySelector solo retorna un elemento sin importar que hayan mas del mismo tipo"
);
document.querySelector("li").style.color = "red";

document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "purple";

document.querySelector("li:nth-child(3)").style.color = "red";

document.querySelector("li:nth-child(4)").textContent = "Cuarto";

console.log("Recuerde que este es un metodo que retorna un unico elemento");
document.querySelector("li:nth-child(odd)").style.background = "blue";
document.querySelector("li:nth-child(even)").style.background = "#ccc";
