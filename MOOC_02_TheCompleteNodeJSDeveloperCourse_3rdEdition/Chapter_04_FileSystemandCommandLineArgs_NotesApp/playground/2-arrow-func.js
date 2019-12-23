const square = function(x) {
  return x * x;
};

console.log(square(3));

const squareArrow = x => {
  return x * x;
};

console.log(squareArrow(9));

const square3 = x => x * x;

console.log(square3);

const event = {
  name: "Fiesta de cumpleaños",
  printGuestList: function() {
    console.log("Guest list " + this.name);
  }
};

const event2 = {
  name: "Fiesta de cumpleaños",
  printGuestList: () => {
    console.log("Guest list " + this.name);
  }
};

// Sintaxis alternativa para declarar una función y que mantenga el acceso a this
const event3 = {
  name: "Fiesta de cumpleaños",
  guestList: ["Emerson", "Aleja"],
  // ES6 method definition sintax
  printGuestList() {
    console.log("Guest list " + this.name);
    this.guestList.forEach(guest => {
      console.log(guest + " va a la ", this.name);
    });
  }
};

event.printGuestList();
event2.printGuestList();
event3.printGuestList();
