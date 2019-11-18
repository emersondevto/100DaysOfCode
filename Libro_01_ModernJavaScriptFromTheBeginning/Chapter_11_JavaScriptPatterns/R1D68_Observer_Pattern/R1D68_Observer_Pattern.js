console.log("Observer pattern");
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribe to ${fn.name}`);
  },

  unsubscribe: function(fn) {
    // Filter out from the list whatever matches de callback function. If there is not match, the callback gets the stay on the list. The filter return a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed rom ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-miliseconds").addEventListener("click", function(e) {
  click.subscribe(getCurrentMilliseconds);
});

document.querySelector(".unsub-miliseconds").addEventListener("click", function(e) {
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector(".sub-seconds").addEventListener("click", function(e) {
  click.subscribe(getCurrentSeconds);
});

document.querySelector(".unsub-seconds").addEventListener("click", function(e) {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector(".fire-event").addEventListener("click", function(e) {
  click.fire();
});

// Click handler
const getCurrentMilliseconds = function() {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrentSeconds = function() {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
};
