const fs = require('fs')

fs.writeFileSync("notes.txt", "Mi nombre es Emerson.")

// Reto: Añadir un mensaje en notes.txt
//
// 1. Use appendFileSync para añadir al archivo notes.txt
// 2. Ejecutar el script
// 3. Revisa tu trabajo abriendo el archivo notes.txt y verificando que se a añadido nuevo texto.

fs.appendFileSync("notes.txt", " Esta es una nueva nota.")