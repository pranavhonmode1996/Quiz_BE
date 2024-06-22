const questionService = require('../../services/admin/Questions.service');
const questionSchema = require('../../models/admin/Questions.model');

exports.addQuestion = async (req, res) => {
  try {
    const { error, value } = questionSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .send(`Validation error: ${error.details[0].message}`);
    }
    await questionService.addQuestion(value);
    res.status(200).send('Question added successfully');
  } catch (error) {
    res.status(500).send(`Error adding question: ${error.message}`);
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await questionService.getQuestions();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).send(`Error fetching questions: ${error.message}`);
  }
};
