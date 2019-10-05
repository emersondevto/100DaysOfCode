console.log("ES6 Classes");

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dateOfBirth);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  age() {
    // const time = Date.now() - this.dateOfBirth.time;
    // console.log(object);
    // const age = new Date(time).getFullYear() - 1970;
    // return age;
    const diferencia = Date.now() - this.dateOfBirth.getTime();
    const ageDate = new Date(diferencia);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Jeo", "09-09-1988");

console.log(mary);
console.log(mary.greeting());
console.log(mary.age());
console.log(mary.getsMarried("Ramirez"));
console.log(mary);
// console.log(mary.addNumbers(1, 2));

console.log(Person.addNumbers(1, 2));
