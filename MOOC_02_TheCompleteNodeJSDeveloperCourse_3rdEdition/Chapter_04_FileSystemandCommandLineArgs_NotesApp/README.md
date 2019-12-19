# File System and Command Line Args (Notes App)

## Getting Input from Users

Para recibir valores del usuario podemos pasarlos luego de escribir el comando de ejecución `node <my-app.js>`es decir que quedaría de la siguiente forma `node <my-app.js> Emerson` ese valor que se pasa se recibe en `process.argv` el cual es un Array con todos los elementos que se envían, los dos primeros valores son los valores predeterminados, la ubicación de node y la ubicación del archivo ejecutado.

