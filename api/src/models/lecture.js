const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lectureSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    default: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGy6GZmHb_SXA/company-logo_200_200/0/1603651276024?e=1619654400&v=beta&t=kRb_lMNqQF3oGVL9IrNYVxKdJf1qDW3FNTRdSeIu4zI'
  },
  description: String,
  video: [{
    type: Schema.Types.ObjectId,
    ref: 'Video'
  }],
  urlLecture: {
    type: String
  },
  modulo: {
    type: Schema.Types.ObjectId,
    ref: 'Module'
  },
  moduloName: {
    type: String,
  }
});

module.exports = mongoose.model('Lecture', lectureSchema);
