const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Middleware
async function getUserById(req, res, next) {

  const { id } = req.params;
  let user;

  try {
    user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one user
router.get('/:id', getUserById, (req, res) => {
  res.json(res.user);
});

// Create one user
router.post('/', async (req, res) => {

  const { firstName, lastName } = req.body;
  const user = new User({
    firstName,
    lastName
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update one user
router.patch('/:id', getUserById, async (req, res) => {

  const { firstName, lastName } = req.body;

  if (firstName) {
    res.user.firstName = firstName;
  }
  if (lastName) {
    res.user.lastName = lastName;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete one user
router.delete('/:id', getUserById, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'User has been deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
