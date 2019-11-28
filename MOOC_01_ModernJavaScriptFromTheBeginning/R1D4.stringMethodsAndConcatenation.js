console.log("String Metodos y Concatenacion");

const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hola a todos mi nombre es Emerson";
const tags = "web design, web development, programming";

let val;

val = firstName + lastName;

console.log("Concatenando con + : ", val);

val = firstName + " " + lastName;
console.log("Concatenando con + : ", val);

val = firstName;
val += lastName;

console.log("Append con += : ", val);

val = "Hola mi nombre es " + firstName + " " + lastName + " y tengo " + age;

console.log("Concatenando con + : ", val);

val = "Estamos \"'explicando algo'\"";

console.log("Escaping  ", val);

val = firstName.length;

console.log("Length: ", val);

val = firstName.concat(" ", lastName);

console.log("concat method: ", val);

console.log("change case");

console.log("toUpperCase", firstName.toUpperCase());
console.log("toLowerCase", firstName.toLowerCase());

console.log("Tratar un string como array");

val = firstName[0];

console.log("String as array [0]", val);

val = firstName.indexOf("i");

console.log("indexOf", val);

val = firstName.indexOf("o");

console.log("si no existe indexOf devuelve un -1", val);

val = firstName.lastIndexOf("i");

console.log("lastIndexOf", val);

val = firstName.charAt(2);

console.log("charAt", val);

val = firstName.charAt(firstName.length - 1);

console.log("charAt obtener el ultimo caracter de forma dinamica", val);

val = firstName.substring(0, 4);

console.log("substring", val);

val = firstName.slice(0, 4);

console.log("slice", val);

val = firstName.slice(-3);

console.log("slice con negativos obtener los ultimos 3 caracteres", val);

val = str.split(" ");

console.log("split str", val);

val = tags.split(", ");

console.log("split tags", val);

val = str.replace("Emerson", "Alejandra");

console.log("replace", val);

val = str.includes("Hola");

console.log("includes", val);

val = str.includes("Hola", "Si uno es verdadero devuelve verdadero");

console.log("includes", val);
