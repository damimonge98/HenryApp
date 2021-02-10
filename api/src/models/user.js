const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  firstName: {
    type: String
  },

  lastName: {
    type: String
  },

  companyName: {
    type: String
  },

  email: {
    type: String,
    unique: true,
    required: true,
    default: ""
  },

  password: {
    type: String,
    select: false //cuando se hace GET, no trae la contraseña por seguridad.
  },

  role: {
    type: String,
    enum: ['instructor', 'student', 'guest', 'banned', 'company'],
    default: 'guest'
  },

  currentModule: {
    type: Number,
    default: 0
  },

  avatar: {
    type: String
  },

  githubId: {
    type: String
  },

  googleId: {
    type: String
  },

  githubUsername: {
    type: String,
    default: ""
  },

  debt: {
    type: Number,
    default: 0
  },

  verifiedCompany: {
    type: Boolean,
    default: false
  },

  jobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empleo',
  }],

  isSuperAdmin: {
    type: Boolean,
    default: false
  },

  removed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema);
