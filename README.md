# Local Store - Full-Stack E-Commerce Web Application

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **Fresh. Local. Delivered.**  
> A complete, production-ready full-stack e-commerce application powered by a Node.js Express REST API, MongoDB/Mongoose database ORM, JWT User Authentication, and modern glassmorphism frontend.

---

## 🌟 Architecture Overview

**Local Store** is a full-stack e-commerce platform designed for daily essentials shopping with live REST API integration, database persistence, and user session management.

```text
Local Store/
│
├── server.js                 # Express server & API routes mount
├── package.json              # Node.js backend dependencies
├── .env                      # Environment config (PORT, MONGO_URI, JWT_SECRET)
│
├── middleware/
│   └── authMiddleware.js     # JWT Authorization token validator
│
├── models/
│   ├── User.js               # User schema with bcrypt password hashing
│   ├── Product.js            # Product catalog schema
│   └── Order.js              # Order schema tracking purchases
│
├── routes/
│   ├── productRoutes.js      # GET /api/products API
│   ├── authRoutes.js         # POST /api/auth/register & /login API
│   └── orderRoutes.js        # POST & GET /api/orders API
│
├── images/                   # High-res local product image assets
├── index.html                # Frontend structure with Auth & Order modals
├── style.css                 # CSS Design tokens (Light/Dark themes, Glassmorphism)
└── script.js                # Frontend REST API integration & state engine
```

---

## ✨ Features

- **RESTful API Backend**: Express server delivering `/api/products`, `/api/auth`, and `/api/orders`.
- **Database Storage**: MongoDB (Mongoose ORM) with automatic in-memory fallback for instant setup.
- **JWT User Authentication**: Secure User Registration & Login with `bcryptjs` password hashing.
- **Order History Management**: Placed orders saved to backend database and viewable via "My Orders" modal.
- **Live Search & Category Filters**: Real-time search and filter tabs (`Produce`, `Dairy`, `Bakery`, `Pantry`, `Snacks`).
- **Cart & Promo Discount System**: Quantity controls, free delivery progress, and promo codes (`FRESH10`).
- **Dark/Light Mode**: CSS design tokens with persistent theme switcher.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Backend Server
```bash
npm start
```
The server will start on **`http://localhost:5050`**. Open `http://localhost:5050` in your web browser!

---

## 📡 REST API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products` | Fetch all products from database |
| `GET` | `/api/products/:id` | Fetch single product by ID |
| `POST` | `/api/auth/register` | Register a new user account |
| `POST` | `/api/auth/login` | Authenticate user & return JWT token |
| `GET` | `/api/auth/me` | Fetch authenticated user profile |
| `POST` | `/api/orders` | Save new order to database |
| `GET` | `/api/orders` | Fetch order history |

---

## 📜 License

Distributed under the [MIT License](LICENSE).
