console.log("Traversing the DOM");
let val;

const ul = document.querySelector("ul.collection");
// const lis = document.getElementsByTagName("li");
const li = document.querySelector("li.collection-item:first-child");

val = li;
val = ul;

console.log("objetiendo los nodos hijo");

val = ul.childNodes;
console.log(
  "no solo trae los li node tambien text node, estos son saltos de linea en el documento html "
);
console.log(val);
console.log(val[0]);
console.log(val[0].nodeName);
console.log(val[0].nodeType);

// 1. Elements
// 2. Arrribute (deprecated)
// 3. Text node
// 8. Comment
// 9. Document itself
// 10. Doctype

console.log(
  "en muchos de los escenarios solo vamos a necesitar los html elements para esto tenemos una propiedad llamada children"
);

val = ul.children;

console.log(val);
console.log(val[0]);
console.log((val[0].textContent = "Change"));

console.log("obtener hijos de hijos");
val = ul.children[3].children;
console.log(val);
ul.children[3].children[0].id = "test-link";
val = ul.children[3].children[0];
console.log(val);

console.log("obteniendo el primer hijo ");
val = ul.firstChild;
console.log(val);
val = ul.firstElementChild;
console.log(val);

console.log("obteniendo el ultimo hijo ");
val = ul.lastChild;
console.log(val);
val = ul.lastElementChild;
console.log(val);

console.log("contar los elementos");
val = ul.childElementCount;
console.log(val);

// obtener el nodo padre
val = li.parentElement;
val = li.parentNode;
// el la mayoria de casos van ser el mismo
val = li.parentElement.parentElement;

// obtener un hermano en el mismo nivel del nodo mas conocido como sibling
val = li.nextSibling; // este busca el siguiente hermano no importa si es un elemento o un Text Node
val = li.nextElementSibling; // por lo general vamos a estar trabajando con este dado que vamos es a necesitar su sibling element
val = li.nextElementSibling.nextElementSibling;

// obtener el sibling element previo
val = li.nextElementSibling;
console.log(val);
val = val.previousElementSibling;
console.log(val);

val = li.previousSibling;
val = li.previousElementSibling; // este da null es por que el primer elemento no tiene un sibling previo a el

console.log(val);
