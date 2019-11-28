console.log("R1D42_ArrowFunctions");

const sayHello = function() {
  console.log("Hello");
};

const sayHello2 = () => {
  console.log("Hello2");
};

// one line function dont need braces
const sayHello3 = () => console.log("Hello3");

// one line returns
const sayHello4 = () => "Hello4";

// arrow function return object literal
const sayHelloOL = () => ({
  msg: "hello"
});

// recibe parameters
// single parameter dont need parenthesis
const sayHelloParameters = msg => console.log(msg);

// Multiple parameters need parenthesis
const sayHelloMoreThanOneParameter = (name, lastName) => console.log("Hello", name, lastName);

sayHello3();
console.log(sayHello4());

console.log(sayHelloOL());

sayHelloParameters("Hello");
sayHelloMoreThanOneParameter("Emerson", "Perdomo");

const users = ["Emerson", "William", "Alejandra"];

const nameLengths = users.map(function(name, index) {
  return name.length;
});

const nameLengths2 = users.map((name, index) => name.length);

console.log(nameLengths2);

// Lexical this
