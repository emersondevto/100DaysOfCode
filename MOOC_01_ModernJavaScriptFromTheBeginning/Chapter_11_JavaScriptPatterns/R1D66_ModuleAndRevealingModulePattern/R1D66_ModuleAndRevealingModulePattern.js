console.log("R1D66_ModuleAndRevealingModulePattern");
// Basic structure

// (function(params) {
//   // Declare private variables and functions

//   return {
//     // public variables and modules
//   };
// })();

// Standard Module Pattern
const UICtrl = (function() {
  let text = "hello world";

  const changeText = function() {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChangeText();

// Revealing Module Pattern
// IIFE
const ItemCtrl = (function() {
  let _data = []; // Private variables
  function add(item) {
    _data.push(item);
    console.log("Item Added");
  }

  function get(id) {
    return _data.find((item, index) => item.id === id);
  }

  return {
    add,
    get
  };
})();

ItemCtrl.add({ id: 1, name: "A" });
ItemCtrl.add({ id: 2, name: "B" });
console.log(ItemCtrl.get(1));
