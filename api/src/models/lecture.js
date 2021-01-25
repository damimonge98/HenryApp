const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imagen: String,
  description: String,
  video: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('Lecture', lectureSchema);
