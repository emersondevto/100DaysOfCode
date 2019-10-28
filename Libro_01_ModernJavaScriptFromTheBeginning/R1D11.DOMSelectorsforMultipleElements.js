console.log("DOM Selectors for Multiple Elements");

let items;

console.log("document.getElementsByClassName");

items = document.getElementsByClassName("collection-item");

console.log(items);

// lo que devuelve getElementsByClassName es un HTMLCollection, se pueden usar los lopp tradiciones para acceder a cada elemento, pero por ejemplo un forEach que hace parte del objeto Array no esta disponible en dicho objeto.
for (const item in items) {
  if (items.hasOwnProperty(item)) {
    const element = items[item];
    console.log(element);
  }
}

console.log("accediendo a un elemento", items[1]);

// items.forEach(element => {
//   console.log(element);
// });

console.log(
  "si quedemos podemos acceder a cualquier elemento y modificar cada uno"
);

items[0].style.color = "red";
items[3].textContent = "Hola Mundo";

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

console.log(listItems);

console.log("document.getElementsByTagName");

let listTags;

listTags = document.getElementsByTagName("li");

console.log(listTags);

// lo que devuelve getElementsByClassName es un HTMLCollection, se pueden usar los lopp tradiciones para acceder a cada elemento, pero por ejemplo un forEach que hace parte del objeto Array no esta disponible en dicho objeto.
for (const item in listTags) {
  if (listTags.hasOwnProperty(item)) {
    const element = listTags[item];
    console.log(element);
  }
}

console.log("accediendo a un elemento", listTags[1]);

// listTags.forEach(element => {
//   console.log(element);
// });

console.log(
  "si quedemos podemos acceder a cualquier elemento y modificar cada uno"
);

listTags[0].style.color = "red";
listTags[3].textContent = "Hola Mundo";

const listItemsTags = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

console.log(listItemsTags);

console.log("convert HTMLCollection to array");

let ArrayListTags = Array.from(listTags);

console.log(ArrayListTags instanceof Array);

function changeText(tag, index) {
  tag.textContent = "New Value" + index;
}

ArrayListTags.forEach(changeText);

console.log("document.querySelectorAll");

let allItems = document.querySelectorAll("li");

console.log(allItems);

console.log(allItems instanceof Array);

allItems.forEach(changeText);

const liOdd = document.querySelectorAll("li:nth-child(odd)");

function changeBackground(item) {
  item.style.background = "blue";
}

liOdd.forEach(changeBackground);

console.log(
  "Puedes usar los interadores for y while con los HTMLCOllection no es necesario convertirlos en array"
);
