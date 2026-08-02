const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: String, default: "⭐ 4.8" },
  image: { type: String, required: true },
  description: { type: String, required: true },
  badge: { type: String, default: "Fresh" }
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
