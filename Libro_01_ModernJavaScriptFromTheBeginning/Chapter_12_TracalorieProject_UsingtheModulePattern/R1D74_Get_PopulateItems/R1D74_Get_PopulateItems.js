console.log("R1D74_Get_PopulateItems");
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
    },
    getItems: function() {
      return data.items;
    }
  };
})();

// UI Controller
const UIController = (function() {
  // console.log("UI Controller");
  const UISelectors = {
    itemList: "item-list"
  };
  const viewListCalories = document.getElementById(UISelectors.itemList);

  // Public Methods
  return {
    populateItemList: function(items) {
      let html = "";
      items.forEach(function(item) {
        html += `
        <li class="collection-item" id="item-0">
          <strong>${item.name}</strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
        `;
      });
      viewListCalories.innerHTML = html;
    }
  };
})();

// App Controller
const AppController = (function(ItemController, UIController) {
  console.log(ItemController.logData());

  // Public Methods
  return {
    init: function() {
      console.log("Initializing App");

      // Fetch items from data structure
      const items = ItemController.getItems();

      // Populate list with items
      UIController.populateItemList(items);
    }
  };
})(ItemController, UIController);

AppController.init();
