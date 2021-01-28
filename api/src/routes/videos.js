const express = require('express');
const router = express.Router();
const Video = require('../models/video');
const Lecture = require('../models/lecture');


// Get all videos;
router.get('/', async (req, res) => {
    try {
        const video = await Video.find();
        res.json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one video
router.get('/:id', (req, res) => {
    const { id } = req.params;
    video = Video.findById(id).then(video => {
        if (!video) {
            return res.status(404).json({ message: 'Cannot find video' });
        } else res.json(video);
    })
        .catch(
            error => res.status(500).json({ message: error.message })
        );
});

// Create one video;
router.post('/:_id', async (req, res) => {
    const { title, profesor, url, img, duration } = req.body;
    const { _id } = req.params;
    const videoLecture = new Video({
        title,
        profesor,
        url,
        img,
        duration,
      });
    const oneLecture = await Lecture.findById(_id);
    videoLecture.lecture = oneLecture;
    await videoLecture.save();
    oneLecture.video = videoLecture;
    await oneLecture.save();
    res.send(videoLecture);
    /* lecture.video = oneLecture;
    try {
        oneLecture.video
        const newVideo = await video.save();
        res.json(newVideo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    } */
});

// Update one Video
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { title, profesor, url, lecture, img, duration } = req.body;
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
    if (lecture) {
        update = { ...update, lecture };
    };
    if (img) {
        update = { ...update, img };
    };
    if (duration) {
        update = { ...update, duration };
    };

    Video.findByIdAndUpdate(id, update, { new: true }).then(video => {
        res.json(video);
    })
        .catch(error => {
            res.status(400).json({ message: error.message });
        });
});

// Delete one video
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Video.findById(id).then(video => {
        video.remove();
        res.json({ message: 'Video has been deleted' });
    }).catch(error => {
        res.status(500).json({ message: error.message });
    });
});

module.exports = router;
