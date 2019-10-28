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
  //clear input
  taskInput.value = "";
}

// delete element task
function deleteTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Estas seguro?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// clear task elements
function clearTasks(e) {
  // taskList.innerHTML = "";
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
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

// Cargar todos los eventListeners
function loadEventListeners() {
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

// console.log(form, taskList, clearBtn, filter, taskInput);
