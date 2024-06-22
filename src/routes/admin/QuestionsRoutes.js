const express = require('express');
const questionController = require('../../controllers/admin/Questions.controller');

const router = express.Router();

router.post('/add-question', questionController.addQuestion);
router.get('/questions', questionController.getQuestions);

module.exports = router;
