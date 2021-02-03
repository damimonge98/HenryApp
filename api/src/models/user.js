const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  removed: {
    type: Boolean,
    default: false
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  password: {
    type: String,
    select: false, //cuando se hace GET, no trae la contraseña por seguridad.
  },

  isSuperAdmin: {
    type: Boolean,
    default: false
  },

  role: {
    type: String,
    enum: ['instructor', 'student', 'guest', 'banned'],
    default: 'guest'
  },

  avatar: {
    type: String
  },

  githubId: {
    type: String,
  },

  googleId: {
    type: String,
  },

  githubUsername: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
