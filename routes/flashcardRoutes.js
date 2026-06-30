const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcardController');

router.post('/', flashcardController.createFlashcard);
router.get('/:categoryId', flashcardController.getFlashcardsByCategory);

module.exports = router;
