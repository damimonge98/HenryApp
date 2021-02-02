const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },

  googleId: {
    type: String,
  },

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  password: {
    type: String,
    select: false, //cuando se hace GET, no trae la contraseña por seguridad.
    required: true
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

  currentModule:{
    type:String,
    enum: ['M0', 'M1', 'M2', 'M3', 'M4' ],
    default: 'M0'
  },

  avatar: {
    type: String
  },

  githubId: {
    type: String,
  }
});

module.exports = mongoose.model('User', userSchema);
