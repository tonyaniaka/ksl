let basket = [];
const itemCountElement = document.getElementById("item-count");
const basketItemsElement = document.getElementById("basket-items");
const basketPanel = document.getElementById("basket-panel");

function addToBasket(drink, size, price) {
    const existingItem = basket.find(item => item.drink === drink && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
    } else {
        const item = {
            drink: drink,
            size: size,
            price: price,
            quantity: 1
        };
        basket.push(item);
    }
    updateBasketDisplay();
}

function updateBasketDisplay() {
    itemCountElement.innerText = basket.length;
    basketItemsElement.innerHTML = '';
    
    basket.forEach((item, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <div class="drink-details">
                <span>${item.drink} (${item.size})</span>
                <span class="drink-price">${item.price}</span>
            </div>
            <div class="quantity-controls">
                <button onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${index}, 1)">+</button>
                <button onclick="removeFromBasket(${index})">🗑</button>
            </div>
        `;

        basketItemsElement.appendChild(li);
    });
}

function updateQuantity(index, change) {
    if (basket[index].quantity + change > 0) {
        basket[index].quantity += change;
    }
    updateBasketDisplay();
}

function removeFromBasket(index) {
    basket.splice(index, 1);
    updateBasketDisplay();
}

function toggleBasket() {
    basketPanel.classList.toggle("show");
}

function submitCart() {
    // Get cart data as a string
    const cartData = JSON.stringify(basket);
    
    // Set cart data to form field
    document.getElementById('cart-data').value = cartData;
}