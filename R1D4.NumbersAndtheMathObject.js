const num1 = 100;
const num2 = 50;
let val;

console.log("Numbers", num1, num2);

val = num1 + num2;
console.log("+", val);
val = num1 * num2;
console.log("*", val);
val = num1 - num2;
console.log("-", val);
val = num1 / num2;
console.log("/", val);
val = num1 % num2;
console.log("%", val);

console.log("Math Object");
val = Math.PI;
console.log("Math pi", val);
val = Math.E;
console.log("Math e", val);
val = Math.round(2.8);
console.log("round", 2.8, val);
val = Math.round(2.5);
console.log("round", 2.5, val);
val = Math.round(2.2);
console.log("round", 2.2, val);
val = Math.ceil(2.1);
console.log("ceil", 2.1, val);
val = Math.floor(2.8);
console.log("floor", 2.8, val);
val = Math.sqrt(4);
console.log("sqrt", 4, val);
val = Math.abs(-3);
console.log("abs", -3, val);
val = Math.pow(2, 4);
console.log("pow 2^4", val);
val = Math.min(5, 44, -4, 7, 23);
console.log("min", val);
val = Math.max(6, 23, 78, 23, 54);
console.log("max", val);
val = Math.random();
console.log("random", val);

val = Math.ceil(Math.random() * 20);
console.log("Numero aleatorio entre 1 y 20:", val);
console.log(val);
