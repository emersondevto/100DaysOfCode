const addUtils = require("./utils.js")
const getNotes = require("./node")

const sum = addUtils(1,2)

console.log(sum);
console.log(getNotes())

// Reto: Definir y usar una función en un archivo nuevo.
//
// 1. Crear un archivo llamado notes.js
// 2. Crear la función getNotes que retorna tus notas.
// 3. Export la función getNotes
// 4. Desde app.js , cargar y llamar la función imprimiendo el resultado en la consola.