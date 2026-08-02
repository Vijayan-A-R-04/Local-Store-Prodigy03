const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// In-memory fallback orders database
const memoryOrders = [];

// POST /api/orders
router.post('/', async (req, res) => {
  try {
    const { items, totalAmount, discountAmount, deliveryFee, customerName, customerEmail } = req.body;
    if (!items || items.length === 0 || !totalAmount) {
      return res.status(400).json({ success: false, message: 'Order items and total amount are required' });
    }

    const orderRef = '#LS-' + Math.floor(1000 + Math.random() * 9000);
    const newOrderData = {
      orderRef,
      customerName: customerName || 'Guest Customer',
      customerEmail: customerEmail || 'guest@localstore.com',
      items,
      totalAmount,
      discountAmount: discountAmount || 0,
      deliveryFee: deliveryFee || 0,
      status: 'Packing & Delivery (30 mins)',
      createdAt: new Date()
    };

    try {
      const order = await Order.create(newOrderData);
      return res.status(201).json({
        success: true,
        message: 'Order created successfully',
        data: order
      });
    } catch (dbErr) {
      // Memory fallback
      memoryOrders.unshift(newOrderData);
      return res.status(201).json({
        success: true,
        message: 'Order created successfully',
        data: newOrderData
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/orders
router.get('/', async (req, res) => {
  try {
    let orders = await Order.find().sort({ createdAt: -1 }).lean().catch(() => null);
    if (!orders || orders.length === 0) {
      orders = memoryOrders;
    }
    res.json({ success: true, count: orders.length, data: orders });
  } catch (error) {
    res.json({ success: true, count: memoryOrders.length, data: memoryOrders });
  }
});

module.exports = router;
