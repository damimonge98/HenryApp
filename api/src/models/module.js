const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  lectures: [{
    type: Schema.Types.ObjectId,
    ref: 'Lecture'
  }],
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Module', moduleSchema);
