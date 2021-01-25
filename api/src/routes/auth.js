const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

router.post('/register', (req, res) => {
  const { email, first_name, last_name, password } = req.body;

  User.findOne({ email }, async (err, doc) => {
    try {
      if (doc) res.send('User already exists');

      if (!doc) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          email,
          first_name,
          last_name,
          password: hashedPassword
        });
        await newUser.save();
        res.send(newUser);
      }
    } catch (err) {
      console.log(err);
    }
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: 'No user found' });
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({ errors: err });
      }
      return res.status(200).json({ success: `logged in ${user.id}` });
    });
  })(req, res, next);
});

module.exports = router;
