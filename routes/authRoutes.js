const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// In-memory fallback users database if MongoDB is offline
const memoryUsers = [];

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and password' });
    }

    let existingUser = await User.findOne({ email }).catch(() => null);
    if (existingUser || memoryUsers.find(u => u.email === email.toLowerCase())) {
      return res.status(400).json({ success: false, message: 'Email address is already registered' });
    }

    try {
      const user = await User.create({ name, email, password });
      const token = jwt.sign(
        { id: user._id, name: user.name, email: user.email, role: user.role },
        process.env.JWT_SECRET || 'localstore_super_secret_jwt_key_2026',
        { expiresIn: '7d' }
      );
      return res.status(201).json({
        success: true,
        message: 'Account registered successfully',
        token,
        user: { id: user._id, name: user.name, email: user.email, role: user.role }
      });
    } catch (dbErr) {
      // Memory fallback
      const newUser = { id: Date.now().toString(), name, email: email.toLowerCase(), password, role: 'customer' };
      memoryUsers.push(newUser);
      const token = jwt.sign(
        { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role },
        process.env.JWT_SECRET || 'localstore_super_secret_jwt_key_2026',
        { expiresIn: '7d' }
      );
      return res.status(201).json({
        success: true,
        message: 'Account registered successfully',
        token,
        user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role }
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    let user = await User.findOne({ email }).catch(() => null);
    if (user) {
      const isMatch = await user.matchPassword(password);
      if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid credentials' });

      const token = jwt.sign(
        { id: user._id, name: user.name, email: user.email, role: user.role },
        process.env.JWT_SECRET || 'localstore_super_secret_jwt_key_2026',
        { expiresIn: '7d' }
      );
      return res.json({
        success: true,
        message: 'Logged in successfully',
        token,
        user: { id: user._id, name: user.name, email: user.email, role: user.role }
      });
    }

    // Memory fallback check
    const memUser = memoryUsers.find(u => u.email === email.toLowerCase() && u.password === password);
    if (memUser) {
      const token = jwt.sign(
        { id: memUser.id, name: memUser.name, email: memUser.email, role: memUser.role },
        process.env.JWT_SECRET || 'localstore_super_secret_jwt_key_2026',
        { expiresIn: '7d' }
      );
      return res.json({
        success: true,
        message: 'Logged in successfully',
        token,
        user: { id: memUser.id, name: memUser.name, email: memUser.email, role: memUser.role }
      });
    }

    return res.status(401).json({ success: false, message: 'Invalid email or password' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/auth/me
router.get('/me', authMiddleware, async (req, res) => {
  res.json({ success: true, user: req.user });
});

module.exports = router;
