console.log("Task List [Part 1] - UI & Add Task Items");

// Definir UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// functionEvent add task
function addTask(e) {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // create li element
  const li = document.createElement("li");
  // add a class
  li.className = "collection-item";
  // create the text node
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement("a");
  // add the class
  link.className = "delete-item secondary-content";
  // add the icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to a
  li.appendChild(link);
  // append link to ul
  taskList.appendChild(li);
}

// Cargar todos los eventListeners
function loadEventListeners() {
  // add task event
  form.addEventListener("submit", addTask);
}

// Cargar todos los eventListeners
loadEventListeners();

console.log(form, taskList, clearBtn, filter, taskInput);
