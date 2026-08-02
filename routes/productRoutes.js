const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Initial Product Database Seed Data
const initialProducts = [
  { id: 1, name: "Fresh Apples (1kg)", category: "produce", price: 120, rating: "⭐ 4.8 (120)", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60", description: "Crisp, juicy, and sweet red apples, freshly picked from local orchards.", badge: "Fresh" },
  { id: 2, name: "Organic Whole Milk (1L)", category: "dairy", price: 60, rating: "⭐ 4.9 (210)", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60", description: "Pure and fresh organic cow’s milk, free from preservatives.", badge: "Organic" },
  { id: 3, name: "Whole Wheat Bread (1 pkt)", category: "bakery", price: 40, rating: "⭐ 4.6 (85)", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60", description: "Soft, healthy brown bread baked daily with whole grain wheat flour.", badge: "Daily Baked" },
  { id: 4, name: "Farm-Fresh Eggs (1 dozen)", category: "dairy", price: 90, rating: "⭐ 4.9 (340)", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&auto=format&fit=crop&q=60", description: "Pasture-raised brown eggs, rich in natural protein and omega-3.", badge: "Farm Fresh" },
  { id: 5, name: "Premium Basmati Rice (1kg)", category: "bakery", price: 150, rating: "⭐ 4.7 (190)", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=60", description: "Aromatic long-grain Basmati rice, aged for authentic flavor.", badge: "Premium" },
  { id: 6, name: "Golden Cooking Oil (1L)", category: "pantry", price: 180, rating: "⭐ 4.8 (145)", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60", description: "Pure multi-purpose cooking oil, refined for healthy frying and sautéing.", badge: "Top Seller" },
  { id: 7, name: "Farm Red Tomatoes (1kg)", category: "produce", price: 70, rating: "⭐ 4.5 (95)", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=60", description: "Ripe, juicy farm-fresh red tomatoes perfect for salads & cooking.", badge: "Local" },
  { id: 8, name: "Organic Green Tea (25 bags)", category: "snacks", price: 210, rating: "⭐ 4.9 (160)", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60", description: "Antioxidant-rich organic green tea bags for daily wellness.", badge: "Organic" },
  { id: 9, name: "Dark Chocolate 70% (100g)", category: "snacks", price: 140, rating: "⭐ 4.9 (410)", image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=500&auto=format&fit=crop&q=60", description: "Rich 70% cocoa artisanal dark chocolate bar with smooth texture.", badge: "Best Seller" },
  { id: 10, name: "California Almonds (250g)", category: "snacks", price: 250, rating: "⭐ 4.8 (230)", image: "https://images.unsplash.com/photo-1508061252966-17df56c32c25?w=500&auto=format&fit=crop&q=60", description: "Crunchy premium California almonds packed with healthy nutrients.", badge: "Superfood" },
  { id: 11, name: "Aged Cheddar Cheese (200g)", category: "dairy", price: 220, rating: "⭐ 4.7 (115)", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&auto=format&fit=crop&q=60", description: "Sharp and creamy natural cheddar cheese block.", badge: "Artisanal" },
  { id: 12, name: "Himalayan Pink Salt (1kg)", category: "pantry", price: 95, rating: "⭐ 4.9 (80)", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=60", description: "Unrefined pure mineral-rich Himalayan pink salt granules.", badge: "Pure" }
];

// GET /api/products
router.get('/', async (req, res) => {
  try {
    let products = await Product.find().lean();
    if (!products || products.length === 0) {
      products = initialProducts;
    }
    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.json({ success: true, count: initialProducts.length, data: initialProducts });
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    let product = await Product.findOne({ id: productId }).lean();
    if (!product) {
      product = initialProducts.find(p => p.id === productId);
    }
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (error) {
    const product = initialProducts.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  }
});

module.exports = router;
