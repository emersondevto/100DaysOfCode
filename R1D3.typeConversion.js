console.log("Type Conversions");

console.log("Number to String");

let val;
val = 55;
//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.length); // esta propiedad solo esta disponible en el tipo de dato string

val = String(val);
//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.length); // esta propiedad solo esta disponible en el tipo de dato string

val = String(55 + 5);
//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.length); // esta propiedad solo esta disponible en el tipo de dato string

console.log("Boolean to String");

val = String(true);
//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.length); // esta propiedad solo esta disponible en el tipo de dato string

console.log("Date to String");

val = String(new Date());
//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.length); // esta propiedad solo esta disponible en el tipo de dato string

console.log("Array to String");

val = String([1, 2, 3, 4, 5]);
//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.length); // esta propiedad solo esta disponible en el tipo de dato string

console.log("toString Method");

val = (5).toString();
val = true.toString();

//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.length); // esta propiedad solo esta disponible en el tipo de dato string

console.log("Strings to numbers");

val = Number("5");

//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2));

val = Number(true);

//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2));

val = Number(false);

//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2));

val = Number(null);

//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2));

val = Number("hello");

//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2));

val = Number([1, 2, 3, 4, 5]);

//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2));

console.log("parseInt");

val = parseInt("5.55");

//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2));

console.log("parseFloat");

val = parseFloat("5.55");

//output
console.log("Variable: ", val);
console.log("typeof: ", typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2));

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);

const val11 = String(5);
const val12 = 6;
const sum1 = val11 + val12;

console.log(sum1);
