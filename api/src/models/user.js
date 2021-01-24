const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },

  first_name: {
    type: String,
    required: true
  },

  last_name: {
    type: String,
    required: true
  },

  password: {
    type: String,
    select: false, //cuando se hace GET, no trae la contraseña.
    required: true
  },

  is_super_admin: {
    type: Boolean,
    default: false
  },

  role: {
    type: String,
    enum: ['instructor', 'student', 'guest'],
    default: 'guest'
  },

  avatar: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
