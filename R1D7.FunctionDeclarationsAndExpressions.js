console.log("Functions Declarations and Expressions");

console.log("FUNCTIONS DECLARATIONS");

function greet() {
  console.log("Esto es una funcion");
}

greet();

function greetReturn() {
  return "Hello";
}

greetReturn();
console.log(greetReturn());

function greetArgs(name) {
  return `My name is: ${name}`;
}

console.log(greetArgs());
console.log(greetArgs("Emerson"));

function greetArgsDefaults(name = "Joe") {
  return `My name is ${name}`;
}

console.log(greetArgsDefaults());
console.log(greetArgsDefaults("Emerson"));

function greetArgsDynamic(...args) {
  console.log(typeof args);
  console.log(args instanceof Array);
  console.log(args);
  console.log(...args);
}

greetArgsDynamic("hola", "mundo");

console.log("FUNCTIONS EXPRESIONS");

// es poner una funcion como si fuera una variable

const square = function(x = 3) {
  return x * x;
};

console.log(square());
console.log(square(6));

console.log("IMMIDIATLEY INVOKABLE functions expressions IIFEs");

// para crear una expresion es tan facil como ponerla en parentesis

(function() {
  console.log("y asi es como funciona IIFEs");
})();

(function(saludo) {
  console.log("y asi es como funciona IIFEs");
  console.log(saludo);
})("hola");

console.log("PROPERTY METHODS");

//cuando unafuncion es puesta en un objeto es llamado metodo

const todo = {
  add: function(params) {
    console.log("Add todo...");
  },
  edit: function(id) {
    console.log("Edit todo..." + id);
  }
};

todo.delete = function(id) {
  console.log("Delete todo", id);
};

todo.add();
todo.edit(22);
todo.delete(22);
