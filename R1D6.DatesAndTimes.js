console.log("Dates and Times");

let val;

const today = new Date();

val = today;

console.log(
  "La instancia de una fecha new Date() sin ningun argumento, el sistema devuelve la fecha actual"
);
console.log(val);

console.log(typeof val);

console.log(
  "Asi podemos saber si realmente es instancia de una clase uobjeto en particular"
);
console.log(val instanceof Date);

console.log("toString Date object");
console.log(val.toString());

let birthday = new Date("01-31-1988 14:50:32");
birthday = new Date("01/31/1988");
birthday = new Date("October 10 2019");

console.log("birthday", birthday);
console.log("birthday", birthday.toUTCString());

console.log("Mes 0 Base 0 es Enero", today.getUTCMonth());
console.log("Dia", today.getDate());

console.log("Dia", today.getDay());

console.log("Year", today.getFullYear());

console.log("Hora", today.getHours());

console.log("Minutos", today.getSeconds());

console.log("Segundos", today.getSeconds());

console.log("Miliseconds", today.getMilliseconds());

console.log("Time", today.getTime());

birthday.setMonth(2);

console.log("birthday change month", birthday);

birthday.setDate(12);

console.log("birthday change month", birthday);

birthday.setFullYear(1954);

console.log("birthday change month", birthday);

birthday.setHours(16);

console.log("birthday change month", birthday);

birthday.setMinutes(2);

console.log("birthday change month", birthday);

birthday.setSeconds(30);

console.log("birthday change month", birthday);
