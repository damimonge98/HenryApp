const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//El Schema Empresa puede cambiar y podemos meter empresa y logo en el formulario

const jobSchema = new Schema({
  enterprise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Empresa",
    },
  ],

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  remote: {
    type: Boolean,
  },
  location: {
    type: String,
    required: true,
  },
  tipo: {
    type: String
  },

  end: {
    type: String
  },

  linkedIn: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Empleo", jobSchema);
