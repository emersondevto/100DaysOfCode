console.log("R1D77_WorkingWith_EditState");
// Storage Controller
const StorageController = (function(){
  console.log('Storage Controller')
  
  // Public methods
  return{
      storeItem:function(item){
        let items = []
        // check if is any item in ls
        if(localStorage.getItem('items') === null)
        {
          items = []
          // push new item 
          items.push(item)
          // set localstorage 
          localStorage.setItem('items',JSON.stringify(items))
        }
        else {
          // get items from localstorage
          items = JSON.parse(localStorage.getItem('items'));
          // push new item
          items.push(item)
          // set localstorage 
          localStorage.setItem('items',JSON.stringify(items))
          
        }
        
        console.log(item)
      },
      getItemsFromStorage:function(){
        let items ;
        if(localStorage.getItem('items') === null)
        {
          items = []
        } else {
          items = JSON.parse(localStorage.getItem('items'));
        }
        console.log(items)
        return items;
      }
  }
})()

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
    setItems: function(items){
      data.items = items
    },
    clearAllItems: function() {
      data.items = [];
    },
    deleteItem: function(item) {
      const indexOfItem = data.items.indexOf(item);
      data.items.splice(indexOfItem, 1);
    },
    updateItem: function({ name, calories }) {
      calories = parseInt(calories);
      // data.currentItem.name = name;
      // data.currentItem.calories = calories;

      let found = null;
      data.items.find(element => {
        if (element.id === data.currentItem.id) {
          element.name = name;
          element.calories = calories;
          found = element;
          return true;
        }
      });
      // return data.currentItem;

      return found;
    },
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
  const DOM = {};

  const UISelectors = {
    itemList: "#item-list",
    itemName: "#item-name",
    itemCalories: "#item-calories",
    addBtn: ".add-btn",
    deleteBtn: ".delete-btn",
    updateBtn: ".update-btn",
    backBtn: ".back-btn",
    totalCalories: ".total-calories",
    clearBtn: ".clear-btn"
  };
  const viewListCalories = document.querySelector(UISelectors.itemList);

  // Public Methods
  return {
    clearAllListItems: function() {
      document.querySelector(UISelectors.itemList).innerHTML = "";
    },
    setDOMCurrentItem: function(item) {
      DOM.currentItem = item;
    },
    getDOMCurrentItem: function() {
      return DOM.currentItem;
    },
    updateListItem: function(item) {
      const newLi = UIController.buildItem(item);
      document.querySelector(UISelectors.itemList).replaceChild(newLi, DOM.currentItem);
    },
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
    buildItem: function(item) {
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
      return li;
    },
    insertItem: function(item) {
      const li = UIController.buildItem(item);
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement("beforeend", li);
    }
  };
})();

// App Controller
const AppController = (function(ItemController, StorageController, UIController) {
  // console.log(ItemController.logData());
  // Load event listeners
  const loadEventListeners = function() {
    // Get UI selectors
    const UISelectors = UIController.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);

    // Disable submit on enter
    document.addEventListener("keypress", function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    // CLick edit  item
    document.querySelector(UISelectors.itemList).addEventListener("click", itemEditClick);

    // Update Item event
    document.querySelector(UISelectors.updateBtn).addEventListener("click", itemUpdateSubmit);

    document.querySelector(UISelectors.backBtn).addEventListener("click", e => {
      UIController.clearEditState();
      e.preventDefault();
    });

    // Delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener("click", itemDeleteSubmit);

    // Clear items event
    document.querySelector(UISelectors.clearBtn).addEventListener("click", clearAllItemsClick);
  };

  const clearAllItemsClick = function(e) {
    // Delete all items from Item Controller
    ItemController.clearAllItems();
    // Remove from the ui
    UIController.clearAllListItems();

    // Get total calories
    const totalCalories = ItemController.getTotalCalories();

    // Add Total Calories to the UI
    UIController.showTotalCalories(totalCalories);

    // Hide Ul
    UIController.hideList();
    e.preventDefault();
  };

  // Delete item event
  const itemDeleteSubmit = function(e) {
    // get current UI item
    UIController.getDOMCurrentItem().remove();

    // get current item
    const currentItem = ItemController.getCurrentItem();

    // delete item
    ItemController.deleteItem(currentItem);

    // Get total calories
    const totalCalories = ItemController.getTotalCalories();

    // Add Total Calories to the UI
    UIController.showTotalCalories(totalCalories);

    UIController.clearEditState();
    e.preventDefault();
  };

  // Update Item event
  const itemUpdateSubmit = function(e) {
    // Get item input
    const input = UIController.getItemInput();

    // Update item
    const updatedItem = ItemController.updateItem(input);

    // Update UI
    UIController.updateListItem(updatedItem);

    // Get total calories
    const totalCalories = ItemController.getTotalCalories();

    // Add Total Calories to the UI
    UIController.showTotalCalories(totalCalories);

    UIController.clearEditState();
    e.preventDefault();
  };

  // CLick edit  item
  const itemEditClick = function(e) {
    if (e.target.classList.contains("edit-item")) {
      // get list item id (item-0, item-1)
      const itemDOMElement = e.target.parentNode.parentNode;
      const itemId = itemDOMElement.id;
      UIController.setDOMCurrentItem(itemDOMElement);

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
      UIController.insertItem(newItem);

      // Get total calories
      const totalCalories = ItemController.getTotalCalories();

      // Add Total Calories to the UI
      UIController.showTotalCalories(totalCalories);
      
      // Store in local storage 
      StorageController.storeItem(newItem)

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
      
      // Load data from localstorage
      let data = StorageController.getItemsFromStorage()
      // set data loaded from localStorage
      ItemController.setItems(data)

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
})(ItemController, StorageController, UIController);

AppController.init();
