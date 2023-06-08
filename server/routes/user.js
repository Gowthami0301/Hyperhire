
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.register(username, password);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    res.json(user);
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

module.exports = router;
