console.log("Built In Constructors");

//STRING

// valor primitivo
const name1 = "Jhon";
// String constructure
const name2 = new String("Jhon");

console.log(typeof name1);
console.log(typeof name2);
name2.foo = "bar";
console.log(name2);

console.log(name1 === name2);
console.log(name1 == name2);

// NUMBER

const num1 = 1;
const num2 = new Number(5);

console.log(typeof num1);
console.log(typeof num2);

//BOOLEAN

const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1);
console.log(typeof bool2);

// FUNCTION

const getSum1 = function(x, y) {
  return x + y;
};

console.log(getSum1(1, 1));

const getSum2 = new Function("x", "y", "return x + y");

console.log(getSum2(1, 1));

// OBJECTS

const jhon1 = {
  name: "jhon"
};

console.log(jhon1);

const jhon2 = new Object({ name: "jhon" });

console.log(jhon2);

console.log(typeof jhon1);
console.log(typeof jhon2);

// ARRAYS

const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);
console.log(arr2);

// Regular Expressions

const rex1 = /\w+/;

console.log(rex1);

let rex2 = new RegExp("w+");

console.log(rex2);

rex2 = new RegExp("\\w+");

console.log(rex2);
