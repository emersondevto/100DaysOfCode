console.log("Mouse events");

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

console.log(clearBtn, card, heading);

// Event handler runEvent
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  e.preventDefault();
}

// Event handler runEvent
function runEventDynamic(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX ${e.offsetX} MouseY ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
  e.preventDefault();
}

// CLICK
clearBtn.addEventListener("click", runEvent);
// DOUBLE CLICK
clearBtn.addEventListener("dblclick", runEvent);
// MOUSEDOWN Cuando se da un click sostendio, solo a sido presionado pero no soltado.
clearBtn.addEventListener("mousedown", runEvent);
// MOUSEUP cuando se de un click pero solo se sispara cuando es suelto.
clearBtn.addEventListener("mouseup", runEvent);

// MOUSEENTER es cuando el mouse entra en la zona del elemento
card.addEventListener("mouseenter", runEvent);
// MOUSELEAVE es cuando el mouse deja la zona del elemento
card.addEventListener("mouseleave", runEvent);

// MOUSEOVER la diferenciacon MOUSEENTER es que si lleva haber otro elemento envevido en el elemento que tiene el evento este se dispara si vuelve al elemento que tienen el evento.
card.addEventListener("mouseover", runEvent);
// MOUSEOUTla diferenciacon MOUSELEAVE es que si lleva haber otro elemento envevido en el elemento que tiene el evento este se dispara si vuelve al elemento que tienen el evento.
card.addEventListener("mouseout", runEvent);

// MOUSEMOVE
card.addEventListener("mousemove", runEventDynamic);
