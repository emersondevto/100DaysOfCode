console.log("Task List [Part 1] - UI & Add Task Items");

// Definir UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

function getTasksFromLocalStorage() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  return tasks;
}

function storeTaskInLocalStorage(newTask) {
  let tasks = getTasksFromLocalStorage();
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function buildTaskElement(tasks) {
  const li = document.createElement("li");
  // add a class
  li.className = "collection-item";
  // create the text node
  li.appendChild(document.createTextNode(tasks));
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

// functionEvent add task
function addTask(e) {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // // create li element
  // const li = document.createElement("li");
  // // add a class
  // li.className = "collection-item";
  // // create the text node
  // li.appendChild(document.createTextNode(taskInput.value));
  // // create new link element
  // const link = document.createElement("a");
  // // add the class
  // link.className = "delete-item secondary-content";
  // // add the icon
  // link.innerHTML = '<i class="fa fa-remove"></i>';
  // // append link to a
  // li.appendChild(link);

  buildTaskElement(taskInput.value);

  // store on localstorage
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = "";
}

//remove from local storage
function removeTaskFromLocalStorage(taskElement) {
  let tasks = getTasksFromLocalStorage();
  var index = tasks.indexOf(taskElement.textContent);
  if (index > -1) {
    tasks.splice(index, 1);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// delete element task
function deleteTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Estas seguro?")) {
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// clear task elements
function clearTasks(e) {
  // taskList.innerHTML = "";
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.removeItem("tasks");
  // Es mas demorado con innerHTML
  // https://jsperf.com/innerhtml-vs-removechild/15
  // console.log(e.target);
}

// filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
  // console.log(e.target.value);
}

// Get tasks from localstorage
function loadTasks(e) {
  let tasks = getTasksFromLocalStorage();
  tasks.forEach(buildTaskElement);
}

// Cargar todos los eventListeners
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener("DOMContentLoaded", loadTasks);
  // add task event
  form.addEventListener("submit", addTask);
  // remove task event
  taskList.addEventListener("click", deleteTask);
  // clear task event
  clearBtn.addEventListener("click", clearTasks);
  // filter task event
  filter.addEventListener("keyup", filterTasks);
}

// Cargar todos los eventListeners
loadEventListeners();
//

// console.log(form, taskList, clearBtn, filter, taskInput);
