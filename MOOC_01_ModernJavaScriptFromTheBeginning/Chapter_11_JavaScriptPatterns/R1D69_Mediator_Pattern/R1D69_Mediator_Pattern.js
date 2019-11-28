console.log("Mediator pattern");

const User = function(name) {
  this.name = name;
  this.chatRoom = null;
};

User.prototype = {
  send: function(message, to) {
    this.chatRoom.send(message, this, to);
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

const ChatRoom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatRoom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // Single user message
        to.recieve(message, from);
      } else {
        // Mass message
        for (const key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  };
};

const brad = new User("Brad");
const jeff = new User("Jeff");
const sara = new User("Sara");

const chatroom = new ChatRoom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send("Hola Jeff", jeff);
sara.send("Hi Brad, you are the best dev ever", brad);
jeff.send("Hello everyone!!!!");
