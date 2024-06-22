const Joi = require('joi');

const questionSchema = Joi.object({
  question: Joi.string().required(),
  options: Joi.array().items(Joi.string()).min(2).required(),
  correctOption: Joi.string().required(),
});

module.exports = questionSchema;
