console.log("Local & Session Storage");

console.log(localStorage);
console.log(window);

// set local storage item
localStorage.setItem("name", "Jhon");

// set session storage item
// cuando se cierra el browser la session se limpia
sessionStorage.setItem("name", "Alejandra");

// remove from local storage || es igual para session storage
localStorage.removeItem("name");

// obtener un valor de storage | local or session
localStorage.setItem("name", "Jhon");
localStorage.setItem("lastName", "Doe");
localStorage.setItem("age", "30");

let name = localStorage.getItem("name");

console.log(name);

//elimina todos los datos almacenados en local storage
// localStorage.clear();

document.querySelector("form").addEventListener("submit", function(e) {
  // console.log(e);

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  const task = document.getElementById("task").value;

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task saved");
  // console.log(task);
  e.preventDefault();
});

let tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.forEach(task => {
  console.log(task);
});
