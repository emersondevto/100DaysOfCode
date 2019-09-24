console.log("Keyboard & Input Events");

// si tienes mas de un form en la aplicacion debes ser mas especifico en el query selector
const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

// Clear input
taskInput.value = "";

function oneFormSubmit(e) {
  e.preventDefault();
  console.log(`EVENT TYPE ${e.type}`);
  // GEt Input value
  console.log(taskInput.value);
}

form.addEventListener("submit", oneFormSubmit);

function oneInput(e) {
  console.log(`EVENT TYPE ${e.type}`);
  console.log(e.target.value);
  // heading.textContent = e.target.value;
  // e.preventDefault();
}

// El evento keydown en un elemento input se ejecuta por cada tecla que es pesionada en el teclado.

// INPUT EVENTS
taskInput.addEventListener("keydown", oneInput);
taskInput.addEventListener("keyup", oneInput);
taskInput.addEventListener("keypress", oneInput);
taskInput.addEventListener("focus", oneInput); // cuando das click en el elemento y lo enfocas.
taskInput.addEventListener("blur", oneInput); // es lo opuesto a focus, cuando seleccionas otro elemento y quitas el foco del primer elemento.
// CUT, COPY, PASTE son eventos que tambien pueden ser ejecutados
taskInput.addEventListener("copy", oneInput);
taskInput.addEventListener("cut", oneInput);
taskInput.addEventListener("paste", oneInput);

//INPUT event es un evento que es disparado con cualquier interaccion que haya con el elemento input
taskInput.addEventListener("input", oneInput);

taskInput.addEventListener("change", oneInput); // NO se ejecuta
select.addEventListener("change", oneInput);

console.log(form, taskInput, select);
