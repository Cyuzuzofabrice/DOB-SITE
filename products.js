// Sample Products Data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 89.99,
        description: "High-quality wireless headphones with noise cancellation",
        emoji: "🎧"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        description: "Feature-rich smartwatch with fitness tracking",
        emoji: "⌚"
    },
    {
        id: 3,
        name: "USB-C Cable",
        price: 19.99,
        description: "Durable fast-charging USB-C cable",
        emoji: "🔌"
    },
    {
        id: 4,
        name: "Phone Case",
        price: 29.99,
        description: "Protective and stylish phone case",
        emoji: "📱"
    },
    {
        id: 5,
        name: "Portable Speaker",
        price: 59.99,
        description: "Waterproof Bluetooth speaker with great sound",
        emoji: "🔊"
    },
    {
        id: 6,
        name: "Screen Protector",
        price: 12.99,
        description: "Tempered glass screen protector set",
        emoji: "🛡️"
    },
    {
        id: 7,
        name: "Power Bank",
        price: 45.99,
        description: "20000mAh fast-charging power bank",
        emoji: "🔋"
    },
    {
        id: 8,
        name: "Phone Stand",
        price: 14.99,
        description: "Adjustable phone stand for desk",
        emoji: "📐"
    }
];

// Display Products on Page Load
function displayProducts() {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        productsList.appendChild(productCard);
    });
}

// Get Product by ID
function getProductById(productId) {
    return products.find(p => p.id === productId);
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', displayProducts);
