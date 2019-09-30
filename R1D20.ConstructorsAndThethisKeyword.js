console.log('Constructors & the "this" Keyword');

// Object Literals

const brad = {
  name: "Brad",
  age: 30
};

console.log(brad);
console.log(brad.name);

// object function constructure
// Person  constructor

function Person() {
  this.name = "Brad";
}

// instanciar un objeto Person a partir de esa funcion
const brad2 = new Person();
const Jhon = new Person();

console.log(brad2);
console.log(Jhon);

// Evitar codigo hardcodeado
function Person2(name, fechaDeNaciemiento) {
  this.name = name;
  console.log(this);
  this.fechaDeNaciemiento = new Date(fechaDeNaciemiento);
  this.calcularEdad = function() {
    const diferencia = Date.now() - this.fechaDeNaciemiento.getTime();
    const ageDate = new Date(diferencia);
    return ageDate.getUTCFullYear() - 1970;
  };
}

const Aleja = new Person2("Aleja", "07/05/1988");
const Andres = new Person2("Andres", "09/30/1888");

// console.log(Aleja);
// console.log(Andres);

// this se refiere a la instancia actual del objeto

// cuando se escribe la siguiente linea en un archivo importado devuelve undefined
// console.log(this);

console.log(Andres.name);
console.log(Andres.calcularEdad());
