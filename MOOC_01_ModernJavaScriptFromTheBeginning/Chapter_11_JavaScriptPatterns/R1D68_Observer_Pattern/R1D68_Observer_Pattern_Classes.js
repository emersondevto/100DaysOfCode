console.log("Observer pattern");
class EventObserverClass {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribe to ${fn.name}`);
  }
  unsubscribe(fn) {
    // Filter out from the list whatever matches de callback function. If there is not match, the callback gets the stay on the list. The filter return a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed rom ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const clickClasses = new EventObserverClass();

// Event Listeners
document.querySelector(".sub-miliseconds").addEventListener("click", function(e) {
  clickClasses.subscribe(getCurrentMillisecondsClasses);
});

document.querySelector(".unsub-miliseconds").addEventListener("click", function(e) {
  clickClasses.unsubscribe(getCurrentMillisecondsClasses);
});

document.querySelector(".sub-seconds").addEventListener("click", function(e) {
  clickClasses.subscribe(getCurrentSecondsClasses);
});

document.querySelector(".unsub-seconds").addEventListener("click", function(e) {
  clickClasses.unsubscribe(getCurrentSecondsClasses);
});

document.querySelector(".fire-event").addEventListener("click", function(e) {
  clickClasses.fire();
});

// Click handler
const getCurrentMillisecondsClasses = function() {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrentSecondsClasses = function() {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
};

const func1 = function() {
  console.log("func 1");
};

const func2 = function() {
  console.log("func 2");
};

document.querySelector(".many-function-to-same-event").addEventListener("click", func1);

document.querySelector(".many-function-to-same-event").addEventListener("click", func2);
