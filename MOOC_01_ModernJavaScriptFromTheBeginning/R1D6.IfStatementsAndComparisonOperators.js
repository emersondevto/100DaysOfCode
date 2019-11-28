console.log("If Statements and COmparison Operators");

console.log(`
  if (somthing) {
    do something
  } else{
    do something else
  }
`);

let val = 100;

console.log(
  "El operador de comparacion igual == solo compara valores, omite el tipo de dato"
);
if (val == "100") {
  console.log("VERDADERO");
} else {
  console.log("FALSO");
}

console.log(
  "El operador de comparacion diferente de != solo compara valores, omite el tipo de dato"
);
if (val != "100") {
  console.log("VERDADERO");
} else {
  console.log("FALSO");
}

console.log("El operador de comparacion igual ===  compara VALOR y TIPO");
if (val === "100") {
  console.log("VERDADERO");
} else {
  console.log("FALSO");
}

console.log("El operador de comparacion diferente de !== compara VALOR y TIPO");
if (val !== "100") {
  console.log("VERDADERO");
} else {
  console.log("FALSO");
}

console.log(
  "Para saber si una variable esta definida o no usamos el operador typeof"
);
if (typeof id === "undefined") {
  console.log("id undefined");
} else {
  console.log("id defined");
}

console.log("Mayor que o menor que");
if (val > 100) {
  console.log("MAYOR QUE");
} else {
  console.log("MAYOR QUE FALSO");
}

if (val < 200) {
  console.log("MENOR QUE");
} else {
  console.log("MENOR QUE FALSO");
}

console.log("Mayor o igual que o menor o igual que");
if (val >= 100) {
  console.log("MAYOR O IGUAL QUE");
} else {
  console.log("MAYOR O IGUAL QUE FALSO");
}

if (val <= 200) {
  console.log("MENOR O IGUAL QUE");
} else {
  console.log("MENOR O IGUAL QUE FALSO");
}

console.log("IF ELSE");

val = "blue";

if (val === "red") {
  console.log("Color RED");
} else if (val === "blue") {
  console.log("Color BLUE");
} else {
  console.log("El color no es ni rojo ni azul");
}

console.log("Operadores Logicos");

const name = "Jhon";
const age = 20;

console.log("AND");
if (age > 0 && age <= 12) {
  console.log(`${name} es un nino`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} es un adolecente`);
} else {
  console.log(`${name} es un adulto`);
}

console.log("OR");
if (age < 16 || age > 65) {
  console.log(`${name} NO puede participar en la carrera`);
} else {
  console.log(`${name} puede participar en la carrera`);
}

console.log("TERNARY OPERATOR");
console.log(age === 20 ? "VERDADERO" : "FALSO");

console.log("Sin los corchetes");
if (age === 20) console.log("VERDADERO");
else console.log("FALSO");
