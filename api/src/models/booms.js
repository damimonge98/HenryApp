const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoomSchema = new Schema({
  info: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Booms', BoomSchema);