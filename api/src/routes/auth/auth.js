const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../../models/user');
const { isUser, isAdmin } = require("../../middlewares/auth");
const { JWT_SECRET } = process.env;

router.get("/me", isUser, async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/register', (req, res, next) => {
  const { email, firstName, lastName, password } = req.body;

  User.findOne({ email }, async (err, doc) => {
    try {
      if (doc) res.send('User already exists');

      if (!doc) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          email,
          firstName,
          lastName,
          password: hashedPassword
        });
        await newUser.save();
        res.send({ done: true, msg: "New user registered!" });
      }
    } catch (err) {
      next(err);
    }
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: 'No user found' });
    }

    try {
      const result = await User.findById(user.id);
      return res.json({ token: jwt.sign(JSON.stringify(result), JWT_SECRET), user: result });
    } catch (error) {
      next(error);
    }

  })(req, res, next);
});

router.get('/google', passport.authenticate('google', { scope: ['profile', "email"] }));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  // Successful authentication, redirect to client.
  res.redirect('http://localhost:3000');
});

module.exports = router;
