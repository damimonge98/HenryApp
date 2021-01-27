const express = require('express');
const { findById } = require('../models/lecture');
const router = express.Router();
const Lecture = require('../models/lecture');
const Module = require('../models/module')

// Get all lectures;
router.get('/', async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.json(lectures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one lecture
router.get('/:id', (req, res) => {
  const { id } = req.params;
  lecture = Lecture.findById(id).then(lecture => {
    if (!lecture) {
      return res.status(404).json({ message: 'Cannot find lecture' });
    } else res.json(lecture);
  })
    .catch(
      error => res.status(500).json({ message: error.message })
    );
});

// Create one lecture for one module;
router.post('/:_id', async (req, res) => {
  const { title, imagen, description, video, modulo } = req.body;
  const lectureForModule = new Lecture({
    title,
    imagen,
    description,
    video,
    modulo
  });
  const module = await Module.findById(req.params._id);
  lectureForModule.modulo = module;
   await lectureForModule.save();
   module.lectures.push(lectureForModule);
   await module.save();
   res.send(lectureForModule);  
 /*  try {
    const newLecture = await lecture.save();
    res.json(newLecture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  } */
});

// Update one lecture
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, video, modulo, imagen } = req.body;
  let update = {};
  if (title) {
    update = { ...update, title };
  };
  if (description) {
    update = { ...update, description };
  };
  if (video) {
    update = { ...update, video };
  };
  if (modulo) {
    update = { ...update, modulo };
  };
  if (imagen) {
    update = { ...update, imagen };
  };

  Lecture.findByIdAndUpdate(id, update, { new: true }).then(lecture => {
    res.json(lecture);
  })
    .catch(error => {
      res.status(400).json({ message: error.message });
    });
});

// Delete one lecture
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Lecture.findById(id).then(lecture => {
    lecture.remove();
    res.json({ message: 'Lecture has been deleted' });
  }).catch(error => {
    res.status(500).json({ message: error.message });
  });
});

module.exports = router;