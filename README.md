# Local Store - E-Commerce Web Application

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **Fresh. Local. Delivered.**  
> A lightweight, responsive, and intuitive client-side web application built for local grocery and essentials shopping.

---

## Overview

**Local Store** is a modern e-commerce web application designed to help users shop for daily essentials from local vendors. Built with zero external framework dependencies using pure HTML5, CSS3, and JavaScript, it offers a seamless shopping experience with real-time shopping cart management, automatic price calculation, and interactive checkout.

---

## Features

- **Dynamic Product Catalog**: Displays curated products with high-resolution imagery, detailed descriptions, and pricing in INR (₹).
- **Interactive Cart Sidebar**: Smooth slide-over side drawer showing selected items, quantities, and real-time total price updates.
- **Quick Add to Cart**: One-click product addition that automatically reveals the shopping cart drawer on the first selection.
- **Easy Item Removal**: Delete individual items from the cart with instant DOM update and subtotal recalculation.
- **Express Checkout**: Simple alert-driven order placement confirmation that resets state for subsequent purchases.
- **Fully Responsive Design**: Built with CSS Grid and Flexbox to deliver a smooth experience across desktops, tablets, and smartphones.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic markup structure (Navbar, Hero, Grid Layout, Cart Sidebar) |
| **CSS3** | Responsive Grid layout, Flexbox alignment, custom hover effects, sliding sidebar drawer |
| **Vanilla JavaScript (ES6+)** | Dynamic DOM rendering, cart state management, event handling, and calculation logic |

---

## Project Structure

```text
Local Store/
│
├── index.html        # Main HTML entry point containing structure and layouts
├── style.css         # Styling system including grid layout, animations, and cart drawer
└── script.js        # Core JavaScript application logic and product database
```

---

## Quick Start

No build tools, bundlers, or package installations are required.

### Option 1: Direct File Open
1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/Vijayan-A-R-04/Local-Store-Prodigy03.git
   ```
2. Navigate to the project folder and double-click `index.html` to open it in your default web browser.

### Option 2: Live Server (Recommended)
If using Visual Studio Code:
1. Install the **Live Server** extension.
2. Right-click on `index.html` and select **Open with Live Server**.

---

## Usage Guide

1. **Browse Products**: Scroll through the homepage to view fresh produce, dairy, bakery items, and groceries.
2. **Add to Cart**: Click **"Add to Cart"** under any product. The shopping cart sidebar will pop out automatically.
3. **Manage Cart**:
   - Click on the **Cart** button in the navigation header to toggle the cart sidebar at any time.
   - Click the remove button (**X**) next to any item in the cart to remove it.
4. **Checkout**: Click **"Checkout"** to finalize your order.

---

## Future Enhancements

- **Search & Category Filtering**: Search products by name or filter by categories (e.g., Produce, Dairy, Bakery).
- **Persistent Storage**: Save cart contents to `localStorage` so items persist across page reloads.
- **Dark Mode Toggle**: Modern dark-themed palette for enhanced visual comfort.
- **Payment Gateway Integration**: Integration with Stripe or Razorpay for live digital transactions.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">Crafted for fast and hassle-free local shopping.</p>
