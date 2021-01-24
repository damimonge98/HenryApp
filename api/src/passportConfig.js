const User = require('./models/user');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');

module.exports = passport => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (email, password, done) => {
    const userFound = User.findOne({ email }, (err, user) => {
      if (err)
        console.log('ERROR1: ' + err);
      if (!user)
        return done(null, false);
      console.log('password: ' + password);
      console.log('userFound.password: ' + userFound.password);
      bcrypt.compare(password, userFound.pasword, (err, result) => {
        if (err)
          console.log('ERROR2: ' + err);
        if (result === true) {
          return (done(null, user));
        } else {
          return done(null, false);
        }
      });
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
