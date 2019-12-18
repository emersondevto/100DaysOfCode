const addUtils = require("./utils.js");
const getNotes = require("./notes");

const sum = addUtils(1, 2);

console.log(sum);
console.log(getNotes());

// Reto: Definir y usar una función en un archivo nuevo.
//
// 1. Crear un archivo llamado notes.js
// 2. Crear la función getNotes que retorna tus notas.
// 3. Export la función getNotes
// 4. Desde app.js , cargar y llamar la función imprimiendo el resultado en la consola.
const validator = require("validator");

console.log(validator.isEmail("emerson@example.com"));
console.log(validator.isEmail("example.com"));

console.log(validator.isURL("http://serendipia.co"));
console.log(validator.isURL("http:/wwserendipia.co"));

// Reto: Usar la librería chalk en mi proyecto
//
// 1. Instalar chalk
// 2. Cargar chalk dentro de app.js
// 3. Usarlo imprimiendo en consola Success! en la consola en verde
// 4. Probar el código
//
// Bonus: Usar la documentación para probar con otros estilos. Haga el texto en negrilla o inviértalo.

const chalk = require("chalk");

console.log(chalk.black.bgGreenBright.bold("Success!"));
console.log(chalk.bold.green("Success!"));
console.log(chalk.bold.red("Error!"));
