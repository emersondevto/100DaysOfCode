# Importing Node.js Core Modules

## Sistema de módulos.

|Module|Default|
|---|---|
|console|YES|
|File System|NO|

## fs.writeFileSync

Si el archivo ya existe el comando lo va a sobre-escribir dejando lo ultimo que se le pida que guarde. De lo contrario el comando crear el archivo y guarda la información en dicho archivo.

# Importing npm Modules

Importar modules que yo he creado. Se usa require para importar el modulo en el script que donde deseo usarlo. 

Para que un modulo retorne algo se debe definir que va a retornar, de retornar vacío o nada igualmente el script se ejecutara.

Cada uno de los módulos tiene su propio scope lo que hace que si defines una variable en un modulo retorna un error si intentas usarla en el script donde lo importaste.

### NPM

Un componente interesante es poder importar módulos de terceros los cuales están alojados en node package manager.

Antes de usar npm es necesario iniciar en proyecto con npm init, lo cual solo crea un archivo package.json en el cual se alojaran los diferentes nombres de paquetes que instalemos.

Luego podemos instalar packetes con el comando `npm install validator`
Una ves instalado puedo usar el modulo en mi proyecto de la siguiente forma.

```javascript
const validator = require("validator");
```
Si la carpeta `node_modules` no existe, he intentan ejecutar tu script de node.js, te encontraras con un error que dice `npm packege not fount` en este caso deberás ejecutar el siguiente comando para decirle al proyecto que descargue de nuevo todas las dependencias.

```shell
npm install
```

Los paquetes que van a ser instalados se encuentran en el file `package.json`

Uno de los paquetes interesantes para aprender node.js es el `nodemon` el cual puedes instalarlo de forma global con `npm install nodemon -g` 

Para usarlo debes ejecutar el siguientes comando en consola:

```shell
nodemon <name-of-the-file.js>
```

Lo que hace `nodemon` es observar el archivo que le pasas y ver si ocurren cambios, una ves identifica un cambio inmediatamente reinicia el proceso y ejecuta de nuevo el script de node.js.

