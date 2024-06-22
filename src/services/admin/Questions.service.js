const db = require('../config/firebase');

exports.addQuestion = async (questionData) => {
  const questionRef = db.collection('questions').doc();
  await questionRef.set(questionData);
};

exports.getQuestions = async () => {
  const questionsSnapshot = await db.collection('questions').get();
  const questions = [];
  questionsSnapshot.forEach((doc) => {
    questions.push({ id: doc.id, ...doc.data() });
  });
  return questions;
};
