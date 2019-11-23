console.log("R1D72_Calories_Tracker_CreatingtheUIWithMaterializeCSS");
// Storage Controller

// Item Controller
const ItemController = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data structure
  const data = {
    items: [
      {
        id: 0,
        name: "Steak Dinner",
        calories: 1200
      },
      {
        id: 1,
        name: "Cookie",
        calories: 400
      },
      {
        id: 2,
        name: "Eggs",
        calories: 300
      }
    ],
    currentItem: null,
    totalCalories: 0
  };

  // Public Methods
  return {
    logData: function() {
      return data;
    }
  };
})();

// UI Controller
const UIController = (function() {
  // console.log("UI Controller");

  // Public Methods
  return {};
})();

// App Controller
const AppController = (function(ItemController, UIController) {
  console.log(ItemController.logData());

  // Public Methods
  return {
    init: function() {
      console.log("Initializing App");
    }
  };
})(ItemController, UIController);

AppController.init();
