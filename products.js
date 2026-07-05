// Sample Products Data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 89.99,
        description: "High-quality wireless headphones with noise cancellation",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        description: "Feature-rich smartwatch with fitness tracking",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
    },
    {
        id: 3,
        name: "USB-C Cable",
        price: 19.99,
        description: "Durable fast-charging USB-C cable",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop"
    },
    {
        id: 4,
        name: "Phone Case",
        price: 29.99,
        description: "Protective and stylish phone case",
        image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop"
    },
    {
        id: 5,
        name: "Portable Speaker",
        price: 59.99,
        description: "Waterproof Bluetooth speaker with great sound",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop"
    },
    {
        id: 6,
        name: "Screen Protector",
        price: 12.99,
        description: "Tempered glass screen protector set",
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop"
    },
    {
        id: 7,
        name: "Power Bank",
        price: 45.99,
        description: "20000mAh fast-charging power bank",
        image: "https://images.unsplash.com/photo-1609042231696-ba4f8166ae37?w=500&h=500&fit=crop"
    },
    {
        id: 8,
        name: "Phone Stand",
        price: 14.99,
        description: "Adjustable phone stand for desk",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop"
    }
];

// Display Products on Page Load
function displayProducts() {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Use image if available, fallback to placeholder
        const imageHTML = product.image 
            ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover;">`
            : `<div class="product-image-placeholder">📦</div>`;
        
        productCard.innerHTML = `
            <div class="product-image">${imageHTML}</div>
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
