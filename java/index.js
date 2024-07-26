let cart = {
    Coke: { quantity: 0, price: 1.50 },
    beer: { quantity: 0, price: 2.00 },
    life: { quantity: 0, price: 2.00 },
    can: { quantity: 0, price: 2.00 },
    canhero: { quantity: 0, price: 2.00 },
    BottleGuiness: { quantity: 0, price: 2.00 },
    Desperado: { quantity: 0, price: 2.00 },
    GuinessBottle: { quantity: 0, price: 2.00 },
    Champion: { quantity: 0, price: 2.00 },
    PlasticCoke: { quantity: 0, price: 2.00 },
    Heineken: { quantity: 0, price: 2.00 },
    Zagg: { quantity: 0, price: 2.00 },
    Guiness: { quantity: 0, price: 2.00 },
    Star: { quantity: 0, price: 2.00 },
};

function updateQuantity(drink, change) {
    const quantityField = document.getElementById(`${drink}-quantity`);
    const currentQuantity = parseInt(quantityField.value);

    // Update quantity within limits (0 or more)
    const newQuantity = Math.max(currentQuantity + change, 0);
    quantityField.value = newQuantity;
    cart[drink].quantity = newQuantity;

    updateCartSummary();
}

function updateCartSummary() {
    const cartItems = document.getElementById("cart-items");
    const totalAmount = document.getElementById("total-amount");
    cartItems.innerHTML = ""; // Clear the list

    let total = 0;

    // Loop through the cart items and display selected ones
    for (let drink in cart) {
        if (cart[drink].quantity > 0) {
            const item = document.createElement("li");
            item.textContent = `${drink}: ${cart[drink].quantity} x $${cart[drink].price.toFixed(2)}`;
            cartItems.appendChild(item);
            total += cart[drink].quantity * cart[drink].price;
        }
    }

    totalAmount.textContent = `Total: $${total.toFixed(2)}`;
}

function submitOrder() {
    let orderSummary = "Your order:\n";
    let total = 0;

    for (let drink in cart) {
        if (cart[drink].quantity > 0) {
            orderSummary += `${drink}: ${cart[drink].quantity} x $${cart[drink].price.toFixed(2)}\n`;
            total += cart[drink].quantity * cart[drink].price;
        }
    }

    orderSummary += `\nTotal: $${total.toFixed(2)}`;

    // Update hidden field with the order summary
    document.getElementById('order-summary').value = orderSummary;

    // No need for alert as Formspree will handle form submission
}
