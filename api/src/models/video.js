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
    lecture: {
        type: Number,
        required: true
    },
    img: {
        type: String
    },
    duration: {
        type: String
    }

});

module.exports = mongoose.model('Video', videoSchema);
