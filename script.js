// Product Database with curated categories & verified images
const products = [
  { 
    id: 1, 
    name: "Fresh Apples (1kg)", 
    category: "produce",
    price: 120, 
    rating: "⭐ 4.8 (120)",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60",
    description: "Crisp, juicy, and sweet red apples, freshly picked from local orchards.",
    badge: "Fresh"
  },
  { 
    id: 2, 
    name: "Organic Whole Milk (1L)", 
    category: "dairy",
    price: 60, 
    rating: "⭐ 4.9 (210)",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60",
    description: "Pure and fresh organic cow’s milk, free from preservatives.",
    badge: "Organic"
  },
  { 
    id: 3, 
    name: "Whole Wheat Bread (1 pkt)", 
    category: "bakery",
    price: 40, 
    rating: "⭐ 4.6 (85)",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60",
    description: "Soft, healthy brown bread baked daily with whole grain wheat flour.",
    badge: "Daily Baked"
  },
  { 
    id: 4, 
    name: "Farm-Fresh Eggs (1 dozen)", 
    category: "dairy",
    price: 90, 
    rating: "⭐ 4.9 (340)",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&auto=format&fit=crop&q=60",
    description: "Pasture-raised brown eggs, rich in natural protein and omega-3.",
    badge: "Farm Fresh"
  },
  { 
    id: 5, 
    name: "Premium Basmati Rice (1kg)", 
    category: "bakery",
    price: 150, 
    rating: "⭐ 4.7 (190)",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=60",
    description: "Aromatic long-grain Basmati rice, aged for authentic flavor.",
    badge: "Premium"
  },
  { 
    id: 6, 
    name: "Golden Cooking Oil (1L)", 
    category: "pantry",
    price: 180, 
    rating: "⭐ 4.8 (145)",
    image: "images/cooking_oil.png",
    description: "Pure multi-purpose cooking oil, refined for healthy frying and sautéing.",
    badge: "Top Seller"
  },
  { 
    id: 7, 
    name: "Farm Red Tomatoes (1kg)", 
    category: "produce",
    price: 70, 
    rating: "⭐ 4.5 (95)",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=60",
    description: "Ripe, juicy farm-fresh red tomatoes perfect for salads & cooking.",
    badge: "Local"
  },
  { 
    id: 8, 
    name: "Organic Green Tea (25 bags)", 
    category: "snacks",
    price: 210, 
    rating: "⭐ 4.9 (160)",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
    description: "Antioxidant-rich organic green tea bags for daily wellness.",
    badge: "Organic"
  },
  { 
    id: 9, 
    name: "Dark Chocolate 70% (100g)", 
    category: "snacks",
    price: 140, 
    rating: "⭐ 4.9 (410)",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=500&auto=format&fit=crop&q=60",
    description: "Rich 70% cocoa artisanal dark chocolate bar with smooth texture.",
    badge: "Best Seller"
  },
  { 
    id: 10, 
    name: "California Almonds (250g)", 
    category: "snacks",
    price: 250, 
    rating: "⭐ 4.8 (230)",
    image: "images/almonds.png",
    description: "Crunchy premium California almonds packed with healthy nutrients.",
    badge: "Superfood"
  },
  { 
    id: 11, 
    name: "Aged Cheddar Cheese (200g)", 
    category: "dairy",
    price: 220, 
    rating: "⭐ 4.7 (115)",
    image: "images/cheddar_cheese.png",
    description: "Sharp and creamy natural cheddar cheese block.",
    badge: "Artisanal"
  },
  { 
    id: 12, 
    name: "Himalayan Pink Salt (1kg)", 
    category: "pantry",
    price: 95, 
    rating: "⭐ 4.9 (80)",
    image: "images/pink_salt.png",
    description: "Unrefined pure mineral-rich Himalayan pink salt granules.",
    badge: "Pure"
  }
];

// Application State
let cart = [];
let wishlist = [];
let activeCategory = 'all';
let searchQuery = '';
let sortBy = 'default';
let appliedDiscount = 0;

// Initialize App State
function initApp() {
  loadStoredState();
  applyTheme();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
}

// LocalStorage Handlers
function loadStoredState() {
  try {
    const savedCart = localStorage.getItem('localstore_cart');
    const savedWishlist = localStorage.getItem('localstore_wishlist');
    const savedTheme = localStorage.getItem('localstore_theme');

    if (savedCart) cart = JSON.parse(savedCart);
    if (savedWishlist) wishlist = JSON.parse(savedWishlist);
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  } catch (e) {
    console.error("Storage load error:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem('localstore_cart', JSON.stringify(cart));
    localStorage.setItem('localstore_wishlist', JSON.stringify(wishlist));
    localStorage.setItem('localstore_theme', document.documentElement.getAttribute('data-theme') || 'light');
  } catch (e) {
    console.error("Storage save error:", e);
  }
}

// Theme Toggle
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  document.getElementById('theme-icon').textContent = newTheme === 'light' ? '🌙' : '☀️';
  saveState();
  showToast(`Switched to ${newTheme} mode`, '🎨');
}

function applyTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  document.getElementById('theme-icon').textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

// Product Filtering & Sorting Engine
function getFilteredProducts() {
  return products.filter(p => {
    // Category Filter
    let matchesCategory = false;
    if (activeCategory === 'all') {
      matchesCategory = true;
    } else if (activeCategory === 'wishlist') {
      matchesCategory = wishlist.includes(p.id);
    } else {
      matchesCategory = p.category === activeCategory;
    }

    // Search Query Filter
    const query = searchQuery.trim().toLowerCase();
    let matchesSearch = true;
    if (query) {
      matchesSearch = p.name.toLowerCase().includes(query) || 
                        p.description.toLowerCase().includes(query) ||
                        p.badge.toLowerCase().includes(query);
    }

    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    return 0;
  });
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('product-list');
  const emptyState = document.getElementById('empty-state');
  const countEl = document.getElementById('results-count');
  if (!grid) return;

  const filtered = getFilteredProducts();
  countEl.textContent = `${filtered.length} Items`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  grid.innerHTML = filtered.map(p => {
    const isWishlisted = wishlist.includes(p.id);
    const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='100%' height='100%' fill='%23e2e8f0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23475569' font-family='sans-serif' font-size='16'>${encodeURIComponent(p.name)}</text></svg>`;

    return `
      <div class="product-card">
        <div class="product-img-wrapper">
          <span class="badge-tag">${p.badge}</span>
          <button class="wishlist-icon-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${p.id})" title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            ${isWishlisted ? '❤️' : '🤍'}
          </button>
          <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src='${fallbackSvg}';" loading="lazy">
        </div>
        <div class="product-info">
          <div class="product-rating">${p.rating}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-footer">
            <div class="product-price">₹${p.price}</div>
            <div class="product-actions">
              <button class="btn-icon-only" onclick="openQuickView(${p.id})" title="Quick View">👁️</button>
              <button class="add-to-cart-btn" onclick="addToCart(${p.id})">+ Add</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Category Pill Handler
function filterCategory(category) {
  activeCategory = category;
  
  // Update UI active pill
  const pills = document.querySelectorAll('.pill');
  pills.forEach(pill => {
    const text = pill.textContent.toLowerCase();
    if ((category === 'all' && text.includes('all')) ||
        (category === 'produce' && text.includes('produce')) ||
        (category === 'dairy' && text.includes('dairy')) ||
        (category === 'bakery' && text.includes('bakery')) ||
        (category === 'pantry' && text.includes('pantry')) ||
        (category === 'snacks' && text.includes('snacks'))) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  const sectionTitle = document.getElementById('section-title');
  if (category === 'wishlist') {
    sectionTitle.textContent = 'Saved Wishlist Items';
  } else if (category === 'all') {
    sectionTitle.textContent = 'All Products';
  } else {
    sectionTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  }

  renderProducts();
}

// Search Inputs
function handleSearch() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  searchQuery = input.value;
  
  if (searchQuery.length > 0) {
    clearBtn.classList.remove('hidden');
  } else {
    clearBtn.classList.add('hidden');
  }
  renderProducts();
}

function clearSearch() {
  const input = document.getElementById('search-input');
  input.value = '';
  searchQuery = '';
  document.getElementById('clear-search-btn').classList.add('hidden');
  renderProducts();
}

function resetFilters() {
  clearSearch();
  filterCategory('all');
  document.getElementById('sort-select').value = 'default';
  sortBy = 'default';
  renderProducts();
}

function handleSortChange() {
  sortBy = document.getElementById('sort-select').value;
  renderProducts();
}

// Wishlist Logic
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const item = products.find(p => p.id === productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed ${item.name} from Wishlist`, '💔');
  } else {
    wishlist.push(productId);
    showToast(`Added ${item.name} to Wishlist`, '❤️');
  }

  saveState();
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const countEl = document.getElementById('wishlist-count');
  if (countEl) countEl.textContent = wishlist.length;
}

// Cart Drawer Engine
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveState();
  updateCartUI();
  openCart();
  showToast(`Added ${product.name} to cart`, '🛒');
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveState();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveState();
  updateCartUI();
  showToast('Item removed from cart', '🗑️');
}

function applyPromo() {
  const input = document.getElementById('promo-input');
  const msgEl = document.getElementById('promo-msg');
  const code = input.value.trim().toUpperCase();

  if (code === 'FRESH10') {
    appliedDiscount = 0.10;
    msgEl.textContent = '🎉 10% Discount Applied!';
    msgEl.className = 'promo-msg success';
  } else if (code === 'LOCAL20') {
    appliedDiscount = 0.20;
    msgEl.textContent = '🎉 20% Super Discount Applied!';
    msgEl.className = 'promo-msg success';
  } else {
    appliedDiscount = 0;
    msgEl.textContent = '❌ Invalid Promo Code. Try FRESH10';
    msgEl.className = 'promo-msg error';
  }

  updateCartUI();
}

function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartSubtitle = document.getElementById('cart-subtitle');
  const cartItemsContainer = document.getElementById('cart-items');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountRow = document.getElementById('discount-row');
  const discountEl = document.getElementById('cart-discount');
  const deliveryCostEl = document.getElementById('delivery-cost');
  const totalEl = document.getElementById('cart-total');
  const progressText = document.getElementById('delivery-progress-text');
  const progressBar = document.getElementById('delivery-progress-bar');

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCount) cartCount.textContent = totalQty;
  if (cartSubtitle) cartSubtitle.textContent = `${totalQty} Items`;

  let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = subtotal * appliedDiscount;
  let deliveryFee = subtotal >= 500 || subtotal === 0 ? 0 : 30;
  let grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  // Delivery Progress
  const freeThreshold = 500;
  if (subtotal >= freeThreshold || subtotal === 0) {
    progressText.innerHTML = '🎉 You unlocked <strong>FREE Delivery!</strong>';
    progressBar.style.width = '100%';
  } else {
    const diff = freeThreshold - subtotal;
    progressText.innerHTML = `Add ₹${diff} more to unlock <strong>FREE Delivery!</strong>`;
    progressBar.style.width = `${Math.min(100, (subtotal / freeThreshold) * 100)}%`;
  }

  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 10px;">🛒</div>
          <p style="font-weight:600;">Your cart is empty</p>
          <small>Add fresh produce to start shopping</small>
        </div>
      `;
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${item.price} x ${item.qty} = ₹${item.price * item.qty}</div>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove item">✕</button>
        </div>
      `).join('');
    }
  }

  subtotalEl.textContent = subtotal.toFixed(2);
  if (appliedDiscount > 0) {
    discountRow.style.display = 'flex';
    discountEl.textContent = discount.toFixed(2);
  } else {
    discountRow.style.display = 'none';
  }

  deliveryCostEl.textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`;
  totalEl.textContent = grandTotal.toFixed(2);
}

// Drawer Open/Close
function openCart() {
  document.getElementById('cart-section')?.classList.remove('hidden');
  document.getElementById('cart-overlay')?.classList.remove('hidden');
}

function closeCart() {
  document.getElementById('cart-section')?.classList.add('hidden');
  document.getElementById('cart-overlay')?.classList.add('hidden');
}

function toggleCart() {
  const section = document.getElementById('cart-section');
  if (section && section.classList.contains('hidden')) {
    openCart();
  } else {
    closeCart();
  }
}

// Quick View Modal
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickview-modal');
  const body = document.getElementById('quickview-body');

  body.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" class="quickview-img">
    </div>
    <div class="quickview-details">
      <div>
        <span class="badge-tag">${product.badge}</span>
        <h2 style="margin: 10px 0 6px;">${product.name}</h2>
        <div style="color: var(--accent); font-size: 0.9rem; margin-bottom: 10px;">${product.rating}</div>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 15px;">${product.description}</p>
        <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 20px;">₹${product.price}</div>
      </div>
      <button class="btn btn-primary btn-block" onclick="addToCart(${product.id}); closeQuickViewModal();">Add to Basket</button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeQuickViewModal() {
  document.getElementById('quickview-modal')?.classList.add('hidden');
}

function closeQuickView(event) {
  if (event.target.id === 'quickview-modal') {
    closeQuickViewModal();
  }
}

// Checkout Celebration Modal
function checkout() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', '⚠️');
    return;
  }

  const orderRef = '#LS-' + Math.floor(1000 + Math.random() * 9000);
  document.getElementById('order-ref').textContent = orderRef;

  const summaryBox = document.getElementById('order-summary-box');
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPayable = document.getElementById('cart-total').textContent;

  summaryBox.innerHTML = `
    <strong>Items (${totalQty}):</strong>
    <ul style="margin: 8px 0; padding-left: 20px; color: var(--text-muted);">
      ${cart.map(i => `<li>${i.name} (x${i.qty})</li>`).join('')}
    </ul>
    <div style="margin-top: 10px; font-size: 1.05rem;"><strong>Total Paid: ₹${totalPayable}</strong></div>
  `;

  cart = [];
  appliedDiscount = 0;
  saveState();
  updateCartUI();
  closeCart();

  document.getElementById('checkout-modal')?.classList.remove('hidden');
}

function closeCheckoutModal(event) {
  if (!event || event.target.id === 'checkout-modal' || !event.target.classList.contains('modal-overlay')) {
    document.getElementById('checkout-modal')?.classList.add('hidden');
  }
}

// Floating Toast Notification
function showToast(message, icon = '✅') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Start App
document.addEventListener('DOMContentLoaded', initApp);
