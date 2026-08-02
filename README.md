# Local Store - Full-Stack E-Commerce Application

Local Store is a full-stack e-commerce web application designed for online grocery and daily essentials shopping. The platform features a responsive client interface, a Node.js Express RESTful API backend, a MongoDB database layer via Mongoose ORM, JSON Web Token (JWT) authentication, and local state persistence.

---

## Technical Stack

### Frontend (Client-Side)
- HTML5: Semantic layout and accessibility structures.
- CSS3: Custom CSS design tokens, light/dark mode theme system, glassmorphism UI components, and responsive grid system.
- JavaScript (ES6+): Client state management, real-time search, category filtering, cart management, promo discount calculation, and API communications.

### Backend (Server-Side)
- Node.js: Event-driven JavaScript runtime environment.
- Express.js: Web application framework for routing, CORS management, static file serving, and REST API controllers.
- JWT (jsonwebtoken): Token-based authentication for user sessions.
- bcryptjs: Password hashing using 10-round salt encryption.

### Database Layer
- MongoDB: NoSQL document database.
- Mongoose ORM: Schema modeling for Users, Products, and Orders.

---

## System Architecture and Directory Layout

```text
Local Store/
│
├── server.js                 # Primary Express server entry point
├── package.json              # Backend dependencies and scripts configuration
├── .env                      # Environment variables configuration
├── .gitignore                # Excluded files for version control
│
├── middleware/
│   └── authMiddleware.js     # JWT authorization header validation middleware
│
├── models/
│   ├── User.js               # User account schema with password hashing
│   ├── Product.js            # Store product inventory schema
│   └── Order.js              # Order history schema
│
├── routes/
│   ├── productRoutes.js      # REST API endpoints for product retrieval
│   ├── authRoutes.js         # REST API endpoints for user registration and login
│   └── orderRoutes.js        # REST API endpoints for order placement and history
│
├── images/                   # Product image assets
├── index.html                # Frontend single-page application structure
├── style.css                 # Application styling and design token system
└── script.js                # Frontend API integration and event controller
```

---

## Installation and Operations Guide

### Prerequisites
- Node.js version 18.0.0 or higher
- npm (Node Package Manager) version 8.0.0 or higher
- Optional: MongoDB local server or MongoDB Atlas URI

### Step 1: Install Dependencies
Open a terminal in the project root folder (`d:\Local Store`) and run:

```bash
npm install
```

### Step 2: Configure Environment Variables
Create or inspect the `.env` file in the project root directory:

```env
PORT=5050
MONGO_URI=mongodb://127.0.0.1:27017/localstore_db
JWT_SECRET=localstore_super_secret_jwt_key_2026
```

### Step 3: Run Backend Server
To launch the backend server:

```bash
npm start
```

The application server will start on `http://localhost:5050`. Open this URL in any web browser to access the application.

---

## REST API Reference

### 1. Product Management Endpoints

| HTTP Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/products` | Retrieve all inventory products | No |
| `GET` | `/api/products/:id` | Retrieve single product details by ID | No |

### 2. User Authentication Endpoints

| HTTP Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user account | No |
| `POST` | `/api/auth/login` | Authenticate credentials and issue JWT token | No |
| `GET` | `/api/auth/me` | Fetch authenticated user profile details | Yes (Bearer Token) |

### 3. Order Operations Endpoints

| HTTP Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/orders` | Submit a new order to the backend | No |
| `GET` | `/api/orders` | Retrieve order history | No |

---

## Core Application Capabilities

1. User Authentication System:
   - Supports user registration and sign-in via modal interface.
   - Encrypts user passwords using bcrypt before saving.
   - Stores JWT authentication tokens in local storage for session maintenance.

2. Product Catalog and Search Engine:
   - Dynamic product grid displaying item names, prices, categories, ratings, and badges.
   - Real-time search filter by title, description, or badge.
   - Category filtering across Fresh Produce, Dairy, Bakery, Pantry, and Snacks.
   - Sorting options by Price (Low to High, High to Low) and Name (A to Z).

3. Shopping Cart and Checkout Operations:
   - Slide-out cart drawer supporting quantity modification and item removal.
   - Free delivery progress calculator for orders matching threshold limits.
   - Promo code discount engine supporting promotional codes (e.g., FRESH10, LOCAL20).
   - Order placement with automatic reference code generation.

4. Saved Items and Wishlist System:
   - Toggle product favorites with visual active state indication.
   - Filter grid view to inspect saved items.

5. Order History Operations:
   - Order history modal displaying reference numbers, item summaries, total amounts, purchase dates, and status tracking.

6. Interface Customization:
   - Light and dark theme switcher with preference persistence.

---

## License

This project is licensed under the MIT License.
