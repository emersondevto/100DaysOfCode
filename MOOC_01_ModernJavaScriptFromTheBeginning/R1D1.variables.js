// tres frormas de definir una variable, todas tienen sus condiciones basicas de uso pero esto en ningun momento quiere decir que esten restringidas a ese espesifico uso.
console.log("Variables VAR");

var name = "Santo Ramirez";
console.log(name);
name = "Santo ahora se llama Sebastian";
console.log(name);

var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// caracteres permitidos para nombrar una variable
// numbers letters _ $
// no puede iniciar con un numero

var $_hola3 = "con todo lo permitido para nombrar una variable";
console.log($_hola3);

// Multi words vars

var firtsName; // camel case
var FirstName; // Pascal case for Class and Objects
var first_name; // Underscore

console.log("Variables LET");

let firstName;
firstName = "LET Santo";
let nameLet = "LET Santo Ramirez";
console.log(nameLet);
nameLet = "LET Santo ahora se llama Sebastian";
console.log(nameLet);

console.log("Variables CONST");

// Siempre se le debe asignar un valor, nunca dejar una const sin asignar valor,dado que no va a poderce asignar un valor luego.

try {
  // const greeting2;
} catch (error) {
  console.log(error.message);
}

// const solo hace que los valores primitivos sean fijos, otro tipo de objetos como lo son los array o los obajetos json dejan cambiar los valores internos de los objetos.

const person = {
  name: "Santo"
};

console.table(person);

person.name = "Jose";

console.table(person);

const numbers = [1, 2, 3, 4];

console.log(numbers);

numbers.push(5);

console.log(numbers);

// numbers = [1, 2, 3, 4, 5, 6]; // este es un array completamente nuevo con una referencia en memoria diferente al primer array.

const constante = "Hola Mundo";

function scopLevelATest1(Level) {
  let LevelA = "A";
  if (Level) {
    let LevelB = "B";
    return { scopLevelATest1: LevelA, scopLevelB: LevelB };
  }
  return { scopLevelATest1: LevelA, scopLevelB: LevelB };
}

function scopLevelATest2(Level) {
  let LevelA = "A";
  if (Level) {
    var LevelB = "B";
    return { scopLevelATest1: LevelA, scopLevelB: LevelB };
  }
  return { scopLevelATest1: LevelA, scopLevelB: LevelB };
}

try {
  console.log("Variable const: ", constante);
  constante = "Cambio de nombre";
} catch (error) {
  console.error(error.message);
}

try {
  console.log(scopLevelATest1(true));
  console.log(scopLevelATest1(false));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(scopLevelATest2(false));
  console.log(scopLevelATest2(true));
} catch (error) {
  console.error(error.message);
}
