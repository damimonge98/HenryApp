const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Module = require('../models/module');
const { isSuperAdmin, isUser } = require('../middlewares/auth');

// Get all users
router.get('/', async (req, res, next) => {
  console.log(req.user);
  // isSuperAdmin(req, res, next);
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//Get users by role
router.get('/:role', (req, res) => {
  const { role } = req.params;
  User.find({ role })
    .then(users => res.json(users))
    .catch(
      error => res.status(500).json({ message: error.message })
    );
});

// Get all Instructors
router.get('/instructors', async (req, res) => {
  try {
    const users = await User.find({ role: "instructor" });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get all students
router.get("/students", async (req, res) => {
  try {
    const students = await User.find({ role: "student" });
    res.json(students);
  }
  catch (error) {
    res.status(500).json({ message: error });
  }
});


// Get one user
router.get('/user/:id', (req, res) => {
  const { id } = req.params;

  User.findById(id).then(user => {
    if (!user || user.removed) {
      return res.status(404).json({ message: 'Cannot find user' });
    } else res.json(user);
  })
    .catch(
      error => res.status(500).json({ message: error.message })
    );
});

// Create one user
router.post('/', async (req, res) => {

  const { email, firstName, lastName, password, isSuperAdmin, role, avatar, currentModule } = req.body;
  const user = new User({
    email,
    firstName,
    lastName,
    password,
    isSuperAdmin,
    role,
    currentModule,
    avatar
  });
  if (user.isSuperAdmin === true || user.role === 'instructor') {
    const allModules = await Module.find().then();
    user.currentModule = allModules.length;

  };

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update one user
router.patch('/user/:id', async (req, res) => {
  const { id } = req.params;

  console.log(req.user);

  User.findByIdAndUpdate(id, req.body, { new: true }).then(user => {
    res.json(user);
  })
    .catch(error => {
      res.status(400).json({ message: error.message });
    });
});


//Ban one user
router.patch('/ban/:id', (req, res) => {
  const { id } = req.params;
  User.findOneAndUpdate(id, { role: 'banned' }, { new: true }).then(user => {
    res.json(user);
  })
    .catch(error => {
      res.status(400).json({ message: error.message });
    });
});

// Delete one user
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  User.findById(id).then(user => {
    user.remove();
    res.json(id);
  }).catch(error => {
    res.status(500).json({ message: error.message });
  });
});




module.exports = router;
