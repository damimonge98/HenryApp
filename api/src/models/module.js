const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true
  },
  lectures: { 
    type: Number, 
    required: true
  },
  description: {
    type: String,
    required: true
  }  
});

module.exports = mongoose.model('Module', moduleSchema);
