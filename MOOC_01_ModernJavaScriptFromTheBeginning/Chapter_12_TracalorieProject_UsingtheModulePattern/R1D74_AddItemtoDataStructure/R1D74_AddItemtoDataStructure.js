console.log("R1D74_AddItemtoDataStructure");
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
    },
    addItem: function({ name, calories }) {
      let id;
      // create ID
      if (data.items.length > 0) {
        id = data.items[data.items.length - 1].id + 1;
      } else {
        id = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      const newItem = new Item(id, name, calories);
      data.items.push(newItem);

      return newItem;
    }
  };
})();

// UI Controller
const UIController = (function() {
  // console.log("UI Controller");
  const UISelectors = {
    itemList: "#item-list",
    itemName: "#item-name",
    itemCalories: "#item-calories",
    itemAdd: ".add-btn"
  };
  const viewListCalories = document.querySelector(UISelectors.itemList);

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
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemName).value,
        calories: document.querySelector(UISelectors.itemCalories).value
      };
    },
    cleanForm: function() {
      document.querySelector(UISelectors.itemName).value = "";
      document.querySelector(UISelectors.itemCalories).value = "";
    },
    getSelectors: function() {
      return UISelectors;
    }
  };
})();

// App Controller
const AppController = (function(ItemController, UIController) {
  // console.log(ItemController.logData());
  // Load event listeners
  const loadEventListeners = function() {
    // Get UI selectors
    const UISelectors = UIController.getSelectors();

    // Add item event
    document.querySelector(UISelectors.itemAdd).addEventListener("click", itemAddSubmit);
  };

  // Add item submit
  const itemAddSubmit = function(e) {
    // Get form input from UI Controller
    const input = UIController.getItemInput();
    UIController.cleanForm();
    // Check for name and calories input
    if (input.name !== "" && input.calories !== "") {
      // add item
      const newItem = ItemController.addItem(input);
    } else {
      console.error("Empty Form");
    }

    e.preventDefault();
  };

  // Public Methods
  return {
    init: function() {
      console.log("Initializing App");

      // Fetch items from data structure
      const items = ItemController.getItems();

      // Populate list with items
      UIController.populateItemList(items);

      // Load event listeners
      loadEventListeners();
    }
  };
})(ItemController, UIController);

AppController.init();
