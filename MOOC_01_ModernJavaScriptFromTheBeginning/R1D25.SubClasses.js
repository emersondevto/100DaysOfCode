console.log("Sub Classes");

class Person {
  constructor(firtsName, lastName) {
    this.firtsName = firtsName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firtsName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firtsName, lastName, phone, membership) {
    super(firtsName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 5000;
  }
}

const jhon = new Customer("Jhon", "Ramirez", "31431789992", "VIP");
console.log(jhon);

console.log(jhon.greeting());
console.log(Customer.getMembershipCost());

//No funciona en sentido contratio, siempre el de mayor nivel tiene todos los metodos de los inveles inferiores
console.log(Person.getMembershipCost());
