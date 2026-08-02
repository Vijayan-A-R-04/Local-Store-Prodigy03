// Product Data (10 Items with Descriptions)
const products = [
  { 
    id: 1, 
    name: "Fresh Apples (1kg)", 
    price: 120, 
    image: "https://purepng.com/public/uploads/large/purepng.com-fresh-applefoodsweettastyhealthyfruitapple-9815246810124s9sd.png",
    description: "Crisp, juicy, and sweet red apples, freshly picked for maximum flavor."
  },
  { 
    id: 2, 
    name: "Organic Milk (1L)", 
    price: 60, 
    image: "https://media.istockphoto.com/id/854296630/photo/glass-of-milk-and-bottle-of-milk-on-the-wood-table.jpg?s=612x612&w=0&k=20&c=kPAzvagmpnzaBoUzRMxZ1_1mcsvGVbEOZG7pY_3b2Kc=",
    description: "Pure and fresh organic cow’s milk, free from preservatives."
  },
  { 
    id: 3, 
    name: "Brown Bread (1 pkt)", 
    price: 40, 
    image: "https://media.istockphoto.com/id/629793806/photo/bakery.jpg?s=612x612&w=0&k=20&c=RxA1oQEp51lRSHjCHZA4cQiA5wTyA9toKn-c-QXSIPw=",
    description: "Soft, healthy brown bread baked with whole wheat flour."
  },
  { 
    id: 4, 
    name: "Poultry Eggs (1 dozen)", 
    price: 90, 
    image: "https://media.istockphoto.com/id/1356240873/photo/closeup-macro-of-pasture-raised-farm-fresh-dozen-brown-eggs-store-bought-from-farmer-in.jpg?s=612x612&w=0&k=20&c=UFRlOU6tQBq5HVyQK_yhd3czoQlkifzdg10BsHJhGuk=",
    description: "Farm-fresh brown eggs, rich in protein and nutrients."
  },
  { 
    id: 5, 
    name: "Basmati Rice (1kg)", 
    price: 150, 
    image: "https://media.istockphoto.com/id/519309790/photo/pile-of-raw-basmati-rice-with-a-spoon.jpg?s=612x612&w=0&k=20&c=A9A87HykypkOo5qLMQm6bZjBQn83NE1NHMppw8-6Tnc=",
    description: "Premium long-grain Basmati rice with rich aroma and flavor."
  },
  { 
    id: 6, 
    name: "Cooking Oil (1L)", 
    price: 180, 
    image: "images/cooking_oil.png",
    description: "High-quality cooking oil, perfect for frying and sautéing."
  },
  { 
    id: 7, 
    name: "Tomatoes (1kg)", 
    price: 70, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0r-byVRq6LBwm5GN7t0RvO1Qdn7SLcYEew&s",
    description: "Fresh, juicy tomatoes perfect for salads and cooking."
  },
  { 
    id: 8, 
    name: "Potatoes (1kg)", 
    price: 50, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ950eCmi2uIfVhQubfVHecBgPI3jCPhK3LwA&s",
    description: "Fresh farm potatoes, ideal for boiling, roasting, or frying."
  },
  { 
    id: 9, 
    name: "Cheddar Cheese (200g)", 
    price: 250, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLd2u_6x2MeXTnjAvHqYiMhc3DNzFbwr09w&s",
    description: "Rich and creamy cheddar cheese, perfect for sandwiches."
  },
  { 
    id: 10, 
    name: "Green Tea (20 Bags)", 
    price: 110, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3R64Dwef5Uz14_DgRyMY188phb5CR6GH4Q&s",
    description: "Refreshing green tea bags packed with antioxidants."
  }
];

let cart = [];

// Load Products
function loadProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const item = document.createElement("div");
    item.classList.add("product");
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div style="padding: 10px;">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>₹${product.price}</strong></p>
      </div>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(item);
  });
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();

  // Show cart automatically if first item
  if (cart.length === 1) {
    document.getElementById("cart-section").classList.remove("hidden");
  }
}

// Update Cart
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

// Remove Item
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();

  // Hide cart if empty
  if (cart.length === 0) {
    document.getElementById("cart-section").classList.add("hidden");
  }
}

// Checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
  document.getElementById("cart-section").classList.add("hidden");
});

// Toggle Cart Visibility
function toggleCart() {
  if (cart.length > 0) {
    document.getElementById("cart-section").classList.toggle("hidden");
  }
}

// Load products on page load
loadProducts();
