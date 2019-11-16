console.log("Singleton Pattern");
//

var Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({
      name: "Emerson"
    });
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);

class Connection {
  constructor() {
    this.name = "Connection";
  }
}

const singleton = Symbol();
const singletonEnforcer = Symbol();
const uniqueObjet = Symbol("Singleton");

class SingletonTest {
  constructor(enforcer) {
    if (enforcer != singletonEnforcer) throw "Cannot construct singleton";
    // else {
    //   this[uniqueObjet] =
    // }
  }

  static get instance() {
    if (!this[singleton]) {
      // this[singleton] = new SingletonTest(singletonEnforcer);
      this[singleton] = new Connection();
    }
    return this[singleton];
  }
}

// export default SingletonTest

// import SingletonTest from "singleton-test";
const instance1 = SingletonTest.instance;
const instance2 = SingletonTest.instance;

console.log(instance1 === instance2);
const testA = { name: "test" };
console.log(testA == testA);
