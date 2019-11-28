console.log("General Loops");

console.log("FOR LOOP");

console.log("usando un loop con una condicion logica basica");

for (let i = 0; i < 10; i++) {
  console.log(i, "menor a ", 10);
}

console.log("Usando un loop con un array");

for (let i = 0; i < [1, 2, 3, 4, 5].length; i++) {
  const element = [1, 2, 3, 4, 5][i];
  console.log("Valor del array", i, element);
}

console.log("Deteniendo un loop cuando encuentra lo que necesitamos");

for (let i = 0; i < [1, 2, 3, 4, 5].length; i++) {
  const element = [1, 2, 3, 4, 5][i];
  if (element === 2) {
    console.log("Este numero es 2");
    break;
  }
}

console.log("Saltarce una iteracion");

for (let i = 0; i < [1, 2, 3, 4, 5].length; i++) {
  const element = [1, 2, 3, 4, 5][i];
  if (element === 2) {
    console.log("Este numero es 2");
    continue; // continue a la siguiente iteracion
  }
  console.log("Number", element);
}

console.log("WHILE LOOP");

console.log("SI la condicion no se cumple nunca se entra al while");
let i = 10;
while (i < 10) {
  console.log("While Numero:", i);
  i++;
}

console.log(
  "No importa si la condicion nunca se cumple, siempre se va a ejecutar al menos una sola vez"
);

i = 100;
do {
  console.log("Do While Number:", i);
  i++;
} while (i < 10);

console.log("LOOP THORUGH ARRAY");

const cars = ["Audio", "Tesla", "Toyota"];

for (let i = 0; i < cars.length; i++) {
  const element = cars[i];
  console.log("Mi carro es un:", element);
}

i = 0;
while (i < cars.length) {
  console.log("Mi carrro:", cars[i]);
  i++;
}

console.log("FOREACH");

cars.forEach(element => {
  console.log("forEach:", element);
});

cars.forEach(function(element, index, array) {
  console.log("forEach: element", element);
  console.log("forEach: index", index);
  console.log("forEach: array", array);
});

console.log("MAP devuelve un nuevo array");

const users = [
  { id: 1, name: "Emerson" },
  { id: 2, name: "Alejandra" },
  { id: 3, name: "Andres" }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log("User ids", ids);

console.log("FORIN");

const user = {
  firstName: "Emerson",
  lastName: "Volkov",
  age: 31
};

for (const x in user) {
  console.log(`${x} : ${user[x]}`);
}
