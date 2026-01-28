import menuArray from "./data.js"

const cart = []

document.addEventListener('click', function(e) {
    const completeOrderBtn = e.target.closest('.complete-order');

    if (completeOrderBtn) {
        completeOrderButton();   // ← this opens/shows the modal
    }

    const addButtonItem = e.target.closest('.add-button');
    
    if (!addButtonItem) return;

    const container = document.querySelector('.item-checkout');
    if (!container) {
        console.warn("Container .item-checkout not found");
        return;
    }

    const newRow = document.createElement('div');
    newRow.classList.add('row');

    const itemFoodName = addButtonItem.dataset.name || 'Unnamed item';
    const newFoodItem = document.createElement('p');
    newFoodItem.classList.add('item-name');
    newFoodItem.textContent = itemFoodName;
    newRow.appendChild(newFoodItem);

    const copyRemoveButton = document.createElement('button');
    copyRemoveButton.classList.add('remove-button');
    copyRemoveButton.textContent = 'Remove';
    copyRemoveButton.dataset.price = addButtonItem.dataset.price;
    newRow.appendChild(copyRemoveButton);

    const foodPrices = addButtonItem.dataset.price;
    const priceValue = parseFloat(foodPrices);
    const newPrice = document.createElement('p');
    newPrice.classList.add('checkout-price');
    
    if (!isNaN(priceValue)) {
        newPrice.textContent = '$' + priceValue.toFixed(2);
    } else {
        newPrice.textContent = '$0.00';
        console.warn('Invalid price value:', foodPrices);
    }
    
    newRow.appendChild(newPrice);

    container.appendChild(newRow);
})

function payBtn(customerName = "Customer") {
    const orderContainer= document.createElement('div')
    orderContainer.className = "pay-container"
    
    const thankyouOrder = document.createElement('div')
    thankyouOrder.className = 'thankyou-text'
    
    thankyouOrder.innerHTML = `
        <h4>Thanks, ${customerName}! Your order is on its way!</h4>`
        
    orderContainer.appendChild(thankyouOrder)
    document.body.appendChild(orderContainer)
}

function completeOrderButton() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    const modalCreditCard = document.createElement('div')
    modalCreditCard.className = "credit-card-details"
    modalCreditCard.innerHTML = `
            <h3 class="modal-header">Enter card details</h3>
            <form>
                <input class="modal-name" id="customer-name" type="text" placeholder="Enter your name" required></input>
                <input class="modal-card-number" type="text" placeholder="Enter card number" required></input>
                <input class="modal-CVV" type="text" maxlength="4" placeholder="Enter CVV" required></input>
                <button class="paybtn">Pay</button>
            </form>
            
            <button class="close-modal">× Close</button>

        `
    overlay.appendChild(modalCreditCard);
    document.body.appendChild(overlay)
       
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.classList.contains('close-modal')) {
            overlay.remove();
        }
    });
    
    const payButton = modalCreditCard.querySelector('.paybtn'); 

    if (payButton) {
        payButton.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const nameInput = document.getElementById('customer-name')
            const name = nameInput ? nameInput.value.trim() : "Customer"
            const checkout = document.getElementById('checkout-section')
            if (checkout) {
                checkout.remove()
            } 
            
            overlay.remove();  
            payBtn(name);
        })
    }
}

function cartTotal() {
    return cart.reduce((sum, price) => sum + price, 0)
}

function totalPrice() {
    document.addEventListener('click', function(e) {
        const addBtn = e.target.closest('.add-button')
        
        if(!addBtn) return
                
        const priceString = addBtn.dataset.price
        const price = parseFloat(priceString)
        
        if (Number.isNaN(price)) {
            console.warn("Invalid price:", priceStr);
            return;
        }
        
        cart.push(price)
        
        const totalPrice = document.querySelector(".total-price")
        
        if (totalPrice) {
            totalPrice.textContent = `$${cartTotal().toFixed(2)}`
        } 
    })
}

function removeItem() {

    document.addEventListener('click', function(e) {
        const deleteItem = e.target.closest('.remove-button');

        if(!deleteItem) return 
        
        const row = deleteItem.closest('.row')
        
        if (!row) return;
        
        const rowPriceString = deleteItem.dataset.price
        const price = parseFloat(rowPriceString)
            
        if (!isNaN(price)) {
            const index = cart.lastIndexOf(price);
        
            if (index !== -1) {
                cart.splice(index, 1);
            } else {
                console.warn(`Price $${price} not found in cart`);
            }
            
        } else {
            console.warn("No valid price found on remove button:", rowPriceString);
        } 
                       
        row.remove()
                
        const totalPrice = document.querySelector(".total-price")
   
        if (totalPrice) {
            totalPrice.textContent = `$${cartTotal().toFixed(2)}`
        }
    })
}

function addCheckout() {
    
    return `<div class="checkout" id="checkout-section">
                <h3>Your Order</h3>
                <div class="item-checkout">
                    <div class="row"></div>
                </div>
                <div class="totals">
                    <h3>Total Price: </h3>
                    <h3 class="total-price">$0.00</h3>
                </div>
                <button class="complete-order">Complete Order</button>
            </div>`
}


function createMenuItemHtml(item) {
    return `
        <div class="menu-container">
            <div class="emoji">${item.emoji}</div>
            <div class="data-container">
                <p class="menu-name">${item.name}</p>
                <p class="menu-ingredients">${item.ingredients}</p>
                <p class="menu-price">$${item.price}</p>  
            </div>
            <button class="add-button" id="add-button" data-id="${item.id}" data-price="${item.price}" data-name="${item.name}">+</button>
        </div>`
}

function getFeedHtml() {
    let feedHtml=``
    
    const itemHTML = menuArray.map(item => createMenuItemHtml(item)).join('')
    const checkoutHTML = addCheckout()
        
    feedHtml +=`
        <header class="container">
            <img src="/images/headerImg.png" height="167px" alt="Suite's Diner header">
            <h1 class="header-h1">Suite's Diner</h1>
            <p class="header-p">The best burgers and pizza in town</p>
        </header>
        ${itemHTML}
        ${checkoutHTML}

    `
    return feedHtml
}

function render() {
    document.getElementById('header').innerHTML = getFeedHtml()
}

render()
totalPrice()
removeItem()
