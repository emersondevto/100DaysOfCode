console.log("Data Types");

// Primitive data types
// stored directry in the location the variable accesses
// stored on the stack

// String;
// Number;
// Boolean;
// null;
// undefined;
// Symbol;

// Reference data types
// Accessed by reference
// object that are stored on the heap
// a pointer to a location in memory

// Array
// Object Literals
// Function
// Date
// Anything Else

// Javascript is a dynamic typed language

// - Los tipos son asociados con valores no variables
// - La misma variable puede tomar multiples tipos
// - No neecesitamos especificar tipos
// - Muchos de los otros lenguajes son estatimacamente tipados c c++ java
// - Hay supersets de js y addons que permiten tipado estatico (Typescript o flow)

console.log("Primitive Types");
// String
const name = "Jhon Doe";
// Number
const age = 42;
// Boolean
const hasKids = true;
// null
const car = null;
// undefined
var house;
//Symbol
const sym = Symbol();

console.log("String", typeof name);

console.log("Number", typeof age);

console.log("Boolean", typeof hasKids);

console.log("null", typeof car);

console.log("undefined", typeof house);

console.log("Symbol", typeof sym);

console.log("References Types Objects");

// Array
const hobbies = ["movies", "music"];

// Object Literal
const address = {
  city: "Boston",
  zip: "11111"
};

//Date
const today = new Date();

console.log("Array", typeof hobbies);

console.log("Object", typeof address);

console.log("Date", typeof today);
