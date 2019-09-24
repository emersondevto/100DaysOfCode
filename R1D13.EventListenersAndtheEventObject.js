console.log("Event Listeners & the Event Object");

let val;

// adicionar un evento con addEventListener
// si el tag (a) no tiene href entonces el comportamiento por default se puede detener
// si el atributo href tiene # entonces se previene el evento de ser ejecutado pero no se puede confiar en este atajo.
val = document.querySelector(".clear-tasks");

val.addEventListener("click", function(e) {
  console.log(e);
  console.log("click 1");
  e.preventDefault();
});

val.addEventListener("click", function(e) {
  console.log("click 2");
  e.preventDefault();
});

// adicionando una funcion nombrada

function clickHandleEvent(e) {
  let val;

  val = e;

  //Event target Element
  val = e.target;
  val.id = "this-is-an-event";
  val = e.target.className;
  val = e.target.classList;
  e.target.innerText = "Hello";

  //Event type
  val = e.type;

  //Timestamp

  val = e.timeStamp;

  // obtener las coordenadas relativas a la ventana

  val = e.clientY;
  val = e.clientX;

  // obtener las coordinadas relativas a el mismo

  val = e.offsetY;
  val = e.offsetX;

  console.log("funcion nombrada", val);
}

val.addEventListener("click", clickHandleEvent);
val.addEventListener("mouseover", clickHandleEvent);

console.log(val);
