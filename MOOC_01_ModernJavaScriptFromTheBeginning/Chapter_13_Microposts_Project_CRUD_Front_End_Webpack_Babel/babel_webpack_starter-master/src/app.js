// CommonJS Module Syntax
const person = require("./mymodule1");

console.log(person);
console.log(person.name);

// ES2015 Module
import { person2, sayHello } from "./mymodule2";
// import { sayHello } from "./mymodule2";

console.log(person2);
console.log(person2.name);
console.log(sayHello());

import * as mymodule2 from "./mymodule2";

console.log(mymodule2.person2);
console.log(mymodule2.person2.name);
console.log(mymodule2.sayHello());

import greeting from "./mymodule2";

console.log(greeting);

// const greeting = "Hello World     ";
// console.log(greeting);

// const getData = async url => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData("https://jsonplaceholder.typicode.com/posts");
