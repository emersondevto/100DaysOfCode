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