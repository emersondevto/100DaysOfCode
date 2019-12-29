# Asynchronous 

Normalmente las actividades ocurren en un orden secuencial, como por ejemplo hacer una papas fritas, e.g:

- 1. Salir de la casa
- 2. Caminar hacia la tienda de verduras
- 3. Elegir las papas.
- 4. Dirigirse a la caja para pagar.
- 5. Pagar las papas.
- 6. Salir para la casa.
- 7. .. Ya entendieron el punto...

Pero en node.js no necesariamente pasa de forma linea, puede ocurrir de una forma diferente dependiendo del tiempo que tarde cada sección de código en ejecutarse. 

e.g.:

### Código

```javascript
console.log("Starting");

setTimeout(() => {
  console.log("2 Seconds Timer");
}, 2000);

setTimeout(() => {
  console.log("0 Seconds TImer");
}, 0);

console.log("Stopping");
```
### Output

```text
Starting
Stopping
0 Seconds TImer
2 Seconds Timer
```

Aquí surge una duda: __¿por qué se imprime "0 Seconds Timer" después de Stopping?__.

# Call Stack, Callback Queue, and Event Loop

### Callback
ES una función que se provee como argumento a otra función. e.g.:

```javascript
const callback = function () {
  console.log("Seconds are up");
}

setTimeout(callback, 3000);
```

### Call stack
Lugar donde se listan todos lo llamados a código para ser procesados. Call stack siempre inicia con main y main es importante dado que hasta que termine de procesar/llamar cada uno de los pedazos (chuncks) de códigos sincronos todo lo que sea asíncrono deberá esperar así allá terminado el tiempo como en el caso de setTimeout.

### Event Loop
Lugar donde se listan todos los pedazos (chuncks) de código asíncrono una terminada la llamada de codigo sincrono en el call stack. Los chuncks de código asíncrono salen de event loop a call stack para ser listado en el llamado.