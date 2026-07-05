// Shopping Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add Product to Cart
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

// Remove Product from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update Product Quantity
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        updateCartUI();
    }
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart UI (sidebar display)
function updateCartUI() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartCountSpan = document.getElementById('cart-count');
    const totalPriceSpan = document.getElementById('total-price');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = totalItems;

    // Clear cart items display
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        totalPriceSpan.textContent = '0.00';
        return;
    }

    // Display cart items
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
    });

    // Calculate and display total
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Cart Sidebar Toggle
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('visible');
}

// Close Cart
function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('visible');
}

// Checkout Function
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    // Calculate total in USDT
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Store checkout data
    const checkoutData = {
        items: cart,
        totalUSD: totalPrice,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('checkout', JSON.stringify(checkoutData));

    // Redirect to payment page
    window.location.href = 'payment.html';
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'error' ? '#ff4757' : '#2ed573'};
        color: white;
        border-radius: 5px;
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    // Cart button
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.addEventListener('click', toggleCart);

    // Close cart button
    const closeCartBtn = document.getElementById('close-cart');
    closeCartBtn.addEventListener('click', closeCart);

    // Cart overlay
    const cartOverlay = document.getElementById('cart-overlay');
    cartOverlay.addEventListener('click', closeCart);

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', checkout);
});
