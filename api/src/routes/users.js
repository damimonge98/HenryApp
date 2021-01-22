const express = require('express');
const router = express.Router();

// Get All Users
router.get('/', (req, res, next) => {
  res.send('Hello World!');
});
// Get One User
router.get('/:id', (req, res, next) => {
});
// Post One User
router.post('/', (req, res, next) => {
});
// Update One User
router.patch('/:id', (req, res, next) => {
});
// Delete One User
router.delete('/:id', (req, res, next) => {
});

module.exports = router;
