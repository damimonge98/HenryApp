const express = require('express');
const router = express.Router();
const Video = require('../models/video');


// Get all videos;
router.get('/', async (req, res) => {
    try {
        const video = await Video.find();
        res.json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create one video;
router.post('/', async (req, res) => {
    const { title, profesor, url, duration } = req.body;
    const video = new Video({
        title,
        profesor,
        url,
        duration
    });

    try {
        const newVideo = await video.save();
        res.json(newVideo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update one Video
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { title, profesor, url, duration } = req.body;
    let update = {};
    if (title) {
        update = { ...update, title };
    };
    if (profesor) {
        update = { ...update, profesor };
    };
    if (url) {
        update = { ...update, url };
    };
    if (duration) {
        update = { ...update, duration };
    };

    Lecture.findOneAndUpdate(id, update, { new: true }).then(lecture => {
        res.json(lecture);
    })
        .catch(error => {
            res.status(400).json({ message: error.message });
        });
});
/*  
// Delete one lecture
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Lecture.findById(id).then(lecture => {
        lecture.remove();
        res.json({ message: 'Lecture has been deleted' });
    }).catch(error => {
        res.status(500).json({ message: error.message });
    });
});  */

module.exports = router;
