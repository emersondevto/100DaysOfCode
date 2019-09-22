console.log("Creating Elements");

const newTask = document.createElement("li");

// add classes to an element

newTask.className = "collection-item";
newTask.id = "newItem";

// add atribute
newTask.setAttribute("title", "New Item");

// create text node and append
// appendChild quiere decir que quieres poner algo dentro de algo

newTask.appendChild(document.createTextNode("Hello Wold"));

// create new link element
const link = document.createElement("a");
// add classes
link.className = "delete-item secondary-content";
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//append link into newtask
newTask.appendChild(link);

// append un elemento como hijo de ul
document.querySelector("ul").appendChild(newTask);

console.log(newTask);
