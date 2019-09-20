console.log("Examining the Document Object");

let val;

val = document;
console.log("Devuelve todo el documento html", val);

val = document.all;
console.log(
  "Entrega como una lista con los nodos del documento html, a medida que el numero de los indices aumenta el nivel de detalle en los nodos tambien. Verlo mas como los nodos de un arbol",
  val,
  val instanceof Array
);

console.log(val[0]);
console.log(val[1]);
console.log(val[2]);

console.log("document.all.length", document.all.length);

console.log(
  "Para obtenerel head del html se puede obtener con la propiedad document.head"
);
console.log(document.head);

console.log(
  "Para obtener el body del html se puede con la propiedad document.body"
);
console.log(document.body);

console.log(
  "para obtener que tipo de documento es se usa la propiedad document.doctype"
);
console.log(document.doctype);

console.log(
  "desde el document se puede acceder al domain directamente sin pasar por location.hostname"
);
console.log(document.domain);

console.log("Obtener la url en la cual me encuentro", document.URL);
console.log("document.characterSet", document.characterSet);
console.log("document.contentType", document.contentType);

console.log(
  "SI quiero tener todos los forms es posible a traves de su respectiva propiedad, aun que no todas las etiquetas tienen su respectiva propiedad como div"
);
console.log(document.forms);
console.log(document.div);
console.log(document.forms[0]);
console.log(document.forms[0].id);
console.log(document.forms[0].method);
console.log(document.forms[0].action);

console.log(
  "SI quiero tener todos los forms es posible a traves de su respectiva propiedad"
);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].id);
console.log(document.links[0].innerHTML);
console.log(document.links[0].classList);
console.log(document.links[0].className);
console.log(document.links[0].classList[0]);

console.log(
  "SI quiero tener todos los images es posible a traves de su respectiva propiedad"
);
console.log(document.images);

console.log(
  "si quiero tener todos los scripts es posible a traves de su respectiva propiedad"
);
console.log(document.scripts);
console.log(document.scripts[4]);
console.log(document.scripts[3].getAttribute("src"));

let scripts = document.scripts;

console.log(typeof scripts);
console.log(scripts instanceof HTMLCollection);

console.log(
  "AL ser un objeto de tipo HTMLCollection no tiene las propiedades del objeto Array por esta razon se debe convertir a tipo array"
);

let scriptsArray = Array.from(scripts);

console.log(scriptsArray instanceof Array);

scriptsArray.forEach(function(script) {
  console.log(script.getAttribute("src"));
});
