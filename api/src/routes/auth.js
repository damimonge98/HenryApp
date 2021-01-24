const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
require('../passportConfig')(passport);
const router = express.Router();
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

  passport.authenticate('local', (err, user, info) => {
    if (err) console.log(err);
    if (!user) res.status(401).send(info);
    else {
      req.logIn(user, err => {
        if (err) console.log(err);
        res.send('Welcome!');
      });
    }
  })(req, res, next);
});

module.exports = router;
