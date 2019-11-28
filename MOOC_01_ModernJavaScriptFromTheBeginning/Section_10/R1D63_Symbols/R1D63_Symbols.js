console.log("R1D63_Symbols");

// is very valuable Object Propertyes Identifiers
// Every symbol is unique

// Create a symbol
// Symbol is a primitive valie doesnt have a constructor
const sym1 = Symbol();

// Add an identifier
const sym2 = Symbol("sym2");

console.log(sym1);
console.log(sym2);
console.log(typeof sym1);

// Jamas van a ser iguales
console.log(Symbol() === Symbol());
console.log(Symbol("A") === Symbol("A"));

// Error: can't convert symbol to string directry
// console.log(`Hello ${sym2}`);

console.log(`Hello ${String(sym2)}`);
console.log(`Hello ${sym1.toString()}`);

// Unique object keys

const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const obj1 = {};

obj1[KEY1] = "Prop1";
obj1[KEY2] = "Prop2";
obj1.KEY3 = "Prop3";
obj1.KEY4 = "Prop4";

console.log(obj1);

// Symble are not enumerable in for...in

for (const i in obj1) {
  if (obj1.hasOwnProperty(i)) {
    const element = obj1[i];
    console.log(`${i}: ${obj1[i]}`);
  }
}

// Los Symbol son ingnorados en la serialización de un objeto a cadena de caracteres
console.log(JSON.stringify(obj1));
console.log(JSON.stringify({ key: 1 }));
console.log(JSON.stringify({ [Symbol("Key")]: 1 }));

// Se puede acceder a un key Symbol en un objeto con this.

obj1.KEY5 = function() {
  console.log(this[KEY1]);
};

obj1.KEY5();

let KEYA = Symbol("Mundo");
let KEYB = Symbol("KEYB");

class TestSymbol {
  constructor(hola) {
    this[KEYA] = hola;
    this.keya = hola;
  }

  [KEYB]() {
    return "KEYB";
  }

  keyc() {
    return this[KEYB]();
  }
}

const ts1 = new TestSymbol("Mundo");
console.log(ts1);
console.log(JSON.stringify(ts1));
console.log(ts1.keyc());

// class Something {
//   #property;

//   constructor() {
//     this.#property = "test";
//   }
// }

// const instance = new Something();
// console.log(instance.property); //=> undefined
