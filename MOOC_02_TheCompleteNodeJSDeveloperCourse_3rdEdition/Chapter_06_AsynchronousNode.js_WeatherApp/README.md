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

