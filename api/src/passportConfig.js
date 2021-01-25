const User = require('./models/user');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');

module.exports = passport => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match User
      User.findOne({ email })
        .then(user => {
          // Create new User
          if (!user) {
            const newUser = new User({ email, password });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) console.log(err);
                newUser.password = hash;
                newUser
                  .save()
                  .then(user => {
                    return done(null, user);
                  })
                  .catch(err => {
                    return done(null, false, { message: err });
                  });
              });
            });
            // Return other user
          } else {
            // Match password
            User.findOne({ email }).select('password').exec((err, user) => {
              bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) console.log(err);

                if (isMatch) {
                  return done(null, user);
                } else {
                  return done(null, false, { message: 'Wrong password' });
                }
              });
            });
          }
        })
        .catch(err => {
          return done(null, false, { message: err });
        });
    })
  );

  passport.serializeUser((user, cb) => { // Creates cookie
    cb(null, user.id); // with user.id inside
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      cb(err, user);
    });
  });
};
