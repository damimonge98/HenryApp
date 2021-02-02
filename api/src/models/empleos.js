const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  enterprise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Empresa",
      required: true,
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

  linkedIn: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Empleo", jobSchema);
