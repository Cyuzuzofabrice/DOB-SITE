# DOB-SITE E-Commerce Platform

A modern, guest-friendly e-commerce platform with cryptocurrency payment integration using USDT on BNB Smart Chain.

## 🎯 Features

- **No Account Required** - Customers browse and purchase without creating an account
- **Product Catalog** - Beautiful grid display of products with images and descriptions
- **Shopping Cart** - Add/remove items, adjust quantities with local storage persistence
- **Guest Checkout** - Quick checkout with shipping information collection
- **Crypto Payment** - Seamless USDT (BNB Smart Chain) payment integration
- **Order Confirmation** - Complete order summary with payment instructions
- **Responsive Design** - Mobile-friendly interface for all devices

## 📁 Project Structure

```
DOB-SITE/
├── index.html          # Main product listing page
├── payment.html        # Checkout form with shipping info
├── confirmation.html   # Order confirmation page
├── style.css           # Global styling
├── products.js         # Product data and display logic
├── cart.js             # Shopping cart functionality
└── README.md           # Documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Cyuzuzofabrice/DOB-SITE.git
   cd DOB-SITE
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or deploy to a web server (GitHub Pages, Vercel, Netlify, etc.)

### File-by-File Guide

#### `index.html`
Main product listing page with:
- Header with cart button
- Product grid display
- Shopping cart sidebar
- Cart overlay for better UX

#### `products.js`
Contains:
- Sample product data (8 products included)
- `displayProducts()` - Renders products to the page
- `getProductById(productId)` - Retrieves product details

**To add your own products:**
Edit the `products` array in `products.js`:
```javascript
const products = [
    {
        id: 1,
        name: "Your Product Name",
        price: 99.99,
        description: "Product description here",
        emoji: "🎧"  // Or use an image URL
    },
    // Add more products...
];
```

#### `cart.js`
Shopping cart functionality with:
- `addToCart(productId)` - Add items to cart
- `removeFromCart(productId)` - Remove items
- `updateQuantity(productId, quantity)` - Change quantities
- `checkout()` - Proceed to payment
- LocalStorage integration for cart persistence

#### `payment.html`
Checkout page featuring:
- Order summary with item breakdown
- Shipping information form
- USDT payment details
- Wallet address: `0xEf5359Ba264ba1c81B9d4884C90e0AE453eC407D`
- QR code for easy scanning
- Step-by-step payment instructions

#### `confirmation.html`
Order confirmation page with:
- Order number generation
- Payment status indicator
- Order details summary
- Wallet payment information
- Next steps for customer
- Copy wallet address button

#### `style.css`
Responsive styling with:
- Beautiful gradient backgrounds
- Card-based product layout
- Smooth animations and transitions
- Mobile-first responsive design
- Cart sidebar with smooth animations

## 💳 Payment Flow

```
Products Page
    ↓
Add to Cart
    ↓
View Cart / Checkout
    ↓
Checkout Page (Enter Shipping Info)
    ↓
Payment Instructions (USDT Amount & Wallet)
    ↓
Confirmation Page (Order #, Wallet Address, Next Steps)
    ↓
Customer Sends USDT
    ↓
Order Processed
```

## 🔐 Cryptocurrency Payment Details

### Wallet Address
```
0xEf5359Ba264ba1c81B9d4884C90e0AE453eC407D
```

### Network
- **Blockchain**: BNB Smart Chain
- **Token**: USDT (Tether)
- **Contract Address**: Check BNB Smart Chain explorer

### Payment Instructions for Customers

1. Open crypto wallet (MetaMask, Trust Wallet, Binance Wallet, etc.)
2. Ensure you're on **BNB Smart Chain** network
3. Send **USDT** to the wallet address
4. Use the **exact amount** shown on checkout
5. Save the transaction hash
6. Order processes automatically once payment is confirmed

⚠️ **Important**: Do NOT send other cryptocurrencies or use wrong networks - funds will be lost permanently!

## 🛠️ Customization

### Change Wallet Address
Edit these files and replace `0xEf5359Ba264ba1c81B9d4884C90e0AE453eC407D` with your wallet:
- `payment.html` - Line with wallet address
- `confirmation.html` - Line with wallet address

### Update Colors
Edit `style.css` - Change the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Products
Edit `products.js` and add to the `products` array:
```javascript
{
    id: 9,
    name: "New Product",
    price: 49.99,
    description: "Description here",
    emoji: "📦"
}
```

### Change Currency
Modify product prices and total calculations:
- All prices currently in USD (equivalent to USDT)
- Adjust exchange rates in `payment.html` if needed

## 📱 Features in Detail

### Shopping Cart
- **Persistent Storage**: Cart data saved in browser's localStorage
- **Add/Remove**: Easy product management
- **Quantity Control**: + and - buttons for quantity adjustment
- **Total Calculation**: Automatic price updates
- **Empty State**: Shows "Your cart is empty" message

### Checkout Form
- **Required Fields**: Name, Email, Phone, Country, Address, City, Zip
- **Optional Notes**: Special instructions for orders
- **Form Validation**: Built-in HTML5 validation
- **Responsive Layout**: Works on all screen sizes

### Payment Details
- **QR Code**: Auto-generated for wallet address scanning
- **Clear Instructions**: Step-by-step payment guide
- **Safety Warnings**: Important network and token warnings
- **Copy Button**: Easy wallet address copying

## 🔧 Local Storage

The site uses browser localStorage to maintain data:

```javascript
// Cart data
localStorage.getItem('cart')

// Checkout data
localStorage.getItem('checkout')

// Order data
localStorage.getItem('order')
```

Clear localStorage to reset:
```javascript
localStorage.clear();
```

## 🚀 Deployment

### GitHub Pages (Free)
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch as source
4. Your site will be live at: `https://yourusername.github.io/DOB-SITE`

### Vercel
1. Import repository from GitHub
2. Click Deploy
3. Site goes live automatically

### Netlify
1. Connect GitHub repository
2. Configure build settings (if needed)
3. Deploy with one click

### Traditional Hosting
- Upload all files to your web server
- Open `index.html` from your domain

## 📋 Testing Checklist

- [ ] Products display correctly
- [ ] Add to cart works
- [ ] Cart updates quantity and total
- [ ] Remove item from cart works
- [ ] Checkout form validates inputs
- [ ] Payment page shows correct total
- [ ] Wallet address displays correctly
- [ ] QR code appears
- [ ] Confirmation page generates order number
- [ ] Mobile responsive design works
- [ ] Cart persists after page refresh

## ⚠️ Important Notes

1. **USDT Network**: Ensure only USDT on BNB Smart Chain is accepted
2. **Wallet Security**: This is a client-side application; never expose private keys
3. **Payment Verification**: Implement backend verification for real business use
4. **Email Notifications**: Set up backend email service for order confirmations
5. **Order Tracking**: Consider adding database for order history

## 🔐 Security Recommendations

For production use:
1. **Backend Integration**: Add Node.js/Python backend for:
   - Order verification
   - Payment confirmation via blockchain explorer API
   - Email notifications
   - Order database storage

2. **Blockchain Integration**: Use Web3.js or ethers.js for:
   - Real-time payment verification
   - Wallet connection
   - Transaction monitoring

3. **SSL Certificate**: Use HTTPS for all transactions

4. **Environment Variables**: Store sensitive data securely

## 📞 Support

For issues or questions:
- Email: support@dob-site.com
- GitHub Issues: [Create an issue](https://github.com/Cyuzuzofabrice/DOB-SITE/issues)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 🎓 Learn More

- [BNB Smart Chain Documentation](https://docs.bnbchain.org/)
- [USDT on BSC](https://etherscan.io/token/0x55d398326f99059ff775485246999027b3197955)
- [MetaMask Guide](https://metamask.io/)
- [Web3.js Documentation](https://web3js.readthedocs.io/)

---

**Built with ❤️ by Fabrice**

Last Updated: July 5, 2026
