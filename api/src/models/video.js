const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    profesor: {
        type: String
    },
    url: {
        type: String,
        required: true
    },
    duration: {
        type: Number
    }

});

module.exports = mongoose.model('Video', videoSchema);
