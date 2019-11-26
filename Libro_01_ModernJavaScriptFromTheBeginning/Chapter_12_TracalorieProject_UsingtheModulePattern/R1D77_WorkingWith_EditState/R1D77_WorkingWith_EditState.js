console.log("R1D77_WorkingWith_EditState");
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
      // {
      //   id: 0,
      //   name: "Steak Dinner",
      //   calories: 1200
      // },
      // {
      //   id: 1,
      //   name: "Cookie",
      //   calories: 400
      // },
      // {
      //   id: 2,
      //   name: "Eggs",
      //   calories: 300
      // }
    ],
    currentItem: null,
    totalCalories: 0
  };

  // Public Methods
  return {
    getCurrentItem: function() {
      return data.currentItem;
    },
    setCurrentItem: function(item) {
      data.currentItem = item;
    },
    getItemById: function(id) {
      const found = data.items.find(element => element.id === id);
      return found;
    },
    getTotalCalories: function() {
      const reducer = (accumulator, item) => accumulator + item.calories;
      // Sum the calories from items
      const totalCalores = data.items.reduce(reducer, 0);
      // set total calories
      data.totalCalories = totalCalores;
      return data.totalCalories;
    },
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
    addBtn: ".add-btn",
    deleteBtn: ".delete-btn",
    updateBtn: ".update-btn",
    backBtn: ".back-btn",
    totalCalories: ".total-calories"
  };
  const viewListCalories = document.querySelector(UISelectors.itemList);

  // Public Methods
  return {
    addItemToForm: function() {
      const currentItem = ItemController.getCurrentItem();
      document.querySelector(UISelectors.itemName).value = currentItem.name;
      document.querySelector(UISelectors.itemCalories).value = currentItem.calories;
      UIController.showEditState();
    },
    showEditState: function() {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },
    clearEditState: function() {
      UIController.clearInputs();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    showTotalCalories: function(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
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
    clearInputs: function() {
      document.querySelector(UISelectors.itemName).value = "";
      document.querySelector(UISelectors.itemCalories).value = "";
    },
    hideList: function() {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    getSelectors: function() {
      return UISelectors;
    },
    // test: function() {
    //   console.log("This is a test");
    // },
    addListItem: function(item) {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = "block";
      // this.test();
      // Create li element
      const li = document.createElement("li");
      // Add class
      li.className = "collection-item";
      // Add ID
      li.id = `item-${item.id}`;
      // Add html
      li.innerHTML = `
        <strong>${item.name}</strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement("beforeend", li);
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
    document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);

    // Event icon click event
    document.querySelector(UISelectors.itemList).addEventListener("click", itemUpdateSubmit);
  };

  // Update item submit
  const itemUpdateSubmit = function(e) {
    if (e.target.classList.contains("edit-item")) {
      // get list item id (item-0, item-1)
      const itemId = e.target.parentNode.parentNode.id;

      // break into an array
      const listIdArray = itemId.split("-");

      // get the actual id
      const id = parseInt(listIdArray[1]);

      // get item
      const itemToEdit = ItemController.getItemById(id);

      // set current item
      ItemController.setCurrentItem(itemToEdit);

      // add item to form
      UIController.addItemToForm();
    }
    e.preventDefault();
  };

  // Add item submit
  const itemAddSubmit = function(e) {
    // Get form input from UI Controller
    const input = UIController.getItemInput();
    // Check for name and calories input
    if (input.name !== "" && input.calories !== "") {
      // add item
      const newItem = ItemController.addItem(input);
      // Add item to ui list
      UIController.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemController.getTotalCalories();

      // Add Total Calories to the UI
      UIController.showTotalCalories(totalCalories);

      // Clear Fields
      UIController.clearInputs();
    } else {
      console.error("Empty Form");
    }

    e.preventDefault();
  };

  // Public Methods
  return {
    init: function() {
      console.log("Initializing App");

      // Clear edit state / set initial state
      UIController.clearEditState();

      // Fetch items from data structure
      const items = ItemController.getItems();

      // Check if any items
      if (items.length === 0) {
        UIController.hideList();
      } else {
        // Populate list with items
        UIController.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemController.getTotalCalories();

      // Add Total Calories to the UI
      UIController.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  };
})(ItemController, UIController);

AppController.init();
