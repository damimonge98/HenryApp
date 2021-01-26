const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    },
    lecture:
        { type: Schema.Types.ObjectId, ref: 'Lecture' }

});

module.exports = mongoose.model('Video', videoSchema);
