const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderRef: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  customerName: { type: String, default: 'Guest Customer' },
  customerEmail: { type: String, default: 'guest@localstore.com' },
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      qty: Number
    }
  ],
  totalAmount: { type: Number, required: true },
  discountAmount: { type: Number, default: 0 },
  deliveryFee: { type: Number, default: 0 },
  status: { type: String, default: 'Packing & Delivery (30 mins)' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);
