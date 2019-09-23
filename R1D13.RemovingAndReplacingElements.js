console.log("Removing & Replacing Elements");

// REPLACE ELEMENT

//create element
const newHeading = document.createElement("h2");

// Add id
const oldHeading = document.querySelector("#task-title");

newHeading.id = oldHeading.id;

// Add text node
newHeading.appendChild(
  document.createTextNode("New " + oldHeading.textContent)
);

// Get the parent element
const parentOldHeading = oldHeading.parentElement;

// replace
parentOldHeading.replaceChild(newHeading, oldHeading);

console.log(newHeading, oldHeading, parentOldHeading);

//remove element

const lis = document.querySelectorAll("li");
const li = document.querySelector("li:nth-child(1)");
const ul = document.querySelector("ul");

// No genera error si intento removel el mismo elemento
// remove list element
li.remove();
lis[0].remove();

console.log(li, ul, lis);

//remove child element
ul.removeChild(lis[1]);

// CLASSES and ATTR
const firstLI = document.querySelector("li:first-child");

const link = firstLI.children[0];

// CLASSES

let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("secondary-content");

console.log("firstLi", link);
console.log("classes", link.className);
console.log(val);

// ATTR

val = link.getAttribute("href");
link.setAttribute("test", "test");
link.setAttribute("href", "https://www.google.com");
val = link.hasAttribute("test");
val = link.hasAttribute("title");
link.removeAttribute("test");

console.log("attributes", link);
console.log(val);
