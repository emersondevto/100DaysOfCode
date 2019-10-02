console.log("Prototypes Explained");

// Cada objeto en javascript tiene un prototype
// Todos los objetos y propiedades heredan de ese prototype

// Object.prototype object literals
// Person.prototype  object build with a constructore

function Person(name, lastName, fechaDeNaciemiento) {
  this.name = name;
  this.lastName = lastName;
  console.log(this);
  this.fechaDeNaciemiento = new Date(fechaDeNaciemiento);
  // this.calcularEdad = function() {
  //   const diferencia = Date.now() - this.fechaDeNaciemiento.getTime();
  //   const ageDate = new Date(diferencia);
  //   return ageDate.getUTCFullYear() - 1970;
  // };
}

// Calculate age
// ahora la funcion esta en Object.prototype
Person.prototype.calcularEdad = function() {
  const diferencia = Date.now() - this.fechaDeNaciemiento.getTime();
  const ageDate = new Date(diferencia);
  return ageDate.getUTCFullYear() - 1970;
};

Person.prototype.nombreCompleto = function() {
  return `${this.name} ${this.lastName}`;
};

const jhon = new Person("Jhon", "Ramirez", "8-12-1988");
const mary = new Person("Mary", "Volkov", "9/4/1978");

console.log(jhon.calcularEdad());
console.log(mary.nombreCompleto());

// No estamos saturando nuestro constructor con estas funciones y las dejamos en secciones separadas.

// Tambien podemos cambiar los valores desde las funciones alojadas en el prototype

// Get marriend
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

console.log(mary.getsMarried("Rodriguez"));
console.log(mary.nombreCompleto());

console.log(mary.hasOwnProperty("name"));
console.log(mary.hasOwnProperty("name2"));
console.log(mary.hasOwnProperty("getsMarried")); // No es una propiedad, esta en el prototype

// Desde chromebook
