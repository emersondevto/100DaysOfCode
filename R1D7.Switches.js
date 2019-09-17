console.log("Switches");

let color = "yellow";

switch (color) {
  case "red":
    console.log(`El color es ${color}`);
    break;
  case "blue":
    console.log(`El color es ${color}`);
    break;
  default:
    console.log("El color no es ni rojo ni azul");
    break;
}

let number = 20;

switch (number) {
  case number < 20:
    console.log("Menor a 20");
    break;
  case number === 20:
    console.log("Igual a 20");
    break;
  default:
    console.log("Ninguno de los dos", number);
    break;
}

switch (new Date().getDay()) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("Otro dia");
    break;
}
