const itemList = [];
const shoppingList = document.getElementById("shoppingList");

function getItem() {
  event.preventDefault()

  const item = document.getElementById("item");
  const newItem = item.value.trim();

  if(newItem === "") {
    alert("Input is empty. Item not added.");
    return;
  } 
  
  if(itemList.includes(newItem)) {
    alert(`${newItem} is already in the list`)
  } else {
    itemList.push(newItem);
    itemList.sort();
    //console.log(`Item added:`, newItem);
    //console.log(`updated: ${itemList}` )
  }


  item.value = '';
  document.getElementById("myForm").reset();
  removeList();
  makeList();
}

document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.querySelector("button");
  addButton.addEventListener("click", getItem);
});

function removeItem(event) {
  const item = event.currentTarget.textContent;

  const index = itemList.indexOf(item);
  if (index !== -1) {
      itemList.splice(index, 1);
      removeList();
      makeList();
  }
}

function removeList() {
  while(shoppingList.firstChild) {
    shoppingList.removeChild(shoppingList.firstChild);
  };
};

function makeList() {
  shoppingList.innerHTML = ""; // Clear the list before updating

    
    for (const item of itemList) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        
        listItem.addEventListener("click", removeItem); // Add click event listener
        shoppingList.appendChild(listItem);
    }
}

